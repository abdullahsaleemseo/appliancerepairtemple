import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { site } from '@/config/site';
import { applianceOptions } from '@/content/services';
import { normalizePhone, validateLead, type LeadInput } from '@/lib/lead';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

/** Per-instance limiter. Good enough to stop a single bot loop; use Turnstile for real protection. */
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(5000),
    });
    const json = (await res.json()) as { success?: boolean };
    return Boolean(json.success);
  } catch {
    return false;
  }
}

const clip = (v: unknown, n: number) => (typeof v === 'string' ? v.trim().slice(0, n) : '');

const applianceKeys = new Set<string>([...applianceOptions.map((a) => a.key), 'other']);

export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';

  let body: Partial<LeadInput>;
  try {
    body = (await req.json()) as Partial<LeadInput>;
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: pretend success so bots get no signal.
  if (body.company) {
    console.warn(JSON.stringify({ type: 'lead_spam', reason: 'honeypot', ip, at: new Date().toISOString() }));
    return NextResponse.json({ ok: true, leadId: randomUUID() });
  }

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, message: 'Too many requests. Please call us instead.' }, { status: 429 });
  }

  const appliance = applianceKeys.has(String(body.appliance)) ? (body.appliance as LeadInput['appliance']) : '';
  const lead: LeadInput = {
    name: clip(body.name, 80),
    phone: normalizePhone(clip(body.phone, 30)),
    email: clip(body.email, 120),
    zip: clip(body.zip, 5),
    appliance,
    brand: clip(body.brand, 40),
    issue: clip(body.issue, 1000),
    contactTime: clip(body.contactTime, 40),
    consent: body.consent === true,
    formId: clip(body.formId, 60),
    pageUrl: clip(body.pageUrl, 500),
    device: clip(body.device, 20),
    attribution:
      body.attribution && typeof body.attribution === 'object'
        ? Object.fromEntries(Object.entries(body.attribution).map(([k, v]) => [k.slice(0, 40), clip(v, 500)]))
        : null,
  };

  const errors = validateLead(lead);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors, message: 'Please fix the highlighted fields.' }, { status: 422 });
  }

  if (!(await verifyTurnstile(body.turnstileToken, ip))) {
    return NextResponse.json({ ok: false, message: 'Spam check failed. Please try again or call us.' }, { status: 400 });
  }

  const leadId = randomUUID();
  const record = {
    type: 'lead',
    leadId,
    receivedAt: new Date().toISOString(),
    site: site.domain,
    source: 'form',
    formId: lead.formId,
    landingUrl: lead.attribution?.landingUrl || '',
    pageUrl: lead.pageUrl,
    utm: {
      source: lead.attribution?.utm_source || '',
      medium: lead.attribution?.utm_medium || '',
      campaign: lead.attribution?.utm_campaign || '',
      term: lead.attribution?.utm_term || '',
      content: lead.attribution?.utm_content || '',
      gclid: lead.attribution?.gclid || '',
    },
    referrer: lead.attribution?.referrer || '',
    device: lead.device,
    customer: {
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      zip: lead.zip,
      contactTime: lead.contactTime,
    },
    job: { appliance: lead.appliance, brand: lead.brand, issue: lead.issue },
    consent: { given: lead.consent, at: new Date().toISOString(), ip },
    status: 'received' as 'received' | 'forwarded' | 'forward_failed' | 'logged_only',
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
        signal: AbortSignal.timeout(8000),
      });
      record.status = res.ok ? 'forwarded' : 'forward_failed';
    } catch {
      record.status = 'forward_failed';
    }
  } else {
    record.status = 'logged_only';
  }

  // Server log doubles as the lead log. Contact details are masked here; the full record goes to the webhook.
  console.log(
    JSON.stringify({
      ...record,
      customer: { ...record.customer, phone: `***${record.customer.phone.slice(-4)}`, email: record.customer.email ? '***' : '' },
      consent: { ...record.consent, ip: undefined },
    }),
  );

  if (record.status === 'forward_failed') {
    // Keep the full record in the error log so a failed delivery can be recovered by hand.
    console.error(JSON.stringify({ ...record, type: 'lead_forward_failed' }));
    return NextResponse.json(
      { ok: false, message: 'We could not send your request just now. Please call us so we can help right away.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, leadId });
}

import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { site } from '@/config/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const clip = (v: unknown, n: number) => (typeof v === 'string' ? v.trim().slice(0, n) : '');

/**
 * Customer feedback from the Reviews page. Sent to the same webhook as leads with type "feedback".
 * Nothing submitted here is published on the site automatically.
 */
export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  if (body.company) return NextResponse.json({ ok: true });
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, message: 'Too many submissions. Please try again later.' }, { status: 429 });
  }

  const rating = Number(body.rating);
  const feedback = {
    name: clip(body.name, 80),
    town: clip(body.town, 60),
    appliance: clip(body.appliance, 40),
    rating: Number.isInteger(rating) && rating >= 1 && rating <= 5 ? rating : 0,
    message: clip(body.message, 1500),
    mayShare: body.mayShare === true,
  };

  const errors: Record<string, string> = {};
  if (!feedback.rating) errors.rating = 'Please choose a rating.';
  if (feedback.message.length < 10) errors.message = 'Please tell us a little about your experience.';
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors, message: 'Please fix the highlighted fields.' }, { status: 422 });
  }

  const record = { type: 'feedback', id: randomUUID(), receivedAt: new Date().toISOString(), site: site.domain, ...feedback, status: 'logged_only' };

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
  }
  console.log(JSON.stringify(record));

  if (record.status === 'forward_failed') {
    return NextResponse.json({ ok: false, message: 'We could not send your feedback just now. Please try again or call us.' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

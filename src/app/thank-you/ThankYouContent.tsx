'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { canShow, claims, routes, site } from '@/config/site';
import { CallButton } from '@/components/Buttons';
import { Icon } from '@/components/Icon';
import { VerifyTag } from '@/components/Verify';
import { THANK_YOU_KEY } from '@/components/forms/useLeadSubmit';
import { track } from '@/lib/analytics';

const FIRED_KEY = 'tar_lead_tracked';

export function ThankYouContent() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(THANK_YOU_KEY);
      if (!raw) return;
      const lead = JSON.parse(raw) as { name?: string; leadId?: string; appliance?: string; formId?: string };
      if (lead.name) setName(lead.name);
      const id = lead.leadId || 'unknown';
      if (sessionStorage.getItem(FIRED_KEY) !== id) {
        track('generate_lead', { lead_id: id, appliance: lead.appliance, form_id: lead.formId });
        sessionStorage.setItem(FIRED_KEY, id);
      }
    } catch {
      // Without storage the page still confirms the request; the conversion event is skipped.
    }
  }, []);

  const minutes = claims.callbackMinutes;
  const promise = canShow(minutes)
    ? `We usually call back within ${minutes.value} minutes during business hours (Monday to Saturday, 8:00 AM to 8:00 PM).`
    : 'We’ll call you back as soon as we can during business hours.';

  const steps = [
    { title: 'We review your request', text: 'We look at the appliance, the problem and your ZIP code.' },
    { title: 'We call to schedule', text: 'You get a visit window that fits your day.' },
    { title: 'The technician visits', text: 'Diagnosis first, then an explanation of the repair. Work starts after you say yes.' },
  ];

  return (
    <div className="grain relative overflow-hidden bg-ink">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-mint-bright/15 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center lg:py-28">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mint-bright/15 text-mint-bright ring-8 ring-mint-bright/5">
          <Icon name="check" className="h-10 w-10" strokeWidth={2.5} />
        </span>
        <h1 className="h-display mt-8 text-[2.6rem] text-white md:text-6xl">
          Thanks{name ? `, ${name}` : ''}! <span className="accent block text-mint-bright">We got your request.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          {promise}
          {!minutes.verified && canShow(minutes) ? <VerifyTag label="CONFIRM CALLBACK TIME" /> : null}
        </p>

        <ol className="mt-14 grid gap-4 text-left md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="card-dark p-7">
              <span className="font-serif text-4xl italic text-flame-glow">{i + 1}</span>
              <h2 className="mt-3 font-display text-xl font-bold tracking-[-0.02em] text-white">{s.title}</h2>
              <p className="mt-1 text-[15px] text-white/60">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-card bg-white p-8 md:p-10">
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">In a hurry?</h2>
          <p className="mt-2 text-ink-body">Call now and we can usually set a time on the first call.</p>
          <div className="mt-6 flex justify-center">
            <CallButton location="thank_you" label="Call" />
          </div>
        </div>

        <p className="mt-10 text-white/60">
          While you wait:{' '}
          <Link href={routes.blog} className="font-semibold text-white underline decoration-flame underline-offset-4">
            repair tips
          </Link>{' '}
          ·{' '}
          <Link href={routes.faq} className="font-semibold text-white underline decoration-flame underline-offset-4">
            common questions
          </Link>{' '}
          ·{' '}
          <Link href="/" className="font-semibold text-white underline decoration-flame underline-offset-4">
            back to {site.brandName}
          </Link>
        </p>
      </div>
    </div>
  );
}

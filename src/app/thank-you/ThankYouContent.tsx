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
    ? `We’ll call you within ${minutes.value} minutes during business hours.`
    : 'We’ll call you back as soon as we can during business hours.';

  const steps = [
    { title: 'We review your request', text: 'We look at the appliance, the problem and your ZIP code.' },
    { title: 'We call to schedule', text: 'You get a visit window that fits your day.' },
    { title: 'The technician visits', text: 'Diagnosis first, then a price. Work starts after you say yes.' },
  ];

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:py-24">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-trust text-white">
          <Icon name="check" className="h-9 w-9" strokeWidth={2.5} />
        </span>
        <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
          Thanks{name ? `, ${name}` : ''}! We got your request.
        </h1>
        <p className="mt-4 text-lg text-ink-body">
          {promise}
          {!minutes.verified && canShow(minutes) ? <VerifyTag label="CONFIRM CALLBACK TIME" /> : null}
        </p>

        <ol className="mt-12 grid gap-4 text-left md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-card bg-white p-6 shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-heading font-extrabold text-white">{i + 1}</span>
              <h2 className="mt-3 font-heading text-lg font-extrabold text-navy">{s.title}</h2>
              <p className="mt-1 text-[15px] text-ink-body">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-card bg-navy p-8 text-white">
          <h2 className="font-heading text-2xl font-extrabold text-white">In a hurry?</h2>
          <p className="mt-2 text-white/80">Call now and we can usually set a time on the first call.</p>
          <div className="mt-5 flex justify-center">
            <CallButton location="thank_you" label="Call" />
          </div>
        </div>

        <p className="mt-10 text-ink-body">
          While you wait:{' '}
          <Link href={routes.blog} className="font-semibold text-navy underline">
            repair tips
          </Link>{' '}
          ·{' '}
          <Link href={routes.faq} className="font-semibold text-navy underline">
            common questions
          </Link>{' '}
          ·{' '}
          <Link href="/" className="font-semibold text-navy underline">
            back to {site.brandName}
          </Link>
        </p>
      </div>
    </div>
  );
}

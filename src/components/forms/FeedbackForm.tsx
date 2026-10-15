'use client';

import { useState } from 'react';
import { site } from '@/config/site';
import { areas } from '@/content/areas';
import { applianceOptions } from '@/content/services';
import { track } from '@/lib/analytics';
import { Icon } from '../Icon';
import { Honeypot, SelectField, TextArea, TextField } from './Fields';

const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'];

export function FeedbackForm() {
  const [f, setF] = useState({ name: '', town: '', appliance: '', rating: 0, message: '', mayShare: false, company: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const set = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => setF((p) => ({ ...p, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!f.rating) errs.rating = 'Please choose a rating.';
    if (f.message.trim().length < 10) errs.message = 'Please tell us a little about your experience.';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/feedback/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
      const json = (await res.json()) as { ok: boolean; message?: string; errors?: Record<string, string> };
      if (json.ok) {
        setStatus('sent');
        track('feedback_submit', { rating: f.rating });
      } else {
        setErrors(json.errors || {});
        setMessage(json.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setMessage('Something went wrong. Please try again or call us.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="card p-8 text-center" role="status">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mint-bright/15 text-mint">
          <Icon name="check" className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em] text-ink">Thank you for your feedback.</h3>
        <p className="mt-2 text-ink-body">It goes straight to the {site.brandName} team, and we read every one.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="card relative space-y-5 p-7 md:p-9">
      <fieldset>
        <legend className="block text-[14px] font-semibold text-ink">How was your experience?</legend>
        <div className="mt-2 flex flex-wrap items-center gap-1.5" role="radiogroup" aria-describedby={errors.rating ? 'fb-rating-error' : undefined}>
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="cursor-pointer">
              <input type="radio" name="rating" value={n} checked={f.rating === n} onChange={() => set('rating', n)} className="peer sr-only" />
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition peer-focus-visible:ring-4 peer-focus-visible:ring-flame/25 ${
                  f.rating >= n ? 'border-flame bg-flame-soft text-flame' : 'border-sand bg-white text-ink-muted hover:border-ink'
                }`}
              >
                <Icon name="star" className={`h-5 w-5 ${f.rating >= n ? 'fill-current' : ''}`} strokeWidth={1.6} />
                <span className="sr-only">{n} out of 5, {ratingLabels[n]}</span>
              </span>
            </label>
          ))}
          {f.rating ? <span className="ml-2 text-sm font-medium text-ink">{ratingLabels[f.rating]}</span> : null}
        </div>
        {errors.rating ? (
          <p id="fb-rating-error" className="mt-1.5 text-sm font-medium text-red-700" role="alert">
            {errors.rating}
          </p>
        ) : null}
      </fieldset>

      <TextArea
        id="fb-message"
        label="Tell us about it"
        hint="What was wrong, how the visit went, anything we could do better."
        value={f.message}
        onChange={(e) => set('message', e.target.value)}
        error={errors.message}
        maxLength={1500}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="fb-name" label="Your name" optional autoComplete="name" value={f.name} onChange={(e) => set('name', e.target.value)} maxLength={80} />
        <SelectField
          id="fb-town"
          label="Town"
          optional
          value={f.town}
          onChange={(e) => set('town', e.target.value)}
          options={[{ value: '', label: 'Choose' }, { value: site.city, label: site.city }, ...areas.map((a) => ({ value: a.name, label: a.name })), { value: 'Other', label: 'Other' }]}
        />
      </div>
      <SelectField
        id="fb-appliance"
        label="Appliance"
        optional
        value={f.appliance}
        onChange={(e) => set('appliance', e.target.value)}
        options={[{ value: '', label: 'Choose' }, ...applianceOptions.map((a) => ({ value: a.label, label: a.label })), { value: 'Other', label: 'Other' }]}
      />

      <label className="flex items-start gap-3 text-[14px] leading-relaxed text-ink-body">
        <input type="checkbox" checked={f.mayShare} onChange={(e) => set('mayShare', e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 rounded accent-[#C2500C]" />
        You may share my comments on this website with my first name and town.
      </label>

      <Honeypot value={f.company} onChange={(v) => set('company', v)} />

      {status === 'error' && message ? (
        <p className="text-sm font-medium text-red-700" role="alert">
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-flame px-7 font-semibold text-white transition hover:bg-flame-hover disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Send feedback'}
      </button>
    </form>
  );
}

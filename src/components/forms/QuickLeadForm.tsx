'use client';

import { useCallback, useId, useState } from 'react';
import { applianceOptions } from '@/content/services';
import type { ApplianceKey } from '@/content/types';
import { btn } from '../Buttons';
import { Consent, Honeypot, SelectField, TextArea, TextField, callbackNote } from './Fields';
import { Turnstile } from './Turnstile';
import { useLeadSubmit } from './useLeadSubmit';

type Props = {
  formId: string;
  title?: string;
  defaultAppliance?: ApplianceKey;
  showIssue?: boolean;
  dark?: boolean;
};

/** Short request form for sidebars and CTA bands. */
export function QuickLeadForm({ formId, title, defaultAppliance, showIssue = true, dark = false }: Props) {
  const uid = useId().replace(/:/g, '');
  const { errors, status, message, submit, onStart } = useLeadSubmit(formId);
  const [f, setF] = useState({
    name: '',
    phone: '',
    zip: '',
    appliance: (defaultAppliance ?? '') as ApplianceKey | 'other' | '',
    issue: '',
    consent: false,
    company: '',
    turnstileToken: '',
  });
  const set = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => setF((prev) => ({ ...prev, [k]: v }));
  const onToken = useCallback((t: string) => setF((prev) => ({ ...prev, turnstileToken: t })), []);

  return (
    <form
      noValidate
      onFocus={onStart}
      onSubmit={(e) => {
        e.preventDefault();
        void submit(f);
      }}
      className={`relative space-y-4 rounded-xl2 bg-white p-6 sm:p-7 ${dark ? 'shadow-glow' : 'border border-sand shadow-card'}`}
      aria-labelledby={title ? `${uid}-title` : undefined}
    >
      {title ? (
        <div className="flex items-center justify-between gap-3">
          <h2 id={`${uid}-title`} className="font-display text-2xl font-bold tracking-[-0.025em] text-ink">
            {title}
          </h2>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mint-soft px-2.5 py-1 text-[12px] font-semibold text-mint">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-mint" />
            Free quote
          </span>
        </div>
      ) : null}
      <TextField id={`${uid}-name`} label="Name" autoComplete="name" value={f.name} onChange={(e) => set('name', e.target.value)} error={errors.name} />
      <TextField
        id={`${uid}-phone`}
        label="Phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={f.phone}
        onChange={(e) => set('phone', e.target.value)}
        error={errors.phone}
      />
      <div className="grid grid-cols-2 gap-3">
        <TextField
          id={`${uid}-zip`}
          label="ZIP code"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={5}
          value={f.zip}
          onChange={(e) => set('zip', e.target.value.replace(/\D/g, ''))}
          error={errors.zip}
        />
        <SelectField
          id={`${uid}-appliance`}
          label="Appliance"
          value={f.appliance}
          onChange={(e) => set('appliance', e.target.value as ApplianceKey)}
          error={errors.appliance}
          options={[{ value: '', label: 'Choose' }, ...applianceOptions.map((a) => ({ value: a.key, label: a.label })), { value: 'other', label: 'Other' }]}
        />
      </div>
      {showIssue ? (
        <TextArea
          id={`${uid}-issue`}
          label="What’s it doing?"
          optional
          rows={3}
          maxLength={1000}
          value={f.issue}
          onChange={(e) => set('issue', e.target.value)}
          error={errors.issue}
        />
      ) : null}
      <Honeypot value={f.company} onChange={(v) => set('company', v)} />
      <Consent id={`${uid}-consent`} checked={f.consent} onChange={(v) => set('consent', v)} error={errors.consent} />
      <Turnstile onToken={onToken} />
      <button type="submit" className={`${btn.primary} w-full`} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request a Callback'}
      </button>
      <p className="text-center text-[13px] text-ink-muted">{callbackNote}</p>
      {message ? (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-800" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}

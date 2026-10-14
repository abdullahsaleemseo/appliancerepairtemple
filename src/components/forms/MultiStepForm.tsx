'use client';

import { useCallback, useId, useRef, useState } from 'react';
import { applianceOptions } from '@/content/services';
import type { ApplianceKey } from '@/content/types';
import { contactTimes, validateLead } from '@/lib/lead';
import { btn } from '../Buttons';
import { Icon } from '../Icon';
import { PhoneLink } from '../PhoneLink';
import { Consent, Honeypot, SelectField, TextArea, TextField, callbackNote } from './Fields';
import { Turnstile } from './Turnstile';
import { useLeadSubmit } from './useLeadSubmit';

const brandOptions = ['Whirlpool', 'GE', 'Samsung', 'LG', 'Frigidaire', 'Maytag', 'KitchenAid', 'Bosch', 'Kenmore', 'Other', 'Not sure'];

const steps = ['Appliance', 'Brand', 'Problem', 'Your details'];

/** Four short steps, one question per screen. Converts better on phones than one long form. */
export function MultiStepForm({ defaultAppliance }: { defaultAppliance?: ApplianceKey }) {
  const uid = useId().replace(/:/g, '');
  const { errors, setErrors, status, message, submit, onStart } = useLeadSubmit('request_service_multistep');
  const [step, setStep] = useState(defaultAppliance ? 1 : 0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [f, setF] = useState({
    appliance: (defaultAppliance ?? '') as ApplianceKey | 'other' | '',
    brand: '',
    issue: '',
    contactTime: contactTimes[0],
    name: '',
    phone: '',
    email: '',
    zip: '',
    consent: false,
    company: '',
    turnstileToken: '',
  });
  const set = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => setF((prev) => ({ ...prev, [k]: v }));
  const onToken = useCallback((t: string) => setF((prev) => ({ ...prev, turnstileToken: t })), []);

  const go = (n: number) => {
    setStep(n);
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const next = () => {
    if (step === 0 && !f.appliance) {
      setErrors({ appliance: 'Please choose an appliance.' });
      return;
    }
    setErrors({});
    go(step + 1);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < steps.length - 1) return next();
    const found = validateLead(f);
    if (found.appliance) {
      setErrors(found);
      go(0);
      return;
    }
    await submit(f);
  };

  const progress = ((step + 1) / steps.length) * 100;
  const headingCls = 'font-heading text-2xl font-extrabold text-navy outline-none';

  return (
    <form noValidate onSubmit={onSubmit} onFocus={onStart} className="relative rounded-card bg-white p-5 shadow-card ring-1 ring-slate-100 sm:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm font-semibold text-ink-muted">
          <span>
            Step {step + 1} of {steps.length}
          </span>
          <span>{steps[step]}</span>
        </div>
        <div
          className="mt-2 h-2 overflow-hidden rounded-full bg-surface"
          role="progressbar"
          aria-label="Form progress"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={step + 1}
        >
          <div className="h-full rounded-full bg-brand transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {step === 0 ? (
        <fieldset>
          <legend className="contents">
            <h2 ref={headingRef} tabIndex={-1} className={headingCls}>
              Which appliance needs repair?
            </h2>
          </legend>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[...applianceOptions, { key: 'other' as const, label: 'Other', icon: 'tool' as const }].map((a) => {
              const selected = f.appliance === a.key;
              return (
                <button
                  key={a.key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    set('appliance', a.key);
                    setErrors({});
                    go(1);
                  }}
                  className={`flex min-h-[96px] flex-col items-center justify-center gap-2 rounded-xl border-2 p-3 text-[15px] font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${
                    selected ? 'border-brand bg-brand-light text-navy' : 'border-slate-200 text-ink hover:border-navy'
                  }`}
                >
                  <Icon name={a.icon} className="h-8 w-8 text-navy" />
                  {a.label}
                </button>
              );
            })}
          </div>
          {errors.appliance ? (
            <p className="mt-3 text-sm font-medium text-red-700" role="alert">
              {errors.appliance}
            </p>
          ) : null}
        </fieldset>
      ) : null}

      {step === 1 ? (
        <fieldset>
          <legend className="contents">
            <h2 ref={headingRef} tabIndex={-1} className={headingCls}>
              What brand is it?
            </h2>
          </legend>
          <p className="mt-1 text-ink-body">Usually printed on the front. Skip it if you are not sure.</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {brandOptions.map((b) => (
              <button
                key={b}
                type="button"
                aria-pressed={f.brand === b}
                onClick={() => {
                  set('brand', b);
                  go(2);
                }}
                className={`min-h-[52px] rounded-xl border-2 px-3 text-[15px] font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${
                  f.brand === b ? 'border-brand bg-brand-light text-navy' : 'border-slate-200 text-ink hover:border-navy'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <div className="space-y-4">
          <h2 ref={headingRef} tabIndex={-1} className={headingCls}>
            What’s wrong with it?
          </h2>
          <TextArea
            id={`${uid}-issue`}
            label="Describe the problem"
            hint="For example: fridge side warm, freezer fine, clicking sound. Include any error code."
            rows={4}
            maxLength={1000}
            value={f.issue}
            onChange={(e) => set('issue', e.target.value)}
            error={errors.issue}
          />
          <SelectField
            id={`${uid}-time`}
            label="Best time to call you"
            value={f.contactTime}
            onChange={(e) => set('contactTime', e.target.value)}
            options={contactTimes.map((t) => ({ value: t, label: t }))}
          />
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-4">
          <h2 ref={headingRef} tabIndex={-1} className={headingCls}>
            Where should we call you?
          </h2>
          <TextField id={`${uid}-name`} label="Name" autoComplete="name" value={f.name} onChange={(e) => set('name', e.target.value)} error={errors.name} />
          <div className="grid gap-4 sm:grid-cols-2">
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
          </div>
          <TextField
            id={`${uid}-email`}
            label="Email"
            optional
            type="email"
            autoComplete="email"
            value={f.email}
            onChange={(e) => set('email', e.target.value)}
            error={errors.email}
          />
          <Honeypot value={f.company} onChange={(v) => set('company', v)} />
          <Consent id={`${uid}-consent`} checked={f.consent} onChange={(v) => set('consent', v)} error={errors.consent} />
          <Turnstile onToken={onToken} />
          <p className="text-sm text-ink-muted">{callbackNote}</p>
        </div>
      ) : null}

      {message ? (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-800" role="alert">
          {message}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <button type="button" onClick={() => go(step - 1)} className={`${btn.secondary} sm:w-auto`}>
            Back
          </button>
        ) : (
          <span className="text-sm text-ink-muted">
            Rather talk? <PhoneLink location="request_form" className="font-bold text-navy underline" />
          </span>
        )}
        {step === 1 || step === 2 ? (
          <button type="button" onClick={next} className={btn.navy}>
            {step === 1 && !f.brand ? 'Skip' : 'Next'}
          </button>
        ) : null}
        {step === 3 ? (
          <button type="submit" className={btn.primary} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Request My Callback'}
          </button>
        ) : null}
      </div>
    </form>
  );
}

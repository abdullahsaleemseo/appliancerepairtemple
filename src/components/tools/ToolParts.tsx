'use client';

import { useEffect, useRef, useState } from 'react';
import { toolConfig } from '@/config/tools';
import { safetySignByKey, safetySigns } from '@/content/tools/safety';
import type { SafetySign, Urgency } from '@/content/tools/types';
import { urgencyInfo } from '@/lib/tools/shared';
import { CallButton, btn } from '@/components/Buttons';
import { Icon } from '@/components/Icon';

export type Option = { value: string; label: string; hint?: string };

/**
 * Card-style radio or checkbox group. Native inputs keep keyboard and screen reader behavior;
 * the card styling follows the input state.
 */
export function OptionGrid({
  name,
  legend,
  options,
  value,
  onChange,
  multiple = false,
  columns = 2,
  hideLegend = false,
  exclusive,
}: {
  name: string;
  legend: string;
  options: Option[];
  value: string | string[];
  onChange: (v: string | string[]) => void;
  multiple?: boolean;
  columns?: 1 | 2 | 3;
  hideLegend?: boolean;
  /** For checkbox groups: selecting this value clears the others, and the others clear it. */
  exclusive?: string;
}) {
  const selected = Array.isArray(value) ? value : value ? [value] : [];
  const cols = columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : columns === 2 ? 'sm:grid-cols-2' : '';
  const toggle = (v: string) => {
    if (!multiple) return onChange(v);
    if (exclusive && v === exclusive) return onChange(selected.includes(v) ? [] : [v]);
    const base = selected.filter((s) => s !== exclusive);
    onChange(base.includes(v) ? base.filter((s) => s !== v) : [...base, v]);
  };
  return (
    <fieldset>
      <legend className={hideLegend ? 'sr-only' : 'mb-3 font-display text-[17px] font-semibold text-ink'}>{legend}</legend>
      <div className={`grid gap-3 ${cols}`}>
        {options.map((o) => {
          const checked = selected.includes(o.value);
          return (
            <label
              key={o.value}
              className={`relative flex min-h-[56px] cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3.5 transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-flame ${
                checked ? 'border-flame bg-flame-soft shadow-card' : 'border-sand bg-white hover:border-ink/30'
              }`}
            >
              <input
                type={multiple ? 'checkbox' : 'radio'}
                name={name}
                value={o.value}
                checked={checked}
                onChange={() => toggle(o.value)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 ${multiple ? 'rounded-md' : 'rounded-full'} ${
                  checked ? 'border-flame bg-flame text-white' : 'border-ink/25 bg-white'
                }`}
              >
                {checked ? <Icon name="check" className="h-3 w-3" strokeWidth={3.2} /> : null}
              </span>
              <span>
                <span className="block text-[16px] font-semibold leading-snug text-ink">{o.label}</span>
                {o.hint ? <span className="mt-0.5 block text-[14px] text-ink-muted">{o.hint}</span> : null}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/** Always-visible reminder above each tool. */
export function SafetyBanner() {
  return (
    <div role="note" className="mb-5 flex gap-3 rounded-2xl border border-[#F4C7C3] bg-[#FDF1F0] px-4 py-3.5 text-[15px] text-[#7A1A12] print:hidden">
      <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} />
      <p>
        <strong className="font-semibold">Gas smell, smoke, sparks, a shock, a burning smell or water near wiring?</strong> Stop here and
        switch the appliance off at the breaker. For gas, leave the house and call 911 or the gas company from outside.
      </p>
    </div>
  );
}

/** Checkbox list of danger signs used inside the tools. */
export function SafetySignPicker({ value, onChange, legend }: { value: SafetySign[]; onChange: (v: SafetySign[]) => void; legend: string }) {
  return (
    <OptionGrid
      name="safety-signs"
      legend={legend}
      multiple
      options={safetySigns.map((s) => ({ value: s.key, label: s.label }))}
      value={value}
      onChange={(v) => onChange(v as SafetySign[])}
    />
  );
}

/** Replaces every ordinary result when a danger sign is reported. */
export function CriticalResult({
  signs,
  location,
  appliance,
  steps = [],
}: {
  signs: SafetySign[];
  location: string;
  appliance: string;
  /** Steps for a problem that is unsafe in itself (for example cracked cooktop glass), used when no sign was ticked. */
  steps?: string[];
}) {
  return (
    <div className="rounded-xl2 border-2 border-[#B42318] bg-[#FDF1F0] p-6 sm:p-8">
      <p className="inline-flex items-center gap-2 rounded-full bg-[#B42318] px-3 py-1 text-[13px] font-bold uppercase tracking-[0.12em] text-white">
        <Icon name="shield" className="h-4 w-4" strokeWidth={2.2} />
        Stop use now
      </p>
      <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.025em] text-[#7A1A12] sm:text-3xl">
        Safety first: leave the {appliance} off
      </h3>
      <p className="mt-2 text-[16px] text-[#7A1A12]">
        What you described can be dangerous, so this tool is not giving repair guidance for it. Take these steps now:
      </p>
      <ul className="mt-5 space-y-3">
        {signs.map((s) => (
          <li key={s} className="rounded-2xl bg-white p-4 text-[15px] text-ink-body">
            <strong className="block font-semibold text-ink">{safetySignByKey[s].label}</strong>
            {safetySignByKey[s].action}
          </li>
        ))}
        {signs.length ? null : (
          <>
            <li className="rounded-2xl bg-white p-4 text-[15px] text-ink-body">Switch the {appliance} off at the breaker or the control, and unplug it if you can reach the plug safely.</li>
            {steps.map((t) => (
              <li key={t} className="rounded-2xl bg-white p-4 text-[15px] text-ink-body">
                {t}
              </li>
            ))}
          </>
        )}
      </ul>
      <p className="mt-5 text-[15px] text-[#7A1A12]">
        Once everyone is safe and the appliance is off, call to describe what happened. {toolConfig.emergencyMessage}
      </p>
      <div className="mt-5">
        <CallButton location={`${location}_critical`} label={toolConfig.cta.urgent} />
      </div>
    </div>
  );
}

export function UrgencyBadge({ urgency }: { urgency: Urgency }) {
  const tone = {
    monitor: 'bg-mint-soft text-mint',
    soon: 'bg-frost-soft text-ink',
    today: 'bg-flame-soft text-flame-hover',
    stop: 'bg-[#B42318] text-white',
  }[urgency];
  return <span className={`inline-flex rounded-full px-3 py-1 text-[13px] font-bold uppercase tracking-[0.1em] ${tone}`}>{urgencyInfo[urgency].label}</span>;
}

/** Call prompt after a result, worded for the urgency. */
export function ResultCta({ urgency, location, text }: { urgency: Urgency; location: string; text?: string }) {
  const copy: Record<Urgency, { title: string; body: string }> = {
    monitor: { title: 'Want a second opinion?', body: 'Call, pick the appliance and enter your ZIP code to describe what you are seeing to a technician.' },
    soon: { title: 'Plan the repair', body: 'Call, pick the appliance and enter your ZIP code. Have the model number and these results in front of you.' },
    today: { title: 'Do not let this wait', body: 'Call now, pick the appliance and enter your ZIP code. Say it is urgent and describe what you found.' },
    stop: { title: 'Keep it off, then call', body: 'Leave the appliance switched off. Call, pick the appliance and enter your ZIP code, and say it is urgent.' },
  };
  const c = copy[urgency];
  return (
    <div className="grain relative mt-8 overflow-hidden rounded-xl2 bg-ink p-6 text-white sm:p-8 print:hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame/30 blur-[80px]" />
      <h3 className="relative font-display text-2xl font-bold tracking-[-0.025em] text-white">{c.title}</h3>
      <p className="relative mt-2 max-w-xl text-white/70">{text ?? c.body}</p>
      <div className="relative mt-5">
        <CallButton location={`${location}_result`} label={toolConfig.cta.primary} className="w-full sm:w-auto" />
      </div>
    </div>
  );
}

export function ToolDisclaimer() {
  return (
    <p className="mt-6 rounded-2xl border border-sand bg-canvas px-4 py-3 text-[14px] text-ink-body">
      <strong className="font-semibold text-ink">Please note:</strong> This is general guidance and an estimate only; an on-site inspection may be
      required. Turn the power off before any check, and leave anything that needs panels removed to a technician.
    </p>
  );
}

/** Restart, copy or share, and optional print controls under a result. */
export function ResultActions({
  onRestart,
  onClear,
  shareText,
  onPrint,
}: {
  onRestart: () => void;
  onClear: () => void;
  shareText: string;
  onPrint?: () => void;
}) {
  const [status, setStatus] = useState('');
  const share = async () => {
    const text = `${shareText}\n\n${window.location.href}`;
    try {
      if (navigator.share && window.matchMedia('(pointer: coarse)').matches) {
        await navigator.share({ title: document.title, text });
        setStatus('Shared.');
        return;
      }
      await navigator.clipboard.writeText(text);
      setStatus('Copied to the clipboard.');
    } catch {
      setStatus('Copy did not work in this browser. Select the text and copy it instead.');
    }
  };
  return (
    <div className="mt-8 print:hidden">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={share} className={btn.secondary}>
          <Icon name="chat" className="h-5 w-5" />
          Copy or share result
        </button>
        {onPrint ? (
          <button type="button" onClick={onPrint} className={btn.secondary}>
            <Icon name="check" className="h-5 w-5" />
            Print / Save as PDF
          </button>
        ) : null}
        <button type="button" onClick={onRestart} className={btn.secondary}>
          <Icon name="arrow" className="h-5 w-5 rotate-180" />
          Start over
        </button>
        <button type="button" onClick={onClear} className="min-h-[52px] px-3 text-[15px] font-medium text-ink-muted underline underline-offset-4 hover:text-ink">
          Clear answers
        </button>
      </div>
      <p className="mt-3 text-[14px] text-ink-muted" aria-live="polite">
        {status}
      </p>
    </div>
  );
}

/** Result heading: takes focus once when the result appears, so screen readers announce it. */
export function ResultHeading({ children, id }: { children: React.ReactNode; id: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <h2
      id={id}
      tabIndex={-1}
      ref={ref}
      className="font-display text-[28px] font-bold leading-tight tracking-[-0.03em] text-ink focus:outline-none sm:text-4xl"
    >
      {children}
    </h2>
  );
}

/** Compact pill-style radio group for short answers such as age or usage. */
export function ChipGroup({
  name,
  legend,
  options,
  value,
  onChange,
}: {
  name: string;
  legend: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-[14px] font-semibold text-ink">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const checked = value === o.value;
          return (
            <label
              key={o.value}
              className={`relative inline-flex min-h-[44px] cursor-pointer items-center rounded-full border px-4 text-[15px] font-medium transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-flame ${
                checked ? 'border-flame bg-flame text-white' : 'border-sand bg-white text-ink hover:border-ink/30'
              }`}
            >
              <input type="radio" name={name} value={o.value} checked={checked} onChange={() => onChange(o.value)} className="sr-only" />
              {o.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/** Native select with a visible label. */
export function SelectField({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = 'Choose one',
}: {
  id: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-ink">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[48px] w-full rounded-xl border border-sand bg-white px-4 text-[16px] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/** Labeled text input. Values are cleaned before use and only ever rendered as text. */
export function TextField({
  id,
  label,
  value,
  onChange,
  hint,
  placeholder,
  maxLength = 40,
  inputMode,
  multiline = false,
  invalid = false,
  autoComplete = 'off',
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: React.ReactNode;
  placeholder?: string;
  maxLength?: number;
  inputMode?: 'text' | 'numeric';
  multiline?: boolean;
  invalid?: boolean;
  autoComplete?: string;
}) {
  const cls =
    'w-full rounded-xl border bg-white px-4 py-3 text-[16px] text-ink placeholder:text-ink-muted/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame ' +
    (invalid ? 'border-[#B42318]' : 'border-sand');
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-ink">
        {label}
      </label>
      {multiline ? (
        <textarea id={id} value={value} onChange={(e) => onChange(e.target.value)} maxLength={maxLength} rows={3} placeholder={placeholder} aria-describedby={hint ? `${id}-hint` : undefined} className={cls} />
      ) : (
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          placeholder={placeholder}
          inputMode={inputMode}
          autoComplete={autoComplete}
          spellCheck={false}
          aria-invalid={invalid || undefined}
          aria-describedby={hint ? `${id}-hint` : undefined}
          className={`${cls} min-h-[48px]`}
        />
      )}
      {hint ? (
        <p id={`${id}-hint`} className="mt-2 text-[14px] text-ink-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

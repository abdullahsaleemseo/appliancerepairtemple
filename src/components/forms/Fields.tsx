'use client';

import Link from 'next/link';
import { routes, site } from '@/config/site';

const inputCls =
  'mt-1.5 block w-full rounded-xl border border-sand bg-canvas/60 px-4 py-3.5 text-base text-ink placeholder:text-ink-muted/60 transition focus:border-ink focus:bg-white focus:outline-none focus:ring-4 focus:ring-flame/15 aria-[invalid=true]:border-red-600 aria-[invalid=true]:ring-red-600/15';

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  hint?: string;
  children?: React.ReactNode;
};

export function FieldShell({ id, label, error, optional, hint, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[14px] font-semibold text-ink">
        {label}
        {optional ? <span className="font-normal text-ink-muted"> (optional)</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-0.5 text-sm text-ink-muted">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  id,
  label,
  error,
  optional,
  hint,
  ...rest
}: FieldProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const describedBy = [hint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ') || undefined;
  return (
    <FieldShell id={id} label={label} error={error} optional={optional} hint={hint}>
      <input id={id} className={inputCls} aria-invalid={error ? true : undefined} aria-describedby={describedBy} {...rest} />
    </FieldShell>
  );
}

export function TextArea({
  id,
  label,
  error,
  optional,
  hint,
  ...rest
}: FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const describedBy = [hint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ') || undefined;
  return (
    <FieldShell id={id} label={label} error={error} optional={optional} hint={hint}>
      <textarea id={id} className={`${inputCls} min-h-[96px]`} aria-invalid={error ? true : undefined} aria-describedby={describedBy} {...rest} />
    </FieldShell>
  );
}

export function SelectField({
  id,
  label,
  error,
  optional,
  options,
  ...rest
}: FieldProps & React.SelectHTMLAttributes<HTMLSelectElement> & { options: { value: string; label: string }[] }) {
  return (
    <FieldShell id={id} label={label} error={error} optional={optional}>
      <select
        id={id}
        className={inputCls}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

/** Off-screen field that people never see. Bots that fill it are dropped by the API. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      <label>
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
}

export function Consent({
  id,
  checked,
  onChange,
  error,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
}) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 rounded accent-[#C2500C] focus:ring-2 focus:ring-flame/40"
        />
        <label htmlFor={id} className="text-[13px] leading-relaxed text-ink-muted">
          I agree that {site.brandName} may call or text me at the number above about this request. Consent is not a condition of purchase. Message and data rates may apply. See our{' '}
          <Link href={routes.privacy} className="font-semibold text-ink underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const callbackNote = 'Submitting this form requests a callback. It does not guarantee an appointment.';

'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { toolConfig } from '@/config/tools';
import { btn } from '@/components/Buttons';
import { Icon } from '@/components/Icon';

export type WizardStep = {
  key: string;
  title: string;
  hint?: string;
  /** True when the step's required answers are complete. */
  valid: boolean;
  /** Message shown next to the step when Continue is pressed too early. */
  error?: string;
  optional?: boolean;
  content: React.ReactNode;
};

/**
 * Shared step-by-step shell for the tools: step counter, progress bar, Back and Continue,
 * validation next to the field, a short loading state and a Clear answers control.
 * The parent owns the answers and the step index so they can be kept in sessionStorage.
 */
export function Wizard({
  label,
  steps,
  step,
  onStep,
  onFinish,
  onClear,
  finishLabel = 'See results',
}: {
  label: string;
  steps: WizardStep[];
  step: number;
  onStep: (n: number) => void;
  onFinish: () => void;
  onClear: () => void;
  finishLabel?: string;
}) {
  const id = useId();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  const [tried, setTried] = useState(false);
  const [loading, setLoading] = useState(false);
  const current = steps[Math.min(step, steps.length - 1)];
  const last = step >= steps.length - 1;
  const pct = Math.round(((step + 1) / steps.length) * 100);
  const errorId = `${id}-error`;

  useEffect(() => {
    setTried(false);
    if (moved.current) headingRef.current?.focus();
  }, [step]);

  useEffect(() => {
    if (!loading) return;
    const t = window.setTimeout(() => {
      setLoading(false);
      onFinish();
    }, toolConfig.resultDelayMs);
    return () => window.clearTimeout(t);
  }, [loading, onFinish]);

  const next = () => {
    if (!current.valid) {
      setTried(true);
      document.getElementById(errorId)?.focus();
      return;
    }
    moved.current = true;
    if (last) setLoading(true);
    else onStep(step + 1);
  };

  const back = () => {
    moved.current = true;
    onStep(Math.max(0, step - 1));
  };

  return (
    <div className="rounded-xl2 border border-sand bg-white p-5 shadow-lift sm:p-8" role="group" aria-label={label}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-flame">
          Step {step + 1} of {steps.length}
          {current.optional ? <span className="ml-2 font-medium normal-case tracking-normal text-ink-muted">(optional)</span> : null}
        </p>
        <button type="button" onClick={onClear} className="text-[14px] font-medium text-ink-muted underline underline-offset-4 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame">
          Clear answers
        </button>
      </div>
      <div
        className="mt-3 h-2 overflow-hidden rounded-full bg-canvas-2"
        role="progressbar"
        aria-label="Progress"
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-valuenow={step + 1}
        aria-valuetext={`Step ${step + 1} of ${steps.length}: ${current.title}`}
      >
        <div className="h-full rounded-full bg-flame motion-safe:transition-[width] motion-safe:duration-300" style={{ width: `${pct}%` }} />
      </div>

      <div key={current.key} className="motion-safe:animate-stepIn">
        <h2 ref={headingRef} tabIndex={-1} className="mt-7 font-display text-2xl font-bold tracking-[-0.025em] text-ink focus:outline-none sm:text-[28px]">
          {current.title}
        </h2>
        {current.hint ? <p className="mt-2 text-[15px] text-ink-body">{current.hint}</p> : null}
        <div className="mt-6">{current.content}</div>
        <p
          id={errorId}
          tabIndex={-1}
          role="alert"
          className={`mt-4 rounded-xl bg-[#FDECEA] px-4 py-3 text-[15px] font-medium text-[#8A1C12] focus:outline-none ${tried && !current.valid ? '' : 'hidden'}`}
        >
          {tried && !current.valid ? current.error ?? 'Please answer this step to continue.' : ''}
        </p>
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-sand pt-6 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <button type="button" onClick={back} className={`${btn.secondary} sm:w-auto`}>
            <Icon name="chevron" className="h-4 w-4 rotate-90" strokeWidth={2.2} />
            Back
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}
        <button
          type="button"
          onClick={next}
          aria-disabled={!current.valid || loading}
          aria-describedby={tried && !current.valid ? errorId : undefined}
          className={`${btn.primary} ${current.valid ? '' : 'cursor-not-allowed opacity-50 shadow-none hover:translate-y-0 hover:bg-flame'}`}
        >
          {loading ? 'Preparing results' : last ? finishLabel : 'Continue'}
          {loading ? null : <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {loading ? 'Preparing your results.' : ''}
      </p>
    </div>
  );
}

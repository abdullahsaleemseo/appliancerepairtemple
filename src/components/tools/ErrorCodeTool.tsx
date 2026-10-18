'use client';

import { useCallback, useMemo } from 'react';
import { appliances, applianceByKey, brandByKey, brandsByAppliance } from '@/content/tools/appliances';
import type { BrandKey, SafetySign, ToolApplianceKey } from '@/content/tools/types';
import { codeExamples, decoderSeverity, lookupCode, normalizeCode, otherBrandsWithCode } from '@/lib/tools/errorCodes';
import { cleanText, detectSafetySigns, partsLabel, severityInfo } from '@/lib/tools/shared';
import { ChipGroup, CriticalResult, OptionGrid, ResultActions, ResultCta, ResultHeading, SafetyBanner, SafetySignPicker, TextField, ToolDisclaimer } from './ToolParts';
import { useSessionState } from './useSessionState';
import { Wizard } from './Wizard';

type State = {
  step: number;
  done: boolean;
  appliance: string;
  brand: string;
  code: string;
  model: string;
  notes: string;
  repeat: string;
  signs: SafetySign[];
};

const initial: State = { step: 0, done: false, appliance: '', brand: '', code: '', model: '', notes: '', repeat: '', signs: [] };

const severityTone = {
  low: 'bg-mint-soft text-mint',
  medium: 'bg-frost-soft text-ink',
  high: 'bg-flame-soft text-flame-hover',
  critical: 'bg-[#B42318] text-white',
};

export function ErrorCodeTool() {
  const [s, setS, clear] = useSessionState<State>('art-tool-error-codes', initial);
  const set = (patch: Partial<State>) => setS((prev) => ({ ...prev, ...patch }));
  const finish = useCallback(() => setS((prev) => ({ ...prev, done: true })), [setS]);

  const appliance = s.appliance ? applianceByKey[s.appliance as ToolApplianceKey] : null;
  const brandKeys = appliance ? brandsByAppliance[appliance.key] : [];
  const code = normalizeCode(s.code);
  const examples = appliance && s.brand ? codeExamples(appliance.key, s.brand as BrandKey) : [];

  const result = useMemo(() => {
    if (!s.done || !appliance || !s.brand) return null;
    const brand = s.brand as BrandKey;
    const notes = cleanText(s.notes);
    const signs = Array.from(new Set([...s.signs, ...detectSafetySigns(notes)]));
    const found = lookupCode(appliance.key, brand, code);
    return { brand, signs, found, severity: decoderSeverity(found, signs), others: found ? [] : otherBrandsWithCode(appliance.key, brand, code) };
  }, [s.done, s.signs, s.notes, s.brand, appliance, code]);

  if (s.done && result && appliance) {
    const brandName = brandByKey[result.brand].name;
    const label = result.brand === 'other' ? appliance.short : `${brandName} ${appliance.short}`;
    const model = cleanText(s.model, 30);
    const restart = () => set({ done: false, step: 0 });
    const shareLines = result.found
      ? [`${label} error code ${code}: ${result.found.record.title}`, `Severity: ${severityInfo[result.found.severity].label}`, `Next step: ${result.found.nextStep}`]
      : [`${label} error code ${code}: not in the decoder database. Check the owner manual or arrange a diagnosis.`];

    return (
      <div className="rounded-xl2 border border-sand bg-white p-5 shadow-lift sm:p-8" aria-live="polite">
        <p className="eyebrow text-flame">
          {label} code {code}
        </p>
        <div className="mt-3">
          <ResultHeading id="decoder-result">
            {result.severity === 'critical' && result.signs.length
              ? 'Stop: safety comes before the code'
              : result.found
                ? result.found.record.title
                : 'This code is not in the decoder yet'}
          </ResultHeading>
        </div>

        {result.signs.length ? (
          <div className="mt-6">
            <CriticalResult signs={result.signs} location="tool_decoder" appliance={appliance.short} />
          </div>
        ) : result.found ? (
          <>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em]">
              <span className={`rounded-full px-3 py-1 ${severityTone[result.found.severity]}`}>Severity: {severityInfo[result.found.severity].label}</span>
              <span className="rounded-full bg-canvas px-3 py-1 text-ink">
                Repair level: parts {partsLabel[result.found.parts[0]].toLowerCase()} to {partsLabel[result.found.parts[1]].toLowerCase()}
              </span>
              <span className="rounded-full bg-canvas px-3 py-1 text-ink">{result.found.diy ? 'Homeowner check may clear it' : 'Technician repair likely'}</span>
            </div>
            <dl className="mt-8 grid gap-4 md:grid-cols-2">
              <ResultBlock title="What this code usually means">{result.found.meaning}</ResultBlock>
              <ResultBlock title="Most likely cause">{result.found.cause}</ResultBlock>
              <ResultBlock title="Safe first checks">
                <ul className="list-disc space-y-1.5 pl-5">
                  {result.found.firstChecks.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </ResultBlock>
              <ResultBlock title="When to stop using the appliance">{result.found.stopUse}</ResultBlock>
              <ResultBlock title="Recommended next step" wide>
                {result.found.nextStep}
                {s.repeat === 'repeat' ? ' The code keeps coming back, so a diagnosis is more useful than another reset.' : ''}
              </ResultBlock>
            </dl>
            <p className="mt-4 text-[13.5px] text-ink-muted">
              Code meanings can differ between model lines and years. {result.found.record.source}
            </p>
          </>
        ) : (
          <div className="mt-6 space-y-4 text-ink-body">
            <p>
              This code is not currently in this tool&rsquo;s database, or it may vary by model. Rather than guess, here is what to do next:
            </p>
            <ul className="prose-copy">
              <li>Write down the exact model number{model ? ` (you entered ${model})` : ''}. It is usually on a label inside the door, on the frame or on the back.</li>
              <li>Look the code up in the owner manual or the manufacturer&rsquo;s support pages for that model.</li>
              <li>Switch the appliance off for a minute and on again. If the code returns, arrange a professional diagnosis.</li>
            </ul>
            {result.others.length ? (
              <p className="rounded-2xl bg-canvas px-4 py-3 text-[15px]">
                {code} appears in this database for {result.others.map((b) => brandByKey[b].name).join(', ')} {appliance.short}s, but codes mean different things
                across brands, so it is not shown here as your answer.
              </p>
            ) : null}
          </div>
        )}

        <ToolDisclaimer />
        <ResultActions onRestart={restart} onClear={clear} shareText={shareLines.join('\n')} />
        {result.signs.length ? null : (
          <ResultCta
            urgency={result.found ? severityInfo[result.found.severity].urgency : 'soon'}
            location="tool_decoder"
            text={
              result.found
                ? undefined
                : `Call, pick the appliance and enter your ZIP code. Read out the code ${code} and the model number so a technician can look it up.`
            }
          />
        )}
      </div>
    );
  }

  const steps = [
    {
      key: 'appliance',
      title: 'Which appliance is showing the code?',
      valid: !!appliance,
      error: 'Choose the appliance.',
      content: (
        <OptionGrid
          name="appliance"
          legend="Appliance"
          hideLegend
          columns={3}
          options={appliances.map((a) => ({ value: a.key, label: a.name }))}
          value={s.appliance}
          onChange={(v) => set({ appliance: v as string, brand: '' })}
        />
      ),
    },
    {
      key: 'brand',
      title: `Which brand is the ${appliance?.short ?? 'appliance'}?`,
      hint: 'Codes are brand specific, so this matters.',
      valid: !!s.brand && brandKeys.includes(s.brand as BrandKey),
      error: 'Choose the brand, or "Other or not sure".',
      content: (
        <OptionGrid
          name="brand"
          legend="Brand"
          hideLegend
          columns={3}
          options={brandKeys.map((b) => ({ value: b, label: brandByKey[b].name }))}
          value={s.brand}
          onChange={(v) => set({ brand: v as string })}
        />
      ),
    },
    {
      key: 'code',
      title: 'Type the code exactly as it shows',
      hint: 'Letters and numbers only, with any hyphen. Spaces and capitals do not matter.',
      valid: code.replace(/[\s-]/g, '').length > 0,
      error: 'Enter the code from the display.',
      content: (
        <TextField
          id="error-code"
          label="Error code"
          value={s.code}
          onChange={(v) => set({ code: v.slice(0, 16) })}
          maxLength={16}
          placeholder={examples[0] ?? 'E21'}
          hint={
            examples.length ? (
              <>
                Examples for this appliance: {examples.join(', ')}.
                {code ? (
                  <>
                    {' '}
                    Reads as <strong className="font-semibold text-ink">{code}</strong>.
                  </>
                ) : null}
              </>
            ) : (
              'For example E21, F5 E2 or Er IF.'
            )
          }
        />
      ),
    },
    {
      key: 'details',
      title: 'Anything else worth knowing?',
      hint: 'Optional, but it sharpens the answer.',
      optional: true,
      valid: true,
      content: (
        <div className="space-y-6">
          <TextField id="model" label="Model number (optional)" value={s.model} onChange={(v) => set({ model: v })} maxLength={30} placeholder="WM3400CW" />
          <TextField
            id="notes"
            label="What else is it doing? (optional)"
            value={s.notes}
            onChange={(v) => set({ notes: v })}
            maxLength={300}
            multiline
            placeholder="Beeps and stops halfway through the cycle"
            hint="Stays in this browser tab. Nothing is sent anywhere."
          />
          <ChipGroup
            name="repeat"
            legend="Has the code shown up before?"
            options={[
              { value: 'once', label: 'First time' },
              { value: 'repeat', label: 'It keeps coming back' },
            ]}
            value={s.repeat}
            onChange={(v) => set({ repeat: v })}
          />
          <SafetySignPicker legend="Tick anything happening right now" value={s.signs} onChange={(v) => set({ signs: v })} />
        </div>
      ),
    },
  ];

  return (
    <>
      <SafetyBanner />
      <Wizard label="Error code decoder" steps={steps} step={s.step} onStep={(n) => set({ step: n })} onFinish={finish} onClear={clear} finishLabel="Decode" />
    </>
  );
}

function ResultBlock({ title, children, wide = false }: { title: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={`rounded-2xl border border-sand bg-canvas/50 p-5 ${wide ? 'md:col-span-2' : ''}`}>
      <dt className="font-display text-[17px] font-bold text-ink">{title}</dt>
      <dd className="mt-2 text-[15.5px] leading-relaxed text-ink-body">{children}</dd>
    </div>
  );
}

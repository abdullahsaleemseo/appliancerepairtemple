'use client';

import { useCallback, useMemo } from 'react';
import { appliances, applianceByKey, brandByKey, brandsByAppliance } from '@/content/tools/appliances';
import { issuesByAppliance } from '@/content/tools/issues';
import type { AgeBand, BrandKey, OperatingStatus, SafetySign, ToolApplianceKey } from '@/content/tools/types';
import { levelFor } from '@/lib/tools/cost';
import { diagnose, statusOptions } from '@/lib/tools/diagnose';
import { ageOptions, formatHours, urgencyInfo } from '@/lib/tools/shared';
import { CriticalResult, OptionGrid, ResultActions, ResultCta, ResultHeading, SafetyBanner, SafetySignPicker, ToolDisclaimer, UrgencyBadge } from './ToolParts';
import { useSessionState } from './useSessionState';
import { Wizard } from './Wizard';

type State = {
  step: number;
  done: boolean;
  appliance: string;
  brand: string;
  issue: string;
  also: string[];
  age: string;
  status: string;
  signs: SafetySign[];
};

const initial: State = { step: 0, done: false, appliance: '', brand: '', issue: '', also: [], age: '', status: '', signs: [] };

export function SymptomTool() {
  const [s, setS, clear] = useSessionState<State>('art-tool-symptoms', initial);
  const set = (patch: Partial<State>) => setS((prev) => ({ ...prev, ...patch }));
  const finish = useCallback(() => setS((prev) => ({ ...prev, done: true })), [setS]);

  const appliance = s.appliance ? applianceByKey[s.appliance as ToolApplianceKey] : null;
  const issues = appliance ? issuesByAppliance[appliance.key] : [];
  const issue = issues.find((i) => i.id === s.issue) ?? null;
  const brandKeys = appliance ? brandsByAppliance[appliance.key] : [];
  const others = issues.filter((i) => i.id !== s.issue);

  const result = useMemo(() => {
    if (!s.done || !issue || !s.brand) return null;
    return diagnose({
      issue,
      also: issues.filter((i) => s.also.includes(i.id) && i.id !== issue.id),
      brand: s.brand as BrandKey,
      age: (s.age || 'unknown') as AgeBand,
      status: (s.status || 'poor') as OperatingStatus,
      signs: s.status === 'unsafe' ? s.signs : [],
    });
  }, [s.done, s.brand, s.also, s.age, s.status, s.signs, issue, issues]);

  if (s.done && result && issue && appliance) {
    const brand = brandByKey[s.brand as BrandKey];
    const label = brand.key === 'other' ? appliance.short : `${brand.name} ${appliance.short}`;
    const restart = () => set({ done: false, step: 0 });
    const summary = [
      `Symptom check: ${label}, ${issue.label.toLowerCase()}`,
      `Urgency: ${urgencyInfo[result.urgency].label}`,
      ...result.causes.map((c, i) => `${i + 1}. ${c.title}`),
      `Repair level: ${result.cost.total.level}`,
    ].join('\n');

    return (
      <div className="rounded-xl2 border border-sand bg-white p-5 shadow-lift sm:p-8" aria-live="polite">
        <p className="eyebrow text-flame">
          {label}: {issue.label.toLowerCase()}
        </p>
        <div className="mt-3">
          <ResultHeading id="symptom-result">{result.critical ? 'Stop using it for now' : 'What is most likely going on'}</ResultHeading>
        </div>

        {result.critical ? (
          <div className="mt-6">
            <CriticalResult
              signs={s.status === 'unsafe' ? s.signs : []}
              steps={issue.safeChecks}
              location="tool_symptoms"
              appliance={appliance.short}
            />
          </div>
        ) : (
          <>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <UrgencyBadge urgency={result.urgency} />
              <span className="text-[15px] text-ink-body">{urgencyInfo[result.urgency].text}</span>
            </div>

            <h3 className="mt-8 font-display text-xl font-bold text-ink">Likely causes, most likely first</h3>
            <ol className="mt-4 space-y-3">
              {result.causes.map((c, i) => (
                <li key={c.id} className="flex gap-4 rounded-2xl border border-sand bg-canvas/50 p-4 sm:p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display font-bold text-white">{i + 1}</span>
                  <div>
                    <p className="font-display text-[18px] font-semibold text-ink">{c.title}</p>
                    <p className="mt-1 text-[15px] text-ink-body">{c.why}</p>
                    {c.reasons.length ? <p className="mt-1 text-[14px] text-ink-muted">{c.reasons.join(' ')}</p> : null}
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-[13.5px] text-ink-muted">These are possibilities ranked from your answers, not a confirmed fault. A technician confirms it on site.</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-sand p-5">
                <h3 className="font-display text-[17px] font-bold text-ink">Safe checks you can do</h3>
                <p className="mt-1 text-[14px] text-ink-muted">Power off or unplugged first.</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] text-ink-body">
                  {result.safeChecks.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-sand p-5">
                <h3 className="font-display text-[17px] font-bold text-ink">Leave these to a technician</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] text-ink-body">
                  {result.proOnly.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-canvas p-5 text-[15px] text-ink-body">
              <p>
                <strong className="font-semibold text-ink">Approximate repair level: {result.cost.total.level}.</strong> {levelFor(result.cost.total.points[1]).note}{' '}
                Typical labour: {formatHours(result.cost.labour.hours).toLowerCase()}.
              </p>
              {result.ageNote ? <p className="mt-2">{result.ageNote}</p> : null}
            </div>
          </>
        )}

        <ToolDisclaimer />
        <ResultActions onRestart={restart} onClear={clear} shareText={summary} />
        {result.critical ? null : <ResultCta urgency={result.urgency} location="tool_symptoms" />}
      </div>
    );
  }

  const steps = [
    {
      key: 'appliance',
      title: 'Which appliance is acting up?',
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
          onChange={(v) => set({ appliance: v as string, brand: '', issue: '', also: [] })}
        />
      ),
    },
    {
      key: 'brand',
      title: 'Which brand?',
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
      key: 'symptom',
      title: 'What is the main problem?',
      valid: !!issue,
      error: 'Choose the main symptom.',
      content: <OptionGrid name="symptom" legend="Main symptom" hideLegend options={issues.map((i) => ({ value: i.id, label: i.label }))} value={s.issue} onChange={(v) => set({ issue: v as string, also: s.also.filter((a) => a !== v) })} />,
    },
    {
      key: 'also',
      title: 'Noticed anything else?',
      hint: 'Optional. Extra symptoms change which cause comes first.',
      optional: true,
      valid: true,
      content: <OptionGrid name="also" legend="Other symptoms" hideLegend multiple options={others.map((i) => ({ value: i.id, label: i.label }))} value={s.also} onChange={(v) => set({ also: v as string[] })} />,
    },
    {
      key: 'age',
      title: 'About how old is it?',
      valid: !!s.age,
      error: 'Choose the approximate age, or "Not sure".',
      content: <OptionGrid name="age" legend="Age" hideLegend columns={3} options={ageOptions} value={s.age} onChange={(v) => set({ age: v as string })} />,
    },
    {
      key: 'status',
      title: 'How is it behaving right now?',
      valid: !!s.status && (s.status !== 'unsafe' || s.signs.length > 0),
      error: s.status === 'unsafe' ? 'Tick the sign you noticed so the safety steps match.' : 'Choose how it is running now.',
      content: (
        <div className="space-y-6">
          <OptionGrid name="status" legend="Current status" hideLegend options={statusOptions} value={s.status} onChange={(v) => set({ status: v as string })} />
          {s.status === 'unsafe' ? <SafetySignPicker legend="Which signs?" value={s.signs} onChange={(v) => set({ signs: v })} /> : null}
        </div>
      ),
    },
  ];

  return (
    <>
      <SafetyBanner />
      <Wizard label="Symptom diagnostic tool" steps={steps} step={s.step} onStep={(n) => set({ step: n })} onFinish={finish} onClear={clear} finishLabel="See likely causes" />
    </>
  );
}

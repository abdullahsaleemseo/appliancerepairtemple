'use client';

import { useCallback, useMemo } from 'react';
import { toolConfig } from '@/config/tools';
import { appliances, applianceByKey, brandByKey, brandsByAppliance } from '@/content/tools/appliances';
import { issuesByAppliance } from '@/content/tools/issues';
import type { AgeBand, BrandKey, ToolApplianceKey } from '@/content/tools/types';
import { estimateCost, shareText, verdictInfo, zipStatus } from '@/lib/tools/cost';
import { ageOptions, formatHours } from '@/lib/tools/shared';
import { ChipGroup, CriticalResult, OptionGrid, ResultActions, ResultCta, ResultHeading, SafetyBanner, TextField, ToolDisclaimer } from './ToolParts';
import { useSessionState } from './useSessionState';
import { Wizard } from './Wizard';

type State = { step: number; done: boolean; appliance: string; issue: string; brand: string; age: string; zip: string; build: string; urgent: string };

const initial: State = { step: 0, done: false, appliance: '', issue: '', brand: '', age: '', zip: '', build: '', urgent: '' };

const levelTone: Record<string, string> = {
  Lower: 'bg-mint-soft text-mint',
  Moderate: 'bg-frost-soft text-ink',
  Higher: 'bg-flame-soft text-flame-hover',
  Major: 'bg-ink text-white',
};

export function CostTool() {
  const [s, setS, clear] = useSessionState<State>('art-tool-cost', initial);
  const set = (patch: Partial<State>) => setS((prev) => ({ ...prev, ...patch }));
  const finish = useCallback(() => setS((prev) => ({ ...prev, done: true })), [setS]);

  const appliance = s.appliance ? applianceByKey[s.appliance as ToolApplianceKey] : null;
  const issues = appliance ? issuesByAppliance[appliance.key] : [];
  const issue = issues.find((i) => i.id === s.issue) ?? null;
  const brandKeys = appliance ? brandsByAppliance[appliance.key] : [];
  const zip = zipStatus(s.zip);

  const result = useMemo(() => {
    if (!s.done || !appliance || !issue || !s.brand) return null;
    return estimateCost({
      appliance: appliance.key,
      issue,
      brand: s.brand as BrandKey,
      age: (s.age || 'unknown') as AgeBand,
      zip: s.zip,
      build: (s.build || 'standard') as 'standard' | 'premium' | 'builtin',
      urgent: s.urgent === 'yes',
    });
  }, [s.done, s.brand, s.age, s.zip, s.build, s.urgent, appliance, issue]);

  if (s.done && result && appliance && issue) {
    const brand = brandByKey[s.brand as BrandKey];
    const label = brand.key === 'other' ? appliance.short : `${brand.name} ${appliance.short}`;
    const verdict = verdictInfo[result.replace.verdict];
    const restart = () => set({ done: false, step: 0 });
    const summary = [
      `Repair cost guide: ${label}, ${issue.label.toLowerCase()}`,
      `Likely repair: ${issue.cost.description}`,
      `Parts: ${result.parts.label}. Labour: ${formatHours(result.labour.hours)}.`,
      `Overall repair level: ${result.total.level}`,
      `Repair or replace: ${verdict.title} (${shareText(result.replace.share)})`,
    ].join('\n');

    if (issue.urgency === 'stop') {
      return (
        <div className="rounded-xl2 border border-sand bg-white p-5 shadow-lift sm:p-8" aria-live="polite">
          <ResultHeading id="cost-result">Safety comes before cost</ResultHeading>
          <div className="mt-6">
            <CriticalResult signs={[]} steps={issue.safeChecks} location="tool_cost" appliance={appliance.short} />
          </div>
          <ResultActions onRestart={restart} onClear={clear} shareText={summary} />
        </div>
      );
    }

    const rows = [
      { item: 'Diagnostic or service visit', value: result.visit.label },
      { item: 'Parts', value: result.parts.label },
      { item: 'Labour', value: formatHours(result.labour.hours) },
    ];

    return (
      <div className="rounded-xl2 border border-sand bg-white p-5 shadow-lift sm:p-8" aria-live="polite">
        <p className="eyebrow text-flame">
          {label}: {issue.label.toLowerCase()}
        </p>
        <div className="mt-3">
          <ResultHeading id="cost-result">
            Expected repair level: <span className={`inline-block rounded-xl px-3 ${levelTone[result.total.level]}`}>{result.total.level}</span>
          </ResultHeading>
        </div>
        <p className="mt-3 text-ink-body">
          {result.total.note} Most likely repair: {issue.cost.description.charAt(0).toLowerCase() + issue.cost.description.slice(1)}
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-sand">
          <table className="w-full text-left text-[15px]">
            <caption className="sr-only">Repair cost breakdown</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.14em] text-ink-muted">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold sm:px-6">Item</th>
                <th scope="col" className="px-4 py-3 font-semibold sm:px-6">What to expect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {rows.map((r) => (
                <tr key={r.item}>
                  <th scope="row" className="px-4 py-3.5 font-semibold text-ink sm:px-6">{r.item}</th>
                  <td className="px-4 py-3.5 text-ink-body sm:px-6">{r.value}</td>
                </tr>
              ))}
              {result.modifiers.length ? (
                <tr>
                  <th scope="row" className="px-4 py-3.5 align-top font-semibold text-ink sm:px-6">Adjustments</th>
                  <td className="px-4 py-3.5 text-ink-body sm:px-6">
                    <ul className="space-y-1">
                      {result.modifiers.map((m) => (
                        <li key={m.label}>{m.label}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ) : null}
              <tr className="bg-canvas/60">
                <th scope="row" className="px-4 py-3.5 font-bold text-ink sm:px-6">Estimated total</th>
                <td className="px-4 py-3.5 font-semibold text-ink sm:px-6">{result.total.level} repair level</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[13.5px] text-ink-muted">
          No prices are published on this site. Levels come from the parts and labour a repair like this usually needs; ask the technician for the
          actual price before any work starts.
        </p>

        {!result.zip.inArea ? (
          <p className="mt-4 rounded-2xl bg-frost-soft px-4 py-3 text-[15px] text-ink">
            {result.zip.valid
              ? `ZIP ${s.zip.trim()} is outside the ${toolConfig.defaultCity} area ZIP codes this site lists, so treat this as general guidance and call to check whether a provider covers your address.`
              : 'No valid ZIP code was entered, so this is general guidance for the area.'}
          </p>
        ) : null}

        <section aria-labelledby="replace-heading" className="mt-8 rounded-2xl border border-sand bg-canvas/50 p-5 sm:p-6">
          <h3 id="replace-heading" className="font-display text-xl font-bold text-ink">
            Repair or replace: {verdict.title.charAt(0).toLowerCase() + verdict.title.slice(1)}
          </h3>
          <ShareMeter share={result.replace.share} />
          <p className="mt-3 text-[15px] text-ink-body">The upper repair estimate is {shareText(result.replace.share)}.</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-ink-body">
            {result.replace.reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="mt-3 text-[15px] text-ink-body">{verdict.text} This is guidance, not an instruction.</p>
        </section>

        <ToolDisclaimer />
        <ResultActions onRestart={restart} onClear={clear} shareText={summary} />
        <ResultCta urgency={s.urgent === 'yes' ? 'today' : issue.urgency} location="tool_cost" text="Call, pick the appliance and enter your ZIP code. Ask how the visit and diagnosis are priced before you agree to anything." />
      </div>
    );
  }

  const steps = [
    {
      key: 'appliance',
      title: 'Which appliance needs repair?',
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
          onChange={(v) => set({ appliance: v as string, issue: '', brand: '' })}
        />
      ),
    },
    {
      key: 'issue',
      title: `What is the ${appliance?.short ?? 'appliance'} doing?`,
      hint: 'Pick the closest match.',
      valid: !!issue,
      error: 'Choose the problem that fits best.',
      content: <OptionGrid name="issue" legend="Problem" hideLegend options={issues.map((i) => ({ value: i.id, label: i.label }))} value={s.issue} onChange={(v) => set({ issue: v as string })} />,
    },
    {
      key: 'brand',
      title: 'Which brand?',
      hint: 'High-end brands usually cost more to repair.',
      valid: !!s.brand && brandKeys.includes(s.brand as BrandKey),
      error: 'Choose the brand, or "Other or not sure".',
      content: (
        <OptionGrid
          name="brand"
          legend="Brand"
          hideLegend
          columns={3}
          options={brandKeys.map((b) => ({ value: b, label: brandByKey[b].name, hint: brandByKey[b].tier === 'premium' ? 'Premium brand' : undefined }))}
          value={s.brand}
          onChange={(v) => set({ brand: v as string })}
        />
      ),
    },
    {
      key: 'age-zip',
      title: 'How old is it, and where is it?',
      valid: !!s.age && zip.valid,
      error: !s.age ? 'Choose the approximate age.' : `Enter a 5-digit ZIP code, for example ${toolConfig.postalCode.example}.`,
      content: (
        <div className="space-y-6">
          <ChipGroup name="age" legend="Approximate age" options={ageOptions} value={s.age} onChange={(v) => set({ age: v })} />
          <div className="max-w-xs">
            <TextField
              id="zip"
              label={toolConfig.postalCode.label}
              value={s.zip}
              onChange={(v) => set({ zip: v.replace(/[^\d-]/g, '').slice(0, 10) })}
              maxLength={10}
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder={toolConfig.postalCode.example}
              invalid={s.zip.length >= 5 && !zip.valid}
              hint={s.zip && zip.valid ? (zip.inArea ? 'Inside the listed service ZIP codes.' : 'Outside the listed ZIP codes; the guide still works.') : 'Used only to adjust the guide. It stays in this tab.'}
            />
          </div>
        </div>
      ),
    },
    {
      key: 'build',
      title: 'What kind of model is it?',
      valid: !!s.build,
      error: 'Choose the model type.',
      content: (
        <div className="space-y-6">
          <OptionGrid
            name="build"
            legend="Model type"
            hideLegend
            columns={3}
            options={[
              { value: 'standard', label: 'Standard', hint: 'Freestanding, everyday model' },
              { value: 'premium', label: 'Premium or high-end', hint: 'Pro-style or luxury line' },
              { value: 'builtin', label: 'Built-in or integrated', hint: 'Panel-ready or fitted into cabinets' },
            ]}
            value={s.build}
            onChange={(v) => set({ build: v as string })}
          />
          <ChipGroup
            name="urgent"
            legend="Is it urgent? (optional)"
            options={[
              { value: 'no', label: 'It can wait a few days' },
              { value: 'yes', label: 'I need help today' },
            ]}
            value={s.urgent}
            onChange={(v) => set({ urgent: v })}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <SafetyBanner />
      <Wizard label="Repair cost estimator" steps={steps} step={s.step} onStep={(n) => set({ step: n })} onFinish={finish} onClear={clear} finishLabel="Show the estimate" />
    </>
  );
}

function ShareMeter({ share }: { share: [number, number] }) {
  const lo = Math.min(100, Math.round(share[0] * 100));
  const hi = Math.min(100, Math.round(share[1] * 100));
  return (
    <div className="mt-4" aria-hidden="true">
      <div className="relative h-3 overflow-hidden rounded-full bg-white ring-1 ring-sand">
        <div className="absolute inset-y-0 rounded-full bg-flame/80" style={{ left: `${lo}%`, width: `${Math.max(2, hi - lo)}%` }} />
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-ink/40" />
      </div>
      <div className="mt-1 flex justify-between text-[12px] text-ink-muted">
        <span>0%</span>
        <span>Half of a new unit</span>
        <span>100%</span>
      </div>
    </div>
  );
}

'use client';

import { useCallback, useMemo } from 'react';
import { site } from '@/config/site';
import { PhoneLink } from '@/components/PhoneLink';
import { appliances, applianceByKey, brandByKey, brandsByAppliance } from '@/content/tools/appliances';
import type { AgeBand, Concern, EnvFactor, ToolApplianceKey, Usage } from '@/content/tools/types';
import { bucketInfo, generatePlan, planSummary, type BucketKey, type PlanAppliance } from '@/lib/tools/maintenance';
import { ageOptions } from '@/lib/tools/shared';
import { ChipGroup, OptionGrid, ResultActions, ResultCta, ResultHeading, SafetyBanner, SelectField, ToolDisclaimer } from './ToolParts';
import { useSessionState } from './useSessionState';
import { Wizard } from './Wizard';

type Detail = { brand: string; age: string; usage: string; placement: string; variant: string };

type State = {
  step: number;
  done: boolean;
  selected: ToolApplianceKey[];
  details: Partial<Record<ToolApplianceKey, Detail>>;
  env: string[];
  concerns: string[];
  checked: string[];
};

const initial: State = { step: 0, done: false, selected: [], details: {}, env: [], concerns: [], checked: [] };
const emptyDetail: Detail = { brand: '', age: '', usage: '', placement: '', variant: '' };

const envOptions: { value: EnvFactor | 'none'; label: string }[] = [
  { value: 'humid', label: 'Coastal or high humidity' },
  { value: 'hardwater', label: 'Hard water or well water' },
  { value: 'pets', label: 'Pets in the home' },
  { value: 'outdoorkitchen', label: 'Outdoor kitchen' },
  { value: 'outages', label: 'Frequent power outages' },
  { value: 'none', label: 'No special conditions' },
];

const concernOptions: { value: Concern | 'none'; label: string }[] = [
  { value: 'temperature', label: 'Poor cooling or heating' },
  { value: 'leak', label: 'Leaking water' },
  { value: 'noise', label: 'Excess noise' },
  { value: 'odor', label: 'Bad odors or mold' },
  { value: 'performance', label: 'Performance decline' },
  { value: 'frost', label: 'Frost or ice buildup' },
  { value: 'none', label: 'No specific concern' },
];

const usageOptions = [
  { value: 'light', label: 'Light' },
  { value: 'normal', label: 'Normal' },
  { value: 'heavy', label: 'Heavy' },
];

const priorityTone = { high: 'bg-flame-soft text-flame-hover', medium: 'bg-frost-soft text-ink', low: 'bg-canvas text-ink-muted' };

export function MaintenanceTool() {
  const [s, setS, clear] = useSessionState<State>('art-tool-maintenance', initial);
  const set = (patch: Partial<State>) => setS((prev) => ({ ...prev, ...patch }));
  const detail = (k: ToolApplianceKey) => s.details[k] ?? emptyDetail;
  const setDetail = (k: ToolApplianceKey, patch: Partial<Detail>) =>
    setS((prev) => ({ ...prev, details: { ...prev.details, [k]: { ...(prev.details[k] ?? emptyDetail), ...patch } } }));

  const detailsDone = s.selected.every((k) => {
    const d = detail(k);
    const a = applianceByKey[k];
    return d.brand && d.age && d.usage && (!a.askPlacement || d.placement) && (!a.variant || d.variant);
  });

  const items: PlanAppliance[] = s.selected.map((k) => {
    const d = detail(k);
    return {
      appliance: k,
      brand: (d.brand || 'other') as PlanAppliance['brand'],
      age: (d.age || 'unknown') as AgeBand,
      usage: (d.usage || 'normal') as Usage,
      placement: d.placement === 'outdoor' ? 'outdoor' : 'indoor',
      variant: d.variant || undefined,
    };
  });

  const plan = useMemo(
    () =>
      s.done
        ? generatePlan({
            items,
            env: s.env.filter((e) => e !== 'none') as EnvFactor[],
            concerns: s.concerns.filter((c) => c !== 'none') as Concern[],
          })
        : null,
    // items is derived from s, so the answers are the real dependencies.
    [s.done, s.selected, s.details, s.env, s.concerns],
  );

  const finish = useCallback(() => setS((prev) => ({ ...prev, done: true })), [setS]);

  if (s.done && plan) {
    const total = (Object.keys(plan) as BucketKey[]).reduce((n, k) => n + plan[k].length, 0);
    const toggle = (key: string) =>
      set({ checked: s.checked.includes(key) ? s.checked.filter((c) => c !== key) : [...s.checked, key] });
    return (
      <div className="print-area rounded-xl2 border border-sand bg-white p-5 shadow-lift sm:p-8 print:border-0 print:p-0 print:shadow-none" aria-live="polite">
        <p className="mb-4 hidden border-b border-sand pb-3 text-[13px] text-ink-muted print:block">
          {site.brandName} maintenance checklist. Call <PhoneLink location="tool_maintenance_print" /> for appliance repair in {site.city}, {site.stateAbbr}.
        </p>
        <p className="eyebrow text-flame">Your maintenance plan</p>
        <div className="mt-3">
          <ResultHeading id="maintenance-result">
            {total} tasks for {s.selected.length === 1 ? `your ${applianceByKey[s.selected[0]].short}` : `${s.selected.length} appliances`}
          </ResultHeading>
        </div>
        <p className="mt-3 text-ink-body">
          Tick tasks as you finish them; the ticks stay while this tab is open. Intervals already reflect your home, use and the age of each
          appliance.
        </p>
        <p className="mt-2 text-[14px] text-ink-muted print:hidden">
          {s.checked.length} of {total} done
        </p>
        <div className="mt-8 space-y-10">
          {(Object.keys(bucketInfo) as BucketKey[]).map((k) =>
            plan[k].length ? (
              <section key={k} aria-labelledby={`bucket-${k}`}>
                <h3 id={`bucket-${k}`} className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
                  {bucketInfo[k].title}
                </h3>
                <p className="text-[15px] text-ink-muted">{bucketInfo[k].text}</p>
                <ul className="mt-4 space-y-3">
                  {plan[k].map((t) => {
                    const done = s.checked.includes(t.key);
                    return (
                      <li key={t.key} className={`break-inside-avoid rounded-2xl border p-4 sm:p-5 ${done ? 'border-mint/40 bg-mint-soft/50' : 'border-sand bg-white'}`}>
                        <label className="flex cursor-pointer items-start gap-3">
                          <input
                            type="checkbox"
                            checked={done}
                            onChange={() => toggle(t.key)}
                            className="mt-1 h-5 w-5 shrink-0 accent-[#0E8A5F]"
                            aria-describedby={`${t.key}-why`}
                          />
                          <span className="min-w-0">
                            <span className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-muted">{t.applianceLabel}</span>
                            <span className={`block font-display text-[18px] font-semibold leading-snug text-ink ${done ? 'line-through decoration-mint/60' : ''}`}>
                              {t.title}
                            </span>
                          </span>
                        </label>
                        <div className="mt-3 flex flex-wrap gap-2 pl-8 text-[13px] font-semibold">
                          <span className="rounded-full bg-canvas px-3 py-1 text-ink">{t.frequency}</span>
                          <span className={`rounded-full px-3 py-1 ${priorityTone[t.priority]}`}>{t.priority[0].toUpperCase() + t.priority.slice(1)} priority</span>
                          {t.proOnly ? <span className="rounded-full bg-ink px-3 py-1 text-white">Professional only</span> : null}
                        </div>
                        <p id={`${t.key}-why`} className="mt-3 pl-8 text-[15px] text-ink-body">
                          <strong className="font-semibold text-ink">Why it matters:</strong> {t.why}
                        </p>
                        <p className="mt-2 pl-8 text-[15px] text-ink-body">
                          <strong className="font-semibold text-ink">{t.proOnly || !t.diy ? 'Who does it:' : 'How to do it:'}</strong>{' '}
                          {t.proOnly || !t.diy ? 'Professional only. A technician has the tools and training for this one.' : t.diy}
                        </p>
                        {t.adjustments.length ? <p className="mt-2 pl-8 text-[13.5px] text-ink-muted">{t.adjustments.join(' ')}</p> : null}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ) : null,
          )}
        </div>
        <ToolDisclaimer />
        <ResultActions
          onRestart={() => set({ done: false, step: 0, checked: [] })}
          onClear={clear}
          onPrint={() => window.print()}
          shareText={`Appliance maintenance plan\n\n${planSummary(plan)}`}
        />
        <ResultCta
          urgency={plan.now.length ? 'soon' : 'monitor'}
          location="tool_maintenance"
          text={
            plan.pro.length
              ? 'The professional-only tasks on this list are a good reason to call. Pick the appliance, enter your ZIP code and say which service you need.'
              : undefined
          }
        />
      </div>
    );
  }

  const steps = [
    {
      key: 'appliances',
      title: 'Which appliances should the plan cover?',
      hint: 'Pick as many as you like.',
      valid: s.selected.length > 0,
      error: 'Choose at least one appliance.',
      content: (
        <OptionGrid
          name="appliances"
          legend="Appliances"
          hideLegend
          multiple
          columns={3}
          options={appliances.map((a) => ({ value: a.key, label: a.name }))}
          value={s.selected}
          onChange={(v) => set({ selected: v as ToolApplianceKey[] })}
        />
      ),
    },
    {
      key: 'details',
      title: 'A few details about each one',
      hint: 'Brand, age and how hard it works change the intervals.',
      valid: detailsDone,
      error: 'Answer brand, age and usage for every appliance listed.',
      content: (
        <div className="space-y-5">
          {s.selected.map((k) => {
            const a = applianceByKey[k];
            const d = detail(k);
            return (
              <div key={k} className="rounded-2xl border border-sand bg-canvas/60 p-4 sm:p-5">
                <h3 className="font-display text-lg font-bold text-ink">{a.name}</h3>
                <div className="mt-4 grid gap-5 md:grid-cols-2">
                  <SelectField
                    id={`brand-${k}`}
                    label="Brand"
                    options={brandsByAppliance[k].map((b) => ({ value: b, label: brandByKey[b].name }))}
                    value={d.brand}
                    onChange={(v) => setDetail(k, { brand: v })}
                  />
                  {a.variant ? (
                    <ChipGroup name={`variant-${k}`} legend={a.variant.question} options={a.variant.options} value={d.variant} onChange={(v) => setDetail(k, { variant: v })} />
                  ) : null}
                  <ChipGroup name={`age-${k}`} legend="Approximate age" options={ageOptions} value={d.age} onChange={(v) => setDetail(k, { age: v })} />
                  <ChipGroup name={`usage-${k}`} legend="Usage" options={usageOptions} value={d.usage} onChange={(v) => setDetail(k, { usage: v })} />
                  {a.askPlacement ? (
                    <ChipGroup
                      name={`placement-${k}`}
                      legend="Placement"
                      options={[
                        { value: 'indoor', label: 'Indoors' },
                        { value: 'outdoor', label: 'Outdoors or garage' },
                      ]}
                      value={d.placement}
                      onChange={(v) => setDetail(k, { placement: v })}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      key: 'home',
      title: 'Anything about your home that applies?',
      hint: 'Humidity, water hardness and pets all change how fast appliances wear.',
      valid: s.env.length > 0,
      error: 'Pick at least one option, or "No special conditions".',
      content: (
        <OptionGrid name="env" legend="Home conditions" hideLegend multiple exclusive="none" options={envOptions} value={s.env} onChange={(v) => set({ env: v as string[] })} />
      ),
    },
    {
      key: 'concerns',
      title: 'Any problems you have noticed?',
      hint: 'Optional. Tasks linked to a concern move to the top of the plan.',
      valid: true,
      optional: true,
      content: (
        <OptionGrid name="concerns" legend="Concerns" hideLegend multiple exclusive="none" options={concernOptions} value={s.concerns} onChange={(v) => set({ concerns: v as string[] })} />
      ),
    },
  ];

  return (
    <>
      <SafetyBanner />
      <Wizard
        label="Maintenance checklist generator"
        steps={steps}
        step={s.step}
        onStep={(n) => set({ step: n })}
        onFinish={finish}
        onClear={clear}
        finishLabel="Generate checklist"
      />
    </>
  );
}

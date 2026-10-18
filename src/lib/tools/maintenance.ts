import { applianceByKey, brandByKey } from '../../content/tools/appliances';
import { maintenanceTasks } from '../../content/tools/maintenance';
import type { AgeBand, BrandKey, Concern, EnvFactor, MaintenanceTask, ToolApplianceKey, Usage } from '../../content/tools/types';

/**
 * Builds a maintenance plan from the task list in content/tools/maintenance.ts.
 *
 * Interval rules, applied in order:
 * 1. Start from the task's baseMonths.
 * 2. Each matching home factor (and "outdoor" placement, and heavy use) can only shorten it; the shortest wins.
 * 3. Light use stretches non-urgent intervals by half.
 * 4. Units over 10 years old get age-sensitive tasks at high priority and at most a 6 month interval.
 * Tasks linked to a reported concern go to the "Check now" list.
 */

export type PlanAppliance = {
  appliance: ToolApplianceKey;
  brand: BrandKey;
  age: AgeBand;
  usage: Usage;
  placement?: 'indoor' | 'outdoor';
  variant?: string;
};

export type PlanInput = { items: PlanAppliance[]; env: EnvFactor[]; concerns: Concern[] };

export type PlanTask = {
  key: string;
  applianceLabel: string;
  title: string;
  months: number;
  frequency: string;
  why: string;
  diy?: string;
  proOnly: boolean;
  priority: 'low' | 'medium' | 'high';
  /** Why the interval or priority changed from the default. */
  adjustments: string[];
};

export type BucketKey = 'now' | 'monthly' | 'quarterly' | 'annual' | 'pro';

export const bucketInfo: Record<BucketKey, { title: string; text: string }> = {
  now: { title: 'Check now', text: 'Linked to a concern you reported. Start here.' },
  monthly: { title: 'Every use and monthly', text: 'Quick habits that prevent most breakdowns.' },
  quarterly: { title: 'Every 3 to 6 months', text: 'Seasonal checks that keep efficiency up.' },
  annual: { title: 'Once a year', text: 'Deeper cleaning and inspection.' },
  pro: { title: 'Professional service', text: 'Jobs that need a technician and the right tools.' },
};

export type Plan = Record<BucketKey, PlanTask[]>;

const steps = [0, 1, 2, 3, 4, 6, 9, 12, 18, 24];
const snap = (n: number) => steps.reduce((best, s) => (Math.abs(s - n) < Math.abs(best - n) ? s : best), steps[0]);

export function frequencyLabel(months: number): string {
  if (months === 0) return 'Every use or load';
  if (months === 1) return 'Monthly';
  if (months === 12) return 'Once a year';
  if (months === 24) return 'Every 2 years';
  return `Every ${months} months`;
}

const factorLabel: Record<string, string> = {
  humid: 'humid or coastal air',
  hardwater: 'hard or well water',
  pets: 'pet hair',
  outdoorkitchen: 'outdoor kitchen use',
  outages: 'frequent power outages',
  outdoor: 'outdoor placement',
  heavy: 'heavy use',
};

const priorityRank = { high: 0, medium: 1, low: 2 };

export function tasksFor(item: PlanAppliance): MaintenanceTask[] {
  return maintenanceTasks.filter(
    (t) => t.appliance === item.appliance && (!t.variants || !item.variant || t.variants.includes(item.variant)),
  );
}

export function scheduleTask(task: MaintenanceTask, item: PlanAppliance, env: EnvFactor[]) {
  let months = task.baseMonths;
  let priority = task.priority;
  const adjustments: string[] = [];
  const active: string[] = [...env];
  if (item.placement === 'outdoor') active.push('outdoor');
  if (item.usage === 'heavy') active.push('heavy');

  for (const f of active) {
    const v = task.factorMonths?.[f as keyof NonNullable<MaintenanceTask['factorMonths']>];
    if (v !== undefined && v < months) {
      months = v;
      adjustments.push(`More often because of ${factorLabel[f]}.`);
    }
  }
  if (item.usage === 'light' && task.priority !== 'high' && months > 0 && !adjustments.length) {
    const stretched = snap(months * 1.5);
    if (stretched > months) {
      months = stretched;
      adjustments.push('Less often because of light use.');
    }
  }
  if (item.age === '10plus' && task.ageSensitive) {
    if (priority !== 'high') adjustments.push('Higher priority for a unit over 10 years old.');
    priority = 'high';
    if (months > 6) {
      months = 6;
      adjustments.push('Checked more often on an older unit.');
    }
  }
  return { months, priority, adjustments };
}

export function generatePlan(input: PlanInput): Plan {
  const plan: Plan = { now: [], monthly: [], quarterly: [], annual: [], pro: [] };
  input.items.forEach((item, n) => {
    const a = applianceByKey[item.appliance];
    const brand = brandByKey[item.brand];
    const applianceLabel = brand && brand.key !== 'other' ? `${brand.name} ${a.short}` : a.name;
    for (const task of tasksFor(item)) {
      const { months, priority, adjustments } = scheduleTask(task, item, input.env);
      const matched = task.concerns?.filter((c) => input.concerns.includes(c)) ?? [];
      const out: PlanTask = {
        key: `${n}-${task.id}`,
        applianceLabel,
        title: task.title,
        months,
        frequency: frequencyLabel(months),
        why: task.why,
        diy: task.diy,
        proOnly: !!task.proOnly,
        priority: matched.length ? 'high' : priority,
        adjustments: matched.length ? [...adjustments, 'Moved up because of a concern you reported.'] : adjustments,
      };
      const bucket: BucketKey = matched.length ? 'now' : out.proOnly ? 'pro' : months <= 1 ? 'monthly' : months <= 6 ? 'quarterly' : 'annual';
      plan[bucket].push(out);
    }
  });
  for (const k of Object.keys(plan) as BucketKey[]) {
    plan[k].sort((x, y) => priorityRank[x.priority] - priorityRank[y.priority] || x.months - y.months);
  }
  return plan;
}

export function planSummary(plan: Plan): string {
  const lines: string[] = [];
  for (const k of Object.keys(bucketInfo) as BucketKey[]) {
    if (!plan[k].length) continue;
    lines.push(`${bucketInfo[k].title.toUpperCase()}`);
    for (const t of plan[k]) lines.push(`[ ] ${t.applianceLabel}: ${t.title} (${t.frequency}, ${t.priority} priority${t.proOnly ? ', professional only' : ''})`);
    lines.push('');
  }
  return lines.join('\n').trim();
}

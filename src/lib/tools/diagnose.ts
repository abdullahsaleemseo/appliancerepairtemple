import { applianceByKey } from '../../content/tools/appliances';
import type { AgeBand, BrandKey, Issue, IssueCause, OperatingStatus, SafetySign, Urgency } from '../../content/tools/types';
import { estimateCost, type CostResult } from './cost';
import { ageAtLeast, maxUrgency } from './shared';

/**
 * Explainable symptom rules. Each cause starts from its weight in the issue data and gains points
 * for every answer that supports it. The top three are returned with the reasons that moved them,
 * so the result says why, rather than claiming to know the exact fault.
 */

export type DiagnoseInput = {
  issue: Issue;
  /** Other issue ids the visitor ticked. */
  also: Issue[];
  brand: BrandKey;
  age: AgeBand;
  status: OperatingStatus;
  signs: SafetySign[];
};

export type RankedCause = IssueCause & { score: number; reasons: string[] };

export type Diagnosis = {
  critical: boolean;
  causes: RankedCause[];
  urgency: Urgency;
  safeChecks: string[];
  proOnly: string[];
  cost: CostResult;
  /** Shown when the unit is in the later part of its life. */
  ageNote: string | null;
};

export const statusOptions: { value: OperatingStatus; label: string }[] = [
  { value: 'poor', label: 'Still running, but poorly' },
  { value: 'intermittent', label: 'Works on and off, or cycles on and off' },
  { value: 'stopped', label: 'Completely stopped' },
  { value: 'leaking', label: 'Leaking' },
  { value: 'noise', label: 'Making unusual sounds' },
  { value: 'unsafe', label: 'Unsafe signs present (gas, smoke, sparks, burning smell)' },
];

const statusText: Record<OperatingStatus, string> = {
  poor: 'it still runs but poorly',
  intermittent: 'it works on and off',
  stopped: 'it has stopped completely',
  leaking: 'it is leaking',
  noise: 'it is making unusual sounds',
  unsafe: 'unsafe signs are present',
};

const coolingAppliances = new Set(['refrigerator', 'freezer', 'icemaker', 'winecooler']);

export function rankCauses(issue: Issue, also: Issue[], age: AgeBand, status: OperatingStatus): RankedCause[] {
  const ranked = issue.causes.map((c, index) => {
    let score = c.weight;
    const reasons: string[] = [];
    for (const other of also) {
      if (c.boostIf?.issues?.includes(other.id)) {
        score += 2;
        reasons.push(`You also noticed: ${other.label.toLowerCase()}.`);
      }
    }
    if (c.boostIf?.status?.includes(status)) {
      score += 1.5;
      reasons.push(`It fits the fact that ${statusText[status]}.`);
    }
    if (c.boostIf?.ageAtLeast && ageAtLeast(age, c.boostIf.ageAtLeast)) {
      score += 1;
      reasons.push('Parts like this wear with age.');
    }
    return { ...c, score, reasons, index };
  });
  // Ties keep the data order, which lists the most common cause first.
  ranked.sort((a, b) => b.score - a.score || a.index - b.index);
  return ranked.slice(0, 3).map(({ index: _index, ...rest }) => rest);
}

export function diagnose(input: DiagnoseInput): Diagnosis {
  const { issue, status } = input;
  const appliance = applianceByKey[issue.appliance];
  const critical =
    input.signs.length > 0 || status === 'unsafe' || issue.urgency === 'stop' || input.also.some((i) => i.urgency === 'stop');

  let urgency: Urgency = issue.urgency;
  for (const other of input.also) urgency = maxUrgency(urgency, other.urgency);
  if (status === 'leaking') urgency = maxUrgency(urgency, 'today');
  if (status === 'stopped') urgency = maxUrgency(urgency, coolingAppliances.has(issue.appliance) ? 'today' : 'soon');
  if (status === 'intermittent' || status === 'noise' || status === 'poor') urgency = maxUrgency(urgency, 'soon');
  if (critical) urgency = 'stop';

  const cost = estimateCost({ appliance: issue.appliance, issue, brand: input.brand, age: input.age, zip: '', build: 'standard', urgent: false });

  let ageNote: string | null = null;
  if (cost.replace.ageRatio !== null && cost.replace.ageRatio >= 0.7) {
    ageNote = `Most ${appliance.short}s last about ${appliance.lifespanYears[0]} to ${appliance.lifespanYears[1]} years. At this age, compare the repair price with a new unit before you decide.`;
  }

  return {
    critical,
    causes: rankCauses(issue, input.also, input.age, status),
    urgency,
    safeChecks: critical ? [] : issue.safeChecks,
    proOnly: issue.proOnly,
    cost,
    ageNote,
  };
}

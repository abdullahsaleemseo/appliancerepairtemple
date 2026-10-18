import { toolConfig } from '../../config/tools';
import { applianceByKey, brandByKey } from '../../content/tools/appliances';
import type { AgeBand, BrandKey, Issue, PartsLevel, ToolApplianceKey } from '../../content/tools/types';
import { ageMidYears, partsLabel } from './shared';

/**
 * Relative repair-cost model. No currency is involved: every figure is in "cost points" from
 * toolConfig.costModel, and the result is reported as levels and shares.
 *
 *   total = (visit + parts + labour hours x points per hour) x modifiers
 *
 * The same inputs always give the same result.
 */

export type CostInput = {
  appliance: ToolApplianceKey;
  issue: Issue;
  brand: BrandKey;
  age: AgeBand;
  zip: string;
  build: 'standard' | 'premium' | 'builtin';
  urgent: boolean;
};

export type Modifier = { label: string; factor: number };

export type Verdict = 'repair' | 'compare' | 'replace';

export type CostResult = {
  visit: { points: [number, number]; label: string };
  parts: { points: [number, number]; label: string };
  labour: { points: [number, number]; hours: [number, number] };
  modifiers: Modifier[];
  total: { points: [number, number]; level: string; note: string };
  zip: { valid: boolean; inArea: boolean };
  replace: { share: [number, number]; replacementPoints: number; verdict: Verdict; reasons: string[]; ageRatio: number | null };
};

const m = toolConfig.costModel;

const round = (n: number) => Math.round(n * 10) / 10;
const round2 = (n: number) => Math.round(n * 100) / 100;

export function zipStatus(zip: string) {
  const z = zip.trim();
  const valid = toolConfig.postalCode.pattern.test(z);
  const inArea = valid && toolConfig.postalCode.serviceZips.includes(z.slice(0, 5));
  return { valid, inArea };
}

function partsRange([lo, hi]: [PartsLevel, PartsLevel]): [number, number] {
  return [m.partsPoints[lo][0], m.partsPoints[hi][1]];
}

export function levelFor(points: number) {
  return m.levels.find((l) => points <= l.max) ?? m.levels[m.levels.length - 1];
}

export function estimateCost(input: CostInput): CostResult {
  const { issue } = input;
  const appliance = applianceByKey[input.appliance];
  const premium = brandByKey[input.brand].tier === 'premium' || input.build === 'premium';
  const builtIn = input.build === 'builtin';
  const zip = zipStatus(input.zip);

  const visit: [number, number] = [m.visitPoints, m.visitPoints];
  const parts = partsRange(issue.cost.parts);
  const labour: [number, number] = [issue.cost.labourHours[0] * m.labourPointsPerHour, issue.cost.labourHours[1] * m.labourPointsPerHour];

  const modifiers: Modifier[] = [];
  if (premium) modifiers.push({ label: 'Premium or high-end brand: parts and specialist work cost more', factor: m.modifiers.premiumBrand });
  if (builtIn) modifiers.push({ label: 'Built-in or integrated unit: removal and refitting take longer', factor: m.modifiers.builtIn });
  if (input.age === '10plus') modifiers.push({ label: 'Over 10 years old: parts can be harder to source', factor: m.modifiers.age10plus });
  if (input.urgent) modifiers.push({ label: 'Urgent visit requested', factor: m.modifiers.urgent });
  if (zip.valid && !zip.inArea) modifiers.push({ label: 'Outside the listed service ZIP codes: travel may add cost', factor: m.modifiers.outsideServiceZips });
  const cx = m.modifiers.complexity[issue.cost.complexity];
  if (cx !== 1) modifiers.push({ label: `${issue.cost.complexity === 'complex' ? 'Complex' : 'Moderately involved'} repair`, factor: cx });

  const factor = modifiers.reduce((f, x) => f * x.factor, 1);
  const total: [number, number] = [
    round((visit[0] + parts[0] + labour[0]) * factor),
    round((visit[1] + parts[1] + labour[1]) * factor),
  ];
  const level = levelFor(total[1]);

  const replacementPoints = round(
    appliance.replacementPoints * (premium ? m.replacement.premiumBrand : 1) * (builtIn ? m.replacement.builtIn : 1),
  );
  const share: [number, number] = [round2(total[0] / replacementPoints), round2(total[1] / replacementPoints)];

  const mid = ageMidYears[input.age];
  const ageRatio = mid === null ? null : round2(mid / ((appliance.lifespanYears[0] + appliance.lifespanYears[1]) / 2));
  const reasons: string[] = [];
  let verdict: Verdict = 'repair';
  if (share[1] >= m.replaceShare.replace) {
    verdict = 'replace';
    reasons.push('The upper estimate reaches about half the cost of a comparable new unit or more.');
  } else if (share[1] >= m.replaceShare.compare) {
    verdict = 'compare';
    reasons.push('The upper estimate is a sizeable share of a comparable new unit.');
  } else {
    reasons.push('The repair is a small share of what a comparable new unit costs.');
  }
  if (ageRatio !== null && ageRatio >= 1) {
    verdict = verdict === 'repair' ? 'compare' : 'replace';
    reasons.push(`At this age the ${appliance.short} is at or past its typical ${appliance.lifespanYears[0]} to ${appliance.lifespanYears[1]} year life.`);
  } else if (ageRatio !== null && ageRatio >= 0.7 && verdict === 'repair' && share[1] >= m.replaceShare.compare * 0.7) {
    verdict = 'compare';
    reasons.push(`It is in the later part of a typical ${appliance.lifespanYears[0]} to ${appliance.lifespanYears[1]} year life.`);
  } else if (ageRatio !== null && ageRatio < 0.5) {
    reasons.push('It is early in its expected life, which favors repair.');
  } else if (ageRatio === null) {
    reasons.push('The age is unknown; the model or serial number usually shows the build year.');
  }

  return {
    visit: { points: visit, label: 'Standard diagnostic visit' },
    parts: { points: parts, label: issue.cost.parts[0] === issue.cost.parts[1] ? partsLabel[issue.cost.parts[0]] : `${partsLabel[issue.cost.parts[0]]} to ${partsLabel[issue.cost.parts[1]].toLowerCase()}` },
    labour: { points: [round(labour[0]), round(labour[1])], hours: issue.cost.labourHours },
    modifiers,
    total: { points: total, level: level.label, note: level.note },
    zip,
    replace: { share, replacementPoints, verdict, reasons, ageRatio },
  };
}

export const verdictInfo: Record<Verdict, { title: string; text: string }> = {
  repair: { title: 'Repair likely makes sense', text: 'The numbers lean toward repair. Confirm the diagnosis and the price before work starts.' },
  compare: {
    title: 'Compare repair and replacement',
    text: 'It could go either way. Ask the technician for the repair price, then compare it with a new unit and its energy use.',
  },
  replace: {
    title: 'Replacement may be more economical',
    text: 'A new unit may cost less over time. A technician can confirm whether the repair is still worth it for your model.',
  },
};

/** Describes a share of replacement cost in words, for example "about 20 to 35% of a comparable new unit". */
export function shareText([lo, hi]: [number, number]): string {
  const pct = (n: number) => Math.max(1, Math.round(n * 20) * 5);
  const a = pct(lo);
  const b = pct(hi);
  return a === b ? `about ${a}% of a comparable new unit` : `about ${a} to ${b}% of a comparable new unit`;
}

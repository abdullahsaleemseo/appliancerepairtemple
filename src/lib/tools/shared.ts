import { safetyKeywords } from '../../content/tools/safety';
import type { AgeBand, PartsLevel, SafetySign, Severity, Urgency } from '../../content/tools/types';

export const ageOptions: { value: AgeBand; label: string }[] = [
  { value: 'under2', label: 'Under 2 years' },
  { value: '2to5', label: '2 to 5 years' },
  { value: '5to10', label: '5 to 10 years' },
  { value: '10plus', label: '10+ years' },
  { value: 'unknown', label: 'Not sure' },
];

/** Midpoint age in years for each band, used for repair-or-replace guidance. */
export const ageMidYears: Record<AgeBand, number | null> = { under2: 1, '2to5': 3.5, '5to10': 7.5, '10plus': 12, unknown: null };

const ageOrder: Exclude<AgeBand, 'unknown'>[] = ['under2', '2to5', '5to10', '10plus'];

export function ageAtLeast(age: AgeBand, min: Exclude<AgeBand, 'unknown'>): boolean {
  return age !== 'unknown' && ageOrder.indexOf(age) >= ageOrder.indexOf(min);
}

export const urgencyInfo: Record<Urgency, { label: string; rank: number; text: string }> = {
  monitor: { label: 'Monitor', rank: 0, text: 'Safe to keep using while you watch for changes.' },
  soon: { label: 'Schedule soon', rank: 1, text: 'Plan a repair visit before the problem grows.' },
  today: { label: 'Get help today', rank: 2, text: 'Food, water damage or daily use is at stake, so do not wait on this one.' },
  stop: { label: 'Stop use now', rank: 3, text: 'Switch the appliance off and leave it off until a technician checks it.' },
};

export function maxUrgency(a: Urgency, b: Urgency): Urgency {
  return urgencyInfo[a].rank >= urgencyInfo[b].rank ? a : b;
}

export const severityInfo: Record<Severity, { label: string; urgency: Urgency }> = {
  low: { label: 'Low', urgency: 'monitor' },
  medium: { label: 'Medium', urgency: 'soon' },
  high: { label: 'High', urgency: 'today' },
  critical: { label: 'Critical', urgency: 'stop' },
};

export const partsLabel: Record<PartsLevel, string> = {
  none: 'No parts',
  low: 'Low',
  moderate: 'Moderate',
  high: 'High',
  major: 'Major component',
};

/** Trims, strips control characters and caps the length of free text before it is shown back or scanned. */
export function cleanText(input: string, max = 300): string {
  return input
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

/** Danger signs mentioned in free text. */
export function detectSafetySigns(text: string): SafetySign[] {
  const found = safetyKeywords.filter((k) => k.pattern.test(text)).map((k) => k.sign);
  return Array.from(new Set(found));
}

export function formatHours([lo, hi]: [number, number]): string {
  const f = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));
  if (lo === hi) return `About ${f(lo)} hour${lo === 1 ? '' : 's'}`;
  return `${f(lo)} to ${f(hi)} hours`;
}

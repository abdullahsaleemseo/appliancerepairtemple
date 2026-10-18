import type { SafetySign } from './types';

/**
 * Danger signs that override every tool result. When a visitor reports any of these, the tools
 * stop giving repair guidance and show the matching safety steps instead.
 * Edit wording here; the UI and the rule engine read this list.
 */
export const safetySigns: { key: SafetySign; label: string; action: string }[] = [
  {
    key: 'gas',
    label: 'Gas smell (rotten egg odor)',
    action:
      'Do not switch lights or appliances on or off and do not light anything. Leave the house, then call 911 or the gas company from outside.',
  },
  {
    key: 'smoke',
    label: 'Smoke from the appliance',
    action: 'Switch the appliance off at the breaker if you can do so safely. If smoke continues or you see flame, leave and call 911.',
  },
  {
    key: 'sparking',
    label: 'Sparking or arcing',
    action: 'Do not touch the appliance. Switch off its breaker from the panel and keep it off until a technician has checked it.',
  },
  {
    key: 'shock',
    label: 'Electric shock or tingling when touched',
    action: 'Stop touching the appliance and switch off its breaker. Anyone who was shocked and feels unwell should get medical help.',
  },
  {
    key: 'flooding',
    label: 'Active flooding or a leak near electrical parts',
    action:
      'Keep clear of standing water near outlets or cords. Switch off the breaker from a dry spot, then close the water supply valve.',
  },
  {
    key: 'burning',
    label: 'Burning or hot electrical smell',
    action: 'Switch the appliance off at the breaker and unplug it once it is safe. Do not use it again until it has been checked.',
  },
];

export const safetySignByKey = Object.fromEntries(safetySigns.map((s) => [s.key, s])) as Record<
  SafetySign,
  (typeof safetySigns)[number]
>;

/**
 * Words in free-text answers that suggest a danger sign. The decoder treats a match as a critical
 * state even if the visitor did not tick the matching box.
 */
export const safetyKeywords: { sign: SafetySign; pattern: RegExp }[] = [
  { sign: 'gas', pattern: /\b(gas smell|smell(s|ed|ing)? (of )?gas|rotten eggs?|propane smell)\b/i },
  { sign: 'smoke', pattern: /\bsmok(e|ing|y)\b/i },
  { sign: 'sparking', pattern: /\b(spark(s|ed|ing)?|arc(ing|ed)?)\b/i },
  { sign: 'shock', pattern: /\b(shock(ed|s)?|tingl(e|ing))\b/i },
  { sign: 'flooding', pattern: /\b(flood(ed|ing)?|standing water)\b/i },
  { sign: 'burning', pattern: /\b(burn(ing|t)? (smell|odou?r)|smells? (like )?(burning|melting|plastic)|melt(ed|ing))\b/i },
];

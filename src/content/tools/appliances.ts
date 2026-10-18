import type { Appliance, Brand, BrandKey, ToolApplianceKey } from './types';

/**
 * Appliance categories used by all four tools.
 *
 * To add an appliance: add its key to ToolApplianceKey in ./types.ts, add an entry here,
 * list its brands in brandsByAppliance, then add issues (./issues.ts) and maintenance tasks
 * (./maintenance.ts). The UI picks it up automatically.
 *
 * lifespanYears and replacementPoints are approximate planning figures, not prices or claims.
 * Owners can tune them; replacementPoints uses the same relative scale as the repair rules.
 */
export const appliances: Appliance[] = [
  { key: 'refrigerator', name: 'Refrigerator', short: 'refrigerator', lifespanYears: [10, 15], replacementPoints: 34, askPlacement: true },
  { key: 'freezer', name: 'Freezer', short: 'freezer', lifespanYears: [10, 16], replacementPoints: 22, askPlacement: true },
  {
    key: 'washer',
    name: 'Washing Machine',
    short: 'washer',
    lifespanYears: [10, 13],
    replacementPoints: 24,
    variant: { question: 'Washer type', options: [{ value: 'front', label: 'Front-load' }, { value: 'top', label: 'Top-load' }] },
  },
  {
    key: 'dryer',
    name: 'Dryer',
    short: 'dryer',
    lifespanYears: [10, 14],
    replacementPoints: 22,
    mayUseGas: true,
    variant: { question: 'Dryer type', options: [{ value: 'electric', label: 'Electric' }, { value: 'gas', label: 'Gas' }] },
  },
  { key: 'dishwasher', name: 'Dishwasher', short: 'dishwasher', lifespanYears: [9, 12], replacementPoints: 22 },
  {
    key: 'oven',
    name: 'Oven / Range',
    short: 'oven',
    lifespanYears: [13, 17],
    replacementPoints: 28,
    mayUseGas: true,
    variant: { question: 'Fuel type', options: [{ value: 'electric', label: 'Electric' }, { value: 'gas', label: 'Gas' }] },
  },
  {
    key: 'stove',
    name: 'Stove',
    short: 'stove',
    lifespanYears: [13, 17],
    replacementPoints: 24,
    mayUseGas: true,
    variant: { question: 'Fuel type', options: [{ value: 'electric', label: 'Electric' }, { value: 'gas', label: 'Gas' }] },
  },
  {
    key: 'cooktop',
    name: 'Cooktop',
    short: 'cooktop',
    lifespanYears: [13, 18],
    replacementPoints: 22,
    mayUseGas: true,
    variant: {
      question: 'Cooktop type',
      options: [
        { value: 'electric', label: 'Electric' },
        { value: 'induction', label: 'Induction' },
        { value: 'gas', label: 'Gas' },
      ],
    },
  },
  { key: 'microwave', name: 'Microwave', short: 'microwave', lifespanYears: [8, 10], replacementPoints: 12 },
  { key: 'disposal', name: 'Garbage Disposal', short: 'garbage disposal', lifespanYears: [8, 12], replacementPoints: 6 },
  { key: 'icemaker', name: 'Ice Maker', short: 'ice maker', lifespanYears: [8, 10], replacementPoints: 14 },
  { key: 'rangehood', name: 'Range Hood / Vent Hood', short: 'range hood', lifespanYears: [10, 15], replacementPoints: 12 },
  { key: 'winecooler', name: 'Wine Cooler', short: 'wine cooler', lifespanYears: [8, 12], replacementPoints: 18, askPlacement: true },
  { key: 'warmingdrawer', name: 'Warming Drawer', short: 'warming drawer', lifespanYears: [10, 15], replacementPoints: 16 },
  { key: 'compactor', name: 'Trash Compactor', short: 'trash compactor', lifespanYears: [10, 15], replacementPoints: 14 },
  { key: 'coffee', name: 'Built-in Coffee System', short: 'built-in coffee system', lifespanYears: [7, 10], replacementPoints: 30 },
  { key: 'grill', name: 'BBQ / Grill', short: 'grill', lifespanYears: [8, 15], replacementPoints: 20, askPlacement: true, mayUseGas: true },
  { key: 'poolheater', name: 'Pool Heater', short: 'pool heater', lifespanYears: [8, 12], replacementPoints: 32, mayUseGas: true },
];

export const applianceByKey = Object.fromEntries(appliances.map((a) => [a.key, a])) as Record<ToolApplianceKey, Appliance>;

/**
 * Brand list. "premium" brands get the premium-brand modifier in the cost guide (src/config/tools.ts).
 * Trademarks belong to their owners; the names only describe the appliance a visitor owns.
 */
export const brands: Brand[] = [
  { key: 'samsung', name: 'Samsung', tier: 'standard' },
  { key: 'lg', name: 'LG', tier: 'standard' },
  { key: 'whirlpool', name: 'Whirlpool', tier: 'standard' },
  { key: 'ge', name: 'GE', tier: 'standard' },
  { key: 'frigidaire', name: 'Frigidaire', tier: 'standard' },
  { key: 'bosch', name: 'Bosch', tier: 'standard' },
  { key: 'kitchenaid', name: 'KitchenAid', tier: 'standard' },
  { key: 'maytag', name: 'Maytag', tier: 'standard' },
  { key: 'electrolux', name: 'Electrolux', tier: 'standard' },
  { key: 'amana', name: 'Amana', tier: 'standard' },
  { key: 'miele', name: 'Miele', tier: 'premium' },
  { key: 'subzero', name: 'Sub-Zero', tier: 'premium' },
  { key: 'viking', name: 'Viking', tier: 'premium' },
  { key: 'thermador', name: 'Thermador', tier: 'premium' },
  { key: 'kenmore', name: 'Kenmore', tier: 'standard' },
  { key: 'other', name: 'Other or not sure', tier: 'standard' },
];

export const brandByKey = Object.fromEntries(brands.map((b) => [b.key, b])) as Record<BrandKey, Brand>;

const all: BrandKey[] = brands.map((b) => b.key);
const without = (...drop: BrandKey[]) => all.filter((k) => !drop.includes(k));

/** Which brands appear for each appliance. "other" is always last. Edit freely. */
export const brandsByAppliance: Record<ToolApplianceKey, BrandKey[]> = {
  refrigerator: all,
  freezer: without('miele', 'viking', 'thermador', 'bosch'),
  washer: without('subzero', 'viking', 'thermador'),
  dryer: without('subzero', 'viking', 'thermador'),
  dishwasher: without('subzero', 'amana'),
  oven: without('subzero'),
  stove: without('subzero', 'miele', 'bosch'),
  cooktop: without('subzero', 'amana', 'maytag'),
  microwave: without('subzero', 'miele', 'thermador'),
  disposal: ['whirlpool', 'ge', 'kitchenaid', 'kenmore', 'other'],
  icemaker: without('miele', 'thermador', 'bosch', 'maytag', 'amana'),
  rangehood: without('subzero', 'amana', 'maytag', 'kenmore'),
  winecooler: without('maytag', 'amana', 'kenmore', 'whirlpool'),
  warmingdrawer: ['whirlpool', 'ge', 'frigidaire', 'kitchenaid', 'miele', 'subzero', 'viking', 'thermador', 'bosch', 'electrolux', 'other'],
  compactor: ['whirlpool', 'ge', 'kitchenaid', 'kenmore', 'other'],
  coffee: ['miele', 'thermador', 'bosch', 'ge', 'kitchenaid', 'subzero', 'other'],
  grill: ['viking', 'kitchenaid', 'other'],
  poolheater: ['other'],
};

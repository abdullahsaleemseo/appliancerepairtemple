/**
 * Shared types for the four interactive tools (maintenance checklist, error code decoder,
 * repair cost guide and symptom checker). Data files in this folder use these types; the
 * decision logic lives in src/lib/tools and the UI in src/components/tools.
 */

export type ToolApplianceKey =
  | 'refrigerator'
  | 'freezer'
  | 'washer'
  | 'dryer'
  | 'dishwasher'
  | 'oven'
  | 'stove'
  | 'cooktop'
  | 'microwave'
  | 'disposal'
  | 'icemaker'
  | 'rangehood'
  | 'winecooler'
  | 'warmingdrawer'
  | 'compactor'
  | 'coffee'
  | 'grill'
  | 'poolheater';

export type BrandKey =
  | 'samsung'
  | 'lg'
  | 'whirlpool'
  | 'ge'
  | 'frigidaire'
  | 'bosch'
  | 'kitchenaid'
  | 'maytag'
  | 'electrolux'
  | 'amana'
  | 'miele'
  | 'subzero'
  | 'viking'
  | 'thermador'
  | 'kenmore'
  | 'other';

export type BrandTier = 'standard' | 'premium';

export type AgeBand = 'under2' | '2to5' | '5to10' | '10plus' | 'unknown';

/** Relative cost of parts. The site publishes no prices, so costs are shown as levels, not currency. */
export type PartsLevel = 'none' | 'low' | 'moderate' | 'high' | 'major';

export type Complexity = 'simple' | 'moderate' | 'complex';

/** monitor < soon < today < stop. "today" reads "Get help today" in the UI. */
export type Urgency = 'monitor' | 'soon' | 'today' | 'stop';

export type Severity = 'low' | 'medium' | 'high' | 'critical';

export type Appliance = {
  key: ToolApplianceKey;
  name: string;
  /** Lower-case form used inside sentences ("your washer"). */
  short: string;
  /** Typical service life in years, used for repair-or-replace guidance. Approximate and editable. */
  lifespanYears: [number, number];
  /**
   * Relative replacement cost in the same "cost points" the repair rules use (see src/config/tools.ts).
   * It is a ratio scale, not a currency, so the site can compare repair against replacement without prices.
   */
  replacementPoints: number;
  /** Ask whether the unit is indoors or outdoors (grills, pool heaters, outdoor fridges). */
  askPlacement?: boolean;
  /** Optional sub-type question, for example front-load or top-load for washers. */
  variant?: { question: string; options: { value: string; label: string }[] };
  /** Gas appliances get gas-smell safety copy in every tool. */
  mayUseGas?: boolean;
};

export type Brand = { key: BrandKey; name: string; tier: BrandTier };

/** One problem a visitor can pick. Shared by the symptom checker and the cost guide. */
export type Issue = {
  id: string;
  appliance: ToolApplianceKey;
  label: string;
  /** Possible causes, most common first. The engine reorders them using the visitor's answers. */
  causes: IssueCause[];
  urgency: Urgency;
  /** Safe checks a homeowner can do with the power off. Never anything that opens a sealed or live part. */
  safeChecks: string[];
  /** Work that belongs to a technician. */
  proOnly: string[];
  /** Cost rule for the most likely repair behind this problem. */
  cost: CostRule;
};

export type IssueCause = {
  id: string;
  title: string;
  /** Why this cause fits the symptom, in one or two plain sentences. */
  why: string;
  /** Base likelihood weight, 1 (less common) to 5 (most common). */
  weight: number;
  /** Raises the cause when the visitor also reports one of these issue ids, operating states or ages. */
  boostIf?: { issues?: string[]; status?: OperatingStatus[]; ageAtLeast?: Exclude<AgeBand, 'unknown'> };
};

export type CostRule = {
  description: string;
  parts: [PartsLevel, PartsLevel];
  /** Hands-on labour in hours, low and high. */
  labourHours: [number, number];
  complexity: Complexity;
};

export type OperatingStatus = 'poor' | 'intermittent' | 'stopped' | 'leaking' | 'noise' | 'unsafe';

export type SafetySign = 'gas' | 'smoke' | 'sparking' | 'shock' | 'flooding' | 'burning';

export type EnvFactor = 'humid' | 'hardwater' | 'pets' | 'outdoorkitchen' | 'outages';

export type Concern = 'temperature' | 'leak' | 'noise' | 'odor' | 'performance' | 'frost';

export type Usage = 'light' | 'normal' | 'heavy';

export type MaintenanceTask = {
  id: string;
  appliance: ToolApplianceKey;
  title: string;
  why: string;
  /** Safe homeowner steps. Omit for professional-only tasks. */
  diy?: string;
  proOnly?: boolean;
  /** 0 means after every use or load. Otherwise months between checks. */
  baseMonths: number;
  priority: 'low' | 'medium' | 'high';
  /** Shorter interval in months when a home factor applies. The shortest matching interval wins. */
  factorMonths?: Partial<Record<EnvFactor | 'outdoor' | 'heavy', number>>;
  /** Concerns that move this task to the "check now" list. */
  concerns?: Concern[];
  /** Only for these variant values (for example 'front' washers or 'gas' dryers). */
  variants?: string[];
  /** Raised to high priority for units over 10 years old. */
  ageSensitive?: boolean;
};

export type ErrorCategory =
  | 'water-supply'
  | 'drain'
  | 'door-lock'
  | 'unbalanced'
  | 'leak'
  | 'overfill'
  | 'suds'
  | 'pressure-sensor'
  | 'temp-sensor'
  | 'heating'
  | 'overheat'
  | 'motor'
  | 'fan'
  | 'defrost'
  | 'ice-maker'
  | 'airflow'
  | 'communication'
  | 'control-board'
  | 'stuck-key'
  | 'power'
  | 'demo-mode'
  | 'filter'
  | 'circulation';

/** Shared meaning of a fault family. Each error code points at one of these. */
export type ErrorCategoryInfo = {
  meaning: string;
  cause: string;
  firstChecks: string[];
  stopUse: string;
  nextStep: string;
  severity: Severity;
  parts: [PartsLevel, PartsLevel];
  diy: boolean;
};

export type ErrorCodeRecord = {
  appliance: ToolApplianceKey;
  brands: BrandKey[];
  /** The code as it appears on the display. */
  code: string;
  /** Other ways the same code shows up (for example 4C and 4E on Samsung washers). */
  aliases?: string[];
  title: string;
  category: ErrorCategory;
  /** Code-specific cause, when it differs from the category text. */
  cause?: string;
  /** Overrides the category severity. */
  severity?: Severity;
  /**
   * Source and verification status for future maintenance. Every seed entry is a commonly published
   * meaning that has not been checked against each model's service manual.
   */
  source: string;
};

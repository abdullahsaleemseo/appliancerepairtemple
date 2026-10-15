export type Faq = { q: string; a: string };

export type IconName =
  | 'refrigerator'
  | 'washer'
  | 'dryer'
  | 'dishwasher'
  | 'oven'
  | 'freezer'
  | 'microwave'
  | 'phone'
  | 'wrench'
  | 'check'
  | 'shield'
  | 'clock'
  | 'tag'
  | 'pin'
  | 'star'
  | 'calendar'
  | 'chat'
  | 'arrow'
  | 'menu'
  | 'close'
  | 'mail'
  | 'chevron'
  | 'tool';

export type ApplianceKey =
  | 'refrigerator'
  | 'washer'
  | 'dryer'
  | 'dishwasher'
  | 'oven'
  | 'freezer'
  | 'microwave';

export type Symptom = { title: string; cause: string; fixable: string };

/** Ordered page sections for a service page. Each appliance can use its own mix and order. */
export type ServiceBlock =
  | { type: 'quickAnswer'; heading: string; intro?: string; steps: string[]; note?: string }
  | { type: 'symptoms' }
  | { type: 'inlineForm' }
  | { type: 'partsTable'; heading: string; intro?: string; columns?: [string, string, string]; note?: string; rows: { part: string; job: string; signs: string }[] }
  | { type: 'stopUsing'; heading: string; intro?: string; items: string[]; note?: string }
  | { type: 'diyVsPro'; heading: string; intro?: string; diy: string[]; pro: string[] }
  | { type: 'process'; heading: string; intro?: string; steps: { title: string; text: string }[] }
  | { type: 'repairOrReplace' }
  | { type: 'brands'; heading?: string; intro?: string; styles?: string[] }
  | { type: 'prose'; heading: string; paragraphs: string[] }
  | { type: 'payment' }
  | { type: 'diagnostic' }
  | { type: 'resultsGrid'; heading: string; intro?: string; rows: { see: string; means: string; fix: string }[] }
  | { type: 'factCallout'; stat: string; text: string; source: { name: string; url: string } }
  | { type: 'cycleStages'; heading: string; intro?: string; rows: { stage: string; what: string; parts: string }[] }
  | { type: 'compare'; heading: string; intro?: string; columns: { title: string; items: string[] }[] }
  | { type: 'faq' };

export type Service = {
  key: ApplianceKey;
  slug: string;
  name: string;
  navLabel: string;
  icon: IconName;
  card: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  symptomsHeading: string;
  symptoms: Symptom[];
  diagnostic: { heading: string; paragraphs: string[]; covers: string[] };
  repairOrReplace: { heading: string; paragraphs: string[]; points: string[] };
  safety: string;
  brands: string[];
  faqs: Faq[];
  related: ApplianceKey[];
  /** Spec: only publish if the service is genuinely offered. */
  offeredVerified: boolean;
  /** Page-specific section order. Services without it use the default layout. */
  blocks?: ServiceBlock[];
};

export type Section = {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
};

export type Post = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  published: string;
  updated: string;
  service: ApplianceKey | 'general';
  sections: Section[];
  safety: string;
  faqs: Faq[];
};

export type Area = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  travelNote: string;
  localPoints: { heading: string; text: string }[];
  zips: string[];
  faqs: Faq[];
  featuredServices: ApplianceKey[];
  /** ZIP list confirmed against a reliable source, so no verification tag is needed. */
  zipsVerified?: boolean;
  /** Extra page sections, rendered after the local notes. */
  sections?: { heading: string; accent?: string; paragraphs: string[] }[];
  /** Nearby towns to link from this page (names from site.nearbyTowns or Temple). */
  nearby?: string[];
};

export type Brand = {
  key: string;
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  appliances: { key: ApplianceKey; note: string }[];
  issues: { title: string; text: string }[];
  faqs: Faq[];
  hasPage: boolean;
  /** Page H1 with a modifier. Falls back to "[Brand] Appliance Repair in [City], [State]". */
  h1?: string;
  /** Where the model and serial tag usually sits, per the manufacturer's support pages. */
  modelLocations?: { appliance: string; where: string }[];
  modelSource?: { name: string; url: string };
  haveReady?: string[];
};

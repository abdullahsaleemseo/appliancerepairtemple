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
  | { type: 'partsTable'; heading: string; intro?: string; rows: { part: string; job: string; signs: string }[] }
  | { type: 'stopUsing'; heading: string; intro?: string; items: string[]; note?: string }
  | { type: 'diyVsPro'; heading: string; intro?: string; diy: string[]; pro: string[] }
  | { type: 'process'; heading: string; intro?: string; steps: { title: string; text: string }[] }
  | { type: 'repairOrReplace' }
  | { type: 'brands'; heading?: string; intro?: string; styles?: string[] }
  | { type: 'prose'; heading: string; paragraphs: string[] }
  | { type: 'payment' }
  | { type: 'diagnostic' }
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
};

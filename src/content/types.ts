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

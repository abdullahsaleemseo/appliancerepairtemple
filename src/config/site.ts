/**
 * Brand and market variables. Cloning the site to a new market starts here.
 *
 * Every business claim carries a `verified` flag. Unverified values render with a
 * visible marker in draft mode and are removed entirely when
 * NEXT_PUBLIC_SITE_MODE=production, so nothing unconfirmed can go live by accident.
 */

export type Verifiable<T> = { value: T; verified: boolean };

const v = <T,>(value: T, verified = false): Verifiable<T> => ({ value, verified });

export const site = {
  brandName: 'Temple Appliance Repair',
  shortName: 'Temple Appliance',
  domain: 'appliancerepairtemple.com',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://appliancerepairtemple.com').replace(/\/$/, ''),

  city: 'Temple',
  citySlug: 'temple',
  state: 'Texas',
  stateAbbr: 'TX',
  stateSlug: 'tx',
  county: 'Bell County',
  region: 'Central Texas',

  phone: v({ display: '(254) 555-0147', e164: '+12545550147' }),
  email: v('service@appliancerepairtemple.com'),

  // Service-area business: no street address is published or marked up.
  serviceAreaSummary: 'Temple, Belton, Killeen, Harker Heights, Salado, and nearby Central Texas communities',
  footerAreaLine: 'Proudly serving Temple, TX and nearby Central Texas communities.',

  hours: v({
    display: 'Mon-Sat 8am-8pm',
    long: 'Monday to Saturday, 8:00 AM to 8:00 PM',
    // schema.org openingHours format
    schema: ['Mo-Sa 08:00-20:00'],
  }),

  // Temple ZIP codes supplied in the design brief as verified.
  templeZips: ['76501', '76502', '76503', '76504', '76508'],

  // Towns covered without a dedicated page. Listed on the service-areas hub only.
  nearbyTowns: [
    'Belton',
    'Killeen',
    'Harker Heights',
    'Copperas Cove',
    'Salado',
    'Rogers',
    'Troy',
    'Moody',
    'Holland',
    'Little River-Academy',
    'Waco',
  ],

  // Toggle for the slim same-day banner above the header. Only switch on when slots are really open.
  emergencyBanner: {
    enabled: false,
    text: 'Same-day appointments open in Temple today. Call before 2pm.',
  },

  spanishSpoken: v(false),

  social: [] as { name: string; url: string }[],
} as const;

/**
 * Claims used in trust strips, comparison tables, hero chips and stats.
 * Replace the values with the owner's own wording, then set verified: true.
 */
export const claims = {
  licensedInsured: v('Licensed & Insured'),
  sameDay: v('Same-day service, subject to technician availability'),
  sameDayShort: v('Same-Day Service'),
  upfrontPricing: v('Upfront Pricing'),
  warranty: v({ short: '90-Day Warranty', long: '90-day parts and labor warranty on repairs' }),
  backgroundChecked: v('Background-checked technicians'),
  rating: v({ value: '4.9', count: '[REVIEW COUNT]', source: 'Google' }),
  repairsCompleted: v('1,200+'),
  yearsServing: v('[YEARS]'),
  responseTime: v('60-min response'),
  callbackMinutes: v(15),
  diagnosticFee: v({ amount: '[DIAGNOSTIC FEE]', waivedWithRepair: true }),
  paymentOptions: v(['[PAYMENT OPTIONS CONFIRMED BY OWNER]']),
  gasAppliances: v('Gas range and gas dryer repair'),
} as const;

export const isProduction = process.env.NEXT_PUBLIC_SITE_MODE === 'production';

/**
 * Search engine indexing is a separate switch from production mode, so a staging
 * deployment can preview the launch version while staying out of Google.
 * Both must be set before the site can be indexed.
 */
export const indexingAllowed = isProduction && process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

/** True when a value may be rendered: always in draft, only when verified in production. */
export function canShow(item: Verifiable<unknown>): boolean {
  return item.verified || !isProduction;
}

export const tel = `tel:${site.phone.value.e164}`;
export const phoneDisplay = site.phone.value.display;

export const routes = {
  home: '/',
  cityPage: `/appliance-repair-${site.citySlug}-${site.stateSlug}/`,
  brands: '/brands/',
  areas: '/service-areas/',
  about: '/about/',
  contact: '/contact/',
  request: '/request-service/',
  thankYou: '/thank-you/',
  faq: '/faq/',
  reviews: '/reviews/',
  blog: '/blog/',
  privacy: '/privacy-policy/',
  terms: '/terms-of-service/',
  accessibility: '/accessibility/',
} as const;

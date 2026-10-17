import type { SocialKey } from '@/components/socialIcons';
import { resolvedAllowIndexing, resolvedSiteMode, resolvedSiteUrl } from './launch';
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
  brandName: 'Appliance Repair Temple',
  shortName: 'Appliance Repair Temple',
  domain: 'appliancerepairtemple.com',
  url: resolvedSiteUrl,

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

  hours: v(
    {
      display: 'Mon-Sat 8am-8pm',
      long: 'Monday to Saturday, 8:00 AM to 8:00 PM',
      // schema.org openingHours format
      schema: ['Mo-Sa 08:00-20:00'],
    },
    true,
  ),

  // Temple ZIP codes supplied in the design brief as verified.
  templeZips: ['76501', '76502', '76503', '76504', '76508'],

  // Nearby towns covered. Towns with an entry in content/areas.ts get their own page and are linked automatically.
  nearbyTowns: [
    'Belton',
    'Killeen',
    'Harker Heights',
    'Nolanville',
    "Morgan's Point Resort",
    'Salado',
    'Troy',
    'Little River-Academy',
    'Rogers',
    'Holland',
    'Moody',
  ],

  // Toggle for the slim same-day banner above the header. Only switch on when slots are really open.
  emergencyBanner: {
    enabled: false,
    text: 'Same-day appointments open in Temple today. Call before 2pm.',
  },

  spanishSpoken: v(false),

  social: [
    { key: 'facebook', name: 'Facebook', handle: 'ApplianceRepairTemple', url: 'https://www.facebook.com/ApplianceRepairTemple' },
    { key: 'instagram', name: 'Instagram', handle: '@appliancerepairtemple', url: 'https://www.instagram.com/appliancerepairtemple/' },
    { key: 'youtube', name: 'YouTube', handle: '@appliancerepairtemple', url: 'https://www.youtube.com/@appliancerepairtemple' },
    { key: 'tiktok', name: 'TikTok', handle: '@appliancerepairtemple', url: 'https://www.tiktok.com/@appliancerepairtemple' },
    { key: 'x', name: 'X', handle: '@appliancere34', url: 'https://x.com/appliancere34' },
    { key: 'pinterest', name: 'Pinterest', handle: 'appliancerepairtemple08', url: 'https://www.pinterest.com/appliancerepairtemple08/' },
    { key: 'linkedin', name: 'LinkedIn', handle: 'appliance-repair-temple', url: 'https://www.linkedin.com/company/appliance-repair-temple/' },
  ] as { key: SocialKey; name: string; handle: string; url: string }[],
} as const;

/**
 * Public business facts. Only claims confirmed by the owner carry verified: true.
 * Pricing policy: no prices, fees, ranges, coupons, financing terms or cost estimates anywhere on the site.
 */
export const claims = {
  licensedInsured: v('Licensed & Insured', true),
  sameDayShort: v('Same-Day Service', true),
  /** Required wording whenever same-day service or response time appears in body copy. */
  availabilityQualifier: 'subject to technician availability, location, and current demand',
  yearsExperience: v({ value: '4+', label: 'Years of experience', short: '4+ Years of Experience' }, true),
  repairsCompleted: v({ value: '100+', label: 'Repairs completed' }, true),
  rating: v({ value: '4.9', label: 'Average rating' }, true),
  /** A typical figure, never a guaranteed arrival time. */
  responseTime: v({ value: 'About 60 min', label: 'Typical response', long: 'Typical response: about 60 minutes' }, true),
  paymentOptions: v('Flexible Payment Options Available', true),
  emergencyService: v('Emergency appliance repair: urgent calls are prioritized during business hours', true),
  gasAppliances: v('Gas range and gas dryer repair', true),
  brandsServiced: v('Brands listed on the site are serviced by Appliance Repair Temple', true),
} as const;

export const isProduction = resolvedSiteMode === 'production';

/**
 * Search engine indexing is a separate switch from production mode, so a staging
 * deployment can preview the launch version while staying out of Google.
 * Both must be set before the site can be indexed.
 */
export const indexingAllowed = isProduction && resolvedAllowIndexing;

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
  faq: '/faq/',
  reviews: '/reviews/',
  blog: '/blog/',
  privacy: '/privacy-policy/',
  terms: '/terms-of-service/',
  accessibility: '/accessibility/',
} as const;

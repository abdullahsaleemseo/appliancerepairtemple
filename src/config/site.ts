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

  // Main business number.
  phone: v({ display: '(254) 615-2088', e164: '+12546152088' }, true),
  email: v('service@appliancerepairtemple.com'),

  // Service-area business: no street address is published or marked up.
  serviceAreaSummary: 'Temple, Belton, Killeen, Harker Heights, Salado, and nearby Central Texas communities',
  footerAreaLine: 'Appliance repair for homes in Temple and across Bell County, TX.',


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

/** Short line shown next to the phone number in calls to action. */
export const callHint = 'Tell us the appliance, the brand and what it is doing.';

/** Footer and Disclaimer page. Appliance Repair Temple is a local repair business (since Nov 2026). */
export const manufacturerDisclaimer =
  'Appliance Repair Temple is an independent appliance repair service and is not affiliated with or authorized by any appliance manufacturer.';

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
  request: '/get-connected/',
  faq: '/faq/',
  blog: '/blog/',
  privacy: '/privacy-policy/',
  terms: '/terms-of-service/',
  disclaimer: '/disclaimer/',
  accessibility: '/accessibility/',
} as const;

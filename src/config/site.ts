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

  // Ringba call tracking number (Oct 2026). Calls route to independent local providers.
  phone: v({ display: '(254) 615-2088', e164: '+12546152088' }, true),
  email: v('service@appliancerepairtemple.com'),

  // Service-area business: no street address is published or marked up.
  serviceAreaSummary: 'Temple, Belton, Killeen, Harker Heights, Salado, and nearby Central Texas communities',
  footerAreaLine: 'Temple’s line for appliance repair, serving homes across Bell County, TX.',


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

/**
 * The site is a referral resource: it connects homeowners with independent local appliance repair
 * providers by phone. It makes no claims about credentials, experience, ratings, speed, prices or payment.
 * This disclaimer appears in the footer of every page and on the Disclaimer page.
 */
/** Shown next to the number: callers who pick the appliance and enter a ZIP in the phone menu reach a provider. */
export const callHint = 'Call, choose the appliance, and enter your ZIP code.';

export const referralDisclaimer =
  'This site is a free service to assist homeowners in connecting with local appliance repair providers. All providers are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired provider furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not providers listed on this site.';

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

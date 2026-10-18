/**
 * Launch switches, kept in code so they can be changed with a commit instead of in the Vercel dashboard.
 * A Vercel environment variable with the same purpose still wins when it is set.
 *
 * - siteMode: 'production' hides every unverified claim and draft tag. 'draft' shows them.
 * - allowIndexing: true lets search engines index the real domain. Only works together with siteMode 'production'.
 *   *.vercel.app URLs stay noindex regardless (see src/middleware.ts).
 * - gaId: Google Analytics 4 measurement ID (G-XXXXXXX). Empty disables analytics.
 * - googleVerification / bingVerification: the content value of the HTML-tag verification method in
 *   Google Search Console and Bing Webmaster Tools. Empty adds no tag (DNS verification needs none).
 */
export const launch = {
  siteMode: 'production' as 'production' | 'draft',
  allowIndexing: true,
  siteUrl: 'https://appliancerepairtemple.com',
  gaId: '',
  googleVerification: 'RwkxEOVXQbmWsYSSTFEyMZqxZW3O9lZGAp0PaSfnfdM',
  bingVerification: '',
};

const env = (v: string | undefined) => (v && v.trim() ? v.trim() : undefined);

export const resolvedSiteMode = env(process.env.NEXT_PUBLIC_SITE_MODE) ?? launch.siteMode;
const indexingEnv = env(process.env.NEXT_PUBLIC_ALLOW_INDEXING);
export const resolvedAllowIndexing = indexingEnv !== undefined ? indexingEnv === 'true' : launch.allowIndexing;
export const resolvedSiteUrl = (env(process.env.NEXT_PUBLIC_SITE_URL) ?? launch.siteUrl).replace(/\/$/, '');
export const resolvedGaId = env(process.env.NEXT_PUBLIC_GA_ID) ?? launch.gaId;

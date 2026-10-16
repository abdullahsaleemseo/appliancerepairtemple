import type { MetadataRoute } from 'next';
import { indexingAllowed, routes, site } from '@/config/site';

export const dynamic = 'force-static';

/** Staging and draft builds block all crawling. */
export default function robots(): MetadataRoute.Robots {
  if (!indexingAllowed) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', routes.thankYou] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

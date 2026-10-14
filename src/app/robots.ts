import type { MetadataRoute } from 'next';
import { isProduction, routes, site } from '@/config/site';

export const dynamic = 'force-static';

/** Draft builds block all crawling so placeholder content never gets indexed. */
export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', routes.thankYou] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

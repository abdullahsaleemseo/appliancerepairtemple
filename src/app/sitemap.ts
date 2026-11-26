import type { MetadataRoute } from 'next';
import { routes } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { brands, brandHref } from '@/content/brands';
import { posts, postHref } from '@/content/blog';
import { liveExtraServices } from '@/content/extraServices';
import { serviceHref, services } from '@/content/services';
import { absoluteUrl } from '@/lib/seo';
import { toolRoutes } from '@/config/tools';

export const dynamic = 'force-static';

/**
 * Date of the last real content change across the site. Bump it when page copy changes; a build date
 * would tell search engines every page changed on every deploy. Blog posts use their own dates.
 */
const contentUpdated = new Date('2026-10-18T12:00:00');

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number, lastModified: Date = contentUpdated) => ({
    url: absoluteUrl(path),
    lastModified,
    priority,
  });
  return [
    entry('/', 1, new Date('2026-11-25T12:00:00')),
    entry(routes.cityPage, 0.9),
    ...services.map((s) => entry(serviceHref(s.key), 0.8)),
    ...liveExtraServices.map((s) => entry(s.href, 0.7)),
    entry(routes.brands, 0.6),
    ...brands.filter((b) => b.hasPage).map((b) => entry(brandHref(b), 0.6)),
    entry(routes.areas, 0.6),
    ...areas.map((a) => entry(areaHref(a), 0.7)),
    entry(routes.about, 0.5),
    entry(routes.request, 0.7),
    ...Object.values(toolRoutes).map((path) => entry(path, 0.6)),
    entry(routes.faq, 0.5),
    entry(routes.blog, 0.4),
    ...posts.map((p) => entry(postHref(p), 0.4, new Date(`${p.updated}T12:00:00`))),
  ];
}

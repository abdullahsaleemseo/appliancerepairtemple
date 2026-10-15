import type { MetadataRoute } from 'next';
import { routes } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { brands, brandHref } from '@/content/brands';
import { posts, postHref } from '@/content/blog';
import { serviceHref, services } from '@/content/services';
import { absoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, lastModified: Date = now) => ({
    url: absoluteUrl(path),
    lastModified,
    priority,
  });
  return [
    entry('/', 1),
    entry(routes.cityPage, 0.9),
    ...services.map((s) => entry(serviceHref(s.key), 0.8)),
    entry(routes.brands, 0.6),
    ...brands.filter((b) => b.hasPage).map((b) => entry(brandHref(b), 0.6)),
    entry(routes.areas, 0.6),
    ...areas.map((a) => entry(areaHref(a), 0.7)),
    entry(routes.about, 0.5),
    entry(routes.contact, 0.5),
    entry(routes.request, 0.7),
    entry(routes.faq, 0.5),
    entry(routes.reviews, 0.5),
    entry(routes.blog, 0.4),
    ...posts.map((p) => entry(postHref(p), 0.4, new Date(`${p.updated}T12:00:00`))),
    entry(routes.privacy, 0.1),
    entry(routes.terms, 0.1),
    entry(routes.accessibility, 0.1),
  ];
}

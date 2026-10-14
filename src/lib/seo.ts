import type { Metadata } from 'next';
import { isProduction, site } from '@/config/site';

type MetaInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  type?: 'website' | 'article';
};

export function absoluteUrl(path: string) {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Page metadata with a self-referencing canonical and Open Graph tags. Draft builds are never indexable. */
export function pageMetadata({ title, description, path, noindex, type = 'website' }: MetaInput): Metadata {
  const url = absoluteUrl(path);
  const index = isProduction && !noindex;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: index ? { index: true, follow: true } : { index: false, follow: !noindex },
    openGraph: {
      title,
      description,
      url,
      siteName: site.brandName,
      locale: 'en_US',
      type,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

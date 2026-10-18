import type { Metadata } from 'next';
import { indexingAllowed, site } from '@/config/site';

type MetaInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  type?: 'website' | 'article';
  /** Share image path under /public. Pages without one use the default site image. */
  image?: string;
  imageAlt?: string;
  /** Article dates (YYYY-MM-DD) for og:article tags. */
  published?: string;
  modified?: string;
};

/** Default share image (1200x630) for pages without their own. */
export const defaultShareImage = { url: '/og/default.png', width: 1200, height: 630 };

export function absoluteUrl(path: string) {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Page metadata with a self-referencing canonical and Open Graph tags. Staging and draft builds are never indexable. */
export function pageMetadata({ title, description, path, noindex, type = 'website', image, imageAlt, published, modified }: MetaInput): Metadata {
  const url = absoluteUrl(path);
  const index = indexingAllowed && !noindex;
  const img = image
    ? { url: absoluteUrl(image), width: 1672, height: 941, alt: imageAlt ?? title }
    : { url: absoluteUrl(defaultShareImage.url), width: defaultShareImage.width, height: defaultShareImage.height, alt: `${site.brandName}: appliance repair in ${site.city}, ${site.stateAbbr}` };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url,
      siteName: site.brandName,
      locale: 'en_US',
      type,
      images: [img],
      ...(type === 'article' && published ? { publishedTime: published, modifiedTime: modified ?? published, authors: [site.url] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [{ url: img.url, alt: img.alt }] },
  };
}

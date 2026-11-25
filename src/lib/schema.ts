import { site } from '@/config/site';
import type { Faq } from '@/content/types';
import { absoluteUrl } from './seo';

/** Structured data: WebSite (every page), HomeAndConstructionBusiness (homepage), BreadcrumbList, FAQPage and Article. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.brandName,
    url: site.url,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.brandName,
      url: site.url,
      logo: `${site.url}/icon-512.png`,
      sameAs: site.social.map((s) => s.url),
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: site.phone.value.e164,
        contactType: 'customer service',
        areaServed: 'US-TX',
        availableLanguage: 'English',
      },
    },
  };
}

/**
 * Homepage business entity. Service-area business: no street address, and no hours or price range
 * until the owner confirms them.
 */
export function businessSchema(opts: { knowsAbout: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.url}/#business`,
    name: site.brandName,
    url: `${site.url}/`,
    telephone: site.phone.value.e164,
    image: `${site.url}/og/default.png`,
    logo: `${site.url}/icon-512.png`,
    areaServed: [site.city, ...site.nearbyTowns].map((name) => ({ '@type': 'City', name: `${name}, ${site.stateAbbr}` })),
    knowsAbout: opts.knowsAbout,
    sameAs: site.social.map((s) => s.url),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQ answers may contain inline links written as [text](/path/); schema gets the plain text the reader sees. */
export const faqPlainText = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: faqPlainText(f.a) },
    })),
  };
}

export function articleSchema(opts: { title: string; description: string; path: string; published: string; updated: string; image?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: absoluteUrl(opts.path),
    datePublished: opts.published,
    dateModified: opts.updated,
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
    author: { '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.brandName, url: site.url },
    publisher: { '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.brandName, url: site.url, logo: `${site.url}/icon-512.png` },
  };
}


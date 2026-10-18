import { site } from '@/config/site';
import type { Faq } from '@/content/types';
import { absoluteUrl } from './seo';

/** Structured data is limited to WebSite, BreadcrumbList, FAQPage and Article. The site makes no business-type claims. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.brandName,
    url: site.url,
    publisher: {
      '@type': 'Organization',
      name: site.brandName,
      url: site.url,
      logo: `${site.url}/brand/logo-on-light.svg`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: site.phone.value.e164,
        contactType: 'appliance repair referrals',
        areaServed: 'US-TX',
        availableLanguage: 'English',
      },
    },
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

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
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
    author: { '@type': 'Organization', name: site.brandName, url: site.url },
    publisher: {
      '@type': 'Organization',
      name: site.brandName,
      url: site.url,
      logo: `${site.url}/brand/logo-on-light.svg`,
      contactPoint: { '@type': 'ContactPoint', telephone: site.phone.value.e164, contactType: 'appliance repair referrals' },
    },
  };
}


import { canShow, site } from '@/config/site';
import type { Faq } from '@/content/types';
import { absoluteUrl } from './seo';

const businessId = `${site.url}/#business`;

const areaServed = [
  { '@type': 'City', name: `${site.city}, ${site.stateAbbr}` },
  ...['Belton', 'Killeen', 'Harker Heights', 'Salado'].map((name) => ({ '@type': 'City', name: `${name}, ${site.stateAbbr}` })),
];

/** Minimal organization identity: name, URL and logo only, no unverified business facts. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': businessId,
    name: site.brandName,
    url: site.url,
    logo: `${site.url}/brand/logo-on-light.svg`,
  };
}

/** LocalBusiness markup is only emitted once the phone number and business details are verified. */
export const localBusinessReady = site.phone.verified;

/**
 * Service-area business: no address property, per Google's guidance for businesses
 * without a customer-facing location.
 */
export function localBusinessSchema() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId,
    name: site.brandName,
    url: site.url,
    areaServed,
    priceRange: '$$',
    knowsAbout: ['Refrigerator repair', 'Washer repair', 'Dryer repair', 'Dishwasher repair', 'Oven and range repair', 'Freezer repair'],
  };
  if (canShow(site.phone)) data.telephone = site.phone.value.e164;
  if (canShow(site.email)) data.email = site.email.value;
  if (canShow(site.hours)) data.openingHours = site.hours.value.schema;
  if (site.social.length) data.sameAs = site.social.map((s) => s.url);
  return data;
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.brandName,
    url: site.url,
    publisher: { '@id': businessId },
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

export function serviceSchema(opts: { name: string; description: string; path: string; serviceType: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { '@id': businessId },
    areaServed,
  };
}

export function articleSchema(opts: { title: string; description: string; path: string; published: string; updated: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: absoluteUrl(opts.path),
    datePublished: opts.published,
    dateModified: opts.updated,
    author: { '@type': 'Organization', name: site.brandName, url: site.url },
    publisher: { '@id': businessId },
  };
}


import { routes } from '@/config/site';
import { serviceHref, services } from '@/content/services';

export const serviceLinks = services.map((s) => ({ href: serviceHref(s.key), label: s.navLabel }));

export const mainNav = [
  { href: routes.home, label: 'Home' },
  { href: routes.cityPage, label: 'Appliance Repairs' },
  { href: '#services', label: 'Services', children: serviceLinks },
  { href: routes.brands, label: 'Brands' },
  { href: routes.areas, label: 'Service Areas' },
  { href: routes.about, label: 'About' },
  { href: routes.faq, label: 'FAQs' },
];

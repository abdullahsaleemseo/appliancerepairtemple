import { routes } from '@/config/site';
import { serviceHref, services } from '@/content/services';

export const serviceLinks = services.map((s) => ({ href: serviceHref(s.key), label: s.navLabel }));

export type NavLink = { href: string; label: string };
export type MenuKey = 'services' | 'brands' | 'areas';

/** Items with a `menu` open a dropdown on desktop and a collapsible list on phones. */
export const mainNav: { href: string; label: string; menu?: MenuKey }[] = [
  { href: routes.home, label: 'Home' },
  { href: routes.cityPage, label: 'Appliance Repairs' },
  { href: '#services', label: 'Services', menu: 'services' },
  { href: routes.brands, label: 'Brands', menu: 'brands' },
  { href: routes.areas, label: 'Service Areas', menu: 'areas' },
  { href: routes.about, label: 'About' },
  { href: routes.faq, label: 'FAQs' },
];

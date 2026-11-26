import type { IconName } from './types';

/**
 * Service pages that live outside the main `services` data (each has its own route under src/app).
 * A page joins the services menu, the footer and the sitemap only when `live` is true, so the
 * navigation never links to a page that has not shipped yet.
 */
export type ExtraService = { key: string; href: string; name: string; navLabel: string; card: string; icon: IconName; live: boolean };

export const extraServices: ExtraService[] = [
  {
    key: 'ice-maker',
    href: '/ice-maker-repair-temple-tx/',
    name: 'Ice maker',
    navLabel: 'Ice Maker Repair',
    card: 'Not making ice, frozen or leaking',
    icon: 'refrigerator',
    live: true,
  },
  {
    key: 'dryer-vent',
    href: '/dryer-vent-cleaning-temple-tx/',
    name: 'Dryer vent',
    navLabel: 'Dryer Vent Cleaning',
    card: 'Slow drying, hot laundry room, lint at the hood',
    icon: 'dryer',
    live: true,
  },
  {
    key: 'disposal',
    href: '/garbage-disposal-repair-temple-tx/',
    name: 'Disposal',
    navLabel: 'Garbage Disposal Repair',
    card: 'Humming, jammed or leaking',
    icon: 'wrench',
    live: true,
  },
];

export const liveExtraServices = extraServices.filter((s) => s.live);

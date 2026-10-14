'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { track } from '@/lib/analytics';
import { captureAttribution } from '@/lib/attribution';

/** Site-wide listeners: attribution capture, call and CTA click events, and section reveal. */
export function SiteClient() {
  const pathname = usePathname();

  useEffect(() => {
    captureAttribution();
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest('a');
      if (!el) return;
      const href = el.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        track('click_to_call', { location: el.dataset.callLocation || 'unknown' });
      } else if (el.dataset.cta) {
        track('cta_click', { location: el.dataset.cta, destination: href });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    document.documentElement.classList.add('js-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

/** Fires service_page_view once per page load on appliance service pages. */
export function ServicePageView({ service }: { service: string }) {
  useEffect(() => {
    track('service_page_view', { service });
  }, [service]);
  return null;
}

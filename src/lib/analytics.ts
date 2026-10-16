'use client';

export type AnalyticsEvent = 'click_to_call' | 'cta_click' | 'service_page_view';

type Gtag = (command: 'event', name: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

export function track(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  const payload = { page_path: window.location.pathname, ...params };
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, payload);
  } else {
    (window.dataLayer = window.dataLayer || []).push({ event, ...payload });
  }
  if (process.env.NODE_ENV !== 'production') console.info('[analytics]', event, payload);
}

'use client';

const KEY = 'tar_attribution';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as const;

export type Attribution = {
  landingUrl: string;
  referrer: string;
  firstSeen: string;
} & Partial<Record<(typeof UTM_KEYS)[number], string>>;

/** Stores first-touch attribution for the session so it can travel with tracked call events. */
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const existing = sessionStorage.getItem(KEY);
    const hasUtm = UTM_KEYS.some((k) => params.get(k));
    if (existing && !hasUtm) return;
    const data: Attribution = {
      landingUrl: window.location.href,
      referrer: document.referrer,
      firstSeen: new Date().toISOString(),
    };
    for (const k of UTM_KEYS) {
      const value = params.get(k);
      if (value) data[k] = value.slice(0, 200);
    }
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // Storage can be unavailable in private browsing; attribution is best effort.
  }
}

export function readAttribution(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

export function deviceType(): 'mobile' | 'tablet' | 'desktop' {
  const w = window.innerWidth;
  if (w < 768) return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { phoneDisplay, tel } from '@/config/site';
import type { ApplianceKey, IconName } from '@/content/types';
import { track } from '@/lib/analytics';
import { Icon } from './Icon';

export type PickerItem = { key: ApplianceKey; name: string; icon: IconName; href: string; symptoms: string[] };

/**
 * Hero widget: pick the appliance, tap the symptom, then call about it.
 * Lets a visitor confirm in two taps that local pros handle their exact problem before calling to get connected.
 */
export function ProblemPicker({ items }: { items: PickerItem[] }) {
  const [active, setActive] = useState(0);
  const [symptom, setSymptom] = useState<string | null>(null);
  const item = items[active];
  return (
    <div className="relative rounded-xl2 border border-white/10 bg-white/[0.06] p-2 shadow-glow backdrop-blur-xl">
      <div className="rounded-[22px] bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <p className="font-display text-xl font-bold tracking-[-0.02em] text-ink">What’s acting up?</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-2.5 py-1 text-[12px] font-semibold text-mint">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-mint" />
            Takes 2 taps
          </span>
        </div>

        <div role="tablist" aria-label="Choose your appliance" className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-7">
          {items.map((it, i) => {
            const selected = i === active;
            return (
              <button
                key={it.key}
                role="tab"
                type="button"
                id={`pp-tab-${it.key}`}
                aria-selected={selected}
                aria-controls="pp-panel"
                onClick={() => {
                  setActive(i);
                  setSymptom(null);
                }}
                className={`group flex aspect-square flex-col items-center justify-center gap-1 rounded-2xl border text-[11.5px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame ${
                  selected
                    ? 'border-ink bg-ink text-white shadow-lift'
                    : 'border-sand bg-canvas text-ink-body hover:border-ink/30 hover:text-ink'
                }`}
              >
                <Icon name={it.icon} className={`h-6 w-6 transition ${selected ? 'text-flame-glow' : ''}`} strokeWidth={1.6} />
                <span className="leading-none">{it.key === 'refrigerator' ? 'Fridge' : it.name.replace(' & Stove', '')}</span>
              </button>
            );
          })}
        </div>

        <div id="pp-panel" role="tabpanel" aria-labelledby={`pp-tab-${item.key}`} className="mt-6">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Common {item.name.toLowerCase()} problems</p>
          <ul className="mt-3 space-y-2">
            {item.symptoms.map((sym) => {
              const picked = sym === symptom;
              return (
                <li key={sym}>
                  <button
                    type="button"
                    aria-pressed={picked}
                    onClick={() => {
                      setSymptom(sym);
                      track('cta_click', { location: 'problem_picker', appliance: item.key, symptom: sym });
                    }}
                    className={`group flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left text-[15px] font-medium text-ink transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-flame ${
                      picked ? 'border-flame bg-flame-soft' : 'border-sand hover:border-flame hover:bg-flame-soft'
                    }`}
                  >
                    {sym}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                        picked ? 'bg-flame text-white' : 'bg-canvas text-ink group-hover:bg-flame group-hover:text-white'
                      }`}
                    >
                      <Icon name={picked ? 'check' : 'arrow'} className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <a
            href={tel}
            data-call-location={symptom ? 'problem_picker_symptom' : 'problem_picker'}
            className="mt-4 flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-flame px-5 text-[16px] font-semibold text-white shadow-cta transition hover:bg-flame-hover"
          >
            <Icon name="phone" className="h-5 w-5" strokeWidth={2.2} />
            {symptom ? 'Call Now about this' : 'Call Now'} <span className="font-normal text-white/85">{phoneDisplay}</span>
          </a>
          <p className="mt-3 text-center text-[13px] text-ink-muted">Free call. Connects you with an independent local appliance repair pro.</p>
          <div className="mt-4 text-[14px]">
            <Link href={item.href} className="link-arrow text-[14px]">
              {item.name} repair details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

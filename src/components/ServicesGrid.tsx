import Link from 'next/link';
import { serviceByKey, serviceHref } from '@/content/services';
import type { ApplianceKey } from '@/content/types';
import { Icon } from './Icon';
import { PhoneLink } from './PhoneLink';

/**
 * Bento layout: the first card is a large feature tile, the rest fill around it.
 * Each card shows the top symptoms so visitors recognise their own problem.
 */
export function ServicesGrid({ keys, showOther = true, bento = true }: { keys: ApplianceKey[]; showOther?: boolean; bento?: boolean }) {
  // Cards after the feature tile and its four neighbours spill into a third row; widen cards there so the row is full.
  const tail = keys.length - 5;
  const otherSpan = bento && (tail === 1 || tail === 2) ? 'lg:col-span-2' : '';
  return (
    <ul className={`grid gap-4 sm:grid-cols-2 ${bento ? 'lg:grid-cols-4 lg:grid-rows-[auto_auto]' : 'lg:grid-cols-4'}`}>
      {keys.map((k, i) => {
        const s = serviceByKey[k];
        const feature = bento && i === 0;
        const wide = bento && showOther && tail === 1 && i === keys.length - 1;
        return (
          <li key={k} className={feature ? 'sm:col-span-2 lg:row-span-2' : wide ? 'lg:col-span-2' : ''}>
            <Link
              href={serviceHref(k)}
              className={`group relative flex h-full flex-col overflow-hidden rounded-card border transition duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame ${
                feature
                  ? 'grain border-ink bg-ink p-8 text-white hover:shadow-lift'
                  : 'border-sand/80 bg-white p-6 shadow-card hover:border-ink/20 hover:shadow-lift'
              }`}
            >
              {feature ? (
                <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-flame/30 blur-[90px] transition duration-500 group-hover:bg-flame/45" />
              ) : null}
              <span
                className={`relative flex items-center justify-center rounded-2xl transition ${
                  feature ? 'h-16 w-16 bg-white/10 text-flame-glow' : 'h-12 w-12 bg-canvas text-ink group-hover:bg-flame group-hover:text-white'
                }`}
              >
                <Icon name={s.icon} className={feature ? 'h-9 w-9' : 'h-6 w-6'} strokeWidth={1.6} />
              </span>
              <h3 className={`relative mt-5 font-display font-bold tracking-[-0.025em] ${feature ? 'text-4xl text-white' : 'text-xl text-ink'}`}>
                {s.navLabel}
              </h3>
              <p className={`relative mt-2 ${feature ? 'max-w-sm text-lg text-white/65' : 'text-[15px] text-ink-body'}`}>{s.card}</p>
              {feature ? (
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {s.symptoms.slice(0, 5).map((sym) => (
                    <li key={sym.title} className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[13px] text-white/80">
                      {sym.title}
                    </li>
                  ))}
                </ul>
              ) : null}
              <span className={`relative mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold ${feature ? 'text-flame-glow' : 'text-ink'}`}>
                See common fixes
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.2} />
              </span>
            </Link>
          </li>
        );
      })}
      {showOther ? (
        <li className={otherSpan}>
          <div className="flex h-full flex-col justify-between rounded-card border border-dashed border-ink/20 p-6">
            <div>
              <h3 className="font-display text-xl font-bold tracking-[-0.025em] text-ink">Something else?</h3>
              <p className="mt-2 text-[15px] text-ink-body">Cooktop, wall oven, a second fridge in the garage. Ask us.</p>
            </div>
            <div className="mt-6 flex flex-col gap-2 text-[15px] font-semibold">
              <PhoneLink location="services_grid" className="text-flame hover:underline" label="Call" />
            </div>
          </div>
        </li>
      ) : null}
    </ul>
  );
}

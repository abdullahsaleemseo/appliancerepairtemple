import Link from 'next/link';
import { routes } from '@/config/site';
import { serviceByKey, serviceHref } from '@/content/services';
import type { ApplianceKey } from '@/content/types';
import { Icon } from './Icon';
import { PhoneLink } from './PhoneLink';

export function ServicesGrid({ keys, showOther = true }: { keys: ApplianceKey[]; showOther?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {keys.map((k) => {
        const s = serviceByKey[k];
        return (
          <li key={k}>
            <Link
              href={serviceHref(k)}
              className="group flex h-full flex-col rounded-card bg-white p-6 shadow-card ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-navy transition group-hover:bg-brand-light group-hover:text-brand-dark">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-extrabold text-navy">{s.navLabel}</h3>
              <p className="mt-1.5 flex-1 text-[15px] text-ink-body">{s.card}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[15px] font-bold text-brand-dark">
                Learn more <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        );
      })}
      {showOther ? (
        <li>
          <div className="flex h-full flex-col justify-center rounded-card border-2 border-dashed border-slate-300 p-6">
            <h3 className="font-heading text-lg font-extrabold text-navy">Something else?</h3>
            <p className="mt-1.5 text-[15px] text-ink-body">
              Cooktop, wall oven or a second fridge in the garage. Ask us.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-[15px] font-bold">
              <PhoneLink location="services_grid" className="text-brand-dark hover:underline" label="Call" />
              <Link href={routes.request} className="text-navy hover:underline">
                Request service online
              </Link>
            </div>
          </div>
        </li>
      ) : null}
    </ul>
  );
}

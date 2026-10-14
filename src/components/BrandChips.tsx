import Link from 'next/link';
import { brands, brandHref } from '@/content/brands';

/** Plain text chips: no manufacturer logos, so nothing implies an authorized relationship. */
export function BrandChips({ names }: { names: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {names.map((n) => {
        const b = brands.find((x) => x.name === n && x.hasPage);
        const cls =
          'inline-flex min-h-[44px] items-center rounded-full border border-slate-200 bg-white px-4 text-[15px] font-semibold text-ink-body';
        return (
          <li key={n}>
            {b ? (
              <Link href={brandHref(b)} className={`${cls} hover:border-navy hover:text-navy`}>
                {n}
              </Link>
            ) : (
              <span className={cls}>{n}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

import Link from 'next/link';
import { brands, brandHref } from '@/content/brands';

/** Plain wordmarks set in type: no manufacturer logos, so nothing implies an authorized relationship. */
export function BrandChips({ names }: { names: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {names.map((n) => {
        const b = brands.find((x) => x.name === n && x.hasPage);
        const cls = 'inline-flex min-h-[44px] items-center rounded-full border border-sand bg-white px-5 text-[15px] font-semibold text-ink';
        return (
          <li key={n}>
            {b ? (
              <Link href={brandHref(b)} className={`${cls} transition hover:border-ink hover:bg-ink hover:text-white`}>
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

/** Slow scrolling row of brand names. Pauses on hover and stops for reduced-motion users. */
export function BrandMarquee({ names }: { names: string[] }) {
  const row = [...names, ...names];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <ul className="flex w-max animate-marquee gap-14 hover:[animation-play-state:paused]" aria-label="Appliance brands local pros repair">
        {row.map((n, i) => (
          <li
            key={`${n}-${i}`}
            aria-hidden={i >= names.length ? true : undefined}
            className="whitespace-nowrap font-display text-[28px] font-bold tracking-[-0.03em] text-ink/30 transition hover:text-ink md:text-[34px]"
          >
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}

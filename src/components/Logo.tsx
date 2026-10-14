import { site } from '@/config/site';

/** Wordmark: a stylised appliance door with a spark, set beside the name. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id={light ? 'lg-l' : 'lg-d'} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF9A5C" />
            <stop offset="1" stopColor="#C2500C" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="12" fill={`url(#${light ? 'lg-l' : 'lg-d'})`} />
        <rect x="12.5" y="8.5" width="15" height="23" rx="3" fill="none" stroke="#fff" strokeWidth="2.2" />
        <path d="M12.5 16h15" stroke="#fff" strokeWidth="2.2" />
        <path d="m21.5 19.5-3 4.5h3.5l-2.5 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[18px] font-bold tracking-[-0.03em] ${light ? 'text-white' : 'text-ink'}`}>
          {site.city}
          <span className="font-serif text-[19px] font-normal italic tracking-normal"> Appliance</span>
        </span>
        <span className={`mt-1 block text-[10.5px] font-semibold uppercase tracking-[0.28em] ${light ? 'text-white/55' : 'text-ink-muted'}`}>
          Repair · Bell County
        </span>
      </span>
    </span>
  );
}

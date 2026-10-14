import { site } from '@/config/site';

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 40 40"
        className={`${compact ? 'h-9 w-9' : 'h-10 w-10'} shrink-0 transition-all`}
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="10" fill={light ? '#FFFFFF' : '#0B2B4C'} />
        <rect x="12" y="8" width="16" height="24" rx="2.5" fill="none" stroke={light ? '#0B2B4C' : '#FFFFFF'} strokeWidth="2.2" />
        <path d="M12 16.5h16" stroke={light ? '#0B2B4C' : '#FFFFFF'} strokeWidth="2.2" />
        <path d="M16 11.5v2.5M16 20v4" stroke="#F26A1B" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="leading-none">
        <span className={`block font-heading text-[17px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
          {site.city} Appliance
        </span>
        <span className={`block font-heading text-[13px] font-bold uppercase tracking-[0.14em] ${light ? 'text-brand' : 'text-brand-dark'}`}>
          Repair
        </span>
      </span>
    </span>
  );
}

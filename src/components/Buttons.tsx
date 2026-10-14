import Link from 'next/link';
import { phoneDisplay, routes, tel } from '@/config/site';
import { Icon } from './Icon';

const base =
  'inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-7 py-3 text-[16px] font-semibold tracking-[-0.01em] transition duration-200 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 active:scale-[0.98]';

export const btn = {
  primary: `${base} bg-flame text-white shadow-cta hover:-translate-y-0.5 hover:bg-flame-hover focus-visible:outline-flame-bright`,
  secondary: `${base} border border-ink/15 bg-white text-ink hover:border-ink/40 hover:-translate-y-0.5 focus-visible:outline-ink`,
  navy: `${base} bg-ink text-white hover:bg-ink-700 hover:-translate-y-0.5 focus-visible:outline-ink`,
  onDarkSecondary: `${base} border border-white/20 bg-white/[0.06] text-white backdrop-blur hover:bg-white/[0.12] hover:-translate-y-0.5 focus-visible:outline-white`,
};

export function CallButton({
  className = '',
  location,
  variant = 'primary',
  label = 'Call',
}: {
  className?: string;
  location: string;
  variant?: keyof typeof btn;
  label?: string;
}) {
  return (
    <a href={tel} data-call-location={location} className={`${btn[variant]} ${className}`}>
      <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
        <Icon name="phone" className="h-4 w-4" strokeWidth={2.2} />
      </span>
      <span className="whitespace-nowrap">
        {label} {phoneDisplay}
      </span>
    </a>
  );
}

export function RequestButton({
  className = '',
  variant = 'secondary',
  label = 'Request Service',
  location,
}: {
  className?: string;
  variant?: keyof typeof btn;
  label?: string;
  location: string;
}) {
  return (
    <Link href={routes.request} data-cta={location} className={`${btn[variant]} group ${className}`}>
      {label}
      <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.2} />
    </Link>
  );
}

export function CtaRow({ location, dark = false }: { location: string; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <CallButton location={location} />
      <RequestButton location={location} variant={dark ? 'onDarkSecondary' : 'secondary'} />
    </div>
  );
}

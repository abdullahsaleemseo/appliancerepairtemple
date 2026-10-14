import Link from 'next/link';
import { phoneDisplay, routes, tel } from '@/config/site';
import { Icon } from './Icon';

const base =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2';

export const btn = {
  primary: `${base} bg-brand-dark text-white shadow-sm hover:bg-[#A9440A] focus-visible:outline-brand`,
  secondary: `${base} border-2 border-navy bg-white text-navy hover:bg-navy hover:text-white focus-visible:outline-navy`,
  navy: `${base} bg-navy text-white hover:bg-navy-700 focus-visible:outline-navy`,
  onDarkSecondary: `${base} border-2 border-white/80 text-white hover:bg-white hover:text-navy focus-visible:outline-white`,
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
      <Icon name="phone" className="h-5 w-5" strokeWidth={2} />
      <span>
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
    <Link href={routes.request} data-cta={location} className={`${btn[variant]} ${className}`}>
      {label}
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

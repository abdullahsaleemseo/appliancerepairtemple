import Link from 'next/link';
import { routes, tel } from '@/config/site';
import { Icon } from './Icon';

/** Sticky bottom bar on phones. The page body reserves space for it so it never covers content. */
export function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(11,43,76,.12)] backdrop-blur md:hidden"
      role="region"
      aria-label="Quick contact"
    >
      <a
        href={tel}
        data-call-location="mobile_bar"
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand-dark text-base font-bold text-white focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <Icon name="phone" className="h-5 w-5" strokeWidth={2} />
        Call Now
      </a>
      <Link
        href={routes.request}
        data-cta="mobile_bar"
        className="flex min-h-[52px] items-center justify-center rounded-full bg-navy text-base font-bold text-white focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        Request Service
      </Link>
    </div>
  );
}

import { callHint, phoneDisplay, tel } from '@/config/site';
import { Icon } from './Icon';

/** Sticky bottom bar on phones. The page body reserves space for it so it never covers content. */
export function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden"
      role="region"
      aria-label="Call to get connected"
    >
      <p className="pb-1.5 text-center text-[11.5px] leading-tight text-white/70">{callHint}</p>
      <a
        href={tel}
        data-call-location="mobile_bar"
        className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-flame text-base font-semibold text-white shadow-cta focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
      >
        <Icon name="phone" className="h-5 w-5" strokeWidth={2} />
        Call Now <span className="font-normal text-white/85">{phoneDisplay}</span>
      </a>
    </div>
  );
}

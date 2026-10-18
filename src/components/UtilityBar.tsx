import { site } from '@/config/site';
import { PhoneLink } from './PhoneLink';
import { VerifyTag } from './Verify';

export function UtilityBar() {
  return (
    <div className="border-b border-white/[0.06] bg-ink text-[13px] text-white/70">
      <div className="mx-auto flex max-w-site items-center justify-center gap-4 px-4 py-2 md:justify-between lg:px-6">
        <div className="hidden items-center gap-6 md:flex">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-mint-bright" />
            Connecting {site.city} &amp; {site.county} homeowners with local appliance repair pros
          </span>
        </div>
        <span className="inline-flex items-center gap-2">
          <PhoneLink
            location="utility_bar"
            withIcon
            label="Call to get connected:"
            className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-flame-glow"
          />
          <span className="hidden md:inline">
            {!site.phone.verified ? <VerifyTag label="REPLACE PHONE" /> : null}
          </span>
        </span>
      </div>
    </div>
  );
}

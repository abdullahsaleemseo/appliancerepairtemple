import { canShow, site } from '@/config/site';
import { Icon } from './Icon';
import { PhoneLink } from './PhoneLink';
import { VerifyTag } from './Verify';

export function EmergencyBanner() {
  if (!site.emergencyBanner.enabled) return null;
  return (
    <div className="bg-flame px-4 py-2 text-center text-sm font-semibold text-white">
      <span className="mr-2 inline-block h-2 w-2 animate-pulseDot rounded-full bg-white align-middle" />
      {site.emergencyBanner.text} <PhoneLink location="emergency_banner" className="underline underline-offset-2" />
    </div>
  );
}

export function UtilityBar() {
  return (
    <div className="border-b border-white/[0.06] bg-ink text-[13px] text-white/70">
      <div className="mx-auto flex max-w-site items-center justify-center gap-4 px-4 py-2 md:justify-between lg:px-6">
        <div className="hidden items-center gap-6 md:flex">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-mint-bright" />
            Booking repairs across {site.city} &amp; {site.county}
          </span>
          {canShow(site.hours) ? (
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" className="h-3.5 w-3.5" />
              {site.hours.value.display}
              {!site.hours.verified ? <VerifyTag label="VERIFY HOURS" /> : null}
            </span>
          ) : null}
        </div>
        <span className="inline-flex items-center gap-2">
          <PhoneLink
            location="utility_bar"
            withIcon
            label="Talk to a person:"
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

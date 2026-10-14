import { canShow, site } from '@/config/site';
import { Icon } from './Icon';
import { PhoneLink } from './PhoneLink';
import { VerifyTag } from './Verify';

export function EmergencyBanner() {
  if (!site.emergencyBanner.enabled) return null;
  return (
    <div className="bg-brand-dark px-4 py-2 text-center text-sm font-semibold text-white">
      {site.emergencyBanner.text}{' '}
      <PhoneLink location="emergency_banner" className="underline underline-offset-2" />
    </div>
  );
}

export function UtilityBar() {
  return (
    <>
    <div className="bg-navy px-4 py-2 text-center text-[15px] text-white md:hidden">
      <PhoneLink location="utility_bar_mobile" withIcon label="Tap to call" className="inline-flex items-center gap-2 font-bold" />
    </div>
    <div className="hidden bg-navy text-sm text-white/90 md:block">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-2 lg:px-6">
        <div className="flex items-center gap-5">
          {canShow(site.hours) ? (
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" className="h-4 w-4 text-brand" />
              {site.hours.value.display}
              {!site.hours.verified ? <VerifyTag label="VERIFY HOURS" /> : null}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1.5">
            <Icon name="pin" className="h-4 w-4 text-brand" />
            Serving Temple &amp; Bell County
          </span>
          {site.spanishSpoken.verified && site.spanishSpoken.value ? <span>Se habla español</span> : null}
        </div>
        <PhoneLink
          location="utility_bar"
          withIcon
          showTag
          className="inline-flex items-center gap-1.5 font-bold text-white hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        />
      </div>
    </div>
    </>
  );
}

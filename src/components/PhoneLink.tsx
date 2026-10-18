import { phoneDisplay, site, tel } from '@/config/site';
import { Icon } from './Icon';
import { VerifyTag } from './Verify';

type Props = {
  className?: string;
  withIcon?: boolean;
  label?: string;
  location: string;
  showTag?: boolean;
};

/** Every visible phone number goes through here so it is always a tel: link. */
export function PhoneLink({ className = '', withIcon = false, label, location, showTag = false }: Props) {
  return (
    <>
      <a href={tel} className={className} data-call-location={location} aria-label={`${label ? label : 'Call'} ${phoneDisplay}, ${site.brandName}`}>
        {withIcon ? <Icon name="phone" className="h-5 w-5 shrink-0" strokeWidth={2} /> : null}
        <span>{label ? `${label} ${phoneDisplay}` : phoneDisplay}</span>
      </a>
      {showTag && !site.phone.verified ? <VerifyTag label="REPLACE PHONE BEFORE LAUNCH" /> : null}
    </>
  );
}

import { canShow, claims } from '@/config/site';
import { Icon } from './Icon';
import { VerifyTag } from './Verify';

const items = [
  { claim: claims.licensedInsured, text: claims.licensedInsured.value, icon: 'shield' as const },
  { claim: claims.sameDayShort, text: claims.sameDayShort.value, icon: 'clock' as const },
  { claim: claims.upfrontPricing, text: claims.upfrontPricing.value, icon: 'tag' as const },
  { claim: claims.warranty, text: claims.warranty.value.short, icon: 'check' as const },
];

/** Inline trust row. Only claims that may be shown appear; draft builds tag unverified ones. */
export function TrustBadges({ dark = false }: { dark?: boolean; tone?: string }) {
  const visible = items.filter((i) => canShow(i.claim));
  if (!visible.length) return null;
  return (
    <div>
      <ul className="flex flex-wrap gap-x-6 gap-y-3">
        {visible.map((i) => (
          <li key={i.text} className={`inline-flex items-center gap-2 text-[14.5px] font-medium ${dark ? 'text-white/80' : 'text-ink'}`}>
            <Icon name={i.icon} className={`h-[18px] w-[18px] ${dark ? 'text-mint-bright' : 'text-mint'}`} strokeWidth={2} />
            {i.text}
          </li>
        ))}
      </ul>
      {visible.some((i) => !i.claim.verified) ? (
        <p className="mt-2">
          <VerifyTag label="USE OWNER'S REAL CREDENTIAL AND WARRANTY WORDING" />
        </p>
      ) : null}
    </div>
  );
}

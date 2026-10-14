import { canShow, claims } from '@/config/site';
import { Icon } from './Icon';
import { VerifyTag } from './Verify';

const items = [
  { claim: claims.licensedInsured, text: claims.licensedInsured.value },
  { claim: claims.sameDayShort, text: claims.sameDayShort.value },
  { claim: claims.upfrontPricing, text: claims.upfrontPricing.value },
  { claim: claims.warranty, text: claims.warranty.value.short },
];

export function TrustBadges({ tone = 'white' }: { tone?: 'white' | 'surface' }) {
  const visible = items.filter((i) => canShow(i.claim));
  if (!visible.length) return null;
  const anyUnverified = visible.some((i) => !i.claim.verified);
  return (
    <div className={tone === 'surface' ? 'bg-surface' : 'bg-white'}>
      <div className="mx-auto max-w-site px-4 py-6 lg:px-6">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {visible.map((i) => (
            <li key={i.text} className="flex items-center gap-2.5 rounded-xl bg-white px-3 py-3 font-semibold text-ink shadow-card">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-trust-light text-trust-dark">
                <Icon name="check" className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="text-[15px] leading-tight">{i.text}</span>
            </li>
          ))}
        </ul>
        {anyUnverified ? (
          <p className="mt-2 text-center">
            <VerifyTag label="USE OWNER'S REAL CREDENTIAL AND WARRANTY WORDING" />
          </p>
        ) : null}
      </div>
    </div>
  );
}

import { canShow, claims } from '@/config/site';
import { DraftBlock } from './Verify';

export function StatsStrip({ dark = true }: { dark?: boolean }) {
  const stats = [
    { claim: claims.repairsCompleted, value: claims.repairsCompleted.value, label: 'Repairs completed' },
    { claim: claims.yearsServing, value: claims.yearsServing.value, label: 'Years serving Temple' },
    { claim: claims.rating, value: `${claims.rating.value.value}★`, label: 'Average rating' },
    { claim: claims.responseTime, value: claims.responseTime.value.replace(' response', ''), label: 'Typical response' },
  ].filter((s) => canShow(s.claim));
  if (!stats.length) return null;
  return (
    <DraftBlock show={stats.every((s) => s.claim.verified)} label="REAL NUMBERS ONLY: REPLACE BEFORE LAUNCH">
      <dl className={`grid grid-cols-2 overflow-hidden rounded-card md:grid-cols-4 ${dark ? 'divide-white/[0.08] border border-white/[0.08]' : 'card'}`}>
        {stats.map((s) => (
          <div key={s.label} className={`flex flex-col-reverse p-6 ${dark ? 'border-white/[0.08] [&:not(:last-child)]:border-r' : ''}`}>
            <dt className={`mt-1 text-[13px] ${dark ? 'text-white/55' : 'text-ink-muted'}`}>{s.label}</dt>
            <dd className={`whitespace-nowrap font-display text-3xl font-extrabold tracking-[-0.03em] md:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>{s.value}</dd>
          </div>
        ))}
      </dl>
    </DraftBlock>
  );
}

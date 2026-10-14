import { canShow, claims } from '@/config/site';
import { DraftBlock } from './Verify';

export function StatsStrip() {
  const stats = [
    { claim: claims.repairsCompleted, value: claims.repairsCompleted.value, label: 'Repairs completed' },
    { claim: claims.yearsServing, value: claims.yearsServing.value, label: 'Years serving Temple' },
    { claim: claims.rating, value: `${claims.rating.value.value}★`, label: 'Average rating' },
    { claim: claims.responseTime, value: claims.responseTime.value.replace(' response', ''), label: 'Typical response time' },
  ].filter((s) => canShow(s.claim));
  if (!stats.length) return null;
  return (
    <section aria-label="Company numbers" className="bg-navy py-10 text-white">
      <div className="mx-auto max-w-site px-4 lg:px-6">
        <DraftBlock show={stats.every((s) => s.claim.verified)} label="REAL NUMBERS ONLY: REPLACE BEFORE LAUNCH">
          <dl className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-white/75">{s.label}</dt>
                <dd className="font-heading text-3xl font-extrabold text-brand md:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </DraftBlock>
      </div>
    </section>
  );
}

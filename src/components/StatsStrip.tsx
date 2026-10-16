import { canShow, claims } from '@/config/site';

/** Verified business numbers. The response time is shown with its availability note. */
export function StatsStrip({ dark = true }: { dark?: boolean }) {
  const stats = [claims.repairsCompleted, claims.yearsExperience, claims.rating, claims.responseTime].filter((c) => canShow(c));
  if (!stats.length) return null;
  return (
    <div>
      <dl className={`grid grid-cols-2 overflow-hidden rounded-card md:grid-cols-4 ${dark ? 'border border-white/[0.08]' : 'card'}`}>
        {stats.map((s, i) => (
          <div
            key={s.value.label}
            className={`flex flex-col-reverse p-6 md:p-7 ${dark ? 'border-white/[0.08]' : 'border-sand'} ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} ${i === 1 ? 'md:border-r' : ''} ${i === 2 ? 'md:border-r' : ''}`}
          >
            <dt className={`mt-1 text-[13px] ${dark ? 'text-white/55' : 'text-ink-muted'}`}>
              {s.value.label}
              {s === claims.responseTime ? '*' : ''}
            </dt>
            <dd className={`whitespace-nowrap font-display text-3xl font-extrabold tracking-[-0.03em] md:text-[2.6rem] ${dark ? 'text-white' : 'text-ink'}`}>
              {s.value.value}
              {s === claims.rating ? <span className="text-flame-glow">★</span> : null}
            </dd>
          </div>
        ))}
      </dl>
      {canShow(claims.responseTime) ? (
        <p className={`mt-3 text-[13px] ${dark ? 'text-white/45' : 'text-ink-muted'}`}>
          *Typical response time, {claims.availabilityQualifier}. Not a guaranteed arrival time.
        </p>
      ) : null}
    </div>
  );
}

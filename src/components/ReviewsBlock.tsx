import { isProduction } from '@/config/site';
import { reviews } from '@/content/reviews';
import { Icon } from './Icon';

/**
 * Shows verified reviews only. With none verified, draft builds show three labeled
 * placeholder cards and production renders nothing.
 */
export function ReviewsBlock({ service, limit = 3 }: { service?: string; limit?: number }) {
  const real = reviews.filter((r) => r.verified && (!service || r.service === service)).slice(0, limit);
  if (real.length) {
    return (
      <ul className="grid gap-4 md:grid-cols-3">
        {real.map((r) => (
          <li key={`${r.author}-${r.date}`} className="card flex flex-col p-7">
            <Stars rating={r.rating} />
            <blockquote className="mt-4 flex-1 font-display text-[19px] font-medium leading-snug tracking-[-0.015em] text-ink">“{r.text}”</blockquote>
            <div className="mt-6 flex items-center gap-3 border-t border-sand pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display font-bold text-white">{r.author.charAt(0)}</span>
              <span>
                <span className="block font-semibold text-ink">{r.author}</span>
                <span className="block text-[13px] text-ink-muted">
                  {r.area ? `${r.area} · ` : ''}
                  {r.source}, {new Date(r.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  if (isProduction) return null;
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <li key={i} className="flex min-h-[220px] flex-col justify-center rounded-card border-2 border-dashed border-yellow-400 bg-yellow-50 p-7 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-yellow-900">[REPLACE WITH VERIFIED REVIEW BEFORE LAUNCH]</p>
          <p className="mt-2 text-sm text-yellow-900/80">Real customer name or initials, area, platform, date and the review text as written.</p>
        </li>
      ))}
    </ul>
  );
}

export function hasVerifiedReviews(service?: string) {
  return reviews.some((r) => r.verified && (!service || r.service === service));
}

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5 text-flame-bright" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Icon key={n} name="star" className={`h-[18px] w-[18px] ${n <= rating ? 'fill-current' : ''}`} strokeWidth={1.5} />
      ))}
    </span>
  );
}

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
      <ul className="grid gap-5 md:grid-cols-3">
        {real.map((r) => (
          <li key={`${r.author}-${r.date}`} className="flex flex-col rounded-card bg-white p-6 shadow-card">
            <Stars rating={r.rating} />
            <blockquote className="mt-3 flex-1 text-ink-body">“{r.text}”</blockquote>
            <p className="mt-4 font-bold text-navy">{r.author}</p>
            <p className="text-sm text-ink-muted">
              {r.area ? `${r.area} · ` : ''}
              {r.source}, {new Date(r.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </p>
          </li>
        ))}
      </ul>
    );
  }
  if (isProduction) return null;
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <li key={i} className="flex min-h-[200px] flex-col justify-center rounded-card border-2 border-dashed border-yellow-400 bg-yellow-50 p-6 text-center">
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
    <span className="flex gap-0.5 text-amber-500" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Icon key={n} name="star" className={`h-5 w-5 ${n <= rating ? 'fill-current' : ''}`} strokeWidth={1.5} />
      ))}
    </span>
  );
}

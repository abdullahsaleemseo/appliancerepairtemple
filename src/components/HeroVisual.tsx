import Image from 'next/image';
import { canShow, claims, isProduction } from '@/config/site';
import { Icon } from './Icon';
import { Stars, hasVerifiedReviews } from './ReviewsBlock';
import { reviews } from '@/content/reviews';

/**
 * Set this to a real, licensed photo of the owner's technician or van once available
 * (local WebP or AVIF in /public/images). Until then a neutral illustration is used.
 */
const heroPhoto: { src: string; alt: string } | null = null;

export function HeroVisual() {
  const review = hasVerifiedReviews() ? reviews.find((r) => r.verified) : null;
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-gradient-to-br from-navy via-navy-700 to-navy-600 shadow-lift sm:aspect-[5/5]">
        {heroPhoto ? (
          <Image src={heroPhoto.src} alt={heroPhoto.alt} fill priority sizes="(min-width: 1024px) 520px, 90vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0 grid grid-cols-3 content-center gap-5 p-10 text-white/85" aria-hidden="true">
            {(['refrigerator', 'washer', 'oven', 'dishwasher', 'dryer', 'microwave'] as const).map((n) => (
              <span key={n} className="flex aspect-square items-center justify-center rounded-2xl bg-white/[0.07] ring-1 ring-white/10">
                <Icon name={n} className="h-12 w-12" strokeWidth={1.4} />
              </span>
            ))}
          </div>
        )}
        {!heroPhoto && !isProduction ? (
          <span className="absolute left-3 top-3 rounded bg-yellow-200 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-yellow-900">
            [REPLACE WITH REAL TECHNICIAN PHOTO]
          </span>
        ) : null}
      </div>

      {canShow(claims.sameDayShort) ? (
        <div className="absolute -left-3 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:-left-8">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-trust-light text-trust-dark">
            <Icon name="calendar" className="h-5 w-5" strokeWidth={2} />
          </span>
          <span>
            <span className="block text-sm font-extrabold text-navy">Same-Day Available</span>
            <span className="block text-xs text-ink-muted">Subject to schedule</span>
          </span>
          {!claims.sameDayShort.verified ? <span className="absolute -bottom-2 right-2 rounded bg-yellow-200 px-1 text-[10px] font-bold text-yellow-900">[VERIFY]</span> : null}
        </div>
      ) : null}

      {review ? (
        <figure className="absolute -bottom-6 -right-2 max-w-[260px] rounded-2xl bg-white p-4 shadow-lift sm:-right-6">
          <Stars rating={review.rating} />
          <blockquote className="mt-2 line-clamp-3 text-sm text-ink">“{review.text}”</blockquote>
          <figcaption className="mt-2 text-xs font-semibold text-ink-muted">
            {review.author}, {review.source}
          </figcaption>
        </figure>
      ) : !isProduction ? (
        <div className="absolute -bottom-6 -right-2 max-w-[240px] rounded-2xl border-2 border-dashed border-yellow-400 bg-yellow-50 p-4 text-xs font-bold uppercase text-yellow-900 shadow-lift sm:-right-6">
          [REVIEW SNIPPET: REAL REVIEW ONLY]
        </div>
      ) : null}
    </div>
  );
}

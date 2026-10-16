import Link from 'next/link';
import { canShow, claims, routes, site } from '@/config/site';
import { Icon } from './Icon';
import { Stars } from './ReviewsBlock';

const shareHref = `${routes.reviews}#share`;

/**
 * "Leave us a review" prompt used where review cards would sit. Links to the share section of the Reviews page.
 * band: full-width section. card: compact block inside a content column.
 */
export function ShareExperience({ variant = 'band', place }: { variant?: 'band' | 'card'; place?: string }) {
  const rating = canShow(claims.rating) ? claims.rating.value.value : null;
  const where = place ? ` in ${place}` : '';

  if (variant === 'card') {
    return (
      <aside aria-labelledby="share-heading" className="grain relative overflow-hidden rounded-card bg-ink p-8 text-white md:p-10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame/30 blur-[80px]" />
        <h2 id="share-heading" className="relative font-display text-3xl font-bold tracking-[-0.03em] text-white">
          Worked with us? <span className="accent text-flame-glow">Share your experience.</span>
        </h2>
        <p className="relative mt-3 max-w-xl text-white/70">
          Tell us how your repair{where} went. Your feedback helps neighbors choose with confidence and helps us keep improving.
        </p>
        <Link
          href={shareHref}
          className="relative mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 font-semibold text-ink transition hover:bg-flame-soft"
        >
          Leave us a review <Icon name="arrow" className="h-4 w-4 text-flame" />
        </Link>
      </aside>
    );
  }

  return (
    <section aria-labelledby="share-heading" className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto max-w-site px-4 lg:px-6">
        <div className="grain relative grid items-center gap-10 overflow-hidden rounded-card bg-ink p-8 text-white md:p-12 lg:grid-cols-[1.4fr_1fr]">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-flame/25 blur-[100px]" />
          <div className="relative">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-flame-glow">Your feedback</p>
            <h2 id="share-heading" className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] text-white md:text-5xl">
              Worked with us? <span className="accent text-flame-glow">Share your experience.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/70">
              Tell us how your repair{where} went, what we got right and what we could do better. It helps other {site.city}-area
              homeowners choose with confidence.
            </p>
            <Link
              href={shareHref}
              className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-flame px-7 font-semibold text-white shadow-cta transition hover:-translate-y-0.5 hover:bg-flame-hover"
            >
              Leave us a review <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          {rating ? (
            <div className="relative rounded-card border border-white/10 bg-white/[0.05] p-7">
              <span className="font-display text-6xl font-extrabold tracking-[-0.04em] text-white">{rating}</span>
              <span className="mt-2 block">
                <Stars rating={Math.round(Number(rating))} />
              </span>
              <span className="mt-2 block text-white/60">Average customer rating across the internet</span>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

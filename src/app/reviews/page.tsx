import { notFound } from 'next/navigation';
import { claims, isProduction, routes, site } from '@/config/site';
import { reviewPlatforms } from '@/content/reviews';
import { PageHero } from '@/components/PageHero';
import { FinalCta } from '@/components/FinalCta';
import { ReviewsBlock, Stars, hasVerifiedReviews } from '@/components/ReviewsBlock';
import { DraftBlock } from '@/components/Verify';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Customer Reviews | ${site.brandName}, ${site.city} ${site.stateAbbr}`,
  description: `Reviews from appliance repair customers in ${site.city} and ${site.county}.`,
  path: routes.reviews,
  // Kept out of the index until real reviews are on the page.
  noindex: !hasVerifiedReviews(),
});

export default function ReviewsPage() {
  if (isProduction && !hasVerifiedReviews()) notFound();
  return (
    <>
      <PageHero crumbs={[{ name: 'Reviews', path: routes.reviews }]} title="Customer" accent="Reviews">
        <DraftBlock show={claims.rating.verified} label="AGGREGATE RATING: REAL PLATFORM DATA ONLY">
          <div className="inline-flex flex-wrap items-center gap-4 rounded-card border border-white/10 bg-white/[0.05] p-6">
            <span className="font-display text-6xl font-extrabold tracking-[-0.04em] text-white">{claims.rating.value.value}</span>
            <span>
              <Stars rating={Math.round(Number(claims.rating.value.value))} />
              <span className="mt-1 block text-white/60">
                Average customer rating
              </span>
            </span>
          </div>
        </DraftBlock>
      </PageHero>
      <div className="mx-auto max-w-site px-4 py-20 lg:px-6">
        <ReviewsBlock limit={50} />
        {reviewPlatforms.some((p) => p.leaveReviewUrl) ? (
          <div className="grain mt-12 rounded-card bg-ink p-8 text-white md:p-10">
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white">Had a good experience? Leave us a review</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {reviewPlatforms
                .filter((p) => p.leaveReviewUrl)
                .map((p) => (
                  <li key={p.name}>
                    <a href={p.leaveReviewUrl} rel="noopener" className="inline-flex min-h-[48px] items-center rounded-full bg-white px-6 font-semibold text-ink">
                      Review us on {p.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ) : null}
      </div>
      <FinalCta formId="reviews_final" />
    </>
  );
}

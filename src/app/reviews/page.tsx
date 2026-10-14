import { notFound } from 'next/navigation';
import { claims, isProduction, routes, site } from '@/config/site';
import { reviewPlatforms } from '@/content/reviews';
import { Breadcrumbs } from '@/components/Breadcrumbs';
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
      <div className="bg-surface">
        <div className="mx-auto max-w-site px-4 pb-16 pt-6 lg:px-6">
          <Breadcrumbs items={[{ name: 'Reviews', path: routes.reviews }]} />
          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">Customer Reviews</h1>
          <DraftBlock show={claims.rating.verified} label="AGGREGATE RATING: REAL PLATFORM DATA ONLY">
            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-card bg-white p-6 shadow-card">
              <span className="font-heading text-5xl font-extrabold text-navy">{claims.rating.value.value}</span>
              <span>
                <Stars rating={Math.round(Number(claims.rating.value.value))} />
                <span className="mt-1 block text-ink-body">
                  {claims.rating.value.count} reviews on {claims.rating.value.source}
                </span>
              </span>
            </div>
          </DraftBlock>
          <div className="mt-10">
            <ReviewsBlock limit={50} />
          </div>
          {reviewPlatforms.some((p) => p.leaveReviewUrl) ? (
            <div className="mt-12 rounded-card bg-navy p-8 text-white">
              <h2 className="font-heading text-2xl font-extrabold text-white">Had a good experience? Leave us a review</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {reviewPlatforms
                  .filter((p) => p.leaveReviewUrl)
                  .map((p) => (
                    <li key={p.name}>
                      <a href={p.leaveReviewUrl} rel="noopener" className="inline-flex min-h-[44px] items-center rounded-full bg-white px-5 font-bold text-navy">
                        Review us on {p.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <FinalCta formId="reviews_final" />
    </>
  );
}

import { canShow, claims, routes, site } from '@/config/site';
import { reviewPlatforms } from '@/content/reviews';
import type { Faq } from '@/content/types';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Stars } from '@/components/ReviewsBlock';
import { Section, SectionHeading } from '@/components/Section';
import { StatsStrip } from '@/components/StatsStrip';
import { FeedbackForm } from '@/components/forms/FeedbackForm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Customer Reviews & Feedback | ${site.brandName}`,
  description: `Customer ratings and feedback for ${site.brandName}, in-home appliance repair in ${site.city}, ${site.stateAbbr}. Worked with us? Share your experience with us here.`,
  path: routes.reviews,
});

const reviewFaqs: Faq[] = [
  {
    q: 'Where can I leave a review?',
    a: 'Use the form on this page. It takes about a minute and goes straight to our team. You can also leave a review on the platform where you found us.',
  },
  {
    q: 'Will my feedback be published?',
    a: 'Only if you tick the box that allows it. If you do, we may share your comments on this website with your first name and town. We never publish your phone number or email.',
  },
  {
    q: 'What if something did not go right with my repair?',
    a: 'Tell us in the form or call us. We read every message and would rather hear about a problem than have you live with it.',
  },
];

export default function ReviewsPage() {
  const rating = canShow(claims.rating) ? claims.rating.value.value : null;
  const promises = [
    { show: canShow(claims.licensedInsured), icon: 'shield' as const, title: 'Licensed & insured', text: 'Every visit is handled by a licensed and insured team.' },
    {
      show: canShow(claims.sameDayShort),
      icon: 'clock' as const,
      title: 'Same-day service',
      text: `Available, ${claims.availabilityQualifier}. Typical response is about 60 minutes during business hours.`,
    },
    { show: true, icon: 'chat' as const, title: 'Plain explanations', text: 'You hear what failed and what the repair involves before any work starts.' },
    { show: canShow(claims.paymentOptions), icon: 'tag' as const, title: 'Flexible payment', text: 'Flexible payment options are available. Ask when you call.' },
  ].filter((p) => p.show);

  return (
    <>
      <PageHero
        crumbs={[{ name: 'Reviews', path: routes.reviews }]}
        title="Customer Reviews"
        accent="and your feedback."
        aside={
          rating ? (
            <div className="rounded-card border border-white/10 bg-white/[0.05] p-7 backdrop-blur">
              <span className="font-display text-7xl font-extrabold tracking-[-0.04em] text-white">{rating}</span>
              <span className="mt-3 block">
                <Stars rating={Math.round(Number(rating))} />
              </span>
              <span className="mt-2 block text-white/65">Average customer rating across the internet</span>
            </div>
          ) : undefined
        }
      >
        <div className="prose-copy prose-dark">
          <p>
            Homeowners across {site.city} and {site.county} call us when a refrigerator, washer, dryer, dishwasher or oven stops
            working. What they tell us afterwards shapes how we work. If we have been to your home, we would like to hear how it went.
          </p>
        </div>
        <a
          href="#share"
          className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-flame px-7 font-semibold text-white shadow-cta transition hover:-translate-y-0.5 hover:bg-flame-hover"
        >
          Share your experience <Icon name="arrow" className="h-4 w-4" />
        </a>
      </PageHero>

      <section aria-label="By the numbers" className="bg-ink pb-16">
        <div className="mx-auto max-w-site px-4 lg:px-6">
          <StatsStrip />
        </div>
      </section>

      <Section tone="white" labelledBy="promise-heading">
        <SectionHeading id="promise-heading" eyebrow="What customers count on" title="The reasons people" accent="call us back." />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <li key={p.title} className="card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-flame-soft text-flame">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-[21px] font-bold tracking-[-0.025em] text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] text-ink-body">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="share" labelledBy="feedback-heading" className="scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading id="feedback-heading" eyebrow="Share your experience" title="How did" accent="we do?" />
            <div className="prose-copy -mt-4">
              <p>
                A few words about your repair help other homeowners decide who to call, and they tell us what to keep doing and what
                to improve.
              </p>
              <p>
                Your feedback goes straight to the {site.brandName} team. If you allow it, we may share your comments on this site
                with your first name and town. Your contact details are never published.
              </p>
              <p>
                Prefer to talk? Call <PhoneLink location="reviews_page" />.
              </p>
            </div>
            {reviewPlatforms.some((p) => p.leaveReviewUrl) ? (
              <ul className="mt-8 flex flex-wrap gap-3">
                {reviewPlatforms
                  .filter((p) => p.leaveReviewUrl)
                  .map((p) => (
                    <li key={p.name}>
                      <a
                        href={p.leaveReviewUrl}
                        rel="noopener"
                        className="inline-flex min-h-[48px] items-center rounded-full border border-ink px-6 font-semibold text-ink transition hover:bg-ink hover:text-white"
                      >
                        Review us on {p.name}
                      </a>
                    </li>
                  ))}
              </ul>
            ) : null}
          </div>
          <FeedbackForm />
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Reviews and" accent="feedback." />
          <FaqList faqs={reviewFaqs} />
        </div>
      </Section>

      <FinalCta formId="reviews_final" />
    </>
  );
}

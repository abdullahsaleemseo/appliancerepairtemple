import Link from 'next/link';
import { canShow, claims, isProduction, phoneDisplay, routes, site } from '@/config/site';
import { homeFaqs } from '@/content/faqs';
import { otherBrands, brands } from '@/content/brands';
import { primaryServiceKeys } from '@/content/services';
import { AreaBlock } from '@/components/AreaList';
import { BrandChips } from '@/components/BrandChips';
import { CallButton, RequestButton } from '@/components/Buttons';
import { ComparisonTable } from '@/components/ComparisonTable';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HeroVisual } from '@/components/HeroVisual';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PaymentStrip, PricingCards } from '@/components/PricingBlock';
import { ReviewsBlock, hasVerifiedReviews } from '@/components/ReviewsBlock';
import { Section, SectionHeading } from '@/components/Section';
import { ServicesGrid } from '@/components/ServicesGrid';
import { StatsStrip } from '@/components/StatsStrip';
import { TrustBadges } from '@/components/TrustBadges';
import { VerifyTag } from '@/components/Verify';
import { pageMetadata } from '@/lib/seo';
import { websiteSchema } from '@/lib/schema';

export const metadata = pageMetadata({
  title: `Appliance Repair in ${site.city}, ${site.stateAbbr} | ${site.brandName}`,
  description: `Need appliance repair in ${site.city}? Request service for refrigerators, washers, dryers, dishwashers, ovens and more. Call ${phoneDisplay} today.`,
  path: '/',
});

const benefits = [
  {
    icon: 'tag' as const,
    title: 'A price before any work',
    text: 'The technician finds the problem, tells you what failed and what the repair costs. Nothing gets replaced until you say yes.',
  },
  {
    icon: 'tool' as const,
    title: 'The brands in your kitchen',
    text: 'Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, Bosch and more. Give us the model number and we can check parts before the visit.',
  },
  {
    icon: 'calendar' as const,
    title: 'Scheduling that fits your day',
    text: 'We confirm a visit window by phone and call ahead before the technician arrives.',
  },
  {
    icon: 'pin' as const,
    title: 'Local to Bell County',
    text: 'Temple is the center of our route, with regular visits to Belton, Killeen, Harker Heights and Salado.',
  },
];

export default function HomePage() {
  const chips = [
    canShow(claims.rating) ? { text: `★ ${claims.rating.value.value} rating`, v: claims.rating.verified } : null,
    canShow(claims.repairsCompleted) ? { text: `${claims.repairsCompleted.value} repairs`, v: claims.repairsCompleted.verified } : null,
    canShow(claims.responseTime) ? { text: claims.responseTime.value, v: claims.responseTime.verified } : null,
  ].filter(Boolean) as { text: string; v: boolean }[];

  return (
    <>
      <JsonLd data={websiteSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-navy-50 to-[#d5e4f3] blur-2xl" />
        <div className="relative mx-auto grid max-w-site items-center gap-12 px-4 pb-16 pt-8 md:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-6 lg:pb-24">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-brand-dark">
              Local repair you can count on
            </p>
            <h1 className="font-heading text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]">
              Appliance Repair in {site.city}, {site.state}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-body md:text-xl">
              Refrigerators, washers, dryers, dishwashers, ovens and freezers, repaired in your home across {site.city} and{' '}
              {site.county}. You get the diagnosis and the price before any work starts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton location="hero" className="text-lg" />
              <RequestButton location="hero" label="Get a Free Quote" />
            </div>
            {chips.length ? (
              <ul className="mt-7 flex flex-wrap items-center gap-2.5">
                {chips.map((c) => (
                  <li key={c.text} className="rounded-full bg-surface px-3.5 py-1.5 text-sm font-semibold text-navy">
                    {c.text}
                  </li>
                ))}
                {chips.some((c) => !c.v) ? <VerifyTag label="REAL NUMBERS ONLY" /> : null}
              </ul>
            ) : null}
          </div>
          <HeroVisual />
        </div>
      </section>

      <TrustBadges tone="surface" />
      <StatsStrip />

      {/* Services */}
      <Section id="services" labelledBy="services-heading">
        <SectionHeading
          id="services-heading"
          eyebrow="What we fix"
          title="Pick your appliance"
          intro="Tap the one that’s giving you trouble to see common problems, what the repair involves and how to book."
        />
        <ServicesGrid keys={primaryServiceKeys} />
        <p className="mt-6 text-ink-body">
          Also: <Link href="/microwave-repair-temple-tx/" className="font-semibold text-navy underline">over-the-range microwave repair</Link>. Or
          read about <Link href={routes.cityPage} className="font-semibold text-navy underline">appliance repair in {site.city}</Link> in more detail.
        </p>
      </Section>

      {/* Why choose us */}
      <Section tone="surface" labelledBy="why-heading">
        <SectionHeading id="why-heading" eyebrow="Why call us" title="Straight answers, fair prices, work done right" />
        <div className="grid gap-10 lg:grid-cols-2">
          <ul className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b.title} className="rounded-card bg-white p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-extrabold text-navy">{b.title}</h3>
                <p className="mt-2 text-[15px] text-ink-body">{b.text}</p>
              </li>
            ))}
          </ul>
          <ComparisonTable />
        </div>
      </Section>

      {/* How it works */}
      <Section labelledBy="how-heading">
        <SectionHeading id="how-heading" eyebrow="How it works" title="Three steps to a working appliance" center />
        <HowItWorks />
      </Section>

      {/* Brands */}
      <Section tone="surface" labelledBy="brands-heading">
        <SectionHeading
          id="brands-heading"
          eyebrow="Brands"
          title="Brands we service"
          intro="We work on most major household brands. Not on the list? Call and ask."
        />
        <BrandChips names={[...brands.map((b) => b.name), ...otherBrands]} />
        <p className="mt-6">
          <Link href={routes.brands} className="inline-flex items-center gap-1 font-bold text-brand-dark hover:underline">
            See all brands <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </p>
      </Section>

      {/* Service area */}
      <Section labelledBy="area-heading">
        <SectionHeading
          id="area-heading"
          eyebrow="Service area"
          title={`${site.city} and the towns around it`}
          intro={`Based around ${site.city}, covering ${site.county} and nearby ${site.region}.`}
        />
        <AreaBlock />
      </Section>

      {/* Reviews */}
      {hasVerifiedReviews() || !isProduction ? (
        <Section tone="surface" labelledBy="reviews-heading">
          <SectionHeading id="reviews-heading" eyebrow="Reviews" title="What Temple customers say" />
          <ReviewsBlock />
          {hasVerifiedReviews() ? (
            <p className="mt-6">
              <Link href={routes.reviews} className="inline-flex items-center gap-1 font-bold text-brand-dark hover:underline">
                Read all reviews <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </p>
          ) : null}
        </Section>
      ) : null}

      {/* Pricing */}
      {canShow(claims.diagnosticFee) ? (
        <Section labelledBy="pricing-heading">
          <SectionHeading
            id="pricing-heading"
            eyebrow="Pricing"
            title="Know the price before we start"
            intro="Every repair starts with a diagnosis. You get the full price before any part is replaced."
          />
          <PricingCards />
          <div className="mt-8">
            <PaymentStrip />
          </div>
        </Section>
      ) : null}

      {/* FAQ */}
      <Section tone="surface" labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions we hear a lot" />
            <Link href={routes.faq} className="inline-flex items-center gap-1 font-bold text-brand-dark hover:underline">
              All frequently asked questions <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <FaqList faqs={homeFaqs} />
        </div>
      </Section>

      <FinalCta title="Appliance broken? Let’s get it fixed." formId="home_final" />
    </>
  );
}

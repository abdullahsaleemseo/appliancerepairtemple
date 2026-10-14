import Link from 'next/link';
import { canShow, claims, isProduction, phoneDisplay, routes, site } from '@/config/site';
import { brands, otherBrands } from '@/content/brands';
import { homeFaqs } from '@/content/faqs';
import { primaryServiceKeys, serviceHref, services } from '@/content/services';
import { AreaBlock } from '@/components/AreaList';
import { BrandMarquee } from '@/components/BrandChips';
import { CallButton, RequestButton } from '@/components/Buttons';
import { ComparisonTable } from '@/components/ComparisonTable';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PaymentStrip, PricingCards } from '@/components/PricingBlock';
import { ProblemPicker } from '@/components/ProblemPicker';
import { ReviewsBlock, hasVerifiedReviews } from '@/components/ReviewsBlock';
import { Section, SectionHeading } from '@/components/Section';
import { ServicesGrid } from '@/components/ServicesGrid';
import { StatsStrip } from '@/components/StatsStrip';
import { TrustBadges } from '@/components/TrustBadges';
import { VerifyTag } from '@/components/Verify';
import { websiteSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair in ${site.city}, ${site.stateAbbr} | ${site.brandName}`,
  description: `Need appliance repair in ${site.city}? Request service for refrigerators, washers, dryers, dishwashers, ovens and more. Call ${phoneDisplay} today.`,
  path: '/',
});

const benefits = [
  {
    icon: 'tag' as const,
    title: 'A price before any work',
    text: 'The technician finds the problem and tells you what the repair costs. Nothing gets replaced until you say yes.',
  },
  {
    icon: 'tool' as const,
    title: 'Tested, not guessed',
    text: 'Parts are checked with a meter before anything is ordered, so you pay for the part that failed and nothing else.',
  },
  {
    icon: 'calendar' as const,
    title: 'A time that fits your day',
    text: 'We confirm a visit window by phone and call ahead before the technician pulls up.',
  },
  {
    icon: 'pin' as const,
    title: 'Local to Bell County',
    text: `${site.city} is the center of our route, with regular visits to Belton, Killeen, Harker Heights and Salado.`,
  },
];

const pickerItems = services.map((s) => ({
  key: s.key,
  name: s.name,
  icon: s.icon,
  href: serviceHref(s.key),
  symptoms: s.symptoms.slice(0, 3).map((x) => x.title),
}));

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />

      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[620px] w-[620px] rounded-full bg-flame/30 blur-[150px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-frost/15 blur-[140px]" />

        <div className="relative mx-auto grid max-w-site items-center gap-14 px-4 pb-20 pt-12 md:pt-16 lg:grid-cols-[1.12fr_1fr] lg:gap-16 lg:px-6 lg:pb-28 lg:pt-20">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pl-2 pr-4 text-[13px] font-medium text-white/80 backdrop-blur">
              <span className="flex h-6 items-center gap-1.5 rounded-full bg-mint-bright/15 px-2 text-[12px] font-semibold text-mint-bright">
                <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-mint-bright" />
                Booking now
              </span>
              In-home repair across {site.county}
            </p>
            <h1 className="h-display mt-7 text-[2.9rem] text-white sm:text-[4.2rem] lg:text-[5rem]">
              Appliance Repair in {site.city}, {site.state}
              <span className="accent mt-1 block text-[0.92em] text-flame-glow">without the guesswork.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">
              Fridge warm, washer full of water, dryer blowing cold? A technician comes to your home, finds the failed part and
              gives you the price before any work starts.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CallButton location="hero" className="text-[17px]" />
              <RequestButton location="hero" label="Get a Free Quote" variant="onDarkSecondary" />
            </div>
            <div className="mt-10 border-t border-white/10 pt-6">
              <TrustBadges dark />
            </div>
          </div>
          <ProblemPicker items={pickerItems} />
        </div>
      </section>

      {/* Brands */}
      <section aria-labelledby="brands-heading" className="border-b border-sand bg-canvas py-10">
        <div className="mx-auto max-w-site px-4 lg:px-6">
          <h2 id="brands-heading" className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
            We repair the brands already in your kitchen
          </h2>
          <BrandMarquee names={[...brands.map((b) => b.name), ...otherBrands]} />
        </div>
      </section>

      {/* Services */}
      <Section id="services" labelledBy="services-heading">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="services-heading"
            eyebrow="What we fix"
            title="Pick the appliance."
            accent="We’ll handle the rest."
            intro="Each page lists the problems we see most, what usually causes them and what the repair involves."
            className="!mb-0"
          />
          <Link href={routes.cityPage} className="link-arrow shrink-0">
            All repairs in {site.city}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12">
          <ServicesGrid keys={primaryServiceKeys} />
        </div>
        <p className="mt-6 text-ink-body">
          Also:{' '}
          <Link href={serviceHref('microwave')} className="font-semibold text-ink underline decoration-flame underline-offset-4">
            over-the-range microwave repair
          </Link>
          .
        </p>
      </Section>

      {/* Why us */}
      <Section tone="ink" labelledBy="why-heading">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-flame/20 blur-[140px]" />
        <SectionHeading id="why-heading" eyebrow="Why call us" title="Straight answers." accent="Fair prices." dark />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b.title} className="card-dark p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-flame/15 text-flame-glow">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-[21px] font-bold tracking-[-0.025em] text-white">{b.title}</h3>
                <p className="mt-2 text-[15px] text-white/60">{b.text}</p>
              </li>
            ))}
          </ul>
          <ComparisonTable />
        </div>
        <div className="mt-6">
          <StatsStrip />
        </div>
      </Section>

      {/* How it works */}
      <Section labelledBy="how-heading">
        <SectionHeading id="how-heading" eyebrow="How it works" title="Three steps to a" accent="working appliance." center />
        <HowItWorks />
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallButton location="how_it_works" />
          <RequestButton location="how_it_works" />
        </div>
      </Section>

      {/* Reviews */}
      {hasVerifiedReviews() || !isProduction ? (
        <Section tone="white" labelledBy="reviews-heading">
          <SectionHeading id="reviews-heading" eyebrow="Reviews" title="What neighbors in" accent={`${site.city} say.`} />
          <ReviewsBlock />
          {hasVerifiedReviews() ? (
            <p className="mt-8">
              <Link href={routes.reviews} className="link-arrow">
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
            title="Know the price"
            accent="before we start."
            intro="Every repair starts with a diagnosis. You get the full price before any part is replaced."
          />
          <PricingCards />
          <div className="mt-6">
            <PaymentStrip />
          </div>
        </Section>
      ) : null}

      {/* Service area */}
      <Section tone="white" labelledBy="area-heading">
        <SectionHeading
          id="area-heading"
          eyebrow="Service area"
          title={`${site.city} and the towns`}
          accent="around it."
          intro={`Based in ${site.city}, covering ${site.county} and nearby ${site.region}. Technicians come to you.`}
        />
        <AreaBlock />
      </Section>

      {/* FAQ */}
      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions we" accent="hear a lot." />
            <Link href={routes.faq} className="link-arrow -mt-6">
              All frequently asked questions <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <FaqList faqs={homeFaqs} />
        </div>
      </Section>

      <FinalCta formId="home_final" />
      {!isProduction ? (
        <p className="bg-canvas pb-6 text-center">
          <VerifyTag label="DRAFT MODE: YELLOW TAGS DISAPPEAR IN PRODUCTION" />
        </p>
      ) : null}
    </>
  );
}

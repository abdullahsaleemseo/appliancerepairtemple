import Link from 'next/link';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { brands, otherBrands } from '@/content/brands';
import { cityFaqs } from '@/content/faqs';
import { serviceHref, services } from '@/content/services';
import { AreaBlock } from '@/components/AreaList';
import { BrandChips } from '@/components/BrandChips';
import { PageHero } from '@/components/PageHero';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { ReviewsBlock, hasVerifiedReviews } from '@/components/ReviewsBlock';
import { Section, SectionHeading } from '@/components/Section';
import { ServicesGrid } from '@/components/ServicesGrid';
import { TrustBadges } from '@/components/TrustBadges';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

const path = routes.cityPage;

export const metadata = pageMetadata({
  title: `Appliance Repair ${site.city}, ${site.stateAbbr}: Fridge, Washer, Dryer & Oven | ${site.shortName}`,
  description: `In-home appliance repair in ${site.city}, ${site.stateAbbr}. Common problems, what a visit covers, brands serviced and ZIP codes. Request service or call.`,
  path,
});

const problems = [
  {
    title: 'Refrigerator not cooling',
    text: 'Usually a frosted evaporator, a stopped fan or a failed start relay. Most of these are fixed in one visit.',
    key: 'refrigerator' as const,
  },
  {
    title: 'Washer not draining',
    text: 'A sock in the pump, a clogged filter or a failed drain pump. The pump is one of the most common washer parts we replace.',
    key: 'washer' as const,
  },
  {
    title: 'Dryer not heating',
    text: 'Heating element, thermal fuse or gas igniter. A clogged vent is often the reason the part failed, so we check airflow too.',
    key: 'dryer' as const,
  },
  {
    title: 'Dishwasher leaving dishes dirty',
    text: 'Clogged spray arms, a dirty filter or low water fill. Mineral scale from hard water makes it worse over time.',
    key: 'dishwasher' as const,
  },
  {
    title: 'Oven not heating',
    text: 'A burned bake element on electric models, a weak igniter on gas. Both are standard parts.',
    key: 'oven' as const,
  },
  {
    title: 'Garage freezer struggling',
    text: 'Dirty condenser coils, a failing relay or a worn lid seal. Summer heat in a Texas garage makes all three show up faster.',
    key: 'freezer' as const,
  },
  {
    title: 'Ice maker stopped',
    text: 'A frozen fill tube, a bad water inlet valve or a worn-out ice maker module.',
    key: 'refrigerator' as const,
  },
  {
    title: 'Washer shaking across the floor',
    text: 'An unlevel machine or worn suspension rods and shocks. The parts are inexpensive.',
    key: 'washer' as const,
  },
];

const expectSteps = [
  { title: 'You call or send a request', text: 'Tell us the appliance, the brand and what it is doing. We confirm a visit window.' },
  { title: 'The technician diagnoses it', text: 'Parts get tested with a meter, not guessed at. You hear what failed and why.' },
  { title: 'You approve the price', text: 'You get the repair price before any work starts. If it is not worth fixing, we say so.' },
];

export default function CityPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Appliance Repair in ${site.city}, ${site.state}`,
          description: `In-home repair for refrigerators, freezers, washers, dryers, dishwashers, ovens and microwaves in ${site.city}, ${site.stateAbbr}.`,
          path,
          serviceType: 'Appliance repair',
        })}
      />

      <PageHero crumbs={[{ name: `Appliance Repair ${site.city}`, path }]} title={`Appliance Repair in ${site.city}, ${site.state}`}>
        <p className="text-lg leading-relaxed text-white/70 md:text-xl">
          Most breakdowns in {site.city} come down to a handful of parts: a fan motor, a pump, a heating element, a switch or a
          valve. We find the one that failed, replace only that, and tell you the price before starting.
        </p>
        <div className="mt-8">
          <CtaRow location="city_hero" dark />
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <TrustBadges dark />
        </div>
      </PageHero>

      <Section labelledBy="intro-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading id="intro-heading" eyebrow="Local repair" title="Built around" accent={`${site.city} homes.`} />
          <div className="prose-copy">
            <p>
              We repair refrigerators, freezers, washers, dryers, dishwashers, ranges and over-the-range microwaves in homes across{' '}
              {site.city}, from older houses near downtown to newer neighborhoods on the west and south sides. We also cover Belton,
              Killeen, Harker Heights, Salado and other {site.county} communities.
            </p>
            <p>
              Central Texas puts its own kind of wear on appliances. Long, hot summers keep refrigerators and garage freezers running
              almost nonstop, and mineral-heavy water leaves scale in dishwashers, washer inlet screens and ice makers. We keep both
              in mind when we diagnose a problem, because fixing the part without fixing the cause just means another call later.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="help-heading">
        <SectionHeading id="help-heading" eyebrow="We help with" title="Appliances we repair" accent={`in ${site.city}.`} />
        <ServicesGrid keys={services.map((s) => s.key)} showOther />
      </Section>

      <Section tone="ink" labelledBy="problems-heading">
        <SectionHeading
          id="problems-heading"
          eyebrow="Common problems"
          title="What usually goes wrong,"
          accent="and what fixes it."
          intro={`The calls we get most often in ${site.city}. Each links to more detail on that appliance.`}
          dark
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {problems.map((p) => (
            <li key={p.title}>
              <Link href={serviceHref(p.key)} className="card-dark group flex h-full flex-col p-7 transition hover:bg-white/[0.07]">
                <h3 className="font-display text-[21px] font-bold tracking-[-0.025em] text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-[15px] text-white/60">{p.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-flame-glow">
                  More on {p.key === 'oven' ? 'oven and stove' : p.key} repair
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="expect-heading">
        <SectionHeading id="expect-heading" eyebrow="What to expect" title="How a repair" accent="visit goes." center />
        <HowItWorks steps={expectSteps} />
        <div className="mx-auto mt-10 max-w-3xl rounded-xl2 border border-sand bg-white p-7 md:p-9">
          <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">Before the technician arrives</h3>
          <ul className="prose-copy">
            <li>Find the model number. It is on a label inside the door, under the lid or on the back.</li>
            <li>Write down any error code on the display.</li>
            <li>Clear a path to the appliance and empty it if you can.</li>
            <li>If you rent, check with your landlord about who approves and pays for the repair.</li>
          </ul>
        </div>
      </Section>

      <Section tone="white" labelledBy="coverage-heading">
        <SectionHeading
          id="coverage-heading"
          eyebrow="Coverage"
          title={`Where we work in and around`}
          accent={`${site.city}.`}
          intro="This is a service area, not a storefront. Technicians come to your home."
        />
        <AreaBlock />
        <ul className="mt-10 flex flex-wrap gap-3">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={areaHref(a)} className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-ink px-5 font-semibold text-white transition hover:bg-ink-700">
                Appliance repair in {a.name}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="brands-heading">
        <SectionHeading id="brands-heading" eyebrow="Brands" title="Brands we see" accent="every week." />
        <BrandChips names={[...brands.map((b) => b.name), ...otherBrands]} />
        <p className="mt-8">
          <Link href={routes.brands} className="link-arrow">
            Appliance brands we service in {site.city} <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </p>
      </Section>

      {hasVerifiedReviews() ? (
        <Section tone="white" labelledBy="reviews-heading">
          <SectionHeading id="reviews-heading" eyebrow="Reviews" title="From customers in" accent={`${site.city}.`} />
          <ReviewsBlock />
        </Section>
      ) : null}

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id="faq-heading" eyebrow="FAQ" title={`Appliance repair in ${site.city}:`} accent="common questions." />
          </div>
          <FaqList faqs={cityFaqs} />
        </div>
      </Section>

      <Section labelledBy="links-heading">
        <h2 id="links-heading" className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
          Keep reading
        </h2>
        <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.key} href={serviceHref(s.key)} className="link-arrow">
              {s.name.toLowerCase()} repair in {site.city}
            </Link>
          ))}
          <Link href={routes.faq} className="link-arrow">
            appliance repair FAQs
          </Link>
          <Link href={routes.request} className="link-arrow">
            request appliance repair online
          </Link>
        </div>
      </Section>

      <FinalCta formId="city_final" />
    </>
  );
}

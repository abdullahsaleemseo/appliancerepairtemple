import Link from 'next/link';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { brands, otherBrands } from '@/content/brands';
import { cityFaqs } from '@/content/faqs';
import { serviceHref, services } from '@/content/services';
import { AreaBlock } from '@/components/AreaList';
import { BrandChips } from '@/components/BrandChips';
import { Breadcrumbs } from '@/components/Breadcrumbs';
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

      <section className="bg-surface">
        <div className="mx-auto max-w-site px-4 pb-12 pt-6 lg:px-6 lg:pb-16">
          <Breadcrumbs items={[{ name: `Appliance Repair ${site.city}`, path }]} />
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
            Appliance Repair in {site.city}, {site.state}
          </h1>
          <div className="prose-copy mt-6 max-w-3xl">
            <p>
              Most appliance breakdowns in {site.city} come down to a handful of parts: a fan motor, a pump, a heating element, a
              switch or a valve. A good technician finds the one that failed, replaces only that, and tells you the price before
              starting. That is how we work.
            </p>
            <p>
              We repair refrigerators, freezers, washers, dryers, dishwashers, ranges and over-the-range microwaves in homes across
              {' '}{site.city}, from older houses near downtown to newer neighborhoods on the west and south sides. We also cover
              Belton, Killeen, Harker Heights, Salado and other {site.county} communities.
            </p>
            <p>
              Central Texas puts its own kind of wear on appliances. Long, hot summers keep refrigerators and garage freezers running
              almost nonstop, and mineral-heavy water leaves scale in dishwashers, washer inlet screens and ice makers. We keep both
              in mind when we diagnose a problem, because fixing the part without fixing the cause just means another call later.
            </p>
          </div>
          <div className="mt-8">
            <CtaRow location="city_hero" />
          </div>
        </div>
      </section>

      <Section labelledBy="help-heading">
        <SectionHeading id="help-heading" eyebrow="We help with" title="Appliances we repair in Temple" />
        <ServicesGrid keys={services.map((s) => s.key)} showOther />
      </Section>

      <Section tone="surface" labelledBy="problems-heading">
        <SectionHeading
          id="problems-heading"
          eyebrow="Common problems"
          title="What usually goes wrong, and what fixes it"
          intro="These are the calls we get most often in Temple. Each links to more detail on that appliance."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {problems.map((p) => (
            <li key={p.title} className="rounded-card bg-white p-6 shadow-card">
              <h3 className="font-heading text-lg font-extrabold text-navy">{p.title}</h3>
              <p className="mt-2 text-[15px] text-ink-body">{p.text}</p>
              <Link href={serviceHref(p.key)} className="mt-3 inline-flex items-center gap-1 text-[15px] font-bold text-brand-dark hover:underline">
                More on {p.key === 'oven' ? 'oven and stove' : p.key} repair <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="expect-heading">
        <SectionHeading id="expect-heading" eyebrow="What to expect" title="How a repair visit goes" center />
        <HowItWorks steps={expectSteps} />
        <div className="mx-auto mt-12 max-w-3xl rounded-card bg-surface p-6 md:p-8">
          <h3 className="font-heading text-lg font-extrabold text-navy">Before the technician arrives</h3>
          <ul className="prose-copy">
            <li>Find the model number. It is on a label inside the door, under the lid or on the back.</li>
            <li>Write down any error code on the display.</li>
            <li>Clear a path to the appliance and empty it if you can.</li>
            <li>If you rent, check with your landlord about who approves and pays for the repair.</li>
          </ul>
        </div>
      </Section>

      <TrustBadges tone="surface" />

      <Section labelledBy="coverage-heading">
        <SectionHeading
          id="coverage-heading"
          eyebrow="Coverage"
          title={`Where we work in and around ${site.city}`}
          intro="This is a service area, not a storefront. Technicians come to your home."
        />
        <AreaBlock />
        <ul className="mt-10 flex flex-wrap gap-3">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link
                href={areaHref(a)}
                className="inline-flex min-h-[44px] items-center rounded-full bg-navy px-5 font-semibold text-white hover:bg-navy-700"
              >
                Appliance repair in {a.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" labelledBy="brands-heading">
        <SectionHeading id="brands-heading" eyebrow="Brands" title="Brands we see every week" />
        <BrandChips names={[...brands.map((b) => b.name), ...otherBrands]} />
        <p className="mt-6">
          <Link href={routes.brands} className="font-bold text-brand-dark hover:underline">
            Appliance brands we service in {site.city}
          </Link>
        </p>
      </Section>

      {hasVerifiedReviews() ? (
        <Section labelledBy="reviews-heading">
          <SectionHeading id="reviews-heading" eyebrow="Reviews" title={`From customers in ${site.city}`} />
          <ReviewsBlock />
        </Section>
      ) : null}

      <Section labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title={`Appliance repair in ${site.city}: common questions`} />
          <FaqList faqs={cityFaqs} />
        </div>
      </Section>

      <Section tone="surface" labelledBy="links-heading">
        <h2 id="links-heading" className="font-heading text-2xl font-extrabold text-navy">
          Keep reading
        </h2>
        <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.key}>
              <Link href={serviceHref(s.key)} className="font-semibold text-navy hover:underline">
                {s.name.toLowerCase()} repair in {site.city}
              </Link>
            </li>
          ))}
          <li>
            <Link href={routes.faq} className="font-semibold text-navy hover:underline">
              appliance repair FAQs
            </Link>
          </li>
          <li>
            <Link href={routes.request} className="font-semibold text-navy hover:underline">
              request appliance repair online
            </Link>
          </li>
        </ul>
      </Section>

      <FinalCta formId="city_final" />
    </>
  );
}

import Link from 'next/link';
import { canShow, claims, isProduction, phoneDisplay, routes, site } from '@/config/site';
import { brands, otherBrands } from '@/content/brands';
import { homeFaqs } from '@/content/faqs';
import { primaryServiceKeys, serviceHref, services } from '@/content/services';
import type { ApplianceKey } from '@/content/types';
import { AreaBlock } from '@/components/AreaList';
import { BrandChips, BrandMarquee } from '@/components/BrandChips';
import { CallButton, RequestButton } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PaymentNote } from '@/components/PaymentNote';
import { PhoneLink } from '@/components/PhoneLink';
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
  title: `Appliance Repair Temple TX | Same-Day Service`,
  description: `Appliance repair in Temple, TX for refrigerators, washers, dryers, dishwashers, ovens and freezers. Same-day service, subject to availability. Call ${phoneDisplay}.`,
  path: '/',
});

const problems: { title: string; text: string; key: ApplianceKey }[] = [
  {
    title: 'Refrigerator not cooling',
    text: 'Usually a stopped fan, a frosted evaporator coil or a start relay that is failing. Keep the doors shut while you wait. A closed fridge holds a safe temperature for about four hours.',
    key: 'refrigerator',
  },
  {
    title: 'Washer not draining',
    text: 'A clogged pump filter, a kinked drain hose or a drain pump that quit. Turn the washer off and unplug it before you open the filter door, and have towels ready.',
    key: 'washer',
  },
  {
    title: 'Dryer not heating',
    text: 'On electric dryers, often a heating element or thermal fuse. On gas dryers, an igniter or gas valve coil. A clogged vent is a common root cause, so airflow gets checked too.',
    key: 'dryer',
  },
  {
    title: 'Dishwasher leaving water or dirty dishes',
    text: 'A packed filter, clogged spray arms, a bad inlet valve or a drain pump problem. Mineral buildup from hard water can make all of these worse over time.',
    key: 'dishwasher',
  },
  {
    title: 'Oven not heating or baking unevenly',
    text: 'A burned-out bake element on electric models, a weak igniter on gas models, or a temperature sensor that has drifted away from the setting.',
    key: 'oven',
  },
  {
    title: 'Freezer frosting up or running warm',
    text: 'A defrost part, a worn door or lid seal, or dirty condenser coils. Garage freezers feel this most in a Central Texas summer.',
    key: 'freezer',
  },
  {
    title: 'Ice maker stopped making ice',
    text: 'A frozen fill tube, a failed water inlet valve, a clogged filter or a worn ice maker module. Check that the shutoff arm is down first.',
    key: 'refrigerator',
  },
  {
    title: 'Error code on the display',
    text: 'A code points to a system, such as draining or the door lock, not always to one part. Write it down before you call. It helps the technician plan the visit.',
    key: 'washer',
  },
];

const steps = [
  { title: 'Call or send a request', text: 'Tell us the appliance, the brand and what it is doing. A photo of the model number label helps.' },
  { title: 'We confirm the visit', text: `We call to confirm the details and set a visit window. We are open ${site.hours.value.long}.` },
  { title: 'Diagnosis at your home', text: 'The technician checks the appliance, tests the likely parts, and explains what failed and what the repair involves.' },
  { title: 'Repair and test', text: 'With your OK, the technician makes the repair and runs the appliance to confirm it works.' },
];

const pickerItems = services.map((s) => ({
  key: s.key,
  name: s.name,
  icon: s.icon,
  href: serviceHref(s.key),
  symptoms: s.symptoms.slice(0, 3).map((x) => x.title),
}));

export default function HomePage() {
  const why = [
    {
      show: canShow(claims.licensedInsured),
      icon: 'shield' as const,
      title: claims.licensedInsured.value,
      text: 'Appliance Repair Temple is licensed and insured. You can ask about it when you call.',
    },
    {
      show: canShow(claims.sameDayShort),
      icon: 'clock' as const,
      title: claims.sameDayShort.value,
      text: `Same-day appointments are available, ${claims.availabilityQualifier}. Calling earlier in the day helps.`,
    },
    {
      show: canShow(claims.responseTime),
      icon: 'phone' as const,
      title: claims.responseTime.value.long,
      text: `How quickly we can respond depends on technician availability, your location and current demand. It is a typical figure, not a guaranteed arrival time.`,
    },
    {
      show: canShow(claims.yearsExperience) && canShow(claims.repairsCompleted),
      icon: 'tool' as const,
      title: `${claims.yearsExperience.value.short}`,
      text: `${claims.repairsCompleted.value.value} repairs completed. Most failures we see are ones we have fixed before.`,
    },
    {
      show: canShow(claims.rating),
      icon: 'star' as const,
      title: `${claims.rating.value.value} Average Rating`,
      text: 'Customers have given Appliance Repair Temple a 4.9 average rating.',
    },
    {
      show: canShow(site.hours),
      icon: 'calendar' as const,
      title: 'Open six days a week',
      text: `${site.hours.value.long}. Send a request any time and we reply when we are open.`,
    },
  ].filter((w) => w.show);

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
                <span className="h-1.5 w-1.5 rounded-full bg-mint-bright" />
                {site.hours.value.display}
              </span>
              In-home repair across {site.city} &amp; {site.county}
            </p>
            <h1 className="h-display mt-7 text-[2.9rem] text-white sm:text-[4.2rem] lg:text-[5rem]">
              Appliance Repair in {site.city}, {site.stateAbbr}
            </h1>
            <p aria-hidden="true" className="accent mt-1 font-serif text-[2.7rem] leading-none text-flame-glow sm:text-[3.9rem] lg:text-[4.6rem]">
              without the guesswork.
            </p>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              Appliance Repair Temple fixes refrigerators, washers, dryers, dishwashers, ovens and freezers in homes across Temple, TX
              and nearby Bell County towns. A technician comes to you, tests the parts most likely to have failed, and explains the
              repair before any work starts. Same-day service is available, {claims.availabilityQualifier}.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CallButton location="hero" className="text-[17px]" />
              <RequestButton location="hero" variant="onDarkSecondary" />
            </div>
            <div className="mt-10 border-t border-white/10 pt-6">
              <TrustBadges dark />
            </div>
          </div>
          <ProblemPicker items={pickerItems} />
        </div>
      </section>

      {/* Brand strip */}
      {canShow(claims.brandsServiced) ? (
        <section aria-label="Brands we service" className="border-b border-sand bg-canvas py-10">
          <div className="mx-auto max-w-site px-4 lg:px-6">
            <p className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              We repair the brands already in Temple kitchens
            </p>
            <BrandMarquee names={[...brands.map((b) => b.name), ...otherBrands]} />
          </div>
        </section>
      ) : null}

      {/* Services */}
      <Section id="services" labelledBy="services-heading">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="services-heading"
            eyebrow="Appliance repair services"
            title="What we repair in"
            accent={`${site.city} homes.`}
            intro="Pick your appliance to see the problems we fix most often, what usually causes them and when to stop using it until a technician takes a look."
            className="!mb-0"
          />
          <Link href={routes.cityPage} className="link-arrow shrink-0">
            Appliance repair in {site.city} <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12">
          <ServicesGrid keys={primaryServiceKeys} />
        </div>
        <p className="mt-6 text-ink-body">
          We also repair{' '}
          <Link href={serviceHref('microwave')} className="font-semibold text-ink underline decoration-flame underline-offset-4">
            over-the-range and built-in microwaves
          </Link>
          , cooktops and wall ovens.
        </p>
      </Section>

      {/* Common problems */}
      <Section tone="white" labelledBy="problems-heading">
        <SectionHeading
          id="problems-heading"
          eyebrow="Common problems"
          title="Common appliance problems"
          accent="we fix in Temple."
          intro="These are the calls we get most. Each answer covers the usual causes, so you know what you are dealing with before the technician arrives."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {problems.map((p) => (
            <li key={p.title}>
              <Link href={serviceHref(p.key)} className="card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift md:p-7">
                <h3 className="font-display text-[20px] font-bold tracking-[-0.02em] text-ink">{p.title}</h3>
                <p className="mt-2 flex-1 text-[15px] text-ink-body">{p.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-flame">
                  More on {p.key === 'oven' ? 'oven and stove' : p.key} repair
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <aside className="mt-8 flex gap-4 rounded-2xl border border-flame/25 bg-flame-soft p-6">
          <Icon name="shield" className="h-6 w-6 shrink-0 text-flame" />
          <div className="text-[15px] text-ink">
            <p className="font-semibold">When to stop using the appliance</p>
            <p className="mt-1 text-ink-body">
              Turn it off and call if you see smoke or sparks, smell burning, or find water pooling near wiring or an outlet. If you
              smell gas near a range or dryer, leave the house first and call your gas utility from outside.
            </p>
          </div>
        </aside>
      </Section>

      {/* Why choose us */}
      <Section tone="ink" labelledBy="why-heading">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-flame/20 blur-[140px]" />
        <SectionHeading
          id="why-heading"
          eyebrow="Why Appliance Repair Temple"
          title="Local technicians,"
          accent="straight answers."
          intro="No sales pitch. Here is what you can count on when you call us."
          dark
        />
        <StatsStrip />
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w) => (
            <li key={w.title} className="card-dark p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-flame/15 text-flame-glow">
                <Icon name={w.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-[21px] font-bold tracking-[-0.025em] text-white">{w.title}</h3>
              <p className="mt-2 text-[15px] text-white/60">{w.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <PaymentNote dark />
        </div>
      </Section>

      {/* How it works */}
      <Section labelledBy="how-heading">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="How scheduling and"
          accent="repair service works."
          intro="Four steps from the first call to an appliance that runs again."
          center
        />
        <HowItWorks steps={steps} />
        <div className="mx-auto mt-10 max-w-3xl rounded-xl2 border border-sand bg-white p-7 md:p-9">
          <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">Have this ready when you call</h3>
          <ul className="prose-copy">
            <li>The brand and model number. Look inside the door, under the lid, behind the kick plate or on the back.</li>
            <li>What the appliance is doing, and any error code on the display.</li>
            <li>When the problem started, and whether anything changed before it did.</li>
            <li>Clear access to the appliance on the day of the visit.</li>
          </ul>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallButton location="how_it_works" />
          <RequestButton location="how_it_works" />
        </div>
      </Section>

      {/* Brands */}
      {canShow(claims.brandsServiced) ? (
        <Section tone="white" labelledBy="brands-heading">
          <SectionHeading
            id="brands-heading"
            eyebrow="Brands"
            title="Brands"
            accent="we service."
            intro={
              <>
                We work on the major household brands found in Temple homes. Give us the brand and model number when you book so the
                technician can check parts ahead of time.
                {!claims.brandsServiced.verified ? <VerifyTag label="CONFIRM BRAND LIST WITH PROVIDER" /> : null}
              </>
            }
          />
          <BrandChips names={[...brands.map((b) => b.name), ...otherBrands]} />
          <p className="mt-8 max-w-3xl text-sm text-ink-muted">
            Appliance Repair Temple is an independent repair service. We are not affiliated with or authorized by any appliance
            manufacturer.{' '}
            <Link href={routes.brands} className="font-semibold text-ink underline decoration-flame underline-offset-4">
              See all brands we service
            </Link>
            .
          </p>
        </Section>
      ) : null}

      {/* Service area */}
      <Section labelledBy="area-heading">
        <SectionHeading
          id="area-heading"
          eyebrow="Service area"
          title="Temple and nearby"
          accent="service areas."
          intro={`We are based around ${site.city} and serve homes across ${site.county} and nearby ${site.region} towns. In ${site.city}, that covers ZIP codes ${site.templeZips.join(', ')}. Availability in towns farther out depends on the day's schedule, so call to confirm your address.`}
        />
        <AreaBlock />
      </Section>

      {/* Reviews */}
      {hasVerifiedReviews() || !isProduction ? (
        <Section tone="white" labelledBy="reviews-heading">
          <SectionHeading id="reviews-heading" eyebrow="Reviews" title="What neighbors in" accent={`${site.city} say.`} />
          <ReviewsBlock />
        </Section>
      ) : null}

      {/* FAQ */}
      <Section tone={hasVerifiedReviews() || !isProduction ? 'canvas' : 'white'} labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions before" accent="you call." />
            <p className="-mt-6 text-ink-body">
              Still not sure? <PhoneLink location="home_faq" label="Call" className="font-semibold text-ink underline decoration-flame underline-offset-4" />{' '}
              and speak with our team about your appliance issue.
            </p>
            <Link href={routes.faq} className="link-arrow mt-6">
              All frequently asked questions <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <FaqList faqs={homeFaqs} />
        </div>
      </Section>

      <FinalCta
        title="Appliance broken?"
        accent="Let’s get it running."
        text={`Call to discuss your repair needs, or send a request and we will call you back. We are open ${site.hours.value.long}.`}
        formId="home_final"
      />
    </>
  );
}

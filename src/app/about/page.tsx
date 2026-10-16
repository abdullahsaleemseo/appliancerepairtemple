import Image from 'next/image';
import Link from 'next/link';
import { canShow, claims, routes, site } from '@/config/site';
import { PageHero } from '@/components/PageHero';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { FaqList } from '@/components/FaqList';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { Section, SectionHeading } from '@/components/Section';
import { Claim, VerifyTag } from '@/components/Verify';
import { services, serviceHref } from '@/content/services';
import { brands, brandHref, otherBrands } from '@/content/brands';
import { areas, areaHref } from '@/content/areas';
import type { Faq } from '@/content/types';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `About ${site.brandName} | Local Repair in ${site.city}, ${site.stateAbbr}`,
  description: `${site.brandName} is a licensed and insured in-home appliance repair service based in ${site.city}, ${site.stateAbbr}. How we work, what we fix and the towns we cover.`,
  path: routes.about,
});

const values = [
  { icon: 'clock' as const, title: 'On time', text: 'We give you a visit window and call ahead. If we are running late, you hear it from us first.' },
  { icon: 'tag' as const, title: 'Your OK before work', text: 'You hear what failed and what the repair involves before any part is replaced.' },
  { icon: 'check' as const, title: 'Clean work', text: 'Floors covered, old parts taken away, and the appliance tested before we leave.' },
  { icon: 'shield' as const, title: 'Honest advice', text: 'If an appliance is not worth fixing, we tell you, even when that means no repair job.' },
];

const visitSteps = [
  { title: 'You call us', text: 'Tell us the appliance, the brand and what it is doing. The model number helps if you have it.' },
  { title: 'We confirm a visit window', text: 'We check the schedule for your address and confirm a time that works for you.' },
  { title: 'Diagnosis in your home', text: 'The technician tests the appliance, finds the failed part and explains what the repair involves.' },
  { title: 'Repair after your OK', text: 'Work starts only once you agree. Then the appliance is tested before the technician leaves.' },
];

const wontDo = [
  'Start a repair before you have heard what it involves and said yes.',
  'Replace parts by guesswork to see what sticks.',
  'Push a repair on an appliance that is not worth fixing.',
  'Claim to be a manufacturer’s authorized or factory service. We are independent.',
  'Promise an exact arrival time we cannot keep.',
];

const aboutFaqs: Faq[] = [
  {
    q: `Is ${site.brandName} affiliated with any appliance brand?`,
    a: 'No. We are an independent repair service, not affiliated with or authorized by any appliance manufacturer. Brand names on this site only describe the appliances we work on.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. We are licensed and insured.',
  },
  {
    q: 'Where are you based?',
    a: `In ${site.city}, ${site.stateAbbr}. Repairs happen in your home. We cover ${site.city} and nearby towns in ${site.county} and just beyond.`,
  },
  {
    q: 'What are your hours?',
    a: 'Monday to Saturday, 8:00 AM to 8:00 PM.',
  },
  {
    q: 'How quickly can you come out?',
    a: `Same-day service is available, ${claims.availabilityQualifier}. Our typical response is about 60 minutes during business hours, which is a typical figure and not a guaranteed arrival time.`,
  },
  {
    q: 'Why are there no prices on the site?',
    a: 'The cost depends on the appliance, the model and the part that failed, so a number on a web page would only be a guess. Call to discuss your repair needs. Flexible payment options are available.',
  },
];

export default function AboutPage() {
  const credentials = [
    { item: claims.licensedInsured, text: claims.licensedInsured.value },
    { item: claims.sameDayShort, text: `${claims.sameDayShort.value}, ${claims.availabilityQualifier}` },
    { item: claims.yearsExperience, text: claims.yearsExperience.value.short },
    { item: claims.repairsCompleted, text: `${claims.repairsCompleted.value.value} repairs completed` },
    { item: claims.rating, text: `${claims.rating.value.value} average rating` },
    { item: claims.responseTime, text: claims.responseTime.value.long },
    { item: claims.paymentOptions, text: claims.paymentOptions.value },
    { item: site.hours, text: `Hours: ${site.hours.value.long}` },
  ].filter((c) => canShow(c.item));

  const brandLinks = brands.filter((b) => b.hasPage);

  return (
    <>
      <PageHero crumbs={[{ name: 'About', path: routes.about }]} title={`About ${site.brandName},`} accent="your local repair service.">
        <div className="prose-copy prose-dark">
          <p>
            {site.brandName} is an in-home appliance repair service based in {site.city}, {site.stateAbbr}. We fix the appliances
            a household runs on every day: refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges and microwaves,
            in {site.city} and the {site.region} towns around it.
          </p>
        </div>
        <div className="mt-8">
          <CtaRow location="about_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="story-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading id="story-heading" eyebrow="How we think" title="Find the real problem." accent="Fix only that." />
          <div>
            <div className="prose-copy">
              <p>
                When an appliance quits, you want two things: someone who shows up when they said they would, and a straight answer
                about what is wrong. That is the whole idea behind how we work.
              </p>
              <p>
                Most repairs come down to one failed part. A careful diagnosis finds it, so you are not paying for parts you did not
                need. The technician explains what failed in plain words, tells you what the repair involves, and starts only once
                you agree. If the appliance is old enough, or the failure big enough, that a repair does not make sense, you will
                hear that too.
              </p>
              <p>
                We stay close to {site.city} on purpose. Working {site.county} and the towns just outside it keeps drive times
                shorter and scheduling realistic, which matters when your fridge is warm or the washer is full of water.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {credentials.length ? (
        <Section tone="ink" labelledBy="cred-heading">
          <SectionHeading id="cred-heading" eyebrow="Credentials" title="What stands" accent="behind the work." dark />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c) => (
              <li key={c.text} className="card-dark flex items-start gap-3 p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint-bright/15 text-mint-bright">
                  <Icon name="check" className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="font-medium text-white">
                  <Claim item={c.item}>{c.text}</Claim>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-[15px] text-white/60">
            The {claims.rating.value.value} average rating reflects customer reviews across the internet. Same-day service and response times are{' '}
            {claims.availabilityQualifier}.
          </p>
        </Section>
      ) : null}

      <Section labelledBy="team-heading">
        <SectionHeading id="team-heading" eyebrow="The team" title="The people" accent="behind the work." />
        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <figure className="overflow-hidden rounded-card bg-canvas-2">
            <Image
              src="/images/about/team.webp"
              alt={`The ${site.brandName} team`}
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-full w-full object-cover"
              priority
            />
          </figure>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <figure className="overflow-hidden rounded-card bg-canvas-2">
              <Image
                src="/images/about/technician-refrigerator.webp"
                alt={`${site.brandName} technician checking a refrigerator in a ${site.city} home`}
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-card bg-canvas-2">
              <Image
                src="/images/about/service-van.webp"
                alt={`${site.brandName} service van parked at a home in ${site.city}`}
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="visit-heading">
        <SectionHeading id="visit-heading" eyebrow="A typical visit" title="What happens" accent="when you call." />
        <HowItWorks steps={visitSteps} />
      </Section>

      <Section labelledBy="values-heading">
        <SectionHeading id="values-heading" eyebrow="Our standards" title="How we" accent="work." />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-flame-soft text-flame">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-[21px] font-bold tracking-[-0.025em] text-ink">{v.title}</h3>
              <p className="mt-2 text-[15px] text-ink-body">{v.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <VerifyTag label="CONFIRM EACH PROMISE MATCHES HOW WE WORK" />
        </p>
      </Section>

      <Section tone="white" labelledBy="wont-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading id="wont-heading" eyebrow="Straight answers" title="What we" accent="will not do." />
          <ul className="space-y-3">
            {wontDo.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-2xl border border-sand bg-canvas px-5 py-4 text-ink-body">
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <Icon name="close" className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="scope-heading">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="scope-heading" eyebrow="What we fix" title="Appliances" accent="and brands." />
            <ul className="flex flex-wrap gap-2">
              {services.map((s) => (
                <li key={s.key}>
                  <Link href={serviceHref(s.key)} className="inline-flex rounded-full border border-sand bg-white px-4 py-2 text-[15px] font-medium text-ink transition hover:border-ink">
                    {s.name} repair
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-body">
              We work on the major brands, including{' '}
              {[...brandLinks.map((b) => ({ name: b.name, href: brandHref(b) })), ...otherBrands.map((name) => ({ name, href: '' }))].map(
                (b, i, all) => (
                  <span key={b.name}>
                    {i > 0 ? (i === all.length - 1 ? ' and ' : ', ') : null}
                    {b.href ? (
                      <Link href={b.href} className="font-semibold text-ink underline decoration-flame/50 underline-offset-4 hover:decoration-flame">
                        {b.name}
                      </Link>
                    ) : (
                      b.name
                    )}
                  </span>
                ),
              )}
              . We are not affiliated with any of them.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">Where we work</h2>
            <p className="mt-3 text-ink-body">
              {site.city} is home base. From here we cover these nearby towns, each with its own page:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              <li>
                <Link href={routes.cityPage} className="inline-flex rounded-full bg-ink px-4 py-2 text-[15px] font-medium text-white">
                  {site.city}
                </Link>
              </li>
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={areaHref(a)} className="inline-flex rounded-full border border-sand bg-white px-4 py-2 text-[15px] font-medium text-ink transition hover:border-ink">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="About us:" accent="questions." />
          <FaqList faqs={aboutFaqs} />
        </div>
      </Section>

      <FinalCta formId="about_final" />
    </>
  );
}

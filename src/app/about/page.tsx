import { canShow, claims, routes, site } from '@/config/site';
import { PageHero } from '@/components/PageHero';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { Section, SectionHeading } from '@/components/Section';
import { Claim, DraftBlock, VerifyTag } from '@/components/Verify';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `About ${site.brandName} | Appliance Repair in ${site.city}, ${site.stateAbbr}`,
  description: `Who we are, how we work and the ${site.region} towns we serve. In-home appliance repair based in ${site.city}, ${site.stateAbbr}.`,
  path: routes.about,
});

const values = [
  { icon: 'clock' as const, title: 'On time', text: 'We give you a visit window and call ahead. If we are running late, you hear it from us first.' },
  { icon: 'tag' as const, title: 'Your OK before work', text: 'You hear what failed and what the repair involves before any part is replaced.' },
  { icon: 'check' as const, title: 'Clean work', text: 'Floors covered, old parts taken away, and the appliance tested before we leave.' },
  { icon: 'shield' as const, title: 'Honest advice', text: 'If an appliance is not worth fixing, we tell you, even when that means no repair job.' },
];

export default function AboutPage() {
  const credentials = [
    { item: claims.licensedInsured, text: claims.licensedInsured.value },
    { item: claims.sameDayShort, text: `${claims.sameDayShort.value}, ${claims.availabilityQualifier}` },
    { item: claims.yearsExperience, text: claims.yearsExperience.value.short },
    { item: claims.repairsCompleted, text: `${claims.repairsCompleted.value.value} repairs completed` },
    { item: claims.rating, text: `${claims.rating.value.value} average rating` },
    { item: claims.paymentOptions, text: claims.paymentOptions.value },
    { item: site.hours, text: `Hours: ${site.hours.value.long}` },
  ].filter((c) => canShow(c.item));

  return (
    <>
      <PageHero crumbs={[{ name: 'About', path: routes.about }]} title={`About ${site.brandName}`}>
        <div className="prose-copy prose-dark">
          <p>
            {site.brandName} is an in-home appliance repair service for {site.city} and the surrounding {site.region} towns. We
            fix the appliances people depend on every day: refrigerators, freezers, washers, dryers, dishwashers and ranges.
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
                We keep the work simple. Find the actual problem, explain it in plain words, and fix it only
                once you agree. Most repairs come down to one failed part, and a careful diagnosis keeps you from paying for parts
                you did not need.
              </p>
              <p>
                We focus on {site.county} because staying close means shorter drive times and more realistic scheduling for the
                people who call us.
              </p>
            </div>
            <div className="mt-8">
              <DraftBlock show={false} label="OWNER STORY: REPLACE BEFORE LAUNCH">
                <p className="rounded-card bg-white p-6 text-ink-body">
                  Add the real business story here: who runs it, how long they have repaired appliances, and why {site.city}.
                </p>
              </DraftBlock>
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
        </Section>
      ) : null}

      <DraftBlock show={false} label="REAL PHOTOS ONLY: TEAM, VAN, UNIFORM">
        <section aria-label="Photos" className="mx-auto max-w-site px-4 py-10 lg:px-6">
          <ul className="grid grid-cols-3 gap-4">
            {['Team photo', 'Service van', 'Technician at work'].map((t) => (
              <li key={t} className="flex aspect-[4/3] items-center justify-center rounded-card bg-canvas-2 text-sm font-semibold text-ink-muted">
                {t}
              </li>
            ))}
          </ul>
        </section>
      </DraftBlock>

      <Section tone="white" labelledBy="values-heading">
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
          <VerifyTag label="CONFIRM EACH PROMISE MATCHES HOW THE PROVIDER WORKS" />
        </p>
      </Section>

      <FinalCta formId="about_final" />
    </>
  );
}

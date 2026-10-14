import { canShow, claims, routes, site } from '@/config/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';
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
  { icon: 'tag' as const, title: 'Price before work', text: 'You get the repair price after the diagnosis and before any part is replaced.' },
  { icon: 'check' as const, title: 'Clean work', text: 'Floors covered, old parts taken away, and the appliance tested before we leave.' },
  { icon: 'shield' as const, title: 'Honest advice', text: 'If an appliance is not worth fixing, we tell you, even when that means no repair job.' },
];

export default function AboutPage() {
  const credentials = [
    { item: claims.licensedInsured, text: claims.licensedInsured.value },
    { item: claims.yearsServing, text: `${claims.yearsServing.value} serving ${site.city}` },
    { item: claims.backgroundChecked, text: claims.backgroundChecked.value },
    { item: claims.warranty, text: claims.warranty.value.long },
  ].filter((c) => canShow(c.item));

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-site px-4 pb-12 pt-6 lg:px-6">
          <Breadcrumbs items={[{ name: 'About', path: routes.about }]} />
          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">About {site.brandName}</h1>
          <div className="prose-copy mt-6 max-w-3xl">
            <p>
              {site.brandName} is an in-home appliance repair service for {site.city} and the surrounding {site.region} towns. We
              fix the appliances people depend on every day: refrigerators, freezers, washers, dryers, dishwashers and ranges.
            </p>
            <p>
              We keep the work simple. Find the actual problem, explain it in plain words, give you the price, and fix it only once
              you agree. Most repairs come down to one failed part, and a careful diagnosis keeps you from paying for parts you did
              not need.
            </p>
            <p>
              We focus on {site.county} because staying close means shorter drive times and more realistic scheduling for the
              people who call us.
            </p>
          </div>
          <DraftBlock show={false} label="OWNER STORY: REPLACE BEFORE LAUNCH">
            <p className="mt-6 max-w-3xl rounded-card bg-white p-5 text-ink-body">
              Add the real business story here: who runs it, how long they have repaired appliances, and why {site.city}.
            </p>
          </DraftBlock>
          <div className="mt-8">
            <CtaRow location="about_hero" />
          </div>
        </div>
      </section>

      {credentials.length ? (
        <Section labelledBy="cred-heading">
          <SectionHeading id="cred-heading" title="Credentials" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c) => (
              <li key={c.text} className="flex items-start gap-3 rounded-card bg-white p-5 shadow-card ring-1 ring-slate-100">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-trust-light text-trust-dark">
                  <Icon name="check" className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="font-semibold text-ink">
                  <Claim item={c.item}>{c.text}</Claim>
                </span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <DraftBlock show={false} label="REAL PHOTOS ONLY: TEAM, VAN, UNIFORM">
        <section aria-label="Photos" className="mx-auto max-w-site px-4 py-6 lg:px-6">
          <ul className="grid grid-cols-3 gap-4">
            {['Team photo', 'Service van', 'Technician at work'].map((t) => (
              <li key={t} className="flex aspect-[4/3] items-center justify-center rounded-card bg-surface text-sm font-semibold text-ink-muted">
                {t}
              </li>
            ))}
          </ul>
        </section>
      </DraftBlock>

      <Section tone="surface" labelledBy="values-heading">
        <SectionHeading id="values-heading" title="How we work" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="rounded-card bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-extrabold text-navy">{v.title}</h3>
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

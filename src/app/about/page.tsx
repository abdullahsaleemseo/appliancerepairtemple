import Link from 'next/link';
import { phoneDisplay, routes, site } from '@/config/site';
import { PageHero } from '@/components/PageHero';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { FaqList } from '@/components/FaqList';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { Section, SectionHeading } from '@/components/Section';
import { services, serviceHref } from '@/content/services';
import { brands, brandHref, otherBrands } from '@/content/brands';
import { areas, areaHref } from '@/content/areas';
import { posts, postHref } from '@/content/blog';
import type { Faq } from '@/content/types';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `About ${site.brandName} | How One Free Call Works`,
  description: `Appliance broken in ${site.city}? See how one free call to ${site.brandName} reaches a technician, what to ask and how to check a license. Call ${phoneDisplay}.`,
  path: routes.about,
});

const callSteps = [
  {
    title: 'Dial the line and pick the appliance',
    text: 'The call is free. Choose the appliance in the phone menu, enter your ZIP code, and have the brand and symptom ready.',
  },
  {
    title: 'Reach a technician near you',
    text: `The line routes you to a repair business that works in ${site.city} or the nearby town you live in.`,
  },
  {
    title: 'Ask your questions first',
    text: 'Timing, pricing, licensing, insurance and any warranty on the work are all between you and that business. Decide only once you have answers.',
  },
  {
    title: 'Diagnosis before repair',
    text: 'A good technician finds the failed part and explains what the repair involves before starting. Ask for that.',
  },
];

const verifySteps = [
  'Ask for the full business name and a phone number you can call back.',
  'Ask whether the work requires a license under Texas rules, and check the state requirements for that kind of work.',
  'Ask for proof of liability insurance before anyone works in your home, and check that the policy is current.',
  'For gas appliances, ask how gas line connections are handled and who is qualified to do that work.',
  'For refrigerant repairs, ask whether the technician holds EPA Section 608 certification, which federal rules require.',
  'Look up the business online and read what other homeowners in the area have said about it.',
];

const siteDoesNot = [
  'Send technicians or perform any repair work itself.',
  'Employ, train or supervise the technicians who take the calls.',
  'Set prices, collect payment or give any warranty or guarantee on work performed.',
  'Check a repair business’s license or insurance on your behalf.',
  'Represent, or speak for, any appliance manufacturer.',
];

const askBefore = [
  { icon: 'tag' as const, title: 'Pricing', text: 'How is the visit priced, what does a diagnosis cost, and will you hear the full repair price before any part is replaced?' },
  { icon: 'shield' as const, title: 'License and insurance', text: 'Is the business licensed for this work where required, and can it show current proof of insurance?' },
  { icon: 'check' as const, title: 'Warranty on work', text: 'Does the technician stand behind the repair? Ask what is covered, for how long, and whether parts and labor are treated differently.' },
  { icon: 'wrench' as const, title: 'Parts', text: 'Are replacement parts new and made for your model? How long will a part take to arrive if it is not on the truck?' },
];

const prepareSteps = [
  'Find the model and serial number. On a refrigerator it is usually inside the fresh-food section; on a washer or dryer, around the door or on the back; on a dishwasher, on the edge of the door.',
  'Write down what the appliance is doing, any error code on the display, and when the problem started.',
  'Note what you have already tried, such as resetting the breaker, cleaning a filter or clearing a drain hose.',
  'Clear a path to the appliance and some space around it so the technician can pull it out or open panels.',
  'Keep kids and pets out of the area during the visit.',
  'For a leaking washer or dishwasher, close the water valve. For a gas appliance with a gas smell, leave the house and call 911 or the gas company from outside.',
];

const aboutFaqs: Faq[] = [
  {
    q: `What is ${site.brandName}?`,
    a: `Temple's phone line and guide for appliance repair. Calling the number routes you to a repair business that works in ${site.city} and ${site.county}. That business, not this site, diagnoses and fixes the appliance.`,
  },
  {
    q: 'Does the call cost anything?',
    a: 'No. Dialing the line costs nothing. Any charge for a visit or a repair comes from the business you speak with, so settle pricing on the phone before you agree to a visit.',
  },
  {
    q: `Is ${site.brandName} affiliated with any appliance brand?`,
    a: 'No. Appliance Repair Temple is not affiliated with or authorized by any manufacturer. Brand names appear only to describe the refrigerators, washers and ranges that technicians in the area commonly see.',
  },
  {
    q: 'How do I check that an appliance repair pro has a license and insurance?',
    a: 'That check is yours to make. Ask for a license number where the work requires one, compare it with the Texas rules for that kind of job, and ask to see a current certificate of insurance before anyone opens a panel.',
  },
  {
    q: 'Who stands behind the repair?',
    a: 'The business that does the work. Appliance Repair Temple does not warrant or guarantee repairs, so ask how parts and labor are covered before you approve anything.',
  },
  {
    q: 'Can I get emergency appliance repair?',
    a: 'Emergency help for a flooding washer or a fridge full of warming food may be available from local providers; say it is urgent when you call. Until then, close the water valve on a leak, switch off the breaker on an electrical problem, and keep a warm refrigerator shut.',
  },
  {
    q: 'Why are there no prices on the site?',
    a: 'Each repair business sets its own prices, and the cost turns on the appliance, the model and the part that failed. A figure on a web page would only be a guess, so ask on the call.',
  },
];

export default function AboutPage() {
  const brandLinks = brands.filter((b) => b.hasPage);

  return (
    <>
      <PageHero
        crumbs={[{ name: 'About This Site', path: routes.about }]}
        title={`About ${site.brandName}:`}
        accent={`${site.city}'s line for appliance repair.`}
      >
        <div className="prose-copy prose-dark">
          <p>
            This page explains what {site.brandName} is, how a call to its line works, and what to ask before a technician starts on
            your refrigerator, freezer, washer, dryer, dishwasher, oven or microwave. In short: one phone number for appliance repair
            in {site.city} and the {site.region} towns around it, with the details below.
          </p>
        </div>
        <div className="mt-8">
          <CtaRow location="about_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="story-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading id="story-heading" eyebrow="About this site" title="What this site is," accent="and who it is for." />
          <div>
            <div className="prose-copy">
              <p>
                When an appliance quits, most people want two things: someone nearby who can look at it, and a straight answer about
                what is wrong. {site.brandName} handles the first part. One free call reaches a repair business serving your part of{' '}
                {site.county}, so you are not scrolling through listings while the fridge warms up or the washer sits full of water.
              </p>
              <p>
                Here is how it works behind the scenes. {site.brandName} is a free referral service, not a repair company: it does not
                employ technicians, send anyone to your home or perform any work. The businesses on the other end of the line are
                independent and set their own prices, schedules and terms. You talk to them directly, ask your questions, and decide
                whether to hire them.
              </p>
              <p>
                Everything else on the site is there so you go into that call prepared. The repair guides walk through safe checks you
                can do yourself, what a symptom usually points to, and how to judge whether an older appliance is worth fixing. The
                service and town pages cover the problems that come up most with each appliance and in each community nearby.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="visit-heading">
        <SectionHeading id="visit-heading" eyebrow="How the free call works" title="What happens" accent="when you call." />
        <HowItWorks steps={callSteps} />
        <p className="mt-6 max-w-3xl text-[15px] text-ink-body">
          Water on the floor or food at risk? Stop the damage first: close the supply valve, or keep the refrigerator doors shut. Then
          call and describe exactly what you see.
        </p>
      </Section>

      <Section tone="ink" labelledBy="verify-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading id="verify-heading" eyebrow="Your checklist" title="Verify license" accent="and insurance." dark />
            <p className="text-white/70">
              Before anyone works on a gas range or opens a refrigerator’s sealed system, confirm the license and insurance that job
              requires. Checking is the homeowner’s responsibility, and a few minutes of questions on the call usually covers it.
            </p>
          </div>
          <ul className="space-y-3">
            {verifySteps.map((v) => (
              <li key={v} className="card-dark flex items-start gap-3 p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint-bright/15 text-mint-bright">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-white/85">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="wont-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading id="wont-heading" eyebrow="Straight answers" title="What this site" accent="does not do." />
            <p className="text-ink-body">
              {site.brandName} points you to a technician and stops there. It does not warrant or guarantee any repair, and every
              agreement about the work is between you and the business you hire.
            </p>
          </div>
          <ul className="space-y-3">
            {siteDoesNot.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-2xl border border-sand bg-white px-5 py-4 text-ink-body">
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <Icon name="close" className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white" labelledBy="ask-heading">
        <SectionHeading id="ask-heading" eyebrow="Before work starts" title="What to ask" accent="the technician." />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {askBefore.map((v) => (
            <li key={v.title} className="card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-flame-soft text-flame">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-[21px] font-bold tracking-[-0.025em] text-ink">{v.title}</h3>
              <p className="mt-2 text-[15px] text-ink-body">{v.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-[15px] text-ink-body">
          You do not have to approve a repair on the spot. If the answer to any of these is unclear, ask again, or take time to think it
          over before work starts.
        </p>
      </Section>

      <Section labelledBy="prepare-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading id="prepare-heading" eyebrow="Before the visit" title="How to prepare" accent="for the technician." />
          <ol className="space-y-3">
            {prepareSteps.map((t, i) => (
              <li key={t} className="flex items-start gap-3 rounded-2xl border border-sand bg-white px-5 py-4 text-ink-body">
                <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-flame text-[13px] font-semibold text-white">
                  {i + 1}
                </span>
                {t}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="white" labelledBy="scope-heading">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="scope-heading" eyebrow="Appliances covered" title="Appliances" accent="and brands." />
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
              Technicians in the area commonly work on the major brands, including{' '}
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
              . None of these manufacturers is affiliated with this site. On the call, ask whether the technician works on your brand and model.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">Temple and nearby towns</h2>
            <p className="mt-3 text-ink-body">
              Each town below has its own page on the appliance problems that come up there, from older Temple homes to newer builds in the suburbs:
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

      <Section labelledBy="guides-heading">
        <SectionHeading id="guides-heading" eyebrow="Repair guides" title="Safe checks" accent="before you call." />
        <p className="mb-6 max-w-3xl text-ink-body">
          These guides cover the problems {site.city} homeowners run into most. Each starts with safety, walks through checks you can do
          yourself, and explains when a problem needs a technician.
        </p>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={postHref(p)} className="card group flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:shadow-lift">
                <span className="font-display text-[19px] font-bold leading-tight tracking-[-0.02em] text-ink">{p.title}</span>
                <span className="mt-2 flex-1 text-[15px] text-ink-body">{p.excerpt}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-ink">
                  Read the guide <Icon name="arrow" className="h-4 w-4 text-flame transition group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href={routes.blog} className="font-semibold text-ink underline decoration-flame/50 underline-offset-4 hover:decoration-flame">
            See all appliance repair tips
          </Link>
        </p>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="About this site:" accent="questions." />
          <FaqList faqs={aboutFaqs} />
        </div>
      </Section>

      <FinalCta
        formId="about_final"
        title="Appliance acting up?"
        accent="Make one call."
        text={`Call ${site.brandName}’s line and describe the problem. A technician who works in ${site.city} and ${site.county} picks up from there.`}
      />
    </>
  );
}

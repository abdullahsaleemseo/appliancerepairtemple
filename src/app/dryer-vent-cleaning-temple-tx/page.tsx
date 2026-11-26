import Link from 'next/link';
import { routes, site } from '@/config/site';
import type { Faq } from '@/content/types';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

/** Dryer vent cleaning page (source: content/dryer-vent-v1.md, Nov 2026). No prices on this page. */
const path = '/dryer-vent-cleaning-temple-tx/';
const description =
  'Dryer vent cleaning in Temple, TX: why long attic and roof runs clog, the signs to watch for and what a cleaning involves. Call (254) 615-2088 to ask.';

export const metadata = pageMetadata({
  title: 'Dryer Vent Cleaning Temple TX | Faster, Safer Drying',
  description,
  path,
});

const routesTable: [string, string, string][] = [
  [
    'Short run straight through an outside wall',
    'Little to slow the air down, so it clogs slowly, mostly at the outside hood',
    'Brushing the short duct from both ends and clearing the hood',
  ],
  [
    'Long run through an attic or between floors',
    'Air loses speed over distance and at every elbow, so lint drops out along the way',
    'Running a rotary brush and vacuum through the full length, often from both ends, and checking joints and sagging sections',
  ],
  [
    'Roof vent',
    'Lint has to climb straight up, falls back, and collects at the cap; caps attract nests',
    'Cleaning from below and at the roof cap, which means safe roof access',
  ],
  [
    'Crushed transition duct behind the dryer',
    'The flexible piece between the dryer and the wall gets flattened when the dryer is pushed back',
    'Replacing it with a short rigid or semi-rigid metal connector and setting the dryer with space behind it',
  ],
  [
    'Vent cap with a stuck flap or a screen',
    'A flap that barely opens or a screen over the opening traps lint right at the exit',
    "Clearing or replacing the cap; screens should come off, since dryer caps aren't meant to have them",
  ],
];

const visit: [string, string][] = [
  [
    'Behind the dryer.',
    'The dryer gets pulled out and disconnected, and the transition duct is checked for crushing, tears and lint packed inside. Foil or vinyl connectors usually get swapped for metal.',
  ],
  ['Along the run.', 'A rotary brush on flexible rods is fed through the duct while a vacuum pulls the loosened lint out. Long runs often get done from both ends.'],
  ['At the outside cap.', 'The hood is cleared, the flap is checked to make sure it swings freely, and any screen is removed. Roof caps get the same attention from above.'],
  ['Back at the dryer.', 'Once everything is reconnected, the dryer runs while airflow is checked at the outside hood, so you can feel the difference.'],
];

const faqs: Faq[] = [
  {
    q: 'Can I clean my dryer vent myself?',
    a: 'Often, yes, on a short, accessible run. Unplug the dryer (and shut the gas valve on a gas dryer), disconnect the duct, and use a dryer vent brush kit from both ends. Long attic runs, roof vents and ducts that have come apart are harder to do well and safely.',
  },
  {
    q: 'Is a dryer vent the same as an air duct?',
    a: "No. Air ducts move heated and cooled air through the house for the HVAC system. The dryer vent is a separate, single duct that carries hot, moist, lint-filled exhaust from the dryer to the outside. Cleaning one doesn't clean the other.",
  },
  {
    q: 'Does a clogged vent raise my electric or gas bill?',
    a: 'It can. A restricted vent makes each load run longer, sometimes for two cycles instead of one, so the dryer uses more energy per load. Restoring good airflow usually brings drying times, and that extra energy use, back down to where they were.',
  },
  {
    q: 'Can a dryer vent end in the attic or garage instead of outside?',
    a: "It shouldn't. Dryer exhaust carries moisture and lint, and venting it indoors or into an attic can cause mold, damage and a fire risk. A gas dryer also produces combustion gases. Dryer vents are meant to end outside the house, with a proper cap.",
  },
  {
    q: 'How do I keep birds out of the outside vent?',
    a: 'Use a cap made for dryer vents, with a flap or louvers that close when the dryer is off. Avoid adding a fine screen over the opening, since it traps lint and blocks airflow. Check the cap each spring, when birds tend to nest.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';
const th = 'px-4 py-3 font-semibold';

export default function DryerVentCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: `Dryer vent cleaning in ${site.city}, ${site.stateAbbr}`, serviceType: 'Dryer vent cleaning', description, path })} />

      <PageHero crumbs={[{ name: 'Dryer Vent Cleaning', path }]} title={`Dryer Vent Cleaning in ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          A lint screen catches most of the lint, not all of it. Whatever slips past travels the whole vent route outside, settling at every
          bend, sag and long stretch. That&apos;s why dryer vent cleaning in Temple, TX depends so much on where your vent goes. A two-foot run
          straight through an outside wall can go years with little buildup; a long run across a hot attic can choke in one. If drying has
          slowed down, call <PhoneLink location="vent_intro" className={white} /> and describe where the vent exits.
        </p>
        <div className="mt-8">
          <CtaRow location="vent_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="route-heading">
        <SectionHeading id="route-heading" eyebrow="Vent routes" title="Where does your vent go," accent="and why does that matter?" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[680px] text-left text-[15px]">
            <caption className="sr-only">Dryer vent routes, why each one clogs and what cleaning involves</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Vent route</th>
                <th scope="col" className={th}>Why it clogs</th>
                <th scope="col" className={th}>What cleaning involves</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {routesTable.map(([route, why, cleaning]) => (
                <tr key={route} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{route}</th>
                  <td className="px-4 py-3 text-ink-body">{why}</td>
                  <td className="px-4 py-3 text-ink-body">{cleaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="white" labelledBy="signs-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="signs-heading" eyebrow="Warning signs" title="Signs your dryer vent" accent="is clogged" />
          <div className="prose-copy">
            <p>
              Clogged vents usually show it in time first: a load that used to dry in one cycle now needs a second, or clothes come out hot to
              the touch but still damp at the seams. Hot and damp together is the giveaway, because the heat is working but the moist air has
              nowhere to go.
            </p>
            <p>
              Inside the house, if the top of the dryer gets hot, or the laundry room turns warm and muggy whenever it runs, air that should be
              leaving the house is backing up instead. A burning smell, even faint, means stop and look.
            </p>
            <p>
              Outside, watch the vent hood while the dryer runs. Lint caught around the opening, or a flap that barely lifts, points to a
              restriction somewhere along the route. Some dryers now flag this on their own. Many LG models, for instance, measure airflow and
              show a vent-blocked warning, and <Link href="/brands/lg-appliance-repair-temple-tx/">LG&apos;s Flow Sense codes</Link> step up as
              the restriction gets worse.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="fire-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fire-heading" eyebrow="Fire safety" title="Is a clogged dryer vent" accent="a fire risk?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Yes. Lint is fine, dry and burns easily, and a restricted vent makes the dryer run hotter for longer. Failure to clean the dryer and
              its vent is a recognised factor in home dryer fires, which is the main reason vent cleaning is worth doing on a schedule rather
              than waiting for slow drying to force the issue.
            </p>
            <p>
              A high-limit thermostat and a thermal fuse cut the heat when the exhaust runs too hot, and with a vent that stays clogged, a blown
              thermal fuse is a common result. If a cleaning doesn&apos;t bring drying times back, the dryer itself may need a look, and{' '}
              <Link href="/dryer-repair-temple-tx/" className={white}>
                why a dryer stops heating
              </Link>{' '}
              covers the parts that usually fail.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="visit-heading">
        <SectionHeading id="visit-heading" eyebrow="The visit" title="What a cleaning visit" accent="usually involves" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {visit.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-sand bg-white p-6">
              <h3 className="font-display text-lg font-bold text-ink">{t}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-body">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[16.5px] text-ink-body">Ask when you call what the visit will include for your vent route, especially for a roof vent.</p>
      </Section>

      <Section tone="white" labelledBy="duct-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="duct-heading" eyebrow="Duct material" title="Foil, vinyl or metal:" accent="what should the duct be?" />
          <div className="prose-copy">
            <p>
              Rigid or semi-rigid metal duct is the standard recommendation. Foil and vinyl flex ducts crush easily, trap lint in their ribs and
              sag between supports, which is why many dryer manufacturers and building codes discourage them.
            </p>
            <p>
              Length matters as much as material. Residential codes based on the International Residential Code generally cap dryer duct length
              and subtract a set amount for each elbow, unless the dryer manufacturer allows a longer run. The exact allowance depends on your
              dryer, so check the installation section of its manual. Longer runs sometimes use a dryer booster fan.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="often-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="often-heading" eyebrow="How often" title="How often should a dryer vent" accent="be cleaned?" />
          <div className="prose-copy">
            <p>
              At least once a year is the common guidance, and{' '}
              <Link href="/blog/how-often-clean-dryer-vent/">how often to clean a dryer vent</Link> in your home comes down to how much laundry
              you run, how long the vent is and whether pets shed. Clean it sooner with several loads a day or a roof vent. A vent that clogs
              again quickly usually has a sag or a crushed connector somewhere along the route.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="local-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="local-heading" eyebrow="Temple homes" title="Dryer vent cleaning in Temple, TX:" accent="attics, heat and humidity" />
          <div className="prose-copy">
            <p>
              Many single-story Temple homes put the laundry room in the middle of the house, so the vent can&apos;t take a short path to an
              outside wall. Instead it runs up into the attic and across to an exterior wall or the roof. Those long attic runs collect the most
              lint, so they gain the most from regular dryer duct cleaning and lint removal.
            </p>
            <p>
              The attic itself adds trouble. In a Central Texas summer, attic air gets very hot, and a duct running through it warms the exhaust
              further, which makes a partial clog work the dryer even harder. Humid days make a restricted vent easier to notice too, since damp
              air from the clothes has a harder time leaving and loads take longer still.
            </p>
            <p>
              Vent calls come from all three Temple ZIP codes, 76501, 76502 and 76504, and{' '}
              <Link href={routes.areas}>Belton, Killeen and the other nearby towns</Link> are on the same list.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="cost-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cost-heading" eyebrow="Cost" title="What changes" accent="the cost?" />
          <div className="prose-copy">
            <p>
              Route is most of it. A short wall vent takes less time than a long attic run cleaned from both ends, and a roof vent adds safe
              access to the roof. A crushed or foil transition duct that needs replacing, a nest in the cap, or a run that has come apart in the
              attic all add work. Dryer vent cleaning near me in Temple can mean very different jobs, so no flat number is honest. Call{' '}
              <PhoneLink location="vent_cost" className={flame} />, describe where your vent goes, ask about the visit fee and get the price
              before the work starts. The same call can cover the dryer and <Link href={routes.home}>any other appliance in the house</Link> if
              needed.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Dryer vent" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="vent_final"
        title="Breathing"
        accent="easy again"
        cardHeadingLevel="p"
        cardTitle="Book a vent cleaning"
        appliance="dryer"
        text={
          <>
            For dryer vent cleaning in Temple, TX, note where the vent leaves the house and how long loads take now, then call{' '}
            <PhoneLink location="vent_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              set up a vent cleaning
            </Link>
            . Knowing the route up front helps the visit go smoothly.
          </>
        }
      />
    </>
  );
}

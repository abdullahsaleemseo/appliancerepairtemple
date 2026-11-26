import Link from 'next/link';
import { routes, site } from '@/config/site';
import type { Faq } from '@/content/types';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';
import { MidCta } from '@/components/MidCta';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

/** Bosch brand page (source: content/brand-bosch-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/bosch-appliance-repair-temple-tx/';
const description =
  "Bosch appliance repair in Temple, TX: what's normal for a Bosch dishwasher, what E24 and E25 mean, and compact washer and dryer care. Call (254) 615-2088.";

export const metadata = pageMetadata({
  title: 'Bosch Appliance Repair Temple TX | Dishwashers & Laundry',
  description,
  path,
});

const normal: [string, string, string][] = [
  [
    'Plastic containers still wet after the cycle',
    'Yes, on many models: they dry by condensation, without an exposed heating element, and plastic holds less heat',
    'Glass and dishes are wet too, or drying suddenly got worse; check rinse aid first',
  ],
  [
    "Can't hear it running; a small light on the floor",
    'Yes: many models project a light on the floor while the cycle runs',
    'The light stays on but the cycle never finishes, or nothing lights and nothing runs',
  ],
  ['Cycles take two hours or more', 'Yes: long, low-energy cycles are part of how they clean and dry', 'The cycle stalls at the same point or ends with a code'],
  [
    'Food grit on dishes, smell from the bottom',
    'Partly: the filter has to be twisted out and rinsed regularly',
    'Still gritty after a clean filter, or water stays above the filter',
  ],
  ['A little clear water in the sump after the cycle', 'Yes: it keeps the seals moist', 'Dirty water covering the tub floor'],
  [
    'Dishwasher stopped with E15 on the display',
    'No: water reached the base pan and the anti-flood system shut it down',
    'Always worth finding the leak before running it again',
  ],
];

const faqs: Faq[] = [
  {
    q: 'Why does my Bosch dishwasher smell when I open it?',
    a: 'Food trapped in the filter or the sump starts to smell between cycles, especially if the dishwasher sits closed for days. Rinse the filter assembly, wipe the door seal, and run a hot empty cycle with a dishwasher cleaner. Leaving the door slightly open after a cycle helps.',
  },
  {
    q: 'Can I use any rinse aid in a Bosch?',
    a: 'Yes, a standard dishwasher rinse aid works, and Bosch models rely on it more than most because of condensation drying. Keep the dispenser filled, and turn the dosage setting up a step if dishes come out spotty or wet.',
  },
  {
    q: 'Does a Bosch ventless dryer need a vent or a drain?',
    a: "It doesn't need an outside vent. It needs either its water container emptied regularly or a drain hose connected to a standpipe or sink, depending on the model and how it's installed. Check the manual for the drain setup and the condenser cleaning schedule.",
  },
  {
    q: "Why won't my Bosch compact washer door open after the cycle?",
    a: 'The door stays locked until the drum stops, the water is drained and the lock cools, which can take a minute or two. If water is still inside, the drain pump filter is often clogged. Drain it through the small hatch at the bottom front before calling.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

export default function BoschBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Bosch appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Bosch appliance repair',
          description,
          path,
          brand: 'Bosch',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'Bosch', path },
        ]}
        title={`Bosch Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Plenty of Bosch service calls turn out to be normal Bosch behavior: wet plastics after the cycle, a dishwasher so quiet you can&apos;t tell
          it&apos;s running, a filter that needs rinsing by hand. Bosch, made by BSH, designs the European way, so know what&apos;s normal before
          calling something broken. When something truly has failed, Bosch appliance repair in Temple, TX tends to land on a drain, filter or seal.
          Call <PhoneLink location="bosch_intro" className={white} /> with the model number and the code or symptom.
        </p>
        <div className="mt-8">
          <CtaRow location="bosch_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="normal-heading">
        <SectionHeading id="normal-heading" eyebrow="European design" title="Normal, or" accent="a real problem?" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[720px] text-left text-[15px]">
            <caption className="sr-only">Bosch behaviors that are normal and when each one becomes a real fault</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>What you notice</th>
                <th scope="col" className={th}>Normal for Bosch?</th>
                <th scope="col" className={th}>When it&apos;s a real fault</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {normal.map(([notice, isNormal, fault]) => (
                <tr key={notice} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{notice}</th>
                  <td className="px-4 py-3 text-ink-body">{isNormal}</td>
                  <td className="px-4 py-3 text-ink-body">{fault}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MidCta
          location="bosch_midpage"
          before={<>If what you&apos;re seeing falls in the right-hand column, call </>}
          after={<> and give the code if there is one, the series from the door edge or the model tag, and whether water is inside the tub or under it.</>}
        />
      </Section>

      <Section tone="white" labelledBy="codes-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="codes-heading"
            eyebrow="Error codes"
            title="Bosch error codes worth knowing:"
            accent="E24 and E25"
            intro="Two drain codes come up often on Bosch dishwasher repair calls in Temple:"
          />
          <div>
            <ul className="grid gap-3">
              <li className="rounded-2xl border border-sand bg-canvas p-4 text-[16px] leading-relaxed text-ink-body">
                <strong className="font-mono font-semibold text-ink">E24:</strong> water isn&apos;t draining as it should, usually because the drain
                hose is kinked, crushed behind the dishwasher or blocked, or the connection at the sink or garbage disposal is clogged.
              </li>
              <li className="rounded-2xl border border-sand bg-canvas p-4 text-[16px] leading-relaxed text-ink-body">
                <strong className="font-mono font-semibold text-ink">E25:</strong> the drain pump itself is blocked, often by a bit of glass, a seed or a
                label caught under the pump cover in the sump.
              </li>
            </ul>
            <div className="prose-copy mt-6">
              <p>
                For E24, check the hose under the sink first; a new disposal with its knockout plug still in place causes it too, and{' '}
                <Link href="/garbage-disposal-repair-temple-tx/">what to check on a disposal</Link> covers that connection. For E25, lifting out the
                filter reveals a small pump cover to check for debris. Confirm both codes in your manual, since meanings can vary by model and age.
              </p>
              <p>
                The E15 leak code, covered alongside <Link href="/dishwasher-repair-temple-tx/">the full water path of a dishwasher</Link>, deserves a
                reminder here: the leak behind it, not the code, is what needs fixing.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="series-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="series-heading" eyebrow="Dishwasher series" title="Why the series matters:" accent="100, 300, 500, 800 and Benchmark" />
          <div className="prose-copy">
            <p>
              Bosch dishwashers come in series, from the 100 at the entry level up through the 300, 500, 800 and Benchmark. Higher series add features
              like a third rack, more flexible racks, a stainless tub interior and, on the 800 Series and Benchmark, a drying system Bosch calls
              CrystalDry that uses a mineral to help pull moisture out. More features mean more parts, some series-specific. The series is usually
              printed on the door edge or on the tag, and Bosch dishwasher model numbers typically start with SH. For Bosch dishwasher repair, giving
              the series and model number saves a lot of guessing.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="laundry-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="laundry-heading" eyebrow="Compact laundry" title="Compact Bosch washers" accent="and ventless dryers" />
          <div className="prose-copy">
            <p>
              Bosch is well known for 24-inch compact laundry, common in apartments, condos and smaller homes where a full-size pair won&apos;t fit,
              often stacked in a closet. For Bosch washer repair in Temple, the usual issues are a clogged drain pump filter behind the small door at the
              bottom front, a door lock that won&apos;t release and a door seal that holds water and lint. The same cycle-stage approach used for{' '}
              <Link href="/washer-repair-temple-tx/">diagnosing any washer</Link> applies.
            </p>
            <p>
              Many compact Bosch dryers are ventless. Instead of pushing hot air outside, they cool it through a condenser or a heat pump and collect the
              water in a container or send it down a drain hose. If the condenser or its filter clogs with lint, drying slows to a crawl and the dryer
              may stop with a warning. Clean the lint filter every load and the condenser on the manual&apos;s schedule. If drying stays slow after
              that, the steps for <Link href="/dryer-repair-temple-tx/">a dryer that&apos;s stopped drying</Link> still apply, minus the outside vent.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="oven-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="oven-heading" eyebrow="Ovens and ranges" title="Bosch wall ovens" accent="and ranges" />
          <div className="prose-copy">
            <p>
              Bosch also makes wall ovens, slide-in ranges and induction cooktops. Bosch oven repair in Temple follows familiar patterns: a temperature
              sensor when it runs hot or cold, an element or igniter when it won&apos;t heat, a convection fan or touch controls that quit, all laid out
              in <Link href="/oven-stove-repair-temple-tx/">oven and range repair by part</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" eyebrow="Worth repairing?" title="Bosch appliance repair in Temple, TX:" accent="is it worth it?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              For dishwashers, usually yes. Tubs and racks hold up well, and pumps, seals, sensors and filters are routine parts. Weigh it more
              carefully when an older 100 or 300 Series needs its main board, since that repair can approach the price of a new entry-level model.
              Compact laundry usually is too, since 24-inch replacements are fewer and harder to swap.
            </p>
            <p>
              A Bosch still within its warranty goes back to Bosch, who handles covered repairs. After that, the FTC reads the Magnuson-Moss Warranty
              Act as generally protecting your right to use an outside technician without losing coverage, with one catch: damage from a poor repair
              isn&apos;t covered.
            </p>
            <p>
              Before booking, get a feel for three things: the visit fee and the repair figure, both before any work; whether the technician&apos;s
              finding is a failed part or just a setting; and when the schedule has room, including whether the part tends to be in stock. Anyone typing
              Bosch repair near me in Temple can sort out the rest from those answers.
            </p>
            <p className="text-[15px] text-white/55">Independent repair only: neither BSH nor Bosch is involved with or has authorized this service.</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Bosch repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="bosch_final"
        title="Book your"
        accent="Bosch repair"
        cardHeadingLevel="p"
        cardTitle="Book a Bosch repair"
        text={
          <>
            Have the series, model number and any code ready, plus a note on where the water is; then phone{' '}
            <PhoneLink location="bosch_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a Bosch repair
            </Link>
            . Owners in{' '}
            <Link href={routes.areas} className={white}>
              Belton, Killeen and nearby towns
            </Link>{' '}
            book the same way.
          </>
        }
      />
    </>
  );
}

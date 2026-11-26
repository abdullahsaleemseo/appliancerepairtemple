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

/** Electrolux brand page (source: content/brand-electrolux-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/electrolux-appliance-repair-temple-tx/';
const description =
  'Electrolux appliance repair in Temple, TX: front-load washers, steam dryers, fridges and wall ovens, and what to photograph before you call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Electrolux Appliance Repair Temple TX | Laundry & Kitchen',
  description,
  path,
});

const photos: [string, string][] = [
  [
    'The model and serial tag,',
    " straight on and in focus. On washers and dryers it's usually inside the door opening; on refrigerators, inside the fresh-food section; on wall ovens, on the frame when the door is open.",
  ],
  ['The display,', ' if it shows a code or a message.'],
  ['The appliance as installed,', " so it's clear whether it's built in, stacked or freestanding."],
  ['Any visibly broken part,', ' such as a cracked handle, a torn door boot or a damaged rack.'],
];

const washerQs: [string, string][] = [
  [
    'Why does the door boot smell?',
    "Water, lint and soap residue settle into the folds of the rubber boot, and shutting the door seals that moisture in. Wipe the folds after use, leave the door open between loads, use HE detergent sparingly and run the manufacturer's cleaning cycle regularly. A boot that's torn or permanently stained may need replacing.",
  ],
  [
    'Do the steam features need anything special?',
    'Steam cycles depend on clean water flow and, on some models, a separate steam generator. If steam options stop working while regular cycles run fine, the water supply to that circuit, the generator or its sensor may be the cause. Hard water can scale steam parts over time.',
  ],
  [
    "Where's the drain pump filter?",
    'On most Electrolux front-loaders, behind a small access panel at the bottom front. A clogged filter causes slow draining, water left in the drum and drain codes. Put down towels and a shallow pan before unscrewing it.',
  ],
];

const faqs: Faq[] = [
  {
    q: 'Are Electrolux and Frigidaire washers the same?',
    a: "Some share a base design, especially Frigidaire's upper lines and Electrolux front-loaders. Electrolux models usually add features, finishes and controls of their own, and some parts differ even when the cabinets look alike. Match parts by the full model and serial number rather than by appearance.",
  },
  {
    q: 'Why does my Electrolux dryer need a water line?',
    a: "Models with steam features use a cold water connection to make steam. If the line isn't connected or the valve is off, steam cycles won't work, though regular drying usually still does. Check the installation guide for the connection and any water pressure requirements.",
  },
  {
    q: 'Can an Electrolux touch panel be repaired, or does it have to be replaced?',
    a: "Usually it's replaced as a part rather than repaired, since the touch panel and its board are sealed units on many models. Before replacing it, a technician checks the wiring and the main control, because a panel that seems dead isn't always the cause.",
  },
  {
    q: 'How do I read my Electrolux model number?',
    a: 'Many current Electrolux model numbers start with E, followed by letters that point to the product, such as EFLS for many front-load washers. Older models may use different patterns. Read the whole string off the tag, along with the serial number.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

export default function ElectroluxBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Electrolux appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Electrolux appliance repair',
          description,
          path,
          brand: 'Electrolux',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'Electrolux', path },
        ]}
        title={`Electrolux Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Electrolux appliances are usually worth repairing, but getting the right part matters more than with most brands. Electrolux, the Swedish
          parent company of Frigidaire, sells its own upper-tier line, and while some of its parts are shared with Frigidaire&apos;s higher models,
          others are Electrolux-only. So the full model and serial number come first in any Electrolux appliance repair in Temple, TX. Take a clear
          photo of the tag, jot down the symptom, and call <PhoneLink location="electrolux_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="electrolux_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="sibling-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="sibling-heading" eyebrow="Frigidaire's sibling" title="The premium sibling:" accent="what's shared and what isn't" />
          <div className="prose-copy">
            <p>
              Electrolux and Frigidaire come from the same company, and some of their platforms overlap, especially on refrigerators and laundry, where
              Electrolux models often sit on the same base design as Frigidaire&apos;s Gallery and Professional lines. Pumps, valves, fans and many
              sensors cross over, and the failure patterns described for{' '}
              <Link href="/brands/frigidaire-appliance-repair-temple-tx/">Frigidaire&apos;s fridges and ranges</Link> often apply here too.
            </p>
            <p>
              What doesn&apos;t cross over is just as important. Electrolux styling, glass, trim, handles, touch control panels and some electronic
              boards are specific to the Electrolux line. Those parts can cost more and are more likely to need ordering. Features like steam options
              in washers and dryers, or more advanced oven controls, also add parts that only Electrolux uses.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="parts-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="parts-heading" eyebrow="Ordering parts" title="Why the model and serial number" accent="matter here" />
          <div>
            <div className="prose-copy">
              <p>
                With a brand that shares some parts and not others, a near-match isn&apos;t good enough. Two Electrolux appliances that look identical
                can take different boards, gaskets or control panels depending on the production run, and the serial number is often what separates
                them. That&apos;s why a technician will want both numbers, exactly as printed, before ordering anything.
              </p>
              <p>Before you call, photograph:</p>
            </div>
            <ul className="mt-4 grid gap-3">
              {photos.map(([lead, rest]) => (
                <li key={lead} className="rounded-2xl border border-sand bg-canvas p-4 text-[16px] leading-relaxed text-ink-body">
                  <strong className="font-semibold text-ink">{lead}</strong>
                  {rest}
                </li>
              ))}
            </ul>
            <div className="prose-copy mt-6">
              <p>
                Some Electrolux-only parts may need to be ordered rather than pulled from stock, and timing depends on the part. Asking up front whether
                the likely part is usually on hand avoids surprises.
              </p>
              <p>
                If the appliance is still within Electrolux&apos;s warranty or an Electrolux protection plan, that changes who arranges the part, so
                contact Electrolux first. Once coverage has ended, the choice of technician is yours; the FTC explains that under the Magnuson-Moss
                Warranty Act, a manufacturer generally can&apos;t void a warranty just because independent service was used, though a faulty
                repair&apos;s damage isn&apos;t covered.
              </p>
            </div>
            <MidCta
              location="electrolux_midpage"
              before={<>With those photos ready, call </>}
              after={
                <>
                  {' '}
                  and send the details the way the scheduler asks for them: model, serial, the code or symptom, and how it&apos;s installed.
                </>
              }
            />
          </div>
        </div>
      </Section>

      <Section labelledBy="washer-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="washer-heading" eyebrow="Front-load laundry" title="Electrolux front-load washers:" accent="the common questions" />
          <div>
            <div className="prose-copy">
              <p>
                Front-load laundry is a big part of the lineup, and most Electrolux washer repair in Temple falls into a few familiar groups. The
                general cycle-stage approach in{' '}
                <Link href="/washer-repair-temple-tx/">diagnosing a washer that stops partway</Link> applies; these are the Electrolux-flavored
                versions.
              </p>
            </div>
            <div className="mt-6 grid gap-4">
              {washerQs.map(([q, a]) => (
                <div key={q} className="rounded-2xl border border-sand bg-white p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{q}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-ink-body">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="kitchen-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="kitchen-heading" eyebrow="Dryers, fridges, ovens" title="Electrolux dryers, refrigerators" accent="and wall ovens" />
          <div className="prose-copy">
            <h3 className="font-display text-xl font-semibold text-ink">Electrolux dryers</h3>
            <p>
              Matching Electrolux dryers bring the same airflow needs as any dryer, plus steam options on many models that need a cold water
              connection. For Electrolux dryer issues, a clean vent is the first check and the heat parts the second, the same order used for{' '}
              <Link href="/dryer-repair-temple-tx/">dryers that stop heating</Link>.
            </p>
            <h3 className="mt-8 font-display text-xl font-semibold text-ink">Electrolux refrigerators</h3>
            <p>
              These refrigerators lean on ice and water features and electronic controls. Electrolux refrigerator repair in Temple most often traces to
              an inlet valve or frozen fill tube when ice stops, a fan or defrost fault when the fresh-food side warms, and the control panel or a
              sensor when temperatures drift or the display misbehaves. The cooling steps in{' '}
              <Link href="/refrigerator-repair-temple-tx/">why a refrigerator stops cooling</Link> carry over.
            </p>
            <h3 className="mt-8 font-display text-xl font-semibold text-ink">Electrolux wall ovens and ranges</h3>
            <p>
              Wall ovens and ranges in this line often have convection and more involved electronic controls. Electrolux oven repair usually comes
              down to a temperature sensor, a bake element or igniter, a convection fan or the touch panel. Codes vary by model, so confirm any code in
              the manual, and see <Link href="/oven-stove-repair-temple-tx/">oven and range repair by part</Link> for how each one gets tested.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" eyebrow="Worth repairing?" title="Is Electrolux appliance repair" accent="in Temple, TX worth it?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Usually yes. Electrolux appliances cost more to replace than their Frigidaire cousins, and most repairs involve common parts. Look harder
              at two situations: an older appliance that needs an Electrolux-only board or panel, where part cost and availability can tip the
              decision, and an aging fridge with a compressor or refrigerant problem.
            </p>
            <p>
              On the phone, settle the visit fee and the repair price before anything is opened, find out whether the needed part is Electrolux-only
              or shared with Frigidaire, and see where the schedule has room. That&apos;s a solid basis for anyone who searched Electrolux repair near
              me in Temple. Owners call from every corner of Temple and from{' '}
              <Link href={routes.areas} className={white}>
                the smaller towns around it
              </Link>
              .
            </p>
            <p className="text-[15px] text-white/55">This service has no tie to Electrolux and works without its authorization.</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Electrolux repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="electrolux_final"
        title="Ready"
        accent="when you are"
        cardHeadingLevel="p"
        cardTitle="Book an Electrolux repair"
        text={
          <>
            Have the tag photo and a line about the problem ready, then call {site.brandName} at{' '}
            <PhoneLink location="electrolux_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book an Electrolux repair
            </Link>
            . The serial number often decides which part fits.
          </>
        }
      />
    </>
  );
}

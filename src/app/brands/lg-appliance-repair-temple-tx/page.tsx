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

/** LG brand page (source: content/brand-lg-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/lg-appliance-repair-temple-tx/';
const description =
  'LG appliance repair in Temple, TX: compressor and motor coverage vs labor, linear compressor symptoms and dryer vent codes d80 to d95. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'LG Appliance Repair Temple TX | Fridges, Washers & Dryers',
  description,
  path,
});

const flowSense: [string, string, string][] = [
  ['d80', 'The vent is about 80% restricted', 'Plan a vent cleaning soon; drying times are already longer'],
  ['d90', 'About 90% restricted', 'Clean the vent before running many more loads'],
  ['d95', 'About 95% restricted', 'Stop and clear the vent; the dryer is barely moving air'],
];

const faqs: Faq[] = [
  {
    q: "Does LG's long compressor warranty cover the repair visit?",
    a: 'Usually not after the first year. Long-term coverage on LG compressors and motors is typically parts-only, so labor, refrigerant and the visit may be yours to pay. Terms differ by model and purchase date, so check your warranty card or ask LG directly before booking.',
  },
  {
    q: 'Why is my LG fridge display showing Er with letters after it?',
    a: "That's an error code. The letters name the area at fault on many models, such as FF for the freezer fan or dH for the defrost system. Write the full code down, try a power reset once, and call if it returns.",
  },
  {
    q: 'Can I keep using my LG dryer while it shows d80?',
    a: "Yes, but plan a vent cleaning soon. At d80 the dryer still works, just slower and hotter than it should, and each load costs more energy. Don't let it reach d95, where airflow is nearly gone, and never ignore a burning smell.",
  },
  {
    q: "Is my LG fridge's ice maker the same problem as Samsung's?",
    a: 'LG uses an in-door ice compartment on some French door models too, and frost in that compartment is a known issue on certain ones. The fix starts with finding why cold air is escaping, not just clearing the ice.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';
const th = 'px-4 py-3 font-semibold';

export default function LgBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `LG appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'LG appliance repair',
          description,
          path,
          brand: 'LG',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'LG', path },
        ]}
        title={`LG Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Parts warranty and labor aren&apos;t the same thing, and with LG that difference shapes the whole repair decision. LG backs some key
          parts, such as certain refrigerator compressors and washer direct-drive motors, for longer than its standard coverage. Labor usually
          isn&apos;t part of that extra coverage after the first year. So a covered part can still come with a repair bill, and knowing which part
          failed is where LG appliance repair in Temple, TX begins. Have the model number and your purchase date handy, then call{' '}
          <PhoneLink location="lg_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="lg_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="fridge-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fridge-heading" eyebrow="LG refrigerators" title="My LG fridge stopped cooling." accent="Is it the compressor?" />
          <div className="prose-copy">
            <p>
              Maybe, but not always, and the difference matters. Many LG refrigerators use a linear compressor, a design that runs quietly and
              efficiently by moving a piston back and forth instead of rotating. Some of those compressors have failed early, and the problem drew a
              wave of owner complaints and lawsuits.
            </p>
            <p>
              A proper diagnosis comes first, because the cheaper suspects fail more often: an evaporator or condenser fan, the defrost heater or
              its sensor, or the control board. LG fridges often name these on the display, with codes such as Er FF for the freezer fan, Er CF for
              the condenser fan and Er dH for the defrost system on many models. When the compressor itself is the cause, the signs are a fridge
              that warms in both sections while the compressor runs constantly or clicks without starting, and a technician confirms it by checking
              the sealed system and the compressor&apos;s electrical readings. That is the point at which LG linear compressor repair in Temple
              makes sense to discuss, and the general steps behind{' '}
              <Link href="/refrigerator-repair-temple-tx/">why a refrigerator stops cooling</Link> apply to LG models up to then. LG refrigerator
              repair codes differ a little between models, so match yours against the manual.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="cover-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cover-heading" eyebrow="Parts vs labor" title="Is my LG still covered," accent="and who pays for the labor?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Start with the warranty card or the registration in your LG account. If the appliance is within its main warranty period, contact LG
              first, since in-warranty work is LG&apos;s to arrange. If only a long-term parts warranty applies, such as on a compressor or a
              direct-drive motor, LG may cover the part while you pay for the labor and the visit. Ask LG how that works for your model before
              booking.
            </p>
            <p>
              That math is why LG owners should get two numbers on any big repair: what the part would cost without coverage, and what the labor
              costs either way. For repairs outside the warranty, the choice of who does the work is yours. Federal law backs that choice: the
              FTC&apos;s guidance on the Magnuson-Moss Warranty Act says a manufacturer generally can&apos;t void coverage simply because an
              independent technician did the work, though it won&apos;t pay for damage a bad repair causes.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="dryer-heading">
        <SectionHeading
          id="dryer-heading"
          eyebrow="LG dryers"
          title="My LG dryer shows d80."
          accent="What does that mean?"
          intro="Many LG dryers have a feature called Flow Sense that measures airflow through the vent and warns you as it drops. The codes step up with the restriction:"
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full min-w-[520px] text-left text-[15px]">
              <caption className="sr-only">LG Flow Sense dryer vent codes and what to do</caption>
              <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                <tr>
                  <th scope="col" className={th}>Code</th>
                  <th scope="col" className={th}>What it means</th>
                  <th scope="col" className={th}>What to do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/70">
                {flowSense.map(([code, means, todo]) => (
                  <tr key={code} className="align-top">
                    <th scope="row" className="px-4 py-3 font-mono font-semibold text-ink">{code}</th>
                    <td className="px-4 py-3 text-ink-body">{means}</td>
                    <td className="px-4 py-3 text-ink-body">{todo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="prose-copy">
            <p>
              The dryer usually keeps running, which is exactly why people ignore the code. A badly restricted vent means longer cycles and more
              wear on heating parts. The fix is almost always in the vent rather than the dryer, and{' '}
              <Link href="/dryer-vent-cleaning-temple-tx/">dryer vent cleaning along the full route</Link> matters most for the long attic runs
              common in Temple homes. If the code returns right after a cleaning, or the dryer won&apos;t heat at all, look at{' '}
              <Link href="/dryer-repair-temple-tx/">why a dryer stops heating</Link>, since a thermal fuse or heater may have failed along the way.
              For LG dryer repair, codes vary by model, so check your manual.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="washer-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="washer-heading" eyebrow="LG washers" title="My LG washer is throwing codes." accent="Where do I start?" />
          <div className="prose-copy">
            <p>
              With the stage of the cycle where it stopped. LG&apos;s common washer codes for draining, water inlet, unbalanced loads and the door
              lock are covered alongside <Link href="/washer-repair-temple-tx/">how to trace a washer problem through the cycle</Link>, so this
              page won&apos;t repeat them. What&apos;s specific to LG is the direct-drive motor on most front-loaders: the motor attaches straight
              to the drum with no belt. When it fails, check whether your model carries LG&apos;s long-term motor parts coverage before paying for
              the part. Most LG washer repair in Temple, though, is the familiar list: a drain pump filter, a door lock or a worn door boot.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="model-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="model-heading" eyebrow="Model numbers" title="Where's my LG model number," accent="and what does it tell me?" />
          <div className="prose-copy">
            <p>
              LG model numbers start with letters for the product: WM is a front-load washer, WT a top-load washer, DLE an electric dryer and DLG
              a gas dryer, while fridges usually start with LF, LR or LS depending on the style. Fridge labels sit inside the cabinet, often high on
              a side wall, while washer and dryer labels hide in the door opening or on the back panel. Confirm the full number on the label.
              Connected models can also run Smart Diagnosis through the LG ThinQ app, which reads the appliance&apos;s status and can help pinpoint
              a fault before anyone visits.
            </p>
            <p className="text-[15px] text-ink-muted">This repair service has no connection to LG Electronics and isn&apos;t one of its authorized providers.</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" eyebrow="Worth repairing?" title="LG appliance repair in Temple, TX:" accent="is it worth it?" />
          <div className="prose-copy">
            <p>
              Usually, on appliances under about ten years old. Fans, defrost parts, sensors, pumps, door locks and boards are common LG repairs,
              and LG&apos;s long parts coverage on compressors and motors can take the biggest cost off the table when it applies. Two repairs
              deserve a harder look: a compressor or refrigerant problem on an older fridge with no coverage left, and pricey control boards on older
              models. If you searched for LG repair near me in Temple with a big-ticket repair in mind, check coverage first, then compare the
              remaining labor cost with a replacement.
            </p>
            <p>
              Call <PhoneLink location="lg_worth" className={flame} /> with the model number and purchase date; ask for the visit fee and a full
              repair quote while you&apos;re on the line. LG owners call from every corner of 76501, 76502 and 76504, and from{' '}
              <Link href={routes.areas}>Belton, Killeen, Salado and the smaller towns around them</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="LG repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="lg_final"
        title="Ready to sort out"
        accent="your LG?"
        cardHeadingLevel="p"
        cardTitle="Book an LG repair"
        text={
          <>
            Gather the model number, the code on the display and the purchase date, then call{' '}
            <PhoneLink location="lg_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book an LG repair
            </Link>
            . The purchase date speeds up coverage questions.
          </>
        }
      />
    </>
  );
}

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

/** GE brand page (source: content/brand-ge-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/ge-appliance-repair-temple-tx/';
const description =
  'GE appliance repair in Temple, TX for GE, Profile, Café and Monogram: what each line means for parts, oven F-codes and fridge quirks. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'GE Appliance Repair Temple TX | GE, Profile & Café',
  description,
  path,
});

const lines: [string, string, string][] = [
  ['GE', 'Most homes; the everyday ranges, fridges, dishwashers and microwaves', 'Widest parts supply; most repairs are routine'],
  ['GE Profile', 'Buyers who want more features: convection, smart controls, more fridge options', 'Same core parts as GE in many places, with more electronics to diagnose'],
  ['Café', 'Style-focused kitchens with custom finishes and hardware', 'Mechanical parts often match Profile; trim, handles and some controls are line-specific'],
  ['Monogram', 'Luxury built-in kitchens', 'Built-in installs take longer to pull out; parts can cost more and take longer to arrive'],
];

const codes: [string, string][] = [
  ['F1', 'Electronic control fault or runaway temperature'],
  ['F2', 'Oven temperature too high'],
  ['F3', 'Oven temperature sensor reads as open'],
  ['F4', 'Oven temperature sensor reads as shorted'],
  ['F7', 'A stuck or shorted keypad or function key'],
];

const faqs: Faq[] = [
  {
    q: 'Can I reset my GE oven after an F-code?',
    a: "Turning the breaker off for a minute or two and back on clears some codes. If the same code returns, the reset only hid it. For F1 or F2, keep the oven off at the breaker until it's checked, since the oven may be overheating.",
  },
  {
    q: 'Are GE Profile and Café parts the same as regular GE parts?',
    a: 'Many internal parts, like sensors, igniters and some valves, overlap across the lines. Trim, handles, glass, and some controls and features are line-specific. Always order by the full model number rather than the brand line alone, or ask the technician to cross-check it.',
  },
  {
    q: 'Why does my GE fridge show a filter light right after a new filter?',
    a: 'On many models the filter reminder has to be reset by hand after a change, usually by holding a button on the dispenser panel for a few seconds. The exact button varies by model, so check the manual or the label inside the fridge.',
  },
  {
    q: 'Does it matter that GE Appliances is owned by Haier now?',
    a: 'Not much for repairs. GE Appliances still designs and builds most of its products under the GE brand names, and parts for older GE models remain widely available. Haier also sells products under its own name, which are separate from the GE lines.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

export default function GeBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `GE appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'GE appliance repair',
          description,
          path,
          brand: 'GE Appliances',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'GE', path },
        ]}
        title={`GE Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Which GE do you own? It sounds like a trick question, but GE Appliances, owned by Haier since 2016, sells several lines under the GE
          name: plain GE, GE Profile, Café and Monogram. They share a lot underneath, but the line changes the features, the parts and what a
          repair costs. Knowing yours is the first step in GE appliance repair in Temple, TX, and the model tag usually answers it in one letter.
          Read it off, then call <PhoneLink location="ge_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="ge_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="lines-heading">
        <SectionHeading id="lines-heading" eyebrow="GE lines" title="GE, Profile, Café or Monogram:" accent="which one is in your kitchen?" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <caption className="sr-only">GE Appliances lines, who each is built for and repair notes</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Line</th>
                <th scope="col" className={th}>Who it&apos;s built for</th>
                <th scope="col" className={th}>Repair notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {lines.map(([line, who, notes]) => (
                <tr key={line} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{line}</th>
                  <td className="px-4 py-3 text-ink-body">{who}</td>
                  <td className="px-4 py-3 text-ink-body">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-copy mt-8 max-w-3xl">
          <p>
            The model number usually gives the line away. A leading P generally means Profile, C means Café and Z means Monogram, while plain GE
            models start with other letters, such as JB for an electric freestanding range or JGB for a gas one. On a GE range, the tag is usually
            on the frame behind the storage drawer or around the oven door opening. On a fridge, look inside the fresh-food section, along the
            side wall or near the top. Confirm the letters on your own tag, since GE has changed formats over the years.
          </p>
          <p className="text-[15px] text-ink-muted">
            Repairs here are done independently of GE Appliances and Haier, with no affiliation and no authorization from either.
          </p>
        </div>
      </Section>

      <Section tone="white" labelledBy="codes-heading">
        <SectionHeading
          id="codes-heading"
          eyebrow="Oven codes"
          title="GE oven error codes:"
          accent="what the F-codes mean"
          intro="Ranges from this brand report oven faults as F-codes on the display, and ovens are where GE oven repair calls most often start. These are common on GE ranges and wall ovens:"
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="overflow-hidden rounded-2xl border border-sand bg-white">
              <table className="w-full text-left text-[15px]">
                <caption className="sr-only">Common GE oven F-codes</caption>
                <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                  <tr>
                    <th scope="col" className={th}>Code</th>
                    <th scope="col" className={th}>What it usually points to</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/70">
                  {codes.map(([code, meaning]) => (
                    <tr key={code}>
                      <th scope="row" className="px-4 py-3 font-mono font-semibold text-ink">{code}</th>
                      <td className="px-4 py-3 text-ink-body">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[14.5px] text-ink-muted">Meanings can vary by model and age, so confirm yours in the owner&apos;s manual before acting on it.</p>
          </div>
          <div className="prose-copy">
            <p>
              F3 and F4 both lead back to the oven temperature sensor, the thin probe at the back of the oven cavity, or its wiring. That&apos;s
              one of the more straightforward GE oven repairs. An F1 or F2 is more serious: the control or a relay may be letting the oven heat
              without stopping, so turn the oven off at the breaker until it&apos;s checked. Bake elements, igniters and the rest of the range
              follow the same patterns as any other brand, covered under{' '}
              <Link href="/oven-stove-repair-temple-tx/">oven and stove repair by part</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="fridge-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fridge-heading" eyebrow="GE refrigerators" title="GE refrigerators:" accent="dispensers, ice and the filter chip" />
          <div className="prose-copy">
            <p>
              Water and ice cause more GE refrigerator repair in Temple than cooling does. Dispensers that slow down or stop, ice makers that quit
              and frozen fill tubes are common, and they follow the same water route as any refrigerator ice maker, which{' '}
              <Link href="/ice-maker-repair-temple-tx/">ice maker and water dispenser repair</Link> walks through stop by stop.
            </p>
            <p>
              One quirk is GE&apos;s own. Some newer GE fridges use a water filter with a small RFID chip, and the fridge checks for it. If it
              doesn&apos;t recognize the filter, the dispenser may slow down or stop delivering water at all, even though nothing is broken.
              Before assuming a failed valve, check that the filter is a type your model accepts and that it&apos;s fully seated. Cooling
              problems, on the other hand, behave like any other fridge, and{' '}
              <Link href="/refrigerator-repair-temple-tx/">why a refrigerator stops cooling</Link> applies to GE models as much as any.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="dish-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="dish-heading" eyebrow="Dishwashers and microwaves" title="GE dishwashers and" accent="over-the-range microwaves" />
          <div className="prose-copy">
            <p>
              Dishwasher calls for this brand usually come down to drain or control problems, and GE dishwasher repair follows the same logic as
              other makes. Standing water at the end of a cycle points to the filter, the drain hose or the pump, the same suspects as on other
              brands, and <Link href="/dishwasher-repair-temple-tx/">a dishwasher that won&apos;t drain</Link> lists them in order. Control
              panels that stop responding, or a cycle that stops partway with lights flashing, point to the touchpad or control board. A full
              power reset at the breaker sometimes clears a confused control; if the fault comes back, the part needs testing.
            </p>
            <p>
              Over-the-range microwaves are a big part of the GE lineup, often installed as a matched set with a GE range. When one stops
              heating, the fix depends on whether the part is worth it for a unit that also serves as the range hood, which{' '}
              <Link href="/microwave-repair-temple-tx/">microwave repair</Link> helps you weigh.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" eyebrow="Worth repairing?" title="GE appliance repair in Temple, TX: is it worth it?" accent="Depends on the line" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Plain GE appliances are usually worth fixing, which is good news if you searched GE repair near me in Temple. Sensors, igniters,
              elements, fans, valves and pumps are widely available and reasonably priced. The math shifts only when an older unit needs its main
              board or has a refrigerant leak.
            </p>
            <p>
              Profile and Café owners get a better return from repairs, simply because replacing the appliance costs more, so GE Profile repair and
              GE Café repair in Temple usually make sense. A sensor or a board on a Café range is a far smaller expense than a new Café range. With
              Monogram, repair is almost always the better path, though parts can take longer and built-in units take more work to reach.
            </p>
            <p>
              If your GE is still under the manufacturer&apos;s warranty, start with GE Appliances, since covered work goes through their service
              network. After that, you choose. The Magnuson-Moss Warranty Act, which the FTC explains on its consumer site, generally prevents a
              manufacturer from voiding a warranty only because an independent service was used, although damage from a poor repair isn&apos;t
              covered.
            </p>
            <p>
              Call <PhoneLink location="ge_worth" className={white} /> with the line and model number; the visit fee and a firm repair price are
              both worth settling before a panel comes off.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="GE repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="ge_final"
        title="Book your"
        accent="GE repair"
        cardHeadingLevel="p"
        cardTitle="Schedule a GE repair"
        text={
          <>
            Find the model tag, note the line and any F-code, then call <PhoneLink location="ge_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              schedule a GE repair visit
            </Link>
            . The line letter alone saves a round of questions.
          </>
        }
      />
    </>
  );
}

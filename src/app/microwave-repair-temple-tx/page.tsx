import Link from 'next/link';
import { routes, site } from '@/config/site';
import type { Faq } from '@/content/types';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

/** Microwave repair page (source: content/microwave-v1.md, Nov 2026). Replaces the generic service template for this slug. */
const path = '/microwave-repair-temple-tx/';
const description =
  'Microwave repair in Temple, TX: why countertop units rarely merit a repair, why over-the-range and built-in ones usually do. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Microwave Repair Temple TX | Over-the-Range & Built-In',
  description,
  path,
});

const worth: [string, string, string][] = [
  ['Countertop', 'Rarely', 'A replacement often costs about what a visit and a part would, and it plugs in with no installation'],
  [
    'Over-the-range',
    'Usually',
    "It's also the stove's vent fan and light, replacement needs a matching mounting plate, and installing one is a two-person job",
  ],
  [
    'Built-in or with a trim kit',
    'Usually',
    'Replacements have to fit the cabinet cutout and trim exactly, and higher-end units cost far more than most repairs',
  ],
  ['Microwave drawer', 'Usually', 'These are expensive to replace and fit a specific opening in the cabinets or island'],
];

const hvParts: [string, string][] = [
  ['The high-voltage diode,', 'a small part that often fails and is among the less expensive fixes.'],
  ['The magnetron,', "the tube that actually produces the microwaves; it's the costly part."],
  ['The high-voltage capacitor,', 'which works with the diode to power the magnetron.'],
  [
    'A door interlock switch,',
    'one of several switches that confirm the door is closed. A weak one can let the microwave run without heating, or stop it from starting at all.',
  ],
];

const faqs: Faq[] = [
  {
    q: 'Can a microwave leak radiation if the door is damaged?',
    a: "A bent door, broken hinge, damaged seal or faulty latch can affect how well the door seals. If the door doesn't close properly or the latch feels loose, stop using the microwave and have it checked or replaced. The FDA sets leakage limits, and door damage is the main risk.",
  },
  {
    q: 'Why does my microwave make a loud humming or buzzing noise?',
    a: 'Microwaves hum normally while running. A much louder hum or buzz, especially with no heating, often points to a failing magnetron, diode or capacitor. A grinding noise usually means the turntable motor or a stuck roller ring. Stop using it if the noise comes with a burning smell.',
  },
  {
    q: 'Why does my over-the-range microwave fan turn on by itself?',
    a: "Many over-the-range models have a heat sensor that turns the vent fan on automatically when the cooktop below gets hot, to protect the microwave's electronics. That's normal, even with the microwave off. If the fan runs constantly with the stove cold, the sensor or control may be faulty.",
  },
  {
    q: 'Is it safe to run a microwave empty?',
    a: "No. With nothing to absorb the energy, it reflects back toward the magnetron and can damage it. If you need to test a microwave, heat a cup of water instead. Running it empty for a few seconds by accident usually isn't harmful, but don't make a habit of it.",
  },
  {
    q: 'How long do microwaves usually last?',
    a: 'Many last somewhere around seven to ten years, depending on use and care. Keeping the inside clean, especially the waveguide cover, and not running it empty help it last longer. Over-the-range units that also work as a vent hood see heavier use.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';
const th = 'px-4 py-3 font-semibold';

export default function MicrowaveRepairPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: `Microwave repair in ${site.city}, ${site.stateAbbr}`, serviceType: 'Microwave repair', description, path })} />

      <PageHero crumbs={[{ name: 'Microwave Repair', path }]} title={`Microwave Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Most countertop microwaves aren&apos;t worth repairing; a new one usually costs less than the diagnosis and part. Over-the-range and
          built-in microwaves are a different story, and for those, microwave repair in Temple, TX usually makes more sense than tearing one out of
          the wall. If yours is mounted over the stove or built into the cabinets, call <PhoneLink location="microwave_intro" className={white} /> with
          the brand and model.
        </p>
        <div className="mt-8">
          <CtaRow location="microwave_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="worth-heading">
        <SectionHeading id="worth-heading" eyebrow="Worth fixing?" title="Is it worth fixing?" accent="Start with the type" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <caption className="sr-only">Whether each type of microwave is usually worth repairing, and why</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Type</th>
                <th scope="col" className={th}>Usually worth repairing?</th>
                <th scope="col" className={th}>Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {worth.map(([type, verdict, why]) => (
                <tr key={type} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{type}</th>
                  <td className={`px-4 py-3 font-semibold ${verdict === 'Rarely' ? 'text-flame' : 'text-mint'}`}>{verdict}</td>
                  <td className="px-4 py-3 text-ink-body">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-copy mt-8 max-w-3xl">
          <p>
            The blunt version: if a countertop microwave stops heating, buy a new one unless it&apos;s an expensive convection or combination
            model. If it&apos;s mounted or built in, a diagnosis is worth it before you decide.
          </p>
          <p>
            That diagnosis tells you a lot for a modest cost. A technician confirms which part failed, whether it&apos;s a cheap door switch or an
            expensive magnetron, and gives you a price you can weigh against a replacement plus installation. Over-the-range microwave repair often
            comes down to a single part, and knowing that up front keeps you from replacing a unit that had a few good years left, the same thinking
            behind <Link href="/blog/repair-or-replace-appliance/">weighing repair against replacement</Link> on any appliance.
          </p>
        </div>
      </Section>

      <Section tone="ink" labelledBy="safety-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="safety-heading" eyebrow="Safety" title="Why opening a microwave" accent="isn't a DIY job" dark />
          <div className="flex gap-4 rounded-2xl border border-flame-glow/40 bg-white/[0.04] p-6">
            <Icon name="shield" className="mt-1 h-6 w-6 shrink-0 text-flame-glow" strokeWidth={2} />
            <p className="text-[17px] leading-relaxed text-white/80">
              The high-voltage capacitor in a microwave can hold a dangerous charge even after the unit has been unplugged, sometimes for a long
              time. The high-voltage parts behind the cabinet, including the transformer, diode and capacitor, operate at thousands of volts.
              Discharging and testing them safely takes the right tools and training. Cleaning the inside, replacing a turntable or a bulb from the
              outside, and checking the breaker are fine. Taking the outer cabinet off isn&apos;t.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="heat-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="heat-heading"
            eyebrow="No heat"
            title="Why is my microwave"
            accent="running but not heating?"
            intro="The light comes on, the turntable spins and the fan runs, but the food stays cold. That pattern points to the high-voltage circuit, which makes the microwaves themselves. The usual failures are:"
          />
          <div>
            <ul className="grid gap-3">
              {hvParts.map(([t, d]) => (
                <li key={t} className="rounded-2xl border border-sand bg-white p-4 text-[16px] leading-relaxed text-ink-body">
                  <strong className="font-semibold text-ink">{t}</strong> {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-body">
              Thermal cutouts and fuses can cut the heat as well. Which of these failed decides whether microwave not heating repair makes sense on
              your unit, which is why the part matters more than the symptom. If you&apos;d like to check the simple things first, the guide to{' '}
              <Link href="/blog/microwave-not-heating/" className={flame}>
                a microwave that runs but won&apos;t heat
              </Link>{' '}
              covers the safe outside checks, like the door latch and the power setting.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="turn-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="turn-heading" eyebrow="Turntable" title="Microwave turntable" accent="not spinning?" />
          <div className="prose-copy">
            <p>
              This one is often a quick fix. Lift out the glass tray and the roller ring underneath, wipe away food or spills, and make sure the
              ring&apos;s wheels turn freely and the tray seats on the coupler, the three-pronged piece in the center. A cracked coupler or a dirty
              roller ring stops the tray.
            </p>
            <p>
              If the tray and ring are fine and the coupler still doesn&apos;t turn, the turntable motor under the floor has likely failed. On many
              models, a turntable on/off button gets pressed by accident too, so check that before anything else.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="spark-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="spark-heading" eyebrow="Sparking" title="Microwave sparking?" accent="Stop using it" />
          <div className="prose-copy">
            <p>
              Sparks or arcing inside a microwave are a stop-now sign. The common causes are metal in the oven (a twist tie, foil, a utensil, gold
              trim on a plate), a damaged waveguide cover and chipped or burned paint inside the cavity.
            </p>
            <p>
              The waveguide cover is a small panel, often mica, on the inside wall where the microwaves enter. Grease and food splatter soak into it,
              and once it burns through, it sparks. On many models it&apos;s an inexpensive part that can be replaced. Chipped interior paint can
              arc too, and small spots can sometimes be touched up with microwave-safe cavity paint. If sparking continues with nothing metal inside
              and a clean cover, stop using the microwave and have it checked, because the problem may be inside the cabinet.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="otr-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="otr-heading" eyebrow="Over-the-range" title="Over-the-range microwaves" accent="do more than heat food" />
          <div className="prose-copy">
            <p>
              An over-the-range unit is also the vent hood for your stove, with an exhaust fan, grease filters and a cooktop light. When one fails,
              cooking gets harder in more ways than reheating leftovers, which is a big part of why repairs are usually worth it. Vent fans that stop
              or rattle, cooktop lights that burn out, and charcoal or grease filters that need replacing are common, and some of those don&apos;t
              require opening the cabinet at all.
            </p>
            <p>
              Replacing one isn&apos;t a simple swap either. The microwave hangs from a mounting plate on the wall and bolts through the cabinet
              above. A new unit often needs a different plate, and lifting it into place is a two-person job.
            </p>
            <p>
              Brands matter here too. <Link href="/brands/ge-appliance-repair-temple-tx/">GE over-the-range microwaves</Link> include Advantium
              speed-cook models with convection and halogen elements, which are more involved, and pricier, to repair than a standard unit.{' '}
              <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool microwave-hood combinations</Link> share many parts with
              KitchenAid and Maytag models, so parts tend to be easy to find. On some{' '}
              <Link href="/brands/samsung-appliance-repair-temple-tx/">Samsung over-the-range models</Link>, a code like SE points to a stuck or
              shorted keypad rather than the heating circuit, and some <Link href="/brands/lg-appliance-repair-temple-tx/">LG microwaves</Link> use
              inverter power instead of a traditional transformer, which changes how the heating side is diagnosed. Check any code against your
              manual.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="keypad-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="keypad-heading" eyebrow="Keypad and door" title="Keypad or" accent="door problems" />
          <div className="prose-copy">
            <p>
              Keypads that ignore some buttons, or register presses you didn&apos;t make, usually mean the touchpad membrane or the control board has
              failed, often after steam or splatter got behind the panel. A microwave that won&apos;t start with the door shut, or starts and stops
              when the door is bumped, points to a door switch or a worn latch. Door switches are inexpensive, but they&apos;re safety parts and need
              to be installed and tested correctly.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="local-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="local-heading" eyebrow="Temple kitchens" title="Microwave repair in Temple, TX:" accent="over-the-range kitchens" />
          <div className="prose-copy">
            <p>
              Newer homes, including plenty of the builds along West Adams Ave on Temple&apos;s west side, often came with an over-the-range microwave
              as the stove&apos;s only vent. In those kitchens, a dead microwave means a stove with no exhaust fan and no cooktop light, so the repair
              often matters more than the microwave itself. Built-in microwave repair in Temple comes up mostly in remodeled kitchens, in every Temple
              ZIP from 76501 to 76504, and <Link href={routes.areas}>Belton, Killeen and the towns around them</Link> are covered too.
            </p>
            <p>
              For microwave oven repair in Temple, have the brand, model number and type ready when you dial{' '}
              <PhoneLink location="microwave_local" className={flame} />; a visit fee and a repair price are what you need to compare against a new
              unit plus installation.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Microwave repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="microwave_final"
        title="Get the microwave"
        accent="working again"
        cardHeadingLevel="p"
        cardTitle="Book a microwave repair"
        appliance="microwave"
        text={
          <>
            Look up the model number, often inside the door frame, and note whether it&apos;s countertop, over-the-range or built-in, then call{' '}
            <PhoneLink location="microwave_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              schedule a microwave repair
            </Link>
            . The type alone usually answers whether a visit makes sense.
          </>
        }
      />
    </>
  );
}

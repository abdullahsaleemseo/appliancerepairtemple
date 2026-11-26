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

/** Dryer repair page (source: content/dryer-v1.md, Nov 2026). Replaces the generic service template for this slug. */
const path = '/dryer-repair-temple-tx/';
const description =
  "Dryer repair in Temple, TX: check airflow first, then gas or electric heat parts. Why dryers stop heating, squeak or won't start. Call (254) 615-2088.";

export const metadata = pageMetadata({
  title: 'Dryer Repair Temple TX | Dryer Not Heating? Gas & Electric',
  description,
  path,
});

const ventTest: [string, string][] = [
  ['Find the vent hood', "on the outside wall or roof line, and make sure it's actually your dryer's."],
  ['Feel the airflow', 'with your hand a few inches from the opening. It should be strong and warm, like a hair dryer on high.'],
  ['Watch the flap.', 'It should swing fully open while the dryer runs and close when it stops.'],
  ['Look for lint', 'packed around the hood, on the wall below it or stuck in a screen over the opening.'],
  ['Check behind the dryer', "once it's off: a crushed or kinked connector duct can choke airflow before it ever reaches the wall."],
];

const parts: [string, string, string, string][] = [
  ['Heat source', 'Igniter (glow bar) lights the gas', 'Heating element, a coil of resistance wire', 'Drum turns, air stays cold'],
  ['Flame or heat check', 'Flame sensor confirms the igniter is hot', 'Not used', 'Gas: igniter never glows, or glows and goes out with no flame'],
  ['Gas control', 'Gas valve coils open the valve', 'Not used', 'Gas: igniter glows, then shuts off without lighting'],
  ['Power supply', 'Standard 120V outlet plus a gas line', '240V outlet on a double breaker', 'Electric: runs and tumbles with no heat if half the breaker trips'],
  ['Safety parts (both)', 'Thermal fuse, high-limit thermostat, cycling thermostat', 'Same', 'No heat at all, or heat that cuts out partway through'],
];

const tests: [string, string][] = [
  ['Continuity', 'on the thermal fuse, high-limit thermostat, cycling thermostat and, on electric models, the heating element.'],
  ['Voltage', 'at the outlet and terminal block, including both legs of a 240V supply on electric dryers.'],
  ['The gas ignition sequence:', 'igniter glow, flame sensor response and gas valve coils, on gas dryers.'],
  ['Airflow', 'at the exhaust and through the duct, since a restricted vent is the root cause behind many failed heat parts.'],
  ['The belt path:', 'idler pulley, drum rollers, glides and the belt itself.'],
];

const faqs: Faq[] = [
  {
    q: 'Is it safe to keep using a dryer that takes two cycles to dry?',
    a: "It's a warning sign, not just an annoyance. Long cycles usually mean restricted airflow, which keeps the heat on longer while more lint settles in the duct. Check the vent and clean the lint screen housing before running many more loads.",
  },
  {
    q: 'Can I replace a thermal fuse myself?',
    a: "Many people do, but find out why it blew first. A fuse usually opens because the dryer overheated, most often from a clogged vent. Never bypass a thermal fuse with a jumper wire, since it's there to prevent a fire. Unplug the dryer before opening any panel.",
  },
  {
    q: 'Why does my gas dryer smell like gas for a moment when it starts?',
    a: "A faint gas smell for a second or two as the burner lights can be normal. A strong smell, or one that lingers, isn't. Get everyone out, leave light switches alone, and call your gas utility or 911 once you're outside. A smell that comes back every time the dryer lights also needs the burner checked.",
  },
  {
    q: 'Why do my clothes come out wrinkled even on the right setting?',
    a: 'Overloading and leaving clothes in the drum after the cycle ends cause most wrinkles. A dryer that runs too hot, from a failed cycling thermostat or a blocked vent, can also set wrinkles in. Try smaller loads and remove them promptly; if heat seems excessive, have the thermostat checked.',
  },
  {
    q: 'Can a dryer go in a closet?',
    a: 'Some can, if the manufacturer allows closet installation and the closet has the clearances and ventilation listed in the installation instructions. The dryer still needs a proper vent to the outside. Check the manual or the label inside the door before installing it in a tight space.',
  },
  {
    q: 'Do I need a new cord when I move my electric dryer to a new house?',
    a: 'Sometimes. Older homes often have 3-prong dryer outlets and newer ones 4-prong, so the cord has to match the outlet. Swapping the cord means rewiring the terminal block correctly, including the ground strap, so follow the manual or have it done for you.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';
const th = 'px-4 py-3 font-semibold';

export default function DryerRepairPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: `Dryer repair in ${site.city}, ${site.stateAbbr}`, serviceType: 'Dryer repair', description, path })} />

      <PageHero crumbs={[{ name: 'Dryer Repair', path }]} title={`Dryer Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          A lot of dryers that &ldquo;stopped heating&rdquo; are really suffocating on lint. When hot, wet air can&apos;t get out, the dryer
          either shuts its heat off to protect itself or keeps running while the clothes stay damp, and from the laundry room both look like a
          broken heater. So dryer repair in Temple, TX starts with airflow, then heat, then everything else. If your dryer is running cold, slow or
          not at all, unplug it if you smell burning, then call <PhoneLink location="dryer_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="dryer_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="vent-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="vent-heading"
            eyebrow="Airflow first"
            title="Test the vent"
            accent="from outside first"
            intro="Two minutes outside tells you more than any guess. Start a load on high heat, then:"
          />
          <div>
            <ul className="grid gap-3">
              {ventTest.map(([t, d]) => (
                <li key={t} className="flex gap-3 rounded-2xl border border-sand bg-white p-4 text-[16px] leading-relaxed text-ink-body">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-flame" strokeWidth={2.4} />
                  <span>
                    <strong className="font-semibold text-ink">{t}</strong> {d}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-body">
              Weak, barely warm air or a flap that hardly moves means the vent is the problem, or at least part of it. That calls for cleaning the
              full run, not just the lint screen, and{' '}
              <Link href="/dryer-vent-cleaning-temple-tx/" className={flame}>
                how a dryer vent gets cleaned from end to end
              </Link>{' '}
              depends a lot on whether yours goes through a wall, the attic or the roof.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="heat-heading">
        <SectionHeading
          id="heat-heading"
          eyebrow="Heat second"
          title="Why is my dryer"
          accent="not heating?"
          intro="If the vent passes the test, the heat source is next, and that depends on fuel. Both kinds share the same safety parts, though: a thermal fuse that blows when the exhaust gets too hot, and a high-limit thermostat that cuts the heat before that happens. On many dryers the fuse is one-time; once it opens, it has to be replaced, and it opened for a reason."
        />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[760px] text-left text-[15px]">
            <caption className="sr-only">Gas and electric dryer heat parts compared, and what each failure looks like</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Part</th>
                <th scope="col" className={th}>Gas dryer</th>
                <th scope="col" className={th}>Electric dryer</th>
                <th scope="col" className={th}>What failure looks like</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {parts.map(([part, gas, elec, fail]) => (
                <tr key={part} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{part}</th>
                  <td className="px-4 py-3 text-ink-body">{gas}</td>
                  <td className="px-4 py-3 text-ink-body">{elec}</td>
                  <td className="px-4 py-3 text-ink-body">{fail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-copy mt-8 max-w-3xl">
          <p>
            The electric dryer quirk catches many people. The motor and drum run on 120 volts, while the heating element needs the full 240. If one
            side of the double breaker trips, the dryer tumbles happily and never warms up. Flip that breaker fully off and back on before calling.
          </p>
          <p>
            On a gas dryer, watch through the small window or listen near the bottom front. A glow that appears and fades without the whoosh of a
            flame points to the gas valve coils; no glow at all points to the igniter or flame sensor. Either way, a dryer not heating repair is
            common and usually fixable. If you want to try the simple checks yourself first, there&apos;s a step-by-step for{' '}
            <Link href="/blog/dryer-not-heating/">a dryer that runs but won&apos;t heat</Link>, with the breaker and the thermal fuse near the top
            of the list.
          </p>
        </div>
      </Section>

      <Section labelledBy="slow-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="slow-heading" eyebrow="Slow drying" title="Dryer takes too long to dry?" accent="Look in this order" />
          <div className="prose-copy">
            <p>
              Long drying almost always comes back to air. The vent is first, then the lint screen housing below the screen, which collects a felt
              of lint that the screen itself never catches. A shop vacuum with a narrow nozzle reaches most of it.
            </p>
            <p>
              Next comes the moisture sensor, two metal strips inside the drum, usually near the lint screen. Dryer sheets and fabric softener leave
              a waxy film that keeps the sensor from reading damp clothes, so the dryer ends the cycle early or misjudges it. Wipe the strips with
              rubbing alcohol on a cloth.
            </p>
            <p>
              Then look at the load. A drum packed full can&apos;t tumble clothes through the air, and a washer that isn&apos;t spinning properly
              sends out loads far wetter than they should be. If the washer is the culprit, the dryer is only the messenger.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="noise-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="noise-heading" eyebrow="Noises" title="Why is my dryer squeaking," accent="thumping or squealing?" />
          <div className="prose-copy">
            <p>
              Most dryer noises are wear parts on the belt path. A high squeal that rises and falls with the drum usually means a worn idler pulley,
              the spring-loaded wheel that keeps the belt tight. A rhythmic thump or squeak often comes from drum rollers or worn drum glides, the
              felt or plastic pads the drum rides on. A slapping sound can be a belt that&apos;s cracked or fraying. None of these fail all at once,
              but the noise gets worse, and a seized pulley can snap the belt.
            </p>
            <p>
              Whirlpool and Maytag dryers built on the same design share many of these belt-path parts, and{' '}
              <Link href="/brands/maytag-appliance-repair-temple-tx/">Maytag dryers from the same platform</Link> take the same rollers and
              pulleys. On older units, the noise usually starts low and grows over months.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="start-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="start-heading" eyebrow="Won't start" title="Dryer won't start?" accent="Check the simple things before the motor" />
          <div className="prose-copy">
            <p>
              A dryer that&apos;s completely dead is often missing power: a tripped breaker, a loose plug or a GFCI upstream. If the light comes on
              but the drum doesn&apos;t turn, the usual suspects are the door switch, the start switch, a blown thermal fuse (on many models it cuts
              power to the motor, not just the heat) or a belt switch that stops the motor when the belt breaks. A hum with no turning points to the
              motor or a jammed drum.
            </p>
            <p>
              Some newer dryers name the fault on the display. A heating or sensor code on a{' '}
              <Link href="/brands/samsung-appliance-repair-temple-tx/">Samsung dryer</Link> narrows things down, and many LG dryers go further,
              measuring the vent airflow and showing a warning as it drops, which is why{' '}
              <Link href="/brands/lg-appliance-repair-temple-tx/">LG dryer vent warnings</Link> are worth taking seriously.{' '}
              <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool dryers</Link> often hide a service test mode too, which runs the
              motor and heat in turn so a fault shows itself. Codes differ by model, so confirm yours in the manual.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="test-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="test-heading" eyebrow="The visit" title="What will a" accent="technician test?" dark />
          <div>
            <ul className="grid gap-3">
              {tests.map(([t, d]) => (
                <li key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[16px] leading-relaxed text-white/75">
                  <strong className="font-semibold text-white">{t}</strong> {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[17px] leading-relaxed text-white/70">
              Gas dryer repair in Temple and electric dryer repair, like any clothes dryer repair in Temple, TX, cover the same safety parts, so the
              technician usually tests those first and the fuel-specific parts after.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="local-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="local-heading" eyebrow="Temple homes" title="Dryer repair in Temple, TX:" accent="attics, garages and humid days" />
          <div className="prose-copy">
            <p>
              Many Temple homes run the dryer vent up through the attic to the roof or a far wall, because the laundry room sits in the middle of
              the house. A long attic run collects lint faster, and in a Central Texas summer the attic air itself adds heat to the exhaust. That
              combination is hard on thermal fuses.
            </p>
            <p>
              Dryers in hot garages work in air that&apos;s already warm, and the dryer&apos;s sensors and safety parts read that heat too. A dryer
              that trips its high-limit thermostat only on August afternoons is telling you something about its surroundings as much as its parts.
            </p>
            <p>
              Humid days make a weak vent obvious. On a dry winter day, a partly restricted vent might still get loads done; on a muggy summer day,
              the same vent can add a full cycle. If drying times jump with the weather, the vent is the first thing to suspect.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" eyebrow="Repair or replace" title="Is a dryer" accent="worth repairing?" />
          <div className="prose-copy">
            <p>
              Dryers are among the most worth-fixing appliances in the house. They&apos;re mechanically simple, the common failures are inexpensive
              parts, and the parts for most major brands stay available for years. A thermal fuse, a belt, an idler pulley, an igniter, a heating
              element or a door switch rarely costs anywhere near a new dryer.
            </p>
            <p>
              The exceptions are a failed control board on an older electronic model, a drum or bearing failure on a very old unit, or a dryer that
              keeps blowing fuses because the house&apos;s vent can&apos;t be fixed without major work. Whatever the case, a call to{' '}
              <PhoneLink location="dryer_worth" className={flame} /> with the symptoms is the next step; ask about the visit fee and have the repair
              price spelled out before any part comes out of the box.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Dryer repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="dryer_final"
        title="Get the dryer"
        accent="back to drying"
        cardHeadingLevel="p"
        cardTitle="Book a dryer repair"
        appliance="dryer"
        text={
          <>
            For dryer repair in Temple, TX, run the outside vent test, note whether the dryer is gas or electric, then call{' '}
            <PhoneLink location="dryer_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a dryer repair
            </Link>
            . Knowing the fuel type and what the vent felt like points straight to the likely part.
          </>
        }
      />
    </>
  );
}

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

/** Refrigerator repair page (source: content/refrigerator-v1.md, Nov 2026). Replaces the generic service template for this slug. */
const path = '/refrigerator-repair-temple-tx/';
const description =
  'Refrigerator repair in Temple, TX for fridges that run warm, leak, frost up or get loud. See the likely causes, then call (254) 615-2088 to book.';

export const metadata = pageMetadata({
  title: 'Refrigerator Repair Temple TX | Not Cooling or Leaking?',
  description,
  path,
});

const symptoms: [string, string, string][] = [
  ['Fresh-food side warm, freezer cold', 'Evaporator fan, frosted coil, stuck damper', 'Fan, frost on the coil, damper movement'],
  ['Both sections warm', 'Dirty condenser coils, condenser fan, start relay, compressor', 'Coils, condenser fan, relay and overload'],
  ["Frost on the freezer's back wall", 'Defrost heater, thermostat, timer or board', 'Continuity, whether defrost starts'],
  ['Water under the crisper drawers', 'Clogged or frozen defrost drain', 'Drain opening and line'],
  ['Puddle on the floor', 'Drain pan, inlet valve, filter housing, supply line', 'Pan, valve and line connections, filter head'],
  ['Clicking every few minutes, no cooling', 'Start relay or overload', 'Relay, overload, compressor windings'],
  ['Loud buzzing or grinding', 'Fan hitting ice, worn fan motor, compressor', 'Both fans, ice around blades, compressor mounts'],
  ['Ice maker not filling', 'Inlet valve, frozen fill tube, ice maker module', 'Valve screen, fill tube, module test'],
  ['Water dispenser slow', 'Clogged filter, scaled valve, frozen door line', 'Filter age, flow at the valve, door line'],
];

const sounds: [string, string][] = [
  ['Normal.', 'A low hum while the compressor runs, gurgling as refrigerant moves, a click at start and stop, cubes dropping and a sizzle during defrost.'],
  ['Ticking or scraping inside the freezer.', "Usually the evaporator fan blade catching on ice. That's a defrost problem showing up early."],
  ['Rattling at the bottom back.', 'Often the condenser fan, clogged with lint and pet hair until it wobbles, or a loose drain pan.'],
  [
    'Click, quiet, click again with no cooling.',
    "The compressor is trying to start and the overload keeps shutting it off. Often that's the start relay; sometimes it's the compressor, and only testing tells which.",
  ],
];

const faqs: Faq[] = [
  {
    q: 'How long should a refrigerator take to cool after a repair?',
    a: 'Plan on several hours. The fresh-food side usually gets back to 40°F or below within the day, and the freezer can take up to 24 hours to reach 0°F. Keep the doors closed and load food back gradually, because a full load of warm groceries slows the pull-down.',
  },
  {
    q: 'Is it normal for the side of my fridge to feel hot?',
    a: 'Yes, usually. Many refrigerators run condenser tubing through the side walls or around the door opening to stop condensation. Warm to the touch is normal. Too hot to keep your hand on, together with poor cooling, is worth a call, since it can point to an airflow or condenser problem.',
  },
  {
    q: 'Can I clean the condenser coils myself?',
    a: "Usually, yes. Unplug the fridge, find the coils behind the bottom grille or on the back, and use a coil brush and a vacuum. Once or twice a year is a good habit, more often with pets. If the coils sit in a sealed compartment you can't reach, leave them for a technician.",
  },
  {
    q: 'Why is my refrigerator freezing food in the fresh-food section?',
    a: 'Most often the temperature is set too cold or food is blocking the vent where freezer air comes in. If neither is the case, a damper stuck open or a failed temperature sensor lets in too much cold air. A technician tests the sensor and watches whether the damper opens and closes.',
  },
  {
    q: 'Should I replace the water filter before calling about slow water or ice?',
    a: "Yes, if it's due or you don't know when it was last changed. An overdue filter is the easiest fix for slow flow, and a fresh one rules it out. Use a filter made for your model, since a poor fit can leak at the filter housing.",
  },
];

const a = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';

export default function RefrigeratorRepairPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({ name: `Refrigerator repair in ${site.city}, ${site.stateAbbr}`, serviceType: 'Refrigerator repair', description, path })}
      />

      <PageHero crumbs={[{ name: 'Refrigerator Repair', path }]} title={`Refrigerator Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          The first thing most people notice is the drinks in the door. They&apos;re not cold anymore, yet the freezer still feels fine.
          That split is a useful clue for refrigerator repair in Temple, TX, because in most fridges the cold is made in the freezer and
          blown into the fresh-food side. When only the fresh-food section warms, the problem is usually moving the cold air, not making
          it. Call <PhoneLink location="fridge_intro" className="font-semibold text-white underline decoration-white/40 underline-offset-4" />{' '}
          with the brand, the model number and what you&apos;ve noticed.
        </p>
        <div className="mt-8">
          <CtaRow location="fridge_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="cooling-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cooling-heading" eyebrow="Warm fridge, cold freezer" title="Why is my fridge not cooling" accent="but the freezer works?" />
          <div className="prose-copy">
            <p className="text-[19px] font-medium text-ink">
              Most often, cold air isn&apos;t reaching the fresh-food side from the freezer. The usual causes are an evaporator fan that has
              stopped, an evaporator coil buried in frost because the defrost system failed, or an air damper stuck shut between the two
              sections. All of them leave the freezer cold.
            </p>
            <p>
              A technician tells these apart with the freezer&apos;s back panel off. A silent evaporator fan points to the fan motor or the
              board feeding it. A coil packed with ice means defrost has quit, so the heater, defrost thermostat, timer or control board gets
              tested with a meter. Fan running and coil clear? Then the damper is probably stuck.
            </p>
            <p>
              Frost blockage has a tell: the fridge cools for a day or two after being unplugged, then warms up again. Mention that on a
              refrigerator not cooling repair call in Temple. Before you call,{' '}
              <Link href="/blog/refrigerator-not-cooling/">a few safe checks on coils, vents and settings</Link> can rule out the simple causes.
            </p>
            <p>
              When both sections are warming, look at heat instead. The condenser coils and condenser fan at the bottom back need a few
              inches of open air. Many older homes near Downtown Temple have alcoves built for smaller fridges, leaving barely an inch behind
              today&apos;s models. Squeezed in like that, it runs hot all year, and a Central Texas summer is when a tired fan or weak start
              relay gives out.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="symptoms-heading">
        <SectionHeading id="symptoms-heading" eyebrow="Symptoms" title="What is your refrigerator" accent="telling you?" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <caption className="sr-only">Refrigerator symptoms, likely causes and what the technician checks</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Symptom</th>
                <th scope="col" className="px-4 py-3 font-semibold">Likely cause</th>
                <th scope="col" className="px-4 py-3 font-semibold">What the technician checks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {symptoms.map(([s, cause, check]) => (
                <tr key={s} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{s}</th>
                  <td className="px-4 py-3 text-ink-body">{cause}</td>
                  <td className="px-4 py-3 text-ink-body">{check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section labelledBy="leak-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="leak-heading" eyebrow="Leaks" title="Refrigerator leaking water:" accent="inside the cabinet or on the floor?" />
          <div className="prose-copy">
            <p>
              Water inside the fridge, under the crisper drawers or as ice on the freezer floor, nearly always traces back to the defrost
              drain. Each defrost cycle melts frost off the evaporator coil, and that water runs down a line to a pan underneath. Crumbs or ice
              can plug the line, so the water backs up into the cabinet. A drain that keeps icing over can point to a defrost or drain heater
              fault.
            </p>
            <p>
              On the floor, there are more possible sources. The drain pan can crack or get knocked out of place when the fridge is moved. On
              models with ice and water, the supply line, the water inlet valve and the filter housing are all places a slow drip starts.
              Filter heads also crack when a filter is twisted in too hard.
            </p>
            <p>
              To narrow it down, dry the floor, tuck a paper towel under the front edge and another at the back, and check them in an hour.
              Whichever towel gets wet tells you where to start, and <Link href="/blog/refrigerator-leaking-water/">how to trace a refrigerator leak</Link> picks up from there.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="noise-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="noise-heading" eyebrow="Noises" title="Refrigerator making loud noise:" accent="which sounds are normal?" dark />
          <dl className="grid gap-3">
            {sounds.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <dt className="font-display text-[17px] font-bold text-white">{t}</dt>
                <dd className="mt-1.5 text-[16px] leading-relaxed text-white/75">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section labelledBy="ice-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="ice-heading" eyebrow="Ice and water" title="Ice maker or dispenser quit?" accent="Hard water is often part of it" />
          <div className="prose-copy">
            <p>
              Ice makers here have a local twist: much of the area&apos;s water is hard. Minerals scale the water inlet
              valve&apos;s small screen and narrow opening, so the fill slows over months until cubes come out small, hollow or not at all. A
              scaled valve can also drip instead of closing cleanly, freezing the fill tube shut. Hard water also shortens filter life, so a
              slow dispenser may just need a new filter.
            </p>
            <p>
              Before calling, check that the ice maker&apos;s switch or bail arm is on and the freezer is near 0°F; an ice maker won&apos;t
              cycle in a warm freezer. If both are fine, there are <Link href="/blog/ice-maker-not-working/">a few more ice maker checks</Link>{' '}
              you can do before calling.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="styles-heading">
        <SectionHeading id="styles-heading" eyebrow="Refrigerator styles" title="Which kind of refrigerator do you have," accent="and what tends to fail on it?" />
        <div className="grid gap-4 md:grid-cols-2">
          <StyleCard title="Top freezer">The simplest layout. Most repairs are a fan, a defrost part or a start relay.</StyleCard>
          <StyleCard title="Bottom freezer">
            Cold air travels up a duct to the fresh-food section, so a frosted duct shows up as a warm top half.
          </StyleCard>
          <StyleCard title="Side by side">
            Side by side refrigerator repair often comes down to the narrow air path between sections, where the damper can ice up.
            Through-the-door ice and water adds an auger motor and a water line in the door.
          </StyleCard>
          <StyleCard title="French door">
            The most features, the most parts. French door refrigerator repair can involve a door or ceiling ice maker, the hinged flap on
            the center seal, several fans and sensors, and a control board. They&apos;re common in newer West Temple homes off West Adams Ave.
          </StyleCard>
        </div>
        <p className="mt-6 text-[16.5px] text-ink-body">
          Built-in and high-end brands such as Sub-Zero or Thermador use their own parts, so call and ask before booking.
        </p>
      </Section>

      <Section labelledBy="brand-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="brand-heading" eyebrow="Brands" title="Does the brand" accent="change the repair?" />
          <div className="prose-copy">
            <p>
              Somewhat. Samsung fridges lean on sensors and control boards, and{' '}
              <Link href="/brands/samsung-appliance-repair-temple-tx/">Samsung&apos;s display codes</Link> often point a technician to the right
              section. LG pairs inverter compressors with its own set of{' '}
              <Link href="/brands/lg-appliance-repair-temple-tx/">LG fridge error codes worth writing down</Link>.{' '}
              <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool refrigerators</Link> tend to use conventional defrost systems
              with easy-to-find parts. GE fridges run from basic top freezers to Profile models, and{' '}
              <Link href="/brands/ge-appliance-repair-temple-tx/">the letters in a GE model number</Link> tell you which line you have. For other
              brands, give the model when you call.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="visit-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="visit-heading"
            eyebrow="The visit"
            title="What happens during refrigerator repair"
            accent="in Temple, TX?"
            intro="A refrigerator repair service visit in Temple follows a set order."
          />
          <ol className="grid gap-3">
            {[
              <>
                When you call {site.brandName}, give the brand, the model number (on a label inside the fresh-food section) and what
                you&apos;ve noticed, and ask for a visit window that suits you.
              </>,
              <>The technician reads both sections with a thermometer, not the display. Fresh food should sit at 37 to 40°F, the freezer at 0°F.</>,
              <>The evaporator fan behind the freezer panel and the condenser fan at the bottom back get checked.</>,
              <>The frost pattern on the evaporator coil shows whether defrost works.</>,
              <>If the whole fridge runs warm, the condenser coils, start relay, overload and compressor draw are tested.</>,
              <>Ask for the diagnosis and the price before any part is replaced. After the repair, temperatures get checked again.</>,
            ].map((step, i) => (
              <li key={i} className="flex gap-4 rounded-2xl border border-sand bg-canvas p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[15px] font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-[16.5px] leading-relaxed text-ink-body">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section labelledBy="cost-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cost-heading" eyebrow="Cost" title="How much is" accent="refrigerator repair?" />
          <div className="prose-copy">
            <p>
              Mostly it depends on which part failed. A start relay, a defrost thermostat or a damper is a small part and a short job. An
              evaporator fan or defrost heater takes longer, since the freezer has to be emptied and its back panel removed. Electronic boards
              cost more as parts. At the far end, a compressor or refrigerant leak means brazing, pulling a vacuum and recharging, a much
              bigger job.
            </p>
            <p>Installation matters too: a built-in or boxed-in fridge adds labor, and discontinued models can wait on shipped parts.</p>
            <p>
              No honest figure is possible before the cause is known, so none appear here. Call{' '}
              <PhoneLink location="fridge_cost" className={a} />, ask what the visit costs, and have the repair price confirmed before work
              starts.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="replace-heading">
        <SectionHeading
          id="replace-heading"
          eyebrow="Repair or replace"
          title="Fridge repair or replace:"
          accent="where's the line?"
          intro="Standard refrigerators last roughly 10 to 15 years, and age gives a quick first answer. Under about seven years, nearly any repair short of the sealed system is worth doing. Between seven and twelve, it depends on the part. Past twelve, stick to the inexpensive fixes."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-sand bg-canvas p-6">
            <h3 className="font-display text-lg font-bold text-ink">Usually worth fixing at any age</h3>
            <p className="mt-2 text-[16px] leading-relaxed text-ink-body">
              Door gaskets, a start relay, a defrost heater or thermostat, a fan motor, a clogged drain or a water inlet valve.
            </p>
          </div>
          <div className="rounded-2xl border border-sand bg-canvas p-6">
            <h3 className="font-display text-lg font-bold text-ink">Often not worth it on an older fridge</h3>
            <p className="mt-2 text-[16px] leading-relaxed text-ink-body">
              A refrigerant leak inside the foam walls, a failed board on a discontinued model, a cracked inner liner or a second sealed system
              repair.
            </p>
          </div>
        </div>
        <div className="mt-6 max-w-3xl space-y-4 text-[17px] leading-relaxed text-ink-body">
          <p>Plain opinion from the bench: past twelve years, a sealed system repair rarely pays off.</p>
          <p>
            Garage fridges are their own case: most are built for indoor temperatures, so if one fails every summer in a Temple garage, the
            location is the real problem.
          </p>
        </div>
      </Section>

      <Section labelledBy="where-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="where-heading" eyebrow="Service area" title="Where in Temple" accent="do technicians come out?" />
          <div className="prose-copy">
            <p>
              Refrigerator calls come from all three Temple ZIP codes, 76501, 76502 and 76504: older kitchens Downtown, ranch homes in Western
              Hills and Midway, rentals near the Baylor Scott &amp; White area and Temple College, and homes along the I-35 corridor. Renting?
              Check with your landlord about who arranges and pays for the repair before you call. Fridge repair in Temple, TX doesn&apos;t stop
              at the city limits either; <Link href={routes.areas}>Belton, Killeen, Salado and the other nearby towns</Link> are covered too.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Refrigerator repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="fridge_final"
        title="Ready to have the fridge"
        accent="looked at?"
        cardHeadingLevel="p"
        cardTitle="Book a fridge repair"
        appliance="refrigerator"
        text={
          <>
            For refrigerator repair in Temple, TX, jot down the model number and what you&apos;ve noticed, then call{' '}
            <PhoneLink location="fridge_final_text" className="font-semibold text-white underline decoration-white/40 underline-offset-4" /> or{' '}
            <Link href={routes.request} className="font-semibold text-white underline decoration-white/40 underline-offset-4">
              book a refrigerator repair visit
            </Link>
            . If the fridge is warm with a full load of food inside, start with{' '}
            <Link href={routes.cityPage} className="font-semibold text-white underline decoration-white/40 underline-offset-4">
              what to do while the food is still cold
            </Link>
            .
          </>
        }
      />
    </>
  );
}

function StyleCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-sand bg-canvas p-6">
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-[16px] leading-relaxed text-ink-body">{children}</p>
    </div>
  );
}

import Link from 'next/link';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { brands, brandHref, otherBrands } from '@/content/brands';
import { cityFaqs } from '@/content/faqs';
import { serviceByKey, serviceHref, services } from '@/content/services';
import type { ApplianceKey } from '@/content/types';
import { MapEmbed } from '@/components/AreaList';
import { BrandChips } from '@/components/BrandChips';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { ServicesGrid } from '@/components/ServicesGrid';
import { ServicesTable } from '@/components/ServicesTable';
import { TrustBadges } from '@/components/TrustBadges';
import { pageMetadata } from '@/lib/seo';

const path = routes.cityPage;

export const metadata = pageMetadata({
  title: `Appliance Repair Temple TX | Fridge Warm? Washer Stuck?`,
  description: `Fridge warm, washer stuck or oven not heating in Temple, TX? Repair for Whirlpool, GE, Samsung, LG and more in 76501, 76502 and 76504. Call (254) 615-2088.`,
  path,
});

const localNeeds: { title: string; text: string; key: ApplianceKey; link: string }[] = [
  {
    title: 'Refrigerators and garage freezers working through the summer',
    text: 'Temple summers are long and hot. A fridge in a warm kitchen or a freezer in the garage runs harder, so a weak start relay, dusty coils or a tired fan motor tends to give out in July and August. Call when it feels warm and never stops running, not after the food spoils.',
    key: 'freezer',
    link: 'freezer repair in Temple',
  },
  {
    title: 'Hard water buildup in dishwashers, washers and ice makers',
    text: 'Many Central Texas homes have hard water. Minerals coat dishwasher spray arms, clog washer inlet screens and slow the water feeding an ice maker. It looks like a bad part: cloudy dishes, slow fills, no ice. Sometimes cleaning fixes it. Sometimes the valve has to be replaced.',
    key: 'dishwasher',
    link: 'dishwasher repair in Temple',
  },
  {
    title: 'Dryer vents in older Temple homes',
    text: 'Older houses around the Historic District, Midway and Western Hills often have long vent runs or tight laundry closets. Lint builds up, the dryer runs hot, and the thermal fuse or element fails. Ask the technician to check airflow on any dryer call, because a new part behind a clogged vent fails again.',
    key: 'dryer',
    link: 'dryer repair in Temple',
  },
  {
    title: 'Newer appliances in West Temple subdivisions',
    text: 'Newer homes along West Adams Avenue and Highway 317 often have Samsung or LG French door refrigerators, front-load washers and smart ranges that report faults as error codes. Write the code down before you call, and check whether the manufacturer’s warranty still applies.',
    key: 'washer',
    link: 'washer repair in Temple',
  },
  {
    title: 'Ovens and ranges that run hot, cold or not at all',
    text: 'Bake elements burn out, gas igniters weaken and temperature sensors drift. You notice when dinner takes twice as long. A good technician tests the element, igniter and sensor before replacing anything.',
    key: 'oven',
    link: 'oven and stove repair in Temple',
  },
  {
    title: 'Rental homes and move-ins',
    text: 'Appliances that sat empty between tenants often come back with stuck pumps, dried-out seals or a fridge that will not restart. Tenants should tell the landlord first. Landlords and property managers near Temple College and the medical center can call the line directly.',
    key: 'refrigerator',
    link: 'refrigerator repair in Temple',
  },
];

const brandNotes: Record<string, string> = {
  whirlpool: 'Cabrio top-loaders and builder-grade sets in rentals. Washer codes like F9 E1 and dryers that quit behind a clogged vent.',
  ge: 'Ranges and dishwashers that came with the house. Oven F codes, weak gas igniters and warm fresh-food sections.',
  samsung: 'French door fridges and laundry pairs in West Temple. Frozen ice makers and washer codes like 5C and dC.',
  lg: 'Front-load pairs and French door fridges. OE drain codes, D90 vent warnings and compressor coverage questions.',
  frigidaire: 'Garage chest and upright freezers that struggle in August, plus F10 range codes and worn dryer glides.',
  maytag: 'Bravos and Centennial washers that have run for years. Ld and LF codes and dryers with no heat.',
  kitchenaid: 'Third-rack dishwashers and counter-depth fridges in remodeled kitchens. Hard water film and warm fresh-food sides.',
  bosch: 'Quiet dishwashers that stop with E15 or E24 when a leak or a clog shows up.',
  kenmore: 'Older 70 and 80 Series laundry and Elite fridges. The model prefix shows whether Whirlpool, LG or Frigidaire built it.',
  electrolux: 'Stacked front-load pairs and counter-depth fridges that share many parts with Frigidaire.',
  amana: 'Value sets in rentals and duplexes. Couplers, lid switches and top-freezer defrost problems.',
  'speed-queen': 'TC5 and TR washers bought to last. Pumps, belts, lid locks and tub bearings.',
};

const expectSteps = [
  { title: 'Call the line', text: 'Choose the appliance, enter your ZIP code, then give the brand, model number and problem. Any code on the display helps.' },
  { title: 'Talk to a Temple technician', text: 'Your call reaches an appliance repair provider serving your part of Temple. Ask about availability, pricing and licensing.' },
  { title: 'Diagnosis in your home', text: 'A good technician tests the likely parts, explains what failed and what the repair involves, and waits for your OK.' },
  { title: 'Repair and a test run', text: 'Once you approve, the repair is made and the appliance should be run to confirm it works. Model-specific parts may need to be ordered.' },
];

const weather = [
  {
    title: 'Long, hot summers',
    text: 'Triple-digit days are normal here. Temple recorded 74 days at 100°F or above in 2011, its hottest summer on record. Heat makes refrigerators, freezers and especially garage units run almost nonstop, and dusty condenser coils or a weak fan motor finally fail. Clean coils before June and give units room to breathe.',
  },
  {
    title: 'Storms and power blips',
    text: 'Spring storms bring outages and flickers. An appliance that stops right after the power blinks may only need its breaker or GFCI outlet reset, or a minute unplugged. If it still will not run, a control board or power supply may have taken the hit.',
  },
  {
    title: 'Hard freezes',
    text: 'Freezes are rare but real, as the February 2021 winter storm showed. Water lines to ice makers and washer hoses in unheated garages can freeze and split. After a hard freeze, check behind the washer and refrigerator for drips before running them.',
  },
  {
    title: 'Dust, pollen and pet hair',
    text: 'Dry, windy days and shedding pets load condenser coils, dryer lint traps and range hood filters. Clogged coils make a refrigerator run hot and long; a packed lint trap makes a dryer overheat. A vacuum and a few minutes every few months prevent a lot of repairs.',
  },
];


const lifespans = [
  { name: 'Refrigerator', years: '10 to 15 years', repair: 'Fans, relays, defrost parts, valves', closer: 'Compressor or sealed system on an older unit' },
  { name: 'Freezer', years: '10 to 20 years', repair: 'Relays, thermostats, seals, fans', closer: 'Compressor on a small or older chest freezer' },
  { name: 'Washer', years: '10 to 13 years', repair: 'Pumps, lid locks, belts, suspension', closer: 'Transmission or tub bearings' },
  { name: 'Dryer', years: '10 to 13 years', repair: 'Elements, igniters, belts, rollers', closer: 'Drum, motor and board all worn at once' },
  { name: 'Dishwasher', years: '9 to 12 years', repair: 'Pumps, inlet valves, latches, seals', closer: 'Rusted tub or racks plus a failed board' },
  { name: 'Range or oven', years: '13 to 15 years', repair: 'Elements, igniters, sensors, switches', closer: 'Cracked glass top or discontinued board' },
];

export default function CityPage() {
  return (
    <>

      <PageHero crumbs={[{ name: `Appliance Repair ${site.city}`, path }]} title={`Appliance Repair in ${site.city}, ${site.state}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Refrigerator warm? Washer won&apos;t drain? Appliance Repair Temple is Temple&apos;s line for appliance repair. One call
          puts you in touch with a technician who works on Whirlpool, GE, Samsung, LG, Frigidaire and Maytag refrigerators,
          freezers, washers, dryers, dishwashers and ovens in 76501, 76502 and 76504, from the Historic District and Western
          Hills to the newer streets off West Adams Avenue.
        </p>
        <div className="mt-8">
          <CtaRow location="city_hero" dark />
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <TrustBadges dark />
        </div>
      </PageHero>

      <Section labelledBy="intro-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading id="intro-heading" eyebrow="Appliance service in Temple" title="A broken appliance," accent="handled locally." />
          <div className="prose-copy">
            <p>
              Temple started as a railroad town and grew into a medical one, and its housing shows it: older bungalows near
              downtown and the Historic District, ranch homes around Western Hills and Midway, rentals and duplexes near Temple
              College and the Baylor Scott &amp; White campus, and new subdivisions spreading west toward Lake Belton. Each brings
              its own appliance problems, from tired garage freezers to error codes on a brand-new washer.
            </p>
            <p>
              Most appliance breakdowns come down to one part: a fan motor, a drain pump, a heating element, an igniter, a switch
              or a water valve. A good technician tests the likely suspects with a meter, shows you what failed, and explains the
              repair before any work starts. Ask for that, and ask plainly whether the appliance is worth fixing at all.
            </p>
            <p>
              Searching for appliance repair near me in Temple, TX? This page is the Temple hub: refrigerator repair, freezer
              repair, washer and dryer repair, dishwasher repair, oven, stove and range repair, and microwave repair, gas and
              electric, with a guide for each major brand found in Temple homes.
            </p>
            <p>
              Appliance Repair Temple does not do repairs itself. The providers are independent businesses, so ask about pricing
              and availability on the call, and confirm the provider carries the license and insurance the work requires.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="help-heading">
        <SectionHeading
          id="help-heading"
          eyebrow="Appliance types"
          title="Appliance repair"
          accent="for every room."
          intro="Kitchen and laundry appliances, electric and gas, built-in and freestanding. Each page explains the most common symptoms and what the repair involves."
        />
        <ServicesGrid keys={services.map((s) => s.key)} showOther />
      </Section>

      <Section labelledBy="brands-heading">
        <SectionHeading
          id="brands-heading"
          eyebrow="Brands in Temple homes"
          title="Brand repair guides"
          accent="for Temple."
          intro="What each brand looks like in Temple kitchens and laundry rooms, and the problems it brings. Each guide covers model number formats, error codes and parts."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands
            .filter((b) => b.hasPage)
            .map((b) => (
              <li key={b.key}>
                <Link href={brandHref(b)} className="card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">{b.name} repair in {site.city}</span>
                  <span className="mt-2 flex-1 text-[15px] text-ink-body">{brandNotes[b.key]}</span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink">
                    {b.name} guide
                    <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
        </ul>
        {otherBrands.length ? (
          <div className="mt-8">
            <BrandChips names={otherBrands} />
          </div>
        ) : null}
        <p className="mt-8 max-w-3xl text-sm text-ink-muted">
          Brand names are trademarks of their owners; Appliance Repair Temple is not affiliated with or authorized by any
          appliance manufacturer.{' '}
          <Link href={routes.brands} className="font-semibold text-ink underline decoration-flame underline-offset-4">
            All appliance brands repaired in {site.city}
          </Link>
        </p>
      </Section>

      <Section tone="ink" labelledBy="needs-heading">
        <SectionHeading
          id="needs-heading"
          eyebrow="Common repair needs"
          title="What breaks most often"
          accent="in Temple homes."
          intro="Patterns common across Temple homes, and what they usually mean for your appliance."
          dark
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {localNeeds.map((n) => (
            <li key={n.title} className="card-dark flex flex-col p-7">
              <h3 className="font-display text-[21px] font-bold tracking-[-0.025em] text-white">{n.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/65">{n.text}</p>
              <Link href={serviceHref(n.key)} className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-flame-glow hover:underline">
                {n.link.charAt(0).toUpperCase() + n.link.slice(1)}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" id="emergency" labelledBy="emergency-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            id="emergency-heading"
            eyebrow="Emergency appliance repair in Temple"
            title="When it cannot"
            accent="wait until next week."
            className="!mb-0"
          />
          <div>
            <div className="prose-copy">
              <p>
                A refrigerator warming up with a week of groceries inside, a washer leaking toward the hallway, a dryer that smells
                hot: those are emergencies. Emergency help in Temple may be available from local providers. Say it is urgent when you
                call, and describe what the appliance is doing.
              </p>
              <p>Before you call, take the steps that stop the damage:</p>
              <ul>
                <li>Leak: close the water valve behind the appliance and put towels down.</li>
                <li>Burning smell, smoke or sparks: switch off the breaker for that appliance.</li>
                <li>Warm refrigerator or freezer: keep the doors closed. A closed fridge holds food safely for about four hours.</li>
                <li>Gas smell: leave the house and call your gas provider or 911 from outside first.</li>
              </ul>
            </div>
            <div className="mt-6">
              <CtaRow location="city_emergency" />
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="weather-heading">
        <SectionHeading
          id="weather-heading"
          eyebrow="Local conditions"
          title="How Temple weather"
          accent="affects your appliances."
          intro="Central Texas is hard on appliances in a few predictable ways."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {weather.map((w) => (
            <li key={w.title} className="card p-7">
              <h3 className="font-display text-[20px] font-bold tracking-[-0.02em] text-ink">{w.title}</h3>
              <p className="mt-2 text-[15px] text-ink-body">{w.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="expect-heading">
        <SectionHeading
          id="expect-heading"
          eyebrow="From call to repair"
          title="What to expect when"
          accent="you call for a repair."
          center
        />
        <HowItWorks steps={expectSteps} />
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="card p-7">
            <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">Before the visit</h3>
            <p className="mt-2 text-[15px] text-ink-body">
              Clear a path to the appliance, empty the washer or dishwasher if you can, and keep pets in another room. An adult
              needs to be home to let the technician in and approve the repair.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="glance-heading">
        <SectionHeading
          id="glance-heading"
          eyebrow="Services at a glance"
          title="Appliance repair services"
          accent="in Temple, TX."
          intro="Every appliance below is repaired in your home. Pick one for the full list of problems, causes and what to check first."
        />
        <ServicesTable place={site.city} />
      </Section>

      <Section labelledBy="ror-heading">
        <SectionHeading
          id="ror-heading"
          eyebrow="Repair or replace"
          title="Should you repair it"
          accent="or replace it?"
          intro="Age and the type of failure matter more than anything else. A newer appliance with one failed part is almost always worth fixing. An older one with a major failure deserves a closer look."
        />
        <div className="card overflow-hidden">
          <table className="w-full text-left">
            <caption className="sr-only">Typical appliance lifespans and when repair makes sense</caption>
            <thead className="border-b border-sand text-[12px] uppercase tracking-[0.14em] text-ink-muted">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold md:px-6">Appliance</th>
                <th scope="col" className="hidden px-5 py-4 font-semibold sm:table-cell">Typical life</th>
                <th scope="col" className="px-5 py-4 font-semibold">Usually worth repairing</th>
                <th scope="col" className="hidden px-5 py-4 font-semibold md:table-cell">Take a closer look</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70 text-[15px]">
              {lifespans.map((l) => (
                <tr key={l.name}>
                  <th scope="row" className="px-5 py-4 font-semibold text-ink md:px-6">{l.name}</th>
                  <td className="hidden px-5 py-4 text-ink-body sm:table-cell">{l.years}</td>
                  <td className="px-5 py-4 text-ink-body">{l.repair}</td>
                  <td className="hidden px-5 py-4 text-ink-body md:table-cell">{l.closer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-copy mt-8 max-w-3xl">
          <p>
            Treat these as a guide. Ask three questions: How old is it? Is the rest
            of it in good shape? Can you still get the part? Built-in refrigerators and wall ovens are usually worth repairing even
            when older, because replacing them means cabinet and installation work too.
          </p>
        </div>
      </Section>

      <Section tone="white" labelledBy="coverage-heading">
        <SectionHeading
          id="coverage-heading"
          eyebrow="Service area"
          title="Appliance repair across Temple"
          accent="and nearby."
          intro="Repairs happen at your home, anywhere in Temple and the towns around it."
        />
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <MapEmbed place={site.city} note="Repairs in every residential Temple ZIP: 76501, 76502 and 76504." />
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">All of Temple</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.templeZips.map((z) => (
                <li key={z} className="rounded-full bg-ink px-4 py-2 font-display font-semibold tracking-wide text-white">
                  {z}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[15px] text-ink-body">
              Central Temple and the Historic District, Midway, Western Hills, West Temple along West Adams Avenue and Highway
              317, and the south side of town. Homes are in 76501, 76502 and 76504; 76503 is the downtown post office box ZIP and
              76508 covers the Baylor Scott &amp; White medical campus.
            </p>
            <h3 className="mt-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Nearby towns</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.nearbyTowns.map((t) => {
                const a = areas.find((x) => x.name === t);
                const cls = 'inline-flex min-h-[40px] items-center rounded-full border border-sand bg-white px-4 text-[14.5px] font-medium text-ink';
                return (
                  <li key={t}>
                    {a ? (
                      <Link href={areaHref(a)} className={`${cls} transition hover:border-ink hover:bg-ink hover:text-white`}>
                        {t}
                      </Link>
                    ) : (
                      <span className={cls}>{t}</span>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-[15px] text-ink-body">
              Not sure if your address is covered?{' '}
              <PhoneLink location="city_coverage" label="Call" className="font-semibold text-ink underline decoration-flame underline-offset-4" /> with
              your address and ask whether a local provider serves it.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="choose-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            id="choose-heading"
            eyebrow="Choosing a provider"
            title="How to choose an appliance repair pro"
            accent="in Temple."
            className="!mb-0"
          />
          <div className="prose-copy">
            <p>
              Each provider is a separate business. A few questions on the call help you decide
              whether the provider is the right fit for your appliance and your home.
            </p>
            <ul>
              <li>Ask what happens on the first visit, whether there is a trip or diagnostic charge, and how long parts take to arrive.</li>
              <li>Ask for proof of insurance, and check the state&apos;s requirements for the work, such as gas line connections.</li>
              <li>Ask about any warranty on parts and labor before the repair starts, and get it in writing.</li>
              <li>For built-in, gas or high-end appliances, ask whether the technician regularly works on your brand and model.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id="faq-heading" eyebrow="Local FAQ" title="Appliance repair in Temple:" accent="your questions." />
            <div className="-mt-6 flex flex-col gap-3">
              <Link href={routes.faq} className="link-arrow">
                More appliance repair FAQs <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <PhoneLink location="city_faq" label="Call" className="link-arrow" />
            </div>
          </div>
          <FaqList faqs={cityFaqs} />
        </div>
      </Section>

      <FinalCta
        title="Need an appliance technician"
        accent="in Temple?"
        text="Whirlpool washer, Samsung fridge or GE oven, anywhere from 76501 to 76504: describe the problem and the line routes your call to a technician serving Temple."
        formId="city_final"
      />
    </>
  );
}

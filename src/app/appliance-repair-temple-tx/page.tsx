import Link from 'next/link';
import { canShow, claims, routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { brands, otherBrands } from '@/content/brands';
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
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PaymentNote } from '@/components/PaymentNote';
import { PhoneLink } from '@/components/PhoneLink';
import { ShareExperience } from '@/components/ShareExperience';
import { Section, SectionHeading } from '@/components/Section';
import { ServicesGrid } from '@/components/ServicesGrid';
import { ServicesTable } from '@/components/ServicesTable';
import { TrustBadges } from '@/components/TrustBadges';
import { pageMetadata } from '@/lib/seo';

const path = routes.cityPage;

export const metadata = pageMetadata({
  title: `Appliance Repair Temple, Texas | In-Home & Emergency`,
  description: `In-home and emergency appliance repair in Temple, Texas for fridges, washers, dryers, dishwashers, ovens and freezers. Every Temple ZIP code, Mon-Sat.`,
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
    text: 'Older houses around the Historic District, Midway and Western Hills often have long vent runs or tight laundry closets. Lint builds up, the dryer runs hot, and the thermal fuse or element fails. We check airflow on every dryer call, because a new part behind a clogged vent fails again.',
    key: 'dryer',
    link: 'dryer repair in Temple',
  },
  {
    title: 'Newer appliances in West Temple subdivisions',
    text: 'Newer homes along West Adams Avenue and Highway 317 often have French door refrigerators, front-load washers and smart ranges that report faults as error codes. Write the code down before you call, and check whether the manufacturer’s warranty still applies.',
    key: 'washer',
    link: 'washer repair in Temple',
  },
  {
    title: 'Ovens and ranges that run hot, cold or not at all',
    text: 'Bake elements burn out, gas igniters weaken and temperature sensors drift. You notice when dinner takes twice as long. We test the element, igniter and sensor before replacing anything.',
    key: 'oven',
    link: 'oven and stove repair in Temple',
  },
  {
    title: 'Rental homes and move-ins',
    text: 'Appliances that sat empty between tenants often come back with stuck pumps, dried-out seals or a fridge that will not restart. Tenants should tell the landlord first. Landlords and property managers can book directly.',
    key: 'refrigerator',
    link: 'refrigerator repair in Temple',
  },
];

const expectSteps = [
  { title: 'Book by phone', text: 'Call with the appliance, brand, model number and the problem. Any error code on the display helps.' },
  { title: 'We confirm a visit window', text: `We call to confirm the details and set a time. We are open ${site.hours.value.long}.` },
  { title: 'Diagnosis in your home', text: 'The technician tests the likely parts, explains what failed and what the repair involves, and waits for your OK.' },
  { title: 'Repair and a test run', text: 'Once you approve, the repair is made and the appliance is run to confirm it works. Model-specific parts may need to be ordered.' },
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
    text: 'Dry, windy days and shedding pets load condenser coils, dryer lint traps and range hood filters. Clogged coils make a refrigerator run hot and long; a packed lint trap makes a dryer overheat. A vacuum and a few minutes every few months prevent a lot of calls.',
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

      <PageHero crumbs={[{ name: `Appliance Repair ${site.city}`, path }]} title={`In-Home Appliance Repair in ${site.city}, ${site.state}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Appliance Repair Temple sends a technician to homes across Temple, Texas to fix refrigerators, freezers, washers, dryers,
          dishwashers, ovens and ranges. We cover every Temple ZIP code, from the Historic District and Western Hills to the newer
          neighborhoods along West Adams Avenue, {site.hours.value.long}. Same-day appointments and emergency appliance repair are
          available, {claims.availabilityQualifier}.
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
              When a refrigerator stops cooling or a washer will not drain, you want someone nearby who can come out, find the
              problem and fix it. Our technicians work in Temple homes, so the common failures are familiar ones.
            </p>
            <p>
              Most appliance breakdowns come down to one part: a fan motor, a drain pump, a heating element, an igniter, a switch
              or a water valve. The technician tests the likely suspects with a meter, shows you what failed, and explains the
              repair before any work starts. If the appliance is not worth fixing, we will say so.
            </p>
            <p>
              If you have been searching for appliance repair near me in Temple, TX, this is a local team, not a national call
              center. We handle refrigerator repair, freezer repair, washer and dryer repair, dishwasher repair, oven, stove and range
              repair, and microwave repair, for gas and electric appliances and the major brands found in Temple homes.
            </p>
            <p>
              Appliance Repair Temple is licensed and insured, with 4+ years of experience and 100+ repairs completed. Customers
              have given us a 4.9 average rating.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="help-heading">
        <SectionHeading
          id="help-heading"
          eyebrow="Appliance types"
          title="Appliances we repair"
          accent="in Temple."
          intro="Kitchen and laundry appliances, electric and gas, built-in and freestanding. Each page explains the symptoms we see most and what the repair involves."
        />
        <ServicesGrid keys={services.map((s) => s.key)} showOther />
      </Section>

      <Section tone="ink" labelledBy="needs-heading">
        <SectionHeading
          id="needs-heading"
          eyebrow="Common repair needs"
          title="What breaks most often"
          accent="in Temple homes."
          intro="Patterns we see across Temple, and what they usually mean for your appliance."
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
                hot: those are emergencies, and we treat them that way. During business hours, {site.hours.value.long}, urgent calls
                from Temple homes get priority scheduling. Same-day emergency service is available, {claims.availabilityQualifier}.
              </p>
              <p>Before you call, take the steps that stop the damage:</p>
              <ul>
                <li>Leak: close the water valve behind the appliance and put towels down.</li>
                <li>Burning smell, smoke or sparks: switch off the breaker for that appliance.</li>
                <li>Warm refrigerator or freezer: keep the doors closed. A closed fridge holds food safely for about four hours.</li>
                <li>Gas smell: leave the house and call your gas provider or 911 from outside first.</li>
              </ul>
              <p>Then call and tell us it is urgent. Ask about emergency visit details on the call.</p>
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
          intro="Central Texas is hard on appliances in a few predictable ways. Knowing them helps you prevent a repair, or describe the problem when you call."
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
          eyebrow="Booking service"
          title="What to expect when"
          accent="you book a repair."
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
        <div className="mx-auto mt-4 max-w-4xl">
          <PaymentNote />
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

      {canShow(claims.brandsServiced) ? (
        <Section tone="white" labelledBy="brands-heading">
          <SectionHeading
            id="brands-heading"
            eyebrow="Brands"
            title="Appliance brands"
            accent="we support."
            intro="We service the major household brands found in Temple kitchens and laundry rooms. Give us the model number when you book so the technician can check parts ahead of time."
          />
          <BrandChips names={[...brands.map((b) => b.name), ...otherBrands]} />
          <p className="mt-8 max-w-3xl text-sm text-ink-muted">
            Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by any appliance
            manufacturer.{' '}
            <Link href={routes.brands} className="font-semibold text-ink underline decoration-flame underline-offset-4">
              Appliance brands we service in {site.city}
            </Link>
          </p>
        </Section>
      ) : null}

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
            Lifespans vary with brand, use and care, so treat these as a guide. Ask three questions: How old is it? Is the rest
            of it in good shape? Can you still get the part? Built-in refrigerators and wall ovens are usually worth repairing even
            when older, because replacing them means cabinet and installation work too.
          </p>
        </div>
      </Section>

      <Section tone="white" labelledBy="coverage-heading">
        <SectionHeading
          id="coverage-heading"
          eyebrow="Service area"
          title="Where we work in Temple"
          accent="and nearby."
          intro="Repairs happen in your home; the technician comes to you anywhere in Temple and the towns around it."
        />
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <MapEmbed place={site.city} note="All of Temple is in range: 76501, 76502 and 76504." />
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
              Not sure if you are in range?{' '}
              <PhoneLink location="city_coverage" label="Call" className="font-semibold text-ink underline decoration-flame underline-offset-4" /> with
              your address and we will confirm.
            </p>
          </div>
        </div>
      </Section>

      <ShareExperience place={site.city} />

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
        text="Speak with our team about your appliance issue and set a visit window on the same call. Urgent calls get priority during business hours."
        formId="city_final"
      />
    </>
  );
}

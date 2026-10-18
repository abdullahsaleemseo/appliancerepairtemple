import Link from 'next/link';
import { routes, site } from '@/config/site';
import { brands, otherBrands } from '@/content/brands';
import { homeFaqs } from '@/content/faqs';
import { primaryServiceKeys, serviceHref, services } from '@/content/services';
import type { ApplianceKey, IconName } from '@/content/types';
import { AreaBlock } from '@/components/AreaList';
import { BrandChips, BrandMarquee } from '@/components/BrandChips';
import { CallButton, CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PhoneLink } from '@/components/PhoneLink';
import { ProblemPicker } from '@/components/ProblemPicker';
import { FindUsOnline } from '@/components/FindUsOnline';
import { Section, SectionHeading } from '@/components/Section';
import { ServicesGrid } from '@/components/ServicesGrid';
import { TrustBadges } from '@/components/TrustBadges';
import { websiteSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair Temple TX | Connect With Local Pros`,
  description: `Appliance repair in Temple, TX for refrigerators, washers, dryers, dishwashers, ovens and freezers. Call to get connected with an independent local pro.`,
  path: '/',
});

const problems: { title: string; text: string; key: ApplianceKey }[] = [
  {
    title: 'Refrigerator not cooling',
    text: 'Usually a stopped fan, a frosted evaporator coil or a start relay that is failing. Keep the doors shut while you wait. A closed fridge holds a safe temperature for about four hours.',
    key: 'refrigerator',
  },
  {
    title: 'Washer not draining',
    text: 'A clogged pump filter, a kinked drain hose or a drain pump that quit. Turn the washer off and unplug it before you open the filter door, and have towels ready.',
    key: 'washer',
  },
  {
    title: 'Dryer not heating',
    text: 'On electric dryers, often a heating element or thermal fuse. On gas dryers, an igniter or gas valve coil. A clogged vent is a common root cause, so a good technician checks airflow too.',
    key: 'dryer',
  },
  {
    title: 'Dishwasher leaving water or dirty dishes',
    text: 'A packed filter, clogged spray arms, a bad inlet valve or a drain pump problem. Mineral buildup from hard water can make all of these worse over time.',
    key: 'dishwasher',
  },
  {
    title: 'Oven not heating or baking unevenly',
    text: 'A burned-out bake element on electric models, a weak igniter on gas models, or a temperature sensor that has drifted away from the setting.',
    key: 'oven',
  },
  {
    title: 'Freezer frosting up or running warm',
    text: 'A defrost part, a worn door or lid seal, or dirty condenser coils. Garage freezers feel this most in a Central Texas summer.',
    key: 'freezer',
  },
  {
    title: 'Ice maker stopped making ice',
    text: 'A frozen fill tube, a failed water inlet valve, a clogged filter or a worn ice maker module. Check that the shutoff arm is down first.',
    key: 'refrigerator',
  },
  {
    title: 'Error code on the display',
    text: 'A code points to a system, such as draining or the door lock, not always to one part. Write it down before you call. It helps the technician know what to look at first.',
    key: 'washer',
  },
];

const steps = [
  { title: 'Call the number on this site', text: 'Describe the appliance, the brand and what it is doing. The call is free, and having the model number label handy helps.' },
  { title: 'Get connected with a local pro', text: 'Your call is connected with an independent appliance repair provider serving your area. Ask about availability, pricing and licensing.' },
  { title: 'Diagnosis at your home', text: 'A good technician checks the appliance, tests the likely parts, and explains what failed and what the repair involves. Ask for that.' },
  { title: 'Repair and test', text: 'Only approve the work once you understand it. Before the technician leaves, ask them to run the appliance so you can see that it works.' },
];

const emergencies = [
  { title: 'Water on the floor', text: 'A washer, dishwasher or refrigerator leaking or overflowing. Water spreads under cabinets and flooring fast.' },
  { title: 'Food at risk', text: 'A refrigerator or freezer warming up while it is full. A closed refrigerator keeps food safe for about four hours.' },
  { title: 'Burning smell, smoke or sparks', text: 'From any appliance, especially a dryer, range or microwave. Switch it off at the breaker and do not use it again until it is checked.' },
  { title: 'A range or oven that will not turn off', text: 'A stuck burner, element or control. Switch off the breaker for the range and keep the area clear.' },
  { title: 'A washer full of water', text: 'Stopped mid-cycle with the door locked or the tub full. Unplug it, then drain it through the pump filter or call to get connected with a local pro.' },
  { title: 'No way to cook or wash for a family', text: 'A dead range, a broken washer in a busy household or a dishwasher out before a holiday. Say it is urgent when you call.' },
];

const emergencySteps = [
  'If you smell gas, leave the house and call your gas provider or 911 from outside first.',
  'For a leak, close the water supply valve behind the appliance and put towels down.',
  'For sparks, smoke or a burning smell, switch off the breaker for that appliance.',
  'Keep refrigerator and freezer doors closed to hold the cold in.',
  'Then call and say it is urgent.',
];

const maintenance = [
  { appliance: 'Refrigerator and freezer', habit: 'Vacuum the condenser coils and wipe the door gaskets', often: 'Every 6 to 12 months' },
  { appliance: 'Washer', habit: 'Clean the pump filter (front-loaders), wipe the door seal and run a cleaning cycle', often: 'Monthly' },
  { appliance: 'Dryer', habit: 'Clean the lint screen; clean the vent run and check the outside flap', often: 'Every load; vent at least once a year' },
  { appliance: 'Dishwasher', habit: 'Rinse the filter, clear the spray arms and use rinse aid in hard water', often: 'Monthly' },
  { appliance: 'Oven and range', habit: 'Wipe spills before they bake on; keep burner ports and igniters clean', often: 'As needed' },
  { appliance: 'Microwave', habit: 'Clean the interior and replace the grease filter on over-the-range models', often: 'Monthly; filter as the manual says' },
];

/** How the referral service works and what to check before hiring any provider. */
const lookFor: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'phone',
    title: 'How the free call works',
    text: `Call the number on this site and describe your appliance and the problem. ${site.brandName} connects your call with an independent appliance repair provider serving ${site.city} and ${site.county}. The call costs you nothing.`,
  },
  {
    icon: 'tool',
    title: 'Independent local providers',
    text: `${site.brandName} is a referral service, not a repair company. The providers you reach are independent businesses. They set their own availability, pricing and terms, so ask about each one directly.`,
  },
  {
    icon: 'shield',
    title: 'Ask about the license',
    text: 'Ask the pro what licensing they hold for the work, especially for gas appliances and anything wired into your home. Check what the State of Texas and your city require for that type of repair.',
  },
  {
    icon: 'check',
    title: 'Ask for proof of insurance',
    text: 'Ask for a certificate of liability insurance before work starts. Insurance protects your home if something goes wrong during the repair. Verifying the license and insurance is your job, so do it every time.',
  },
  {
    icon: 'tag',
    title: 'Ask how pricing works',
    text: 'Ask whether there is a trip or diagnostic charge, whether it applies to the repair, and how labor and parts are priced. Ask for the total in writing before you approve the work.',
  },
  {
    icon: 'calendar',
    title: 'Ask about a warranty on parts',
    text: 'Ask whether the replacement parts and the labor carry any warranty, how long it lasts and what it covers. Keep the invoice with the part names and the date of the repair.',
  },
];

const pickerItems = services.map((s) => ({
  key: s.key,
  name: s.name,
  icon: s.icon,
  href: serviceHref(s.key),
  symptoms: s.symptoms.slice(0, 3).map((x) => x.title),
}));

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />

      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[620px] w-[620px] rounded-full bg-flame/30 blur-[150px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-frost/15 blur-[140px]" />

        <div className="relative mx-auto grid max-w-site items-center gap-14 px-4 pb-20 pt-12 md:pt-16 lg:grid-cols-[1.12fr_1fr] lg:gap-16 lg:px-6 lg:pb-20 lg:pt-14">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pl-2 pr-4 text-[13px] font-medium text-white/80 backdrop-blur">
              <span className="flex h-6 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-mint-bright/15 px-2 text-[12px] font-semibold text-mint-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-mint-bright" />
                Free call
              </span>
              Local appliance repair pros across {site.city} &amp; {site.county}
            </p>
            <h1 className="h-display mt-6 text-[2.9rem] text-white sm:text-[4.2rem] lg:text-[4.4rem] xl:text-[4.75rem]">
              Appliance Repair in {site.city}, {site.stateAbbr}
            </h1>
            <p aria-hidden="true" className="accent mt-1 font-serif text-[2.7rem] leading-none text-flame-glow sm:text-[3.9rem] lg:whitespace-nowrap lg:text-[3.6rem] xl:text-[4rem]">
              without the guesswork.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl lg:text-lg xl:text-xl">
              {site.brandName} is a free referral service. One call connects you with an independent local appliance repair pro for
              refrigerators, washers, dryers, dishwashers, ovens and freezers in homes across Temple, TX and nearby Bell County towns.
              Describe the problem when you call. Emergency help may be available from local providers.
            </p>
            <div className="mt-8">
              <CtaRow location="hero" dark />
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <TrustBadges dark />
            </div>
          </div>
          <ProblemPicker items={pickerItems} />
        </div>
      </section>

      {/* Brand strip */}
      <section aria-label="Appliance brands local pros work on" className="border-b border-sand bg-canvas py-10">
        <div className="mx-auto max-w-site px-4 lg:px-6">
          <p className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Local pros work on the brands already in Temple kitchens
          </p>
          <BrandMarquee names={[...brands.map((b) => b.name), ...otherBrands]} />
        </div>
      </section>

      {/* Services */}
      <Section id="services" labelledBy="services-heading">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="services-heading"
            eyebrow="Appliance repair services"
            title="Appliance repair for"
            accent={`${site.city} homes.`}
            intro="Pick your appliance to see the problems homeowners run into most often, what usually causes them and when to stop using it until a technician takes a look."
            className="!mb-0"
          />
          <Link href={routes.cityPage} className="link-arrow shrink-0">
            Appliance repair in {site.city} <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12">
          <ServicesGrid keys={primaryServiceKeys} />
        </div>
        <p className="mt-6 text-ink-body">
          Local pros also handle{' '}
          <Link href={serviceHref('microwave')} className="font-semibold text-ink underline decoration-flame underline-offset-4">
            over-the-range and built-in microwaves
          </Link>
          , cooktops and wall ovens.
        </p>
      </Section>

      {/* Local service explained */}
      <Section tone="white" labelledBy="local-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="local-heading"
            eyebrow="Home appliance repair"
            title="Connect with local appliance repair"
            accent={`for ${site.city} homes.`}
            className="!mb-0"
          />
          <div className="prose-copy [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-[22px] [&_h3]:font-bold [&_h3]:tracking-[-0.02em] [&_h3]:text-ink">
            <p>
              {site.brandName} is a free service that helps homeowners in {site.city}, Texas reach independent local appliance repair
              providers by phone. If you have been searching for appliance repair near me, one call connects you with a provider who
              works in {site.city} and across {site.county}, so you do not have to work through a list of numbers yourself.
            </p>
            <h3>Kitchen appliance repair</h3>
            <p>
              Refrigerator repair is often the most urgent problem in a home, whether it is a fridge not cooling, a freezer frosting
              up or an ice maker that stopped. Local pros also handle dishwasher repair, oven and stove repair for gas and electric
              ranges, cooktops and wall ovens, and over-the-range and built-in microwave repair.
            </p>
            <h3>Laundry appliance repair</h3>
            <p>
              Washer repair and dryer repair cover top-load and front-load washers, electric and gas dryers, and the problems that
              stop laundry day: a washer that will not drain or spin, a dryer that runs without heat, loud noises, leaks and error
              codes.
            </p>
            <h3>What to expect from a service call</h3>
            <p>
              A good appliance technician tests the parts most likely to have failed, explains the problem in plain words and tells
              you what the repair involves before any work starts. Ask for that. Common parts can often be replaced on the first
              visit. If a part has to be ordered, or if a repair does not make sense for an older appliance, ask the technician to
              say so up front.
            </p>
          </div>
        </div>
      </Section>

      {/* Common problems */}
      <Section labelledBy="problems-heading">
        <SectionHeading
          id="problems-heading"
          eyebrow="Common problems"
          title="Common appliance problems"
          accent="in Temple homes."
          intro="These are the breakdowns homeowners run into most. Each answer covers the usual causes, so you know what you are dealing with before the technician arrives."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {problems.map((p) => (
            <li key={p.title}>
              <Link href={serviceHref(p.key)} className="card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift md:p-7">
                <h3 className="font-display text-[20px] font-bold tracking-[-0.02em] text-ink">{p.title}</h3>
                <p className="mt-2 flex-1 text-[15px] text-ink-body">{p.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-flame">
                  More on {p.key === 'oven' ? 'oven and stove' : p.key} repair
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Emergency */}
      <Section tone="white" id="emergency" labelledBy="emergency-heading">
        <SectionHeading
          id="emergency-heading"
          eyebrow="Emergency appliance repair"
          title="Urgent appliance problem?"
          accent="Stop the damage first."
          intro="Some breakdowns cannot wait for next week. Emergency help may be available from local providers. Take the steps below to protect your home, then say it is urgent when you call."
        />
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">What counts as an appliance emergency</h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {emergencies.map((e) => (
                <li key={e.title} className="card p-6">
                  <h4 className="font-display text-[18px] font-bold tracking-[-0.02em] text-ink">{e.title}</h4>
                  <p className="mt-1.5 text-[15px] text-ink-body">{e.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grain relative self-start overflow-hidden rounded-card bg-ink p-7 text-white md:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame/30 blur-[80px]" />
            <h3 className="relative font-display text-xl font-bold tracking-[-0.02em] text-white">What to do right now</h3>
            <ol className="relative mt-5 space-y-3">
              {emergencySteps.map((t, i) => (
                <li key={t} className="flex gap-3 text-[15px] text-white/75">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame text-[13px] font-semibold text-white">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ol>
            <p className="relative mt-6 text-[14px] text-white/55">Ask the provider about emergency availability when you are connected.</p>
            <div className="relative mt-6">
              <CallButton location="emergency" className="w-full" />
            </div>
          </div>
        </div>
      </Section>

      {/* How the service works and what to look for */}
      <Section tone="ink" labelledBy="lookfor-heading">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-flame/20 blur-[140px]" />
        <SectionHeading
          id="lookfor-heading"
          eyebrow={`How ${site.brandName} works`}
          title="What to look for in a"
          accent="local appliance repair pro."
          intro="One free call connects you with an independent provider. Before you hire anyone, ask the questions below and check the answers yourself."
          dark
        />
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lookFor.map((w) => (
            <li key={w.title} className="card-dark p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-flame/15 text-flame-glow">
                <Icon name={w.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-[21px] font-bold tracking-[-0.025em] text-white">{w.title}</h3>
              <p className="mt-2 text-[15px] text-white/60">{w.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-[15px] text-white/60">
          It is the homeowner&rsquo;s responsibility to verify that the provider holds the license and insurance required for the work
          being performed. {site.brandName} does not perform repairs and does not warrant or guarantee any work. If an answer to one
          of the questions above is unclear, ask again before the technician starts.
        </p>
      </Section>

      {/* How it works */}
      <Section labelledBy="how-heading">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="How the call and"
          accent="the repair visit work."
          intro="Four steps from the first call to an appliance that runs again."
          center
        />
        <HowItWorks steps={steps} />
        <div className="mx-auto mt-10 max-w-3xl rounded-xl2 border border-sand bg-white p-7 md:p-9">
          <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">Have this ready when you call</h3>
          <ul className="prose-copy">
            <li>The brand and model number. Look inside the door, under the lid, behind the kick plate or on the back.</li>
            <li>What the appliance is doing, and any error code on the display.</li>
            <li>When the problem started, and whether anything changed before it did.</li>
            <li>Clear access to the appliance when the technician arrives.</li>
          </ul>
        </div>
        <div className="mx-auto mt-6 max-w-3xl rounded-xl2 border border-sand bg-white p-7 md:p-9">
          <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">How long does an appliance repair take?</h3>
          <div className="prose-copy">
            <p>
              Many common repairs, such as a fan motor, a drain pump, a door switch, a heating element or an igniter, can be finished
              on the first visit. A few things change the timeline:
            </p>
            <ul>
              <li>Whether the part is common or specific to your model and has to be ordered.</li>
              <li>How easy the appliance is to reach, for example a built-in refrigerator or a stacked laundry pair.</li>
              <li>Whether more than one part has failed, which the diagnosis will show.</li>
            </ul>
            <p>Ask the technician which applies before any work starts, so you can plan around it.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallButton location="how_it_works" label="Call Now" className="text-[17px]" />
        </div>
      </Section>

      {/* Maintenance */}
      <Section tone="white" labelledBy="care-heading">
        <SectionHeading
          id="care-heading"
          eyebrow="Appliance care"
          title="Small habits that"
          accent="prevent repairs."
          intro="Many appliance breakdowns start with something simple: dusty coils, a clogged filter, a lint-packed vent. These habits keep appliances running longer between service calls."
        />
        <div className="overflow-hidden rounded-card border border-sand">
          <table className="w-full text-left text-[15px]">
            <caption className="sr-only">Appliance maintenance habits and how often to do them</caption>
            <thead className="bg-canvas text-[13px] uppercase tracking-[0.1em] text-ink-muted">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Appliance</th>
                <th scope="col" className="px-5 py-4 font-semibold">What to do</th>
                <th scope="col" className="hidden px-5 py-4 font-semibold sm:table-cell">How often</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand bg-white">
              {maintenance.map((m) => (
                <tr key={m.appliance}>
                  <th scope="row" className="px-5 py-4 align-top font-semibold text-ink">{m.appliance}</th>
                  <td className="px-5 py-4 align-top text-ink-body">
                    {m.habit}
                    <span className="mt-1 block text-[13px] text-ink-muted sm:hidden">{m.often}</span>
                  </td>
                  <td className="hidden px-5 py-4 align-top text-ink-body sm:table-cell">{m.often}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-ink-body">
          More detail in the{' '}
          <Link href={routes.blog} className="font-semibold text-ink underline decoration-flame underline-offset-4">
            appliance repair tips
          </Link>
          , including how often to clean a dryer vent and what to check when a refrigerator stops cooling.
        </p>
      </Section>

      {/* Brands */}
      <Section labelledBy="brands-heading">
        <SectionHeading
          id="brands-heading"
          eyebrow="Brands"
          title="Appliance brands"
          accent="local pros work on."
          intro="Local providers work on the major household brands found in Temple homes. Have the brand and model number ready when you call, and ask the pro whether they handle your brand and can get parts for it."
        />
        <BrandChips names={[...brands.map((b) => b.name), ...otherBrands]} />
        <p className="mt-8 max-w-3xl text-sm text-ink-muted">
          {site.brandName} is an independent referral service. It is not affiliated with or authorized by any appliance
          manufacturer, and the providers it connects you with are independent businesses.{' '}
          <Link href={routes.brands} className="font-semibold text-ink underline decoration-flame underline-offset-4">
            See all appliance brands
          </Link>
          .
        </p>
      </Section>

      {/* Service area */}
      <Section tone="white" labelledBy="area-heading">
        <SectionHeading
          id="area-heading"
          eyebrow="Service area"
          title="Temple and nearby"
          accent="service areas."
          intro={`Local appliance repair pros serve homes in ${site.city} and across ${site.county} and nearby ${site.region} towns. In ${site.city}, that covers ZIP codes ${site.templeZips.join(', ')}. Provider availability in towns farther out varies, so give your address when you call.`}
        />
        <AreaBlock />
      </Section>

      {/* The site's own profiles. Add keys here as more listings go live. */}
      <FindUsOnline keys={['linkedin', 'facebook', 'pinterest', 'instagram', 'x', 'youtube']} />

      {/* FAQ */}
      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions before" accent="you call." />
            <p className="-mt-6 text-ink-body">
              Still not sure? <PhoneLink location="home_faq" label="Call" className="font-semibold text-ink underline decoration-flame underline-offset-4" />{' '}
              to be connected with a local pro and describe your appliance issue.
            </p>
            <Link href={routes.faq} className="link-arrow mt-6">
              All frequently asked questions <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <FaqList faqs={homeFaqs} />
        </div>
      </Section>

      <FinalCta
        title="Appliance broken?"
        accent="Get connected."
        text="Call to be connected with an independent local appliance repair pro serving Temple and Bell County. Describe the problem when you call, and ask the pro about availability and pricing."
        formId="home_final"
      />
    </>
  );
}

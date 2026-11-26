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

/** Freezer repair page (source: content/freezer-v1.md, Nov 2026). Replaces the generic service template for this slug. */
const path = '/freezer-repair-temple-tx/';
const description =
  "Freezer repair in Temple, TX for chest and upright freezers that won't freeze, frost up or run nonstop. Learn the likely causes, then call (254) 615-2088.";

export const metadata = pageMetadata({
  title: 'Freezer Repair Temple TX | Chest & Upright Freezer Service',
  description,
  path,
});

const compare: [string, string, string][] = [
  ['Defrost type', 'Usually manual defrost', 'Often frost-free (automatic defrost)'],
  [
    'What usually fails',
    'Start relay or overload, thermostat, lid gasket, a refrigerant leak on older units',
    'Evaporator fan, defrost heater or thermostat, control board, door gasket',
  ],
  [
    'What to watch for',
    'Ice thicker than about a quarter inch, sweating along the lid, warm spots on the outer walls',
    'Frost on the shelves, a solid ice block at the back wall, a fan that stops',
  ],
];

const readIt: [string, string][] = [
  ['The sound.', 'Steady hum, silence, or a click every few minutes with no hum after it.'],
  ['The frost.', "Even frost on a chest freezer's walls, thick ice near the lid, frost on an upright's shelves, or a solid block on the back wall."],
  [
    'The outside of the cabinet.',
    "Chest freezers usually run condenser tubing inside the outer walls, so warm sides are expected. Sweating along the lid, or one spot that's hot to the touch, can mean a gasket or airflow problem.",
  ],
  ['The gasket.', "Close the lid or door on a dollar bill. If it slides out with no drag, that stretch isn't sealing."],
  ['The temperature.', 'An inexpensive appliance thermometer is the only reliable way to know. You want 0°F.'],
];

const defrost = [
  'Move the food into coolers or a second freezer, and unplug the unit.',
  'Open the drain plug at the bottom front, if it has one, with a pan or hose underneath.',
  'Prop the lid open and set pans of hot water inside.',
  'Once the ice loosens, lift sheets out by hand or with a plastic scraper.',
  "Dry the inside, plug it back in and wait until it's cold before loading food.",
];

const selfChecks: [string, string][] = [
  ['The condenser.', 'Where there are coils or a grille at the back or bottom, vacuum off the dust and lint.'],
  ['The seal.', 'Run the dollar-bill test all the way around.'],
  ['The load.', "A freezer just filled with warm food runs for hours, and that's normal."],
  ['The room.', 'A garage over 100°F keeps any freezer running longer.'],
];

const worth: [string, string][] = [
  [
    'Small, inexpensive chest freezer with a sealed system problem.',
    'Usually not. Finding the leak, brazing and recharging can cost close to a new unit. An opinion from someone who has hauled plenty of these out of hot garages: a small chest freezer with a sealed system failure is rarely worth saving.',
  ],
  ['Any freezer with a bad relay, thermostat or gasket.', 'Usually yes. Common parts.'],
  ['Large upright with a defrost or fan failure.', 'Often worth it. Uprights cost more to replace, and those are routine repairs.'],
  ['Older large freezer with a sealed system failure.', 'It depends on age, size and condition. Compare the price with a new one of the same size.'],
];

const faqs: Faq[] = [
  {
    q: 'Can a freezer lie on its side during a move?',
    a: 'Upright is best. If it has to lie down, many manufacturers suggest standing it upright for at least as long as it was on its side, or a full day, before plugging it in. That lets the compressor oil settle back. Check your manual, since advice varies by model.',
  },
  {
    q: 'How long after plugging in should a freezer reach 0°F?',
    a: "Plan on several hours, and up to a day for a large or empty unit. Keep the lid or door closed and load food only once it's cold. If it still isn't near 0°F after a full day, something is wrong. Trust the thermometer, not the dial.",
  },
  {
    q: 'Can I keep a regular freezer in an unheated garage in winter?',
    a: 'Sometimes, but check its rating first. Some freezers stop running when the room gets too cold, because the thermostat thinks the job is done. Garage-ready models are built for those swings. If yours is rated for indoor use, keep a thermometer inside and check it during a cold snap.',
  },
  {
    q: 'Should I unplug a chest freezer to defrost it, and how long does it take?',
    a: 'Yes, always unplug it first. With the lid open and pans of hot water inside, a heavy layer of ice often loosens in a few hours, and thin frost goes faster. Start on a cool morning so your coolers hold the food longer.',
  },
  {
    q: 'Why does my freezer click, go quiet, then click again?',
    a: "Usually the compressor can't get going, and its overload cuts the power to protect it, then lets it try again. A worn start relay is a common cause; a failing compressor is the less welcome one. A technician can test which, so call before the food softens.",
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';

export default function FreezerRepairPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: `Freezer repair in ${site.city}, ${site.stateAbbr}`, serviceType: 'Freezer repair', description, path })} />

      <PageHero crumbs={[{ name: 'Freezer Repair', path }]} title={`Freezer Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          The freezer most likely to fail is the one nobody checks. It sits in the garage or the shop, holds the deer from November and
          the beef from spring, and only gets opened when someone needs a roast. Freezer repair in Temple, TX is mostly about chest and
          upright freezers like that one, working in heat they weren&apos;t always built for. If yours is running warm, frosting over or
          never shutting off, call <PhoneLink location="freezer_intro" className={white} /> and say whether it&apos;s a chest or an upright
          and where it lives.
        </p>
        <div className="mt-8">
          <CtaRow location="freezer_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="garage-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="garage-heading" eyebrow="Garage freezers" title="Why does the garage freezer quit in July," accent="and sometimes in January?" />
          <div className="prose-copy">
            <p>
              Every freezer is designed for a range of room temperatures, and many standard models expect a climate-controlled house. A
              Temple garage in July can sit well above 100°F in the afternoon, which pushes an indoor-rated freezer past what it was built
              for. Parts like the start relay and condenser fan wear out sooner. The rating sticker inside the lid or door, or the manual,
              shows the range for your model. Freezers sold as &ldquo;garage ready&rdquo; handle wider swings.
            </p>
            <p>
              Airflow makes that heat better or worse. A chest freezer shoved against the back wall, boxed in by a toolbox and a stack of
              paint cans, has nowhere to dump heat. Give it a few inches of space.
            </p>
            <p>
              Winter has its own catch. In a hard freeze, some freezers in an unheated garage stop running because the thermostat senses the
              cold room and decides there&apos;s nothing to do. A freezer that acts up only in a cold snap is telling you about its rating,
              not a broken part.
            </p>
            <p>
              Out past the I-35 corridor, a freezer in an uninsulated barn or metal shop gets both extremes. If a garage freezer is not
              working in summer, look at where it sits before assuming the worst.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="styles-heading">
        <SectionHeading id="styles-heading" eyebrow="Chest or upright" title="Chest or upright:" accent="what's really sitting in your garage?" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <caption className="sr-only">Chest and upright freezers compared: defrost type, what usually fails and what to watch for</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <td className="px-4 py-3" />
                <th scope="col" className="px-4 py-3 font-semibold">Chest freezer</th>
                <th scope="col" className="px-4 py-3 font-semibold">Upright freezer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {compare.map(([row, chest, upright]) => (
                <tr key={row} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{row}</th>
                  <td className="px-4 py-3 text-ink-body">{chest}</td>
                  <td className="px-4 py-3 text-ink-body">{upright}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-copy mt-8 max-w-3xl">
          <p>
            Chest freezer repair in Temple tends to be simpler, with fewer moving parts and no automatic defrost. Upright freezer repair has
            more possibilities, because the fan, the defrost heater and its controls can all quit while the compressor keeps running. Brand
            pages cover <Link href="/brands/frigidaire-appliance-repair-temple-tx/">Frigidaire freezers</Link>,{' '}
            <Link href="/brands/ge-appliance-repair-temple-tx/">GE appliances</Link>,{' '}
            <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool uprights</Link> and the old{' '}
            <Link href="/brands/kenmore-appliance-repair-temple-tx/">Kenmore chest freezers</Link> still running in plenty of garages.
          </p>
          <p>
            The freezer section of a regular fridge shares airflow with the fresh-food side, so it&apos;s covered on the{' '}
            <Link href="/refrigerator-repair-temple-tx/">refrigerator repair page</Link> and in the{' '}
            <Link href="/blog/refrigerator-not-cooling/">guide to a refrigerator that isn&apos;t cooling</Link>.
          </p>
        </div>
      </Section>

      <Section labelledBy="freezing-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="freezing-heading" eyebrow="Not freezing" title="Why is my freezer" accent="not freezing?" />
          <div className="prose-copy">
            <p className="text-[19px] font-medium text-ink">
              First, does the compressor run? If it hums and the freezer stays warm, look at a defrost failure blocking airflow on an upright,
              a leaking seal, heat around the cabinet, or a refrigerant leak or restriction. If it&apos;s silent or only clicks, the start
              relay, overload or thermostat comes first.
            </p>
            <p>
              A technician narrows it down by ear and by touch. A compressor that runs steadily while the cabinet warms points away from the
              electrical parts and toward the sealed system. One that tries, clicks off and tries again points to the relay or overload. On an
              upright, the fan and the frost pattern show whether air is moving.
            </p>
            <p>
              Opening the refrigerant circuit requires EPA Section 608 certification, and leaks take time to find, so a freezer not freezing
              repair call starts by ruling out the simpler parts.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="read-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="read-heading" eyebrow="Before you call" title="Read your freezer" accent="before you call" intro="Note what you find:" dark />
          <div>
            <ul className="grid gap-3">
              {readIt.map(([t, d]) => (
                <li key={t} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[16px] leading-relaxed text-white/75">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-mint-bright" strokeWidth={2.4} />
                  <span>
                    <strong className="font-semibold text-white">{t}</strong> {d}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[17px] text-white/70">Two minutes of notes beats &ldquo;it&apos;s just not cold&rdquo; on the phone.</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="frost-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="frost-heading" eyebrow="Frost and ice" title="Freezer frosting up:" accent="normal ice or a broken defrost?" />
          <div className="prose-copy">
            <p>
              On a manual defrost chest freezer, some frost is normal. Humid Central Texas air comes in with every opening and freezes onto
              the walls. Past about a quarter inch, that ice insulates the walls and makes the compressor work harder. Thick ice right along
              the top edge usually means the lid gasket is leaking.
            </p>
            <p>
              A frost-free upright shouldn&apos;t build frost at all. Frost on the shelves, ice on the packages or a solid block behind the
              back panel points to the defrost heater, the defrost thermostat or the control board. That&apos;s freezer frost buildup repair,
              and chipping the ice away only buys a few weeks.
            </p>
            <h3>To defrost a chest freezer safely:</h3>
            <ol className="not-prose mt-4 grid gap-3">
              {defrost.map((step, i) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-sand bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[14px] font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-[16px] leading-relaxed text-ink-body">{step}</p>
                </li>
              ))}
            </ol>
            <p>
              No knives, screwdrivers or ice picks. One slip can puncture a refrigerant line hidden in the wall, and that ends most chest
              freezers. Skip heat guns and hair dryers too; they warp the liner.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="loads-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="loads-heading" eyebrow="Deep freezers" title="A half beef or a season of deer" accent="in one box" />
          <div className="prose-copy">
            <p>
              Lots of Temple households fill a deep freezer once or twice a year: deer from hunting season, a quarter or half beef from a
              processor, warehouse-store bulk buys. That&apos;s real money in one appliance, and a deep freezer usually gives warning first:
              longer run times, changing frost, a cabinet that feels different.
            </p>
            <p>
              A cheap thermometer near the top of the load, read whenever you open the lid, is the simplest early warning. A freezer alarm
              with a remote sensor goes further and alerts you indoors when the temperature climbs.
            </p>
            <p>A pile of fresh, unfrozen meat added at once can overwhelm a freezer for a day or more, so freeze big loads in batches.</p>
            <p>
              For deep freezer repair in Temple, TX, call while the food is still frozen. If it&apos;s already thawing, the{' '}
              <Link href={routes.cityPage}>same-day and emergency repair page</Link> covers what to do right now.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="running-heading">
        <SectionHeading id="running-heading" eyebrow="Runs nonstop" title="Freezer running constantly?" accent="Some causes you can check" />
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-sand bg-white p-6">
            <h3 className="font-display text-lg font-bold text-ink">Worth checking yourself</h3>
            <ul className="mt-4 space-y-3">
              {selfChecks.map(([t, d]) => (
                <li key={t} className="text-[16px] leading-relaxed text-ink-body">
                  <strong className="font-semibold text-ink">{t}</strong> {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="grain rounded-2xl bg-ink p-6 text-white/75">
            <h3 className="font-display text-lg font-bold text-white">Needs a technician</h3>
            <p className="mt-4 text-[16px] leading-relaxed">
              A thermostat that no longer shuts the compressor off, a failing fan, a defrost fault on an upright, or a low refrigerant charge
              from a leak. If it runs nonstop and still won&apos;t reach 0°F after you&apos;ve ruled out the first four, call.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="visit-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="visit-heading" eyebrow="The visit" title="What happens when a technician comes" accent="to look at the freezer?" />
          <div className="prose-copy">
            <p>
              Most freezer visits start with a path. A chest freezer at the back of a garage or shop is usually buried behind bikes, coolers
              and the Christmas tree box. The freezer typically gets pulled from the wall to check the condenser, the airflow and the cord, and
              the rating sticker gets read, since it explains a lot of summer failures.
            </p>
            <p>
              Then it&apos;s measurement: a thermometer reading instead of the dial setting, the frost pattern, and the gasket along its whole
              length, including the hinge side where heat tends to warp it. Last comes the compressor start: does it hum and run, or click and
              quit? That sound separates an inexpensive start relay from a sealed system problem.
            </p>
            <p>
              When you call, describe the style, the size, where it sits and what you noticed, and ask for the repair price before any work
              starts.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="worth-heading">
        <SectionHeading id="worth-heading" eyebrow="Repair or replace" title="Is the freezer" accent="worth fixing?" />
        <div className="grid gap-4 md:grid-cols-2">
          {worth.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-sand bg-white p-6">
              <h3 className="font-display text-lg font-bold text-ink">{t}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-body">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-3xl space-y-4 text-[17px] leading-relaxed text-ink-body">
          <p>
            The{' '}
            <Link href="/blog/repair-or-replace-appliance/" className={flame}>
              repair or replace guide
            </Link>{' '}
            covers lifespans and how to weigh the numbers.
          </p>
          <p>
            Cost comes down to the part, whether it&apos;s sealed system work, how hard the freezer is to reach and how easy parts are to find,
            so no figure is honest before a look. Call <PhoneLink location="freezer_cost" className={flame} />, ask about the visit fee, and get
            the price before any work starts.
          </p>
        </div>
      </Section>

      <Section tone="white" labelledBy="where-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="where-heading" eyebrow="Service area" title="Freezer repair in Temple, TX:" accent="where do the calls come from?" />
          <div className="prose-copy">
            <p>
              All over 76501, 76502 and 76504: garages in Western Hills and Midway, chest freezers on back porches Downtown, and shops and
              barns along the I-35 corridor. Belton, Killeen, Salado and the other nearby towns are on the{' '}
              <Link href={routes.areas}>service areas page</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Freezer repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="freezer_final"
        title="Ready to get the"
        accent="freezer checked?"
        cardHeadingLevel="p"
        cardTitle="Book a freezer repair"
        appliance="freezer"
        text={
          <>
            For freezer repair in Temple, TX, note the style, the size and where the freezer sits, then call{' '}
            <PhoneLink location="freezer_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              schedule a freezer repair visit
            </Link>
            . Calling at the first warm reading gives that load its best chance.
          </>
        }
      />
    </>
  );
}

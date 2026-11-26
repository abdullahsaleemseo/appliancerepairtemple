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

/** Dishwasher repair page (source: content/dishwasher-v1.md, Nov 2026). Replaces the generic service template for this slug. */
const path = '/dishwasher-repair-temple-tx/';
const description =
  'Dishwasher repair in Temple, TX: read the residue on your dishes, follow the water in, around and out, and fix drain or fill problems. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Dishwasher Repair Temple TX | Not Draining or Cleaning?',
  description,
  path,
});

const residue: [string, string, string][] = [
  ['White, chalky film or spots', 'Hard water minerals, often with no rinse aid', 'Use rinse aid, try a dishwasher cleaner, and check the detergent dose for hard water'],
  ['Gritty bits or food specks', 'Clogged filter or spray arm holes', 'Clean the filter; clear spray arm holes with a toothpick'],
  ["Cloudy film that won't wipe or soak off", 'Etching from soft water and too much detergent', 'Cut back the detergent; etching on glass is permanent'],
  ['Food baked on after the cycle', 'Water not hot enough, or a weak wash pump', 'Run the kitchen tap hot first; if it persists, the heater or pump needs testing'],
  ['Dishes wet at the end, especially plastics', 'Normal on many condensation-dry models, or no rinse aid', 'Add rinse aid; use the heated or extra dry option if there is one'],
];

const path3: [string, string][] = [
  [
    'Getting water in.',
    'Water comes from a small supply valve under the sink, through a line to the inlet valve at the bottom front of the dishwasher. A float switch in the tub tells the control when enough water is in. If the tub stays dry or barely wet, the trouble is here.',
  ],
  [
    'Moving it around.',
    'The wash pump pushes water up through the spray arms, and a heater, on most models, warms it. The filter catches food so the pump keeps recirculating clean water. Poor cleaning with a normal fill points to this stage.',
  ],
  [
    'Getting it out.',
    'At the end of each wash and rinse, the drain pump pushes water through the drain hose, up to a high loop or an air gap, and into the sink drain or garbage disposal. Dirty water sitting in the tub afterward means something on this stretch is blocked or has quit.',
  ],
];

const faqs: Faq[] = [
  {
    q: 'Should I run the kitchen tap before starting the dishwasher?',
    a: "Yes. Run the hot water at the kitchen sink until it's hot, then start the dishwasher. Many dishwashers fill with whatever is in the line first, and in a house where the water heater is far from the kitchen, that's cold water. Hotter fill water cleans better.",
  },
  {
    q: 'Can I use regular dish soap in a dishwasher?',
    a: 'No. Hand dish soap makes a huge amount of suds in a dishwasher, which can push foam out of the door and onto the floor and trip leak sensors. If it happens, stop the cycle, scoop out the suds, add a little cooking oil to cut them and run a rinse.',
  },
  {
    q: 'How often should I clean the dishwasher filter?',
    a: "Once a month is a good habit for a family that runs it daily, and more often if dishes go in with a lot of food left on them. Manual filters twist out from the bottom of the tub. Rinse under warm water with a soft brush, and don't use wire brushes on the mesh.",
  },
  {
    q: 'Is it normal for water to stay in the bottom after a cycle?',
    a: "A small amount of clear water around the sump is normal on many models; it keeps the seals from drying out. Dirty water above the filter, or water that covers the tub floor, isn't. That points to a clog or a drain problem.",
  },
  {
    q: 'Why does my dishwasher smell bad?',
    a: 'Food trapped in the filter and the sump rots between cycles. Clean the filter, wipe the door gasket and the bottom edge of the door, and run an empty hot cycle with a dishwasher cleaner. Leaving the door slightly open after a cycle helps it dry out.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';
const th = 'px-4 py-3 font-semibold';

export default function DishwasherRepairPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: `Dishwasher repair in ${site.city}, ${site.stateAbbr}`, serviceType: 'Dishwasher repair', description, path })} />

      <PageHero crumbs={[{ name: 'Dishwasher Repair', path }]} title={`Dishwasher Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          What&apos;s left on your dishes when the cycle ends? A white chalky film, gritty specks, a cloudy haze that won&apos;t wipe off and
          baked-on food all point to different problems, and most of them aren&apos;t a broken dishwasher at all. Reading those clues is the first
          step in dishwasher repair in Temple, TX, and it often saves a visit. When the dishwasher won&apos;t fill, won&apos;t drain or leaves water
          on the floor, call <PhoneLink location="dishwasher_intro" className={white} /> with the brand and what you&apos;re seeing.
        </p>
        <div className="mt-8">
          <CtaRow location="dishwasher_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="residue-heading">
        <SectionHeading id="residue-heading" eyebrow="Read the dishes" title="What's on the dishes" accent="tells you what's wrong" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[680px] text-left text-[15px]">
            <caption className="sr-only">Dishwasher residue decoder: what is on the dishes, the likely cause and the fix</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>What&apos;s on the dishes</th>
                <th scope="col" className={th}>Likely cause</th>
                <th scope="col" className={th}>Fix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {residue.map(([on, cause, fix]) => (
                <tr key={on} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{on}</th>
                  <td className="px-4 py-3 text-ink-body">{cause}</td>
                  <td className="px-4 py-3 text-ink-body">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-ink-body">
          Chalky film you can scrub off with vinegar is minerals; cloudy film that stays is etching, and etching doesn&apos;t come back out. If the
          dishes keep coming out dirty after the filter and spray arms are clean, the dishwasher not cleaning repair is usually the wash pump, the
          heater or a spray arm that no longer turns.
        </p>
      </Section>

      <Section tone="ink" labelledBy="path-heading">
        <SectionHeading
          id="path-heading"
          eyebrow="The water path"
          title="Follow the water:"
          accent="in, around, out"
          intro="Every dishwasher problem lives somewhere on this one path."
          dark
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {path3.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display text-xl font-bold text-white">{t}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-white/75">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="drain-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="drain-heading" eyebrow="Not draining" title="Why is my dishwasher" accent="not draining?" />
          <div className="prose-copy">
            <p>
              Start inside. The filter in the tub floor is the most common clog, especially on newer models that rely on a manual filter instead of
              a grinder. Twist it out and rinse it under the tap.
            </p>
            <p>
              Then follow the drain hose. It should rise in a high loop under the counter, or run to an air gap on the sink deck, so dirty sink water
              can&apos;t flow back in. A hose that sags to the floor or gets crushed behind the dishwasher can hold water or kink shut. An air gap
              clogged with food will also back up, and sometimes overflow at the sink.
            </p>
            <p>
              Next is the connection to the sink drain. If the dishwasher drains into a garbage disposal, a clogged disposal blocks it, and a newly
              installed disposal still has a knockout plug sealing its dishwasher inlet until someone punches it out. If the plug or the disposal
              itself looks like the culprit, <Link href="/garbage-disposal-repair-temple-tx/">garbage disposal repair</Link> covers jams, the
              knockout plug and where a disposal ends and the dishwasher begins.
            </p>
            <p>
              Only after all that does the drain pump come into question: a hum with no water moving means it&apos;s jammed or failing. If you&apos;d
              rather work through the filter, hose and disposal yourself first, the{' '}
              <Link href="/blog/dishwasher-drainage-problems/">dishwasher drainage problems you can check yourself</Link> follow roughly that order.
              Most dishwasher not draining repair calls end at the filter, the hose or the disposal, which is good news for the bill.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="fill-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fill-heading" eyebrow="Not filling" title="Dishwasher not filling" accent="with water?" />
          <div className="prose-copy">
            <p>
              First, the obvious one that gets missed: the small supply valve under the sink. It gets bumped closed more often than you&apos;d think.
              Make sure it&apos;s fully open.
            </p>
            <p>
              If the valve is open and the tub stays dry, the inlet valve at the bottom of the dishwasher may have failed, or its small screen may be
              clogged with sediment. A float switch stuck in the &ldquo;up&rdquo; position also tells the control the tub is already full; on many
              models, the float is a small dome in the tub floor you can lift and lower by hand to free it. A door that isn&apos;t latching fully will
              stop the cycle before it fills, too.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="leak-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="leak-heading" eyebrow="Leaks" title="Dishwasher leaking under the door" accent="or from underneath" />
          <div className="prose-copy">
            <p>
              Where the water shows up says a lot. At the bottom of the door, the usual causes are a worn or torn door gasket, a dishwasher that
              isn&apos;t level so water runs toward the door, or regular dish soap squirted in by mistake, which turns into a flood of suds.
            </p>
            <p>
              A spray arm knocking a tall pan can throw water at the door seal. From underneath, a leak points to a hose connection, the inlet valve
              or a worn pump or tub seal, and those can soak the cabinet floor before you notice. For dishwasher leaking repair in Temple, take a
              quick look under the kick plate with a flashlight while it runs.
            </p>
            <p>
              Built-in dishwasher repair also means checking how it&apos;s mounted. A dishwasher has to be level side to side and front to back, and
              secured to the countertop or cabinet sides with its mounting brackets. One that&apos;s loose or tilted can leak at the door and wear its
              hinges early.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="codes-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="codes-heading" eyebrow="Error codes" title="Error codes, and what" accent="Bosch's E15 means" />
          <div className="prose-copy">
            <p>
              Many dishwashers display a code or flash a light pattern when something fails, and the code names the stage of the water path. Bosch
              is a good example. On a Bosch, E15 means water has been detected in the base pan under the tub, and the anti-flood float has shut the
              dishwasher down. It won&apos;t run again until the leak is found and the base is dry, and{' '}
              <Link href="/brands/bosch-appliance-repair-temple-tx/">Bosch dishwasher codes and quirks</Link> like E24 and E25, which usually point to
              drain blockages on many models, are worth knowing before you call. For Bosch dishwasher repair in Temple, the leak behind an E15 is the
              real fix; resetting the code alone won&apos;t hold.
            </p>
            <p>
              Bosch also dries by condensation on many models rather than with an exposed heating element, which is why plastics often come out damp
              and rinse aid matters so much. Whirlpool and KitchenAid dishwashers share a two-part filter assembly under the lower spray arm, and{' '}
              <Link href="/brands/kitchenaid-appliance-repair-temple-tx/">KitchenAid dishwashers</Link> built on that design clog the same way when the
              filter is skipped. Many <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool dishwashers</Link> report faults with a
              flashing light count rather than a code, which the tech sheet inside the door explains. On GE models with hidden controls along the top
              of the door, a touchpad that stops responding is a familiar fault, and{' '}
              <Link href="/brands/ge-appliance-repair-temple-tx/">GE dishwasher control problems</Link> often clear with a breaker reset before
              needing a part. Check any code against the manual for your exact model before acting on it.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="local-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="local-heading" eyebrow="Temple homes" title="Dishwasher repair in Temple, TX:" accent="hard water and rentals" />
          <div className="prose-copy">
            <p>
              Hard water is the norm across much of Temple, and dishwashers show it first. Minerals spot glassware, leave chalky film on dark plates
              and slowly close up the tiny holes in the spray arms. A rinse aid in the dispenser, a dishwasher cleaner once a month and a detergent
              dose matched to hard water keep most of it in check. If spray arm holes are already crusted, they can be cleared with a toothpick and a
              soak in vinegar.
            </p>
            <p>
              Lots of dishwashers in the apartments and rental houses around the college and the hospital belong to the landlord, not the tenant.
              Settle who books and pays before calling; it saves a second call. Dishwasher calls come in from all three Temple ZIP codes, 76501,
              76502 and 76504, and <Link href={routes.areas}>Belton, Killeen and the other nearby towns</Link> are on the list too.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="visit-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="visit-heading" eyebrow="The visit" title="What happens on a" accent="dishwasher visit" />
          <div className="prose-copy">
            <p>
              The first few minutes usually go to the filter and the sump, the low point in the tub where water collects, because a clog there
              explains so many symptoms. The technician looks for food, glass and labels that have slipped past the filter, and checks that the float
              moves freely. Then a test cycle runs while each phase is watched: does water come in at a normal rate, do the spray arms turn and spray
              evenly, does the water heat, and does the pump drain the tub completely at the end. Whichever phase misbehaves points to the part.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" eyebrow="Repair or replace" title="Is a dishwasher" accent="worth repairing?" />
          <div className="prose-copy">
            <p>
              It depends on what the dishwasher cost to begin with. A basic dishwasher is often not worth a major repair like a wash motor or control
              board, because replacing it costs roughly what the repair would. A drain pump, inlet valve, door gasket or float switch on the same
              machine usually is worth it. Mid-range and upper models, Bosch included, are generally worth repairing, since they cost more to
              replace, last longer and use parts that stay available, the same reasoning behind most{' '}
              <Link href="/blog/repair-or-replace-appliance/">repair or replace decisions for appliances</Link>.
            </p>
            <p>
              For a sense of scale, Angi and HomeAdvisor&apos;s Temple listings put the average dishwasher service at around $162, with most jobs
              between about $113 and $190. Those are third-party averages, not this service&apos;s price. Ring{' '}
              <PhoneLink location="dishwasher_cost" className={flame} /> with what the dishwasher is doing and what&apos;s on the dishes; the visit
              fee and the actual repair price are both worth hearing before work begins.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Dishwasher repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="dishwasher_final"
        title="Clean dishes"
        accent="again"
        cardHeadingLevel="p"
        cardTitle="Book a dishwasher repair"
        appliance="dishwasher"
        text={
          <>
            For dishwasher repair in Temple, TX, rinse the filter, note what&apos;s on the dishes and whether water is pooling inside or under the
            door, then call <PhoneLink location="dishwasher_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              schedule a dishwasher repair
            </Link>
            . Those three details narrow the water path to one stretch before the visit.
          </>
        }
      />
    </>
  );
}

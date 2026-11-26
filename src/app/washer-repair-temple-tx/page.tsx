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

/** Washer repair page (source: content/washer-v1.md, Nov 2026). Replaces the generic service template for this slug. */
const path = '/washer-repair-temple-tx/';
const description =
  'Washer repair in Temple, TX: find where the cycle stopped, what codes like OE or 5C mean and when to call (254) 615-2088. Front and top load washers.';

export const metadata = pageMetadata({
  title: 'Washer Repair Temple TX | Not Spinning or Draining?',
  description,
  path,
});

const stages: [string, string, string][] = [
  ['Fill', 'No water, a trickle, or a long fill with a code', 'Closed supply valves, kinked fill hose, clogged inlet valve screens, failed inlet valve, pressure sensor'],
  [
    'Wash (agitate or tumble)',
    "Water in the tub but the drum or agitator doesn't move, or it hums",
    'Lid switch or door lock, drive belt, motor coupler, agitator dogs, motor or motor control board',
  ],
  ['Drain', 'Water left standing at the end, often with a drain code', 'Clogged drain pump filter, kinked or clogged drain hose, failed drain pump, a sock in the pump'],
  ['Spin', 'Clothes soaking wet, or the drum tries and stops', 'Unbalanced load, too many suds, lid lock not latching, worn belt or coupler, suspension problems'],
];

const codes: [string, string, string][] = [
  ['Samsung', '4C or 4E', 'Water supply problem during fill'],
  ['Samsung', '5C or 5E', 'Drain problem'],
  ['Samsung', 'dC (top load) or Ub', 'Unbalanced load'],
  ['LG', 'IE', 'Water inlet problem'],
  ['LG', 'OE', 'Drain problem'],
  ['LG', 'UE', 'Unbalanced load'],
  ['LG', 'dE', 'Door not locking'],
  ['Whirlpool', 'F8 E1', 'Long fill'],
  ['Whirlpool', 'F9 E1', 'Long drain'],
];

const shaking: [string, string][] = [
  [
    'Shipping bolts.',
    'A brand-new front loader that walks across the floor on its first spin usually still has the shipping bolts in the back. They hold the drum still for the truck and have to come out before use.',
  ],
  ['The floor and the feet.', "A washer that rocks when you push on opposite corners isn't level. Adjust the feet and tighten the lock nuts. Wood floors flex more than concrete."],
  ['The load.', 'One heavy comforter, a rug or a few towels with a light load can throw the drum off balance. Use the bulky cycle and mix item sizes.'],
  ['Suspension.', 'If it still bangs with a balanced load on a level floor, the suspension rods, springs or shock absorbers are worn.'],
];

const faqs: Faq[] = [
  {
    q: 'How often should I clean the drain pump filter on a front loader?',
    a: 'Every few months is a good habit, and sooner if you wash a lot of pet bedding or work clothes. Check the manual for the exact location. Put towels and a shallow pan down first, since the tub drains through the filter opening when you unscrew it.',
  },
  {
    q: 'Why does my washer keep pausing and adding more water?',
    a: "Usually that's normal. High-efficiency washers weigh the load and sense how much water the clothes absorb, then top up during the cycle. If it pauses for long stretches and never finishes, or shows a fill code, the inlet valve or water pressure deserves a look.",
  },
  {
    q: 'Should I replace the rubber fill hoses?',
    a: 'Many manufacturers suggest replacing rubber fill hoses every few years, and checking them for bulges or cracks at the ends. Steel-braided hoses resist bursting better. Shut off both supply valves before swapping them, and hand-tighten the new ones plus a small turn with pliers.',
  },
  {
    q: 'Why does a cycle take much longer than the display said?',
    a: 'Washers recalculate as they go. An unbalanced load makes the drum stop and redistribute, extra suds trigger more rinses, and slow fills or drains stretch every stage. If one cycle regularly runs an hour over, note which stage drags; it points straight to the cause.',
  },
  {
    q: 'Can I clear an error code by resetting the washer?',
    a: 'Sometimes. Unplugging it for a minute, or switching off its breaker, clears many codes. If the same code comes back on the next cycle, the reset only hid the problem. Write down the code and the stage where it appeared before calling.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';
const th = 'px-4 py-3 font-semibold';

export default function WasherRepairPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: `Washer repair in ${site.city}, ${site.stateAbbr}`, serviceType: 'Washer repair', description, path })} />

      <PageHero crumbs={[{ name: 'Washer Repair', path }]} title={`Washer Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          The single most useful thing to tell a technician is where the cycle stopped. Every washer runs the same four stages: fill, wash,
          drain and spin. The stage where it quits narrows the cause down to a handful of parts before anyone takes a panel off. That&apos;s how
          washer repair in Temple, TX starts, whether it&apos;s a front loader full of water or a top loader that won&apos;t agitate. Note the
          stage, the brand and any code on the display, then call <PhoneLink location="washer_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="washer_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="stage-heading">
        <SectionHeading id="stage-heading" eyebrow="Fill, wash, drain, spin" title="Where in the cycle" accent="did it stop?" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[680px] text-left text-[15px]">
            <caption className="sr-only">Washer cycle stages, what you will notice and the usual causes</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Stage it stopped</th>
                <th scope="col" className={th}>What you&apos;ll notice</th>
                <th scope="col" className={th}>Usual causes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {stages.map(([stage, notice, causes]) => (
                <tr key={stage} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{stage}</th>
                  <td className="px-4 py-3 text-ink-body">{notice}</td>
                  <td className="px-4 py-3 text-ink-body">{causes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-ink-body">
          On a visit, the first job is usually to run the washer through a short cycle or its test mode and watch each stage. At the fill,
          they&apos;re checking how fast water comes in and whether both hot and cold lines work. During the wash, they listen for the lid lock
          clicking and watch whether the drum actually turns or the motor just hums. At the drain, the question is whether the pump runs and
          empties the tub at a normal rate. At the spin, they watch whether the drum reaches speed or the machine stops to rebalance again and
          again. A washer that fails at one stage has usually passed the ones before it.
        </p>
      </Section>

      <Section tone="white" labelledBy="spin-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="spin-heading" eyebrow="Spin" title="Why won't my" accent="washer spin?" />
          <div className="prose-copy">
            <p>
              Most of the time, nothing is broken. The spin stage is the most fussy part of the cycle: the washer won&apos;t spin if the load is
              badly off balance, if the tub still holds water, or if the lid or door lock doesn&apos;t confirm it&apos;s closed.
            </p>
            <p>
              Suds are the sneaky one. Regular detergent in a high-efficiency washer, or too much HE detergent, makes a foam the machine reads as
              water. It keeps trying to drain and rinse, and the spin never comes. Run an empty rinse cycle with no detergent, then use half the
              amount next time.
            </p>
            <p>
              When the load is balanced and the suds are gone, the parts come next: a worn drive belt on many top loaders, a cracked motor
              coupler between the motor and the transmission, or a lid switch that no longer makes contact. On front loaders, a door lock that
              won&apos;t latch keeps the drum from ever reaching speed. If you&apos;d like to rule out the simple causes yourself, there&apos;s a
              step-by-step for <Link href="/blog/washer-not-spinning/">a washer that won&apos;t spin</Link> that starts with the load and the
              suds. Plenty of washing machine repair in Temple, TX ends right there, which is why a washer not spinning repair call starts with
              the same checks.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="drain-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="drain-heading" eyebrow="Drain" title="Washer not draining water?" accent="Start at the pump filter" />
          <div className="prose-copy">
            <p>
              Front loaders have a small access door at the bottom front with a drain pump filter behind it. Coins, hair ties, small socks and
              lint collect there until the water can&apos;t get past. Many top loaders have no user filter, so a clog sits inside the pump or the
              drain hose instead.
            </p>
            <p>
              After the filter, check the drain hose behind the washer, the second step in{' '}
              <Link href="/blog/washer-not-draining/">clearing a washer that won&apos;t drain</Link> yourself. It gets kinked when the machine is
              pushed back against the wall, and a hose pushed too far down into the standpipe can siphon water out mid-cycle.
            </p>
            <p>
              If the pump hums but no water moves, something is jammed in it. If it&apos;s silent, the pump or its wiring has failed. Hard water
              scale on the impeller also slows older pumps before they quit. A washer not draining repair is usually a pump or a clog, and both
              are common, inexpensive parts.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="type-heading">
        <SectionHeading id="type-heading" eyebrow="Front or top load" title="Front load and top load washers" accent="break in different places" dark />
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-display text-xl font-bold text-white">Front loaders</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-white/75">
              Front loaders seal the drum with a rubber door boot. That boot traps water and lint in its folds, it tears where a zipper or a bra
              wire catches it, and it&apos;s the first suspect when water shows up under the door. The drain pump filter is easy to reach behind
              the front panel. The drum hangs on springs and shock absorbers, so worn shocks show up as banging during spin. Front load washer
              repair also leans on door locks and control boards.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-display text-xl font-bold text-white">Top loaders</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-white/75">
              Top loaders have no door boot, and their drain parts are harder to reach, usually from the back or underneath. Older models wear out
              couplers, belts and agitator dogs. Newer high-efficiency top loaders with a low-profile impeller instead of an agitator depend on
              suspension rods at each corner; when those wear, the tub drifts and knocks against the cabinet. Top load washer repair is often
              mechanical and straightforward.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="codes-heading">
        <SectionHeading
          id="codes-heading"
          eyebrow="Error codes"
          title="What do the codes"
          accent="on the display mean?"
          intro="A code is the washer naming the stage that failed. Common ones on current models:"
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
              <table className="w-full text-left text-[15px]">
                <caption className="sr-only">Common Samsung, LG and Whirlpool washer error codes</caption>
                <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                  <tr>
                    <th scope="col" className={th}>Brand</th>
                    <th scope="col" className={th}>Code</th>
                    <th scope="col" className={th}>What it usually means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/70">
                  {codes.map(([brand, code, meaning]) => (
                    <tr key={brand + code}>
                      <td className="px-4 py-3 text-ink-body">{brand}</td>
                      <th scope="row" className="px-4 py-3 font-mono font-semibold text-ink">{code}</th>
                      <td className="px-4 py-3 text-ink-body">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[14.5px] text-ink-muted">
              Codes vary by model and year, so confirm yours in the manual or on the sticker inside the lid or behind the control panel before you
              act on it.
            </p>
          </div>
          <div className="prose-copy">
            <p>
              A Samsung showing 5C after a few years of use often has a clogged filter rather than a dead pump, and{' '}
              <Link href="/brands/samsung-appliance-repair-temple-tx/">Samsung washer codes</Link> moved from the older E style, like 5E, to the C
              style on newer models. On an LG front loader, an OE that comes back right after the filter is cleaned points to the pump itself,
              which is why <Link href="/brands/lg-appliance-repair-temple-tx/">LG&apos;s drain and door codes</Link> are worth writing down exactly
              as shown.
            </p>
            <p>
              Whirlpool&apos;s F8 E1 often comes down to clogged inlet screens, and many{' '}
              <Link href="/brands/maytag-appliance-repair-temple-tx/">Maytag washers share Whirlpool&apos;s code system</Link> because the two
              brands come from the same company. Many{' '}
              <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool front and top loaders</Link> can also run a diagnostic mode
              that cycles through each stage on its own.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="shake-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="shake-heading" eyebrow="Shaking" title="Washer shaking violently?" accent="Check these, in this order" />
          <ol className="grid gap-3">
            {shaking.map(([t, d], i) => (
              <li key={t} className="flex gap-4 rounded-2xl border border-sand bg-canvas p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[15px] font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-[16.5px] leading-relaxed text-ink-body">
                  <strong className="font-semibold text-ink">{t}</strong> {d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section labelledBy="leak-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="leak-heading" eyebrow="Leaks and smells" title="Leaks, smells and" accent="the hard water problem" />
          <div className="prose-copy">
            <h3>Where the water is coming from</h3>
            <p>
              Water at the front of a front loader usually comes from the door boot or a detergent drawer that overflows from too much soap. Water
              at the back points to the fill hoses, the inlet valve or the drain hose connection. Water from underneath, especially during drain,
              suggests the pump or a hose clamp. For washer leaking repair, the location of the puddle saves the technician time.
            </p>
            <h3>That front load smell</h3>
            <p>
              A musty front loader is almost always a moisture problem. Water and lint sit in the folds of the door boot and in the drain pump
              filter, and a closed door keeps it all damp. Wipe the boot folds, clean the filter, run a monthly hot cleaning cycle, use less
              detergent and leave the door cracked between loads.
            </p>
            <h3>Hard water and slow fills</h3>
            <p>
              Much of the water around Temple is hard. Mineral scale clogs the small screens where the fill hoses attach to the inlet valve, so
              fills get slower until the washer throws a long-fill code. Rinsing those screens often fixes it; a valve scaled inside gets
              replaced.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="local-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="local-heading" eyebrow="Temple homes" title="Washer repair in Temple, TX:" accent="slabs, second floors and rentals" />
          <div className="prose-copy">
            <p>
              Where the washer sits changes what a leak costs you. In many older homes near Downtown Temple and in Midway, the laundry sits in a
              garage or utility room on a concrete slab, where a leak mostly makes a mess. Some newer builds in West Temple put the laundry on the
              second floor, over a ceiling. There, a drain pan under the washer with a line to a drain is worth having, and steel-braided fill
              hoses are worth the small upgrade.
            </p>
            <p>
              Renting near Temple College or the medical center? Ask your landlord who arranges and pays for washer repair before booking. Homes
              across 76501, 76502 and 76504 are covered, along with{' '}
              <Link href={routes.areas}>Belton, Killeen and the rest of the nearby towns</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="cost-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cost-heading" eyebrow="Repair or replace" title="Cheap fix" accent="or costly one?" />
          <div className="prose-copy">
            <p>
              Most washer repairs are inexpensive parts: a drain pump, a lid switch, a door lock, a motor coupler or a drive belt. Those are almost
              always worth fixing. The costly ones are tub bearings, which usually announce themselves with a roar during spin and often mean
              taking the whole tub apart, and a control board on an older machine, where the board can cost a large share of a new washer.
            </p>
            <p>
              For context, Angi&apos;s Temple listings put the average washing machine service visit at around $156. That&apos;s a third-party
              average, not this service&apos;s price. Call <PhoneLink location="washer_cost" className={flame} />, ask what the visit fee is, and
              have the repair price in hand before anything is taken apart.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Washer repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="washer_final"
        title="Before"
        accent="you call"
        cardHeadingLevel="p"
        cardTitle="Book a washer repair"
        appliance="washer"
        text={
          <>
            For washer repair in Temple, TX, have the brand, the code and the stage where it stopped ready, then call{' '}
            <PhoneLink location="washer_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a washer repair
            </Link>
            . That helps the technician bring the right parts.
          </>
        }
      />
    </>
  );
}

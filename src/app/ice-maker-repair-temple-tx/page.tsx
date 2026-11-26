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

/** Ice maker and water dispenser repair page (source: content/ice-maker-v1.md, Nov 2026). */
const path = '/ice-maker-repair-temple-tx/';
const description =
  'Ice maker repair in Temple, TX: trace the water from the wall to the tray to find why it stopped, froze or leaks. Then call (254) 615-2088 to book a visit.';

export const metadata = pageMetadata({
  title: 'Ice Maker Repair Temple TX | Not Making Ice?',
  description,
  path,
});

const stops: { title: string; fails: string; check: string }[] = [
  {
    title: 'Supply line and shutoff valve',
    fails:
      "a valve that's partly closed, a kinked line behind the fridge, or an old saddle valve. Older installs often use a saddle (piercing) valve clamped onto the cold pipe, and those clog with sediment and drip as they age.",
    check: "that the valve under the sink or in the wall is fully open and the line isn't pinched behind the fridge.",
  },
  {
    title: 'Water filter',
    fails: "an overdue filter slows flow until the tray can't fill in time. One that isn't fully seated can block water entirely.",
    check: 'when it was last changed, and whether it clicks or turns all the way into place.',
  },
  {
    title: 'Water inlet valve',
    fails: 'the electric valve at the bottom back opens on command. Its coil can burn out, and hard water around Temple scales its small screens until flow drops.',
    check: 'with the dispenser held down, listen at the back of the fridge. A buzz with no water means the valve is trying but nothing is coming through.',
  },
  {
    title: 'Fill tube',
    fails: 'the short tube carrying water into the ice tray can freeze shut. That happens when the inlet valve dribbles between fills, or when the freezer is set colder than it needs to be.',
    check: "look where the tube enters the ice maker. A plug of ice there means the tube froze, and it'll freeze again unless the cause is found.",
  },
  {
    title: 'Ice maker module and ejector',
    fails:
      'the module fills the tray, waits for it to freeze, then rotates an ejector to push the cubes out. A motor or control fault stops everything. Just as often, the shutoff arm or optical sensor is stuck in the "full" position and the ice maker thinks the bin is already loaded.',
    check: 'whether the arm is down (or the switch is on), and whether ice is jammed in the ejector fingers.',
  },
  {
    title: 'Bin, auger and door chute',
    fails:
      'cubes that melt slightly and refreeze clump into a block that jams the auger, the spiral that pushes ice toward the chute. The auger motor can fail, and the chute flap can freeze shut.',
    check: 'pull the bin, break up any clump in the sink, and look for ice packed into the chute opening.',
  },
];

const kinds: [string, string][] = [
  [
    'Freezer-compartment ice makers',
    "sit in the top or back of the freezer, with a bin below. They're the simplest kind of refrigerator ice maker repair, with easy-to-reach parts.",
  ],
  [
    'In-door ice makers',
    'live in the fresh-food door on many French door and some side-by-side models. They add a compartment fan, a small heater, door seals and wiring that runs through the door hinge.',
  ],
  ['Standalone undercounter ice machines', 'are a different appliance. Call and ask before booking for one of those.'],
];

const faqs: Faq[] = [
  {
    q: 'Can I turn the ice maker off without hurting the fridge?',
    a: "Yes. Raise the shutoff arm or switch the ice maker off, and the fridge keeps cooling normally. If you won't use ice for a while, also close the water supply valve. That stops the inlet valve from buzzing or dribbling while the ice maker is off.",
  },
  {
    q: 'Why does my ice taste or smell bad?',
    a: "Ice absorbs odors from open food in the freezer, and old ice in the bin goes stale. An overdue water filter or a new line that wasn't flushed can add taste too. Empty the bin, cover strong-smelling food, replace the filter if it's due and toss the first few batches after.",
  },
  {
    q: 'Why does the ice maker buzz with no ice coming out?',
    a: "That's usually the inlet valve trying to fill the tray with no water reaching it. Check that the supply valve is open and the line isn't kinked. If the water is on and the buzz continues, the valve or a frozen fill tube is the likely cause.",
  },
  {
    q: "Can I add an ice maker to a fridge that doesn't have one?",
    a: "Sometimes. Many refrigerators are built \"ice maker ready,\" with a spot and wiring connection for an add-on kit made for that model. Check the manual or the label inside the freezer. You'll also need a water line run to the fridge if one isn't there already.",
  },
  {
    q: 'Why is my ice cloudy?',
    a: "Cloudy ice is mostly trapped air and dissolved minerals, and it's normal for home ice makers that freeze water quickly. Hard water makes it more noticeable, and it's safe to use. Clear ice needs slower freezing than refrigerator ice makers use.",
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';

export default function IceMakerRepairPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Ice maker and water dispenser repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Ice maker repair',
          description,
          path,
        })}
      />

      <PageHero crumbs={[{ name: 'Ice Maker Repair', path }]} title={`Ice Maker & Water Dispenser Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          An ice maker is a small plumbing system bolted to a freezer. Water leaves the wall, passes a filter and a valve, climbs a fill tube
          into a tray, freezes, gets pushed into a bin and finally drops down a chute in the door. When ice stops, the break is somewhere along
          that route, and finding which stop failed is most of ice maker repair in Temple, TX. Before you call{' '}
          <PhoneLink location="icemaker_intro" className={white} />, a few checks along the way can narrow it down.
        </p>
        <div className="mt-8">
          <CtaRow location="icemaker_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="route-heading">
        <SectionHeading id="route-heading" eyebrow="The water route" title="Follow the water:" accent="six stops from the wall to your glass" />
        <ol className="relative grid gap-4 md:grid-cols-2">
          {stops.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-sand bg-white p-6">
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-flame">Stop {i + 1}</p>
              <h3 className="mt-1 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">What fails:</strong> {s.fails}
              </p>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">What you can check:</strong> {s.check}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white" labelledBy="making-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="making-heading" eyebrow="No ice" title="Ice maker not making ice?" accent="Rule out the waiting game first" />
          <div className="prose-copy">
            <p>
              A new ice maker, or one that just got a new filter, isn&apos;t broken if it does nothing for a while. It usually needs time, often
              around a day, before the first batch drops. Throw out the first few batches.
            </p>
            <p>
              After that, check the freezer: an ice maker won&apos;t cycle until the mold is cold enough, and a struggling fridge is a
              refrigerator problem, so <Link href="/refrigerator-repair-temple-tx/">why a refrigerator stops cooling</Link> is the better
              starting point then. If the freezer is fine and the arm is down, there are{' '}
              <Link href="/blog/ice-maker-not-working/">reset steps for a stubborn ice maker</Link> that are worth trying before a visit.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="frozen-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="frozen-heading" eyebrow="Frozen" title="Ice maker frozen solid," accent="or ice stuck in the chute?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              A frozen fill tube usually means water leaking past a worn inlet valve and freezing between cycles. A solid block in the bin comes
              from cubes that partly melt and refreeze, often after the door was left ajar.
            </p>
            <p>
              In-door ice makers on some French door models have their own version of this. The compartment sits in the fresh-food door, and when
              its seal, fan or heater stops doing its job, cold air leaks and frost builds until the ice maker freezes over. Samsung models are the
              most familiar example, and Samsung ice maker repair in Temple usually starts with{' '}
              <Link href="/brands/samsung-appliance-repair-temple-tx/" className={white}>
                the compartment seal and defrost parts on Samsung French doors
              </Link>
              , not the ice maker alone. LG puts the ice maker in the door on many French door models as well, so{' '}
              <Link href="/brands/lg-appliance-repair-temple-tx/" className={white}>
                LG ice compartments
              </Link>{' '}
              can show the same frost pattern.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="kind-heading">
        <SectionHeading id="kind-heading" eyebrow="Ice maker types" title="Which kind of ice maker" accent="do you have?" />
        <div className="grid gap-4 md:grid-cols-3">
          {kinds.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-sand bg-white p-6">
              <p className="text-[16px] leading-relaxed text-ink-body">
                <strong className="font-display text-[17px] font-bold text-ink">{t}</strong> {d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" labelledBy="leak-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="leak-heading" eyebrow="Leaks" title="Ice maker leaking:" accent="tracing the drip" />
          <div className="prose-copy">
            <p>
              Water on the floor near the fridge usually traces to one of the stops above. The supply line and its connection at the back of the
              fridge leak most often, especially with old plastic tubing or a saddle valve. A cracked inlet valve drips at the bottom back. A
              misaligned fill tube can spray outside the tray, freeze into a sheet and leak when it melts.
            </p>
            <p>
              If the water shows up under the crisper drawers or along the fridge floor instead, the ice maker probably isn&apos;t the source.
              That&apos;s usually the fridge&apos;s defrost drain, and <Link href="/blog/refrigerator-leaking-water/">tracing a refrigerator leak</Link>{' '}
              covers that route instead.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="dispenser-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="dispenser-heading" eyebrow="Water dispenser" title="Water dispenser" accent="slow or dead?" />
          <div className="prose-copy">
            <p>
              The dispenser shares the first three stops with the ice maker, so slow water plus slow ice points at the supply line, filter or
              inlet valve. A dead dispenser with working ice points elsewhere: the water line inside the door can freeze where it passes through
              a cold spot, the dispenser switch or actuator pad can fail, or a door switch can tell the control the door is open. For water
              dispenser repair in Temple, note whether ice and water both stopped or just one.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="cost-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cost-heading" eyebrow="Cost" title="Ice maker repair in Temple, TX:" accent="what decides the cost?" />
          <div className="prose-copy">
            <p>
              Cost depends on which stop failed and how hard it is to reach. A filter or a supply line is a simple fix. An inlet valve or a
              freezer-compartment ice maker module is a common part with modest labor. An in-door ice maker with compartment frost takes longer,
              because the compartment has to come apart and the root cause, a seal, fan or heater, has to be fixed too.
            </p>
            <p>
              Ring <PhoneLink location="icemaker_cost" className={flame} />, ask about the visit fee, and agree on the repair price before a part
              is ordered. Calls come from all over 76501, 76502 and 76504, and{' '}
              <Link href={routes.areas}>Belton, Killeen and the nearby towns</Link> are on the list too.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Ice maker" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="icemaker_final"
        title="Ready for"
        accent="ice again?"
        cardHeadingLevel="p"
        cardTitle="Book an ice maker repair"
        appliance="refrigerator"
        text={
          <>
            For ice maker repair in Temple, TX, note which stop seems to be failing and whether the water dispenser still works, then call{' '}
            <PhoneLink location="icemaker_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book an ice maker repair
            </Link>
            . Every stop you&apos;ve already ruled out shortens the search.
          </>
        }
      />
    </>
  );
}

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

/** Garbage disposal repair page (source: content/disposal-v1.md, Nov 2026). No prices on this page. */
const path = '/garbage-disposal-repair-temple-tx/';
const description =
  'Garbage disposal repair in Temple, TX: what humming, silence or grinding means, safe fixes to try and when a leak means replacement. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Garbage Disposal Repair Temple TX | Jammed or Leaking?',
  description,
  path,
});

const sounds: [string, string, string][] = [
  [
    'A steady hum, but nothing spins',
    'The flywheel is jammed by something stuck between it and the grinding ring',
    'Power off, then turn the hex socket on the bottom with an Allen wrench to free it',
  ],
  [
    'Nothing at all when you flip the switch',
    "The motor's overload tripped, or the switch, outlet, GFCI or breaker cut power",
    'Press the red reset button on the bottom, then check the GFCI and breaker',
  ],
  [
    'Metal grinding or rattling',
    'Something hard is inside: a utensil, a bottle cap, a fruit pit',
    'Power off, then look in with a flashlight and pull it out with tongs or pliers',
  ],
  [
    'It runs fine, but the sink drains slowly',
    'The clog is past the disposal, in the trap or the drain line',
    'Run plenty of cold water; if it stays slow, the drain needs attention',
  ],
  [
    'Loud vibration or banging',
    'The unit has come loose from its mount, or a part inside has broken',
    'Power off and check whether the disposal moves by hand under the sink',
  ],
];

const leaks: [string, string][] = [
  [
    'At the top,',
    "where the disposal meets the sink, the sink flange seal or its plumber's putty has failed, or the mounting ring has loosened. That's usually fixable by resealing the flange.",
  ],
  [
    'On the side,',
    'look at the two connections: the dishwasher drain hose and the drain pipe that carries water to the trap. A loose hose clamp or a worn gasket at either one is a simple repair.',
  ],
  [
    'From the bottom,',
    "water is coming from inside the unit. The internal seals have worn through, and once that happens the motor isn't far behind. A disposal leaking from the bottom almost always means replacement.",
  ],
];

const faqs: Faq[] = [
  {
    q: 'What should never go down a disposal?',
    a: "Grease and oil, fibrous scraps like celery and corn husks, potato peels in large amounts, coffee grounds, eggshells in bulk, bones bigger than small chicken bones, pasta and rice that swell, and anything that isn't food. Small amounts with plenty of cold water are the safest habit.",
  },
  {
    q: 'Is it safe to put ice in a disposal?',
    a: "Yes, a few cubes now and then are fine. Grinding ice can knock loose small bits of buildup inside the chamber. It won't sharpen anything, though, since disposals use blunt impeller lugs rather than blades. Run cold water with it as usual.",
  },
  {
    q: 'How long do garbage disposals last?',
    a: "Many last around a decade, though it varies with the unit, how hard it works and what goes down it. A leak from the bottom, or a motor that keeps tripping its reset button, is usually the sign it's near the end of its life.",
  },
  {
    q: 'Should I run hot or cold water with the disposal?',
    a: 'Cold. Cold water keeps grease solid so the disposal can chop it and send it down, instead of melting it into a film that sticks to the pipes further along. Run it before, during and for a few seconds after grinding.',
  },
  {
    q: 'Why does my disposal smell bad?',
    a: 'Food bits stuck under the splash guard and in the chamber start to rot. Scrub the underside of the rubber splash guard, grind a few ice cubes with citrus peel, and run cold water for a while after each use. Skip bleach and chemical cleaners.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';
const th = 'px-4 py-3 font-semibold';

export default function GarbageDisposalRepairPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({ name: `Garbage disposal repair in ${site.city}, ${site.stateAbbr}`, serviceType: 'Garbage disposal repair', description, path })}
      />

      <PageHero crumbs={[{ name: 'Garbage Disposal Repair', path }]} title={`Garbage Disposal Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="flex gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4 text-[16px] leading-relaxed text-white">
          <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-flame-glow" strokeWidth={2} />
          <span>
            First, the rule that matters most: cut the power before anything goes near the opening, and never put a hand inside, even with the
            switch off.
          </span>
        </p>
        <p className="mt-6 text-lg leading-relaxed text-white/75 md:text-xl">
          With that settled, listen. A disposal that hums, one that stays silent and one that grinds are three different problems, and the sound
          usually tells you whether garbage disposal repair in Temple, TX is a five-minute fix you can do yourself or a call to{' '}
          <PhoneLink location="disposal_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="disposal_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="sound-heading">
        <SectionHeading id="sound-heading" eyebrow="Listen first" title="What is the disposal" accent="telling you?" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[680px] text-left text-[15px]">
            <caption className="sr-only">Garbage disposal sounds, what they usually mean and what you can safely try</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>What you hear</th>
                <th scope="col" className={th}>What it usually means</th>
                <th scope="col" className={th}>What you can safely try</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {sounds.map(([hear, means, tryIt]) => (
                <tr key={hear} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{hear}</th>
                  <td className="px-4 py-3 text-ink-body">{means}</td>
                  <td className="px-4 py-3 text-ink-body">{tryIt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="white" labelledBy="hum-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="hum-heading" eyebrow="Humming" title="Why is my garbage disposal" accent="humming?" />
          <div className="prose-copy">
            <p>
              A hum with no spin means the motor is getting power but can&apos;t turn. Almost always, something has wedged the flywheel: a chunk
              of bone, a cherry pit, a sliver of glass or a shrimp tail. Left on, the motor heats up until its overload trips and it goes quiet.
            </p>
            <p>
              To clear a jammed garbage disposal, switch it off at the wall and, if it plugs in under the sink, unplug it. Most disposals have a
              small hex socket in the center of the bottom. Fit an Allen wrench (many units come with one) and work it back and forth until it
              turns a full circle freely. Pull out whatever was stuck, using tongs. Then let the motor cool for a few minutes, press the red reset
              button on the bottom, restore power and run cold water before switching it on.
            </p>
            <p>
              If it still hums once the flywheel turns freely, the disposal is not working because the motor itself is failing. On most units
              that points toward replacement rather than repair.
            </p>
            <p>
              Skip chemical drain cleaners entirely. They sit in the disposal chamber, can damage the seals and metal parts, and make the job
              dangerous for whoever opens it up next.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="leak-heading">
        <SectionHeading
          id="leak-heading"
          eyebrow="Leaks"
          title="Garbage disposal leaking:"
          accent="top, side or bottom?"
          intro="Dry the whole unit with a paper towel, fill the sink partway, then let it drain while you watch from below with a flashlight. Where the water appears tells you what's next."
        />
        <div className="max-w-3xl space-y-4 text-[17px] leading-relaxed text-ink-body">
          {leaks.map(([lead, rest]) => (
            <p key={lead}>
              <strong className="font-semibold text-ink">{lead}</strong> {rest}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="ink" labelledBy="who-heading">
        <SectionHeading id="who-heading" eyebrow="Who to call" title="Appliance tech or plumber?" accent="An honest answer" dark />
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-display text-lg font-bold text-white">Usually an appliance repair call</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-white/75">
              A jammed or humming disposal, one that won&apos;t start, electrical faults in the switch or the unit, a leak at the unit itself, and
              replacing the disposal with a new one.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-display text-lg font-bold text-white">Usually a plumber&apos;s job</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-white/75">
              A clog further down the drain line, problems with the trap and pipes in the wall, new plumbing where none existed, or moving the
              drain.
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-white/70">
          Some calls sit in between, so describe what&apos;s happening when you call and ask whether it&apos;s work a technician handles. If
          you&apos;re replacing the unit, ask whether installation is included and whether the old one gets hauled away.
        </p>
      </Section>

      <Section labelledBy="dish-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="dish-heading" eyebrow="Dishwasher" title="Where the dishwasher" accent="comes in" />
          <div className="prose-copy">
            <p>
              Most dishwashers drain through the disposal, so the two affect each other. A disposal packed with food waste, or a clog in its
              drain outlet, can leave the dishwasher with nowhere to send its water, and the dishwasher ends up holding dirty water at the end of
              the cycle.
            </p>
            <p>
              A brand-new disposal brings a special case. Its dishwasher inlet comes sealed with a knockout plug, which has to be punched out
              from inside before the dishwasher hose goes on. If a dishwasher stops draining the day a new disposal is installed, a plug left in
              place is the first suspect, and <Link href="/dishwasher-repair-temple-tx/">a dishwasher that won&apos;t drain</Link> has a few
              other usual causes worth ruling out. There are also some{' '}
              <Link href="/blog/dishwasher-drainage-problems/">dishwasher drainage checks you can do yourself</Link> before calling, like looking
              at the filter and the high loop in the drain hose.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="replace-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="replace-heading" eyebrow="Repair or replace" title="Repair or replace" accent="the disposal?" />
          <div className="prose-copy">
            <p>
              Disposals are simpler than most appliances, and that cuts both ways. Jams, tripped overloads, a failed switch and loose connections
              are quick fixes. A worn-out motor or a failed internal seal usually isn&apos;t worth repairing, because a new unit costs about the
              same as rebuilding the old one, the same logic behind most{' '}
              <Link href="/blog/repair-or-replace-appliance/">repair or replace decisions</Link> on bigger appliances.
            </p>
            <p>
              A few things to know before garbage disposal replacement in Temple. Disposals are either plug-in, with a cord to an outlet under the
              sink, or hardwired straight to the household wiring, and a hardwired swap takes a bit more work. Homes on septic systems should
              look for a unit labeled septic-safe and go easy on what goes down it. And a bigger motor grinds tougher scraps but needs space
              under the sink.
            </p>
            <p>
              The price depends on whether it&apos;s a repair or a new unit, which unit you choose, and how it&apos;s wired. Call{' '}
              <PhoneLink location="disposal_cost" className={flame} /> and describe the problem; find out what the visit costs and whether the
              quoted price includes installation, all before anything is unbolted.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="local-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="local-heading" eyebrow="Temple kitchens" title="Garbage disposal repair in Temple, TX:" accent="older kitchens and rentals" />
          <div className="prose-copy">
            <p>
              Older kitchens near Downtown Temple sometimes have drain lines and connections from earlier remodels that weren&apos;t built with
              a disposal in mind. A new unit can need a different drain height or a new trap, which is where an appliance swap can turn into
              plumbing work, so mention the age of the kitchen when you call.
            </p>
            <p>
              Tenants in the apartments and duplexes around Temple College and the medical center should clear a disposal repair with the
              landlord first, since the lease usually settles who books and pays. Disposal calls come from every Temple ZIP code, 76501, 76502
              and 76504, and <Link href={routes.areas}>Belton, Killeen, Salado and the other towns nearby</Link> too.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Garbage disposal" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="disposal_final"
        title="Got a disposal that"
        accent="won't cooperate?"
        cardHeadingLevel="p"
        cardTitle="Book a disposal repair"
        appliance="disposal"
        text={
          <>
            For garbage disposal repair in Temple, TX, note what it sounds like and where any water shows up, then call{' '}
            <PhoneLink location="disposal_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              schedule a disposal repair
            </Link>
            . The sound and the leak point will tell the technician most of what they need to know.
          </>
        }
      />
    </>
  );
}

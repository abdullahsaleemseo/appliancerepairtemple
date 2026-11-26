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

/** Oven, stove and range repair page (source: content/oven-v1.md, Nov 2026). Replaces the generic service template for this slug. */
const path = '/oven-stove-repair-temple-tx/';
const description =
  "Oven repair in Temple, TX for gas and electric ranges and wall ovens: no heat, burners that won't light, stuck self-clean locks. Call (254) 615-2088.";

export const metadata = pageMetadata({
  title: 'Oven & Stove Repair Temple TX | Gas and Electric Ranges',
  description,
  path,
});

const anatomy: [string, string, string, string][] = [
  [
    'Cooktop burner',
    'Burner head and cap, lit by a spark igniter',
    'Coil element in a receptacle, or a radiant element under glass',
    "Gas: clicks but won't light. Electric: one burner stays cold",
  ],
  ['Burner control', 'Gas valve and spark switch', 'Infinite switch that cycles the element', "Burner stuck on high, or heat that won't adjust"],
  ['Bake heat', 'Bake igniter (glow bar) and gas valve', 'Bake element, exposed or hidden under the oven floor', "Oven won't heat or takes far too long"],
  ['Broil heat', 'Broil burner at the top, on many models', 'Broil element at the top', "Broil works but bake doesn't, or the reverse"],
  ['Temperature sensor', 'Thin metal probe inside the oven cavity', 'Same', 'Oven runs hot, runs cold or shows a code'],
  ['Controls and clock', 'Control board, keypad and relays', 'Same', "Dead display, error codes, buttons that don't respond"],
];

const faqs: Faq[] = [
  {
    q: 'Is a little smoke normal when I use a new oven?',
    a: 'Yes, for the first few uses. Manufacturing oils burn off the elements and insulation, which can smoke and smell. Run the oven empty at a high temperature for an hour with the windows open. Smoke that continues after several uses, or comes from one spot, should be checked.',
  },
  {
    q: 'Why does my gas oven make a whoosh or a small boom when it lights?',
    a: 'A soft whoosh as the gas lights is normal. A loud boom usually means gas built up before lighting, often because the igniter is weak and slow. Stop using the oven and have the igniter checked, since delayed ignition gets worse over time.',
  },
  {
    q: 'Can I replace an oven bake element myself?',
    a: "On many electric ovens with an exposed element, yes: turn off the breaker, remove two screws, pull the element forward and disconnect it. Hidden elements under the oven floor take more disassembly. Never work on a gas oven's igniter or valve without shutting off the gas and power.",
  },
  {
    q: "Why does my oven light or clock work but the oven won't heat?",
    a: 'On an electric range, half of the double breaker may have tripped, which keeps the clock on but cuts the 240 volts the elements need. On a gas range, the igniter or valve is the usual cause. Reset the breaker fully before calling.',
  },
  {
    q: 'Is it safe to use the cooktop if the oven is broken?',
    a: 'Usually, yes, as long as there\'s no gas smell, burning smell or sparking. The cooktop and oven often run on separate parts. If the problem involves the control board or wiring, though, ask before using either part of the range.',
  },
  {
    q: 'What does a blinking clock on my oven mean?',
    a: 'Usually a power interruption, such as a brief outage or a tripped breaker. Reset the clock and it should stop. If the clock keeps resetting by itself, or other functions act up with it, the control board or a loose connection may need a look.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';
const th = 'px-4 py-3 font-semibold';
const h3 = 'font-display text-2xl font-bold tracking-[-0.02em] text-ink';

export default function OvenStoveRepairPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({ name: `Oven, stove and range repair in ${site.city}, ${site.stateAbbr}`, serviceType: 'Oven and range repair', description, path })}
      />

      <PageHero crumbs={[{ name: 'Oven & Stove Repair', path }]} title={`Oven, Stove & Range Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="flex gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4 text-[16px] leading-relaxed text-white">
          <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-flame-glow" strokeWidth={2} />
          <span>
            If you smell gas, stop: don&apos;t turn anything on or off, get everyone outside, and phone your gas utility or 911 once you&apos;re
            clear of the house. That&apos;s the one range problem that can&apos;t wait for a technician.
          </span>
        </p>
        <p className="mt-6 text-lg leading-relaxed text-white/75 md:text-xl">
          The good news is that it&apos;s rare. Most oven repair in Temple, TX comes down to an electrical part or an ignition part, not a gas leak,
          and the range usually tells you which part through what it does. Find your problem below, then call{' '}
          <PhoneLink location="oven_intro" className={white} /> with the brand and whether it&apos;s gas or electric.
        </p>
        <nav aria-label="Jump to your problem" className="mt-6 flex flex-wrap items-center gap-2 text-[15px]">
          <span className="font-semibold text-white">Jump to your problem:</span>
          {[
            ['#cooktop', 'Cooktop'],
            ['#oven', 'Oven'],
            ['#self-clean', 'Self-clean and door lock'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 font-medium text-white hover:bg-white/[0.12]">
              {label}
            </a>
          ))}
        </nav>
        <div className="mt-8">
          <CtaRow location="oven_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="anatomy-heading">
        <SectionHeading id="anatomy-heading" eyebrow="Range anatomy" title="Know your range:" accent="the parts that fail" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[760px] text-left text-[15px]">
            <caption className="sr-only">Range parts, gas and electric versions, and their typical failures</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Part</th>
                <th scope="col" className={th}>Gas version</th>
                <th scope="col" className={th}>Electric version</th>
                <th scope="col" className={th}>Typical failure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {anatomy.map(([part, gas, elec, fail]) => (
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
        <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-ink-body">
          A technician usually starts with the symptom and the fuel. On a gas oven that won&apos;t heat, the first look is at the bake igniter:
          whether it glows, and how long it takes. On an electric range, the element gets a continuity test and the outlet gets checked for both legs
          of its 240-volt supply, since one tripped side of the breaker can leave the clock lit and the oven cold. The temperature sensor is measured
          against its expected resistance, and the control is checked for codes before any part is condemned.
        </p>
      </Section>

      <Section tone="white" id="cooktop" labelledBy="cooktop-heading">
        <SectionHeading id="cooktop-heading" eyebrow="Cooktop" title="Cooktop" accent="problems" />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className={h3}>Gas stove won&apos;t light</h3>
            <div className="prose-copy mt-4">
              <p>
                A burner that clicks but won&apos;t catch is a very common gas cooktop call, and it&apos;s often not a broken part. After a spill or
                a cleaning, the burner cap may sit crooked, or the burner head may still be wet. Lift the cap, dry everything, set the cap back so it
                sits flat and centered, and try again. Food packed into the small holes around the burner head blocks the flame too; a straight pin
                clears them.
              </p>
              <p>
                If the clicking never stops even with the knob off, the spark switch behind that knob is usually wet or worn. If one burner
                won&apos;t click at all while the others do, the spark electrode or its wire is the suspect. Gas stove repair in Temple is mostly
                these small parts, plus the occasional gas valve, and stove repair in Temple, TX on electric cooktops is just as often a single
                switch or element.
              </p>
            </div>
          </div>
          <div>
            <h3 className={h3}>Electric burner not working</h3>
            <div className="prose-copy mt-4">
              <p>
                With a coil cooktop, swap the cold element into a working burner&apos;s spot. If it heats there, the element is fine and the
                receptacle it plugs into, or the infinite switch behind the knob, is the problem. Receptacles burn out when an element sits loose for
                a long time. On a smooth glass top, the radiant element sits under the glass, so a cold zone usually means the element or its switch
                has failed; a cracked glass top is a separate and bigger repair. There&apos;s a step-by-step for{' '}
                <Link href="/blog/stove-burner-not-working/">a stove burner that&apos;s stopped working</Link> that covers the swap test and the
                checks for gas burners. Cooktop repair on either fuel is usually a single part.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="oven" labelledBy="oven-heading">
        <SectionHeading id="oven-heading" eyebrow="Oven" title="Oven" accent="problems" />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className={h3}>Why is my oven not heating?</h3>
            <div className="prose-copy mt-4">
              <p>
                Gas ovens usually point to the bake igniter. It&apos;s a glow bar that has to draw enough current to open the gas valve. As it ages,
                it still glows orange but no longer draws enough, so the valve never opens and the oven sits cold or takes forever to heat. Watch
                through the window or the broiler drawer: a glow with no flame after a minute or so points straight to a weak igniter.
              </p>
              <p>
                An electric oven&apos;s failed bake element often shows a break, blister or bright spot when it fails, though many newer ovens hide it
                under the floor panel. <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool ovens</Link> are a common example of that
                hidden design, so an electric oven repair there starts with a meter rather than a look. If broil heats but bake doesn&apos;t, or the
                other way around, the element that isn&apos;t working is your answer.
              </p>
            </div>
          </div>
          <div>
            <h3 className={h3}>Oven temperature off?</h3>
            <div className="prose-copy mt-4">
              <p>
                Put an inexpensive oven thermometer on the middle rack, set the oven to 350°F and let it cycle for at least half an hour. If it reads
                within about 10 to 15 degrees, the oven is in normal range. If it&apos;s consistently off by more, many ovens have a calibration
                setting in the menu that offsets the temperature by a set number of degrees; the manual explains how to use it.
              </p>
              <p>
                If the error is large or erratic, the temperature sensor is the usual suspect, and it&apos;s a straightforward part to swap. Some
                ranges report a failed sensor as a code. GE ranges, for example, use F-codes for sensor and control faults, and{' '}
                <Link href="/brands/ge-appliance-repair-temple-tx/">GE&apos;s oven codes</Link> point to the sensor more often than to the board.{' '}
                <Link href="/brands/frigidaire-appliance-repair-temple-tx/">Frigidaire ranges</Link> show F10 for an oven running hotter than it
                should on many models, so cut power to the range until it&apos;s looked at. Codes differ between models, so check yours against the
                manual.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 max-w-3xl">
          <h3 className={h3}>Wall ovens and double ovens</h3>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-body">
            Wall ovens have the same heating parts as a range, but reaching them means sliding the oven out of the cabinet, which takes two people
            and some care with the wiring. Double ovens share one control board between both cavities, so a fault can show up in one oven or both.
            Wall oven repair is common and usually worth it, since replacing a built-in oven often means matching the cabinet cutout.
          </p>
        </div>
      </Section>

      <Section tone="ink" id="self-clean" labelledBy="clean-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="clean-heading" eyebrow="Self-clean and door lock" title="Oven door won't unlock" accent="after self-clean" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              The door locks during self-clean because the oven gets far hotter than normal cooking, and it stays locked until the oven has cooled.
              First, wait. Give it a couple of hours after the cycle ends. If it&apos;s still locked when fully cool, turn the range off at the
              breaker for a minute or two and back on, which resets the lock on many models.
            </p>
            <p>
              Never force the latch or pry the door. That bends the lock mechanism and can damage the hinges, turning a reset into a repair. If the
              lock motor or switch has failed, a technician can release it and replace the part.
            </p>
            <p>
              Self-clean&apos;s extreme heat is also hard on the oven itself. It can blow a thermal fuse, leaving the oven dead, or stress the control
              board and door lock. That&apos;s worth remembering before the holidays.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="holiday-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="holiday-heading" eyebrow="Holiday cooking" title="Oven repair in Temple, TX:" accent="plan around the holidays" />
          <div className="prose-copy">
            <p>
              Thanksgiving and Christmas are when ovens work hardest, and when a failure hurts most. One habit makes a big difference: don&apos;t run
              self-clean in the days right before a big cooking day. If the thermal fuse or the lock gives out during the cycle, the oven may be down
              right when you need it. Clean it a few weeks ahead, or wipe it by hand and save self-clean for after the holiday.
            </p>
            <p>
              If your oven has been acting up, call early in the season rather than the week of. Schedules fill up and some parts have to be ordered,
              so a range that&apos;s been slow to heat since October is worth looking at in early November. Calls come from across Temple&apos;s
              76501, 76502 and 76504 ZIP codes, and from{' '}
              <Link href={routes.areas}>Belton, Killeen and the smaller towns along I-35 and US-190</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" eyebrow="Repair or replace" title="Is it worth repairing" accent="an oven or range?" />
          <div className="prose-copy">
            <p>
              Most range repairs are worth it. Igniters, bake and broil elements, temperature sensors, spark switches, infinite switches and door lock
              parts are common, and they cost a fraction of a new range. Gas ranges in particular tend to last a long time once the igniter is
              replaced. The main exception is an aging range that needs its main control board, since that one part can approach the price of a basic
              new range; ask for the price before deciding. A cracked glass cooktop on an older unit falls in the same category, and for range repair in
              Temple the <Link href="/blog/repair-or-replace-appliance/">repair or replace math</Link> usually comes down to that one part and the
              range&apos;s age.
            </p>
            <p>
              Call <PhoneLink location="oven_worth" className={flame} /> with the brand, the fuel and what the range is doing, and ask what the visit
              costs and what the repair will come to before any part is replaced. Some ranges with electronic controls, Samsung slide-ins among them,
              show a code that narrows it down, and <Link href="/brands/samsung-appliance-repair-temple-tx/">Samsung range codes</Link> are worth
              reading out on the call.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Oven and stove repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="oven_final"
        title="Cooking again"
        accent="soon"
        cardHeadingLevel="p"
        cardTitle="Book an oven or stove repair"
        appliance="range"
        text={
          <>
            Before calling about oven repair in Temple, TX, jot down the fuel type, the part that&apos;s misbehaving and any code on the display, then
            dial <PhoneLink location="oven_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book an oven or stove repair
            </Link>
            . Gas or electric is the first question, so have that answer ready.
          </>
        }
      />
    </>
  );
}

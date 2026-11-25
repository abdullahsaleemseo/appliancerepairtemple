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

/** Same-day and emergency appliance repair page (source: content/same-day-v1.md, Nov 2026). */
const path = routes.cityPage;
const description =
  'Need same-day appliance repair in Temple, TX? See what counts as an emergency, protect food and floors, then call (254) 615-2088 to check today.';

export const metadata = pageMetadata({
  title: 'Same-Day & Emergency Appliance Repair Temple TX',
  description,
  path,
});

const triage: [string, string, string][] = [
  ['Gas smell near the range, cooktop or dryer', 'Yes, immediately', 'Get everyone out, leave switches alone, then phone the gas company or 911 from outside'],
  ['Burning smell, smoke or sparks', 'Yes', 'Cut power at the breaker panel and leave it off'],
  ['Water spreading from the washer or dishwasher', 'Yes', 'Close the supply valve, cut power, soak up the water'],
  ['Refrigerator warm with food inside', 'Yes, within hours', 'Keep the doors shut and check a thermometer'],
  ['Freezer thawing', 'Yes, within a day', "Keep it closed; don't check it every hour"],
  ['Oven or range dead on a big cooking day', 'Soon', 'Check the breaker, then call early in the day'],
  ['Dryer tumbling but not heating', 'Can wait', 'Line-dry or use a laundromat for now'],
  ['Ice maker stopped', 'No', 'Use trays and book a regular visit'],
];

const questions = [
  'Is there a visit or diagnostic fee, and does it go toward the repair?',
  'Is there an extra charge for evening, weekend or holiday visits?',
  'Will the price be confirmed before the technician starts work?',
  'What warranty comes with the part and the labor?',
  'What arrival window can you give me, and will someone call if it changes?',
  'Do you work on my brand and this type of appliance?',
  'Is my town inside your usual service area?',
];

const faqs: Faq[] = [
  {
    q: 'Should I unplug the refrigerator while I wait for the technician?',
    a: "Usually not. Leave it plugged in unless it smells burnt, sparks or keeps tripping the breaker. A running refrigerator shows the technician which parts work and which don't. Keep the doors closed and let a thermometer do the checking.",
  },
  {
    q: 'Is it safe to run the dishwasher again after it leaked once?',
    a: 'Not until the cause is known. One leak can come from the wrong detergent or a flipped bowl blocking the spray arm, but a failing pump, hose or door seal will leak again, sometimes under the floor. If you must run it, use a short cycle and stay nearby with towels down.',
  },
  {
    q: 'Can someone else let the technician in?',
    a: 'Yes, as long as an adult can meet the technician and show where the appliance is. Leave them the model number and a note on what happened. Tell the scheduler who will be home so the arrival call goes to the right phone.',
  },
  {
    q: 'What should I do with food from a warm refrigerator?',
    a: 'Throw out meat, poultry, seafood, milk, eggs and leftovers that sat above 40°F for more than 2 hours, per USDA guidance. Frozen food that still has ice crystals or reads 40°F or below can be refrozen. When in doubt, throw it out.',
  },
];

const inline = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';

export default function SameDayPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Same-day appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Same-day and emergency appliance repair',
          description,
          path,
        })}
      />

      <PageHero crumbs={[{ name: 'Same-Day Appliance Repair', path }]} title={`Same-Day Appliance Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          It&apos;s 9 at night and the milk is warm. Or your socks soak up a puddle in the laundry room that wasn&apos;t there an hour
          ago. When that happens, the quickest route to same-day appliance repair in Temple, TX is a phone call: dial{' '}
          <PhoneLink location="sameday_intro" className="font-semibold text-white underline decoration-white/40 underline-offset-4" />, ask
          what&apos;s open today, and have the brand, the model number and a one-line description of the problem ready. First, take two
          minutes with the table below: a few problems need action this minute, and plenty can wait until morning.
        </p>
        <div className="mt-8">
          <CtaRow location="sameday_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="triage-heading">
        <SectionHeading
          id="triage-heading"
          eyebrow="Emergency check"
          title="Is this an emergency,"
          accent="or can it wait until morning?"
          intro="What counts as an appliance emergency? Anything that puts people, the house or a load of food at risk. Most calls for emergency appliance repair in Temple, TX fit one of these rows."
        />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <caption className="sr-only">Which appliance problems need action now and what to do first</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Situation</th>
                <th scope="col" className="px-4 py-3 font-semibold">Act now?</th>
                <th scope="col" className="px-4 py-3 font-semibold">What to do first</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {triage.map(([situation, act, first]) => (
                <tr key={situation} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{situation}</th>
                  <td className="px-4 py-3 font-medium text-ink">{act}</td>
                  <td className="px-4 py-3 text-ink-body">{first}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-ink-body">
          One honest opinion from the repair side: a refrigerator that hums, rattles or clicks but still holds 40°F or below is not an
          emergency. It needs a visit soon, not a midnight scramble.
        </p>
      </Section>

      <Section tone="white" labelledBy="first-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="first-heading"
            eyebrow="Right now"
            title="What to do in the"
            accent="first 15 minutes"
            intro="These steps buy time without opening a sealed system, bypassing a safety switch or touching a gas line."
          />
          <div>
            <ol className="grid gap-3">
              <Step n={1} title="Refrigerator or freezer warming.">
                Keep the doors closed. Put an appliance thermometer on a middle shelf; the fresh-food side should read 40°F or lower, the
                freezer 0°F.
              </Step>
              <Step n={2} title="Washer leaking.">
                Turn the hot and cold valves on the wall behind the machine clockwise until they stop. Unplug it if the plug is dry and easy
                to reach; otherwise switch off its breaker. Then towels or a wet-dry vac. The{' '}
                <Link href="/washer-repair-temple-tx/" className={inline}>washer leak and flood repair</Link> page explains the usual causes.
              </Step>
              <Step n={3} title="Dishwasher leaking.">
                Switch off its breaker, close the small valve under the sink and keep the door shut so the water inside stays put.
              </Step>
              <Step n={4} title="Oven or range dead.">
                Look at the breaker panel first. An electric range runs on a double breaker, and when only half of it trips, the clock can
                glow while the oven stays cold. On a gas range, a gas smell overrides everything else; get out and call from outside. More
                on <Link href="/oven-stove-repair-temple-tx/" className={inline}>gas range and oven repair</Link>.
              </Step>
              <Step n={5} title="Anything smoking or sparking.">
                Kill the power at the panel rather than at the appliance&apos;s own switch, and leave the cabinet closed.
              </Step>
            </ol>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-body">
              A tripped breaker usually rests in the middle, between ON and OFF. Push it fully to OFF, then back to ON. If it snaps off
              again right away, leave it off. Kitchen, laundry and garage outlets may also have a GFCI reset button that pops out.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="today-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="today-heading" eyebrow="Today's schedule" title="Can I get appliance repair" accent="today in Temple?" />
          <div className="prose-copy">
            <p>
              Sometimes, and calling <PhoneLink location="sameday_today" className={inline} /> is the only honest way to find out.
              Whether a technician can come out the same day depends on when you call, where you are and whether the likely part is one
              technicians usually carry.
            </p>
            <p>
              Time of day matters most. A call at 8 a.m. leaves a whole schedule to work with; a call at 4 p.m. leaves very little.
              Location comes next. Homes in Temple&apos;s 76501, 76502 and 76504 ZIPs sit close together, while Belton and Salado are a
              drive down I-35, where afternoon traffic can slow a short trip, so ask for a realistic window. Then the part: igniters, fans
              and belts are common, while a control board for a newer model often has to be ordered. Reading the model number and any
              error code off the appliance during the call helps match the part.
            </p>
            <p>
              Heat changes the math too. In July and August, a kitchen in the 80s pushes a struggling refrigerator past 40°F much faster
              than in March, and a garage freezer can lose the fight by mid-afternoon. Mention that on the call. Night or rotating shift
              workers at the Baylor Scott &amp; White medical center should say so and ask for a window that doesn&apos;t cut into sleep.
              Urgent appliance repair across Bell County goes smoother when the scheduler knows the whole picture. For visits that can
              wait, the main <Link href={routes.home}>appliance repair in Temple</Link> page covers every appliance.
            </p>
            <h3>If it breaks on a weekend or a holiday</h3>
            <p>
              Searching for weekend appliance repair in Temple usually means the washer died on a Saturday with a week of laundry
              waiting. Call and ask how weekend scheduling works, and whether any extra charge applies, before you book. Holidays bring
              their own risk: an oven that sits idle most weeks may run six straight hours on Thanksgiving. Heat it to 350°F for twenty
              minutes a few days ahead, while there&apos;s still time to get it looked at, and keep a grill or slow cooker in mind as a
              backup.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="ask-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            id="ask-heading"
            eyebrow="Keep by the phone"
            title="Before you book same-day appliance repair,"
            accent="ask these questions"
            intro="Urgent calls move fast, which is exactly when details get skipped. Keep this list by the phone."
            dark
          />
          <div>
            <ul className="grid gap-3">
              {questions.map((q) => (
                <li key={q} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[16.5px] leading-relaxed text-white/85">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-mint-bright" strokeWidth={2.4} />
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[17px] leading-relaxed text-white/70">
              Write the answers down, in case the repair needs a second visit for a part.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="night-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="night-heading" eyebrow="After hours" title="What should you do when the fridge" accent="stops working at night?" />
          <div className="prose-copy">
            <p>
              If you&apos;re searching for 24 hour appliance repair in Temple because the refrigerator quit after dinner, the job tonight
              is simple: keep the cold inside until a technician can look at it. According to the USDA, a refrigerator that stays closed
              keeps food safe for about 4 hours without power or cooling. A full freezer holds its temperature for about 48 hours, and a
              half-full one for about 24.
            </p>
            <p>
              So stop opening the doors. If the freezer is still cold, move raw meat, milk and leftovers in there; an ice chest with
              bagged ice handles the rest. Check the outlet and breaker once, then resist unplugging and replugging the refrigerator; a
              fault that vanishes for an hour usually comes back.
            </p>
            <p>
              In the morning, read the thermometer before opening anything. Perishables that sat above 40°F for more than 2 hours should
              go, per USDA guidance. Then call and say how long the refrigerator has been warm; that tells the scheduler how urgent it is.
              The <Link href="/refrigerator-repair-temple-tx/">refrigerator repair in Temple</Link> page covers the usual causes once the
              immediate crisis is over.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions while you" accent="wait." />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="sameday_final"
        title="When it"
        accent="can't wait."
        cardHeadingLevel="p"
        cardTitle="Check today's schedule"
        text={
          <>
            A breakdown at the worst possible moment is easier to handle with a plan and a phone number. Call Appliance Repair Temple at{' '}
            <PhoneLink location="sameday_final_text" className="font-semibold text-white underline decoration-white/40 underline-offset-4" /> or{' '}
            <Link href={routes.request} className="font-semibold text-white underline decoration-white/40 underline-offset-4">
              schedule an urgent repair visit
            </Link>
            , and ask whether same-day appliance repair in Temple, TX is possible for your situation.
          </>
        }
      />
    </>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 rounded-2xl border border-sand bg-canvas p-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[15px] font-bold text-white">{n}</span>
      <p className="text-[16.5px] leading-relaxed text-ink-body">
        <strong className="font-semibold text-ink">{title}</strong> {children}
      </p>
    </li>
  );
}

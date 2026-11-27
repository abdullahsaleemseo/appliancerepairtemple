import Link from 'next/link';
import { routes } from '@/config/site';
import type { Faq } from '@/content/types';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';
import { MidCta } from '@/components/MidCta';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

/** Harker Heights area page (source: content/area-harker-heights-v1.md, Nov 2026). Replaces the generic area template for this slug. */
const path = '/service-areas/harker-heights-tx/';
const description =
  'Appliance repair in Harker Heights, TX 76548 for newer fridges, washers and dryers, with app codes and warranty questions sorted out. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Harker Heights TX | Kitchen & Laundry',
  description,
  path,
});

const flow: [string, string][] = [
  ['water is on the floor,', 'close the supply valve behind the appliance before anything else. For a dishwasher, that valve is usually under the kitchen sink.'],
  ['the appliance is less than a year old,', "find the receipt and check the manufacturer's warranty. A covered repair goes through the maker."],
  ['you bought an extended plan from the store,', 'check that plan before booking a paid visit.'],
  ["there's a code on the display or an alert in the app,", 'write it down or take a screenshot, exactly as shown, letters and dashes included.'],
  ['the app shows the machine offline but it runs fine,', "that's a Wi-Fi or router problem, not a broken appliance. Reconnect it in the app."],
  ['the display is blank,', 'check the breaker and, for kitchen and laundry outlets, any GFCI outlet nearby that may have tripped.'],
  ['none of that applies, or the warranty has ended,', "it's time for a technician."],
];

const faqs: Faq[] = [
  {
    q: 'Is 76548 in the service area?',
    a: 'Yes. All of 76548 is covered, from the Market Heights shopping area to the homes near Stillhouse Hollow Lake. Give your street address when you call so the visit can be placed on the right part of the route.',
  },
  {
    q: 'My fridge sent an alert to my phone. Should I call right away?',
    a: 'Read the alert first. Door-open, filter and power-outage alerts usually need no repair. An alert that names a temperature problem or an error code is worth a call, especially if the fridge feels warm. Screenshot it before it clears.',
  },
  {
    q: 'The app says my washer has an error, but the display is blank. What does that mean?',
    a: 'Often the washer lost power mid-cycle and the app is showing the last error it received. Check the breaker and the outlet, then try a short rinse cycle. If it powers up and shows the code again, write it down and call.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const h3 = 'font-display text-xl font-semibold text-ink';

export default function HarkerHeightsAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Appliance repair in Harker Heights, TX',
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: 'Harker Heights, TX' },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: 'Harker Heights', path },
        ]}
        title="Appliance Repair in Harker Heights, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Harker Heights is in the service area, all of 76548. For appliance repair in Harker Heights, TX, call{' '}
          <PhoneLink location="harkerheights_intro" className={white} />, mention the street and ZIP, and you&apos;ll hear where the schedule stands.
          Before you dial, run through the short decision list below: in a newer home, the first move is often a warranty check or an app screenshot,
          not a repair visit.
        </p>
        <div className="mt-8">
          <CtaRow location="harkerheights_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="newer-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="newer-heading" eyebrow="76548" title="Newer homes," accent="smarter appliances" />
          <div className="prose-copy">
            <p>
              A lot of Harker Heights is newer construction, from the neighborhoods off Indian Trail to the streets running south toward Stillhouse
              Hollow Lake. Newer homes tend to come with newer appliances: French door refrigerators with ice in the door, front-load or
              high-efficiency top-load washers, dryers with moisture sensors, ranges with touch controls. Plenty of them connect to a phone app.
            </p>
            <p>
              That changes the first few minutes of a breakdown. These machines usually tell you something before they quit: a code on the display, an
              alert in the app, a beep pattern. Some are young enough to still be covered by the maker. Using that information well can save a visit,
              or make the one you book a lot shorter.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="flow-heading">
        <SectionHeading
          id="flow-heading"
          eyebrow="Decision flow"
          title="Before you call:"
          accent="a quick decision flow"
          intro="Read down the list and stop at the first line that fits."
        />
        <ol className="grid gap-3">
          {flow.map(([cond, action]) => (
            <li key={cond} className="rounded-2xl border border-sand bg-canvas p-4 text-[16px] leading-relaxed text-ink-body">
              <strong className="font-semibold text-flame">IF</strong> {cond} <strong className="font-semibold text-flame">THEN</strong> {action}
            </li>
          ))}
        </ol>
        <MidCta
          location="harkerheights_midpage"
          before={<>Landed on the last line? Before calling </>}
          after={
            <>
              , gather four things: the brand, a snapshot of the model sticker, the code or app screenshot, and your 76548 street address. With the code
              in hand, the likely part can often be looked up before anyone arrives.
            </>
          }
        />
      </Section>

      <Section labelledBy="code-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="code-heading" eyebrow="Codes and apps" title="What the code and" accent="the app can tell you" />
          <div className="prose-copy">
            <p>
              A code narrows the problem down; it rarely names the exact failed part. A drain code on a front-loader can mean a clogged pump filter you
              can clear yourself in ten minutes, or a pump that has actually died. Look yours up in the{' '}
              <Link href="/appliance-error-code-decoder/">appliance error code decoder</Link> first, and if it points to something simple, try that
              before booking.
            </p>
            <p>
              Samsung and LG show up a lot in newer homes around town, and both brands lean on their apps. The app can show an error history, remind you
              about filters and send a door-open alert, which is useful for a technician to see. What it can&apos;t do is replace a frozen ice maker
              auger or a worn door lock. The quirks of each brand, including the ice maker trouble Samsung owners ask about, are covered in{' '}
              <Link href="/brands/samsung-appliance-repair-temple-tx/">how Samsung refrigerators and washers tend to fail</Link> and in{' '}
              <Link href="/brands/lg-appliance-repair-temple-tx/">LG&apos;s codes and common faults</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="warranty-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="warranty-heading" eyebrow="Warranty" title="Still under warranty?" accent="Start with the maker" />
          <div className="prose-copy">
            <p>
              A refrigerator or washer bought with the house, or replaced in the last year, could still fall inside the maker&apos;s coverage. Check
              the purchase date, or the closing date if it came with the home, and call the maker&apos;s service line first. A builder&apos;s home
              warranty sometimes covers appliances for a short period too, so look through the closing paperwork. After that coverage ends, any
              qualified technician can do the work.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="kitchen-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="kitchen-heading" eyebrow="Common repairs" title="Refrigerators and washers" accent="in Harker Heights homes" />
          <div className="prose-copy">
            <h3 className={h3}>Refrigerators</h3>
            <p>
              On a French door fridge, the trouble often sits in the door: an ice maker that frosts up, a dispenser that won&apos;t pour, a door seal
              that doesn&apos;t close against the cabinet. A warm fresh-food side with a cold freezer usually points to airflow or defrost.
              Refrigerator repair in Harker Heights homes works through{' '}
              <Link href="/refrigerator-repair-temple-tx/">the usual refrigerator cooling checks</Link> in order: coils, fans, then defrost and
              controls.
            </p>
            <h3 className={`mt-8 ${h3}`}>Washers and dryers</h3>
            <p>
              Washer repair in Harker Heights is mostly front-load and high-efficiency top-load machines. Clear the drain pump filter, check the door
              boot for a sock, and note the code before calling. For dryer repair, a sensor dryer that ends the cycle with damp clothes often has dirty
              moisture sensor bars, two metal strips inside the drum that a cloth and a little rubbing alcohol can clean.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="sameday-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="sameday-heading" eyebrow="Timing" title="Is there same day appliance repair" accent="in Harker Heights?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Sometimes. Harker Heights sits east of Killeen on US-190 (I-14), roughly twenty miles from Temple, so it&apos;s a drive but not a long
              one. A same-day visit hinges on how full the day&apos;s route already is and whether the fix needs a part that&apos;s carried on the
              truck. How fast a technician can get to Harker Heights is something we answer on the phone, not on a web page, because it changes daily.
              Call in the morning if you can, and say so if water is leaking.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="cost-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cost-heading" eyebrow="Cost" title="What it costs," accent="and what to ask" />
          <div className="prose-copy">
            <p>
              Prices depend on the part and the labor, so get them before any work starts. Ask about the visit fee, whether the repair price is quoted
              once the problem is found, and how long the part takes if it isn&apos;t stocked. For an appliance a few years old, ask whether the repair
              makes more sense than replacing it, and why.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="next-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="next-heading" eyebrow="Neighbors" title="Harker Heights" accent="and its neighbors" />
          <div className="prose-copy">
            <p>
              To the west, <Link href="/service-areas/killeen-tx/">Killeen</Link> is right next door, and east along US-190,{' '}
              <Link href="/service-areas/nolanville-tx/">Nolanville</Link> sits on the way to Belton and Temple. Every town on the list, with ZIP codes
              and routes, is on <Link href={routes.areas}>the Bell County service area map</Link>. Harker Heights appliance repair service is booked the
              same way as in Temple, and the <Link href={routes.home}>Temple appliance repair homepage</Link> covers the full range of appliances.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Harker Heights" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="harkerheights_final"
        title="Have the code ready,"
        accent="then call"
        cardHeadingLevel="p"
        cardTitle="Call about a Harker Heights repair"
        text={
          <>
            For appliance repair in Harker Heights, TX, keep the screenshot or code, the tag photo and your street handy, and call{' '}
            <PhoneLink location="harkerheights_final_text" className={white} />.
          </>
        }
      />
    </>
  );
}

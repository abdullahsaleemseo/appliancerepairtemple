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

/** Holland area page (source: content/area-holland-v1.md, Nov 2026). Replaces the generic area template for this slug. */
const path = '/service-areas/holland-tx/';
const description =
  'Appliance repair in Holland, TX 76534: older homes and newer appliances, dryer and range cords, outlets and gas connectors explained. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Holland TX | Small-Town Kitchen & Laundry',
  description,
  path,
});

const checklist: { item: string; look: string; who: string }[] = [
  {
    item: 'Dryer cord and receptacle',
    look: "The number of slots in the wall outlet behind the dryer. Houses wired before the late 1990s usually have a three-slot dryer receptacle; newer ones have four, because the electrical code changed to require a separate ground. The dryer's cord has to match the outlet, and the bonding strap on the dryer's terminal block is set differently for three-wire and four-wire hookups.",
    who: "An appliance technician can fit the right cord and set the strap; changing the outlet itself, or adding a ground wire, is an electrician's job.",
  },
  {
    item: 'Range cord and receptacle',
    look: 'The same three-slot or four-slot question at the range outlet, plus scorch marks or a loose fit.',
    who: 'The cord is appliance work; a burned or loose receptacle goes to an electrician.',
  },
  {
    item: 'Grounded outlets for the fridge and dishwasher',
    look: "Two-prong outlets with no ground hole. Refrigerators and other appliances with three-prong plugs need a grounded outlet; a cheater adapter doesn't provide one.",
    who: 'An electrician.',
  },
  {
    item: 'Gas shutoff valve and connector',
    look: 'A shutoff valve you can reach and turn behind the range or dryer, and the connector between it and the appliance. Old uncoated brass connectors can crack with age and have drawn federal safety warnings; a new appliance deserves a new coated one.',
    who: 'Connector replacement at the appliance can be part of the install; gas line or valve work goes to a licensed plumber or your gas or propane company.',
  },
  {
    item: 'Water supply lines',
    look: "Rubber washer hoses that bulge or crack, a fridge ice maker fed by a self-piercing saddle valve, and old galvanized pipe at the valves that's hard to turn or weeps.",
    who: 'Hoses and the fridge line are appliance work; corroded valves and pipe go to a plumber.',
  },
  {
    item: 'Floor under the washer',
    look: "A floor that flexes or slopes. Older wood floors can bounce under a modern washer's high spin speed, making it walk across the room or bang the wall.",
    who: "An appliance technician levels the washer's feet; a soft or sagging floor needs a carpenter.",
  },
];

const faqs: Faq[] = [
  {
    q: "My new dryer's cord doesn't fit the wall outlet. What now?",
    a: "Don't force it or use an adapter. Check whether the outlet has three slots or four, then get the matching cord for the dryer and set its ground strap to match, following the installation guide. If you'd rather switch the outlet to four-prong, that's an electrician's job.",
  },
  {
    q: 'Can I plug my refrigerator into a two-prong outlet with an adapter?',
    a: "It'll run, but it isn't grounded, and that's a safety risk. Have an electrician install a grounded outlet for the fridge.",
  },
  {
    q: 'Is 76534 covered outside the town limits?',
    a: 'Yes, the 76534 area around Holland is covered. Give the road name and nearest crossroad so the visit is planned for the right place.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

function Block({ id, eyebrow, title, accent, tone, children }: { id: string; eyebrow: string; title: string; accent: string; tone?: 'white'; children: React.ReactNode }) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading id={id} eyebrow={eyebrow} title={title} accent={accent} />
        <div className="prose-copy">{children}</div>
      </div>
    </Section>
  );
}

export default function HollandAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Appliance repair in Holland, TX',
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: 'Holland, TX' },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: 'Holland', path },
        ]}
        title="Appliance Repair in Holland, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Yes, Holland is in the service area, the town and the 76534 farmland around it. For appliance repair in Holland, TX, phone{' '}
          <PhoneLink location="holland_intro" className={white} />, say where in 76534 you live, and ask when the schedule reaches the southeast side of
          the county. If you&apos;ve just put a new appliance into an older house, read the checklist below first; the fix may be an outlet, not a
          repair.
        </p>
        <div className="mt-8">
          <CtaRow location="holland_hero" dark />
        </div>
      </PageHero>

      <Block id="old-heading" eyebrow="76534" title="Old house," accent="new appliance">
        <p>
          Holland is a small town in southeast Bell County, with an old downtown and plenty of houses that have stood for generations. Those homes were
          wired and plumbed for the appliances of their day. A new dryer, range or refrigerator often expects something a little different: a
          four-prong cord, a grounded outlet, a modern gas connector, a supply line that isn&apos;t half rusted shut.
        </p>
        <p>
          When the two don&apos;t match, it looks like a broken appliance: a new dryer whose cord won&apos;t fit the wall, a range that trips the
          breaker. Sorting out whether the problem belongs to the appliance, the wiring or the plumbing saves a wasted visit.
        </p>
      </Block>

      <Section tone="white" labelledBy="check-heading">
        <SectionHeading id="check-heading" eyebrow="Before you call" title="The compatibility" accent="checklist" />
        <div className="grid gap-4 md:grid-cols-2">
          {checklist.map((c) => (
            <div key={c.item} className="rounded-2xl border border-sand bg-canvas p-5">
              <h3 className="font-display text-lg font-semibold text-ink">{c.item}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">Look for:</strong> {c.look}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-flame">Who fixes it:</strong> {c.who}
              </p>
            </div>
          ))}
        </div>
        <MidCta
          location="holland_midpage"
          before={<>Worked down the list? Ring </>}
          after={
            <>
              {' '}
              and share roughly how old the house is, which items on the checklist looked off, the brand and model of the appliance, and what it&apos;s
              doing. A phone photo of the outlet and the cord side by side settles the plug question instantly.
            </>
          }
        />
      </Section>

      <Block id="dryer-heading" eyebrow="Laundry" title="Dryers in older" accent="laundry rooms">
        <p>
          Older laundry rooms often have long, crooked vent runs, sometimes with old foil duct, and a dryer on that kind of vent runs hot and blows its
          thermal fuse. If the cord and vent check out and the dryer still won&apos;t heat, the next steps are in{' '}
          <Link href="/dryer-repair-temple-tx/">what to check when a dryer stops heating</Link>.
        </p>
      </Block>

      <Block id="range-heading" eyebrow="Cooking" title="Ranges" accent="and ovens" tone="white">
        <p>
          A range that trips its breaker on one burner usually has a shorted element or a burned terminal; one that trips the moment it&apos;s switched
          on can be a wiring fault in the house. Part-by-part oven and cooktop testing is covered in{' '}
          <Link href="/oven-stove-repair-temple-tx/">how range and oven faults get found</Link>.
        </p>
      </Block>

      <Block id="replace-heading" eyebrow="Repair or replace" title="Repair the old one" accent="or start over?">
        <p>
          An old appliance already fits the house; a new one may add a cord, an outlet or a gas connector to the purchase. Weigh that when the repair
          bill on the old unit comes in; the factors are laid out in <Link href="/blog/repair-or-replace-appliance/">the repair-or-replace guide</Link>.
        </p>
      </Block>

      <Section tone="ink" labelledBy="sameday-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="sameday-heading" eyebrow="Timing" title="Same day appliance repair" accent="in Holland?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Holland sits southeast of Temple on TX-95, past Little River-Academy, and is one of the farther stops in the county. Same-day visits there
              happen on some days, depending on how the route is laid out and whether parts are needed. How fast a technician can get to Holland is
              easiest to answer once the scheduler knows your street. With a leak or a burning smell, shut off the breaker or valve first and say so at
              the start.
            </p>
          </div>
        </div>
      </Section>

      <Block id="price-heading" eyebrow="Cost" title="Questions to ask" accent="about price">
        <p>
          Before work starts, get the trip cost and the price of the fix in plain numbers. If the fix turns out to be wiring or plumbing rather than the
          appliance, ask the technician to say so plainly, so you can call the right trade instead of paying for an appliance repair you don&apos;t
          need.
        </p>
      </Block>

      <Block id="near-heading" eyebrow="Neighbors" title="Neighboring" accent="towns" tone="white">
        <p>
          Up TX-95 toward Temple, <Link href="/service-areas/little-river-academy-tx/">Little River-Academy</Link> is the nearest town covered, and to
          the northeast, <Link href="/service-areas/rogers-tx/">Rogers</Link> sits on US-190. Every town on the list is on{' '}
          <Link href={routes.areas}>the Bell County service area list</Link>, and Holland appliance repair service takes in every appliance named on{' '}
          <Link href={routes.home}>Temple appliance repair</Link>.
        </p>
      </Block>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Holland" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="holland_final"
        title="Call from"
        accent="Holland"
        cardHeadingLevel="p"
        cardTitle="Call about a Holland repair"
        text={
          <>
            Old house or new, appliance repair in Holland, TX starts with a call to <PhoneLink location="holland_final_text" className={white} />: the
            brand, the model, a photo of the cord and outlet if it&apos;s a plug question, and what&apos;s going wrong.
          </>
        }
      />
    </>
  );
}

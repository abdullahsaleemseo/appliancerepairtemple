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

/** Morgan's Point Resort area page (source: content/area-morgans-point-resort-v1.md, Nov 2026). Replaces the generic area template for this slug. */
const path = '/service-areas/morgans-point-resort-tx/';
const description =
  "Appliance repair in Morgan's Point Resort, TX on Lake Belton: a lake house shutdown checklist and what to do if you arrive to a problem. (254) 615-2088.";

export const metadata = pageMetadata({
  title: "Appliance Repair Morgan's Point Resort TX | Lake Homes",
  description,
  path,
});

const leave: [string, string][] = [
  [
    'Water supply valves:',
    " close the valves behind the washer and, if you'll be gone more than a few days, the one feeding the refrigerator's ice maker. For a longer absence, close the main and leave the water heater on vacation mode.",
  ],
  ['Ice maker:', " switch it off or raise the arm, and empty the bin so old ice doesn't fuse into a block or melt if the power drops."],
  ['Fridge temperature:', ' check the fresh-food side reads about 37°F and the freezer about 0°F before leaving, so you know it was right when you left.'],
  [
    'Freezer thermometer:',
    ' leave a simple dial thermometer inside the freezer. Some owners also freeze a cup of water, set a coin on top, and leave it in; if the coin has sunk to the bottom when you return, the freezer thawed and refroze while you were away.',
  ],
  ['Dryer lint:', " clean the lint screen after the last load and don't leave the dryer running when you head out."],
  ['Dishwasher and washer doors:', ' leave them cracked open so seals dry and nothing smells sour on return.'],
];

const faqs: Faq[] = [
  {
    q: "Should I leave the fridge running at the lake house while I'm gone?",
    a: "For a few weeks, yes: leave it running at its normal setting with the doors shut. For a long absence, many owners empty it, unplug it, and prop the doors open so it doesn't grow mold. Either way, turn off the ice maker and its water supply.",
  },
  {
    q: "Can a technician come if I'm not at the lake house?",
    a: "Ask when you call. Access comes down to the schedule and who can open the house, such as a neighbor, caretaker or property manager. Make sure you can be reached by phone so you can approve any repair before it's done.",
  },
  {
    q: "My address says Belton, but I'm in Morgan's Point Resort. Does that matter?",
    a: "Not for coverage; both share 76513. Just say Morgan's Point Resort and give the street, so the visit is routed to the lake side and not into town.",
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

export default function MorgansPointResortAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Appliance repair in Morgan's Point Resort, TX",
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: "Morgan's Point Resort, TX" },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: "Morgan's Point Resort", path },
        ]}
        title="Appliance Repair in Morgan's Point Resort, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Morgan&apos;s Point Resort is in the service area; it shares the 76513 ZIP with Belton, so say &quot;Morgan&apos;s Point&quot; and give your
          street when you phone <PhoneLink location="morganspoint_intro" className={white} /> about the schedule. That&apos;s the quick answer to
          appliance repair in Morgan&apos;s Point Resort, TX. The longer one is about lake houses that sit empty, because that&apos;s where most of the
          trouble here starts.
        </p>
        <div className="mt-8">
          <CtaRow location="morganspoint_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="empty-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="empty-heading" eyebrow="Lake Belton" title="Lake houses that" accent="sit empty" />
          <div className="prose-copy">
            <p>
              Plenty of homes here are weekend places, second homes or rentals between guests. An appliance in a house nobody&apos;s in can fail on a
              Tuesday and stay failed until Friday evening, when someone opens the fridge to a smell or steps into a puddle by the washer. The repair
              itself is often ordinary. What makes it expensive is the time it went unnoticed: spoiled food, a soaked subfloor, ice maker water running
              into a cabinet for three days.
            </p>
            <p>So the most useful thing on this page isn&apos;t a repair. It&apos;s the ten minutes before you lock the door.</p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="leave-heading">
        <SectionHeading id="leave-heading" eyebrow="Shutdown checklist" title="Before you leave" accent="the lake house" />
        <ul className="grid gap-3 md:grid-cols-2">
          {leave.map(([lead, rest]) => (
            <li key={lead} className="rounded-2xl border border-sand bg-canvas p-5 text-[16px] leading-relaxed text-ink-body">
              <strong className="font-semibold text-ink">{lead}</strong>
              {rest}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="arrive-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="arrive-heading"
            eyebrow="On arrival"
            title="Arriving to"
            accent="a problem"
            intro="Walk in, find a warm fridge or water on the floor, and the instinct is to start fixing. Slow down for two minutes first."
          />
          <div className="prose-copy">
            <p>
              Photograph what you see before you touch anything: the temperature display, any code, the water on the floor and where it seems to start,
              and the model tag if you can reach it. Then shut off the water at the valve behind the appliance, or the main if you can&apos;t tell where
              it&apos;s coming from. Check whether the power went out while you were away; clocks blinking on the microwave or range are a giveaway, and
              a tripped breaker or GFCI outlet in the garage is a common reason a second fridge or freezer goes quiet.
            </p>
          </div>
        </div>
        <MidCta
          location="morganspoint_midpage"
          before={<>Once </>}
          after={
            <>
              {' '}
              picks up, open with four things: how long the house sat empty, whether the power seems to have gone out, what the appliance is doing now,
              and the brand and model from the photo. That history often explains the failure faster than the appliance does.
            </>
          }
        />
        <div className="prose-copy mt-6">
          <p>
            If food has thawed, toss what&apos;s spoiled rather than refreezing it; a refrigerator that&apos;s warm only because a door didn&apos;t seal
            needs a different repair from one whose cooling stopped.
          </p>
        </div>
      </Section>

      <Section tone="white" labelledBy="cold-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cold-heading" eyebrow="Cold storage" title="Refrigerators, freezers" accent="and ice makers at the lake" />
          <div className="prose-copy">
            <p>
              Lake homes tend to have more cold storage than everyday houses: a second fridge in the garage, a chest freezer for the catch, an ice maker
              that works overtime on summer weekends and then sits idle. A garage fridge in a Texas summer runs long and hard; dusty coils and a tired
              condenser fan show up there first, as covered in{' '}
              <Link href="/refrigerator-repair-temple-tx/">what to check when a refrigerator won&apos;t stay cold</Link>. A chest freezer that frosts
              heavily or runs without stopping usually has a lid gasket problem or a failing part covered in{' '}
              <Link href="/freezer-repair-temple-tx/">chest and upright freezer repair</Link>. Ice makers that sat dry for weeks can come back with a
              sticking inlet valve or an iced-over fill line, the trouble described in{' '}
              <Link href="/ice-maker-repair-temple-tx/">why an ice maker quits after sitting</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="outdoor-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="outdoor-heading" eyebrow="Patio" title="Outdoor kitchens" accent="and beverage coolers" />
          <div className="prose-copy">
            <p>
              Patio refrigerators, under-counter beverage coolers and outdoor ice makers show up on plenty of lake properties. Some are built and rated
              for outdoor use; others are indoor units that ended up outside and struggle in the heat and humidity. Whether a particular outdoor unit
              can be serviced depends on the brand and model, so call with both and ask before booking.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="fast-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fast-heading" eyebrow="Timing" title="How quickly can someone reach" accent="Morgan's Point Resort?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Morgan&apos;s Point Resort sits past Belton on the lake, reached from Temple along FM 2305, so it&apos;s farther than a stop in town but
              not a long drive. How fast a technician gets here varies, and a same-day visit to Morgan&apos;s Point Resort is sometimes possible; the
              answer rests on where technicians are already headed that day, how early you ring and whether a part has to be sourced. If you&apos;re
              only at the lake for the weekend, say so: it helps to know whether the visit has to happen while you&apos;re there.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="cost-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cost-heading" eyebrow="Cost and access" title="Cost and" accent="access questions" />
          <div className="prose-copy">
            <p>
              Settle the trip charge and the repair figure before a panel comes off. If you won&apos;t be at the house, ask how access can be handled,
              whether a neighbor or caretaker can let the technician in, and how you&apos;ll hear what was found before anything is fixed.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="lake-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="lake-heading" eyebrow="Neighbors" title="Around" accent="the lake" />
          <div className="prose-copy">
            <p>
              Just down the road, <Link href="/service-areas/belton-tx/">Belton</Link> uses the same 76513 ZIP. All the covered towns and their ZIP
              codes sit on <Link href={routes.areas}>the lakeside-to-Temple coverage list</Link>, and the{' '}
              <Link href={routes.home}>Temple appliance repair overview</Link> takes in the rest of the house&apos;s appliances.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Morgan's Point Resort" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="morganspoint_final"
        title="Before you head back"
        accent="to the lake"
        cardHeadingLevel="p"
        cardTitle="Call about a Morgan's Point repair"
        text={
          <>
            If something&apos;s already wrong, or you&apos;d rather it get checked before the next weekend, get on the phone to{' '}
            <PhoneLink location="morganspoint_final_text" className={white} />. Mention the brand, model, your Morgan&apos;s Point street and how long
            the house has been empty.
          </>
        }
      />
    </>
  );
}

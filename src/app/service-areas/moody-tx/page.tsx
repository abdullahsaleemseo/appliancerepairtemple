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

/** Moody area page (source: content/area-moody-v1.md, Nov 2026). Replaces the generic area template for this slug. */
const path = '/service-areas/moody-tx/';
const description =
  'Appliance repair in Moody, TX 76557, north of Temple: how to prepare so one visit covers the diagnosis, the parts and the fix. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Moody TX | North of Temple off I-35',
  description,
  path,
});

const prep: [string, string][] = [
  [
    'Model tag photos:',
    " one clear picture of the model and serial tag on each appliance that's acting up. Look inside the fridge, around a dryer or front-loader door opening, beneath a top-loader's lid, or along a dishwasher's door edge.",
  ],
  ['A clip of the fault:', ' ten or twenty seconds of the noise, the leak, the error code flashing or the cycle stopping. A sound is easier to hear than to describe.'],
  [
    'Every appliance at once:',
    " if the dryer's slow and the ice maker's been quitting, mention both now. Planning time and parts for two repairs is easy; adding one at the door often isn't.",
  ],
  ['Parts history:', " anything already replaced, by you or a previous technician, and roughly when. If you bought a part that didn't fix it, keep it and the receipt."],
  ['Access notes:', ' a gate code, pets to put away, which door to use, whether the appliance is in a garage or shop.'],
];

const faqs: Faq[] = [
  {
    q: 'Moody is in McLennan County. Is 76557 really covered?',
    a: 'Yes. Moody and the 76557 area are in the service area even though they sit just over the Bell County line. Just share the street when you ring.',
  },
  {
    q: 'If the technician needs a part, will it take another trip?',
    a: 'Sometimes, especially for less common parts. Sharp tag photos plus a clear description before the visit make it more likely the right part comes along the first time. Ask how an ordered part gets handled.',
  },
  {
    q: "I already bought a part and it didn't fix the problem. What should I do with it?",
    a: "Keep it, along with the box and receipt, and mention it when you call. It tells the technician what's already been ruled out, and an unused part can sometimes be returned to the seller.",
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

export default function MoodyAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Appliance repair in Moody, TX',
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: 'Moody, TX' },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: 'Moody', path },
        ]}
        title="Appliance Repair in Moody, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Moody is covered, the town and the 76557 area around it, even though it sits just across the line in McLennan County. For appliance repair in
          Moody, TX, call <PhoneLink location="moody_intro" className={white} />, name your street and ZIP, and ask where Moody fits on the schedule.
          Because Moody sits toward the outer edge of the route, your best move is setting things up so a single visit finishes the job.
        </p>
        <div className="mt-8">
          <CtaRow location="moody_hero" dark />
        </div>
      </PageHero>

      <Block id="count-heading" eyebrow="76557" title="Make one" accent="visit count">
        <p>
          Moody is a small town northwest of Temple, a few miles west of I-35 along FM 107, with Mother Neff State Park out beyond it to the west. For a
          technician, that means a longer drive than a stop in Temple or Belton. Every extra trip, to come back with a part or to look at the appliance
          nobody mentioned, costs time on both ends.
        </p>
        <p>
          The fix is simple: give the technician enough information before the visit to show up with the right parts and enough time. Plenty of
          two-trip repairs happen only because the part wasn&apos;t known in advance. A lot of that can be solved with a phone and five minutes.
        </p>
      </Block>

      <Section tone="white" labelledBy="prep-heading">
        <SectionHeading
          id="prep-heading"
          eyebrow="Before you call"
          title="One-trip"
          accent="prep"
          intro="Before you call, put together what a technician would ask for on arrival, so the likely part can be identified and brought along. Here's the list:"
        />
        <ul className="grid gap-3">
          {prep.map(([lead, rest]) => (
            <li key={lead} className="rounded-2xl border border-sand bg-canvas p-5 text-[16px] leading-relaxed text-ink-body">
              <strong className="font-semibold text-ink">{lead}</strong>
              {rest}
            </li>
          ))}
        </ul>
        <MidCta
          location="moody_midpage"
          before={<>With that ready, dial </>}
          after={
            <>
              {' '}
              and walk through it: brand and model of each appliance, what each one is doing, what&apos;s been replaced, and how to get in. Ask whether
              the photos and video can be sent ahead. The more that&apos;s known before the drive, the better the chance the first visit is the only one.
            </>
          }
        />
      </Section>

      <Block id="culprits-heading" eyebrow="Common repairs" title="Washers and refrigerators:" accent="the usual two-trip culprits">
        <p>
          Washers often need a second trip because a drain pump, lid lock or door lock is model-specific. A tag photo, whatever code shows and a note on
          when in the cycle it stops usually pin the part down. The cycle-by-cycle approach is laid out in{' '}
          <Link href="/washer-repair-temple-tx/">the washer checks from fill to spin</Link>.
        </p>
        <p>
          Refrigerators split into easy and hard. A fan, a defrost component or an ice maker valve is often identified from the symptom and model number
          alone, while a sealed system problem needs testing on site before anyone can say what it&apos;ll take. Telling the technician whether the
          freezer is cold, the fridge side is warm, or both are warm narrows it a lot, as explained in{' '}
          <Link href="/refrigerator-repair-temple-tx/">why a fridge warms up and what fixes it</Link>.
        </p>
      </Block>

      <Section tone="ink" labelledBy="when-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="when-heading" eyebrow="Timing" title="When can a technician" accent="make it to Moody?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Moody is near the edge of the area, so how fast a technician arrives depends more on the route than it would in Temple, and a same-day
              visit is less likely. Same-day appliance repair in Moody does happen when the route already heads north and the part is common, but plan
              on the next opening rather than counting on today. An early call improves the odds. With anything urgent, such as water
              spreading across the floor, close the nearest valve or the main and mention it right away.
            </p>
          </div>
        </div>
      </Section>

      <Block id="cost-heading" eyebrow="Cost" title="What to ask" accent="about cost">
        <p>
          Pin down the trip charge and the price of the fix before anyone starts, and ask whether coming back with an ordered part adds to the bill. If
          you&apos;ve listed several appliances, ask how that&apos;s handled on one visit.
        </p>
      </Block>

      <Block id="near-heading" eyebrow="Neighbors" title="Nearby" accent="towns" tone="white">
        <p>
          South of Moody toward Temple, <Link href="/service-areas/troy-tx/">Troy</Link> is the next town covered. Other covered towns appear on{' '}
          <Link href={routes.areas}>the list of service areas around Temple</Link>, and Moody appliance repair service follows the same approach as{' '}
          <Link href={routes.home}>the main page for appliance repair in Temple</Link>.
        </p>
      </Block>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Moody" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="moody_final"
        title="Call once,"
        accent="prepare once"
        cardHeadingLevel="p"
        cardTitle="Book a Moody repair"
        text={
          <>
            Gather the tag photos and a short video. After that, call <PhoneLink location="moody_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a Moody repair online
            </Link>{' '}
            with your 76557 street and every appliance on the list.
          </>
        }
      />
    </>
  );
}

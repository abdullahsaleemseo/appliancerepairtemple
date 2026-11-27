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

/** Nolanville area page (source: content/area-nolanville-v1.md, Nov 2026). Replaces the generic area template for this slug. */
const path = '/service-areas/nolanville-tx/';
const description =
  'Appliance repair in Nolanville, TX 76559 for new-build homes: a first-year punch list and who to call first, builder or repair tech. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Nolanville TX | New-Build Appliances',
  description,
  path,
});

const punch: [string, string, string][] = [
  [
    'Dishwasher drain and the garbage disposal',
    "A new disposal has a knockout plug inside its dishwasher inlet; if nobody knocked it out, the dishwasher can't drain and water sits in the bottom",
    'Builder, if the disposal was installed with the house',
  ],
  ['Dishwasher mounting', 'Brackets not screwed to the counter, so the tub tips forward when the door opens', 'Builder'],
  [
    'Washer hoses and leveling',
    'Fill hoses hand-tight instead of snug, a washer rocking on one corner, shipping hardware never removed',
    "Builder or installer if they set it up; a repair tech if it's out of warranty",
  ],
  [
    'Dryer transition duct',
    'The short flex duct behind the machine is flattened as the dryer slides into place, so loads take longer and the cabinet runs hot',
    'Builder for the first fix; dryer vent cleaning after that',
  ],
  ['Refrigerator water line', 'Line kinked behind the fridge, valve not fully open, or a slow drip at the connection', 'Builder; turn the valve off if it drips'],
  ['Range anti-tip bracket', "Bracket not installed or not engaged with the range's back leg", "Builder; it's a safety item"],
  [
    'Appliance runs but performs badly',
    "No install problem found, but it won't cool, heat or clean",
    'Manufacturer first while under warranty, then a repair technician',
  ],
];

const faqs: Faq[] = [
  {
    q: 'The dishwasher in my new house has never drained right. Is it defective?',
    a: "Probably not. Check the garbage disposal knockout plug and the drain hose under the sink first; both are installation items. If the house is still under the builder's warranty, ask the builder to look before paying for a repair visit.",
  },
  {
    q: 'My new fridge never cooled properly from day one. Who fixes that?',
    a: 'If the installation looks fine and the fridge has power, a fridge that never cooled is usually a matter for the maker while its coverage lasts. Call the maker with the model and serial number and the closing date.',
  },
  {
    q: 'Is all of 76559 covered, including the newer subdivisions?',
    a: "Yes, 76559 is in the service area, older streets and new subdivisions alike. Give the street name when you call, since some new streets don't show up on every map yet.",
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

export default function NolanvilleAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Appliance repair in Nolanville, TX',
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: 'Nolanville, TX' },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: 'Nolanville', path },
        ]}
        title="Appliance Repair in Nolanville, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Nolanville is covered, every address in 76559. To book appliance repair in Nolanville, TX, dial{' '}
          <PhoneLink location="nolanville_intro" className={white} />, then share the ZIP and street so the schedule can be checked for your side of
          US-190. In a house built in the last year or two, though, the problem may belong to the builder rather than the appliance, and the punch list
          below helps you tell which.
        </p>
        <div className="mt-8">
          <CtaRow location="nolanville_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="year-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="year-heading" eyebrow="New construction" title="Builder-grade," accent="year one" />
          <div className="prose-copy">
            <p>
              Nolanville has grown with new subdivisions along the US-190 corridor between Belton and Harker Heights. New houses arrive with a full set
              of builder-installed appliances: dishwasher, range, over-the-range microwave, often a refrigerator, sometimes a washer and dryer. The
              appliances themselves are usually fine. What goes wrong in the first year tends to be the installation: a drain hose that was never
              connected right, a duct squashed behind the dryer, a fridge water line kinked when it was pushed into place.
            </p>
            <p>
              That matters for two reasons. An installation fault may be the builder&apos;s to fix under the home&apos;s warranty, at no cost to you.
              And a repair technician called out for a &quot;broken&quot; dishwasher that&apos;s really a capped drain will find the problem in minutes,
              but you&apos;ll still pay for the visit. A few minutes with the list below sorts that out first.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="punch-heading">
        <SectionHeading id="punch-heading" eyebrow="First-year check" title="New home appliance" accent="punch list" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[760px] text-left text-[15px]">
            <caption className="sr-only">New home appliance punch list: what to check, what goes wrong at install, and who to call first</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>What to check</th>
                <th scope="col" className={th}>What goes wrong at install</th>
                <th scope="col" className={th}>Who to call first</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {punch.map(([item, wrong, who]) => (
                <tr key={item} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{item}</th>
                  <td className="px-4 py-3 text-ink-body">{wrong}</td>
                  <td className="px-4 py-3 text-ink-body">{who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MidCta
          location="nolanville_midpage"
          before={<>If the list doesn&apos;t explain it, or the builder warranty has run out, call </>}
          after={
            <>
              . Have the appliance brand, the model number off its tag, a line on what it&apos;s doing, and whether the house is still under the
              builder&apos;s warranty. If it&apos;s the dishwasher or dryer, mention that the disposal or vent was part of the original build.
            </>
          }
        />
      </Section>

      <Section labelledBy="dish-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="dish-heading" eyebrow="Kitchen" title="Dishwashers and disposals" accent="in new kitchens" />
          <div className="prose-copy">
            <p>
              A brand-new dishwasher that leaves water in the tub after every cycle is one of the classic first-month calls in a new build. Check the
              disposal knockout plug first, then the drain hose loop under the sink. If both are fine, the trouble is in the dishwasher itself, and{' '}
              <Link href="/dishwasher-repair-temple-tx/">how dishwasher drain and fill problems get traced</Link> walks through the rest. A disposal that
              hums but won&apos;t turn, or trips its reset button, has its own short list of fixes in{' '}
              <Link href="/garbage-disposal-repair-temple-tx/">what to try when a disposal jams or hums</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="dryer-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="dryer-heading" eyebrow="Laundry" title="Dryers that take" accent="two cycles" />
          <div className="prose-copy">
            <p>
              In a new laundry room, a dryer that never seems to dry in one cycle usually isn&apos;t broken. The short transition duct behind it is
              crushed, or the builder used foil duct that sags and collects lint. Pull the dryer forward, straighten or replace the duct with semi-rigid
              metal, and try again. If the wall duct itself is long or lint-packed,{' '}
              <Link href="/dryer-vent-cleaning-temple-tx/">cleaning the full dryer vent run</Link> restores airflow and keeps the heat parts from failing
              early.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="who-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="who-heading" eyebrow="Warranty" title="Builder warranty, manufacturer warranty" accent="or a repair tech?" />
          <div className="prose-copy">
            <p>
              Three different parties can be responsible, and the order matters. The builder usually handles how things were installed, for a period
              set out in your closing paperwork. The appliance manufacturer handles defects in the appliance itself, for a set period that often starts
              at closing. A repair technician is the right call once those don&apos;t apply, or when you&apos;d rather not wait. Keep the closing date
              and the appliance manuals together; we&apos;ll ask for the model number either way, so having it ready helps whoever you call.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="fast-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fast-heading" eyebrow="Timing" title="Same day appliance repair" accent="in Nolanville: how fast?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Nolanville sits on US-190 between Belton and Harker Heights, one of the nearer towns west of Temple. Same-day visits there are sometimes
              possible; it turns on the day&apos;s route, the hour you reach the scheduler and whether a technician already carries the part. For most
              new-build installation fixes, parts aren&apos;t the issue. Ask for the next opening when you call and you&apos;ll get an honest answer.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="cost-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cost-heading" eyebrow="Cost" title="Costs worth" accent="asking about" />
          <div className="prose-copy">
            <p>
              Pin down what the trip costs and what the fix will run before anyone starts. For a home under a year old, ask the technician to say
              plainly whether the fault looks like an install problem, so you can take it to the builder if it is.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="next-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="next-heading" eyebrow="Neighbors" title="Neighbors" accent="on US-190" />
          <div className="prose-copy">
            <p>
              West of town, <Link href="/service-areas/harker-heights-tx/">Harker Heights</Link> has a lot of newer homes too, and east toward Temple,{' '}
              <Link href="/service-areas/belton-tx/">Belton</Link> is the next stop. Every covered town and ZIP is on{' '}
              <Link href={routes.areas}>the Temple-area coverage list</Link>, and <Link href={routes.home}>appliance repair across Temple</Link> covers
              every appliance in the house.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Nolanville" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="nolanville_final"
        title="Ready when the"
        accent="punch list runs out"
        cardHeadingLevel="p"
        cardTitle="Call about a Nolanville repair"
        text={
          <>
            When it isn&apos;t the install, appliance repair in Nolanville, TX is a phone call away. Ring{' '}
            <PhoneLink location="nolanville_final_text" className={white} />; have the brand, model number and your 76559 street handy.
          </>
        }
      />
    </>
  );
}

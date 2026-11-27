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

/** Rogers area page (source: content/area-rogers-v1.md, Nov 2026). Replaces the generic area template for this slug. */
const path = '/service-areas/rogers-tx/';
const description =
  'Appliance repair in Rogers, TX 76569 for rural homes, propane ranges and dryers included: how LP differs from natural gas, what to ask. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Rogers TX | Propane & Rural Homes',
  description,
  path,
});

const gas: [string, string, string][] = [
  ['Supply', 'Piped in from a utility through a meter', 'Stored in a tank on your property and filled by your propane company'],
  ['Pressure at the appliance', 'Lower, around 3.5 to 7 inches of water column', 'Higher, around 10 to 11 inches of water column'],
  ['Conversion', 'Most ranges and dryers ship set up for natural gas', "Needs the maker's LP conversion: smaller orifices and the regulator switched to LP"],
  ['What a good flame looks like', 'Steady blue with a small, defined inner cone', 'The same: steady and blue, tips maybe faintly yellow'],
  [
    'Wrong setup symptoms',
    'Natural gas through LP orifices: weak, small flames, slow oven, burners hard to light',
    'LP through natural gas orifices: tall yellow flames, soot on pans and walls, a sharp smell, a carbon monoxide risk',
  ],
  ['If it leaks', 'Lighter than air, rises', 'Heavier than air, settles low near the floor'],
  ['Who handles the supply', 'The gas utility', 'Your propane company handles the tank, regulator and supply piping'],
];

const faqs: Faq[] = [
  {
    q: 'Can a natural gas dryer be switched to propane?',
    a: "Usually, yes, if the maker offers an LP conversion kit for that model. The kit swaps the orifice and changes the gas valve setting. Once it's done, the dryer should be labeled as converted so the next person knows.",
  },
  {
    q: 'Why is my propane range flame yellow?',
    a: 'A mostly yellow, lazy flame on propane usually means the burner is getting too much gas for its orifice, often from an incomplete conversion, or that the burner cap or air shutter is out of place. Turn it off, open a window, and have it checked before using it again.',
  },
  {
    q: 'Do you cover homes off US-190 in 76569?',
    a: 'Yes. Rogers and the 76569 area around it are covered, on and off the highway. A road name plus the closest intersection is all the scheduler needs.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

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

export default function RogersAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Appliance repair in Rogers, TX',
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: 'Rogers, TX' },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: 'Rogers', path },
        ]}
        title="Appliance Repair in Rogers, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Rogers falls within the service area, both the town and the 76569 countryside. To arrange appliance repair in Rogers, TX, call{' '}
          <PhoneLink location="rogers_intro" className={white} />, tell the scheduler your road and ZIP, and ask what the coming days look like. When the
          range or dryer burns propane, say so in the first breath; it shapes the whole visit.
        </p>
        <div className="mt-8">
          <CtaRow location="rogers_hero" dark />
        </div>
      </PageHero>

      <Block id="propane-heading" eyebrow="76569" title="Propane" accent="country">
        <p>
          Rogers sits out US-190 beyond Temple&apos;s eastern edge, where natural gas mains don&apos;t always reach. Plenty of homes in and around town
          run their gas range, cooktop, dryer or water heater on propane, also called LP, from a tank on the property. The appliances look the same as
          natural gas models, and many are the exact same model. What&apos;s different is inside: the burner orifices, the regulator setting and the
          pressure the appliance is built to use.
        </p>
        <p>
          That difference is where trouble starts. A range moved from a house in town, or a dryer bought new and installed without its conversion, can
          run on the wrong setup for years, burning dirty, heating slowly or tripping its safety controls. Knowing what you have is half the diagnosis.
        </p>
      </Block>

      <Section tone="white" labelledBy="table-heading">
        <SectionHeading id="table-heading" eyebrow="LP vs natural gas" title="Propane vs natural gas:" accent="what's different" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[720px] text-left text-[15px]">
            <caption className="sr-only">How propane and natural gas appliances differ</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Topic</th>
                <th scope="col" className={th}>Natural gas</th>
                <th scope="col" className={th}>Propane (LP)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {gas.map(([topic, ng, lp]) => (
                <tr key={topic} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{topic}</th>
                  <td className="px-4 py-3 text-ink-body">{ng}</td>
                  <td className="px-4 py-3 text-ink-body">{lp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 rounded-2xl border border-flame/40 bg-white p-5 text-[16px] leading-relaxed text-ink-body">
          <strong className="font-semibold text-ink">Smell gas?</strong> Leave light switches and the appliance alone, get everyone out of the house, and
          phone the propane company or 911 once you&apos;re outside.
        </p>
        <MidCta
          location="rogers_midpage"
          before={<>Got a propane appliance that&apos;s acting up? Dial </>}
          after={
            <>
              {' '}
              and cover four things: that it runs on propane, whether you know it was converted (and by whom, if you do), the brand and model from its
              tag, and what the flame or the appliance is doing. If there&apos;s soot or a yellow flame, turn the appliance off and say so first.
            </>
          }
        />
      </Section>

      <Block id="range-heading" eyebrow="Cooking" title="Propane ranges" accent="and cooktops">
        <p>
          Most propane range calls come down to flame and ignition. Burners that click but won&apos;t light can be a dirty igniter or a cap that&apos;s
          off center. Tall, yellow, wavering flames usually mean the conversion wasn&apos;t done or was done halfway, with the surface burners converted
          but the oven left on natural gas orifices, or the regulator never flipped. That&apos;s not a &quot;keep using it&quot; situation: dirty flames
          make carbon monoxide. Oven-side faults, a weak igniter, a bad thermostat, a valve that won&apos;t open, are tested the same way on LP as on
          natural gas, as laid out in <Link href="/oven-stove-repair-temple-tx/">how gas and electric ovens get diagnosed</Link>.
        </p>
      </Block>

      <Block id="dryer-heading" eyebrow="Laundry" title="Propane" accent="dryers" tone="white">
        <p>
          A gas dryer on propane that tumbles but won&apos;t heat often has the same culprits as one on natural gas: a worn igniter, failed gas valve
          coils or a blown thermal fuse from a clogged vent. If the dryer has never heated well since it was installed, the conversion is the first
          suspect. Clothes that come out smelling of fuel point to an incomplete burn. The full order of checks is in{' '}
          <Link href="/dryer-repair-temple-tx/">dryer heating problems, gas and electric</Link>.
        </p>
      </Block>

      <Block id="freezer-heading" eyebrow="Outages" title="Freezers when" accent="the power flickers">
        <p>
          Rural lines out east of Temple can lose power in storms, and a chest freezer that comes back on after an outage doesn&apos;t always come back
          right. If it hums but won&apos;t cool, or clicks on and off every few minutes, the start relay or compressor may have taken a hit. Leave the lid
          closed and read a thermometer inside before deciding. The usual faults are covered in{' '}
          <Link href="/freezer-repair-temple-tx/">why a freezer stops freezing</Link>.
        </p>
      </Block>

      <Section tone="ink" labelledBy="fast-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fast-heading" eyebrow="Timing" title="How long until a technician" accent="reaches Rogers?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Rogers is a straight run out US-190 from Temple; a home a few miles off the highway lengthens the trip. Same-day appliance repair in Rogers
              is possible on some days, depending on the route already planned and on whether a part such as an LP conversion kit or a gas valve has to
              be ordered. For how fast a technician can reach Rogers on a given day, the scheduler gives a plain answer on the call.
            </p>
          </div>
        </div>
      </Section>

      <Block id="cost-heading" eyebrow="Cost" title="What to settle" accent="before work begins">
        <p>
          Have the trip charge and the full repair cost named before a screw comes out. If a conversion kit is needed, ask whether it&apos;s in stock or
          has to be ordered for your model, and whether installing it is part of the repair or a separate job.
        </p>
      </Block>

      <Block id="near-heading" eyebrow="Neighbors" title="Rogers'" accent="neighbors" tone="white">
        <p>
          West of Rogers, <Link href="/service-areas/little-river-academy-tx/">Little River-Academy</Link> is the nearest covered town, and{' '}
          <Link href="/service-areas/holland-tx/">Holland</Link> lies to the southwest. Every other covered town shows up on{' '}
          <Link href={routes.areas}>the Bell County coverage map</Link>, and Rogers appliance repair service takes in every appliance handled through{' '}
          <Link href={routes.home}>appliance repair in Temple itself</Link>.
        </p>
      </Block>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Rogers" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="rogers_final"
        title="Call about"
        accent="Rogers repairs"
        cardHeadingLevel="p"
        cardTitle="Call about a Rogers repair"
        text={
          <>
            Propane or electric, in town or down a county road, appliance repair in Rogers, TX starts with{' '}
            <PhoneLink location="rogers_final_text" className={white} />. Mention the fuel type, the brand and model, and what&apos;s going wrong.
          </>
        }
      />
    </>
  );
}

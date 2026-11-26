import Link from 'next/link';
import { routes, site } from '@/config/site';
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

/** Kenmore brand page (source: content/brand-kenmore-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/kenmore-appliance-repair-temple-tx/';
const description =
  'Kenmore appliance repair in Temple, TX: decode the model number to see who built your Kenmore, which parts fit and what usually fails. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Kenmore Appliance Repair Temple TX | Who Built Yours?',
  description,
  path,
});

const prefixes: [string, string, string][] = [
  ['106', 'Whirlpool', 'Refrigerators'],
  ['110', 'Whirlpool', 'Washers and dryers'],
  ['665', 'Whirlpool', 'Dishwashers'],
  ['253', 'Electrolux (Frigidaire)', 'Refrigerators and freezers'],
  ['790', 'Electrolux (Frigidaire)', 'Ranges'],
  ['795', 'LG', 'Refrigerators'],
  ['796', 'LG', 'Washers and dryers'],
];

const faqs: Faq[] = [
  {
    q: 'My Kenmore model number has no dot. What now?',
    a: 'Look for a separate serial or model plate; some labels list the model number in a different format or split it across lines. Newer Kenmore appliances may use a different numbering style altogether. Photograph the whole label and read every line on the call so it can be matched.',
  },
  {
    q: 'Can I still get parts for an old Kenmore?',
    a: 'Often, yes, because the parts usually come from the original maker and many stay in production for years. Very old or discontinued models can be harder. Having the full model number, prefix included, is what makes the cross-reference possible.',
  },
  {
    q: 'Is a Kenmore the same as the brand that built it?',
    a: "Inside, very often. A Kenmore usually shares its platform, main parts and failure patterns with the maker's own model from the same years, with Kenmore styling and sometimes different features. That's why parts and codes are looked up through the maker.",
  },
  {
    q: 'Does my old Sears protection agreement still cover my Kenmore?',
    a: "It depends on the agreement and whether it's still active. Find the paperwork or account details and check its current status before booking a paid repair. If it's no longer valid, the repair decision is the same as for any appliance of that age.",
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

export default function KenmoreBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Kenmore appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Kenmore appliance repair',
          description,
          path,
          brand: 'Kenmore',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'Kenmore', path },
        ]}
        title={`Kenmore Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Kenmore is a label, not a manufacturer. It began as Sears&apos; store brand, and over the years Whirlpool, Frigidaire, LG and others built
          the appliances that wore the name, so Kenmore appliance repair in Temple, TX starts by working out who really made yours. Three digits at
          the front of the model number give it away, and they decide the parts, the codes and the usual failures. Read the full model number off the
          tag and call <PhoneLink location="kenmore_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="kenmore_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="decoder-heading">
        <SectionHeading id="decoder-heading" eyebrow="Model number decoder" title="Who really built" accent="your Kenmore?" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[560px] text-left text-[15px]">
            <caption className="sr-only">Common Kenmore model number prefixes and the manufacturer that usually built each one</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Prefix before the dot</th>
                <th scope="col" className={th}>Usually built by</th>
                <th scope="col" className={th}>Typical products</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {prefixes.map(([prefix, maker, products]) => (
                <tr key={prefix} className="align-top">
                  <th scope="row" className="px-4 py-3 font-mono font-semibold text-ink">{prefix}</th>
                  <td className="px-4 py-3 text-ink-body">{maker}</td>
                  <td className="px-4 py-3 text-ink-body">{products}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-copy mt-6">
          <p>
            A Kenmore model number usually looks like three digits, a dot, then more digits, for example 110.xxxxxxxx. The three digits before the dot
            are the source code. These are the common ones; other prefixes exist, and the same prefix can occasionally cover more than one product, so
            confirm with your full model number.
          </p>
        </div>
        <MidCta
          location="kenmore_midpage"
          before={<>Once you have the prefix, call </>}
          after={
            <>
              {' '}
              and read out the whole model number, dot included, along with what the appliance is doing. Knowing the maker up front means the right
              part can be identified before the visit.
            </>
          }
        />
      </Section>

      <Section tone="white" labelledBy="tag-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="tag-heading" eyebrow="The tag" title="Where to find the model number," accent="and the dot" />
          <div className="prose-copy">
            <p>
              The tag sits wherever the original maker puts it. Refrigerator labels are usually stuck high inside the cabinet; top-loaders carry theirs
              beneath the lid or behind the console, and front-loaders and dryers around the door opening. A dishwasher&apos;s label runs along the
              door or tub edge, and a range&apos;s hides behind the bottom drawer. If the tag is worn, a phone photo taken at an angle often brings the
              numbers back.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="maker-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="maker-heading" eyebrow="Codes and parts" title="Why the maker decides" accent="the codes and the parts" />
          <div className="prose-copy">
            <p>
              A Kenmore built by Whirlpool behaves like a Whirlpool inside, and so on down the list. That&apos;s why error codes on a 110 washer or
              dryer often match{' '}
              <Link href="/brands/whirlpool-appliance-repair-temple-tx/">the Whirlpool codes and diagnostic modes</Link>, why a 795 refrigerator shares
              the airflow and compressor patterns described for{' '}
              <Link href="/brands/lg-appliance-repair-temple-tx/">LG refrigerators and their coverage quirks</Link>, and why a 253 fridge or 790 range
              tends to fail the way{' '}
              <Link href="/brands/frigidaire-appliance-repair-temple-tx/">Frigidaire&apos;s refrigerators and ranges</Link> do. Parts follow the maker
              too, cross-referenced from the Kenmore model number.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="fails-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fails-heading" eyebrow="By platform" title="Kenmore washers, dryers and refrigerators:" accent="what usually fails" />
          <div className="prose-copy">
            <p>
              Which platform it sits on shapes Kenmore washer repair in Temple. A Whirlpool-built 110 top-loader usually needs a lid lock, drain pump
              or drive part, while an LG-built 796 front-loader tends toward door locks, drain pump filters and door boots. Either way, the stage where
              the cycle stops narrows it down, as laid out for{' '}
              <Link href="/washer-repair-temple-tx/">diagnosing any washer by cycle stage</Link>.
            </p>
            <p>
              For Kenmore dryer repair, the 110 models share Whirlpool&apos;s familiar thermal fuse, belt and roller wear, while 796 dryers follow
              LG&apos;s design, so the vent and the heat parts both get checked, much like{' '}
              <Link href="/dryer-repair-temple-tx/">a dryer that runs but won&apos;t heat</Link>.
            </p>
            <p>
              On the cold side, Kenmore refrigerator repair usually comes down to fans, defrost parts and ice maker valves on 106 and 253 models, with
              LG-built 795 models adding their own compressor and control behavior.{' '}
              <Link href="/refrigerator-repair-temple-tx/">Why a refrigerator stops cooling</Link> covers the shared steps.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="elite-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="elite-heading" eyebrow="The upper line" title="What's different about" accent="Kenmore Elite?" />
          <div className="prose-copy">
            <p>
              The Elite badge marked the upper line, with more features, better finishes and often the maker&apos;s higher-end platform underneath. An
              Elite fridge might add a door-in-door or more ice and water features; an Elite washer, steam or larger capacity. Kenmore Elite repair
              follows the same prefix logic, with more parts that can fail and, because replacing one costs more, a stronger case for repairing it.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="worth-heading"
            eyebrow="Worth repairing?"
            title="Kenmore appliance repair in Temple, TX:"
            accent="worth it, and what about old Sears plans?"
            dark
          />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Usually worth it, because Kenmore appliances use the same common parts as their makers. A lid lock, pump, fan, igniter or fuse is a
              routine repair whatever the badge says. Replacing wins in two cases: an older unit that needs its main board, and an aging fridge with a
              compressor or refrigerant failure.
            </p>
            <p>
              Paperwork deserves a look before any big repair. Many Kenmore appliances were sold with Sears protection agreements or extended plans, and
              some of those may no longer apply, so check what you have and whether it&apos;s still active. If a newer Kenmore is still under the
              manufacturer&apos;s warranty, contact Kenmore&apos;s support first. The FTC&apos;s reading of the Magnuson-Moss Warranty Act is that
              outside service alone doesn&apos;t cancel that coverage, while damage from a bad repair stays excluded.
            </p>
            <p>
              Three questions belong on the call: the visit fee and the repair price, settled before work starts; whose part the technician plans to use
              and why it fits your prefix; and when the schedule has an opening. For a Kenmore repair near me search in Temple, those answers matter
              more than the ad.
            </p>
            <p className="text-[15px] text-white/55">Neither Kenmore nor Sears plays any part in this service, and neither has authorized it.</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Kenmore repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="kenmore_final"
        title="Find your prefix,"
        accent="then call"
        cardHeadingLevel="p"
        cardTitle="Book a Kenmore repair"
        text={
          <>
            Turn the tag into three digits and a dot, note what the Kenmore is doing, then call{' '}
            <PhoneLink location="kenmore_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a Kenmore repair
            </Link>
            . Kenmore owners in{' '}
            <Link href={routes.areas} className={white}>
              Belton, Killeen and the towns around Temple
            </Link>{' '}
            can do the same.
          </>
        }
      />
    </>
  );
}

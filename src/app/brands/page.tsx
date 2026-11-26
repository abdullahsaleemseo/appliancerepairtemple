import Link from 'next/link';
import { routes, site } from '@/config/site';
import { brands, brandHref } from '@/content/brands';
import type { Faq } from '@/content/types';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { absoluteUrl, pageMetadata } from '@/lib/seo';

/** Brands hub (source: content/brands-hub-v1.md, Nov 2026). Schema: CollectionPage + BreadcrumbList (breadcrumb comes from PageHero). */
const description =
  'Appliance brands repaired in Temple, TX, grouped by who really makes them: Whirlpool, GE, Electrolux, Bosch, Samsung, LG and more. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Brands We Repair in Temple, TX | All Major Brands',
  description,
  path: routes.brands,
});

const parents: [string, string][] = [
  ['Whirlpool Corporation', 'Whirlpool, Maytag, KitchenAid, Amana, JennAir'],
  ['GE Appliances, a Haier company', 'GE, GE Profile, Café, Monogram'],
  ['Electrolux', 'Frigidaire, Electrolux'],
  ['BSH Home Appliances', 'Bosch, Thermador, Gaggenau'],
  ['Samsung', 'Samsung'],
  ['LG Electronics', 'LG'],
  ['Kenmore', 'A Sears brand, built by various manufacturers over the years'],
  ['Alliance Laundry Systems', 'Speed Queen'],
];

const faqs: Faq[] = [
  {
    q: 'Do you repair all appliance brands?',
    a: 'Yes for the major names in Temple homes: the twelve brands linked on this page, plus their sister lines like GE Profile, Café and Frigidaire Gallery. For anything less common, phone with the label details and ask whether a technician can take it on.',
  },
  {
    q: 'Do you fix high-end appliances like Sub-Zero or Viking?',
    a: 'It depends on the brand, the model and parts availability. High-end and built-in appliances often use specialized parts and installation, and some brands restrict who can buy those parts. Call with the brand and full model number before booking, and ask directly whether that appliance can be serviced.',
  },
  {
    q: "Where do I find my appliance's model number?",
    a: "Look for a sticker or metal plate: inside the fridge cabinet, around the door opening on dryers and front-loaders, under the lid of a top-loader, along a dishwasher's door edge, and on a range's frame once the bottom drawer is out. Snap a picture of it so nothing gets misread.",
  },
];

function collectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl(routes.brands)}#collection`,
    name: `Appliance brands we repair in ${site.city}, ${site.stateAbbr}`,
    description,
    url: absoluteUrl(routes.brands),
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#business` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: brands
        .filter((b) => b.hasPage)
        .map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, url: absoluteUrl(brandHref(b)) })),
    },
  };
}

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';
const th = 'px-4 py-3 font-semibold';

function Family({ id, eyebrow, title, children, tone }: { id: string; eyebrow: string; title: string; children: React.ReactNode; tone?: 'white' }) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading id={id} eyebrow={eyebrow} title={title} className="!mb-0" />
        <div className="prose-copy">{children}</div>
      </div>
    </Section>
  );
}

export default function BrandsPage() {
  return (
    <>
      <JsonLd data={collectionSchema()} />

      <PageHero crumbs={[{ name: 'Brands', path: routes.brands }]} title={`Appliance Brands We Repair in ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          The name on the front of an appliance doesn&apos;t always tell you who built it. A handful of parent companies make most of the brands in
          Temple kitchens and laundry rooms, and appliances from the same family often share parts, layouts and failure patterns. Knowing who
          actually makes yours speeds up any repair. This page covers the appliance brands repaired in Temple, TX, grouped by parent company. Call{' '}
          <PhoneLink location="brands_intro" className={white} /> with the brand and model number.
        </p>
        <div className="mt-8">
          <CtaRow location="brands_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="parents-heading">
        <SectionHeading id="parents-heading" eyebrow="Parent companies" title="Appliance brands repaired in Temple, TX," accent="and who makes them" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[560px] text-left text-[15px]">
            <caption className="sr-only">Appliance parent companies and the brands each one makes</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Parent company</th>
                <th scope="col" className={th}>Brands</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {parents.map(([parent, list]) => (
                <tr key={parent} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{parent}</th>
                  <td className="px-4 py-3 text-ink-body">{list}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-ink-body">
          Why it matters: a part, a diagnostic mode or a known weak spot often carries across a whole family. A lid lock that fails on a Whirlpool
          top-loader may be the same part in a Maytag from the same years, and an older Kenmore fridge may really be a Frigidaire or an LG underneath.
          That&apos;s why the model number, not the badge, decides which parts and fixes apply.
        </p>
      </Section>

      <Family id="whirlpool-heading" eyebrow="Whirlpool Corporation" title="The Whirlpool family" tone="white">
        <p>
          Whirlpool builds more of the family than most people realize, and{' '}
          <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool appliance repair</Link> starts with the model number letters, like WTW
          for a top-load washer or WRF for a French door fridge.{' '}
          <Link href="/brands/maytag-appliance-repair-temple-tx/">Maytag washers and dryers</Link> share many lid locks, drain pumps and belt-path parts
          with Whirlpool laundry from the same years.{' '}
          <Link href="/brands/kitchenaid-appliance-repair-temple-tx/">KitchenAid dishwashers and ranges</Link> sit on Whirlpool designs with upscale
          features added on top. <Link href="/brands/amana-appliance-repair-temple-tx/">Amana appliances</Link> are the simpler, budget end of the same
          family, common in rentals and starter homes.
        </p>
      </Family>

      <Family id="ge-heading" eyebrow="GE Appliances" title="GE Appliances">
        <p>
          GE sells four lines with different features and repair costs, and the first letter of a model number usually tells you which one you have,
          which is why <Link href="/brands/ge-appliance-repair-temple-tx/">GE, Profile, Café and Monogram repair</Link> begins with the tag.
        </p>
      </Family>

      <Family id="electrolux-heading" eyebrow="Electrolux" title="The Electrolux family" tone="white">
        <p>
          <Link href="/brands/frigidaire-appliance-repair-temple-tx/">Frigidaire appliances</Link> are the practical, mid-priced side of the family,
          with FF, FG and FP model numbers marking the standard, Gallery and Professional lines.{' '}
          <Link href="/brands/electrolux-appliance-repair-temple-tx/">Electrolux appliances</Link> are the premium sister brand and share many parts
          with Frigidaire.
        </p>
      </Family>

      <Family id="bsh-heading" eyebrow="BSH Home Appliances" title="BSH: Bosch and its luxury siblings">
        <p>
          <Link href="/brands/bosch-appliance-repair-temple-tx/">Bosch dishwashers</Link> are known for quiet running, condensation drying and an E15
          code that means water has reached the base pan. Thermador and Gaggenau come from the same parent but sit at the luxury end; see the
          high-end note below.
        </p>
      </Family>

      <Family id="samsung-lg-heading" eyebrow="Samsung and LG" title="Samsung and LG" tone="white">
        <p>
          <Link href="/brands/samsung-appliance-repair-temple-tx/">Samsung appliance repair</Link> often comes down to coded faults on the display or
          in the SmartThings app, and to the French door ice maker that ices over.{' '}
          <Link href="/brands/lg-appliance-repair-temple-tx/">LG appliance repair</Link> turns on the gap between LG&apos;s long parts coverage on some
          compressors and motors and its shorter labor coverage.
        </p>
      </Family>

      <Family id="kenmore-heading" eyebrow="Kenmore and Speed Queen" title="Kenmore and Speed Queen">
        <p>
          Kenmore was Sears&apos; own label, and other companies built the appliances, so{' '}
          <Link href="/brands/kenmore-appliance-repair-temple-tx/">Kenmore repair</Link> starts with the prefix before the dot in the model number,
          which names the builder. <Link href="/brands/speed-queen-repair-temple-tx/">Speed Queen washers and dryers</Link> come from Alliance Laundry
          Systems, a company that also builds commercial laundry machines, and the classic top-loader still uses mechanical controls.
        </p>
      </Family>

      <Section tone="ink" labelledBy="highend-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="highend-heading" eyebrow="High-end brands" title="What about high-end brands like" accent="Sub-Zero, Viking or Wolf?" dark className="!mb-0" />
          <p className="text-[17px] leading-relaxed text-white/75">
            High-end appliance repair in Temple depends on the brand, the model and the parts. Sub-Zero, Wolf, Viking, Thermador, Gaggenau, Miele and
            similar brands use their own parts and designs, and many are built in. Call <PhoneLink location="brands_highend" className={white} /> with
            the brand and full model number and ask whether a technician can work on it before you book.
          </p>
        </div>
      </Section>

      <Section labelledBy="allbrands-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="allbrands-heading" eyebrow="One call" title="All major brands," accent="one call" className="!mb-0" />
          <div className="prose-copy">
            <p>
              Whatever badge is on the door, have the model number handy: it tells the technician the builder, the platform and the parts. Brand
              appliance repair in every Temple ZIP, from 76501 to 76504, covers all major brands, and{' '}
              <Link href={routes.home}>appliance repair in Temple for every appliance type</Link> works the same way no matter which name is on the
              door. Call <PhoneLink location="brands_allbrands" className={flame} /> or <Link href={routes.request}>book a repair</Link>.
            </p>
            <p className="text-[15px] text-ink-muted">Repairs here are independent of every manufacturer named on this page.</p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Brands" accent="FAQ" />
          <FaqList faqs={faqs} schema={false} />
        </div>
      </Section>

      <FinalCta
        formId="brands_final"
        title="Got the model"
        accent="number handy?"
        cardHeadingLevel="p"
        cardTitle="Call about any brand"
        text={<>Read the brand and model number off the label and call. That one line tells the technician the builder and the parts.</>}
      />
    </>
  );
}

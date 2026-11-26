import Link from 'next/link';
import { routes, site } from '@/config/site';
import type { Faq } from '@/content/types';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

/** Whirlpool brand page (source: content/brand-whirlpool-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/whirlpool-appliance-repair-temple-tx/';
const description =
  'Whirlpool appliance repair in Temple, TX: how Whirlpool, Maytag and KitchenAid share parts, reading the model number, common faults. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Whirlpool Appliance Repair Temple TX | Washers & Fridges',
  description,
  path,
});

const family: [string, string, string][] = [
  ['Whirlpool', 'Mainstream, the bulk of the lineup', 'The base designs most of the family builds on'],
  ['Maytag', 'Heavier-duty laundry and value-focused kitchen models', 'Whirlpool laundry platforms, drain pumps, dryer heat parts'],
  ['KitchenAid', 'Upscale kitchen line: dishwashers, ranges, fridges', 'Whirlpool dishwasher and refrigerator designs, with different trim and features'],
  ['Amana', 'Budget line', 'Simpler Whirlpool-built fridges, ranges and laundry'],
  ['JennAir', 'Luxury built-in kitchen line', 'Premium Whirlpool kitchen engineering'],
  ['Kenmore (many older models)', 'Sears store brand', 'Whirlpool laundry, fridges and dishwashers, depending on the model'],
];

const faqs: Faq[] = [
  {
    q: 'Will a Maytag or Kenmore part fit my Whirlpool?',
    a: "Often, when the models come from the same platform and era, since Whirlpool builds all three. It isn't guaranteed, though. Match parts by your exact model number, not by brand or appearance, and a technician can cross-reference the part numbers.",
  },
  {
    q: 'Does my Whirlpool have a diagnostic mode?',
    a: 'Many Whirlpool washers, dryers and dishwashers do. A specific button sequence runs the machine through a test and shows stored codes. The sequence varies by model and is usually printed on a sheet tucked inside the console or behind a panel, so check there first.',
  },
  {
    q: 'Why does my Whirlpool top-load washer make a loud clunk at the start of the cycle?',
    a: 'On many newer top-loaders, a click or clunk at the start is the lid locking and the drive shifting, which is normal. A loud bang during spin, a grinding noise or a lid lock that clicks over and over without starting points to a worn part.',
  },
  {
    q: 'Are older Whirlpool appliances still easy to get parts for?',
    a: 'Usually easier than most brands, because so many parts are shared across the Whirlpool family and stay in production for years. Very old or discontinued models can still run into dead ends, so have the model number ready when you ask.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';
const th = 'px-4 py-3 font-semibold';

export default function WhirlpoolBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Whirlpool appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Whirlpool appliance repair',
          description,
          path,
          brand: 'Whirlpool',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'Whirlpool', path },
        ]}
        title={`Whirlpool Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          One company, many badges. Whirlpool Corporation also makes Maytag, KitchenAid, Amana and JennAir, and for decades it built many of
          the washers, dryers and fridges sold under the Kenmore name. So the Whirlpool in your laundry room may share a drain pump with your
          neighbor&apos;s Maytag and a control layout with a KitchenAid. That overlap is good news for Whirlpool appliance repair in Temple, TX:
          parts are common and the failure patterns are well known. For a Whirlpool, or one of its cousins, call{' '}
          <PhoneLink location="whirlpool_intro" className={white} /> with the model number.
        </p>
        <p className="mt-4 text-[15px] text-white/60">
          Repairs here are independent: Whirlpool Corporation has no connection to this service and hasn&apos;t authorized it.
        </p>
        <div className="mt-8">
          <CtaRow location="whirlpool_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="family-heading">
        <SectionHeading id="family-heading" eyebrow="The Whirlpool family" title="Who else does" accent="Whirlpool make?" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <caption className="sr-only">Whirlpool Corporation brands, how each is positioned and what they share</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Brand</th>
                <th scope="col" className={th}>Usually positioned as</th>
                <th scope="col" className={th}>Shares a lot with</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {family.map(([brand, pos, shares]) => (
                <tr key={brand} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{brand}</th>
                  <td className="px-4 py-3 text-ink-body">{pos}</td>
                  <td className="px-4 py-3 text-ink-body">{shares}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-copy mt-8 max-w-3xl">
          <p>
            In practice, a Maytag top-load washer and a Whirlpool top-load washer from the same years often use the same lid lock, drain pump
            and basket drive, so <Link href="/brands/maytag-appliance-repair-temple-tx/">Maytag laundry repairs</Link> and Whirlpool ones look a
            lot alike. KitchenAid dishwashers share their pump and filter layout with Whirlpool models, and{' '}
            <Link href="/brands/kitchenaid-appliance-repair-temple-tx/">KitchenAid dishwasher and range quirks</Link> mostly come down to the
            upscale features layered on top. On a Kenmore, the first three digits of the model number tell you who built it: 110 on laundry, 106
            on refrigerators and 665 on dishwashers point to Whirlpool.
          </p>
        </div>
      </Section>

      <Section tone="white" labelledBy="model-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="model-heading" eyebrow="Model numbers" title="How do you read a" accent="Whirlpool model number?" />
          <div className="prose-copy">
            <p>
              Whirlpool model numbers start with letters that hint at the product. WRF is a French door refrigerator, WRS a side-by-side and WRT
              a top-freezer. WTW is a top-load washer and WFW a front-load. WED and WGD are electric and gas dryers, WDT is a dishwasher, and WFE
              and WFG are electric and gas ranges. The letters and digits after that cover size, features, color and the production series.
              Prefixes change from time to time, so confirm on the tag itself.
            </p>
            <p>
              Finding the tag is the harder part. On a top-load washer, look under the lid or on the back of the console. Dryers usually have it
              inside the door opening. Fridges put it inside the fresh-food section, on a side wall or under the top. Dishwashers have it on the
              edge of the tub or the door, and ranges behind the storage drawer or on the oven door frame. A phone photo of the whole tag is the
              most useful thing you can have ready.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="problems-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="problems-heading" eyebrow="Common faults" title="Common Whirlpool problems," accent="appliance by appliance" />
          <div className="prose-copy">
            <p>
              Top-load washers are where Whirlpool washer repair in Temple usually starts. The lid lock is a common failure, and a washer that
              fills and then won&apos;t agitate or spin, often with a lid lock code such as F5 E2 on many models, usually needs one. Drain pumps
              are next, especially when a sock or coin gets through. Codes and the stage where the cycle stopped narrow it down, and{' '}
              <Link href="/washer-repair-temple-tx/">how a washer gets diagnosed by cycle stage</Link> applies to Whirlpool machines directly.
              Confirm any code in your manual.
            </p>
            <p>
              Whirlpool dryer repair, and Maytag too, often comes down to one familiar weak point: the thermal fuse. It blows when the dryer
              overheats, usually because of a restricted vent, and the dryer then runs without heat or won&apos;t start at all, depending on the
              model. Replacing the fuse is quick, but <Link href="/dryer-repair-temple-tx/">why a dryer stops heating</Link> starts with the
              vent, since a new fuse on a clogged vent fails again.
            </p>
            <p>
              Newer Whirlpool dishwashers use a manual filter at the bottom of the tub instead of a self-cleaning grinder. When it isn&apos;t
              rinsed out regularly, dishes come out gritty, water stays in the bottom, and the drain pump works harder until it fails, one of the
              most common Whirlpool dishwasher repair calls. Twist out the filter and rinse it before calling; if water still sits after that,{' '}
              <Link href="/dishwasher-repair-temple-tx/">a dishwasher that won&apos;t drain</Link> usually has a pump or hose problem.
            </p>
            <p>
              Whirlpool refrigerator repair in Temple most often involves the ice maker or the evaporator fan. An ice maker that stops filling
              usually has an inlet valve or fill tube issue, and a fresh-food section that warms while the freezer stays cold often points to the
              fan behind the freezer panel or a frosted coil, which <Link href="/refrigerator-repair-temple-tx/">refrigerator repair</Link> covers
              step by step.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" eyebrow="Worth repairing?" title="Whirlpool appliance repair in Temple, TX:" accent="is it worth it?" />
          <div className="prose-copy">
            <p>
              Usually, yes, and that&apos;s worth knowing if you searched for Whirlpool repair near me in Temple. Whirlpool&apos;s biggest
              strength is its parts supply. Because the same parts fit Whirlpool, Maytag, Amana and many Kenmore models, common pieces like lid
              locks, pumps, thermal fuses and fans tend to be easy to find and reasonably priced, even for machines several years old.
            </p>
            <p>
              The exceptions are the usual ones. A main control board on an older washer or a sealed system failure on an older fridge can run
              close to the price of a new appliance. In those cases, ask for the repair price and compare it with replacing the unit before
              deciding. The visit fee and the price before work starts are the two numbers to get on the phone at{' '}
              <PhoneLink location="whirlpool_worth" className={flame} />.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="warranty-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="warranty-heading" eyebrow="Warranty" title="Still under the" accent="Whirlpool warranty?" dark />
          <p className="text-[17px] leading-relaxed text-white/75">
            If the appliance is new enough to be under Whirlpool&apos;s warranty, call Whirlpool first, since covered repairs go through their
            service network. Once coverage ends, the choice of repair is yours. Under the federal Magnuson-Moss Warranty Act, as the FTC explains
            it, a manufacturer generally can&apos;t void a warranty just because an independent service worked on the appliance, though damage
            caused by a bad repair isn&apos;t covered. Keep your paperwork and receipts either way.
          </p>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Whirlpool repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="whirlpool_final"
        title="Ready to get the Whirlpool"
        accent="running again?"
        cardHeadingLevel="p"
        cardTitle="Book a Whirlpool repair"
        text={
          <>
            Snap a photo of the model tag and note what the appliance is doing, then call{' '}
            <PhoneLink location="whirlpool_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a Whirlpool repair
            </Link>
            . A tag photo is the quickest route to the right part.
          </>
        }
      />
    </>
  );
}

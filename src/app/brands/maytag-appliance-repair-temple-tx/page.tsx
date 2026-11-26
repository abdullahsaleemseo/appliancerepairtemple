import Link from 'next/link';
import { routes, site } from '@/config/site';
import type { Faq } from '@/content/types';
import { CallButton, CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

/** Maytag brand page (source: content/brand-maytag-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/maytag-appliance-repair-temple-tx/';
const description =
  'Maytag appliance repair in Temple, TX: what wears out on Bravos washers, Maytag dryers and fridges, and how to read the model tag. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Maytag Appliance Repair Temple TX | Washers & Dryers',
  description,
  path,
});

const wear: [string, string, string][] = [
  [
    'Bravos top-load washer',
    'Lid lock, drive shift actuator, suspension rods',
    "Fills but won't agitate or spin; clicking with no movement; tub banging against the cabinet",
  ],
  ['Front-load washer', 'Door boot, drain pump, door lock', "Musty smell or water at the door; water left after the cycle; won't start with the door shut"],
  ['Electric or gas dryer', 'Thermal fuse, drive belt, drum rollers or idler pulley', "Runs cold or won't start; drum doesn't turn; thumping or squealing"],
  ['Refrigerator', 'Evaporator fan, defrost parts, ice maker inlet valve', 'Fresh-food side warm; frost on the freezer back wall; no ice'],
];

const faqs: Faq[] = [
  {
    q: 'Is a Maytag washer the same as a Whirlpool inside?',
    a: 'Many current models share the same platform, drive parts and controls, since Whirlpool owns Maytag. Maytag versions often add heavier-duty features or different styling, and sometimes longer parts coverage. Match parts by your exact model number rather than assuming a Whirlpool part fits.',
  },
  {
    q: 'Why does my Maytag Bravos click but not agitate?',
    a: "A clicking Bravos that fills but won't wash often has a failing shift actuator or a lid lock that isn't confirming closed. Unplug the washer for a minute to reset it, then try a short cycle. If it keeps clicking, the actuator or lid lock needs testing.",
  },
  {
    q: 'Can I stack a Maytag front-load washer and dryer?',
    a: "Many Maytag front-load pairs can be stacked with the stacking kit made for that model. Check the manual for the exact kit and confirm the dryer's vent connection and the washer's drain still reach once stacked. Don't stack top-load models.",
  },
  {
    q: 'Why does my Maytag dryer squeak when it starts?',
    a: "A squeak at startup that fades or changes as the drum turns usually comes from the idler pulley or drum rollers drying out and wearing. It won't fix itself, and a seized pulley can eventually break the belt, so have the belt path checked before that happens.",
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

export default function MaytagBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Maytag appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Maytag appliance repair',
          description,
          path,
          brand: 'Maytag',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'Maytag', path },
        ]}
        title={`Maytag Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Maytag laundry is still built to take a beating, but it isn&apos;t the same company it was when the reputation started: Maytag has been
          part of Whirlpool Corporation since 2006, and most of its machines now share Whirlpool&apos;s platforms and parts. That means the same
          handful of parts wear out on a Maytag as on its Whirlpool cousins, and Maytag appliance repair in Temple, TX usually comes down to one of
          them. Phone <PhoneLink location="maytag_intro" className={white} />, read off the model number and say which machine is acting up.
        </p>
        <div className="mt-8">
          <CtaRow location="maytag_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="rep-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="rep-heading" eyebrow="The laundry reputation" title="Does the heavy-duty" accent="reputation still hold?" />
          <div className="prose-copy">
            <p>
              Partly. Maytag earned its name on laundry, and its washers and dryers are still positioned as the tougher, no-frills choice, often with
              heavier-duty features than the matching Whirlpool model. Underneath, though, many Maytag machines are built on the same designs
              Whirlpool uses, so they wear in the same places. That&apos;s not bad news: shared parts are easy to find, and technicians already know
              where these machines give out.
            </p>
            <p>
              It also means codes overlap. Rather than repeat them here, the{' '}
              <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool error codes and diagnostic modes</Link> apply to many Maytag washers
              and dryers from the same years. Confirm any code against your Maytag manual.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="wear-heading">
        <SectionHeading id="wear-heading" eyebrow="Wear points" title="Where Maytag machines" accent="wear out" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[680px] text-left text-[15px]">
            <caption className="sr-only">Maytag machines, the parts that usually wear and the signs you will notice</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Maytag machine</th>
                <th scope="col" className={th}>Part that usually wears</th>
                <th scope="col" className={th}>Sign you&apos;ll notice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {wear.map(([machine, part, sign]) => (
                <tr key={machine} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{machine}</th>
                  <td className="px-4 py-3 text-ink-body">{part}</td>
                  <td className="px-4 py-3 text-ink-body">{sign}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-flame/30 bg-canvas p-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-[17px] leading-relaxed text-ink-body">
            If one of those signs matches yours, call{' '}
            <PhoneLink location="maytag_midpage_text" className="font-semibold text-flame underline decoration-flame/40 underline-offset-4" />, say which Maytag machine it is, read off the model number from the tag (a phone
            photo of the tag works too) and describe the sign in a sentence. That&apos;s usually enough to know which part to bring.
          </p>
          <CallButton location="maytag_midpage" className="shrink-0" />
        </div>
      </Section>

      <Section labelledBy="bravos-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="bravos-heading" eyebrow="Bravos washers" title="Maytag Bravos repair:" accent="lid lock, shifter and suspension" />
          <div className="prose-copy">
            <p>
              Bravos top-loaders account for a lot of Maytag washer repair in Temple. The lid lock has to confirm the lid is closed before the washer
              will agitate or spin, and a worn one leaves the machine filled and stalled. The shift actuator, a small motor-driven part on the bottom
              of the washer, switches the drive between wash and spin; when it fails, the washer may hum, click or spin without washing. Worn
              suspension rods let the tub drift so it knocks the cabinet on high-speed spin, even with a balanced load.
            </p>
            <p>
              A Maytag Bravos repair is usually one of those three parts, and each is a routine repair on a machine of reasonable age. The stage where
              the cycle stalls points to which one, the same way{' '}
              <Link href="/washer-repair-temple-tx/">tracing a washer problem through the cycle</Link> works for any top-loader.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="dryer-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="dryer-heading" eyebrow="Dryers" title="Maytag dryers:" accent="fuse, belt and rollers" />
          <div className="prose-copy">
            <p>
              For Maytag dryer repair, the thermal fuse is the common no-heat or no-start culprit, and it usually blows because airflow is restricted.
              Replacing it without checking the vent tends to end with another blown fuse, which is why a{' '}
              <Link href="/dryer-repair-temple-tx/">dryer that&apos;s stopped heating</Link> gets its airflow checked first. A broken belt leaves the
              motor running while the drum sits still, and worn rollers or an idler pulley announce themselves with a thump or squeal that gets worse
              over months.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="fridge-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fridge-heading" eyebrow="Refrigerators" title="Maytag" accent="refrigerators" />
          <div className="prose-copy">
            <p>
              On the kitchen side, Maytag refrigerator repair in Temple usually involves the evaporator fan, the defrost system or the ice maker&apos;s
              water supply, the same parts as on Whirlpool-built fridges. A warm fresh-food section with a cold freezer points to airflow, which{' '}
              <Link href="/refrigerator-repair-temple-tx/">refrigerator repair</Link> walks through step by step.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="model-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="model-heading" eyebrow="Model numbers" title="How to read a" accent="Maytag model number" />
          <div className="prose-copy">
            <p>
              The first letters of a Maytag model number name the product. MVW is a top-load washer (including the Bravos line), MHW a front-load
              washer, and MED and MGD are electric and gas dryers. Kitchen models follow the same idea, such as MFI for a French door refrigerator with
              an in-door ice maker. Washer tags hide beneath the lid or behind the console, and dryer tags sit in the door opening. Prefixes shift over
              time, so trust the tag over this list.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" eyebrow="Worth repairing?" title="Maytag appliance repair in Temple, TX:" accent="worth it, and what about the warranty?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Usually worth it. Lid locks, actuators, suspension rods, fuses, belts, pumps and fans are inexpensive parts on machines that otherwise
              have life left, and because they&apos;re shared with Whirlpool, they&apos;re easy to get. Two repairs deserve a second thought on an aging
              machine: a dead main control board, and a worn transmission or tub bearing, either of which can cost close to a new washer.
            </p>
            <p>
              Before paying for a big part, check the warranty card. Some Maytag laundry models carry a 10-year limited parts warranty on certain
              components, such as the drive motor or wash basket, and that coverage is typically parts only, not labor. If the machine is still
              covered, contact Maytag first. If you choose an independent technician after that, the FTC&apos;s explanation of the Magnuson-Moss
              Warranty Act is that a manufacturer generally can&apos;t void the warranty for that reason alone, though damage from a bad repair
              isn&apos;t covered.
            </p>
            <p>
              On the call, a few questions settle the rest: what the visit fee is, whether the repair price is given before any work starts, what part
              the technician thinks failed and why, and what&apos;s open on the schedule. If you searched for Maytag repair near me in Temple, those
              four answers tell you more than any ad.
            </p>
            <p className="text-[15px] text-white/55">
              This repair work is independent; Maytag and Whirlpool have nothing to do with it and haven&apos;t authorized it.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Maytag repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="maytag_final"
        title="Book your"
        accent="Maytag repair"
        cardHeadingLevel="p"
        cardTitle="Book a Maytag repair"
        text={
          <>
            Read the model number off the tag, note which machine and the sign you&apos;re seeing, then call{' '}
            <PhoneLink location="maytag_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a Maytag repair
            </Link>
            . The same goes for Maytag owners in{' '}
            <Link href={routes.areas} className={white}>
              Belton, Killeen and the other towns around Temple
            </Link>
            .
          </>
        }
      />
    </>
  );
}

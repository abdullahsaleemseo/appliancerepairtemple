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

/** Speed Queen brand page (source: content/brand-speed-queen-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/speed-queen-repair-temple-tx/';
const description =
  'Speed Queen repair in Temple, TX: TC5, TR and FF7 washers and matching dryers, and why the warranty card comes first. Questions? Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Speed Queen Washer & Dryer Repair Temple TX',
  description,
  path,
});

const models: [string, string][] = [
  [
    'TC5 (top-load, classic controls).',
    " The TC5 is the mechanical model: rotary knobs, a mechanical timer and an agitator. Owners pick it because there's very little electronics to fail. When one acts up, the timer, the lid lock assembly, the drive belt or the drain pump are the usual places to look, and all of them are serviceable parts.",
  ],
  [
    'TR series (top-load, electronic).',
    " TR models keep the top-load agitator design and add an electronic display and more cycle choices, with the controls at the rear. Mechanical repairs look much like the TC5's, but a no-start or an odd display can also point to the control board or a sensor, so the code or what the display shows matters.",
  ],
  [
    'FF7 (front-load).',
    " The FF7 is Speed Queen's heavy-built front-loader. It still has front-load habits: a door lock, a door boot that needs wiping, and a drain pump filter that collects coins and hair. If it won't drain or won't unlock, the filter and the lock come first.",
  ],
  [
    'Dryers (DC5, DR series, DF7).',
    ' The dryers match the washers: DC5 with mechanical controls, DR models with electronic displays and DF7 alongside the front-loader. Their repairs are classic dryer work, such as belts, idler pulleys, drum rollers, thermal fuses, heating elements on electric models and igniters on gas ones.',
  ],
];

const faqs: Faq[] = [
  {
    q: "Why won't my Speed Queen washer spin?",
    a: "On top-loaders, start with the lid: if the lid lock can't confirm the lid is closed, the washer won't spin. A worn drive belt or a drain problem can also stop the spin. On the FF7, check the drain pump filter, since the washer won't spin out water it can't drain.",
  },
  {
    q: 'Are Speed Queen parts hard to find?',
    a: 'Usually not. Speed Queen keeps many parts available for years, and plenty of them are shared across models. The model and serial number pin down the exact part.',
  },
  {
    q: 'Is a Speed Queen TC5 easier to repair than a TR model?',
    a: "Somewhat. The TC5's mechanical controls have fewer electronic parts, so more of its repairs are straightforward mechanical swaps. TR models share most of the mechanical parts but add a control board and display that can fail.",
  },
  {
    q: 'Can I use any detergent in my Speed Queen?',
    a: 'Follow the manual for your model. Top-load agitator models and the FF7 front-loader run well on HE detergent in the right amount; too much soap leaves residue, slows draining and can cause odors, especially in a front-load door boot.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

export default function SpeedQueenBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Speed Queen washer and dryer repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Speed Queen washer and dryer repair',
          description,
          path,
          brand: 'Speed Queen',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'Speed Queen', path },
        ]}
        title={`Speed Queen Washer and Dryer Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          A broken Speed Queen is almost always worth fixing, because these machines are built to be repaired: metal parts, simple layouts and parts
          that stay available for years. For Speed Queen repair in Temple, TX, the first step is checking whether the warranty still covers it, since
          Speed Queen warranties are long. Have the model and serial number ready and call <PhoneLink location="speedqueen_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="speedqueen_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="built-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="built-heading" eyebrow="Alliance Laundry Systems" title="Built to" accent="be repaired" />
          <div className="prose-copy">
            <p>
              Speed Queen washers and dryers are made by Alliance Laundry Systems in Ripon, Wisconsin, a company that also builds coin and card laundry
              equipment for apartment laundry rooms and laundromats. The home machines borrow that commercial thinking. Cabinets and tubs are heavy,
              controls are kept simple on many models, and the parts that wear out (belts, lid locks, pumps, switches) are meant to be swapped, not
              treated as a reason to haul the machine to the curb.
            </p>
            <p>
              That changes the usual repair-or-replace math. On a lot of brands, a ten-year-old washer with a failed part is a replacement candidate. On
              a Speed Queen, ten years can be the middle of its working life.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="warranty-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="warranty-heading" eyebrow="Before you pay" title="Check the warranty" accent="card first" />
          <div className="prose-copy">
            <p>
              Before paying for any Speed Queen repair, find the warranty card or the purchase receipt. Speed Queen sells many home models with several
              years of parts and labor coverage, and the length depends on the model and, on some, the serial number. Still inside that window? Then
              Speed Queen is your first call; its service network handles covered repairs, and paying someone else for a covered failure is money you
              didn&apos;t need to spend.
            </p>
            <p>
              If the coverage has run out, or the problem isn&apos;t covered, an independent repair is your call. The federal Magnuson-Moss Warranty
              Act, as explained on the FTC&apos;s site, means a maker usually can&apos;t cancel coverage simply because an outside technician opened the
              machine; harm done by a sloppy repair, though, belongs to the person who did it.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="models-heading">
        <SectionHeading
          id="models-heading"
          eyebrow="Model guide"
          title="A Speed Queen"
          accent="model guide"
          intro="The model name on the console tells a technician a lot before the visit."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {models.map(([lead, rest]) => (
            <div key={lead} className="rounded-2xl border border-sand bg-white p-5 text-[16px] leading-relaxed text-ink-body">
              <strong className="font-semibold text-ink">{lead}</strong>
              {rest}
            </div>
          ))}
        </div>
        <MidCta
          location="speedqueen_midpage"
          before={<>Know your model? Dial </>}
          after={
            <>
              {' '}
              with three details: the model name from the console, the serial number from the tag, and what the machine does when you start a cycle.
              If there&apos;s a code on a TR, FF7 or DR, read that out too.
            </>
          }
        />
      </Section>

      <Section tone="white" labelledBy="washer-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="washer-heading" eyebrow="Washers" title="Common Speed Queen" accent="washer repairs" />
          <div className="prose-copy">
            <p>
              On top-loaders, the lid lock comes up a lot. The washer won&apos;t spin, or sometimes won&apos;t start, when it can&apos;t confirm the lid
              is closed and locked. A worn drive belt causes a washer that fills and drains but barely agitates or spins slowly. If water sits in the
              tub after the cycle, the pump may have failed or picked up a sock or coin. On a TC5, a timer that won&apos;t advance or skips steps is a
              mechanical part that can be replaced on its own. The same cycle-by-cycle reasoning in{' '}
              <Link href="/washer-repair-temple-tx/">narrowing down a washer fault by cycle</Link> fits every model here.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="dryer-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="dryer-heading" eyebrow="Dryers" title="Common Speed Queen" accent="dryer repairs" />
          <div className="prose-copy">
            <p>
              A dryer that tumbles without heat usually has a blown thermal fuse, a failed element or, on gas, an igniter or valve coil problem. A
              thumping or squealing drum points to rollers, the idler pulley or a worn belt. Before replacing heat parts, check the vent: a long or
              crushed vent makes any dryer, Speed Queen included, overheat and blow fuses.{' '}
              <Link href="/dryer-repair-temple-tx/">The dryer heat checklist, step by step</Link>, lays out the order, and a vent that hasn&apos;t been
              cleaned in years is worth handing to <Link href="/dryer-vent-cleaning-temple-tx/">a dryer vent cleaning visit</Link> before the next
              load.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="pm-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="pm-heading" eyebrow="Rentals" title="For property managers" accent="and landlords" />
          <div className="prose-copy">
            <p>
              Speed Queen is popular with property managers around Temple and Killeen for the same reason it&apos;s built the way it is: a machine that
              can be fixed in place keeps a unit rentable. A few things help. Keep the model and serial number of each machine on file. Ask tenants to
              report noises and slow draining early, before a small part takes a bigger one with it. And before booking, check whether the machine is
              still within its warranty, because a newer unit often is. Coin or card machines in a shared laundry room are commercial equipment with
              their own controls; say so when you phone, before any visit is booked.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="opinion-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="opinion-heading" eyebrow="Repair or replace" title="Speed Queen repair in Temple, TX:" accent="a straight opinion" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              <strong className="text-white">Repair it.</strong> For nearly every failure on a Speed Queen, fixing the machine costs a fraction of
              replacing it, and the replacement you&apos;d want is usually another Speed Queen. The exceptions are rare: a cracked tub or badly rusted
              cabinet on an old unit, or a machine already repaired so many times that its owner has lost patience. Even then, the decision deserves a
              real diagnosis first.
            </p>
            <p>
              On the phone, pin down three things: what the trip and the repair will run, agreed before any work; whether the part is on hand or on
              order; and the first open slot on the schedule. Those answers tell anyone who searched Speed Queen repair near me in Temple what they need
              to know.
            </p>
            <p className="text-[15px] text-white/55">
              Speed Queen and Alliance Laundry Systems have nothing to do with this service and have not authorized it.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Speed Queen repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="speedqueen_final"
        title="Get it"
        accent="running again"
        cardHeadingLevel="p"
        cardTitle="Book a Speed Queen repair"
        text={
          <>
            Find the model on the console and the serial number on the tag, then call{' '}
            <PhoneLink location="speedqueen_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a Speed Queen repair
            </Link>
            . Owners and property managers across{' '}
            <Link href={routes.areas} className={white}>
              Belton, Killeen, Salado and other Bell County towns
            </Link>{' '}
            can do the same.
          </>
        }
      />
    </>
  );
}

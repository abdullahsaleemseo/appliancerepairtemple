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

/** Amana brand page (source: content/brand-amana-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/amana-appliance-repair-temple-tx/';
const description =
  'Amana appliance repair in Temple, TX: top-load washers, top-freezer fridges and coil ranges, and when a basic model is worth fixing. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Amana Appliance Repair Temple TX | Fridges, Washers, Ranges',
  description,
  path,
});

const decide: [string, string, string][] = [
  ['Washer lid switch or lid lock', 'Yes', 'A small part, and the washer is otherwise fine'],
  ['Washer drain pump or motor coupler', 'Yes', 'Common parts, often on hand'],
  ['Washer transmission or tub bearing', 'Weigh it', 'Labor-heavy; on an older washer a new basic model may make more sense'],
  ['Fridge defrost heater, sensor or fan', 'Yes', 'The usual cause of a top-freezer that frosts up or warms'],
  ['Fridge compressor or sealed system', 'Usually not', 'On a basic fridge the repair can come close to a replacement'],
  ['Range coil element or receptacle', 'Yes', 'Among the cheapest repairs there are'],
  ['Range control board on an older model', 'Weigh it', 'Compare the part and labor with a new entry-level range'],
  ['Cracked smoothtop glass', 'Weigh it', 'The glass is a large part; age decides it'],
];

const tags: [string, string][] = [
  ['Top-freezer refrigerator:', ' on the wall of the lower compartment, often close to the light housing.'],
  ['Top-load washer:', ' under the lid near the hinge, or stuck to the rear of the console.'],
  ['Dryer:', ' around the door opening.'],
  ['Range:', ' pull the bottom drawer out and look at the frame, or open the oven door and check the edges.'],
];

const faqs: Faq[] = [
  {
    q: 'Do you repair Amana air conditioners?',
    a: 'No. Amana heating and air conditioning equipment is a separate product line made by a different company, and it needs a licensed HVAC contractor. Amana refrigerators, washers, dryers, ranges, dishwashers and microwaves are household appliances, and those are what this service repairs.',
  },
  {
    q: 'Are Amana and Whirlpool parts the same?',
    a: 'Often, yes. Amana is a Whirlpool brand, so many of its parts also fit Whirlpool and Maytag models built in the same years. The part still has to be matched to your exact model number, because similar-looking parts can differ.',
  },
  {
    q: "My Amana washer fills and agitates but won't spin. What should I check?",
    a: "Check that the lid closes fully, nothing blocks the switch or lock, and the load isn't lopsided. If it still won't spin, the lid switch, the motor coupler on older direct-drive models, or a drain problem is the likely cause.",
  },
  {
    q: 'Is it worth fixing a cheap Amana fridge?',
    a: 'For a defrost part, a fan or a thermostat, usually yes, because those repairs cost well under the price of a new fridge. When an older one has a failed compressor or a refrigerant leak, a new basic fridge usually makes more sense.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

export default function AmanaBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Amana appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Amana appliance repair',
          description,
          path,
          brand: 'Amana',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'Amana', path },
        ]}
        title={`Amana Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Most Amana appliances are simple machines, and simple machines usually have simple fixes: a lid switch, a defrost part, a burner element.
          The real question in Amana appliance repair in Temple, TX is whether the repair costs sensibly less than a new basic model, and for most
          common failures it does. Copy the letters and numbers from the tag, say what the appliance is or isn&apos;t doing, and call{' '}
          <PhoneLink location="amana_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="amana_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="simple-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="simple-heading" eyebrow="A Whirlpool brand" title="Simple machines," accent="simple fixes" />
          <div className="prose-copy">
            <p>
              Amana belongs to Whirlpool Corporation, and most Amana kitchen and laundry appliances sit on Whirlpool designs with fewer features on
              top. Landlords and builders around Temple pick them for rentals, starter homes and new builds because they&apos;re plain, sturdy and
              cheap to keep running. The parts that fail are common and shared across the Whirlpool family. Error codes and test modes often match too,
              as laid out with <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool&apos;s codes and service modes</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="decide-heading">
        <SectionHeading
          id="decide-heading"
          eyebrow="Repair or replace"
          title="Repair it or buy"
          accent="a basic replacement?"
          intro="With a low-cost appliance the math is tight. Here is where the line usually falls."
        />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <caption className="sr-only">Common Amana failures and whether each is usually worth repairing on a basic model</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Failure</th>
                <th scope="col" className={th}>Usually worth repairing?</th>
                <th scope="col" className={th}>Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {decide.map(([failure, verdict, why]) => (
                <tr key={failure} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{failure}</th>
                  <td className="px-4 py-3 font-semibold text-ink-body">{verdict}</td>
                  <td className="px-4 py-3 text-ink-body">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-copy mt-6">
          <p>Age breaks the tie: a &quot;weigh it&quot; repair on an older machine usually points to replacing it.</p>
        </div>
        <MidCta
          location="amana_midpage"
          before={<>Not sure which row you&apos;re in? Phone </>}
          after={
            <>
              {' '}
              and have three things handy: the model number, a rough age, and what happens when you start it. You&apos;ll get a straight answer on
              whether the repair makes sense before anyone opens it up.
            </>
          }
        />
      </Section>

      <Section labelledBy="washer-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="washer-heading" eyebrow="Laundry" title="Amana" accent="top-load washers" />
          <div className="prose-copy">
            <p>
              Many Amana washers are agitator top-loaders. When one won&apos;t spin, the lid switch or lid lock is the first suspect, since the washer
              refuses to spin if it can&apos;t tell the lid is shut. Older direct-drive designs use a small rubber and plastic motor coupler that wears
              out and breaks, leaving the motor humming with nothing turning. Water left in the tub points to the drain pump or a sock caught in it.
              For Amana washer repair in Temple, the step where the cycle stops tells most of the story, the same way it does in{' '}
              <Link href="/washer-repair-temple-tx/">figuring out where any washer gets stuck</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="fridge-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fridge-heading" eyebrow="Refrigerators" title="Amana top-freezer" accent="refrigerators" />
          <div className="prose-copy">
            <p>
              On the classic top-freezer Amana, when the freezer stays cold but the fresh-food side warms, the cause is usually frost choking the
              evaporator coil, from a failed defrost heater, defrost thermostat or defrost control. A quiet evaporator fan or a dusty, stalled condenser
              fan gives a similar result. A dial thermostat that won&apos;t click on is the other usual suspect. Amana refrigerator repair on these
              models is mostly about those few parts, and{' '}
              <Link href="/refrigerator-repair-temple-tx/">what to check when a fridge warms up</Link> walks through each one.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="range-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="range-heading" eyebrow="Cooking" title="Amana ranges:" accent="coil and smoothtop" />
          <div className="prose-copy">
            <p>
              Amana electric ranges use either exposed coils or a smooth glass top. A coil burner that won&apos;t heat is often the coil itself or the
              receptacle it plugs into, which can burn and pit over time; an element that only heats on high points to its control switch. In the
              oven, bake elements and temperature sensors are the routine parts. Amana oven repair follows the part-by-part testing in{' '}
              <Link href="/oven-stove-repair-temple-tx/">how oven and range faults get tracked down</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="tag-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="tag-heading" eyebrow="Model number" title="Where's the tag" accent="on an Amana?" />
          <div>
            <ul className="grid gap-3">
              {tags.map(([lead, rest]) => (
                <li key={lead} className="rounded-2xl border border-sand bg-canvas p-4 text-[16px] leading-relaxed text-ink-body">
                  <strong className="font-semibold text-ink">{lead}</strong>
                  {rest}
                </li>
              ))}
            </ul>
            <div className="prose-copy mt-6">
              <p>
                The first letters often name the product: NTW on many top-load washers, ART on top-freezer fridges, AER on electric ranges. Copy the
                full string and the serial number too.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="rental-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="rental-heading"
            eyebrow="Rentals"
            title="Landlords and tenants:"
            accent="who calls, and what to send"
            intro="Many of these calls start with a tenant and end with a landlord. A few habits keep it quick."
          />
          <div>
            <div className="prose-copy">
              <p>
                <strong>If you rent:</strong> check your lease or ask your property manager before booking anything yourself; in most rentals the
                landlord decides who repairs the appliances and who pays. Send them the model number, a short description of the problem and a photo
                or short video of it happening. If water is leaking, turn the supply off and say so.
              </p>
              <p>
                <strong>If you own the rental:</strong> put the tenant&apos;s name, phone number and good times for access in the booking, along with
                the unit address. On a tired unit, call {site.brandName} to talk through repair versus replace before you commit.
              </p>
              <p>
                <strong>If you&apos;re a builder or the home is new:</strong> a recently installed Amana may still be under the manufacturer&apos;s
                warranty, so start with Amana&apos;s service line using the purchase or closing date. Once that runs out, federal law as the FTC
                explains it lets the owner pick an independent technician without voiding coverage, though harm caused by a careless repair isn&apos;t
                covered.
              </p>
            </div>
            <aside className="mt-8 rounded-2xl border border-flame/30 bg-white p-6" aria-label="About Amana air conditioners and furnaces">
              <p className="font-display text-lg font-semibold text-ink">About Amana air conditioners and furnaces</p>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-body">
                Amana-brand heating and air conditioning equipment is made by a different company from Amana kitchen and laundry appliances. For an
                Amana AC, heat pump or furnace, call a licensed HVAC contractor.
              </p>
            </aside>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="ask-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="ask-heading" eyebrow="Before you book" title="Amana appliance repair in Temple, TX:" accent="what to ask on the call" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Three questions cover cost, trust and timing. Settle the trip charge and repair price before any work starts. Find out whether the failed
              part is a common Whirlpool-family part or something only that model uses. And check when the schedule has an opening and whether the
              part is likely on the truck or needs ordering. If you searched Amana repair near me in Temple, judge any service by how clearly it
              answers those.
            </p>
            <p className="text-[15px] text-white/55">Independent of Amana and Whirlpool: no connection to either, and no authorization from either.</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Amana repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="amana_final"
        title="Have the tag"
        accent="ready"
        cardHeadingLevel="p"
        cardTitle="Book an Amana repair"
        text={
          <>
            Write down the model number, how old the appliance is and what it&apos;s doing, then call{' '}
            <PhoneLink location="amana_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book an Amana repair
            </Link>
            . Rentals and homes in{' '}
            <Link href={routes.areas} className={white}>
              Belton, Killeen and the rest of the Temple area
            </Link>{' '}
            book the same way.
          </>
        }
      />
    </>
  );
}

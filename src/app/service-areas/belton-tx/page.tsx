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

/** Belton area page (source: content/area-belton-v1.md, Nov 2026). Replaces the generic area template for this slug. */
const path = '/service-areas/belton-tx/';
const description =
  'Appliance repair in Belton, TX 76513: rentals near UMHB, older homes by Nolan Creek and lake houses. Fridges, washers and dryers. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Belton TX | Near UMHB & Lake Belton',
  description,
  path,
});

const rows: [string, string, string][] = [
  ['Who calls', 'Usually your landlord or property manager; check your lease before booking yourself', 'You do'],
  ['Who pays', 'Usually the landlord, unless the lease or the damage says otherwise', "You, unless it's still covered by the maker's warranty"],
  ['What to send', "Model number, a short video of the problem, and when you're home", 'Model number, the symptom, and how old the appliance is'],
  [
    'Common trouble',
    'Pumps and seals stuck after a summer sitting empty, lint-packed dryer vents, overloaded washers',
    'Worn parts on long-serving machines, original shutoff valves, long vent runs in older laundry rooms',
  ],
  ['Repair or replace', "The owner's call; share what the technician found", 'Usually repair, unless the appliance is old and the part is a major one'],
];

const faqs: Faq[] = [
  {
    q: 'Is there a travel charge to Belton?',
    a: 'Ask when you call. Lead with your Belton address; whatever applies, travel or visit fee, gets spelled out before a time is set.',
  },
  {
    q: 'I rent near UMHB. Can I book the repair myself?',
    a: 'You can call, but check your lease first. Many leases leave appliance repairs, and the bill, to the landlord or property manager. If they say go ahead, have their OK handy when you book.',
  },
  {
    q: 'My lake house freezer quit while nobody was there. What should I do first?',
    a: "Keep the lid or door shut, check that the outlet and any GFCI haven't tripped, and look at whether the freezer is running at all. Then call with the brand, model and what you found. Move food to a working freezer or coolers if it's starting to thaw.",
  },
  {
    q: 'Do you cover Belton addresses out past the city limits?',
    a: 'Many of them, yes. The 76513 ZIP runs well beyond town. Give your street address and nearest crossroad, and the answer comes on the same call.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';
const h3 = 'font-display text-xl font-semibold text-ink';

export default function BeltonAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Appliance repair in Belton, TX',
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: 'Belton, TX' },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: 'Belton', path },
        ]}
        title="Appliance Repair in Belton, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Yes, Belton is covered, every street in the 76513 ZIP from downtown to the lake. Call <PhoneLink location="belton_intro" className={white} />,
          give the street and ZIP, describe the trouble in a sentence, and the scheduler will tell you when a technician can get there.
        </p>
        <div className="mt-8">
          <CtaRow location="belton_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="two-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="two-heading" eyebrow="76513" title="Two" accent="Beltons" />
          <div className="prose-copy">
            <p>
              Belton is really two towns sharing one ZIP code. One is the college town around the University of Mary Hardin-Baylor, where apartments,
              duplexes and rented houses change hands every school year. The other is the county seat: the Bell County Courthouse downtown, older
              streets along Nolan Creek, family neighborhoods that have been there for decades, and homes stretching out toward Lake Belton.
            </p>
            <p>
              The appliances are often the same brands in both. What&apos;s different is who calls, who decides and what tends to go wrong. A washer in
              a student rental has had four tenants in four years; a washer in a house off Main Street may have had one family for fifteen. Knowing
              which Belton you&apos;re in makes the call shorter.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="rent-heading">
        <SectionHeading id="rent-heading" eyebrow="Rent or own" title="Renting or owning in Belton:" accent="what to do" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[680px] text-left text-[15px]">
            <caption className="sr-only">What renters and owners in Belton should do when an appliance breaks</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <td className={th} />
                <th scope="col" className={th}>If you rent</th>
                <th scope="col" className={th}>If you own</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {rows.map(([label, rent, own]) => (
                <tr key={label} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{label}</th>
                  <td className="px-4 py-3 text-ink-body">{rent}</td>
                  <td className="px-4 py-3 text-ink-body">{own}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-2xl border border-sand bg-canvas p-6">
          <h3 className={h3}>For landlords near UMHB</h3>
          <p className="mt-2 text-[16px] leading-relaxed text-ink-body">
            Turnover is the pattern here. Units sit empty from May to August, then fill up all at once, and an appliance that worked at move-out can
            greet a new tenant with a stuck drain pump or a fridge that smells. A quick run of the washer, dishwasher and ice maker a week before
            move-in catches a lot of it. When you book, put the tenant&apos;s name, phone and the unit number in the request so access isn&apos;t a
            second phone call.
          </p>
        </div>
        <MidCta
          location="belton_midpage"
          before={
            <>
              <strong className="font-semibold text-ink">Before you call from Belton:</strong> have your street address, the appliance&apos;s brand and
              model number, and one line about what it&apos;s doing ready. If it&apos;s a rental, have the landlord&apos;s OK or the tenant&apos;s
              contact. Then call{' '}
            </>
          }
          after={<>; give the street as well as the ZIP, because 76513 also covers Morgan&apos;s Point Resort and a lot of rural road west of town.</>}
        />
      </Section>

      <Section labelledBy="fast-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fast-heading" eyebrow="Timing" title="How fast can someone" accent="get to Belton?" />
          <div className="prose-copy">
            <p>
              Belton sits right against Temple, so getting there isn&apos;t the hard part. Whether today works depends on the schedule and on whether
              the repair needs a part that has to be ordered. A same-day visit to Belton is often possible when the schedule has room and the part is
              on hand, and the scheduler will tell you honestly what&apos;s open when you call. If the fridge is warm or water is on the floor, say so
              first.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="breaks-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="breaks-heading" eyebrow="Common repairs" title="What usually breaks" accent="in Belton homes" />
          <div className="prose-copy">
            <h3 className={h3}>Washers</h3>
            <p>
              In the rentals, washers take a beating: overloaded drums, coins and hairpins in the pump, doors slammed shut. In older homes, it&apos;s
              worn parts after years of service. Either way, the point in the cycle where it quits is the clue, the way{' '}
              <Link href="/washer-repair-temple-tx/">the washer guide narrows it down by cycle stage</Link>.
            </p>
            <h3 className={`mt-8 ${h3}`}>Dryers</h3>
            <p>
              Many older Belton laundry rooms have long or crooked vent runs, and student units pile up lint between tenants. A dryer that runs but
              stays cool, or takes two cycles, often has a vent problem behind a blown fuse. Clear the vent before blaming the dryer, then work through{' '}
              <Link href="/dryer-repair-temple-tx/">why a dryer stops heating</Link>.
            </p>
            <h3 className={`mt-8 ${h3}`}>Refrigerators</h3>
            <p>
              Belton summers are hard on fridges, especially ones squeezed into tight kitchen spaces or second units in a hot garage. Dusty condenser
              coils and a stalled fan come first; a frosted-over back wall in the freezer points to defrost. The full list of checks is in{' '}
              <Link href="/refrigerator-repair-temple-tx/">the fridge cooling checks, start to finish</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="town-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="town-heading" eyebrow="Neighbors" title="Around town" accent="and next door" />
          <div className="prose-copy">
            <p>
              Downtown Belton, around the courthouse square and along Nolan Creek, has some of the oldest houses in the area, where hookups and shutoff
              valves are worth a look along with the appliance. Out toward the lake, homes and weekend places tend to have extra freezers and ice
              makers that sit unused, then work hard. Just past Belton on the lake,{' '}
              <Link href="/service-areas/morgans-point-resort-tx/">Morgan&apos;s Point Resort</Link> shares the same ZIP, and a short drive south down
              I-35, <Link href="/service-areas/salado-tx/">Salado</Link> is covered as well. The full list of towns is on{' '}
              <Link href={routes.areas}>the Bell County coverage map</Link>, and Temple itself is on{' '}
              <Link href={routes.home}>the appliance repair homepage for Temple</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Belton" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="belton_final"
        title="Call from"
        accent="either Belton"
        cardHeadingLevel="p"
        cardTitle="Book a Belton repair"
        text={
          <>
            Student rental or family home, downtown or by the lake, phone <PhoneLink location="belton_final_text" className={white} /> with the street
            and ZIP, or{' '}
            <Link href={routes.request} className={white}>
              book a Belton repair online
            </Link>
            .
          </>
        }
      />
    </>
  );
}

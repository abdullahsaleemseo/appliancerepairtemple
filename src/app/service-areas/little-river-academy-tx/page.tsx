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

/** Little River-Academy area page (source: content/area-little-river-academy-v1.md, Nov 2026). Replaces the generic area template for this slug. */
const path = '/service-areas/little-river-academy-tx/';
const description =
  'Appliance repair in Little River-Academy, TX 76554, season by season: garage fridges, deer season freezers, cold snaps and dryer vents. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Little River-Academy TX | Home & Farm',
  description,
  path,
});

const seasons: [string, string, string][] = [
  [
    'Summer',
    'Garage fridges and freezers run nonstop in the heat, condenser coils clog with dust, and compressors work hardest',
    'Vacuum the coils, leave a few inches of space at the back and sides, keep units out of direct afternoon sun, and check that the fan near the compressor spins',
  ],
  [
    'Fall',
    'Deep freezers get loaded with a whole deer or a big batch of processed meat at once; frost buildup from summer cuts capacity',
    'Defrost before the season, freeze warm meat in smaller batches over a couple of days, and leave room for air to move',
  ],
  [
    'Winter',
    "Washers in unheated utility rooms freeze in hoses and pumps; a garage fridge's freezer side warms when the room gets cold",
    "On hard-freeze nights, shut the washer's water valves and drain the hoses; for a garage fridge, check the manual for a cold-weather setting",
  ],
  [
    'Spring',
    'Pollen and lint clog the outside dryer vent hood, and birds sometimes nest in the vent',
    'Check that the vent flap opens freely while the dryer runs, clear the hood screen, and keep the run short and straight',
  ],
];

const faqs: Faq[] = [
  {
    q: 'Do you come out to 76554?',
    a: 'Yes. Little River-Academy and the surrounding 76554 area are covered. Give the street and nearest crossroad so the visit is planned for the right part of town.',
  },
  {
    q: 'Should I defrost my chest freezer before deer season?',
    a: "If there's more than about a quarter inch of frost on the walls, yes. Move the food to coolers, unplug the freezer, let it thaw with the lid open and towels down, dry it, and give it several hours to cool back down before loading.",
  },
  {
    q: 'How do I keep a washer in an unheated room from freezing?',
    a: 'On nights below freezing, close both water valves, disconnect and drain the fill hoses, and run a short drain or spin cycle to empty the pump. Reconnect everything once the room warms up.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

function Season({ id, eyebrow, title, accent, tone, children }: { id: string; eyebrow: string; title: string; accent: string; tone?: 'white'; children: React.ReactNode }) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading id={id} eyebrow={eyebrow} title={title} accent={accent} />
        <div className="prose-copy">{children}</div>
      </div>
    </Section>
  );
}

export default function LittleRiverAcademyAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Appliance repair in Little River-Academy, TX',
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: 'Little River-Academy, TX' },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: 'Little River-Academy', path },
        ]}
        title="Appliance Repair in Little River-Academy, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Little River-Academy is part of the service area, in town and out along the 76554 roads. For appliance repair in Little River-Academy, TX,
          ring <PhoneLink location="littleriver_intro" className={white} /> and mention your street and 76554; the week&apos;s openings get sorted on
          that call. Out here, what breaks tends to follow the time of year, so this page is laid out by season.
        </p>
        <div className="mt-8">
          <CtaRow location="littleriver_hero" dark />
        </div>
      </PageHero>

      <Season id="year-heading" eyebrow="76554" title="Through" accent="the year">
        <p>
          Little River-Academy sits southeast of Temple along TX-95, a small town with Academy ISD at its center and plenty of homes on bigger lots
          outside it. Many of those homes keep a spare refrigerator out in the garage, a deep freezer reserved for deer season, and a washer and dryer
          in a utility room that isn&apos;t heated or cooled like the house. Those are the appliances that feel the weather, and each season brings its
          own kind of call.
        </p>
      </Season>

      <Section tone="white" labelledBy="when-heading">
        <SectionHeading id="when-heading" eyebrow="Season by season" title="What fails" accent="when" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[720px] text-left text-[15px]">
            <caption className="sr-only">Appliance problems by season in Little River-Academy and what to do about each</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Season</th>
                <th scope="col" className={th}>What tends to fail</th>
                <th scope="col" className={th}>What to do about it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {seasons.map(([season, fails, todo]) => (
                <tr key={season} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{season}</th>
                  <td className="px-4 py-3 text-ink-body">{fails}</td>
                  <td className="px-4 py-3 text-ink-body">{todo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MidCta
          location="littleriver_midpage"
          before={<>If the season&apos;s problem has already set in and the quick fix didn&apos;t do it, phone </>}
          after={
            <>
              {' '}
              ready to share the appliance brand, a photo of its model tag, what it&apos;s doing, and where it sits (garage, utility room, shop). For a
              freezer full of meat, say so first; it changes how urgent the visit is.
            </>
          }
        />
      </Section>

      <Season id="summer-heading" eyebrow="Summer" title="Summer:" accent="garage fridges and freezers">
        <p>
          A refrigerator in a hot garage is working against the room all day. When it starts losing the fight, the first sign is usually a fresh-food
          side that won&apos;t drop below the mid-40s while the freezer still feels cold. Dust on the coils and a slow condenser fan are the common
          causes, and both are worth checking before anything else. If the coils are clean and it&apos;s still warm, the defrost system and controls
          come next, laid out in <Link href="/refrigerator-repair-temple-tx/">the cooling checks for a refrigerator that runs warm</Link>.
        </p>
      </Season>

      <Season id="fall-heading" eyebrow="Fall" title="Fall: deer season" accent="and the deep freezer" tone="white">
        <p>
          Loading a chest freezer with a whole season&apos;s meat in one afternoon asks a lot of it. A freezer can only pull heat out so fast, and a big
          warm load can take a day or more to come down to temperature, sometimes thawing what was already in there. Freezing in batches helps. So
          does a pre-season defrost: an inch of frost on the walls insulates the food from the cold. If the freezer runs constantly, frosts unevenly,
          or won&apos;t get below the teens, work through the causes listed under{' '}
          <Link href="/freezer-repair-temple-tx/">freezer repair, chest and upright</Link>.
        </p>
      </Season>

      <Season id="winter-heading" eyebrow="Winter" title="Winter: cold snaps" accent="and unheated rooms">
        <p>
          A washer in an unheated room can freeze water left in its pump and hoses, and a cracked fill hose won&apos;t show itself until the next load
          floods the floor. On nights headed below freezing, close the supply valves, disconnect and drain the fill hoses, and run a short spin to
          clear the pump. A garage refrigerator has a different winter problem: its thermostat sits in the fresh-food section, so when the garage
          itself is cold, the compressor barely runs and the freezer side can start to soften.
        </p>
      </Season>

      <Season id="spring-heading" eyebrow="Spring" title="Spring:" accent="dryer vents" tone="white">
        <p>
          Spring pollen coats the outside vent hood, and birds like a warm vent opening for nesting. Either one restricts airflow, and a restricted
          dryer runs hot, takes longer and blows thermal fuses. Go outside while the dryer runs and look: the flap should open and you should feel
          strong airflow. If it&apos;s weak, a full{' '}
          <Link href="/dryer-vent-cleaning-temple-tx/">dryer vent cleaning from dryer to roof or wall</Link> clears the whole run, not just the end you
          can see.
        </p>
      </Season>

      <Section tone="ink" labelledBy="sameday-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="sameday-heading" eyebrow="Timing" title="Same day appliance repair" accent="in Little River-Academy?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Little River-Academy is a short drive down TX-95 from Temple, so getting there isn&apos;t usually the hold-up. Whether a technician can
              come the same day depends on the route already set for that day and on the part the repair needs. How fast someone can get to Little
              River-Academy is something the scheduler can tell you on the call. If a freezer full of venison is warming, lead with that.
            </p>
          </div>
        </div>
      </Section>

      <Season id="cost-heading" eyebrow="Cost" title="Before any" accent="work starts">
        <p>
          Before anything is opened up, have the trip cost and the repair figure spelled out. For an older garage fridge or freezer, ask whether the
          repair is worth it compared with a replacement, since a second unit doesn&apos;t always justify a big repair.
        </p>
      </Season>

      <Season id="near-heading" eyebrow="Neighbors" title="Nearby" accent="towns" tone="white">
        <p>
          East of Temple on US-190, <Link href="/service-areas/rogers-tx/">Rogers</Link> is a short drive away, and farther down TX-95,{' '}
          <Link href="/service-areas/holland-tx/">Holland</Link> is the next town south. All the covered towns are on{' '}
          <Link href={routes.areas}>the Bell County service list</Link>, and Little River-Academy appliance repair service handles the same appliances
          shown on <Link href={routes.home}>the Temple appliance repair main page</Link>.
        </p>
      </Season>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Little River-Academy" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="littleriver_final"
        title="Call with the"
        accent="season's problem"
        cardHeadingLevel="p"
        cardTitle="Call about a Little River-Academy repair"
        text={
          <>
            Whatever time of year it is, appliance repair in Little River-Academy, TX starts with a call to{' '}
            <PhoneLink location="littleriver_final_text" className={white} />: the brand, the tag photo, where the appliance sits and what it&apos;s
            doing.
          </>
        }
      />
    </>
  );
}

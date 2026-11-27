import Link from 'next/link';
import { routes, site } from '@/config/site';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';
import { MidCta } from '@/components/MidCta';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { absoluteUrl, pageMetadata } from '@/lib/seo';

/** About page (source: content/about-v2.md, Nov 2026). Schema: AboutPage + Organization + BreadcrumbList (breadcrumb from PageHero). */
const description =
  'Home appliance repair across Temple and Bell County: what happens when you call, which appliances and brands come up, and what to ask first. (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'About Appliance Repair Temple | Temple & Bell County, TX',
  description,
  path: routes.about,
});

const local: [string, string][] = [
  [
    'The housing mix.',
    ' Temple has older houses near Downtown Temple with alcoves built for smaller refrigerators and laundry closets with long, crooked dryer vents. It has ranch homes from a few decades back with original shutoff valves, newer subdivisions off West Adams Ave full of app-connected appliances that report error codes, and rentals that change hands every lease. A technician checks the hookups and the space around the appliance as well as the appliance itself, because in an older house that\'s often where the trouble started.',
  ],
  [
    'Summer heat.',
    ' A garage fridge or chest freezer in a Central Texas July runs nearly nonstop, and a dryer pushing air through a long vent into a hot attic works harder than the manual ever planned for. Dusty condenser coils and lint-packed vents cause a lot of summer breakdowns that look like failed parts.',
  ],
];

const steps: [string, string][] = [
  ['You describe it.', " The appliance, its brand, the model number from the tag when it's reachable, and what it's doing. Any code on the display helps."],
  ['You ask your questions.', ' The visit fee, how the repair price is worked out and the next open slot are all fair to ask before anything is booked.'],
  ['A technician comes out and finds the cause.', ' Then comes a plain explanation of the failed part, the fix and the cost.'],
  ['You decide.', " The repair starts once you've said yes. If the numbers don't make sense for the appliance's age, you'll hear that too."],
];

const credentials: [string, string][] = [
  [
    'Refrigerant work',
    ' needs EPA Section 608 certification. That applies to sealed system repairs on refrigerators and freezers, such as a compressor or a refrigerant leak.',
  ],
  [
    'Gas line work',
    ' belongs to a licensed plumber. Swapping the connector at the back of a range is one thing; running or changing gas piping is another.',
  ],
  ['Insurance', ' protects you if something goes wrong in your home. Ask any technician, including ours, for proof of coverage.'],
  [
    'The price',
    ' should come before the work. Ask for the full repair cost, parts and labor, before anything is replaced, and ask whether the parts and labor are covered afterward.',
  ],
];

function aboutSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${absoluteUrl(routes.about)}#page`,
      name: `About ${site.brandName}`,
      description,
      url: absoluteUrl(routes.about),
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.brandName,
      url: `${site.url}/`,
      telephone: site.phone.value.e164,
      areaServed: [
        { '@type': 'City', name: `${site.city}, ${site.stateAbbr}` },
        { '@type': 'AdministrativeArea', name: `Bell County, ${site.stateAbbr}` },
      ],
    },
  ];
}

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

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

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema()} />

      <PageHero crumbs={[{ name: 'About', path: routes.about }]} title={`About ${site.brandName}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          We repair home appliances across Temple and Bell County: refrigerators and freezers, washers and dryers, dishwashers, ranges, wall ovens,
          cooktops and microwaves. If a fridge, washer, oven or anything else at home has quit, call us at{' '}
          <PhoneLink location="about_intro" className={white} />, say what it&apos;s doing, and a technician takes it from there.
        </p>
        <div className="mt-8">
          <CtaRow location="about_hero" dark />
        </div>
      </PageHero>

      <Block id="homes-heading" eyebrow="What we do" title="Appliance repair for homes," accent="and nothing else">
        <p>
          The work happens in people&apos;s kitchens, laundry rooms and garages, not in a shop. A technician comes to the house, finds what failed,
          explains it in plain words and fixes it once you&apos;ve agreed to the price. That&apos;s the whole job, day after day, so the problems
          you&apos;re dealing with are ones a technician has usually seen many times already: the fridge that&apos;s cold in the freezer and warm
          everywhere else, the washer that fills and then just sits there, the oven that clicks but won&apos;t light.
        </p>
        <p>
          Most calls start the same way. Something stopped working, nobody&apos;s sure if it&apos;s worth fixing, and there&apos;s a load of wet
          towels or a freezer full of food waiting on the answer. The aim is to get you that answer quickly and honestly, including when the honest
          answer is that a repair doesn&apos;t make sense for an appliance that old.
        </p>
      </Block>

      <Block id="local-heading" eyebrow="Local knowledge" title="What Temple homes" accent="teach you" tone="white">
        <p>Local detail changes the advice more than people expect.</p>
        <p>
          <strong className="font-semibold text-ink">{local[0][0]}</strong>
          {local[0][1]}
        </p>
        <p>
          <strong className="font-semibold text-ink">Hard water.</strong> Much of the water around here leaves scale behind. It builds up in ice
          maker and washer inlet valves until the fill slows, and it leaves a white film inside dishwashers. If your ice cubes have been getting
          smaller for months, that&apos;s usually the reason, and the fixes are laid out with the rest of the cooling problems in{' '}
          <Link href="/refrigerator-repair-temple-tx/">what goes wrong with refrigerators and ice makers</Link>.
        </p>
        <p>
          <strong className="font-semibold text-ink">{local[1][0]}</strong>
          {local[1][1]}
        </p>
      </Block>

      <Block id="brands-heading" eyebrow="Appliances and brands" title="The appliances and brands" accent="that come up">
        <p>
          Refrigerators, freezers, ice makers, washers, dryers, dishwashers, ranges, wall ovens, cooktops, microwaves and garbage disposals, from the
          names you&apos;d expect in a Temple kitchen: Samsung and LG, Whirlpool and its sister brands Maytag, KitchenAid and Amana, GE, Frigidaire
          and Electrolux, Bosch, Kenmore, and Speed Queen in the laundry room. Many of those names share parts and factories, which matters when a part
          has to be found. The <Link href={routes.brands}>brands we work on, grouped by who builds them</Link>, shows those family ties. For anything
          less common, ring with the brand and model number and ask.
        </p>
      </Block>

      <Section tone="white" labelledBy="call-heading">
        <SectionHeading id="call-heading" eyebrow="The call" title="What happens" accent="when you call" />
        <ol className="grid gap-3 md:grid-cols-2">
          {steps.map(([lead, rest], i) => (
            <li key={lead} className="flex gap-4 rounded-2xl border border-sand bg-canvas p-5 text-[16px] leading-relaxed text-ink-body">
              <span className="font-display text-2xl font-bold text-flame">{i + 1}</span>
              <span>
                <strong className="font-semibold text-ink">{lead}</strong>
                {rest}
              </span>
            </li>
          ))}
        </ol>
        <MidCta
          location="about_midpage"
          before={<>Ready to start with step one? Call </>}
          after={<> with the appliance, the brand, the model number and a sentence about what it&apos;s doing.</>}
        />
      </Section>

      <Block id="license-heading" eyebrow="Credentials" title="Licenses, insurance" accent="and what to ask">
        <p>
          Texas doesn&apos;t issue a general state license for household appliance repair, so &quot;state licensed&quot; on its own doesn&apos;t tell
          you much. A few things do matter:
        </p>
        <ul>
          {credentials.map(([lead, rest]) => (
            <li key={lead}>
              <strong className="font-semibold text-ink">{lead}</strong>
              {rest}
            </li>
          ))}
        </ul>
        <p>
          The <Link href={routes.faq}>answers to common repair questions</Link> cover cost, the visit and what comes after it in more detail.
        </p>
      </Block>

      <Block id="where-heading" eyebrow="Service area" title="Where" accent="we work" tone="white">
        <p>
          Temple first, then outward: Salado and Belton along I-35, Nolanville, Harker Heights and Killeen out US-190, Morgan&apos;s Point Resort on
          the lake, Troy and Moody to the north, and Little River-Academy, Rogers and Holland to the east and southeast. Each town has its own quirks,
          from lake houses that sit empty to farm freezers in the barn, and every one is listed on{' '}
          <Link href={routes.areas}>the coverage map for all twelve towns</Link>.
        </p>
      </Block>

      <FinalCta
        formId="about_final"
        title="Call when"
        accent="it quits"
        cardHeadingLevel="p"
        cardTitle="Call about a repair"
        text={
          <>
            Jot down the brand, copy the model number off the tag, add a sentence about what&apos;s wrong, and call us at{' '}
            <PhoneLink location="about_final_text" className={white} />. Not ready to call yet?{' '}
            <Link href={routes.request} className={white}>
              What to have ready before you book
            </Link>{' '}
            walks through the tag, the symptom and the access notes.
          </>
        }
      />
    </>
  );
}

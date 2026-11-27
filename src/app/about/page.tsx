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

/** About page (source: content/about-v1.md, Nov 2026). Q&A format; schema: AboutPage + Organization + BreadcrumbList (breadcrumb from PageHero). */
const description =
  'About Appliance Repair Temple: who comes out, which credentials matter in Texas, what happens when you call and what to ask first. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'About Appliance Repair Temple | Local Technicians in Temple, TX',
  description,
  path: routes.about,
});

const credentials: [string, string][] = [
  [
    'No general state license.',
    ' Texas doesn\'t issue a general license for household appliance repair. A company that says it\'s "state licensed" for fixing washers should be able to tell you exactly which license it means.',
  ],
  [
    'Refrigerant work needs EPA certification.',
    ' Federal rules require EPA Section 608 certification for anyone who opens a sealed refrigeration system, such as a refrigerator or freezer compressor repair. Ask to see it for that kind of job.',
  ],
  [
    'Gas line work belongs to licensed trades.',
    ' Connecting or altering gas piping is work for a licensed plumber, or for propane systems, a company licensed for LP gas work. Swapping the appliance end of a connector is different from running new gas line.',
  ],
  [
    'Insurance is worth asking about.',
    ' Liability insurance protects you if something goes wrong in your home. You can ask any technician for proof of current coverage before work starts, and you should.',
  ],
];

const askAny: [string, string][] = [
  ['The visit fee.', ' What does it cost to come out and diagnose the problem?'],
  ['The price before work.', ' Will parts and labor be quoted as one figure before anything is replaced?'],
  ['Parts warranty.', ' Is the part covered, and for how long?'],
  ['Labor warranty.', ' If the same problem comes back, is the return visit covered?'],
  ['Timing.', ' When can someone come, and if a part has to be ordered, how long will it take?'],
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

function QA({ id, q, tone, children }: { id: string; q: string; tone?: 'white'; children: React.ReactNode }) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading id={id} eyebrow="Question" title={q} accent="" />
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
          {site.brandName} is a local appliance repair company working across Temple and nearby Bell County, fixing refrigerators, freezers, washers,
          dryers, dishwashers, ranges and microwaves in people&apos;s homes. Before you let anyone into your kitchen or laundry room, you should know
          who&apos;s coming, what they&apos;re qualified to do and what the visit will involve. This page answers those questions plainly. If you&apos;d
          rather ask them out loud, call <PhoneLink location="about_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="about_hero" dark />
        </div>
      </PageHero>

      <QA id="who-heading" q="Who comes out?">
        <p>
          Appliance repair technicians whose routes run through Temple, Belton, Killeen and the smaller towns in between. They diagnose the problem at
          your home, explain what failed and what the fix involves, and do the repair once you&apos;ve agreed to it.
        </p>
        <p>
          What they know best is the houses here. Older homes near downtown with original shutoff valves and long dryer vents. Newer subdivisions with
          app-connected appliances that report codes. Rentals that turn over every year. Rural properties with freezers in the shop and well water
          feeding the washer. That local knowledge shapes the questions you&apos;ll be asked on the phone and what the technician checks first.
        </p>
      </QA>

      <QA id="license-heading" q="Are you licensed? Are you insured?" tone="white">
        <p>Here&apos;s how credentials work for appliance repair in Texas, so you can judge any technician, including ours:</p>
        <ul>
          {credentials.map(([lead, rest]) => (
            <li key={lead}>
              <strong className="font-semibold text-ink">{lead}</strong>
              {rest}
            </li>
          ))}
        </ul>
        <p>If any of this matters for your repair, ask on the call. A straight question deserves a straight answer.</p>
      </QA>

      <QA id="long-heading" q="How long have you served Temple?">
        <p>
          Rather than hand you a number to take on faith, here&apos;s what&apos;s more useful: the technicians who come out work these streets and these
          towns, know the common failures in the homes here, and can talk through your appliance&apos;s symptom before anyone drives over. If how long
          someone has been in business matters to you, ask on the phone, along with anything else you want to know. The{' '}
          <Link href={routes.faq}>frequently asked questions</Link> cover the rest of the common ones.
        </p>
      </QA>

      <Section tone="white" labelledBy="call-heading">
        <SectionHeading id="call-heading" eyebrow="Question" title="What happens" accent="when you call?" intro="The call is short and practical. Have these ready:" />
        <ol className="grid gap-3 md:grid-cols-3">
          <li className="rounded-2xl border border-sand bg-canvas p-5 text-[16px] leading-relaxed text-ink-body">
            <strong className="font-semibold text-ink">The appliance and its brand,</strong> plus the model number from the tag if you can reach it. A
            phone photo works.
          </li>
          <li className="rounded-2xl border border-sand bg-canvas p-5 text-[16px] leading-relaxed text-ink-body">
            <strong className="font-semibold text-ink">What it&apos;s doing,</strong> in a sentence: won&apos;t cool, won&apos;t drain, clicking, a code
            on the display.
          </li>
          <li className="rounded-2xl border border-sand bg-canvas p-5 text-[16px] leading-relaxed text-ink-body">
            <strong className="font-semibold text-ink">Your street and ZIP,</strong> so the scheduler knows which route your home falls on. The towns
            covered are listed on{' '}
            <Link href={routes.areas} className="font-semibold text-ink underline decoration-flame decoration-2 underline-offset-4">
              the coverage map for Temple and Bell County
            </Link>
            .
          </li>
        </ol>
        <MidCta
          location="about_midpage"
          before={<>Got those three? Call </>}
          after={
            <>
              . You&apos;ll hear how the visit works, what it costs to come out and when the schedule has an opening. If the problem sounds like something
              you can check yourself first, like a tripped breaker or a clogged filter, you&apos;ll hear that too.
            </>
          }
        />
        <p className="mt-6 text-[17px] leading-relaxed text-ink-body">
          Prefer to start online? You can{' '}
          <Link href={routes.request} className="font-semibold text-ink underline decoration-flame decoration-2 underline-offset-4">
            request a repair visit
          </Link>{' '}
          and the details get picked up from there.
        </p>
      </Section>

      <QA id="ask-heading" q="What should I ask any technician before work starts?">
        <p>Whoever you hire, these questions protect you:</p>
        <ul>
          {askAny.map(([lead, rest]) => (
            <li key={lead}>
              <strong className="font-semibold text-ink">{lead}</strong>
              {rest}
            </li>
          ))}
        </ul>
        <p>A good technician answers all five without hesitation. Write the answers down.</p>
      </QA>

      <QA id="brand-heading" q="Are you tied to any appliance brand?" tone="white">
        <p>
          No. Repairs here are independent of every manufacturer. Whirlpool, GE, Samsung, LG, Frigidaire and the rest are named here only to describe the
          appliances people own; you&apos;ll find which brands are covered, and who actually builds them, on{' '}
          <Link href={routes.brands}>the appliance brands we work on</Link>. If your appliance is still under the maker&apos;s warranty, contact the
          maker first.
        </p>
      </QA>

      <FinalCta
        formId="about_final"
        title="Questions first,"
        accent="then the repair"
        cardHeadingLevel="p"
        cardTitle="Call with your questions"
        text={
          <>
            Have the brand, the symptom and your ZIP ready, and call <PhoneLink location="about_final_text" className={white} />. Ask whatever you want
            before anyone comes out. For more about appliance repair in Temple, the{' '}
            <Link href={routes.home} className={white}>
              Temple appliance repair homepage
            </Link>{' '}
            is the place to start.
          </>
        }
      />
    </>
  );
}

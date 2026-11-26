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
import { absoluteUrl, pageMetadata } from '@/lib/seo';

/** Service areas hub (source: content/service-areas-hub-v1.md, Nov 2026). Schema: CollectionPage + BreadcrumbList (breadcrumb comes from PageHero). */
const description =
  'Appliance repair across Temple and Bell County, TX: Belton, Killeen, Harker Heights, Salado and more, with ZIP codes and routes. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Service Areas | Temple & Bell County TX',
  description,
  path: routes.areas,
});

type Town = { name: string; href: string; direction: string; route: string; zips: string };

const towns: Town[] = [
  { name: 'Temple', href: routes.home, direction: 'Home base', route: 'I-35, US-190, Loop 363', zips: '76501, 76502, 76504' },
  { name: 'Belton', href: '/service-areas/belton-tx/', direction: 'Southwest', route: 'I-35 south', zips: '76513' },
  { name: 'Killeen', href: '/service-areas/killeen-tx/', direction: 'West', route: 'US-190 / I-14 west', zips: '76541, 76542, 76543, 76549' },
  { name: 'Harker Heights', href: '/service-areas/harker-heights-tx/', direction: 'West', route: 'US-190 / I-14 west', zips: '76548' },
  { name: 'Salado', href: '/service-areas/salado-tx/', direction: 'South', route: 'I-35 south', zips: '76571' },
  { name: 'Nolanville', href: '/service-areas/nolanville-tx/', direction: 'West', route: 'US-190 / I-14 west', zips: '76559' },
  { name: "Morgan's Point Resort", href: '/service-areas/morgans-point-resort-tx/', direction: 'West, on Lake Belton', route: 'FM 2305 west', zips: '76513' },
  { name: 'Troy', href: '/service-areas/troy-tx/', direction: 'North', route: 'I-35 north', zips: '76579' },
  { name: 'Little River-Academy', href: '/service-areas/little-river-academy-tx/', direction: 'Southeast', route: 'TX-95 south', zips: '76554' },
  { name: 'Rogers', href: '/service-areas/rogers-tx/', direction: 'East', route: 'US-190 east', zips: '76569' },
  { name: 'Holland', href: '/service-areas/holland-tx/', direction: 'Southeast', route: 'TX-95 south', zips: '76534' },
  { name: 'Moody', href: '/service-areas/moody-tx/', direction: 'Northwest', route: 'TX-317 north', zips: '76557' },
];

const clusters: [string, string][] = [
  [
    'Temple itself',
    'Temple is the center of the map, from the older neighborhoods near downtown and the hospital district to the newer subdivisions out past Loop 363 on the west and south sides. Every Temple ZIP is covered, and the town\'s own repair details live on the homepage linked in the table above.',
  ],
  [
    'I-35 north',
    'Troy is a short drive up I-35 from Temple, small and quiet, with older farmhouses and newer homes on larger lots. Calls from out there are often for well-used laundry pairs and second freezers in the garage or barn.',
  ],
  [
    'I-35 south',
    'Belton is Temple\'s next-door neighbor and the county seat, close enough that many addresses feel like one town. Farther down the interstate, Salado mixes historic homes near Main Street with newer houses on acreage.',
  ],
  [
    'US-190 west',
    'Head west on US-190, now also signed I-14, and you pass Nolanville, then Harker Heights, then Killeen. This is the busiest stretch of the area: rentals, military families on the move, and a lot of apartments and duplexes with landlord-owned appliances. Renters should clear a repair with the landlord or property manager first, since they usually decide who fixes their appliances.',
  ],
  [
    'East and southeast',
    'East of Temple, US-190 runs out to Rogers through open farm country. To the southeast, TX-95 passes Little River-Academy and then Holland. Homes out here are spread out, so a clear address, a gate code if there is one, and a note on which building the appliance is in all help.',
  ],
  [
    'Lake Belton',
    'Morgan\'s Point Resort sits on the shore of Lake Belton, west of Temple. Lake homes and weekend places often have extra refrigerators, ice makers and freezers that sit unused for weeks, then get loaded up all at once.',
  ],
  [
    'Northwest',
    'Moody is just over the line in McLennan County, up TX-317. It\'s one of the farther towns on the list, so mention it when you call and ask about scheduling for that side.',
  ],
];

const faqs: Faq[] = [
  {
    q: "Is my address covered if my town isn't listed?",
    a: "Often, yes. The table lists the towns with their own pages, but many rural roads and small communities between them are covered too. Call with your street address and ZIP and you'll get a yes or no on the phone.",
  },
  {
    q: 'How soon can a technician get to me?',
    a: "It depends on the day's schedule, where you are and what the repair needs. Same-day visits are often possible, depending on the schedule and parts. Ask when you call.",
  },
  {
    q: 'Do you cover Fort Hood on-post housing?',
    a: 'On-post housing has its own maintenance system, so residents should contact their housing office first. Off-post homes and rentals in Killeen, Harker Heights and Nolanville are covered like any other address.',
  },
];

function collectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl(routes.areas)}#collection`,
    name: 'Appliance Repair Service Areas | Temple & Bell County TX',
    description,
    url: absoluteUrl(routes.areas),
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#business` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: towns.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, url: absoluteUrl(t.href) })),
    },
  };
}

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

export default function AreasPage() {
  return (
    <>
      <JsonLd data={collectionSchema()} />

      <PageHero crumbs={[{ name: 'Service Areas', path: routes.areas }]} title={`Areas We Serve Around ${site.city}, ${site.stateAbbr}`}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          In-home appliance repair visits cover Temple and the Bell County towns around it: Belton and Salado down I-35, Killeen and Harker Heights
          out US-190, plus a handful of small towns east and north. If your town is in the table below, call{' '}
          <PhoneLink location="areas_intro" className={white} /> with your street address and ZIP and the scheduler will confirm it before booking. If
          it isn&apos;t listed but you&apos;re close, call anyway; plenty of addresses between these towns are covered too.
        </p>
        <div className="mt-8">
          <CtaRow location="areas_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="coverage-heading">
        <SectionHeading id="coverage-heading" eyebrow="Coverage" title="Coverage" accent="at a glance" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[680px] text-left text-[15px]">
            <caption className="sr-only">Towns covered around Temple, TX, with direction, main route and ZIP codes</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Town</th>
                <th scope="col" className={th}>Direction from Temple</th>
                <th scope="col" className={th}>Main route</th>
                <th scope="col" className={th}>ZIP code(s)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {towns.map((t) => (
                <tr key={t.name} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold">
                    <Link href={t.href} className="text-ink underline decoration-flame/50 decoration-2 underline-offset-4 hover:decoration-flame">
                      {t.name}
                    </Link>
                  </th>
                  <td className="px-4 py-3 text-ink-body">{t.direction}</td>
                  <td className="px-4 py-3 text-ink-body">{t.route}</td>
                  <td className="px-4 py-3 font-mono text-ink-body">{t.zips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-copy mt-6">
          <p>
            Belton and Morgan&apos;s Point Resort share ZIP 76513, so give the street name along with the ZIP when you call. In Killeen, 76544 covers
            on-post Fort Hood housing; residents there check with housing first.
          </p>
        </div>
      </Section>

      <Section tone="white" labelledBy="clusters-heading">
        <SectionHeading id="clusters-heading" eyebrow="By highway" title="How the area" accent="breaks down" />
        <div className="grid gap-4 md:grid-cols-2">
          {clusters.map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-sand bg-canvas p-5">
              <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-body">{text}</p>
            </div>
          ))}
        </div>
        <MidCta
          location="areas_midpage"
          before={
            <>
              <strong className="font-semibold text-ink">Before you call:</strong> have your street address and ZIP, the appliance and its brand, and
              a one-line description of what it&apos;s doing ready. A photo of the model tag helps if you can get to it. Then call{' '}
            </>
          }
          after={<>. The scheduler will confirm your address is covered, talk through timing, and answer questions about the visit before anything is booked.</>}
        />
      </Section>

      <Section labelledBy="travel-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="travel-heading" eyebrow="Travel" title="Do farther towns" accent="cost more?" />
          <div className="prose-copy">
            <p>
              Some addresses farther from Temple may carry a travel charge; the answer turns on your exact location. Ask when you call: give your
              address first, and you&apos;ll hear about any travel charge, along with the visit fee, before a visit is set. Nothing should come as a
              surprise on the day.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Service area" accent="FAQ" />
          <FaqList faqs={faqs} schema={false} />
        </div>
      </Section>

      <FinalCta
        formId="areas_final"
        title="Call with"
        accent="your address"
        cardHeadingLevel="p"
        cardTitle="Check your address"
        text={
          <>
            Wherever you are around Temple, the quickest way to check is to call <PhoneLink location="areas_final_text" className={white} /> with your
            street address and ZIP, or{' '}
            <Link href={routes.request} className={white}>
              book a repair online
            </Link>{' '}
            and the address will be checked when the booking comes in.
          </>
        }
      />
    </>
  );
}

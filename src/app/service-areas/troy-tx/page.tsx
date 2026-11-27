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

/** Troy area page (source: content/area-troy-v1.md, Nov 2026). Replaces the generic area template for this slug. Headings are written in a rural owner's voice. */
const path = '/service-areas/troy-tx/';
const description =
  'Appliance repair in Troy, TX 76579 for homes, shops and barns: freezers, well water washers and ice makers, and how to give directions. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Troy TX | Farm, Shop & Home Appliances',
  description,
  path,
});

const checks: [string, string][] = [
  ['Power:', ' is the outlet live? Shops often use GFCI outlets that trip in damp weather, and a tripped one looks exactly like a dead freezer.'],
  ['Cord:', ' a long or light-duty extension cord can starve the compressor; plug it directly into the wall and see if it starts.'],
  ['Heat and dust:', ' a freezer in a hot, dusty building runs long. Clear the coils and the vents along the sides or back so it can breathe.'],
  ['Cold, too:', ' some freezers aren\'t built for unheated buildings and can stop running in a hard freeze. Check the manual for a "garage ready" rating.'],
];

const faqs: Faq[] = [
  {
    q: 'Does 76579 coverage reach properties well outside town?',
    a: 'Yes, 76579 covers a wide rural area beyond the city itself. Give the county road number and nearest crossroad when you call.',
  },
  {
    q: 'Can a technician work on a freezer that sits under a carport or outside?',
    a: "Usually, if it's reachable and has a safe, dry outlet. Mention where it sits when you call so the technician knows what to expect.",
  },
  {
    q: 'The well pump was just serviced and now my washer fills slowly. Why?',
    a: "Work on a well often stirs up sediment, which then collects in the washer's inlet screens. Clean the screens at the back of the washer; if the fill doesn't improve, call with the model number.",
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

function Ask({ id, q, tone, children }: { id: string; q: string; tone?: 'white'; children: React.ReactNode }) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <h2 id={id} className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-ink md:text-4xl">
          &ldquo;{q}&rdquo;
        </h2>
        <div className="prose-copy">{children}</div>
      </div>
    </Section>
  );
}

export default function TroyAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Appliance repair in Troy, TX',
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: 'Troy, TX' },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: 'Troy', path },
        ]}
        title="Appliance Repair in Troy, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Troy and the county roads around it are covered, the whole 76579 ZIP. For appliance repair in Troy, TX, call{' '}
          <PhoneLink location="troy_intro" className={white} /> with your ZIP and road, and you&apos;ll get a straight answer about the schedule. A lot
          of Troy calls come from out past town, so this page answers the questions people on rural property ask first.
        </p>
        <div className="mt-8">
          <CtaRow location="troy_hero" dark />
        </div>
      </PageHero>

      <Ask id="barn-heading" q="My freezer's in the barn. Can someone get to it?">
        <p>
          Yes, as long as the technician knows where it is and can reach it. A chest freezer in a shop, barn or outbuilding gets serviced the same as
          one in a kitchen. What helps is a clear path, a working light, and an outlet the freezer is plugged straight into, not an extension cord.
        </p>
        <p>Before calling about a shop freezer, run these quick checks:</p>
        <ul>
          {checks.map(([lead, rest]) => (
            <li key={lead}>
              <strong className="font-semibold text-ink">{lead}</strong>
              {rest}
            </li>
          ))}
        </ul>
        <p>
          If it&apos;s still warm after that, the problems listed in{' '}
          <Link href="/freezer-repair-temple-tx/">freezer repair for chest and upright models</Link> are the next suspects.
        </p>
      </Ask>

      <Ask id="gate-heading" tone="white" q="There's a gate and a couple of dogs. What should I tell them?">
        <p>
          Everything. Say whether the gate is locked and how it opens, whether there&apos;s a code, and whether the dogs will be put up. Mention cattle
          guards, low-water crossings after rain, or a long gravel drive that a van shouldn&apos;t take fast. None of it is unusual out here, and
          knowing ahead saves time on the day.
        </p>
      </Ask>

      <Ask id="road-heading" q="We're on a county road the map gets wrong. How do I give directions?">
        <p>
          Give the county road number, the nearest named road or highway, and a landmark: the I-35 exit you take, a church, a feed store, a mailbox
          color. Say which building the appliance is in if there&apos;s more than one. If GPS sends people the wrong way to your place, mention it; a
          text with a pin drop works too, if you&apos;re asked for one.
        </p>
      </Ask>

      <Ask id="well-heading" tone="white" q="Our water's from a well. Why does that matter for my washer and ice maker?">
        <p>
          Well water carries sediment, and both washers and ice makers have small screens at their water inlet valves to catch it. When the screens
          clog, the washer fills slowly or shows a fill code, and the ice maker makes small cubes or none at all.
        </p>
        <p>
          On a washer, you can check the screens yourself: shut the water off, unscrew the fill hoses at the back of the machine, and look inside the
          inlet ports for a small mesh screen. Rinse it, don&apos;t remove it, and reconnect. If the fill is still slow, the valve itself may be
          failing, covered with other fill and drain problems in{' '}
          <Link href="/washer-repair-temple-tx/">diagnosing a washer by what it&apos;s doing</Link>. Ice maker inlet valves sit behind the fridge and
          are harder to reach; a clogged one usually gets replaced, as explained in{' '}
          <Link href="/ice-maker-repair-temple-tx/">ice makers that fill slowly or quit</Link>. A whole-house sediment filter ahead of the appliances
          cuts down on repeat trouble.
        </p>
      </Ask>

      <Section labelledBy="both-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <h2 id="both-heading" className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-ink md:text-4xl">
            &ldquo;The ice maker and the washer are both acting up. Worth mentioning both?&rdquo;
          </h2>
          <div className="prose-copy">
            <p>
              Absolutely. On a property a fair drive from Temple, it makes sense to put every problem on the table at once: the freezer in the shop,
              the ice maker, the dryer that&apos;s been slow for a month. A technician who knows about all of them can plan time and parts for the whole
              visit.
            </p>
          </div>
        </div>
        <MidCta
          location="troy_midpage"
          before={<>So when you call </>}
          after={
            <>
              , have this ready: the brand and model number of each appliance (a phone photo of each tag is easiest), what each one is doing, which
              building each one is in, and your gate and directions notes. One call with the full list beats three separate visits.
            </>
          }
        />
      </Section>

      <Section tone="ink" labelledBy="soon-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <h2 id="soon-heading" className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-white md:text-4xl">
            &ldquo;How soon can somebody get up here?&rdquo;
          </h2>
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Troy sits north of Temple on I-35 toward Waco, close in highway terms, but a property several miles down a county road adds time.
              Same-day appliance repair in Troy happens on some days; it depends on the day&apos;s route, how far out you are and whether the parts are
              on hand. The real answer to how quickly someone reaches Troy comes over the phone, where the actual schedule is in front of the person
              you&apos;re talking to.
            </p>
          </div>
        </div>
      </Section>

      <Ask id="cost-heading" q="What's this going to cost me?">
        <p>
          Get the trip and repair numbers out loud before any work, and ask whether looking at several appliances in one trip changes anything. If a
          part has to be ordered, ask what the return trip involves.
        </p>
      </Ask>

      <Ask id="who-heading" tone="white" q="Who else is out this way?">
        <p>
          To the northwest, <Link href="/service-areas/moody-tx/">Moody</Link> is the next covered town. The full set of towns is on{' '}
          <Link href={routes.areas}>the list of towns around Temple</Link>; Troy appliance repair service covers the same appliances as{' '}
          <Link href={routes.home}>repairs in Temple proper</Link>.
        </p>
      </Ask>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Troy" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="troy_final"
        title="Call from"
        accent="out past town"
        cardHeadingLevel="p"
        cardTitle="Call about a Troy repair"
        text={
          <>
            Troy property, county road or right in town, dial <PhoneLink location="troy_final_text" className={white} /> and bring up the model numbers,
            your road and gate notes, and every appliance that&apos;s acting up.
          </>
        }
      />
    </>
  );
}

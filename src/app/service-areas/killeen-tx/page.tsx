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

/** Killeen area page (source: content/area-killeen-v1.md, Nov 2026). Replaces the generic area template for this slug. */
const path = '/service-areas/killeen-tx/';
const description =
  'Appliance repair in Killeen, TX: PCS moves, rentals and new move-ins in 76541, 76542, 76543 and 76549, with a move checklist. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Killeen TX | Rentals, Moves & Fort Hood',
  description,
  path,
});

const movingOut: [string, string][] = [
  [
    'Refrigerator:',
    ' empty it, unplug it the day before so the freezer defrosts, and leave the doors propped open to dry. Shut off and disconnect the water line if it has an ice maker, and catch the water left in it. Take the shelves and bins out or secure them.',
  ],
  [
    'Washer:',
    " close both water valves, disconnect the hoses and drain them. If it's a front-loader and you still have the shipping bolts that came with it, put them back in to keep the drum from banging around.",
  ],
  ['Dryer:', " clean the lint screen and the vent behind it. For a gas dryer, have the gas shut off and capped by someone qualified; don't just pull the line."],
  ['Range:', ' electric ranges unplug; gas ranges need the gas shut off and capped the same way as a dryer.'],
];

const movingIn: [string, string][] = [
  [
    'Refrigerator:',
    ' let it stand upright before plugging it in, a few hours at least and longer if it rode on its side, so the oil settles back into the compressor. Then give it most of a day to cool before loading food. Toss the first trays of ice it makes.',
  ],
  [
    'Washer:',
    ' take the shipping bolts out before the first load. A front-loader run with the bolts in shakes violently and can be damaged. Use new fill hoses if the old ones are bulging or cracked, level the machine, and check that the drain hose sits in the standpipe without being jammed in tight.',
  ],
  [
    'Dryer:',
    " check the plug matches the outlet; older houses often have a three-slot dryer outlet while newer ones use four, and the plug must fit it. Use a rigid or semi-rigid metal vent, not foil or plastic, and leave a few inches behind the dryer so it doesn't crush.",
  ],
  ['Range:', ' make sure the anti-tip bracket is installed, especially with kids in the house.'],
];

const faqs: Faq[] = [
  {
    q: 'I live on post at Fort Hood. Can I book a repair directly?',
    a: 'Check with your housing office or maintenance line first, because the housing program usually covers appliances supplied with the home. If they tell you to arrange it yourself, call with the address and appliance details.',
  },
  {
    q: 'My fridge rode on its side during the move. Is it ruined?',
    a: "Usually not. Stand it upright and wait before plugging it in, a few hours at least and longer if it was on its side for a long trip. Then give it most of a day to reach temperature. If it still isn't cooling after that, call.",
  },
  {
    q: 'The washer in my new rental leaked on the first load. Who do I call?',
    a: 'First, turn off the water to the washer and dry the floor. Then tell your landlord or property manager, since many leases put appliance repairs with them. A leak on the first load is often a loose or worn hose, which the owner may want handled before anything else.',
  },
  {
    q: 'Is there a travel charge for Killeen?',
    a: 'Ask when you call. Killeen is farther from Temple than some towns, so give your address up front; any travel charge and the visit fee are explained before a visit is booked.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const h3 = 'font-display text-xl font-semibold text-ink';

function Checklist({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="rounded-2xl border border-sand bg-white p-6">
      <h3 className={h3}>{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map(([lead, rest]) => (
          <li key={lead} className="text-[16px] leading-relaxed text-ink-body">
            <strong className="font-semibold text-ink">{lead}</strong>
            {rest}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function KilleenAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Appliance repair in Killeen, TX',
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: 'Killeen, TX' },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: 'Killeen', path },
        ]}
        title="Appliance Repair in Killeen, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Yes, Killeen is covered, across 76541, 76542, 76543 and 76549. Ring <PhoneLink location="killeen_intro" className={white} /> with the street,
          the ZIP and a word on what the appliance is doing, and you&apos;ll find out on that call when a technician can come.
        </p>
        <div className="mt-8">
          <CtaRow location="killeen_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="moves-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="moves-heading" eyebrow="PCS season" title="A city" accent="that moves" />
          <div className="prose-copy">
            <p>
              With Fort Hood next door, Killeen runs on PCS season. Families arrive on orders and leave on orders, leases turn over every year or two,
              and a lot of appliances get unplugged, strapped to a dolly, loaded on a truck and hooked up again in a new kitchen or laundry closet.
              After a move, the trouble often comes from the move itself, not from the appliance wearing out: a fridge plugged in too soon after
              riding on its side, a front-load washer that still has its shipping bolts in, a dryer vent crushed flat when the machine was pushed back.
            </p>
            <p>
              The rest of the time, Killeen is a rental town. Apartments around the Killeen Mall area and along Stan Schlueter Loop, houses rented to
              soldiers and to students at Central Texas College, and newer subdivisions full of builder-grade appliances all keep landlords and
              property managers busy.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="post-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="post-heading" eyebrow="On-post housing" title="On-post" accent="at Fort Hood?" />
          <div className="prose-copy">
            <p>
              If you live in on-post housing, contact your housing office or maintenance line first. Appliances that came with an on-post home are
              handled through that housing program. Off post, houses and rentals in Killeen and its neighbors are a different story, and the rest of
              this guide is for them.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="checklist-heading">
        <SectionHeading
          id="checklist-heading"
          eyebrow="Before and after the truck"
          title="The appliance"
          accent="move checklist"
          intro="Most move-related damage is avoidable. Work through this before the truck shows up and again before you plug anything in."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Checklist title="Moving out" items={movingOut} />
          <Checklist title="Moving in" items={movingIn} />
        </div>
        <MidCta
          location="killeen_midpage"
          before={<>If something still won&apos;t run right after the move, dial </>}
          after={
            <>
              {' '}
              and have ready the address, the brand and model number, what happened during the move (laid on its side, bolts left in, new outlet) and
              what it&apos;s doing now. That move history often points straight at the cause.
            </>
          }
        />
      </Section>

      <Section tone="white" labelledBy="fast-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fast-heading" eyebrow="Timing" title="How soon can someone" accent="get to Killeen?" />
          <div className="prose-copy">
            <p>
              Killeen is about a half hour west of Temple on US-190 (I-14), so it&apos;s a longer trip than Belton or Temple itself. Whether a visit can
              happen today comes down to the schedule, the time you call and whether the part is in stock. Same-day visits to Killeen are often
              possible, especially when you call early and the part is a common one, but the honest answer comes on the phone. If water is leaking or
              food is warming, open with that.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="repairs-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="repairs-heading" eyebrow="Common repairs" title="Common" accent="Killeen repairs" />
          <div className="prose-copy">
            <h3 className={h3}>Washers</h3>
            <p>
              New-to-you washers in Killeen rentals tend to show the same few problems: leaks from worn or loosely tightened hoses on the first load,
              drain trouble from a hose pushed too far into the standpipe, and front-loaders that shake because they&apos;re not level or still have
              bolts in. If it&apos;s not a move problem, note the moment in the cycle when it quits, as covered in{' '}
              <Link href="/washer-repair-temple-tx/">the washer guide&apos;s cycle-by-cycle checks</Link>.
            </p>
            <h3 className={`mt-8 ${h3}`}>Dryers</h3>
            <p>
              A crushed vent after a move is the classic Killeen dryer call. The dryer runs but takes two cycles, gets hot to the touch, or blows its
              thermal fuse and stops heating. Fix the vent first, then look at the heat parts, the order laid out in{' '}
              <Link href="/dryer-repair-temple-tx/">the steps for a dryer that won&apos;t heat</Link>. A vent run that&apos;s long, old or packed with
              lint from the last tenant is a job for <Link href="/dryer-vent-cleaning-temple-tx/">professional dryer vent cleaning</Link>.
            </p>
            <h3 className={`mt-8 ${h3}`}>Refrigerators</h3>
            <p>
              A fridge that won&apos;t cool after a move usually needs time, not parts: it was plugged in too soon, the doors were left ajar, or the
              vents were blocked by boxes. Give it a day. If it&apos;s still warm, the condenser fan, the coils and the defrost system are next, as in{' '}
              <Link href="/refrigerator-repair-temple-tx/">the refrigerator checklist for a warm fridge</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="next-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="next-heading" eyebrow="Neighbors" title="Next door" accent="to Killeen" />
          <div className="prose-copy">
            <p>
              Just east along US-190, <Link href="/service-areas/harker-heights-tx/">Harker Heights</Link> shares a lot of Killeen&apos;s rental and PCS
              traffic, and a little farther, <Link href="/service-areas/nolanville-tx/">Nolanville</Link> sits between Killeen and Temple. Every covered
              town appears on <Link href={routes.areas}>the Temple and Bell County service map</Link>, and Temple&apos;s own repair details are on{' '}
              <Link href={routes.home}>the main Temple appliance repair page</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Killeen" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="killeen_final"
        title="Settle in,"
        accent="then call"
        cardHeadingLevel="p"
        cardTitle="Call about a Killeen repair"
        text={
          <>
            New lease, new orders or the same house for years, phone <PhoneLink location="killeen_final_text" className={white} /> and lead with your
            Killeen street and ZIP.
          </>
        }
      />
    </>
  );
}

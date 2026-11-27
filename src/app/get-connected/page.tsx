import Link from 'next/link';
import { routes } from '@/config/site';
import { CallButton } from '@/components/Buttons';
import { CallCard } from '@/components/CallCard';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { pageMetadata } from '@/lib/seo';

/** Booking page (source: content/booking-v2.md, Nov 2026). Booking is by phone; this page lists what to have ready and what happens next. */
export const metadata = pageMetadata({
  title: 'Book Appliance Repair in Temple, TX | Call (254) 615-2088',
  description:
    "Book an appliance repair in Temple or Bell County by phone. Here's what to have ready before you call (254) 615-2088, and what happens after that.",
  path: routes.request,
});

const tags: [string, string][] = [
  ['Refrigerator:', ' on an inner wall of the fresh-food side, often near the light housing.'],
  ['Chest freezer:', ' on the outside back or side, or under the lid rim.'],
  ['Top-load washer:', ' beneath the lid near the hinge, or on the rear of the console.'],
  ['Front-load washer and dryer:', ' on the rim of the door opening.'],
  ['Dishwasher:', ' on the edge of the door or the tub, visible with the door open.'],
  ['Range or wall oven:', ' behind the bottom drawer, or on the frame with the oven door open.'],
  ['Over-the-range microwave:', ' on the frame inside the door.'],
];

const after: [string, string][] = [
  [
    'You describe the problem.',
    ' Which appliance, whose brand, the model number and the symptom. If a quick check at home might solve it, a reset breaker or a straightened hose, you\'ll hear that first.',
  ],
  [
    'You ask what you want to know.',
    ' What the trip costs, how the repair figure gets set and when someone can come are all fair questions before you commit.',
  ],
  ['A technician comes out.', ' They look at the appliance, find what failed and explain it in plain words.'],
  [
    'You get the price, then decide.',
    " Nothing is replaced until you've agreed to the cost. When the fix would cost more than an old appliance deserves, that gets said plainly as well.",
  ],
  ['The repair, or the part.', " Some repairs are finished during the same visit. If a part has to be ordered, you'll know which one and how the return visit works."],
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const link = 'font-semibold text-ink underline decoration-flame decoration-2 underline-offset-4';

export default function RequestPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Book a Repair', path: routes.request }]} title="Book an Appliance Repair in Temple, TX">
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Booking takes one short phone call. Call us at <PhoneLink location="request_intro" className={white} />, tell us what&apos;s wrong, and
          we&apos;ll work out the visit from there.
        </p>
        <div className="mt-8">
          <CallButton location="request_hero" label="Call (254) 615-2088" className="text-[17px]" />
        </div>
        <p className="mt-6 max-w-2xl rounded-2xl border border-white/15 bg-white/[0.06] p-4 text-[15px] leading-relaxed text-white/75">
          <strong className="font-semibold text-white">Leak or gas smell?</strong> Handle that before anything else: shut the water valve for a leak;
          for gas, get everyone out and ring 911 or the gas utility from the yard. Then call and say it&apos;s urgent.
        </p>
      </PageHero>

      <Section labelledBy="ready-heading">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading
              id="ready-heading"
              eyebrow="Before you call"
              title="Have this"
              accent="ready"
              intro="Five minutes with this list shortens the call and gives the technician a head start on parts."
            />
            <ul className="grid gap-3">
              <li className="rounded-2xl border border-sand bg-white p-5 text-[16px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">The appliance and its brand.</strong> &quot;Whirlpool top-load washer&quot; or &quot;Samsung
                French door fridge&quot; is plenty.
              </li>
              <li className="rounded-2xl border border-sand bg-white p-5 text-[16px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">The model number.</strong> It&apos;s on a sticker or metal plate, and each appliance hides it
                somewhere different:
                <ul className="mt-3 space-y-1.5 text-[15px]">
                  {tags.map(([lead, rest]) => (
                    <li key={lead}>
                      <span className="font-semibold text-ink">{lead}</span>
                      {rest}
                    </li>
                  ))}
                </ul>
                <span className="mt-3 block">A phone photo of the tag is better than copying it by hand.</span>
              </li>
              <li className="rounded-2xl border border-sand bg-white p-5 text-[16px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">What it&apos;s doing.</strong> One or two sentences: won&apos;t cool, won&apos;t drain,
                clicks but won&apos;t light, leaks from the front. Say when it started.
              </li>
              <li className="rounded-2xl border border-sand bg-white p-5 text-[16px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">Any error code.</strong> Write it exactly as the display shows it. You can look it up first in{' '}
                <Link href="/appliance-error-code-decoder/" className={link}>
                  the error code decoder for major brands
                </Link>
                ; some codes point to a filter or a door you can sort out yourself.
              </li>
              <li className="rounded-2xl border border-sand bg-white p-5 text-[16px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">Your street and ZIP.</strong> We cover Temple and the towns around it, and the street matters as
                much as the ZIP when a code like 76513 spans more than one town. Each town appears on{' '}
                <Link href={routes.areas} className={link}>
                  the list of towns we cover
                </Link>
                .
              </li>
              <li className="rounded-2xl border border-sand bg-white p-5 text-[16px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">Access notes.</strong> Gate codes, pets, which door to use, where the appliance sits (garage, shop,
                upstairs) and who&apos;ll be there.
              </li>
            </ul>
          </div>
          <div className="lg:pt-16">
            <CallCard location="request_main" title="Call and describe the problem" headingLevel={2} />
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="after-heading">
        <SectionHeading id="after-heading" eyebrow="After you call" title="What happens" accent="after you call" />
        <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {after.map(([lead, rest], i) => (
            <li key={lead} className="flex gap-4 rounded-2xl border border-sand bg-canvas p-5 text-[16px] leading-relaxed text-ink-body">
              <span className="font-display text-2xl font-bold text-flame">{i + 1}</span>
              <span>
                <strong className="font-semibold text-ink">{lead}</strong>
                {rest}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="know-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="know-heading" eyebrow="Good to know" title="A few things" accent="worth knowing" />
          <div className="prose-copy">
            <p>
              Renting? Check your lease or ask your landlord first, since they usually arrange appliance repairs. New build, under a year old? The
              builder or the manufacturer may cover an installation fault. Other common questions, from cost to what to keep after the visit, are
              answered in <Link href={routes.faq}>the appliance repair FAQ</Link>, and <Link href={routes.about}>who we are and how we work</Link>{' '}
              covers the rest.
            </p>
            <p>
              Ready when you are: grab the model number and call us at <PhoneLink location="request_close" className={link} />.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

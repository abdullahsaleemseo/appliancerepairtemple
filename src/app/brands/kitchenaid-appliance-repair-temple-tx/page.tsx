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

/** KitchenAid brand page (source: content/brand-kitchenaid-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/kitchenaid-appliance-repair-temple-tx/';
const description =
  'KitchenAid appliance repair in Temple, TX: built-in and panel-ready fridges and dishwashers, wall ovens, and why repair usually wins. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'KitchenAid Appliance Repair Temple TX | Fridge & Dishwasher',
  description,
  path,
});

const questions = [
  'Is the appliance built in, panel-ready or freestanding? A photo of the front and the gaps around it answers this quickly.',
  'Can you see and read the model tag, or is it behind a panel or kick plate?',
  'Is there clear floor space in front of the appliance if it has to come forward?',
  'Was the panel or trim installed by a cabinetmaker, and do you still have any spare trim pieces?',
  "Is the appliance still under KitchenAid's warranty?",
];

const faqs: Faq[] = [
  {
    q: 'Do you fix KitchenAid stand mixers?',
    a: 'Stand mixers and other countertop small appliances are a different kind of repair from major appliances, with their own parts and bench work. Call and ask before bringing one in, or contact KitchenAid about service options for small appliances, especially if the mixer is still under warranty.',
  },
  {
    q: 'Can a panel-ready dishwasher be repaired without removing the panel?',
    a: "Often, yes. Many repairs, like the filter, pump, spray arms and door seals, happen from inside the tub or from below. The panel usually comes off only if the door itself or something behind the door's outer skin has to be replaced.",
  },
  {
    q: 'Why does my KitchenAid dishwasher leave the top rack dirty?',
    a: "On models with a third rack or an upper spray arm, check that the arm spins freely and that the water feed at the back lines up when the rack slides in. Food stuck in the arm's holes is common. If the arm and feed are fine, the wash pump may be weak.",
  },
  {
    q: 'Are KitchenAid repair parts more expensive than Whirlpool parts?',
    a: 'Some are, especially trim, panels, glass and line-specific controls. Many core parts, like pumps, valves, fans and sensors, are shared with Whirlpool models and priced similarly. Ask for the part cost separately when you get the repair price, so you can see where the money goes.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

export default function KitchenAidBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `KitchenAid appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'KitchenAid appliance repair',
          description,
          path,
          brand: 'KitchenAid',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'KitchenAid', path },
        ]}
        title={`KitchenAid Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          A broken KitchenAid is almost always worth repairing. It&apos;s a premium kitchen line, often built into the cabinets or wearing a custom
          panel, so replacing one means more than buying a new appliance: it can mean new trim, new panels and a cutout that has to match. That tilts
          KitchenAid appliance repair in Temple, TX toward fixing in nearly every case. Call <PhoneLink location="kitchenaid_intro" className={white} />{' '}
          with the appliance, the model number and whether it&apos;s built in.
        </p>
        <div className="mt-8">
          <CtaRow location="kitchenaid_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="math-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="math-heading" eyebrow="Repair or replace" title="Why the repair math" accent="tilts toward fixing" />
          <div className="prose-copy">
            <p>
              Whirlpool bought KitchenAid in 1986, and the brand now sits at the upscale end of that family. Underneath, many KitchenAid dishwashers
              and refrigerators use the same core designs as Whirlpool models, with better finishes, quieter operation and more features layered on
              top. That&apos;s good for repairs: pumps, valves, fans, sensors and igniters are shared, so{' '}
              <Link href="/brands/whirlpool-appliance-repair-temple-tx/">Whirlpool&apos;s parts supply and diagnostic modes</Link> carry over to many
              KitchenAid models.
            </p>
            <p>
              The other side of the math is what a replacement costs. A higher-end appliance is more expensive to begin with, and a built-in one adds
              installation, matching and sometimes cabinet work. A toss-up repair on a basic machine is usually an easy yes here.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="builtin-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="builtin-heading" eyebrow="Built-in and panel-ready" title="The built-in" accent="reality check" />
          <div>
            <div className="prose-copy">
              <p>
                Many KitchenAid refrigerators and dishwashers are built into the cabinetry, and some are panel-ready, meaning a custom cabinet panel is
                fastened to the door so the appliance blends into the kitchen. That changes a repair in a few practical ways.
              </p>
              <p>
                Getting to the parts can take longer. A built-in refrigerator is secured to the cabinets and often to the wall, and sliding it out has
                to be done carefully to protect the floor and the trim. A panel-ready dishwasher&apos;s door carries the weight of a wood panel, which
                affects the door springs and hinges.
              </p>
              <p>
                Panels and trim matter too. If a door has to be replaced, the custom panel has to come off and go back on the new door. Trim kits around
                built-in ovens and microwaves have to line up again after any removal.
              </p>
              <p>None of that argues for replacing; it argues for planning. Before booking, it helps to know:</p>
            </div>
            <ol className="mt-5 grid gap-3">
              {questions.map((q, i) => (
                <li key={q} className="flex gap-4 rounded-2xl border border-sand bg-canvas p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[14px] font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-[16px] leading-relaxed text-ink-body">{q}</p>
                </li>
              ))}
            </ol>
            <MidCta
              location="kitchenaid_midpage"
              before={<>With those answers in hand, call </>}
              after={
                <>
                  {' '}
                  and say what the appliance is doing, whether it&apos;s built in or panel-ready, and read off the model number if you can reach it.
                </>
              }
            />
          </div>
        </div>
      </Section>

      <Section labelledBy="dish-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="dish-heading" eyebrow="Dishwashers" title="KitchenAid dishwasher repair:" accent="filters, drying and the third rack" />
          <div className="prose-copy">
            <p>
              Under the lower spray arm of a KitchenAid dishwasher sits a two-part filter that has to be removed and rinsed by hand. When it&apos;s
              skipped, dishes come out gritty and water lingers in the tub, and many KitchenAid dishwasher repair calls in Temple start right there.
              Many models also add a third rack across the top and a fan-assisted drying system, which KitchenAid calls ProDry on many models, so a
              dishwasher that suddenly leaves dishes wet may have a drying fan or heater problem rather than a rinse aid problem.
            </p>
            <p>
              When dirty water stays put after the cycle, check the drain hose, the disposal connection and the pump next, the same order laid out for{' '}
              <Link href="/dishwasher-repair-temple-tx/">a dishwasher that won&apos;t drain</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="fridge-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fridge-heading" eyebrow="Refrigerators" title="KitchenAid refrigerator repair:" accent="ice, water and airflow" />
          <div className="prose-copy">
            <p>
              French door and built-in KitchenAid refrigerators are full of convenience parts: ice makers, water dispensers, multiple fans and
              electronic controls. For KitchenAid refrigerator repair in Temple, the usual suspects are a water inlet valve or frozen fill tube when
              ice stops, an evaporator fan or defrost fault when the fresh-food side warms, and the control or a sensor when temperatures drift. The
              water side follows the same route as any fridge, and{' '}
              <Link href="/ice-maker-repair-temple-tx/">how ice makers get their water and fail</Link> applies to KitchenAid models stop by stop. When
              cooling is the issue, <Link href="/refrigerator-repair-temple-tx/">why a refrigerator stops cooling</Link> is the place to start.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="oven-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="oven-heading" eyebrow="Ranges and wall ovens" title="KitchenAid ranges" accent="and wall ovens" />
          <div className="prose-copy">
            <p>
              Ranges and wall ovens from KitchenAid come with convection and electronic controls, and many wall ovens sit in trim that frames them into
              the cabinets. For KitchenAid range repair, a gas oven that won&apos;t heat usually has a weak bake igniter, an electric one a failed
              element, and an oven that runs hot or cold points to the temperature sensor. A convection fan that stops or grinds is another common
              repair. Many wall oven repairs mean sliding the oven out, a two-person job. The part-by-part breakdown of{' '}
              <Link href="/oven-stove-repair-temple-tx/">oven and range problems</Link> covers the rest.
            </p>
            <p>
              Model numbers on these appliances start with K, and the next letters name the product, such as KD for many dishwashers and KRF for many
              French door refrigerators. Confirm on the tag.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="ask-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="ask-heading" eyebrow="Before you book" title="KitchenAid appliance repair in Temple, TX:" accent="questions to ask before booking" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Cost first: find out the visit fee, and get the full repair figure before any work begins, including whether a built-in unit has to come
              out and what that adds. Then trust: ask the technician to explain which part failed and how they tested it, and whether the part is the
              same one used across Whirlpool and KitchenAid models. Finally, timing: ask what&apos;s open, and whether the part is usually on hand or
              has to be ordered. Anyone who typed KitchenAid repair near me in Temple will get more from those three answers than from a search result.
            </p>
            <p>
              A KitchenAid still inside its warranty period goes to KitchenAid first; covered repairs belong to them. Once coverage ends, the choice of
              technician is yours, and federal law backs it: per the FTC, the Magnuson-Moss Warranty Act generally bars a manufacturer from refusing
              coverage only because outside service was used, though harm from a botched repair stays the owner&apos;s problem.
            </p>
            <p className="text-[15px] text-white/55">Repairs here are independent of KitchenAid and Whirlpool; neither has authorized this service.</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="KitchenAid repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="kitchenaid_final"
        title="Get your KitchenAid"
        accent="back in service"
        cardHeadingLevel="p"
        cardTitle="Book a KitchenAid repair"
        text={
          <>
            Snap the model tag and a wide shot of the appliance in its cabinet, note what it&apos;s doing, then call{' '}
            <PhoneLink location="kitchenaid_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a KitchenAid repair
            </Link>
            . Built-in or not is the first thing to mention.
          </>
        }
      />
    </>
  );
}

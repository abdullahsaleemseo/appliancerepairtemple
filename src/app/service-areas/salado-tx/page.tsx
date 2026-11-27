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

/** Salado area page (source: content/area-salado-v1.md, Nov 2026). Replaces the generic area template for this slug. */
const path = '/service-areas/salado-tx/';
const description =
  'Appliance repair in Salado, TX 76571: built-in fridges, wall ovens and panel-ready dishwashers, plus what to ask before booking. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Appliance Repair Salado TX | Built-In & High-End Units',
  description,
  path,
});

const questions: [string, string][] = [
  [
    'Which brand and model is it, exactly?',
    'Copy every character on the rating plate. On built-in refrigerators it usually hides up near the ceiling of the fresh-food section or behind the toe-kick grille; on a wall oven, open the door and scan the edges of the cavity.',
  ],
  ['Is that brand serviced at all?', 'Some premium brands limit parts sales or service to their own network. Ask this first; it decides everything else.'],
  [
    'Does the unit have to come out of the cabinet?',
    "Wall ovens and some built-in refrigerators have to be partly removed for certain repairs. Ask whether that's likely and whether it takes two people.",
  ],
  [
    'Will a custom panel need to be moved?',
    'On a panel-ready dishwasher or refrigerator, the decorative panel may need removing and refitting, and the door springs are tuned to carry its weight.',
  ],
  ['How long do parts take?', 'High-end parts are often ordered rather than carried, so ask for a realistic lead time before deciding.'],
];

const faqs: Faq[] = [
  {
    q: 'Does 76571 include homes outside the village?',
    a: 'Yes, 76571 reaches well beyond the village center. Mention the road name and the closest intersection so the visit lands at the right gate.',
  },
  {
    q: 'Can a panel-ready dishwasher be repaired without taking the panel off?',
    a: 'Often, yes. Many repairs are reached from the front kick plate or by pulling the dishwasher forward a few inches. The panel usually only comes off when the outer door or its springs are involved.',
  },
  {
    q: 'My built-in fridge is warm but the freezer is fine. Is that a big repair?',
    a: "Not necessarily. It often points to an airflow or defrost problem, the same as on a freestanding fridge. Clean the grille at the top or bottom where the condenser sits, then call with the model number if it's still warm a few hours later.",
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

export default function SaladoAreaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Appliance repair in Salado, TX',
          serviceType: 'Appliance repair',
          description,
          path,
          areaServed: { '@type': 'City', name: 'Salado, TX' },
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: 'Salado', path },
        ]}
        title="Appliance Repair in Salado, TX"
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Salado sits inside the service area, the village and the 76571 roads around it. For appliance repair in Salado, TX, phone{' '}
          <PhoneLink location="salado_intro" className={white} />, share your ZIP and street, and the scheduler can tell you what the calendar looks
          like. If the appliance is built in or carries a high-end name, the questions below will save you a wasted trip.
        </p>
        <div className="mt-8">
          <CtaRow location="salado_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="builtin-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="builtin-heading" eyebrow="76571" title="Built-ins and" accent="quieter luxury" />
          <div className="prose-copy">
            <p>
              Salado has its share of larger homes and remodeled kitchens, from the houses off Main Street and along Salado Creek to the Mill Creek
              area and the acreage outside the village. Those kitchens often hide their appliances behind cabinetry: a built-in or column refrigerator,
              a double wall oven, a dishwasher wearing a wood panel that matches the drawers. They look better than the freestanding kind and are a
              little harder to service. A built-in can&apos;t simply be pulled out and tipped back, parts are often brand-specific, and not every brand
              is serviced by every technician.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="questions-heading">
        <SectionHeading id="questions-heading" eyebrow="Before you book" title="Questions to ask before booking" accent="a high-end appliance repair" />
        <ol className="grid gap-3">
          {questions.map(([q, a], i) => (
            <li key={q} className="flex gap-4 rounded-2xl border border-sand bg-canvas p-5">
              <span className="font-display text-2xl font-bold text-flame">{i + 1}</span>
              <p className="text-[16px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">{q}</strong> {a}
              </p>
            </li>
          ))}
        </ol>
        <div className="prose-copy mt-6">
          <p>
            Own a Sub-Zero, Viking, Wolf, Thermador or Miele? Say so in the first sentence of the call, give the model number, and get a clear answer on
            whether it can be taken on before anything is scheduled. A straight yes or no up front beats a visit that ends with &quot;I can&apos;t get
            that part.&quot;
          </p>
        </div>
        <MidCta
          location="salado_midpage"
          before={<>Once you know those answers, ring </>}
          after={
            <>
              . Be ready to give the brand, the model and serial numbers, how the unit is installed (built into cabinetry, trimmed with a custom panel,
              or freestanding), and the symptom. A wide shot of the kitchen showing the unit helps the scheduler block enough time.
            </>
          }
        />
      </Section>

      <Section labelledBy="ovens-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="ovens-heading" eyebrow="Built-in repairs" title="Wall ovens, cooktops and" accent="panel-ready dishwashers" />
          <div className="prose-copy">
            <p>
              Wall oven repairs usually come down to the same parts as any oven: a bake or broil element, a temperature sensor, a convection fan, a
              control board. The extra step is access, since many of those parts sit behind the back panel, which faces the wall. The part-by-part
              testing is laid out in <Link href="/oven-stove-repair-temple-tx/">how oven and cooktop faults get tested</Link>.
            </p>
            <p>
              Panel-ready dishwashers bring their own small headache: a heavy wood panel can make the door drop open or slam shut if the hinge springs
              weren&apos;t adjusted for it. Leaks and drain problems follow the same path as any machine, covered in{' '}
              <Link href="/dishwasher-repair-temple-tx/">the dishwasher water path from inlet to drain</Link>.
            </p>
            <p>
              KitchenAid built-ins turn up in plenty of remodeled kitchens, and{' '}
              <Link href="/brands/kitchenaid-appliance-repair-temple-tx/">KitchenAid&apos;s built-in fridges and ranges</Link> share a lot of parts with
              their Whirlpool cousins, which helps with lead times. For anything else, the{' '}
              <Link href={routes.brands}>list of brands and who makes them</Link> is a quick way to see which family your appliance belongs to.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="water-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            id="water-heading"
            eyebrow="Well water"
            title="Well water, softeners"
            accent="and your appliances"
            intro="Some Salado properties run on a private well, often with a water softener. That affects two appliances in particular."
          />
          <div className="prose-copy">
            <p>
              Ice makers and refrigerator water dispensers have a small screen in the inlet valve. Well sediment collects there and slows the fill, so
              the tray fills short and cubes turn out thin or stop altogether. If a softener&apos;s resin beads break down, they can travel down the line
              and clog the same screen. The fix is usually a cleared or replaced valve, plus a look at the filter, as in{' '}
              <Link href="/ice-maker-repair-temple-tx/">why an ice maker stops filling</Link>.
            </p>
            <p>
              Dishwashers react to water hardness both ways. Hard, unsoftened water leaves white film and scale on the spray arms; very soft water with
              a full dose of detergent can etch glassware over time. Using less detergent with softened water often solves the second problem.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="fast-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fast-heading" eyebrow="Timing" title="How fast can a technician" accent="get to Salado?" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Salado is a straight run down I-35 past Belton, so distance isn&apos;t the main hurdle. The bigger factor on many Salado calls is the
              part: if a built-in needs something brand-specific, the first visit diagnoses it and a second one fits the part. Same-day appliance repair
              in Salado is possible on some days for common repairs; ask for a realistic window when you call rather than a hopeful one.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="cost-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cost-heading" eyebrow="Cost" title="What to ask" accent="about cost" />
          <div className="prose-copy">
            <p>
              Get both numbers, the trip and the fix, settled before a tool comes out, and find out whether returning with an ordered part costs extra.
              For an expensive built-in, ask what the repair costs compared with replacing it, including the cabinet work a replacement would bring.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="next-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="next-heading" eyebrow="Neighbors" title="Next" accent="door" />
          <div className="prose-copy">
            <p>
              North on I-35, <Link href="/service-areas/belton-tx/">Belton</Link> is the closest town on the list. Every covered town, with ZIP codes,
              is on <Link href={routes.areas}>the service area map for Bell County</Link>, and{' '}
              <Link href={routes.home}>appliance repair in Temple</Link> covers the full set of appliances.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Salado" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="salado_final"
        title="Call with the model"
        accent="in hand"
        cardHeadingLevel="p"
        cardTitle="Call about a Salado repair"
        text={
          <>
            Built-in, panel-ready or a plain freestanding unit, appliance repair in Salado, TX starts with the brand and model. Call{' '}
            <PhoneLink location="salado_final_text" className={white} /> starting with those two, then your street and what&apos;s going wrong.
          </>
        }
      />
    </>
  );
}

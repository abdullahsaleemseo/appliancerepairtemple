import Link from 'next/link';
import { routes, site } from '@/config/site';
import type { Faq } from '@/content/types';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

/** Samsung brand page (source: content/brand-samsung-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/samsung-appliance-repair-temple-tx/';
const description =
  'Samsung appliance repair in Temple, TX: why French door ice makers freeze up, how to read Samsung codes and model numbers, and when to call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Samsung Appliance Repair Temple TX | Ice Makers & Codes',
  description,
  path,
});

const faqs: Faq[] = [
  {
    q: 'Will an independent repair void my Samsung warranty?',
    a: "If the appliance is still under warranty, contact Samsung first so covered repairs are handled by them. Under the Magnuson-Moss Warranty Act, as described by the FTC, a manufacturer generally can't void a warranty just because you used independent service, though damage from a faulty repair wouldn't be covered.",
  },
  {
    q: 'Why does my Samsung fridge display show OF OF?',
    a: 'That usually means demo or showroom mode, where the lights and display work but cooling is off. It\'s switched off with a button combination held for several seconds, which varies by model; the manual lists it. If the fridge is warm and shows OF OF, this is the first thing to check.',
  },
  {
    q: 'How do I check whether my Samsung washer was recalled?',
    a: "Find the model and serial number on the label, usually on the back or inside the lid area, and enter them on Samsung's recall page or look up the recall on the Consumer Product Safety Commission site. The 2016 recall covered top-load washers made from 2011 to 2016.",
  },
  {
    q: 'Are Samsung parts hard to get?',
    a: 'For current and recent models, common parts are usually available. Older models and some control boards can take longer or be discontinued. Having the full model number ready when you call helps the technician check part availability before the visit.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const flame = 'font-semibold text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame';

export default function SamsungBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Samsung appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Samsung appliance repair',
          description,
          path,
          brand: 'Samsung',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'Samsung', path },
        ]}
        title={`Samsung Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Smart appliances, coded symptoms. A Samsung fridge, washer or dryer rarely just stops; it shows a short code on the display, and on
          connected models it sends the same alert to the SmartThings app on your phone. Those codes do a lot of the early work in Samsung
          appliance repair in Temple, TX, because they point at a section of the machine before anyone opens it. Write down the code exactly,
          note the model number, and call <PhoneLink location="samsung_intro" className={white} />.
        </p>
        <div className="mt-8">
          <CtaRow location="samsung_hero" dark />
        </div>
      </PageHero>

      <Section tone="ink" labelledBy="ice-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="ice-heading" eyebrow="The ice maker problem" title="The French door ice maker" accent="that keeps freezing up" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              If there&apos;s one Samsung problem people know by name, it&apos;s this one. Many Samsung French door refrigerators put the ice
              maker in the left fresh-food door, inside its own insulated compartment. Cold air is piped in from the freezer to make ice, and the
              compartment relies on a seal, a small fan and a heater to keep that cold air where it belongs. When the seal leaks, the fan
              struggles or the heater can&apos;t keep moisture in check, frost builds up inside the compartment. Over weeks, it can coat the ice
              maker, block the chute and stop ice production entirely, and melting frost can drip from the dispenser.
            </p>
            <p>
              The pattern has drawn plenty of owner complaints and class-action lawsuits over the years, and Samsung has released updated parts
              for some models. For anyone looking for Samsung ice maker repair in Temple, the important point is that chipping the ice out or
              blowing it with a hair dryer only buys time. A lasting fix means finding why cold air is escaping: the compartment seal, the ice room
              fan, the heater, a sensor, or in some cases an updated ice maker assembly. The rest of the water route matters too, and{' '}
              <Link href="/ice-maker-repair-temple-tx/" className={white}>
                how an ice maker gets its water and where it fails
              </Link>{' '}
              covers the supply side that Samsung shares with every other brand.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="model-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="model-heading" eyebrow="Model numbers" title="What do the letters on a" accent="Samsung model number mean?" />
          <div className="prose-copy">
            <p>
              Samsung model numbers open with two letters that name the product: RF marks a French door fridge, RS a side-by-side and RB a
              bottom-freezer; WF is a front-load washer and WA a top-load; DV is a dryer, with DVE for electric and DVG for gas; NE is an electric
              range and NX a gas range; DW is a dishwasher; and ME is usually a microwave. The rest of the string covers size, features, color and
              the market. Confirm on the label, since Samsung occasionally adds new prefixes. On fridges, the label is usually inside the
              fresh-food section on a side wall; on washers and dryers, look inside the door opening or on the back.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="codes-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="codes-heading" eyebrow="Error codes" title="Codes on the display," accent="codes in the app" />
          <div>
            <p className="flex gap-3 rounded-2xl border border-sand bg-canvas p-5 text-[16px] leading-relaxed text-ink-body">
              <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-flame" strokeWidth={2} />
              <span>
                On connected Samsung appliances, the SmartThings app can show the same error the display shows, often with a short description,
                and can run a self-check on some models. It&apos;s worth opening the app before you call; a screenshot of the error saves time.
              </span>
            </p>
            <div className="prose-copy mt-6">
              <p>
                Washers are where most Samsung codes come up. Samsung washer error codes for water supply, draining and unbalanced loads follow a
                pattern explained alongside <Link href="/washer-repair-temple-tx/">how to tell where a washer&apos;s cycle stopped</Link>, so
                there&apos;s no need to repeat them here. One Samsung-specific note: in 2016, Samsung recalled millions of top-load washers made
                from 2011 to 2016 because the lid could detach during high-speed spin. If you own an older Samsung top-loader, check its serial
                number against the recall before anything else.
              </p>
              <p>
                For Samsung dryer repair, heat faults usually show up as an HE or hE code, which points to the heating circuit: the element or gas
                parts, a thermal fuse or a thermistor, often set off by a restricted vent, which is why{' '}
                <Link href="/dryer-repair-temple-tx/">checking a dryer that stops heating</Link> starts at the vent. As with every code here,
                confirm the meaning in your manual, since codes vary by model.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="fridge-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fridge-heading" eyebrow="Samsung refrigerators" title="Samsung refrigerator repair" accent="beyond the ice maker" />
          <div className="prose-copy">
            <p>
              Cooling problems on Samsung fridges follow the usual pattern: a warm fresh-food side over a still-cold freezer points to airflow,
              often an evaporator fan or a frosted coil from a defrost fault, and both sides warming points to the condenser side or the
              compressor. Samsung fridges show fan and sensor faults as codes on many models, which helps narrow it down. For Samsung refrigerator
              repair in Temple, the general steps in <Link href="/refrigerator-repair-temple-tx/">why a refrigerator stops cooling</Link> apply,
              and the display code tells the technician which of those steps to start with.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="worth-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" eyebrow="Worth repairing?" title="Samsung appliance repair in Temple, TX:" accent="is it worth it?" />
          <div className="prose-copy">
            <p>
              On a fridge or washer under about eight to ten years old, usually yes. Ice maker parts, fans, defrost parts, door switches, pumps
              and sensors are common repairs, and replacing a large French door fridge costs far more than any of them. If you searched for
              Samsung repair near me in Temple because of an ice maker, that&apos;s almost always worth fixing properly rather than living without
              ice.
            </p>
            <p>
              The harder calls are control boards on older models, which can be expensive and sometimes slow to arrive, and sealed system failures
              on older fridges. Before agreeing to a large repair, check your warranty card: Samsung has offered longer parts-only coverage on some
              key components, such as certain compressors and washer motors, even after the main warranty ends. Labor usually isn&apos;t included
              in that extra coverage. Then call <PhoneLink location="samsung_worth" className={flame} /> and settle two numbers up front: the visit
              fee and the repair price, before a part is ordered.
            </p>
            <p className="text-[15px] text-ink-muted">Repairs here are independent of Samsung, which neither owns nor authorizes this service.</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Samsung repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="samsung_final"
        title="Ready to clear"
        accent="that code?"
        cardHeadingLevel="p"
        cardTitle="Book a Samsung repair"
        text={
          <>
            Screenshot the code from the display or the SmartThings app, note the model number, then call{' '}
            <PhoneLink location="samsung_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a Samsung repair
            </Link>
            . The exact code is the fastest head start you can give.
          </>
        }
      />
    </>
  );
}

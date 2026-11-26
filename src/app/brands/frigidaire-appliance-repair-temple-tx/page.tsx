import Link from 'next/link';
import { routes, site } from '@/config/site';
import type { Faq } from '@/content/types';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

/** Frigidaire brand page (source: content/brand-frigidaire-v1.md, Nov 2026). Replaces the generic brand template for this slug. */
const path = '/brands/frigidaire-appliance-repair-temple-tx/';
const description =
  'Frigidaire appliance repair in Temple, TX: which fixes pay off, Frigidaire vs Gallery vs Professional, common fridge and range faults. Call (254) 615-2088.';

export const metadata = pageMetadata({
  title: 'Frigidaire Appliance Repair Temple TX | Fridges & Ranges',
  description,
  path,
});

const worth: [string, string, string][] = [
  [
    'Refrigerator (top-freezer, side-by-side, French door)',
    'Evaporator fan, damper control, defrost parts, ice maker, inlet valve',
    'Yes, for most repairs short of the compressor',
  ],
  ['Range or wall oven', 'Bake element or igniter, oven temperature sensor, surface element switch', 'Yes; these are inexpensive parts'],
  ['Dishwasher', 'Drain pump, filter cleaning, door gasket, inlet valve', 'Yes for those; on a basic model, a control board can tip it toward replacing'],
  ['Chest or upright freezer', 'Start relay, thermostat, door or lid gasket', "Yes; a refrigerant leak in a small one usually isn't"],
  ['Over-the-range microwave', 'Door switch, diode, vent fan', "Often, because it's also the range hood"],
  ['Front-load or top-load laundry', 'Drain pump, door lock, belt', 'Usually, on machines under about ten years old'],
];

const faqs: Faq[] = [
  {
    q: 'Are Frigidaire and Electrolux parts the same?',
    a: 'Some are. Both brands belong to the same company, and many parts overlap, especially in refrigerators, ranges and laundry. Electrolux models tend to have more premium features and trim. Match any part by the full model number rather than assuming it fits.',
  },
  {
    q: 'Why is my Frigidaire fridge freezer cold but the fridge warm?',
    a: 'Most often the damper control between the freezer and fresh-food sections is stuck, or the evaporator fan has stopped, or the coil behind the freezer panel is frosted over. Check that nothing blocks the vents inside both sections, then have the fan, damper and defrost system checked.',
  },
  {
    q: 'What does the F10 code mean on my Frigidaire oven?',
    a: "On many Frigidaire ranges, F10 means the oven temperature is higher than it should be, often from a failed temperature sensor or a control fault. Leave the range switched off at the panel until it's checked. Meanings vary by model, so confirm it in your manual.",
  },
  {
    q: 'Is a Frigidaire Gallery worth more to repair than a standard model?',
    a: 'Generally yes. Gallery appliances cost more to replace, so the same repair is a better value. Many internal parts are shared with standard Frigidaire models, which keeps the parts side reasonable. Weigh the quoted repair against what a new Gallery model of the same size would cost.',
  },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

export default function FrigidaireBrandPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Frigidaire appliance repair in ${site.city}, ${site.stateAbbr}`,
          serviceType: 'Frigidaire appliance repair',
          description,
          path,
          brand: 'Frigidaire',
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: 'Frigidaire', path },
        ]}
        title={`Frigidaire Appliance Repair in ${site.city}, ${site.stateAbbr}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          Frigidaire is the practical brand. Owned by Electrolux, it shows up in a lot of builder-grade kitchens, rental properties and garage
          freezers around Temple, and most of its appliances sit in the middle of the price range. That makes the real question in Frigidaire
          appliance repair in Temple, TX a simple one: is this repair worth it on this appliance? Usually it is, as long as the part matches the
          machine&apos;s value. Call <PhoneLink location="frigidaire_intro" className={white} /> with the model number and what&apos;s going wrong.
        </p>
        <div className="mt-8">
          <CtaRow location="frigidaire_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="worth-heading">
        <SectionHeading id="worth-heading" eyebrow="Worth repairing?" title="Frigidaire appliance repair in Temple, TX:" accent="which fixes are worth it?" />
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
          <table className="w-full min-w-[680px] text-left text-[15px]">
            <caption className="sr-only">Frigidaire appliances, their common fixes and whether each is usually worth repairing</caption>
            <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
              <tr>
                <th scope="col" className={th}>Frigidaire appliance</th>
                <th scope="col" className={th}>Common fix</th>
                <th scope="col" className={th}>Usually worth repairing?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/70">
              {worth.map(([app, fix, verdict]) => (
                <tr key={app} className="align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{app}</th>
                  <td className="px-4 py-3 text-ink-body">{fix}</td>
                  <td className="px-4 py-3 text-ink-body">{verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-copy mt-8 max-w-3xl">
          <p>
            The pattern is consistent: Frigidaire&apos;s common parts are affordable and easy to get, so the ordinary repairs make sense. The
            exceptions are the expensive ones on the cheaper models, a compressor on an older fridge or a main board on a basic dishwasher, where the
            repair can approach the cost of a new unit.
          </p>
          <p>
            If the appliance is still under Frigidaire&apos;s warranty, go to Frigidaire first and let them handle covered repairs. Outside that
            coverage, the choice of technician is yours. A federal law, the Magnuson-Moss Warranty Act, generally stops a manufacturer from canceling
            coverage just because an outside technician serviced the appliance, according to the FTC; damage caused by a botched repair is the
            exception.
          </p>
        </div>
      </Section>

      <Section tone="white" labelledBy="lines-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="lines-heading" eyebrow="Three lines" title="Frigidaire, Gallery" accent="or Professional?" />
          <div className="prose-copy">
            <p>
              There are three Frigidaire lines, and the second letter of most current model numbers tells you which one you have: FF for standard
              Frigidaire, FG for Gallery and FP for Professional. Standard Frigidaire covers the basic, builder-grade models: plain finishes, fewer
              features and the lowest prices. Gallery is the step up, with stainless finishes, more convenience features and more electronics.
              Professional is the top line, with heavier styling and more advanced features. Confirm the letters on the tag, since older models use
              different patterns.
            </p>
            <p>
              The line changes the repair math. A part on a standard model has to justify itself against a cheaper replacement, while Frigidaire
              Gallery repair and Professional repairs are worth it more often because replacing those appliances costs more. Many core parts overlap
              across the three, which helps. If you have an older Kenmore, check the model number too: Kenmore refrigerators starting with 253 and
              ranges starting with 790 were built by Frigidaire, so the same parts and patterns apply.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="fridge-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="fridge-heading" eyebrow="Refrigerators" title="Common Frigidaire" accent="refrigerator problems" />
          <div className="prose-copy">
            <p>
              Airflow and ice account for most Frigidaire refrigerator repair in Temple. On top-freezer and side-by-side models, a damper control lets
              cold air from the freezer into the fresh-food section; when it sticks, the fridge side warms while the freezer stays cold. A stalled
              evaporator fan, or ice packed over the coil after a defrost failure, looks exactly the same from the outside. Ice makers on side-by-side
              models are another frequent call, often from a failed inlet valve or a frozen fill tube. The steps behind{' '}
              <Link href="/refrigerator-repair-temple-tx/">why a refrigerator stops cooling</Link> apply to Frigidaire fridges directly.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="range-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="range-heading" eyebrow="Ranges and dishwashers" title="Frigidaire ranges" accent="and dishwashers" />
          <div className="prose-copy">
            <p>
              On Frigidaire ranges, oven temperature problems usually trace to the temperature sensor in the oven cavity. Many models show an F10
              code when the oven runs hotter than it should; cut the power at the panel until it&apos;s been looked at, and confirm the meaning in
              your manual. Bake elements, igniters and surface element switches are the other common Frigidaire oven repair parts, all covered in{' '}
              <Link href="/oven-stove-repair-temple-tx/">oven and range repair by part</Link>.
            </p>
            <p>
              For Frigidaire dishwasher repair, draining is the usual complaint. A clogged filter, a kinked drain hose or a garbage disposal
              connection causes most of it before the drain pump itself, and{' '}
              <Link href="/dishwasher-repair-temple-tx/">a dishwasher that won&apos;t drain</Link> walks through those in order.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="rental-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="rental-heading" eyebrow="Rentals" title="For landlords and tenants around" accent="Temple College and Baylor Scott & White" dark />
          <div className="space-y-5 text-[17px] leading-relaxed text-white/75">
            <p>
              Plenty of rentals near the college and the hospital are fitted with Frigidaire, because builders and property owners choose it for good
              value. If you rent, check with your landlord or property manager before booking a repair. Many leases say the owner arranges and pays for
              appliance repairs, and calling them first avoids a bill you didn&apos;t need to pay.
            </p>
            <p>
              If you own rental property, the model number and a short description from the tenant save a trip. For Frigidaire repair near me searches
              from landlords, the worth-it table above is a fair guide: ordinary parts are worth fixing, while expensive repairs on older builder-grade
              units deserve a price check against replacement. Some owners also use the sister brand, and{' '}
              <Link href="/brands/electrolux-appliance-repair-temple-tx/" className={white}>
                Electrolux appliances
              </Link>{' '}
              share a parent company and many parts with Frigidaire.
            </p>
            <p className="text-[15px] text-white/55">
              This service works independently and has no affiliation with Frigidaire or Electrolux, nor authorization from either.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Frigidaire repair" accent="FAQ" />
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <FinalCta
        formId="frigidaire_final"
        title="Ready to fix"
        accent="your Frigidaire?"
        cardHeadingLevel="p"
        cardTitle="Book a Frigidaire repair"
        text={
          <>
            Find the model tag, note whether it says FF, FG or FP, then call <PhoneLink location="frigidaire_final_text" className={white} /> or{' '}
            <Link href={routes.request} className={white}>
              book a Frigidaire repair
            </Link>
            . Renters, a quick word with the landlord first can save a bill.
          </>
        }
      />
    </>
  );
}

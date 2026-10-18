import Link from 'next/link';
import { routes, site } from '@/config/site';
import { brands, brandHref, otherBrands } from '@/content/brands';
import { serviceByKey } from '@/content/services';
import { BrandChips } from '@/components/BrandChips';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/Section';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Brand Repair ${site.city} ${site.stateAbbr} | Error Codes & Model Tags`,
  description: `Samsung code, LG fridge not cooling or Bosch E15? Repair notes for 12 brands in ${site.city}, ${site.stateAbbr}: model numbers, common failures and parts. Call (254) 615-2088.`,
  path: routes.brands,
});

const families = [
  { title: 'Whirlpool Corporation', text: 'Whirlpool, Maytag, KitchenAid, Amana and JennAir. Many pumps, lid locks, valves and igniters cross over between them.' },
  { title: 'GE Appliances (Haier)', text: 'GE, GE Profile, Café, Monogram and Hotpoint. The first letter of the model number usually names the line.' },
  { title: 'Electrolux', text: 'Electrolux and Frigidaire, including Gallery and Professional. Laundry and refrigeration platforms are often shared.' },
  { title: 'Kenmore', text: 'Built for Sears by Whirlpool, LG, Frigidaire and others. The three digits before the dot in the model number name the builder.' },
];

export default function BrandsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Brands', path: routes.brands }]} title={`Appliance Brands Repaired in ${site.city}`}>
        <p className="text-lg leading-relaxed text-white/70">
          Most {site.city} homes have a mix: a GE range that came with the house, a Samsung or LG fridge bought later, a
          Whirlpool or Maytag laundry pair in the utility room. Each brand guide below covers that brand&apos;s model number
          format, typical failures, error codes and where the tag sits, so you can describe the problem in a minute when you call.
        </p>
        <div className="mt-8">
          <CtaRow location="brands_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="brand-pages-heading">
        <SectionHeading id="brand-pages-heading" eyebrow="Repair guides" title="Brand-by-brand" accent="repair notes." />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {brands
            .filter((b) => b.hasPage)
            .map((b, i) => (
              <li key={b.key}>
                <Link
                  href={brandHref(b)}
                  className={`group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-card p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
                    i === 0 ? 'grain bg-ink text-white' : 'card'
                  }`}
                >
                  <span className={`font-display text-5xl font-extrabold tracking-[-0.04em] ${i === 0 ? 'text-white' : 'text-ink'}`}>{b.name}</span>
                  <span className={`mt-4 flex-1 text-[15px] ${i === 0 ? 'text-white/60' : 'text-ink-body'}`}>
                    {b.appliances.map((a) => serviceByKey[a.key].name.toLowerCase()).join(', ')}
                  </span>
                  <span className={`mt-6 inline-flex items-center gap-1.5 font-semibold ${i === 0 ? 'text-flame-glow' : 'text-ink'}`}>
                    {b.name} repair in {site.city}
                    <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="family-heading">
        <SectionHeading id="family-heading" eyebrow="Brand families" title="Who builds" accent="what." intro="Many brands share a parent company, and with it platforms and parts. Knowing the family helps a technician find a part." />
        <ul className="grid gap-4 md:grid-cols-2">
          {families.map((f) => (
            <li key={f.title} className="card p-7">
              <h3 className="font-display text-[20px] font-bold tracking-[-0.02em] text-ink">{f.title}</h3>
              <p className="mt-2 text-[15px] text-ink-body">{f.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="other-heading">
        {otherBrands.length ? (
          <>
            <SectionHeading id="other-heading" eyebrow="Also" title="Other brands" accent={`in ${site.city} homes.`} intro="No dedicated page yet, but these are common in Temple homes." />
            <BrandChips names={otherBrands} />
          </>
        ) : (
          <SectionHeading
            id="other-heading"
            eyebrow="Not listed?"
            title="Your brand"
            accent="is not here?"
            intro="Many technicians also work on brands without a page here, such as JennAir, Hotpoint, Haier and Café. Call with the brand and model number and ask whether the provider can help."
          />
        )}
        <p className="mt-12 max-w-3xl text-sm text-ink-muted">
          All brand names are trademarks of their respective owners. {site.brandName} is not affiliated with, authorized by or
          endorsed by any manufacturer listed here. If your appliance is still under a manufacturer’s warranty, contact the
          manufacturer first.
        </p>
      </Section>

      <FinalCta
        formId="brands_final"
        title="Whatever the brand,"
        accent="one call."
        text="Read the brand and model number off the tag, and the technician can check parts before the visit."
      />
    </>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes, site } from '@/config/site';
import { brands, brandHref } from '@/content/brands';
import { serviceByKey, serviceHref } from '@/content/services';
import { PageHero } from '@/components/PageHero';
import { TrustBadges } from '@/components/TrustBadges';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { Section, SectionHeading } from '@/components/Section';
import { VerifyTag } from '@/components/Verify';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.filter((b) => b.hasPage).map((b) => ({ brand: b.slug }));
}

type Params = { params: Promise<{ brand: string }> };
const find = (slug: string) => brands.find((b) => b.slug === slug && b.hasPage);

export async function generateMetadata({ params }: Params) {
  const b = find((await params).brand);
  if (!b) return {};
  return pageMetadata({ title: b.metaTitle, description: b.metaDescription, path: brandHref(b) });
}

export default async function BrandPage({ params }: Params) {
  const b = find((await params).brand);
  if (!b) notFound();
  const path = brandHref(b);
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${b.name} Appliance Repair in ${site.city}, ${site.state}`,
          description: b.metaDescription,
          path,
          serviceType: `${b.name} appliance repair`,
        })}
      />
      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: b.name, path },
        ]}
        title={`${b.name} Appliance Repair in ${site.city}, ${site.state}`}
      >
        <div className="prose-copy prose-dark">
          {b.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <VerifyTag label={`CONFIRM PROVIDER SERVICES ${b.name.toUpperCase()}`} />
        <div className="mt-8">
          <CtaRow location={`brand_${b.key}_hero`} dark />
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <TrustBadges dark />
        </div>
      </PageHero>

      <Section labelledBy="types-heading">
        <SectionHeading id="types-heading" eyebrow="Appliances" title={`${b.name} appliances`} accent="we repair." />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {b.appliances.map((a) => {
            const s = serviceByKey[a.key];
            return (
              <li key={a.key}>
                <Link href={serviceHref(a.key)} className="card group flex h-full items-start gap-4 p-6 transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-canvas text-ink transition group-hover:bg-flame group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold tracking-[-0.02em] text-ink">
                      {b.name} {s.name.toLowerCase()}
                    </span>
                    <span className="mt-1 block text-[15px] text-ink-body">{a.note}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="ink" labelledBy="issues-heading">
        <SectionHeading id="issues-heading" eyebrow="What breaks" title={`Common ${b.name} problems`} accent="we see." dark />
        <ul className="grid gap-4 md:grid-cols-2">
          {b.issues.map((i) => (
            <li key={i.title} className="card-dark p-7">
              <h3 className="font-display text-[21px] font-bold tracking-[-0.025em] text-white">{i.title}</h3>
              <p className="mt-2 text-[15px] text-white/60">{i.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="process-heading">
        <SectionHeading id="process-heading" eyebrow="Process" title="How service" accent="works." center />
        <HowItWorks />
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title={`${b.name} repair`} accent="questions." />
          <FaqList faqs={b.faqs} />
        </div>
        <p className="mt-12 max-w-3xl text-sm text-ink-muted">
          {b.name} is a trademark of its respective owner. {site.brandName} is not affiliated with or endorsed by {b.name}.
        </p>
        <div className="mt-5 flex flex-wrap gap-6">
          <Link href={routes.cityPage} className="link-arrow">
            Appliance repair in {site.city}
          </Link>
          <Link href={routes.brands} className="link-arrow">
            All brands
          </Link>
        </div>
      </Section>

      <FinalCta formId={`brand_${b.key}_final`} title={`${b.name} acting up?`} accent="We can help." />
    </>
  );
}

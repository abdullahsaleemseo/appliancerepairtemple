import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes, site } from '@/config/site';
import { brands, brandHref } from '@/content/brands';
import { serviceByKey, serviceHref } from '@/content/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
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
      <section className="bg-surface">
        <div className="mx-auto max-w-site px-4 pb-12 pt-6 lg:px-6">
          <Breadcrumbs
            items={[
              { name: 'Brands', path: routes.brands },
              { name: b.name, path },
            ]}
          />
          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
            {b.name} Appliance Repair in {site.city}, {site.state}
          </h1>
          <div className="prose-copy mt-6 max-w-3xl">
            {b.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <p className="mt-2">
            <VerifyTag label={`CONFIRM PROVIDER SERVICES ${b.name.toUpperCase()}`} />
          </p>
          <div className="mt-8">
            <CtaRow location={`brand_${b.key}_hero`} />
          </div>
        </div>
      </section>

      <Section labelledBy="types-heading">
        <SectionHeading id="types-heading" title={`${b.name} appliances we repair`} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {b.appliances.map((a) => {
            const s = serviceByKey[a.key];
            return (
              <li key={a.key}>
                <Link href={serviceHref(a.key)} className="flex h-full items-start gap-4 rounded-card bg-white p-5 shadow-card ring-1 ring-slate-100 hover:shadow-lift">
                  <Icon name={s.icon} className="h-8 w-8 shrink-0 text-navy" />
                  <span>
                    <span className="block font-heading font-extrabold text-navy">
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

      <Section tone="surface" labelledBy="issues-heading">
        <SectionHeading id="issues-heading" title={`Common ${b.name} problems we see`} intro="Every appliance brand has its usual failures. These are the ones we run into most." />
        <ul className="grid gap-4 md:grid-cols-2">
          {b.issues.map((i) => (
            <li key={i.title} className="rounded-card bg-white p-6 shadow-card">
              <h3 className="font-heading text-lg font-extrabold text-navy">{i.title}</h3>
              <p className="mt-2 text-[15px] text-ink-body">{i.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="process-heading">
        <SectionHeading id="process-heading" title="How service works" center />
        <HowItWorks />
      </Section>

      <Section tone="surface" labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading id="faq-heading" title={`${b.name} repair questions`} />
          <FaqList faqs={b.faqs} />
        </div>
        <p className="mt-10 max-w-3xl text-sm text-ink-muted">
          {b.name} is a trademark of its respective owner. {site.brandName} is not affiliated with or endorsed by {b.name}.
        </p>
        <p className="mt-4">
          <Link href={routes.cityPage} className="font-semibold text-navy underline">
            Appliance repair in {site.city}
          </Link>{' '}
          ·{' '}
          <Link href={routes.brands} className="font-semibold text-navy underline">
            All brands
          </Link>
        </p>
      </Section>

      <FinalCta formId={`brand_${b.key}_final`} title={`${b.name} appliance acting up?`} />
    </>
  );
}

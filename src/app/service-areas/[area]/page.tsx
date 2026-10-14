import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isProduction, routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { serviceByKey, serviceHref } from '@/content/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { ReviewsBlock, hasVerifiedReviews } from '@/components/ReviewsBlock';
import { Section, SectionHeading } from '@/components/Section';
import { ServicesGrid } from '@/components/ServicesGrid';
import { DraftBlock, VerifyTag } from '@/components/Verify';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

type Params = { params: Promise<{ area: string }> };
const find = (slug: string) => areas.find((a) => a.slug === slug);

export async function generateMetadata({ params }: Params) {
  const a = find((await params).area);
  if (!a) return {};
  return pageMetadata({ title: a.metaTitle, description: a.metaDescription, path: areaHref(a) });
}

export default async function AreaPage({ params }: Params) {
  const a = find((await params).area);
  if (!a) notFound();
  const path = areaHref(a);
  const others = areas.filter((x) => x.slug !== a.slug);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Appliance Repair in ${a.name}, ${site.state}`,
          description: a.metaDescription,
          path,
          serviceType: 'Appliance repair',
        })}
      />
      <section className="bg-surface">
        <div className="mx-auto max-w-site px-4 pb-12 pt-6 lg:px-6">
          <Breadcrumbs
            items={[
              { name: 'Service Areas', path: routes.areas },
              { name: a.name, path },
            ]}
          />
          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">{a.h1}</h1>
          <div className="prose-copy mt-6 max-w-3xl">
            {a.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <p className="mt-5 flex max-w-3xl items-start gap-2 rounded-lg bg-white px-4 py-3 text-[15px] text-ink shadow-card">
            <Icon name="calendar" className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" />
            <span>
              {a.travelNote}
              <VerifyTag label="CONFIRM SCHEDULING" />
            </span>
          </p>
          <div className="mt-8">
            <CtaRow location={`area_${a.slug}_hero`} />
          </div>
        </div>
      </section>

      {hasVerifiedReviews() ? (
        <Section labelledBy="proof-heading">
          <SectionHeading id="proof-heading" title={`Recent work in ${a.name}`} />
          <ReviewsBlock limit={2} />
        </Section>
      ) : !isProduction ? (
        <Section labelledBy="proof-heading">
          <DraftBlock show={false} label="LOCAL PROOF: REAL REPAIR COUNT AND 2 LOCAL REVIEWS ONLY">
            <div className="rounded-card bg-surface p-6">
              <h2 id="proof-heading" className="font-heading text-2xl font-extrabold text-navy">
                We’ve completed [N] repairs in {a.name}
              </h2>
              <p className="mt-2 text-ink-body">Add two verified reviews from {a.name} customers here.</p>
            </div>
          </DraftBlock>
        </Section>
      ) : null}

      <Section tone="surface" labelledBy="local-heading">
        <SectionHeading id="local-heading" title={`What we see in ${a.name}`} />
        <ul className="grid gap-5 md:grid-cols-3">
          {a.localPoints.map((p) => (
            <li key={p.heading} className="rounded-card bg-white p-6 shadow-card">
              <h3 className="font-heading text-lg font-extrabold text-navy">{p.heading}</h3>
              <p className="mt-2 text-[15px] text-ink-body">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="svc-heading">
        <SectionHeading id="svc-heading" title={`Repairs we handle in ${a.name}`} />
        <ServicesGrid keys={a.featuredServices} showOther={false} />
        <p className="mt-6 text-ink-body">
          Also{' '}
          {(['dishwasher', 'oven', 'microwave', 'washer', 'dryer', 'refrigerator', 'freezer'] as const)
            .filter((k) => !a.featuredServices.includes(k))
            .map((k, i, arr) => (
              <span key={k}>
                <Link href={serviceHref(k)} className="font-semibold text-navy underline">
                  {serviceByKey[k].name.toLowerCase()} repair
                </Link>
                {i < arr.length - 1 ? ', ' : '.'}
              </span>
            ))}
        </p>
      </Section>

      <Section tone="surface" labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading id="faq-heading" title={`Appliance repair in ${a.name}: questions`} />
          <FaqList faqs={a.faqs} />
        </div>
      </Section>

      <Section labelledBy="zip-heading">
        <h2 id="zip-heading" className="font-heading text-2xl font-extrabold text-navy">
          {a.name} ZIP codes we serve
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {a.zips.map((z) => (
            <li key={z} className="rounded-full bg-surface px-4 py-2 font-semibold text-navy">
              {z}
            </li>
          ))}
        </ul>
        <p className="mt-2">
          <VerifyTag label="CHECK ZIP LIST AGAINST USPS" />
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          <Link href={routes.cityPage} className="font-semibold text-navy underline">
            Appliance repair in {site.city}
          </Link>
          {others.map((o) => (
            <Link key={o.slug} href={areaHref(o)} className="font-semibold text-navy underline">
              Appliance repair in {o.name}
            </Link>
          ))}
          <Link href={routes.request} className="font-semibold text-navy underline">
            Request service
          </Link>
        </div>
      </Section>

      <FinalCta formId={`area_${a.slug}_final`} title={`Need a repair in ${a.name}?`} />
    </>
  );
}

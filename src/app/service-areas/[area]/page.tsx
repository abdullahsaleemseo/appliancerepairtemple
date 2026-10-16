import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { serviceByKey, serviceHref } from '@/content/services';
import { PageHero } from '@/components/PageHero';
import { TrustBadges } from '@/components/TrustBadges';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { MapEmbed } from '@/components/AreaList';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { ShareExperience } from '@/components/ShareExperience';
import { Section, SectionHeading } from '@/components/Section';
import { ServicesGrid } from '@/components/ServicesGrid';
import { VerifyTag } from '@/components/Verify';
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
      <PageHero
        crumbs={[
          { name: 'Service Areas', path: routes.areas },
          { name: a.name, path },
        ]}
        title={a.h1}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">{a.intro[0]}</p>
        <p className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-[15px] text-white/80">
          <Icon name="calendar" className="mt-0.5 h-5 w-5 shrink-0 text-flame-glow" />
          <span>
            {a.travelNote}
          </span>
        </p>
        <div className="mt-8">
          <CtaRow location={`area_${a.slug}_hero`} dark />
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <TrustBadges dark />
        </div>
      </PageHero>

      {a.intro.length > 1 ? (
        <Section labelledBy="intro-heading">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading id="intro-heading" eyebrow={`${a.name}, ${site.stateAbbr}`} title="Appliance service" accent={`in ${a.name}.`} />
            <div className="prose-copy">
              {a.intro.slice(1).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      <Section tone="ink" labelledBy="local-heading">
        <SectionHeading id="local-heading" eyebrow="Local notes" title="What we see in" accent={`${a.name}.`} dark />
        <ul className={`grid gap-4 ${a.localPoints.length % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {a.localPoints.map((p) => (
            <li key={p.heading} className="card-dark p-7">
              <h3 className="font-display text-[21px] font-bold tracking-[-0.025em] text-white">{p.heading}</h3>
              <p className="mt-2 text-[15px] text-white/60">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {a.sections?.map((sec, i) => (
        <Section key={sec.heading} tone={i % 2 ? 'white' : 'canvas'} labelledBy={`sec-${i}`}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading id={`sec-${i}`} title={sec.heading} accent={sec.accent} />
            <div className="prose-copy">
              {sec.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section labelledBy="svc-heading">
        <SectionHeading id="svc-heading" eyebrow="Repairs" title="What we fix in" accent={`${a.name}.`} />
        <ServicesGrid keys={a.featuredServices} showOther={false} bento={false} />
        <p className="mt-8 text-ink-body">
          Also{' '}
          {(['dishwasher', 'oven', 'microwave', 'washer', 'dryer', 'refrigerator', 'freezer'] as const)
            .filter((k) => !a.featuredServices.includes(k))
            .map((k, i, arr) => (
              <span key={k}>
                <Link href={serviceHref(k)} className="font-semibold text-ink underline decoration-flame underline-offset-4">
                  {serviceByKey[k].name.toLowerCase()} repair
                </Link>
                {i < arr.length - 1 ? ', ' : '.'}
              </span>
            ))}
        </p>
      </Section>

      <ShareExperience place={a.name} />

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title={`Repair in ${a.name}:`} accent="questions." />
          <FaqList faqs={a.faqs} />
        </div>
      </Section>

      <Section tone="white" labelledBy="zip-heading">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <MapEmbed place={a.name} zoom={a.slug === 'killeen-tx' ? 12 : 13} />
          <div>
            <h2 id="zip-heading" className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
              {a.name} ZIP codes we serve
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {a.zips.map((z) => (
                <li key={z} className="rounded-full bg-ink px-4 py-2 font-display font-semibold tracking-wide text-white">
                  {z}
                </li>
              ))}
            </ul>
            {a.zipsVerified ? null : (
              <p className="mt-2">
                <VerifyTag label="CHECK ZIP LIST AGAINST USPS" />
              </p>
            )}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <Link href={routes.cityPage} className="link-arrow">
                Appliance repair in {site.city}
              </Link>
              {(a.nearby ?? others.map((o) => o.name)).map((name) => {
                const o = areas.find((x) => x.name === name);
                return o ? (
                  <Link key={name} href={areaHref(o)} className="link-arrow">
                    Appliance repair in {o.name}
                  </Link>
                ) : (
                  <span key={name} className="text-ink-body">
                    {name}
                  </span>
                );
              })}
              <Link href={routes.request} className="link-arrow">
                Request service
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <FinalCta formId={`area_${a.slug}_final`} title={`Need a repair in ${a.name}?`} accent="We’re close by." />
    </>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { brands, brandHref } from '@/content/brands';
import { serviceByKey, serviceHref, services } from '@/content/services';
import type { Service, ServiceBlock } from '@/content/types';
import { BrandChips } from '@/components/BrandChips';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PaymentNote } from '@/components/PaymentNote';
import { PhoneLink } from '@/components/PhoneLink';
import { ShareExperience } from '@/components/ShareExperience';
import { ServicePageView } from '@/components/SiteClient';
import { TrustBadges } from '@/components/TrustBadges';
import { VerifyTag } from '@/components/Verify';
import { QuickLeadForm } from '@/components/forms/QuickLeadForm';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

const find = (slug: string) => services.find((s) => s.slug === slug);

export async function generateMetadata({ params }: Params) {
  const s = find((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}/` });
}

const defaultProcess = [
  { title: 'Book', text: 'Call or send a request. We confirm a visit window.' },
  { title: 'Diagnose', text: 'The technician tests the parts and finds the fault.' },
  { title: 'Approve', text: 'You hear what failed and what the fix involves. Work starts only after you say yes.' },
  { title: 'Repair and test', text: 'The part is replaced and the appliance is run to confirm the fix.' },
];

/** Layout for services that have not been given their own block order yet. */
const defaultBlocks: ServiceBlock[] = [
  { type: 'symptoms' },
  { type: 'inlineForm' },
  { type: 'diagnostic' },
  { type: 'payment' },
  { type: 'process', heading: 'How the repair works', steps: defaultProcess },
  { type: 'repairOrReplace' },
  { type: 'brands' },
  { type: 'faq' },
];

const h2 = 'h-section text-[2rem] md:text-[2.6rem]';

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className={h2}>
      {children}
    </h2>
  );
}

function Block({ block, s, index }: { block: ServiceBlock; s: Service; index: number }) {
  const id = `${block.type}-${index}`;
  switch (block.type) {
    case 'quickAnswer':
      return (
        <section aria-labelledby={id} className="reveal grain relative overflow-hidden rounded-xl2 bg-ink p-8 md:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-flame/25 blur-[100px]" />
          <p className="eyebrow relative mb-4 text-flame-glow">
            <span className="h-px w-6 bg-flame-glow" aria-hidden="true" />
            Quick answer
          </p>
          <h2 id={id} className={`${h2} relative text-white`}>
            {block.heading}
          </h2>
          {block.intro ? <p className="relative mt-4 text-white/70">{block.intro}</p> : null}
          <ol className="relative mt-7 space-y-3">
            {block.steps.map((step, i) => (
              <li key={step.slice(0, 24)} className="flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-[15.5px] text-white/85">
                <span className="font-serif text-2xl italic leading-none text-flame-glow">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          {block.note ? (
            <p className="relative mt-5 flex gap-3 rounded-2xl bg-flame/15 p-4 text-[14.5px] text-white/85">
              <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-flame-glow" />
              {block.note}
            </p>
          ) : null}
        </section>
      );

    case 'symptoms':
      return (
        <section aria-labelledby={id} className="reveal">
          <p className="eyebrow mb-4 text-flame">
            <span className="h-px w-6 bg-flame" aria-hidden="true" />
            Symptom checker
          </p>
          <Heading id={id}>{s.symptomsHeading}</Heading>
          <p className="mt-4 text-ink-body">Tap the one that sounds like yours to see the usual cause.</p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {s.symptoms.map((sym, i) => (
              <details key={sym.title} className="group rounded-2xl border border-sand bg-white transition open:border-ink/20 open:shadow-card">
                <summary className="flex min-h-[72px] cursor-pointer list-none items-center gap-4 px-5 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-flame [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-2xl italic text-flame">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="flex-1 font-display text-[17px] font-semibold tracking-[-0.015em] text-ink">{sym.title}</h3>
                  <Icon name="chevron" className="h-5 w-5 shrink-0 text-ink-muted transition group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[15px] text-ink-body">{sym.cause}</p>
                  <p className="mt-4 flex items-start gap-2 rounded-xl bg-mint-soft px-3.5 py-2.5 text-[14px] font-medium text-mint">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                    {sym.fixable}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
      );

    case 'inlineForm':
      return (
        <div className="lg:hidden">
          <QuickLeadForm formId={`service_${s.key}_inline`} title={`Request ${s.name.toLowerCase()} repair`} defaultAppliance={s.key} />
        </div>
      );

    case 'partsTable':
      return (
        <section aria-labelledby={id} className="reveal">
          <Heading id={id}>{block.heading}</Heading>
          {block.intro ? <p className="mb-8 mt-4 text-ink-body">{block.intro}</p> : null}
          <div className="card overflow-hidden">
            <table className="w-full text-left text-[15px]">
              <caption className="sr-only">{block.heading}</caption>
              <thead className="border-b border-sand text-[12px] uppercase tracking-[0.14em] text-ink-muted">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold md:px-6">{block.columns?.[0] ?? 'Part'}</th>
                  <th scope="col" className="hidden px-5 py-4 font-semibold md:table-cell">{block.columns?.[1] ?? 'What it does'}</th>
                  <th scope="col" className="px-5 py-4 font-semibold">{block.columns?.[2] ?? 'Signs it is failing'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/70">
                {block.rows.map((r) => (
                  <tr key={r.part} className="align-top">
                    <th scope="row" className="px-5 py-4 font-semibold text-ink md:px-6">
                      {r.part}
                      <span className="mt-1 block text-[13.5px] font-normal text-ink-muted md:hidden">
                        {block.columns ? <span className="font-semibold text-ink">{block.columns[1]}: </span> : null}
                        {r.job}
                      </span>
                    </th>
                    <td className="hidden px-5 py-4 text-ink-body md:table-cell">{r.job}</td>
                    <td className="px-5 py-4 text-ink-body">{r.signs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note ? <p className="mt-4 text-[13.5px] text-ink-muted">{block.note}</p> : null}
        </section>
      );

    case 'stopUsing':
      return (
        <section aria-labelledby={id} className="reveal rounded-xl2 border border-flame/25 bg-flame-soft p-8 md:p-10">
          <p className="eyebrow mb-4 text-flame">
            <Icon name="shield" className="h-4 w-4" />
            Safety
          </p>
          <Heading id={id}>{block.heading}</Heading>
          {block.intro ? <p className="mt-4 text-ink-body">{block.intro}</p> : null}
          <ul className="mt-6 space-y-3">
            {block.items.map((item) => (
              <li key={item.slice(0, 24)} className="flex gap-3 text-[15.5px] text-ink">
                <span className="mt-2 h-2 w-2 shrink-0 rotate-45 rounded-[2px] bg-flame" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          {block.note ? <p className="mt-6 border-t border-flame/20 pt-5 text-[14.5px] text-ink-body">{block.note}</p> : null}
          <p className="mt-6">
            <PhoneLink location={`service_${s.key}_safety`} withIcon label="Call" className="inline-flex items-center gap-2 font-semibold text-ink underline decoration-flame underline-offset-4" />
          </p>
        </section>
      );

    case 'emergency':
      return (
        <section aria-labelledby={id} id="emergency" className="reveal scroll-mt-28">
          <p className="eyebrow mb-4 text-flame">
            <span className="h-px w-6 bg-flame" aria-hidden="true" />
            Emergency {s.name.toLowerCase()} repair
          </p>
          <Heading id={id}>{block.heading}</Heading>
          <p className="mt-4 text-ink-body">{block.intro}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <ul className="grid gap-3 sm:grid-cols-2">
              {block.signs.map((sg) => (
                <li key={sg.title} className="card p-5">
                  <h3 className="font-display text-[17px] font-bold tracking-[-0.02em] text-ink">{sg.title}</h3>
                  <p className="mt-1 text-[14.5px] text-ink-body">{sg.text}</p>
                </li>
              ))}
            </ul>
            <div className="grain relative self-start overflow-hidden rounded-card bg-ink p-6 text-white md:p-7">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-flame/30 blur-[70px]" />
              <h3 className="relative font-display text-lg font-bold tracking-[-0.02em] text-white">Before the technician arrives</h3>
              <ol className="relative mt-4 space-y-2.5">
                {block.steps.map((t, i) => (
                  <li key={t.slice(0, 24)} className="flex gap-3 text-[14.5px] text-white/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame text-[12px] font-semibold text-white">{i + 1}</span>
                    {t}
                  </li>
                ))}
              </ol>
              <p className="relative mt-5 text-[13.5px] text-white/55">
                Urgent calls get priority during business hours, {site.hours.value.long}. Ask about emergency visit details when you call.
              </p>
              <p className="relative mt-4">
                <PhoneLink location={`service_${s.key}_emergency`} withIcon label="Call now" className="inline-flex items-center gap-2 font-semibold text-white underline decoration-flame underline-offset-4" />
              </p>
            </div>
          </div>
        </section>
      );

    case 'diyVsPro':
      return (
        <section aria-labelledby={id} className="reveal">
          <Heading id={id}>{block.heading}</Heading>
          {block.intro ? <p className="mt-4 text-ink-body">{block.intro}</p> : null}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="card p-7">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                <Icon name="check" className="h-5 w-5 text-mint" strokeWidth={2.5} />
                Safe to check yourself
              </h3>
              <ul className="prose-copy">
                {block.diy.map((t) => (
                  <li key={t.slice(0, 24)}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="grain rounded-card bg-ink p-7">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold tracking-[-0.02em] text-white">
                <Icon name="tool" className="h-5 w-5 text-flame-glow" />
                Leave to a technician
              </h3>
              <ul className="prose-copy prose-dark [&_li]:text-white/75">
                {block.pro.map((t) => (
                  <li key={t.slice(0, 24)}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      );

    case 'process':
      return (
        <section aria-labelledby={id} className="reveal">
          <div className="mb-10">
            <Heading id={id}>{block.heading}</Heading>
            {block.intro ? <p className="mt-4 text-ink-body">{block.intro}</p> : null}
          </div>
          <HowItWorks steps={block.steps} />
        </section>
      );

    case 'diagnostic':
      if (!s.diagnostic.covers.length) return null;
      return (
        <section aria-labelledby={id} className="reveal grain relative overflow-hidden rounded-xl2 bg-ink p-8 md:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-flame/25 blur-[100px]" />
          <h2 id={id} className={`${h2} relative text-white`}>
            {s.diagnostic.heading}
          </h2>
          <div className="prose-copy prose-dark relative mt-5">
            {s.diagnostic.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <ul className="relative mt-8 grid gap-3 sm:grid-cols-2">
            {s.diagnostic.covers.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-[15px] text-white/85">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-mint-bright" strokeWidth={2.5} />
                {c}
              </li>
            ))}
          </ul>
        </section>
      );

    case 'repairOrReplace':
      return (
        <section aria-labelledby={id} className="reveal">
          <Heading id={id}>{s.repairOrReplace.heading}</Heading>
          <div className="prose-copy mt-6">
            {s.repairOrReplace.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 md:grid-cols-3">
            {s.repairOrReplace.points.map((p) => (
              <li key={p} className="card p-5 text-[15px] font-medium text-ink">
                {p}
              </li>
            ))}
          </ul>
          {s.blocks?.some((b) => b.type === 'stopUsing') ? null : (
            <aside className="mt-6 flex gap-4 rounded-2xl border border-flame/20 bg-flame-soft p-5">
              <Icon name="shield" className="h-6 w-6 shrink-0 text-flame" />
              <p className="text-[15px] text-ink">
                <strong className="font-semibold">Safety first:</strong> {s.safety}
              </p>
            </aside>
          )}
        </section>
      );

    case 'brands':
      return (
        <section aria-labelledby={id} className="reveal">
          <Heading id={id}>
            {block.heading ?? (
              <>
                {s.name} brands <span className="accent text-flame">we service</span>
              </>
            )}
          </Heading>
          <p className="mb-6 mt-4 text-ink-body">
            {block.intro ?? 'Don’t see yours? Call and ask. Have the model number ready if you can.'}
          </p>
          <BrandChips names={s.brands} />
          {block.styles ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {block.styles.map((st) => (
                <li key={st} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[14px] font-medium text-white">
                  <Icon name={s.icon} className="h-4 w-4 text-flame-glow" />
                  {st}
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mt-6 text-sm text-ink-muted">
            Appliance Repair Temple is an independent repair service and is not affiliated with any appliance manufacturer.
          </p>
        </section>
      );

    case 'prose':
      return (
        <section aria-labelledby={id} className="reveal">
          <Heading id={id}>{block.heading}</Heading>
          <div className="prose-copy mt-6">
            {block.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </section>
      );

    case 'payment':
      return (
        <div className="reveal">
          <PaymentNote />
        </div>
      );

    case 'cycleStages':
      return (
        <section aria-labelledby={id} className="reveal">
          <p className="eyebrow mb-4 text-flame">
            <span className="h-px w-6 bg-flame" aria-hidden="true" />
            Where it stops
          </p>
          <Heading id={id}>{block.heading}</Heading>
          {block.intro ? <p className="mt-4 text-ink-body">{block.intro}</p> : null}
          <ol className="mt-8 space-y-3">
            {block.rows.map((r, i) => (
              <li key={r.stage} className="card grid gap-3 p-5 md:grid-cols-[150px_1fr_1fr] md:items-center md:gap-6 md:p-6">
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[15px] font-bold text-white">{i + 1}</span>
                  <span className="font-display text-lg font-bold tracking-[-0.02em] text-ink">{r.stage}</span>
                </span>
                <span className="text-[15px] text-ink">{r.what}</span>
                <span className="text-[14.5px] text-ink-body">
                  <span className="mr-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-flame">Check</span>
                  {r.parts}
                </span>
              </li>
            ))}
          </ol>
        </section>
      );

    case 'compare':
      return (
        <section aria-labelledby={id} className="reveal">
          <Heading id={id}>{block.heading}</Heading>
          {block.intro ? <p className="mt-4 text-ink-body">{block.intro}</p> : null}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {block.columns.map((c, i) => (
              <div key={c.title} className={i === 0 ? 'card p-7' : 'grain rounded-card bg-ink p-7'}>
                <h3 className={`flex items-center gap-2 font-display text-xl font-bold tracking-[-0.02em] ${i === 0 ? 'text-ink' : 'text-white'}`}>
                  <Icon name={s.icon} className={`h-5 w-5 ${i === 0 ? 'text-flame' : 'text-flame-glow'}`} />
                  {c.title}
                </h3>
                <ul className={`prose-copy ${i === 0 ? '' : '[&_li]:text-white/75'}`}>
                  {c.items.map((t) => (
                    <li key={t.slice(0, 24)}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      );

    case 'resultsGrid':
      return (
        <section aria-labelledby={id} className="reveal">
          <p className="eyebrow mb-4 text-flame">
            <span className="h-px w-6 bg-flame" aria-hidden="true" />
            {block.eyebrow ?? 'Read the results'}
          </p>
          <Heading id={id}>{block.heading}</Heading>
          {block.intro ? <p className="mt-4 text-ink-body">{block.intro}</p> : null}
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {block.rows.map((r) => (
              <li key={r.see} className="card flex flex-col p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">You see</p>
                <h3 className="mt-1 font-display text-[19px] font-bold tracking-[-0.02em] text-ink">{r.see}</h3>
                <p className="mt-3 flex-1 text-[15px] text-ink-body">{r.means}</p>
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-canvas px-3.5 py-2.5 text-[14px] text-ink">
                  <Icon name="tool" className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                  {r.fix}
                </p>
              </li>
            ))}
          </ul>
        </section>
      );

    case 'factCallout':
      return (
        <aside className="reveal grid gap-6 rounded-xl2 border border-sand bg-white p-7 md:grid-cols-[auto_1fr] md:items-center md:p-9">
          <p className="font-display text-6xl font-extrabold tracking-[-0.04em] text-flame md:text-7xl">{block.stat}</p>
          <div>
            <p className="text-[16.5px] leading-relaxed text-ink">{block.text}</p>
            <p className="mt-3 text-[13px] text-ink-muted">
              Source:{' '}
              <a href={block.source.url} rel="noopener" className="underline underline-offset-2 hover:text-ink">
                {block.source.name}
              </a>
            </p>
          </div>
        </aside>
      );

    case 'faq':
      return (
        <section aria-labelledby={id} className="reveal">
          <h2 id={id} className={`${h2} mb-8`}>
            {s.name} repair <span className="accent text-flame">questions</span>
          </h2>
          <FaqList faqs={s.faqs} />
        </section>
      );
  }
}

export default async function ServicePage({ params }: Params) {
  const s = find((await params).slug);
  if (!s) notFound();
  const path = `/${s.slug}/`;
  const relatedBrands = brands.filter((b) => b.appliances.some((a) => a.key === s.key));
  const [lead, ...rest] = s.intro;
  const blocks = s.blocks ?? defaultBlocks;

  return (
    <>
      <ServicePageView service={s.key} />
      <JsonLd data={serviceSchema({ name: s.h1, description: s.metaDescription, path, serviceType: `${s.name} repair` })} />

      <PageHero
        crumbs={[
          { name: `Appliance Repair ${site.city}`, path: routes.cityPage },
          { name: s.navLabel, path },
        ]}
        title={s.h1}
      >
        {!s.offeredVerified ? <VerifyTag label="CONFIRM THIS SERVICE IS OFFERED BEFORE PUBLISHING" /> : null}
        <p className="mt-3 text-lg leading-relaxed text-white/75 md:text-xl">{lead}</p>
        <div className="mt-8">
          <CtaRow location={`service_${s.key}_hero`} dark />
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <TrustBadges dark />
        </div>
      </PageHero>

      <div className="mx-auto grid max-w-site gap-14 px-4 py-20 lg:grid-cols-[1fr_380px] lg:px-6">
        <div className="min-w-0 space-y-20">
          {rest.length ? (
            <div className="prose-copy max-w-3xl">
              {rest.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          ) : null}

          {blocks.map((b, i) => (
            <Block key={`${b.type}-${i}`} block={b} s={s} index={i} />
          ))}

          <ShareExperience variant="card" />

          <nav aria-labelledby="related-heading" className="rounded-xl2 border border-sand bg-white p-7 md:p-9">
            <h2 id="related-heading" className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
              Related repairs and areas
            </h2>
            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {s.related.map((k) => (
                <Link key={k} href={serviceHref(k)} className="link-arrow">
                  {serviceByKey[k].name.toLowerCase()} repair in {site.city}
                </Link>
              ))}
              <Link href={routes.cityPage} className="link-arrow">
                appliance repair in {site.city}
              </Link>
              {relatedBrands.map((b) => (
                <Link key={b.key} href={brandHref(b)} className="link-arrow">
                  {b.name} {s.name.toLowerCase()} repair
                </Link>
              ))}
              {areas.slice(0, 2).map((a) => (
                <Link key={a.slug} href={areaHref(a)} className="link-arrow">
                  appliance repair in {a.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <aside className="hidden lg:block" aria-label="Request service">
          <div className="sticky top-28">
            <QuickLeadForm formId={`service_${s.key}_sidebar`} title={`Request ${s.name.toLowerCase()} repair`} defaultAppliance={s.key} />
          </div>
        </aside>
      </div>

      <FinalCta
        title={`${s.name} acting up?`}
        accent="Let’s take a look."
        text="Speak with our team about your appliance issue, or send a quick request and we will call you back."
        appliance={s.key}
        formId={`service_${s.key}_final`}
      />
    </>
  );
}

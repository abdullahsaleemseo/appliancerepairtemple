import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes, site } from '@/config/site';
import { PhoneLink } from '@/components/PhoneLink';
import { posts, postHref } from '@/content/blog';
import { serviceByKey, serviceHref } from '@/content/services';
import { PageHero } from '@/components/PageHero';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { articleSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };
const find = (slug: string) => posts.find((p) => p.slug === slug);

export async function generateMetadata({ params }: Params) {
  const p = find((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: p.metaTitle ?? `${p.title} | ${site.shortName}`, description: p.metaDescription, path: postHref(p), type: 'article', image: p.image });
}

const fmt = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default async function PostPage({ params }: Params) {
  const p = find((await params).slug);
  if (!p) notFound();
  const path = postHref(p);
  const svc = p.service === 'general' ? null : serviceByKey[p.service];

  return (
    <>
      <JsonLd data={articleSchema({ title: p.title, description: p.metaDescription, path, published: p.published, updated: p.updated, image: p.image })} />
      <article>
        <PageHero
          crumbs={[
            { name: 'Repair Tips', path: routes.blog },
            { name: p.title, path },
          ]}
          title={p.title}
        >
          <p className="text-lg text-white/70">{p.excerpt}</p>
          <p className="mt-5 text-[14px] text-white/50">
            By {site.brandName} · Published <time dateTime={p.published}>{fmt(p.published)}</time>
            {p.updated !== p.published ? (
              <>
                {' '}
                · Updated <time dateTime={p.updated}>{fmt(p.updated)}</time>
              </>
            ) : null}
          </p>
        </PageHero>

        <div className="mx-auto grid max-w-site gap-12 px-4 py-16 lg:grid-cols-[260px_1fr] lg:px-6">
          <nav aria-labelledby="toc-heading" className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <h2 id="toc-heading" className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                In this article
              </h2>
              <ol className="mt-4 space-y-2.5 text-[15px]">
                {p.sections.map((s, i) => (
                  <li key={s.id} className="flex gap-2">
                    <span className="font-serif italic text-flame">{i + 1}</span>
                    <a href={`#${s.id}`} className="font-medium text-ink hover:underline">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="max-w-3xl">
            <aside className="flex gap-4 rounded-2xl border border-flame/20 bg-flame-soft p-5">
              <Icon name="shield" className="h-6 w-6 shrink-0 text-flame" />
              <p className="text-[15px] text-ink">
                <strong className="font-semibold">Safety:</strong> {p.safety}
              </p>
            </aside>

            {p.sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id} className="prose-copy mt-14">
                <h2 id={s.id} className="mb-5 font-display text-[30px] font-bold leading-tight tracking-[-0.03em] text-ink">
                  {s.heading}
                </h2>
                {s.paragraphs?.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
                {s.list ? (
                  <ul>
                    {s.list.map((t) => (
                      <li key={t.slice(0, 24)}>{t}</li>
                    ))}
                  </ul>
                ) : null}
                {s.after?.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
              </section>
            ))}

            <aside aria-labelledby="related-heading" className="grain relative mt-14 overflow-hidden rounded-card bg-ink p-8 md:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame/30 blur-[80px]" />
              <h2 id="related-heading" className="relative font-display text-3xl font-bold tracking-[-0.03em] text-white">
                Need a <span className="accent text-flame-glow">technician?</span>
              </h2>
              <p className="relative mt-3 text-white/65">
                {svc ? (
                  <>
                    Local pros offer{' '}
                    <Link href={serviceHref(svc.key)} className="font-semibold text-white underline decoration-flame underline-offset-4">
                      {svc.name.toLowerCase()} repair in {site.city}
                    </Link>{' '}
                    and the surrounding area.
                  </>
                ) : (
                  <>
                    Read about{' '}
                    <Link href={routes.cityPage} className="font-semibold text-white underline decoration-flame underline-offset-4">
                      appliance repair in {site.city}
                    </Link>
                    .
                  </>
                )}{' '}
                <PhoneLink location={`blog_${p.slug}_aside`} label="Call" className="font-semibold text-white underline decoration-flame underline-offset-4" /> to
                be connected with an independent local appliance repair pro. Verify the provider’s license and insurance before work starts.
              </p>
            </aside>

            {p.faqs.length ? (
              <section aria-labelledby="post-faq" className="mt-14">
                <h2 id="post-faq" className="mb-6 font-display text-[30px] font-bold tracking-[-0.03em] text-ink">
                  Questions
                </h2>
                <FaqList faqs={p.faqs} />
              </section>
            ) : null}

            {p.sources?.length ? (
              <section aria-labelledby="post-sources" className="mt-14">
                <h2 id="post-sources" className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Sources
                </h2>
                <ul className="mt-4 space-y-2 text-[15px]">
                  {p.sources.map((src) => (
                    <li key={src.url}>
                      <a href={src.url} className="text-ink underline decoration-flame/50 underline-offset-4 hover:decoration-flame" rel="noopener">
                        {src.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <p className="mt-10 text-sm text-ink-muted">
              This article is general guidance. Appliances differ by model; check your owner’s manual and stop if anything feels unsafe.
            </p>
          </div>
        </div>
      </article>
      <FinalCta formId={`blog_${p.slug}_final`} appliance={svc?.name.toLowerCase()} />
    </>
  );
}

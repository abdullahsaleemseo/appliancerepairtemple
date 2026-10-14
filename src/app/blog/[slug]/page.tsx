import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes, site } from '@/config/site';
import { posts, postHref } from '@/content/blog';
import { serviceByKey, serviceHref } from '@/content/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
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
  return pageMetadata({ title: `${p.title} | ${site.shortName}`, description: p.metaDescription, path: postHref(p), type: 'article' });
}

const fmt = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default async function PostPage({ params }: Params) {
  const p = find((await params).slug);
  if (!p) notFound();
  const path = postHref(p);
  const svc = p.service === 'general' ? null : serviceByKey[p.service];

  return (
    <>
      <JsonLd data={articleSchema({ title: p.title, description: p.metaDescription, path, published: p.published, updated: p.updated })} />
      <article>
        <header className="bg-surface">
          <div className="mx-auto max-w-3xl px-4 pb-10 pt-6">
            <Breadcrumbs
              items={[
                { name: 'Repair Tips', path: routes.blog },
                { name: p.title, path },
              ]}
            />
            <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">{p.title}</h1>
            <p className="mt-4 text-lg text-ink-body">{p.excerpt}</p>
            <p className="mt-4 text-sm text-ink-muted">
              By {site.brandName} · Published <time dateTime={p.published}>{fmt(p.published)}</time>
              {p.updated !== p.published ? (
                <>
                  {' '}
                  · Updated <time dateTime={p.updated}>{fmt(p.updated)}</time>
                </>
              ) : null}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12">
          <nav aria-labelledby="toc-heading" className="rounded-card bg-white p-6 shadow-card ring-1 ring-slate-100">
            <h2 id="toc-heading" className="font-heading text-lg font-extrabold text-navy">
              In this article
            </h2>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[15px]">
              {p.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="font-semibold text-navy hover:underline">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <aside className="mt-8 flex gap-3 rounded-card border-l-4 border-brand bg-brand-light/60 p-5">
            <Icon name="shield" className="h-6 w-6 shrink-0 text-brand-dark" />
            <p className="text-[15px] text-ink">
              <strong className="font-bold">Safety:</strong> {p.safety}
            </p>
          </aside>

          {p.sections.map((s) => (
            <section key={s.id} aria-labelledby={s.id} className="prose-copy mt-10">
              <h2 id={s.id} className="mb-4 font-heading text-2xl font-extrabold tracking-tight text-navy">
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

          <aside aria-labelledby="related-heading" className="mt-12 rounded-card bg-navy p-6 text-white md:p-8">
            <h2 id="related-heading" className="font-heading text-xl font-extrabold text-white">
              Need a technician?
            </h2>
            <p className="mt-2 text-white/80">
              {svc ? (
                <>
                  We handle{' '}
                  <Link href={serviceHref(svc.key)} className="font-semibold text-white underline">
                    {svc.name.toLowerCase()} repair in {site.city}
                  </Link>{' '}
                  and the surrounding area.
                </>
              ) : (
                <>
                  See our{' '}
                  <Link href={routes.cityPage} className="font-semibold text-white underline">
                    appliance repair service in {site.city}
                  </Link>
                  .
                </>
              )}{' '}
              <Link href={routes.request} className="font-semibold text-white underline">
                Request service online
              </Link>{' '}
              or call.
            </p>
          </aside>

          {p.faqs.length ? (
            <section aria-labelledby="post-faq" className="mt-12">
              <h2 id="post-faq" className="mb-6 font-heading text-2xl font-extrabold text-navy">
                Questions
              </h2>
              <FaqList faqs={p.faqs} />
            </section>
          ) : null}

          <p className="mt-10 text-sm text-ink-muted">
            This article is general guidance. Appliances differ by model; check your owner’s manual and stop if anything feels unsafe.
          </p>
        </div>
      </article>
      <FinalCta formId={`blog_${p.slug}_final`} appliance={svc?.key} />
    </>
  );
}

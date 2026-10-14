import Link from 'next/link';
import { routes, site } from '@/config/site';
import { posts, postHref } from '@/content/blog';
import { serviceByKey } from '@/content/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Icon } from '@/components/Icon';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair Tips | ${site.brandName}`,
  description: `Practical, safe troubleshooting for refrigerators, washers, dryers and dishwashers, from appliance technicians in ${site.city}, ${site.stateAbbr}.`,
  path: routes.blog,
});

const fmt = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default function BlogIndex() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-site px-4 pb-16 pt-6 lg:px-6">
        <Breadcrumbs items={[{ name: 'Repair Tips', path: routes.blog }]} />
        <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">Appliance Repair Tips</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-body">
          Safe checks you can do yourself, and how to tell when it’s time to call a technician.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => {
            const icon = p.service === 'general' ? 'wrench' : serviceByKey[p.service].icon;
            return (
              <li key={p.slug}>
                <Link
                  href={postHref(p)}
                  className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex h-36 items-center justify-center bg-gradient-to-br from-navy to-navy-600 text-white/90" aria-hidden="true">
                    <Icon name={icon} className="h-14 w-14" strokeWidth={1.4} />
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <time dateTime={p.published} className="text-sm text-ink-muted">
                      {fmt(p.published)}
                    </time>
                    <span className="mt-2 font-heading text-xl font-extrabold text-navy group-hover:underline">{p.title}</span>
                    <span className="mt-2 flex-1 text-[15px] text-ink-body">{p.excerpt}</span>
                    <span className="mt-4 inline-flex items-center gap-1 font-bold text-brand-dark">
                      Read <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

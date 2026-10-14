import Link from 'next/link';
import { routes, site } from '@/config/site';
import { posts, postHref } from '@/content/blog';
import { serviceByKey } from '@/content/services';
import { PageHero } from '@/components/PageHero';
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
    <>
      <PageHero crumbs={[{ name: 'Repair Tips', path: routes.blog }]} title="Appliance Repair" accent="Tips">
        <p className="text-lg text-white/70">Safe checks you can do yourself, and how to tell when it’s time to call a technician.</p>
      </PageHero>
      <div className="mx-auto max-w-site px-4 py-20 lg:px-6">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => {
            const icon = p.service === 'general' ? 'wrench' : serviceByKey[p.service].icon;
            return (
              <li key={p.slug}>
                <Link href={postHref(p)} className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className={`grain relative flex h-44 items-center justify-center overflow-hidden ${i % 2 ? 'bg-ink-700' : 'bg-ink'}`} aria-hidden="true">
                    <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-flame/30 blur-[60px] transition duration-500 group-hover:bg-flame/50" />
                    <Icon name={icon} className="relative h-16 w-16 text-white/85" strokeWidth={1.3} />
                  </span>
                  <span className="flex flex-1 flex-col p-7">
                    <time dateTime={p.published} className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                      {fmt(p.published)}
                    </time>
                    <span className="mt-3 font-display text-[22px] font-bold leading-tight tracking-[-0.025em] text-ink">{p.title}</span>
                    <span className="mt-3 flex-1 text-[15px] text-ink-body">{p.excerpt}</span>
                    <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-ink">
                      Read the guide <Icon name="arrow" className="h-4 w-4 text-flame transition group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

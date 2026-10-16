import Image from 'next/image';
import Link from 'next/link';
import { routes, site } from '@/config/site';
import { PhoneLink } from '@/components/PhoneLink';
import { posts, postHref } from '@/content/blog';
import { serviceByKey } from '@/content/services';
import { FinalCta } from '@/components/FinalCta';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair Tips for ${site.city}, ${site.stateAbbr} Homes | Safe Checks`,
  description: `Safe troubleshooting guides for refrigerators, washers, dryers and dishwashers, plus repair or replace advice, from an appliance repair team in ${site.city}, ${site.stateAbbr}.`,
  path: routes.blog,
});

const fmt = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default function BlogIndex() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Repair Tips', path: routes.blog }]} title="Appliance Repair Tips" accent={`for ${site.city} homes.`}>
        <div className="prose-copy prose-dark">
          <p>
            Plain-language guides for the problems we see most in {site.city} homes: a warm refrigerator, a washer full of water, a
            dryer running cold, a dishwasher that will not drain. Each one starts with the safe checks you can do yourself and
            ends with how to tell when it is time to call a technician.
          </p>
        </div>
      </PageHero>
      <div className="mx-auto max-w-site px-4 pt-16 lg:px-6">
        <div className="grid gap-6 rounded-card border border-sand bg-white p-7 md:grid-cols-[1fr_2fr] md:p-9">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">How to use these guides</h2>
          <ul className="space-y-2 text-[15px] text-ink-body">
            <li>Start with safety. Unplug the appliance, or turn off the breaker, before you look inside or move it.</li>
            <li>Work through the checks in order. Many problems turn out to be a filter, a hose, a setting or a vent.</li>
            <li>Stop when a check needs panels removed, a meter, gas or refrigerant. That is technician work.</li>
            <li>
              Still stuck? See our{' '}
              <Link href={routes.cityPage} className="font-semibold text-ink underline decoration-flame/50 underline-offset-4 hover:decoration-flame">
                appliance repair service in {site.city}
              </Link>{' '}
              or{' '}
              <PhoneLink location="blog_index_tips" label="call" className="font-semibold text-ink underline decoration-flame/50 underline-offset-4 hover:decoration-flame" />
              .
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-site px-4 pb-20 pt-10 lg:px-6">
        <h2 className="sr-only">All guides</h2>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => {
            const icon = p.service === 'general' ? 'wrench' : serviceByKey[p.service].icon;
            return (
              <li key={p.slug}>
                <Link href={postHref(p)} className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  {p.image ? (
                    <span className="relative block aspect-[16/9] overflow-hidden bg-ink">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        priority={i < 3}
                      />
                    </span>
                  ) : (
                    <span className={`grain relative flex aspect-[16/9] items-center justify-center overflow-hidden ${i % 2 ? 'bg-ink-700' : 'bg-ink'}`} aria-hidden="true">
                      <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-flame/30 blur-[60px] transition duration-500 group-hover:bg-flame/50" />
                      <Icon name={icon} className="relative h-16 w-16 text-white/85" strokeWidth={1.3} />
                    </span>
                  )}
                  <span className="flex flex-1 flex-col p-7">
                    <time dateTime={p.updated} className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                      Updated {fmt(p.updated)}
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
      <FinalCta formId="blog_index_final" />
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/config/site';
import { PhoneLink } from '@/components/PhoneLink';
import { posts, postHref } from '@/content/blog';
import { serviceByKey } from '@/content/services';
import { FinalCta } from '@/components/FinalCta';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { pageMetadata } from '@/lib/seo';

/** Blog hub (source: content/blog-hub-v2.md, Nov 2026). Posts grouped by appliance, one specific line per post. */
export const metadata = pageMetadata({
  title: 'Appliance Repair Tips for Temple, TX Homes | Guides',
  description:
    "Safe checks and plain answers for a warm fridge, a washer full of water, a cold dryer or a dishwasher that won't drain, from Temple, TX. (254) 615-2088.",
  path: routes.blog,
});

/** The hub line for each post (replaces the excerpt on this page only). */
const hubLine: Record<string, string> = {
  'refrigerator-leaking-water': "Paper towels and a few hours tell you whether it's the defrost drain, the water line or the door.",
  'refrigerator-not-cooling': 'A cold freezer over a warm fridge side points somewhere very different from both sections warming.',
  'ice-maker-not-working': 'Start with the freezer temperature and the water filter, then work toward the inlet valve that hard water slowly clogs.',
  'washer-not-spinning': "A drum full of water, an off-balance load or a lid that won't lock stops the spin long before a belt or motor does.",
  'washer-not-draining': 'The hose, the pump filter and the standpipe come first, in that order, before anyone opens a panel.',
  'dryer-not-heating': 'Rule out the breaker, the gas supply and the vent, then the heat parts that can be tested one by one.',
  'how-often-clean-dryer-vent': 'What a clogged vent costs, and which part of the run you can clear yourself.',
  'stove-burner-not-working': 'A chart by stove type and symptom, from a crooked burner cap to a weak igniter.',
  'microwave-not-heating': 'A one-cup water test sorts demo mode and settings from a fault behind the cover, where only a technician should work.',
  'dishwasher-drainage-problems': 'Filter, disposal, drain hose loop and air gap, checked in order, with the codes that point to the pump.',
  'repair-or-replace-appliance': 'The 50 percent rule, typical lifespans and when the rule bends.',
};

const groups: { id: string; title: string; slugs: string[] }[] = [
  { id: 'cold', title: 'Refrigerator and ice', slugs: ['refrigerator-leaking-water', 'refrigerator-not-cooling', 'ice-maker-not-working'] },
  { id: 'laundry', title: 'Laundry', slugs: ['washer-not-spinning', 'washer-not-draining', 'dryer-not-heating', 'how-often-clean-dryer-vent'] },
  { id: 'kitchen', title: 'Kitchen', slugs: ['stove-burner-not-working', 'microwave-not-heating', 'dishwasher-drainage-problems'] },
  { id: 'decisions', title: 'Decisions', slugs: ['repair-or-replace-appliance'] },
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

export default function BlogIndex() {
  let n = 0;
  return (
    <>
      <PageHero crumbs={[{ name: 'Repair Tips', path: routes.blog }]} title="Appliance Repair Tips" accent="for Temple Homes">
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          These guides cover the problems Temple homes run into most, starting with the checks you can safely do yourself. When a guide says a part
          needs testing, that&apos;s the point to call us at <PhoneLink location="blog_index_intro" className={white} />.
        </p>
      </PageHero>

      <div className="mx-auto max-w-site space-y-16 px-4 pb-20 pt-16 lg:px-6">
        {groups.map((g) => (
          <section key={g.id} aria-labelledby={`${g.id}-heading`}>
            <h2 id={`${g.id}-heading`} className="h-display mb-6 text-3xl text-ink sm:text-4xl">
              {g.title}
            </h2>
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {g.slugs.map((slug) => {
                const p = posts.find((x) => x.slug === slug);
                if (!p) return null;
                const i = n++;
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
                        <span className="font-display text-[21px] font-bold leading-tight tracking-[-0.025em] text-ink">{p.title}</span>
                        <span className="mt-3 flex-1 text-[15px] text-ink-body">{hubLine[p.slug] ?? p.excerpt}</span>
                        <Icon name="arrow" className="mt-5 h-5 w-5 text-flame transition group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <FinalCta
        formId="blog_index_final"
        title="Checks done,"
        accent="still broken?"
        text="Call us and say which guide you followed and what you found. A technician can pick up where the checks left off."
      />
    </>
  );
}

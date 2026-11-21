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
import type { ToolKey } from '@/config/tools';
import { toolPageList } from '@/content/tools/pages';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };
const find = (slug: string) => posts.find((p) => p.slug === slug);

export async function generateMetadata({ params }: Params) {
  const p = find((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: p.metaTitle ?? `${p.title} | ${site.shortName}`, description: p.metaDescription, path: postHref(p), type: 'article', image: p.image, published: p.published, modified: p.updated });
}

/** Which free tools fit each post. Posts not listed get the symptom checker and the error code decoder. */
const postTools: Record<string, ToolKey[]> = {
  'repair-or-replace-appliance': ['cost', 'symptoms'],
  'how-often-clean-dryer-vent': ['maintenance', 'symptoms'],
  'ice-maker-not-working': ['errorCodes', 'symptoms'],
  'stove-burner-not-working': ['symptoms', 'cost'],
  'microwave-not-heating': ['cost', 'symptoms'],
  'washer-not-spinning': ['errorCodes', 'cost'],
  'refrigerator-leaking-water': ['symptoms', 'cost'],
};

type PostCta = {
  title: string;
  accent: string;
  text: string;
  call: string;
  note: string;
  finalTitle: string;
  finalAccent: string;
  finalText: string;
};

/** Closing copy for each guide, so every post ends with its own call to action. */
const postCta: Record<string, PostCta> = {
  'refrigerator-not-cooling': {
    title: 'Still warm after',
    accent: '24 hours?',
    text: 'A fridge that stays above 40°F once the coils are clean and the vents are clear usually has a fan, defrost or relay fault that needs a meter. Describe the pattern you noticed and ask for a diagnosis before any part is ordered.',
    call: 'Call',
    note: 'Refrigerator designs differ by brand and model. Check your owner’s manual before cleaning coils or removing a panel, and stop if anything feels unsafe.',
    finalTitle: 'Fridge still warm?',
    finalAccent: 'Save the food first.',
    finalText: 'Keep the doors shut and call Appliance Repair Temple’s line. One call puts you in touch with a technician who works on refrigerators and freezers in Temple.',
  },
  'washer-not-draining': {
    title: 'Drum still',
    accent: 'full of water?',
    text: 'If the hose, the pump filter and the house drain are clear and the washer still hums or sits silent at the drain step, the pump, lid lock or control needs testing. Stop running cycles and',
    call: 'call',
    note: 'Washer drain layouts vary between top-load and front-load models. Follow your installation manual for hose height and filter access, and unplug the washer first.',
    finalTitle: 'Washer won’t drain?',
    finalAccent: 'Leave it unplugged.',
    finalText: 'Say whether it is a top-loader or front-loader and what it does at the drain step. A repair tech can take it from there.',
  },
  'dryer-not-heating': {
    title: 'Breaker, gas and vent',
    accent: 'all fine?',
    text: 'Then a heating part has likely failed: an element, a thermal fuse, an igniter or the gas valve coils. Each one can be tested before it is replaced, so ask for that.',
    call: 'Call',
    note: 'Gas and electric dryers are built differently. Unplug the dryer before opening any panel, close the gas valve before moving a gas model, and stop if you smell gas or burning.',
    finalTitle: 'Dryer blowing cold?',
    finalAccent: 'Clear the vent, then call.',
    finalText: 'Tell the technician whether it is gas or electric and what you already ruled out. It shortens the search for the failed part.',
  },
  'repair-or-replace-appliance': {
    title: 'Not sure it is',
    accent: 'worth fixing?',
    text: 'The decision gets easier once you know exactly which part failed. A technician can diagnose the fridge, washer, dryer, dishwasher or range and tell you plainly whether the repair makes sense for its age.',
    call: 'Call',
    note: 'Lifespans and repair costs vary with brand, model, use and installation. Treat the numbers here as a starting point, and check the manufacturer’s warranty before paying for a repair.',
    finalTitle: 'Fix it or replace it?',
    finalAccent: 'Start with a diagnosis.',
    finalText: 'Appliance Repair Temple is Temple’s line for appliance repair. Call and ask a technician what failed before you shop for a new one.',
  },
  'how-often-clean-dryer-vent': {
    title: 'Vent clear, dryer',
    accent: 'still hot?',
    text: 'If clothes still take two cycles or the cabinet runs hot after the vent is cleaned, the problem is inside the dryer: a thermostat, a fuse, a belt or lint packed near the heater.',
    call: 'Call',
    note: 'Vent runs differ from house to house. Unplug the dryer before moving it, and leave roof and attic vent runs to a vent cleaning service.',
    finalTitle: 'Vent clean,',
    finalAccent: 'still slow to dry?',
    finalText: 'Call and describe how long a load takes and how hot the dryer gets. A technician can check the parts inside the cabinet.',
  },
  'dishwasher-drainage-problems': {
    title: 'Filter clean, water',
    accent: 'still standing?',
    text: 'Once the filter, disposal, high loop and air gap are clear, a humming or silent drain step points to the drain pump. That job means panels off near wiring and water, so',
    call: 'call',
    note: 'Dishwasher filters, sumps and drain codes differ by brand. Check your manual for your model, turn the power off at the breaker first, and watch for broken glass.',
    finalTitle: 'Dishwasher holding water?',
    finalAccent: 'Towels down, then call.',
    finalText: 'Mention the brand, any drain code such as E24, and whether it hums at the end of the cycle. A technician who works on dishwashers can test the pump.',
  },
  'ice-maker-not-working': {
    title: 'Freezer at 0°F, still',
    accent: 'no ice?',
    text: 'With the filter new, the water on and a full day gone by, the inlet valve, the ice maker module or its fan is the likely fault. Each can be tested before anything is replaced, so',
    call: 'call',
    note: 'Ice maker designs differ between freezer-mounted and door-mounted models. Check your owner’s manual for the reset and test steps, and unplug the refrigerator before reaching near the ice maker.',
    finalTitle: 'Ice maker quit?',
    finalAccent: 'Call with the model number.',
    finalText: 'Say whether the water dispenser still works and whether the cubes are small, missing or stuck. That points a technician straight at the right part.',
  },
  'stove-burner-not-working': {
    title: 'Cap seated, burner dry,',
    accent: 'still no flame?',
    text: 'Then the igniter, spark module, valve or switch needs testing, and those sit near gas or live wiring. Have the chart row that matches your stove ready and',
    call: 'call',
    note: 'Gas, propane and electric ranges are built differently. Check your owner’s manual before removing burner parts, and stop if you smell gas or see sparking.',
    finalTitle: 'Burner still dead?',
    finalAccent: 'One call, the right part.',
    finalText: 'Say whether the stove is gas, propane or electric and which row of the chart matches. A technician can test the part before replacing anything.',
  },
  'microwave-not-heating': {
    title: 'Water test',
    accent: 'came back cold?',
    text: 'With demo mode, power level and the lock ruled out, the fault is behind the cover, where only a technician should work. Say what the water test showed and',
    call: 'call',
    note: 'Microwave controls differ by brand. Check your owner’s manual for demo mode and the control lock, and never remove the outer cover.',
    finalTitle: 'Microwave still cold?',
    finalAccent: 'Leave the cover on.',
    finalText: 'Mention whether it is countertop, over-the-range or built-in and what the water test showed. A technician can tell you if the repair is worth it.',
  },
  'washer-not-spinning': {
    title: 'Load balanced, drum empty,',
    accent: 'still no spin?',
    text: 'Then a belt, coupler, lock or motor part needs testing behind the panels. Have the brand, any code and the matching row of the table ready and',
    call: 'call',
    note: 'Top-load and front-load washers are built differently. Check your owner’s manual for the pump filter and leveling feet, unplug the washer first, and never bypass a lid switch or door lock.',
    finalTitle: 'Washer stuck before spin?',
    finalAccent: 'Call with the code.',
    finalText: 'Say whether it is top-load or front-load, any code on the display and whether water is left in the drum. A technician can go straight to the right part.',
  },
  'refrigerator-leaking-water': {
    title: 'Drain clear, still',
    accent: 'a puddle?',
    text: 'A drain that refreezes, a leaking inlet valve or a cracked drain pan needs a technician, and water damage only gets worse. Tell them where the water shows up and',
    call: 'call',
    note: 'Defrost drain locations differ by model. Check your owner’s manual before removing panels, unplug the refrigerator first, and switch off the breaker if water is near the outlet.',
    finalTitle: 'Fridge still leaking?',
    finalAccent: 'Towels down, then call.',
    finalText: 'Say where the water shows up and whether the refrigerator is still cooling. A technician can go straight to the drain, the pan or the water valve.',
  },
};

const fallbackCta: PostCta = {
  title: 'Need a',
  accent: 'technician?',
  text: 'Describe the appliance and what it is doing.',
  call: 'Call',
  note: 'This guide is general advice. Appliances differ by model; check your owner’s manual and stop if anything feels unsafe.',
  finalTitle: 'Broken appliance?',
  finalAccent: 'Make one call.',
  finalText: 'Appliance Repair Temple is Temple’s line for appliance repair.',
};

const fmt = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default async function PostPage({ params }: Params) {
  const p = find((await params).slug);
  if (!p) notFound();
  const path = postHref(p);
  const svc = p.service === 'general' ? null : serviceByKey[p.service];
  const cta = postCta[p.slug] ?? fallbackCta;
  // Related posts: same appliance first, then the newest others.
  const related = [...posts.filter((o) => o.slug !== p.slug)]
    .sort((x, y) => Number(y.service === p.service) - Number(x.service === p.service) || y.published.localeCompare(x.published))
    .slice(0, 2);
  const tools = toolPageList.filter((t) => (postTools[p.slug] ?? ['symptoms', 'errorCodes']).includes(t.key));

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

          <div className="min-w-0 max-w-3xl">
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
                {s.answer ? (
                  <div className="not-prose mb-6 rounded-2xl border-l-4 border-flame bg-white p-5 shadow-card">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-flame">Short answer</p>
                    <p className="mt-1.5 text-[17px] font-medium leading-relaxed text-ink">{s.answer}</p>
                  </div>
                ) : null}
                {s.alert ? (
                  <div role="note" className="not-prose mb-6 flex gap-3 rounded-2xl border border-[#F4C7C3] bg-[#FDF1F0] p-5 text-[#7A1A12]">
                    <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} />
                    <p className="text-[15.5px] leading-relaxed">
                      <strong className="font-semibold">{s.alert.title}</strong> {s.alert.text}
                    </p>
                  </div>
                ) : null}
                {s.paragraphs?.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
                {s.table ? (
                  <div className="mt-6 overflow-x-auto rounded-2xl border border-sand bg-white">
                    <table className="w-full min-w-[560px] text-left text-[15px]">
                      <caption className="sr-only">{s.table.caption}</caption>
                      <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                        <tr>
                          {s.table.head.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-sand/70">
                        {s.table.rows.map((r) => (
                          <tr key={r[0]} className="align-top">
                            {r.map((c, ci) =>
                              ci === 0 ? (
                                <th key={ci} scope="row" className="px-4 py-3 font-semibold text-ink">
                                  {c}
                                </th>
                              ) : (
                                <td key={ci} className="px-4 py-3 text-ink-body">
                                  {c}
                                </td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
                {s.steps ? (
                  <ol className="not-prose mt-6 grid gap-3">
                    {s.steps.map((st, i) => (
                      <li key={st.title} className="flex gap-4 rounded-2xl border border-sand bg-white p-5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[15px] font-bold text-white">{i + 1}</span>
                        <span>
                          <span className="block font-display text-[18px] font-semibold text-ink">{st.title}</span>
                          <span className="mt-1 block text-[15.5px] leading-relaxed text-ink-body">{st.text}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : null}
                {s.compare ? (
                  <div className="not-prose mt-6 grid gap-3">
                    {s.compare.map((c) => (
                      <div key={c.myth} className="grid overflow-hidden rounded-2xl border border-sand bg-white sm:grid-cols-2">
                        <p className="border-b border-sand p-5 text-[15px] text-ink-body sm:border-b-0 sm:border-r">
                          <span className="mb-1 block text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Myth</span>
                          {c.myth}
                        </p>
                        <p className="bg-mint-soft/60 p-5 text-[15px] text-ink">
                          <span className="mb-1 block text-[12px] font-semibold uppercase tracking-[0.14em] text-mint">Fact</span>
                          {c.fact}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
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
                {cta.title} <span className="accent text-flame-glow">{cta.accent}</span>
              </h2>
              <p className="relative mt-3 text-white/65">
                {cta.text}{' '}
                <PhoneLink location={`blog_${p.slug}_aside`} label={cta.call} className="font-semibold text-white underline decoration-flame underline-offset-4" />
                .
              </p>
              <p className="relative mt-3 text-white/65">
                {svc ? (
                  <>
                    More on{' '}
                    <Link href={serviceHref(svc.key)} className="font-semibold text-white underline decoration-flame underline-offset-4">
                      {svc.name.toLowerCase()} repair in {site.city}
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    More on{' '}
                    <Link href={routes.cityPage} className="font-semibold text-white underline decoration-flame underline-offset-4">
                      appliance repair in {site.city}
                    </Link>
                    .
                  </>
                )}
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
              {cta.note}
            </p>

            <nav aria-labelledby="keep-reading" className="mt-14 border-t border-sand pt-10">
              <h2 id="keep-reading" className="font-display text-[26px] font-bold tracking-[-0.03em] text-ink">
                Keep reading
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ...related.map((r) => ({ href: postHref(r), title: r.title, kind: 'Repair tip' })),
                  ...tools.map((t) => ({ href: t.path, title: t.card.title, kind: 'Free tool' })),
                  ...(svc ? [{ href: serviceHref(svc.key), title: `${svc.name} repair in ${site.city}`, kind: 'Repair guide' }] : []),
                  { href: routes.cityPage, title: `Appliance repair in ${site.city}, ${site.stateAbbr}`, kind: 'Overview' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="card group flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:shadow-lift">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-flame">{l.kind}</span>
                      <span className="mt-1 font-display text-[17px] font-semibold leading-snug text-ink">{l.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </article>
      <FinalCta formId={`blog_${p.slug}_final`} appliance={svc?.name.toLowerCase()} title={cta.finalTitle} accent={cta.finalAccent} text={cta.finalText} />
    </>
  );
}

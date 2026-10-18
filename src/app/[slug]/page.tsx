import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { brands, brandHref } from '@/content/brands';
import { serviceByKey, serviceHref, services } from '@/content/services';
import type { ApplianceKey, Service, ServiceBlock } from '@/content/types';
import { BrandChips } from '@/components/BrandChips';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { ServicePageView } from '@/components/SiteClient';
import { TrustBadges } from '@/components/TrustBadges';
import { VerifyTag } from '@/components/Verify';
import { CallCard } from '@/components/CallCard';
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
  { title: 'Call', text: 'Call the number on this page, name the appliance and the brand, and describe what it is doing.' },
  { title: 'Diagnose', text: 'A technician will usually test the parts most likely to have failed and find the fault.' },
  { title: 'Ask first', text: 'A good technician explains what failed and what the repair involves before starting.' },
  { title: 'Repair and test', text: 'After a part is replaced, ask the technician to run the appliance so you can see the fix work.' },
];

/** Appliance-specific copy for the shared parts of the template, so no two service pages repeat the same line. */
type PageCopy = {
  noun: string;
  sidebarTitle: string;
  inlineTitle: string;
  emergencyNote: string;
  beforeHeading: string;
  askQuestion: string;
  finalTitle: string;
  finalAccent: string;
  finalText: string;
};

const pageCopy: Record<ApplianceKey, PageCopy> = {
  refrigerator: {
    noun: 'refrigerator',
    sidebarTitle: 'Refrigerator warm or leaking?',
    inlineTitle: 'Call about your refrigerator',
    emergencyNote: 'Emergency help for a warm or leaking refrigerator may be available from local providers; say it is urgent when you call.',
    beforeHeading: 'Protect the food while you wait',
    askQuestion: 'While the fridge is pulled out, can you check the condenser coils and the door gaskets too?',
    finalTitle: 'Fridge still warm?',
    finalAccent: 'Call before the food turns.',
    finalText: 'Have the brand, the model number and the fresh-food temperature handy. Settle the price and any warranty before the panels come off.',
  },
  freezer: {
    noun: 'freezer',
    sidebarTitle: 'Freezer thawing or frosting up?',
    inlineTitle: 'Call about your freezer',
    emergencyNote: 'Emergency help for a thawing chest or upright freezer may be available from local providers; tell them how fast the thermometer is climbing.',
    beforeHeading: 'Keep the cold in until it is checked',
    askQuestion: 'Is my garage within the room temperature range this freezer is rated for?',
    finalTitle: 'Freezer climbing past 0°F?',
    finalAccent: 'Keep the lid shut and call.',
    finalText: 'Say whether it is a chest or an upright and what the thermometer reads. Ask about pricing and warranty coverage before any part is ordered.',
  },
  washer: {
    noun: 'washer',
    sidebarTitle: 'Washer leaking or full of water?',
    inlineTitle: 'Call about your washer',
    emergencyNote: 'Emergency help for a leaking or flooded washer may be available from local providers; close both water valves before you call.',
    beforeHeading: 'Limit the water damage first',
    askQuestion: 'Should the fill hoses be replaced while the washer is pulled away from the wall?',
    finalTitle: 'Washer stuck mid-cycle?',
    finalAccent: 'Call and say where it stopped.',
    finalText: 'Mention top-load or front-load, the brand and any code on the display. Get the price and any warranty terms before the machine is moved.',
  },
  dryer: {
    noun: 'dryer',
    sidebarTitle: 'Dryer cold, slow or squealing?',
    inlineTitle: 'Call about your dryer',
    emergencyNote: 'Emergency help for a dryer that smells like burning may be available from local providers; leave it off and say it is urgent.',
    beforeHeading: 'Make the dryer safe first',
    askQuestion: 'Did a restricted vent cause this failure, and what should be done about the vent run?',
    finalTitle: 'Clothes still damp after an hour?',
    finalAccent: 'Call about the dryer.',
    finalText: 'Say whether it is gas or electric and what you felt at the vent hood outside. Ask what the repair will cost, and about any warranty, before work starts.',
  },
  dishwasher: {
    noun: 'dishwasher',
    sidebarTitle: 'Dishwasher not draining or leaking?',
    inlineTitle: 'Call about your dishwasher',
    emergencyNote: 'Emergency help for a dishwasher leaking under the cabinets may be available from local providers; mention any water near the wiring.',
    beforeHeading: 'Shut off power and water first',
    askQuestion: 'Is the drain hose high loop or air gap set up the way the installation manual asks?',
    finalTitle: 'Water sitting in the tub?',
    finalAccent: 'Call about the dishwasher.',
    finalText: 'Have the model number from the door edge and a note on what the last load looked like. Agree on the price and any warranty before the dishwasher comes out.',
  },
  oven: {
    noun: 'oven or stove',
    sidebarTitle: 'Oven not heating or burner out?',
    inlineTitle: 'Call about your oven or stove',
    emergencyNote: 'Emergency help for an oven that will not shut off or a burner stuck on high may be available from local providers; say so as soon as the call connects.',
    beforeHeading: 'Shut it down safely',
    askQuestion: 'Is the anti-tip bracket engaged, and can it be checked before the range goes back in place?',
    finalTitle: 'Oven cold at dinner time?',
    finalAccent: 'Call about the range.',
    finalText: 'Say gas or electric, and whether the problem is in the oven or on the cooktop. Ask about cost and any warranty on the part before the range is moved.',
  },
  microwave: {
    noun: 'microwave',
    sidebarTitle: 'Microwave not heating or sparking?',
    inlineTitle: 'Call about your microwave',
    emergencyNote: 'Emergency help for a microwave that sparks or smokes may be available from local providers; keep the door closed and the power off.',
    beforeHeading: 'Make it safe, then call',
    askQuestion: 'Is this part still made for my model, and does repair make more sense than a new over-the-range unit?',
    finalTitle: 'Microwave humming but cold?',
    finalAccent: 'Call before you open anything.',
    finalText: 'Say whether it is over-the-range, built-in or countertop, and the brand. Ask about the price and any warranty before the unit comes off the wall.',
  },
};

/** Layout for services that have not been given their own block order yet. */
const defaultBlocks: ServiceBlock[] = [
  { type: 'symptoms' },
  { type: 'callCard' },
  { type: 'diagnostic' },
  { type: 'process', heading: 'How a repair call works', steps: defaultProcess },
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
  const copy = pageCopy[s.key];
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
          <p className="mt-4 text-ink-body">Tap the one that sounds like your {copy.noun} to see the usual cause.</p>
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

    case 'callCard':
      return (
        <div className="lg:hidden">
          <CallCard location={`service_${s.key}_inline`} title={copy.inlineTitle} appliance={copy.noun} />
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
              <h3 className="relative font-display text-lg font-bold tracking-[-0.02em] text-white">{copy.beforeHeading}</h3>
              <ol className="relative mt-4 space-y-2.5">
                {block.steps.map((t, i) => (
                  <li key={t.slice(0, 24)} className="flex gap-3 text-[14.5px] text-white/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame text-[12px] font-semibold text-white">{i + 1}</span>
                    {t}
                  </li>
                ))}
              </ol>
              <p className="relative mt-5 text-[13.5px] text-white/55">
                {copy.emergencyNote}
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
                {s.name} brands <span className="accent text-flame">technicians work on</span>
              </>
            )}
          </Heading>
          <p className="mb-6 mt-4 text-ink-body">
            {block.intro ?? `Don’t see your ${copy.noun} brand? Call and ask. Have the model number ready if you can.`}
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
            Appliance Repair Temple is not affiliated with {s.brands.slice(0, 2).join(', ')} or any other {copy.noun} manufacturer. Brand names are listed to describe the appliances technicians work on.
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
  const copy = pageCopy[s.key];

  return (
    <>
      <ServicePageView service={s.key} />

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

          <section aria-labelledby="ask-heading" className="rounded-xl2 border border-sand bg-white p-7 md:p-9">
            <h2 id="ask-heading" className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
              Questions to ask the technician before the {copy.noun} repair starts
            </h2>
            <ul className="prose-copy mt-4">
              <li>Is there a charge to diagnose the {copy.noun}, and does it go toward the repair?</li>
              <li>Can you show me proof of license and insurance for this kind of work?</li>
              <li>What failed on the {copy.noun}, what will the repair involve, and what will it cost before you start?</li>
              <li>Is there a warranty on the part and on the labor, and how long does it last?</li>
              <li>{copy.askQuestion}</li>
            </ul>
          </section>

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

        <aside className="hidden lg:block" aria-label={`Call about ${copy.noun} repair`}>
          <div className="sticky top-28">
            <CallCard location={`service_${s.key}_sidebar`} title={copy.sidebarTitle} appliance={copy.noun} />
          </div>
        </aside>
      </div>

      <FinalCta
        title={copy.finalTitle}
        accent={copy.finalAccent}
        text={copy.finalText}
        appliance={copy.noun}
        formId={`service_${s.key}_final`}
      />
    </>
  );
}

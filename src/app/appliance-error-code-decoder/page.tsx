import Link from 'next/link';
import { ErrorCodeTool } from '@/components/tools/ErrorCodeTool';
import { ToolPage } from '@/components/tools/ToolPage';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { toolPages } from '@/content/tools/pages';
import { pageMetadata } from '@/lib/seo';

/** Error code decoder page text (source: content/tool-errorcodes-v2.md, Nov 2026). The decoder itself is unchanged. */
const page = toolPages.errorCodes;

export const metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });

const tips: [string, string][] = [
  ['Copy it exactly.', ' Letters, numbers and the order they flash in. "5E" and "E5" can be different faults.'],
  ['Pick the right brand.', ' The same letters mean different things on different brands, and a Kenmore often uses the codes of whoever built it.'],
  ['Note when it shows up.', ' At the start of a cycle, halfway through, or only now and then. That changes the advice.'],
];

const parts: [string, string][] = [
  ['What this code usually means.', ' The fault the brand has published for that code, in plain words.'],
  ['Most likely cause.', " The part or condition that triggers it most often. It's a starting point, not a verdict."],
  ['Safe first checks.', ' Things you can look at without tools or opening panels: a filter, a hose, the door, a reset.'],
  [
    'When to stop using the appliance.',
    ' If this part says stop, stop. Running a washer with a jammed pump or a dryer with a blocked vent can turn a small repair into a bigger one.',
  ],
  ['Recommended next step.', ' Whether to watch it, plan a repair or call today.'],
];

const severity: [string, string][] = [
  ['Low', 'Usually a setting, a filter or a load problem. Try the safe checks and watch whether it comes back.'],
  ['Medium', 'A part is likely starting to fail. Plan a repair soon, before it quits at a bad moment.'],
  ['High', "Don't wait on it. Call the same day and keep using it only if the result says that's safe."],
  ['Critical', "Switch it off and leave it off. Call and say it's urgent."],
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

export default function Page() {
  return (
    <ToolPage
      page={page}
      above={
        <ul className="mb-8 grid gap-3 md:grid-cols-3">
          {tips.map(([lead, rest]) => (
            <li key={lead} className="rounded-2xl border border-sand bg-white p-5 text-[15px] leading-relaxed text-ink-body">
              <strong className="block font-display text-[17px] font-semibold text-ink">{lead}</strong>
              {rest}
            </li>
          ))}
        </ul>
      }
      below={
        <>
          <Section tone="white" labelledBy="parts-heading">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="parts-heading" eyebrow="Your result" title="What each part of" accent="the result tells you" />
              <dl className="grid gap-4">
                {parts.map(([lead, rest]) => (
                  <div key={lead} className="border-l-4 border-flame pl-4">
                    <dt className="font-display text-[17px] font-semibold text-ink">{lead}</dt>
                    <dd className="mt-1 text-[16px] leading-relaxed text-ink-body">{rest.trim()}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Section>

          <Section labelledBy="severity-heading">
            <SectionHeading id="severity-heading" eyebrow="Severity" title="Severity," accent="in plain terms" />
            <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
              <table className="w-full min-w-[520px] text-left text-[15px]">
                <caption className="sr-only">What each error code severity means for you</caption>
                <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                  <tr>
                    <th scope="col" className={th}>Severity</th>
                    <th scope="col" className={th}>What it means for you</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/70">
                  {severity.map(([level, meaning]) => (
                    <tr key={level} className="align-top">
                      <th scope="row" className="px-4 py-3 font-semibold text-ink">{level}</th>
                      <td className="px-4 py-3 text-ink-body">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section tone="white" labelledBy="missing-heading">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="missing-heading" eyebrow="Not listed" title="When the code" accent="isn't in the decoder" />
              <div className="prose-copy">
                <p>
                  It tells you so instead of guessing. Write down the full model number, check the owner&apos;s manual, and try one power reset by
                  flipping its breaker off, counting to sixty and flipping it back. If the code comes straight back, describe what the appliance is
                  doing in <Link href="/appliance-symptom-diagnostic-tool/">the symptom checker</Link> instead, since symptoms often say more than an
                  unlisted code.
                </p>
              </div>
            </div>
          </Section>

          <Section labelledBy="brands-heading">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="brands-heading" eyebrow="Brand notes" title="A note on" accent="Samsung and LG" />
              <div className="prose-copy">
                <p>
                  Both brands lean heavily on codes and on their phone apps, and both reuse short codes across washers, dryers and fridges. If yours is
                  one of them, <Link href="/brands/samsung-appliance-repair-temple-tx/">Samsung&apos;s common faults and codes</Link> and{' '}
                  <Link href="/brands/lg-appliance-repair-temple-tx/">what LG&apos;s codes usually point to</Link> go further than the decoder can.
                </p>
              </div>
            </div>
          </Section>

          <Section tone="ink" labelledBy="safety-heading">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="safety-heading" eyebrow="Safety" title="Safety" accent="before the code" dark />
              <p className="text-[17px] leading-relaxed text-white/75">
                A code never outranks what you can see or smell. Gas, smoke, sparks, a shock or water near wiring override any code: switch the
                appliance off and deal with that first. With gas, get out first and phone 911 or your gas company once you&apos;re clear of the house.
              </p>
            </div>
          </Section>
        </>
      }
      cta={{
        title: 'Got the code?',
        accent: 'Read it out on the phone.',
        text: (
          <>
            Call us at <PhoneLink location="tool_errorCodes_final_text" className={white} /> and read out the code exactly as it shows, plus the brand,
            the model number and when it appears. A technician can often narrow down the part before the visit.
          </>
        ),
      }}
    >
      <ErrorCodeTool />
    </ToolPage>
  );
}

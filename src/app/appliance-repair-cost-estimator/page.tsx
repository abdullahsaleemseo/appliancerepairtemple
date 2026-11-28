import Link from 'next/link';
import { CostTool } from '@/components/tools/CostTool';
import { ToolPage } from '@/components/tools/ToolPage';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { toolPages } from '@/content/tools/pages';
import { pageMetadata } from '@/lib/seo';

/** Cost estimator page text (source: content/tool-cost-v2.md, Nov 2026). The tool itself is unchanged. */
const page = toolPages.cost;

export const metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });

const ready: [string, string][] = [
  ['What it\'s doing.', ' Not "it\'s broken" but "runs, no heat" or "fills, won\'t drain." The closer the symptom, the closer the guide.'],
  ['The brand.', ' Premium and built-in brands move the result, because parts cost more and removal takes longer.'],
  ['Roughly how old it is.', ' The model tag or the purchase paperwork usually gives it away. Age decides a lot of repair-or-replace calls on its own.'],
];

const levels: [string, string][] = [
  ['Lower', 'A visit plus a small part or an adjustment, like a door switch, a fuse or a cleared drain.'],
  ['Moderate', 'A common part and an hour or two of labor, such as a pump, a fan motor or an igniter.'],
  ['Higher', 'A larger component or a longer job, like a control board or a drum bearing.'],
  ['Major', 'A compressor, a sealed system or a main board. This is where repair or replace gets a serious look.'],
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const th = 'px-4 py-3 font-semibold';

export default function Page() {
  return (
    <ToolPage
      page={page}
      above={
        <div className="mb-8 rounded-2xl border border-sand bg-white p-6">
          <h2 className="font-display text-xl font-bold text-ink">Have these three answers ready</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {ready.map(([lead, rest]) => (
              <li key={lead} className="text-[15px] leading-relaxed text-ink-body">
                <strong className="font-semibold text-ink">{lead}</strong>
                {rest}
              </li>
            ))}
          </ul>
        </div>
      }
      below={
        <>
          <Section tone="white" labelledBy="levels-heading">
            <SectionHeading
              id="levels-heading"
              eyebrow="Your result"
              title="Reading"
              accent="your result"
              intro="The estimate lands on one of four levels:"
            />
            <div className="overflow-x-auto rounded-2xl border border-sand bg-white">
              <table className="w-full min-w-[560px] text-left text-[15px]">
                <caption className="sr-only">What each repair cost level usually means</caption>
                <thead className="bg-canvas text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                  <tr>
                    <th scope="col" className={th}>Level</th>
                    <th scope="col" className={th}>What it usually means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/70">
                  {levels.map(([level, meaning]) => (
                    <tr key={level} className="align-top">
                      <th scope="row" className="px-4 py-3 font-semibold text-ink">{level}</th>
                      <td className="px-4 py-3 text-ink-body">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-ink-body">
              Under the level, the estimator lists the adjustments it made and why: a premium brand, a built-in unit, an older appliance, an urgent
              problem. Read those reasons; they&apos;re often more useful than the level itself.
            </p>
          </Section>

          <Section labelledBy="replace-heading">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="replace-heading" eyebrow="Repair or replace" title="The repair-or-replace" accent="line" />
              <div className="prose-copy">
                <p>
                  The bar compares the top of the repair estimate with the cost of a comparable new appliance, then checks the age against a typical
                  lifespan. Lean toward repair when the repair is a small share of replacement and the appliance has years left. Weigh both when it&apos;s
                  in the middle. Look hard at replacing when the repair passes about half the cost of new on an appliance close to wearing out. The
                  thinking behind that rule is explained in <Link href="/blog/repair-or-replace-appliance/">our repair-or-replace walkthrough</Link>.
                </p>
              </div>
            </div>
          </Section>

          <Section tone="white" labelledBy="limits-heading">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="limits-heading" eyebrow="Limits" title="What the estimator" accent="can't see" />
              <div className="prose-copy">
                <p>
                  It doesn&apos;t know your exact model, whether a second part is also worn, or whether the symptom has a different cause than the one
                  you picked. A code on the display narrows that down; run it through{' '}
                  <Link href="/appliance-error-code-decoder/">the error code decoder</Link> first if you have one. The real price comes after a
                  technician has looked at the appliance, and you agree to it before any work starts.
                </p>
              </div>
            </div>
          </Section>

          <Section tone="ink" labelledBy="safety-heading">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="safety-heading" eyebrow="Safety" title="Safety" accent="first" dark />
              <p className="text-[17px] leading-relaxed text-white/75">
                If there&apos;s a gas smell, smoke, sparking or a burning smell, the estimator shows safety steps instead of a cost guide. Leave a gas
                smell to the gas company or 911, called from outside.
              </p>
            </div>
          </Section>
        </>
      }
      cta={{
        title: 'Know the level?',
        accent: 'Now get the real number.',
        text: (
          <>
            Phone <PhoneLink location="tool_cost_final_text" className={white} /> and share the appliance, the brand, its age and the level the
            estimator showed, and ask how the visit and the repair are priced.
          </>
        ),
      }}
    >
      <CostTool />
    </ToolPage>
  );
}

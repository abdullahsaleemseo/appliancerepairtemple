import Link from 'next/link';
import { SymptomTool } from '@/components/tools/SymptomTool';
import { ToolPage } from '@/components/tools/ToolPage';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { toolPages } from '@/content/tools/pages';
import { pageMetadata } from '@/lib/seo';

/** Symptom checker page text (source: content/tool-symptoms-v2.md, Nov 2026). The checker itself is unchanged. */
const page = toolPages.symptoms;

export const metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });

const pairs: [string, string][] = [
  ['"The fridge isn\'t working."', '"Freezer\'s fine, the fridge side is warm, and the back of the freezer is white with frost."'],
  ['"The dryer\'s broken."', '"It tumbles and the timer runs, but the clothes come out cold."'],
  ['"The washer\'s making a noise."', '"Loud banging during spin, only with towels."'],
];

const urgency: [string, string][] = [
  ['Monitor:', ' safe to keep using while you watch for changes.'],
  ['Schedule soon:', ' plan a repair before the problem grows.'],
  ['Get help today:', " food, water damage or daily use is at stake. A warm fridge or a washer leaking onto the floor shouldn't wait for the weekend."],
  ['Stop use now:', ' switch it off and leave it off until a technician has checked it.'],
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

export default function Page() {
  return (
    <ToolPage
      page={page}
      above={
        <div className="mb-8 rounded-2xl border border-sand bg-white p-6">
          <h2 className="font-display text-xl font-bold text-ink">Describe it like this</h2>
          <div className="mt-4 grid gap-3">
            {pairs.map(([vague, useful]) => (
              <div key={vague} className="grid gap-2 rounded-xl bg-canvas p-4 text-[15px] leading-relaxed sm:grid-cols-2">
                <p className="text-ink-muted">
                  <span className="mb-1 block text-[12px] font-semibold uppercase tracking-[0.14em]">Vague</span>
                  {vague}
                </p>
                <p className="text-ink">
                  <span className="mb-1 block text-[12px] font-semibold uppercase tracking-[0.14em] text-flame">Useful</span>
                  {useful}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[15px] text-ink-body">The more specific the symptom, the more useful the ranking.</p>
        </div>
      }
      below={
        <>
          <Section tone="white" labelledBy="example-heading">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="example-heading" eyebrow="Worked example" title="How the ranking moves:" accent="one example" />
              <div className="prose-copy">
                <p>
                  Say the fresh-food side of your fridge is warm. On its own, that symptom has a handful of usual suspects: dusty condenser coils, a
                  stalled fan, a defrost fault, a stuck damper. Now add a second sign, frost coating the back of the freezer. A defrost fault explains
                  both, so it jumps to the top. Add that the fridge is twelve years old, and worn parts such as the start relay and door gaskets climb the
                  list too. The result shows which answer moved each cause, so you can see the reasoning instead of taking it on faith. The checks for
                  that exact pattern are covered in <Link href="/refrigerator-repair-temple-tx/">why a refrigerator warms up</Link>.
                </p>
              </div>
            </div>
          </Section>

          <Section labelledBy="urgency-heading">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="urgency-heading" eyebrow="Urgency" title="The four" accent="urgency labels" />
              <div className="prose-copy">
                <ul>
                  {urgency.map(([lead, rest]) => (
                    <li key={lead}>
                      <strong className="font-semibold text-ink">{lead}</strong>
                      {rest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section tone="white" labelledBy="next-heading">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="next-heading" eyebrow="Next steps" title="Where to" accent="go next" />
              <div className="prose-copy">
                <p>
                  If a code does show up, <Link href="/appliance-error-code-decoder/">the error code decoder</Link> is more precise than a symptom. If
                  the result points to a big part and you&apos;re wondering whether it&apos;s worth it,{' '}
                  <Link href="/appliance-repair-cost-estimator/">the repair cost estimator</Link> shows how large that kind of repair usually is.
                </p>
              </div>
            </div>
          </Section>

          <Section tone="ink" labelledBy="limits-heading">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="limits-heading" eyebrow="Safety and limits" title="What the checker" accent="won't do" dark />
              <p className="text-[17px] leading-relaxed text-white/75">
                It only suggests checks you can do with the power off: cleaning a filter, looking at a hose, listening for a fan. It never asks you to
                open a sealed system, a gas line or an electrical panel. Confirming the fault means testing parts, and that&apos;s a technician&apos;s
                job. If you choose &quot;unsafe signs present&quot;, it skips the causes and shows safety steps instead.
              </p>
            </div>
          </Section>
        </>
      }
      cta={{
        title: 'Have a',
        accent: 'likely cause?',
        text: (
          <>
            Ring <PhoneLink location="tool_symptoms_final_text" className={white} /> and mention the appliance, its brand, the symptom and the
            checker&apos;s top cause; that lets the technician think about parts early.
          </>
        ),
      }}
    >
      <SymptomTool />
    </ToolPage>
  );
}

import Link from 'next/link';
import { MaintenanceTool } from '@/components/tools/MaintenanceTool';
import { ToolPage } from '@/components/tools/ToolPage';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { toolPages } from '@/content/tools/pages';
import { pageMetadata } from '@/lib/seo';

/** Maintenance checklist page text (source: content/tool-maintenance-v2.md, Nov 2026). The generator itself is unchanged. */
const page = toolPages.maintenance;

export const metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });

const decide: [string, string][] = [
  [
    'Is your water hard?',
    ' Most of the water around Temple is. Tick it, and dishwasher, washer and ice maker tasks come around more often, because scale is what clogs their screens and valves.',
  ],
  ['Any pets?', ' Pet hair finds its way into condenser coils and dryer lint screens fast. Tick it, and coil cleaning moves up.'],
  [
    'Where does each appliance live?',
    ' A fridge in an air-conditioned kitchen and one in a Central Texas garage need very different attention. The placement question for each appliance takes care of that.',
  ],
];

const habits = [
  'Clean the dryer lint screen every load, not every few loads.',
  "Vacuum the fridge's condenser coils before summer, and again in fall if you have pets.",
  'Swap rubber washer hoses for braided ones before they bulge.',
];

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';
const card = 'rounded-2xl border border-sand bg-canvas p-5';

export default function Page() {
  return (
    <ToolPage
      page={page}
      above={
        <div className="mb-8 rounded-2xl border border-sand bg-white p-6">
          <h2 className="font-display text-xl font-bold text-ink">Decide these three before you start</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {decide.map(([lead, rest]) => (
              <li key={lead} className="text-[15px] leading-relaxed text-ink-body">
                <strong className="block font-semibold text-ink">{lead}</strong>
                {rest}
              </li>
            ))}
          </ul>
        </div>
      }
      below={
        <>
          <Section tone="white" labelledBy="buckets-heading">
            <SectionHeading id="buckets-heading" eyebrow="Your plan" title="Reading your plan:" accent="the four buckets" />
            <div className="grid gap-4 md:grid-cols-2">
              <div className={card}>
                <h3 className="font-display text-lg font-semibold text-ink">Monthly</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-body">
                  The quick ones: wiping the washer door gasket, rinsing the dishwasher filter, checking the fridge and freezer temperatures. A few
                  minutes each.
                </p>
              </div>
              <div className={card}>
                <h3 className="font-display text-lg font-semibold text-ink">Seasonal</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-body">
                  Every few months: vacuuming the condenser coils, running a washer cleaning cycle, checking the dryer vent flap outside while it runs.
                  Before July is a good time for the coils.
                </p>
              </div>
              <div className={card}>
                <h3 className="font-display text-lg font-semibold text-ink">Yearly</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-body">
                  Replacing worn washer fill hoses, checking the range&apos;s anti-tip bracket, descaling the dishwasher on hard water.
                </p>
              </div>
              <div className={card}>
                <h3 className="font-display text-lg font-semibold text-ink">Professional</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-body">
                  Anything involving gas, sealed refrigeration or wiring, plus a full dryer vent cleaning through walls or the attic. These are marked so
                  you don&apos;t try them yourself; the long vent runs are covered in{' '}
                  <Link href="/dryer-vent-cleaning-temple-tx/" className="font-semibold text-ink underline decoration-flame decoration-2 underline-offset-4">
                    dryer vent cleaning for Temple homes
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Section>

          <Section labelledBy="habits-heading">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="habits-heading" eyebrow="Prevention" title="Habits that prevent" accent="most repair calls" />
              <div className="prose-copy">
                <ul>
                  {habits.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section tone="white" labelledBy="repair-heading">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="repair-heading" eyebrow="Limits" title="When maintenance" accent="turns into a repair" />
              <div className="prose-copy">
                <p>
                  Upkeep keeps things running; it doesn&apos;t fix a part that has already failed. A fridge that stays warm after the coils are clean, a
                  dryer still taking two cycles after the vent is cleared, a dishwasher holding water with a clean filter: those are repair calls. If
                  you&apos;re not sure which one you&apos;ve got, describe it in{' '}
                  <Link href="/appliance-symptom-diagnostic-tool/">the symptom checker</Link> first.
                </p>
                <p>
                  Tick tasks off as you go, copy the list into your notes, or use Print / Save as PDF and choose &quot;Save as PDF&quot; as the printer.
                  Only the checklist prints. Your answers stay in this browser tab and nothing is sent anywhere.
                </p>
              </div>
            </div>
          </Section>

          <Section tone="ink" labelledBy="safety-heading">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeading id="safety-heading" eyebrow="Safety" title="Power off" accent="first" dark />
              <p className="text-[17px] leading-relaxed text-white/75">
                Unplug the appliance or switch off its breaker before any cleaning or inspection. Tasks marked professional involve gas, sealed
                refrigeration or wiring, and they belong to a technician.
              </p>
            </div>
          </Section>
        </>
      }
      cta={{
        title: 'Got professional tasks',
        accent: 'on the list?',
        text: (
          <>
            Call us at <PhoneLink location="tool_maintenance_final_text" className={white} />, say which appliance and which task, and ask when the
            schedule has room.
          </>
        ),
      }}
    >
      <MaintenanceTool />
    </ToolPage>
  );
}

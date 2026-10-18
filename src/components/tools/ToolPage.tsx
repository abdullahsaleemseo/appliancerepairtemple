import Link from 'next/link';
import { toolConfig } from '@/config/tools';
import { toolPageList, type ToolPage as ToolPageData } from '@/content/tools/pages';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/Section';

/** Shared layout for the tool pages: hero, the tool itself, supporting content, FAQs and links to the other tools. */
export function ToolPage({ page, children }: { page: ToolPageData; children: React.ReactNode }) {
  const others = toolPageList.filter((p) => p.key !== page.key);
  return (
    <>
      <PageHero crumbs={[{ name: page.name, path: page.path }]} title={page.title} accent={page.accent}>
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">{page.intro}</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium text-white/80">
          {['Free to use', 'No sign-up or email', 'Answers stay in your browser'].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-mint-bright" strokeWidth={2.6} />
              {t}
            </li>
          ))}
        </ul>
      </PageHero>

      <section aria-label={page.name} className="print-keep bg-canvas px-4 pb-16 pt-10 md:pb-24 lg:px-6">
        <div className="mx-auto max-w-4xl">
          {children}
          <noscript>
            <p className="rounded-2xl border border-sand bg-white p-6 text-ink-body">{page.noscript}</p>
          </noscript>
        </div>
      </section>

      <Section tone="white" labelledBy="how-heading">
        <SectionHeading id="how-heading" eyebrow="How it works" title="Three steps," accent="a few minutes." />
        <HowItWorks steps={page.steps} />
      </Section>

      <Section labelledBy="covers-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading id="covers-heading" eyebrow="Coverage" title={page.coversHeading} />
          <div className="prose-copy">
            <ul>
              {page.covers.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p>{page.coversNote}</p>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="safety-heading">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading id="safety-heading" eyebrow="Safety" title="Safety and" accent="limits." dark />
          <div className="space-y-4 text-[17px] leading-relaxed text-white/75">
            <p>{page.safety}</p>
            <p>
              This is general guidance and an estimate only; an on-site inspection may be required. For a gas smell, leave the house and call 911
              or the gas company from outside. {toolConfig.emergencyMessage}
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions about" accent="this tool." />
            <nav aria-label="Other tools" className="-mt-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">More free tools</p>
              <ul className="mt-3 space-y-3">
                {others.map((o) => (
                  <li key={o.key}>
                    <Link href={o.path} className="link-arrow">
                      {o.linkText}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <FaqList faqs={page.faqs} />
        </div>
      </Section>

      <FinalCta
        formId={`tool_${page.key}_final`}
        title="Rather talk it through?"
        accent="Call the line."
        text={`Pick the appliance, enter your ZIP code and describe what you found. Calls connect with technicians serving ${toolConfig.defaultCity} and ${toolConfig.region}.`}
      />
    </>
  );
}

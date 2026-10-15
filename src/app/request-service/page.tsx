import Link from 'next/link';
import { canShow, claims, routes, site } from '@/config/site';
import { FaqList } from '@/components/FaqList';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { TrustBadges } from '@/components/TrustBadges';
import { MultiStepForm } from '@/components/forms/MultiStepForm';
import { areas, areaHref } from '@/content/areas';
import type { Faq } from '@/content/types';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Request Appliance Repair in ${site.city}, ${site.stateAbbr} | Callback`,
  description: `Request in-home appliance repair in ${site.city}, ${site.stateAbbr}. Four quick steps: appliance, brand, problem and contact details. We call you back to schedule a visit.`,
  path: routes.request,
});

const nextSteps = [
  { title: 'We call you back', text: 'We go over the appliance and the problem, and answer any questions you have.' },
  { title: 'We confirm a time', text: 'We check the schedule for your address and set a visit window that works for you.' },
  { title: 'Diagnosis, then your OK', text: 'The technician finds what failed and explains the repair. Work starts only once you agree.' },
];

const requestFaqs: Faq[] = [
  {
    q: 'Does sending this form book an appointment?',
    a: 'No. It requests a callback. The appointment is set once we confirm a time with you by phone.',
  },
  {
    q: 'What if I do not know the brand or model?',
    a: 'Choose your best guess or leave it blank. A plain description of what the appliance is doing is enough to get started.',
  },
  {
    q: 'I sent a request after hours. When will I hear back?',
    a: 'Our hours are Monday to Saturday, 8:00 AM to 8:00 PM. Requests sent outside those hours are followed up once we are open.',
  },
  {
    q: 'Can I get a price before the visit?',
    a: 'The cost depends on the appliance, the model and the part that failed, so we do not quote prices online. Call to discuss your repair needs.',
  },
];

export default function RequestPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Request Service', path: routes.request }]} title={`Request Appliance Repair in ${site.city},`} accent="in about a minute.">
        <div className="prose-copy prose-dark">
          <p>
            Four quick questions: the appliance, the brand, what it is doing and how to reach you. We call you back to confirm a
            time. Same-day service is available, {claims.availabilityQualifier}.
          </p>
        </div>
        <div className="mt-6">
          <TrustBadges dark />
        </div>
      </PageHero>

      <div className="mx-auto -mt-8 grid max-w-site gap-8 px-4 pb-20 lg:grid-cols-[1.6fr_1fr] lg:px-6">
        <div className="relative">
          <MultiStepForm />
          <p className="mt-4 text-sm text-ink-muted">Sending this form requests a callback. It does not guarantee an appointment.</p>
        </div>
        <aside aria-label="Other ways to reach us" className="space-y-4 lg:pt-8">
          <div className="grain relative overflow-hidden rounded-card bg-ink p-7 text-white">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame/30 blur-[80px]" />
            <h2 className="relative font-display text-xl font-bold text-white">Faster by phone</h2>
            <p className="relative mt-1 text-white/60">Talk to a person and settle on a time in the same call.</p>
            <PhoneLink
              location="request_aside"
              withIcon
              className="relative mt-4 inline-flex items-center gap-2 font-display text-3xl font-bold tracking-[-0.03em] text-white hover:text-flame-glow"
            />
            {canShow(site.hours) ? <p className="relative mt-3 text-[14px] text-white/50">{site.hours.value.long}</p> : null}
            <p className="relative mt-1 text-[14px] text-white/50">Typical response: about 60 minutes, not a guaranteed arrival time.</p>
          </div>
          <div className="card flex gap-4 p-6">
            <Icon name="chat" className="h-6 w-6 shrink-0 text-flame" />
            <div>
              <h2 className="font-display font-bold text-ink">Have this ready</h2>
              <p className="mt-1 text-[15px] text-ink-body">
                The model number, usually inside the door, under the lid or on the frame, and any error code on the display. It
                helps the technician come prepared.
              </p>
            </div>
          </div>
          <div className="card flex gap-4 p-6">
            <Icon name="pin" className="h-6 w-6 shrink-0 text-flame" />
            <div>
              <h2 className="font-display font-bold text-ink">Where we work</h2>
              <p className="mt-1 text-[15px] text-ink-body">
                <Link href={routes.cityPage} className="font-medium text-ink underline decoration-flame/50 underline-offset-4 hover:decoration-flame">
                  {site.city}
                </Link>
                {areas.map((a) => (
                  <span key={a.slug}>
                    {', '}
                    <Link href={areaHref(a)} className="font-medium text-ink underline decoration-flame/50 underline-offset-4 hover:decoration-flame">
                      {a.name}
                    </Link>
                  </span>
                ))}
                .
              </p>
            </div>
          </div>
        </aside>
      </div>

      <Section tone="white" labelledBy="next-heading">
        <SectionHeading id="next-heading" eyebrow="After you send it" title="What happens" accent="next." />
        <HowItWorks steps={nextSteps} />
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Before you" accent="send it." />
          <div>
            <FaqList faqs={requestFaqs} />
            <Link href={routes.faq} className="link-arrow mt-6">
              More questions and answers
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

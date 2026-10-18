import Link from 'next/link';
import { routes, site } from '@/config/site';
import { FaqList } from '@/components/FaqList';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { TrustBadges } from '@/components/TrustBadges';
import { CtaRow } from '@/components/Buttons';
import { CallCard } from '@/components/CallCard';
import { areas, areaHref } from '@/content/areas';
import type { Faq } from '@/content/types';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Get Connected With Appliance Repair in ${site.city}, ${site.stateAbbr}`,
  description: `Make a free call to get connected with an independent local appliance repair pro in ${site.city}, ${site.stateAbbr}. Describe the problem and ask about availability and pricing.`,
  path: routes.request,
});

const nextSteps = [
  { title: 'You call the number', text: 'Describe the appliance, the brand and what it is doing, and give your address or ZIP code.' },
  { title: 'You are connected', text: 'Your call is connected with an independent appliance repair provider serving your area. Ask about availability, pricing and licensing.' },
  { title: 'Diagnosis, then your OK', text: 'A good technician finds what failed and explains the repair before starting. Agree on the price before any work begins.' },
];

const requestFaqs: Faq[] = [
  {
    q: 'How does the free call work?',
    a: 'You call the number on this site and your call is connected with an independent local appliance repair provider. You and the provider agree on the visit, the price and any warranty directly. The site does not perform repairs.',
  },
  {
    q: 'What if I do not know the brand or model?',
    a: 'Choose your best guess or leave it blank. A plain description of what the appliance is doing is enough to get started.',
  },
  {
    q: 'Can I get emergency appliance repair?',
    a: 'Emergency help may be available from local providers. Say it is urgent when you call, and take the safety steps first: close the water valve for a leak, switch off the breaker for a burning smell, and leave the house and call 911 or the gas company from outside if you smell gas.',
  },
  {
    q: 'How do I know the provider is licensed and insured?',
    a: 'Ask. It is the homeowner’s responsibility to verify that the provider holds any license and insurance the work requires. Ask for proof of insurance and any license number before work starts.',
  },
  {
    q: 'Can I get a price before the visit?',
    a: 'The cost depends on the appliance, the model and the part that failed, so this site does not list prices. Ask the provider how pricing works when you call, and agree on the price before work starts.',
  },
];

export default function RequestPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Call to Get Connected', path: routes.request }]} title={`Appliance Repair in ${site.city},`} accent="one free call away.">
        <div className="prose-copy prose-dark">
          <p>
            {site.brandName} is a free referral service. Call the number below, describe the appliance and what it is doing, and
            your call is connected with an independent local appliance repair pro serving {site.city} and nearby {site.county}{' '}
            towns.
          </p>
        </div>
        <div className="mt-8">
          <CtaRow location="request_hero" dark />
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <TrustBadges dark />
        </div>
      </PageHero>

      <div className="mx-auto -mt-8 grid max-w-site gap-8 px-4 pb-20 lg:grid-cols-[1.6fr_1fr] lg:px-6">
        <div className="relative">
          <CallCard location="request_main" title="Call to get connected with a local pro" />
        </div>
        <aside aria-label="Before you call" className="space-y-4 lg:pt-8">
          <div className="grain relative overflow-hidden rounded-card bg-ink p-7 text-white">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame/30 blur-[80px]" />
            <h2 className="relative font-display text-xl font-bold text-white">Urgent problem?</h2>
            <p className="relative mt-1 text-white/60">
              A leak, a fridge warming up with food inside, or a burning smell: stop the damage first, then call. Emergency help may
              be available from local providers. Say it is urgent when you call.
            </p>
            <PhoneLink
              location="request_urgent"
              withIcon
              className="relative mt-4 inline-flex items-center gap-2 font-display text-3xl font-bold tracking-[-0.03em] text-white hover:text-flame-glow"
            />
          </div>
          <div className="card flex gap-4 p-6">
            <Icon name="chat" className="h-6 w-6 shrink-0 text-flame" />
            <div>
              <h2 className="font-display font-bold text-ink">Have this ready</h2>
              <p className="mt-1 text-[15px] text-ink-body">
                The model number, usually inside the door, under the lid or on the frame, and any error code on the display. It
                helps the provider come prepared.
              </p>
            </div>
          </div>
          <div className="card flex gap-4 p-6">
            <Icon name="pin" className="h-6 w-6 shrink-0 text-flame" />
            <div>
              <h2 className="font-display font-bold text-ink">Areas covered</h2>
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
        <SectionHeading id="next-heading" eyebrow="When you call" title="What happens" accent="next." />
        <HowItWorks steps={nextSteps} />
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Before you" accent="call." />
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

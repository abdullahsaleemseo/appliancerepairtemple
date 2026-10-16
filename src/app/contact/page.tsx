import Link from 'next/link';
import { canShow, claims, routes, site } from '@/config/site';
import { FaqList } from '@/components/FaqList';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { VerifyTag } from '@/components/Verify';
import { CallCard } from '@/components/CallCard';
import { CtaRow } from '@/components/Buttons';
import { areas, areaHref } from '@/content/areas';
import type { Faq } from '@/content/types';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Contact ${site.brandName} | Call to Book a Repair`,
  description: `Contact ${site.brandName} for in-home appliance repair in ${site.city}, ${site.stateAbbr}. Call Monday to Saturday, 8:00 AM to 8:00 PM. Urgent calls get priority.`,
  path: routes.contact,
});

const card = 'card p-7';
const label = 'mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted';

const haveReady = [
  'Your address or ZIP code',
  'Which appliance it is and the brand',
  'The model number, if you can find it (inside the door, under the lid or on the frame)',
  'What it is doing, or not doing, and when it started',
  'Any error code, noise or smell',
  'Whether you own the home or rent it',
];

const afterSteps = [
  { title: 'We talk it through', text: 'On the phone, we go over the appliance and the problem and answer your questions.' },
  { title: 'We set a visit window', text: 'We check the schedule for your address and confirm a time that works for you.' },
  { title: 'The technician comes to you', text: 'The appliance is diagnosed in your home, and the repair starts only after your OK.' },
];

const contactFaqs: Faq[] = [
  {
    q: 'What is the fastest way to reach you?',
    a: 'A phone call during business hours. You talk to a person and can usually settle on a visit window in the same call.',
  },
  {
    q: 'Can I book a repair online?',
    a: 'Booking is by phone. A short call lets us ask the right questions about the appliance and set a visit window in the same conversation.',
  },
  {
    q: 'Can I contact you outside business hours?',
    a: 'Our hours are Monday to Saturday, 8:00 AM to 8:00 PM. Please call during those hours. Urgent calls get priority scheduling when we are open.',
  },
  {
    q: 'Do you have a shop I can bring an appliance to?',
    a: 'Repairs are done in your home. The technician comes to you.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Contact', path: routes.contact }]} title={`Contact ${site.brandName},`} accent="talk to a real person.">
        <div className="prose-copy prose-dark">
          <p>
            The fastest way onto the schedule is a phone call. You reach a person, describe the problem and settle on a visit
            window. Urgent calls, such as a leak or a fridge warming up with food inside, get priority during business hours.
          </p>
        </div>
        <div className="mt-8">
          <CtaRow location="contact_hero" dark />
        </div>
      </PageHero>

      <div className="mx-auto grid max-w-site gap-8 px-4 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-6">
        <ul className="grid content-start gap-4 sm:grid-cols-2">
          <li className="grain relative overflow-hidden rounded-card bg-ink p-7 text-white sm:col-span-2">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame/30 blur-[80px]" />
            <Icon name="phone" className="relative h-7 w-7 text-flame-glow" />
            <h2 className="relative mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/50">Call</h2>
            <PhoneLink location="contact_card" showTag className="relative mt-1 block font-display text-4xl font-bold tracking-[-0.03em] text-white hover:text-flame-glow" />
            <p className="relative mt-3 text-[15px] text-white/65">
              Same-day service is available, {claims.availabilityQualifier}.
            </p>
          </li>
          {canShow(site.email) ? (
            <li className={card}>
              <Icon name="mail" className="h-6 w-6 text-flame" />
              <h2 className={label}>Email</h2>
              <a href={`mailto:${site.email.value}`} className="mt-1 block break-all font-semibold text-ink underline decoration-flame underline-offset-4">
                {site.email.value}
              </a>
              {!site.email.verified ? <VerifyTag label="REPLACE EMAIL" /> : null}
              <p className="mt-2 text-sm text-ink-muted">For non-urgent questions. Call for anything that needs a visit soon.</p>
            </li>
          ) : null}
          {canShow(site.hours) ? (
            <li className={card}>
              <Icon name="clock" className="h-6 w-6 text-flame" />
              <h2 className={label}>Hours</h2>
              <p className="mt-1 text-ink">{site.hours.value.long}</p>
              {!site.hours.verified ? <VerifyTag label="VERIFY HOURS" /> : null}
              <p className="mt-2 text-sm text-ink-muted">Closed Sunday. Urgent calls get priority during business hours.</p>
            </li>
          ) : null}
          <li className={`${card} sm:col-span-2`}>
            <Icon name="pin" className="h-6 w-6 text-flame" />
            <h2 className={label}>Service area</h2>
            <p className="mt-1 text-ink">
              Based in {site.city}. The technician comes to your home in {site.city} and nearby towns:
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[15px]">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={areaHref(a)} className="font-medium text-ink underline decoration-flame/50 underline-offset-4 hover:decoration-flame">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={routes.areas} className="link-arrow mt-4">
              See all areas
            </Link>
          </li>
        </ul>
        <CallCard location="contact_main" title="Call to book a repair" className="self-start" />
      </div>

      <Section tone="white" labelledBy="ready-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading id="ready-heading" eyebrow="Before you call" title="Have these" accent="handy." />
            <p className="-mt-4 max-w-md text-ink-body">
              You do not need to know what is wrong. A plain description is enough. These details just help the technician come
              prepared.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {haveReady.map((h) => (
              <li key={h} className="flex items-start gap-3 rounded-2xl border border-sand bg-canvas px-5 py-4 text-ink-body">
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame text-white">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="after-heading">
        <SectionHeading id="after-heading" eyebrow="What happens next" title="After you" accent="reach out." />
        <HowItWorks steps={afterSteps} />
      </Section>

      <Section tone="ink" labelledBy="urgent-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading id="urgent-heading" eyebrow="Urgent?" title="Safety comes" accent="before the call." dark />
          <div className="prose-copy prose-dark">
            <p>
              If you smell gas, leave the house and call your gas provider or 911 from outside. Do not switch lights or appliances
              on or off first.
            </p>
            <p>
              If you see sparks or smoke, smell burning, or find water pooling near an outlet, switch off the breaker for that
              appliance if you can do it safely, and do not use the appliance until it has been checked. For a leak, close the water
              supply valve behind the appliance. Then call us.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Getting in" accent="touch." />
          <div>
            <FaqList faqs={contactFaqs} />
            <Link href={routes.faq} className="link-arrow mt-6">
              More questions and answers
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

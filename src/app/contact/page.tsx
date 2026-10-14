import Link from 'next/link';
import { canShow, routes, site } from '@/config/site';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { VerifyTag } from '@/components/Verify';
import { QuickLeadForm } from '@/components/forms/QuickLeadForm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Contact ${site.brandName} | ${site.city}, ${site.stateAbbr}`,
  description: `Call, email or send a request to ${site.brandName}. Phone hours and the ${site.region} areas we cover.`,
  path: routes.contact,
});

const card = 'card p-7';
const label = 'mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted';

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Contact', path: routes.contact }]} title="Talk to a" accent="real person.">
        <p className="text-lg text-white/70">
          The fastest way onto the schedule is a phone call. Or send a short message and we will call you back.
        </p>
      </PageHero>
      <div className="mx-auto grid max-w-site gap-8 px-4 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-6">
        <ul className="grid content-start gap-4 sm:grid-cols-2">
          <li className="grain relative overflow-hidden rounded-card bg-ink p-7 text-white sm:col-span-2">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame/30 blur-[80px]" />
            <Icon name="phone" className="relative h-7 w-7 text-flame-glow" />
            <h2 className="relative mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/50">Call</h2>
            <PhoneLink location="contact_card" showTag className="relative mt-1 block font-display text-4xl font-bold tracking-[-0.03em] text-white hover:text-flame-glow" />
          </li>
          {canShow(site.email) ? (
            <li className={card}>
              <Icon name="mail" className="h-6 w-6 text-flame" />
              <h2 className={label}>Email</h2>
              <a href={`mailto:${site.email.value}`} className="mt-1 block break-all font-semibold text-ink underline decoration-flame underline-offset-4">
                {site.email.value}
              </a>
              {!site.email.verified ? <VerifyTag label="REPLACE EMAIL" /> : null}
            </li>
          ) : null}
          {canShow(site.hours) ? (
            <li className={card}>
              <Icon name="clock" className="h-6 w-6 text-flame" />
              <h2 className={label}>Hours</h2>
              <p className="mt-1 text-ink">{site.hours.value.long}</p>
              {!site.hours.verified ? <VerifyTag label="VERIFY HOURS" /> : null}
            </li>
          ) : null}
          <li className={`${card} sm:col-span-2`}>
            <Icon name="pin" className="h-6 w-6 text-flame" />
            <h2 className={label}>Service area</h2>
            <p className="mt-1 text-ink">{site.serviceAreaSummary}.</p>
            <p className="mt-1 text-sm text-ink-muted">Service-area business. Technicians come to you; there is no walk-in location.</p>
            <Link href={routes.areas} className="link-arrow mt-3">
              See all areas
            </Link>
          </li>
        </ul>
        <QuickLeadForm formId="contact_page" title="Send us a message" />
      </div>
    </>
  );
}

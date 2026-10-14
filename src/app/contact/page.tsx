import Link from 'next/link';
import { canShow, routes, site } from '@/config/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Icon } from '@/components/Icon';
import { PhoneLink } from '@/components/PhoneLink';
import { VerifyTag } from '@/components/Verify';
import { QuickLeadForm } from '@/components/forms/QuickLeadForm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Contact ${site.brandName} | ${site.city}, ${site.stateAbbr}`,
  description: `Call, email or send a request to ${site.brandName}. Phone hours and the ${site.region} areas we cover.`,
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-site px-4 pb-16 pt-6 lg:px-6">
        <Breadcrumbs items={[{ name: 'Contact', path: routes.contact }]} />
        <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-body">
          The fastest way to get on the schedule is a phone call. You can also send a short message and we will call you back.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <ul className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <li className="rounded-card bg-white p-6 shadow-card">
              <Icon name="phone" className="h-7 w-7 text-brand-dark" />
              <h2 className="mt-3 font-heading text-lg font-extrabold text-navy">Call</h2>
              <PhoneLink location="contact_card" showTag className="mt-1 block text-2xl font-extrabold text-navy hover:text-brand-dark" />
            </li>
            {canShow(site.email) ? (
              <li className="rounded-card bg-white p-6 shadow-card">
                <Icon name="mail" className="h-7 w-7 text-brand-dark" />
                <h2 className="mt-3 font-heading text-lg font-extrabold text-navy">Email</h2>
                <a href={`mailto:${site.email.value}`} className="mt-1 block break-all font-semibold text-navy underline">
                  {site.email.value}
                </a>
                {!site.email.verified ? <VerifyTag label="REPLACE EMAIL" /> : null}
              </li>
            ) : null}
            {canShow(site.hours) ? (
              <li className="rounded-card bg-white p-6 shadow-card">
                <Icon name="clock" className="h-7 w-7 text-brand-dark" />
                <h2 className="mt-3 font-heading text-lg font-extrabold text-navy">Hours</h2>
                <p className="mt-1 text-ink">{site.hours.value.long}</p>
                {!site.hours.verified ? <VerifyTag label="VERIFY HOURS" /> : null}
              </li>
            ) : null}
            <li className="rounded-card bg-white p-6 shadow-card">
              <Icon name="pin" className="h-7 w-7 text-brand-dark" />
              <h2 className="mt-3 font-heading text-lg font-extrabold text-navy">Service area</h2>
              <p className="mt-1 text-ink">{site.serviceAreaSummary}.</p>
              <p className="mt-1 text-sm text-ink-muted">Service-area business. Technicians come to you; there is no walk-in location.</p>
              <Link href={routes.areas} className="mt-2 inline-block font-semibold text-navy underline">
                See all areas
              </Link>
            </li>
          </ul>
          <QuickLeadForm formId="contact_page" title="Send us a message" />
        </div>
      </div>
    </div>
  );
}

import { canShow, routes, site } from '@/config/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Icon } from '@/components/Icon';
import { PhoneLink } from '@/components/PhoneLink';
import { MultiStepForm } from '@/components/forms/MultiStepForm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Request Appliance Repair in ${site.city}, ${site.stateAbbr} | ${site.brandName}`,
  description: `Request appliance repair in ${site.city}. Four quick steps: appliance, brand, problem and contact details. We call you back to schedule.`,
  path: routes.request,
});

export default function RequestPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-site px-4 pb-16 pt-6 lg:px-6">
        <Breadcrumbs items={[{ name: 'Request Service', path: routes.request }]} />
        <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
          Request Appliance Repair in {site.city}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-body">
          Four quick questions. We call you back to confirm a time. Submitting this form requests a callback; it does not guarantee
          an appointment.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <MultiStepForm />
          <aside aria-label="Other ways to reach us" className="space-y-4">
            <div className="rounded-card bg-navy p-6 text-white shadow-card">
              <h2 className="font-heading text-lg font-extrabold text-white">Faster by phone</h2>
              <p className="mt-1 text-white/80">Talk to a person and get a time on the spot.</p>
              <PhoneLink location="request_aside" withIcon className="mt-3 inline-flex items-center gap-2 text-2xl font-extrabold text-white hover:text-brand" />
            </div>
            {canShow(site.hours) ? (
              <div className="flex gap-4 rounded-card bg-white p-6 shadow-card">
                <Icon name="clock" className="h-6 w-6 shrink-0 text-brand-dark" />
                <div>
                  <h2 className="font-heading font-extrabold text-navy">Hours</h2>
                  <p className="text-ink-body">{site.hours.value.long}</p>
                </div>
              </div>
            ) : null}
            <div className="flex gap-4 rounded-card bg-white p-6 shadow-card">
              <Icon name="pin" className="h-6 w-6 shrink-0 text-brand-dark" />
              <div>
                <h2 className="font-heading font-extrabold text-navy">Service area</h2>
                <p className="text-ink-body">{site.serviceAreaSummary}.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-card bg-white p-6 shadow-card">
              <Icon name="chat" className="h-6 w-6 shrink-0 text-brand-dark" />
              <div>
                <h2 className="font-heading font-extrabold text-navy">Have this ready</h2>
                <p className="text-ink-body">The model number and any error code on the display. It helps the technician bring the right part.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

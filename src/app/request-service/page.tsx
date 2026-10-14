import { canShow, routes, site } from '@/config/site';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { MultiStepForm } from '@/components/forms/MultiStepForm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Request Appliance Repair in ${site.city}, ${site.stateAbbr} | ${site.brandName}`,
  description: `Request appliance repair in ${site.city}. Four quick steps: appliance, brand, problem and contact details. We call you back to schedule.`,
  path: routes.request,
});

export default function RequestPage() {
  const tips = [
    { icon: 'pin' as const, title: 'Service area', text: `${site.serviceAreaSummary}.` },
    { icon: 'chat' as const, title: 'Have this ready', text: 'The model number and any error code on the display. It helps the technician bring the right part.' },
  ];
  return (
    <>
      <PageHero crumbs={[{ name: 'Request Service', path: routes.request }]} title={`Request Appliance Repair in ${site.city}`}>
        <p className="text-lg text-white/70">
          Four quick questions, about a minute. We call you back to confirm a time. Submitting this form requests a callback; it
          does not guarantee an appointment.
        </p>
      </PageHero>
      <div className="mx-auto -mt-8 grid max-w-site gap-8 px-4 pb-20 lg:grid-cols-[1.6fr_1fr] lg:px-6">
        <div className="relative">
          <MultiStepForm />
        </div>
        <aside aria-label="Other ways to reach us" className="space-y-4 lg:pt-8">
          <div className="grain relative overflow-hidden rounded-card bg-ink p-7 text-white">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flame/30 blur-[80px]" />
            <h2 className="relative font-display text-xl font-bold text-white">Faster by phone</h2>
            <p className="relative mt-1 text-white/60">Talk to a person and get a time on the spot.</p>
            <PhoneLink
              location="request_aside"
              withIcon
              className="relative mt-4 inline-flex items-center gap-2 font-display text-3xl font-bold tracking-[-0.03em] text-white hover:text-flame-glow"
            />
            {canShow(site.hours) ? <p className="relative mt-3 text-[14px] text-white/50">{site.hours.value.long}</p> : null}
          </div>
          {tips.map((t) => (
            <div key={t.title} className="card flex gap-4 p-6">
              <Icon name={t.icon} className="h-6 w-6 shrink-0 text-flame" />
              <div>
                <h2 className="font-display font-bold text-ink">{t.title}</h2>
                <p className="mt-1 text-[15px] text-ink-body">{t.text}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </>
  );
}

import { canShow, site } from '@/config/site';
import type { ApplianceKey } from '@/content/types';
import { CallButton } from './Buttons';
import { QuickLeadForm } from './forms/QuickLeadForm';

export function FinalCta({
  title = 'Appliance broken? Let’s get it fixed.',
  text = 'Call now and talk to a real person, or send a quick request and we will call you back.',
  appliance,
  formId = 'final_cta',
}: {
  title?: string;
  text?: string;
  appliance?: ApplianceKey;
  formId?: string;
}) {
  return (
    <section aria-labelledby={`${formId}-heading`} className="relative overflow-hidden bg-navy py-14 text-white md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-navy-600/50 blur-3xl" />
      <div className="relative mx-auto grid max-w-site items-center gap-10 px-4 lg:grid-cols-[1.1fr_1fr] lg:px-6">
        <div>
          <h2 id={`${formId}-heading`} className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/80">{text}</p>
          <div className="mt-8">
            <CallButton location={`${formId}_band`} label="Call" className="text-lg" />
          </div>
          {canShow(site.hours) ? <p className="mt-4 text-white/70">Phones answered {site.hours.value.long}.</p> : null}
        </div>
        <QuickLeadForm formId={formId} title="Request a callback" defaultAppliance={appliance} showIssue={false} dark />
      </div>
    </section>
  );
}

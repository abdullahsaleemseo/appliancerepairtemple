import { callHint } from '@/config/site';
import { CallButton } from './Buttons';
import { CallCard } from './CallCard';
import { TrustBadges } from './TrustBadges';

export function FinalCta({
  title = 'Broken appliance?',
  accent = 'Let’s fix it.',
  text = 'One call puts you in touch with a technician who works on refrigerators, washers, dryers, dishwashers and ovens across Temple and Bell County.',
  appliance,
  formId = 'final_cta',
}: {
  title?: string;
  accent?: string;
  text?: string;
  appliance?: string;
  formId?: string;
}) {
  return (
    <section aria-labelledby={`${formId}-heading`} className="bg-canvas px-3 pb-3 pt-16 sm:px-4 md:pt-24">
      <div className="grain relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-ink">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-[460px] w-[460px] rounded-full bg-flame/35 blur-[130px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-frost/15 blur-[120px]" />
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]" />
        <div className="relative mx-auto grid max-w-site items-center gap-12 px-5 py-16 md:px-10 md:py-20 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <h2 id={`${formId}-heading`} className="h-display text-[2.8rem] text-white md:text-7xl">
              {title} <span className="accent block text-flame-glow">{accent}</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/65">{text}</p>
            <div className="mt-9">
              <CallButton location={`${formId}_band`} label="Call Now" className="text-[17px]" />
              <p className="mt-3 text-[14px] text-white/60">{callHint}</p>
            </div>
            <div className="mt-10 border-t border-white/10 pt-6">
              <TrustBadges dark />
            </div>
          </div>
          <CallCard location={`${formId}_card`} appliance={appliance} dark />
        </div>
      </div>
    </section>
  );
}

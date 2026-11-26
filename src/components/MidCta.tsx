import { CallButton } from './Buttons';
import { PhoneLink } from './PhoneLink';

/**
 * Mid-page call box placed right after the section where intent peaks. `before` and `after` are the
 * sentence around the phone number, so the number stays a tracked tel link.
 */
export function MidCta({ location, before, after }: { location: string; before: React.ReactNode; after: React.ReactNode }) {
  return (
    <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-flame/30 bg-canvas p-6 md:flex-row md:items-center md:justify-between">
      <p className="max-w-2xl text-[17px] leading-relaxed text-ink-body">
        {before}
        <PhoneLink location={`${location}_text`} className="font-semibold text-flame underline decoration-flame/40 underline-offset-4" />
        {after}
      </p>
      <CallButton location={location} className="shrink-0" />
    </div>
  );
}

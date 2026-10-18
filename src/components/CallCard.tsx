import { callHint, phoneDisplay, tel } from '@/config/site';
import { btn } from './Buttons';
import { Icon } from './Icon';

/** The phone-first card that connects a caller with a local provider. Every link in it is a tracked call. */
export function CallCard({
  location,
  title = 'Call Appliance Repair Temple',
  appliance,
  dark = false,
  className = '',
}: {
  location: string;
  title?: string;
  appliance?: string;
  dark?: boolean;
  className?: string;
}) {
  const points = [
    appliance ? `Say what your ${appliance} is doing and the brand.` : 'Say which appliance it is, the brand and what it is doing.',
    'Your call goes to a technician who works in your area.',
    'Settle the timing and the price before any work starts.',
  ];
  const muted = dark ? 'text-white/60' : 'text-ink-muted';
  return (
    <div
      className={`rounded-xl2 border p-6 sm:p-8 ${dark ? 'border-white/10 bg-white/[0.06] text-white backdrop-blur' : 'border-sand bg-white text-ink shadow-lift'} ${className}`}
    >
      <p className={`text-[12.5px] font-semibold uppercase tracking-[0.16em] ${dark ? 'text-flame-glow' : 'text-flame'}`}>Free call</p>
      <h3 className={`mt-3 font-display text-2xl font-bold tracking-[-0.025em] ${dark ? 'text-white' : 'text-ink'}`}>{title}</h3>
      <a
        href={tel}
        data-call-location={`${location}_number`}
        className={`group mt-5 flex items-center gap-3 font-display text-[clamp(1.75rem,3.4vw,2.4rem)] font-extrabold tracking-[-0.03em] ${dark ? 'text-white hover:text-flame-glow' : 'text-ink hover:text-flame'}`}
      >
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-flame text-white shadow-cta">
          <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-flame/40 [animation-duration:2.4s]" />
          <Icon name="phone" className="relative h-5 w-5" strokeWidth={2.2} />
        </span>
        <span className="whitespace-nowrap">{phoneDisplay}</span>
      </a>
      <p className={`mt-2 text-[14px] font-medium ${dark ? 'text-white/75' : 'text-ink-body'}`}>{callHint}</p>
      <ul className="mt-6 space-y-3">
        {points.map((p) => (
          <li key={p} className={`flex items-start gap-3 text-[15px] ${dark ? 'text-white/80' : 'text-ink-body'}`}>
            <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flame text-white">
              <Icon name="check" className="h-3 w-3" strokeWidth={3} />
            </span>
            {p}
          </li>
        ))}
      </ul>
      <a href={tel} data-call-location={location} className={`${btn.primary} mt-7 w-full text-[17px]`}>
        <Icon name="phone" className="h-5 w-5" strokeWidth={2.2} />
        Call Now
      </a>
      <p className={`mt-3 text-center text-[13px] ${muted}`}>Urgent leak or no cooling? Say so when you call.</p>
    </div>
  );
}

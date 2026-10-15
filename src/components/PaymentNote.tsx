import { canShow, claims } from '@/config/site';
import { Icon } from './Icon';
import { PhoneLink } from './PhoneLink';

/** Payment availability only. No prices, fees or financing terms appear on the site. */
export function PaymentNote({ dark = false }: { dark?: boolean }) {
  if (!canShow(claims.paymentOptions)) return null;
  return (
    <div className={`flex flex-col gap-3 rounded-2xl px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${dark ? 'card-dark' : 'border border-sand bg-white'}`}>
      <p className={`flex items-center gap-3 font-display text-lg font-bold tracking-[-0.02em] ${dark ? 'text-white' : 'text-ink'}`}>
        <Icon name="tag" className={`h-5 w-5 ${dark ? 'text-flame-glow' : 'text-flame'}`} />
        {claims.paymentOptions.value}
      </p>
      <p className={dark ? 'text-white/65' : 'text-ink-body'}>
        <PhoneLink location="payment_note" label="Call for service details:" className={`font-semibold underline decoration-flame underline-offset-4 ${dark ? 'text-white' : 'text-ink'}`} />
      </p>
    </div>
  );
}

import { site } from '@/config/site';
import { Icon } from './Icon';

/** Plain facts about the service. No credentials, ratings or speed claims. */
const items = [
  { text: 'Ask for the price before work starts', icon: 'phone' as const },
  { text: `Serving ${site.city} & ${site.county}`, icon: 'pin' as const },
  { text: 'All major appliance brands', icon: 'tag' as const },
];

export function TrustBadges({ dark = false }: { dark?: boolean; tone?: string }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {items.map((i) => (
        <li key={i.text} className={`inline-flex items-center gap-2 text-[14.5px] font-medium ${dark ? 'text-white/80' : 'text-ink'}`}>
          <Icon name={i.icon} className={`h-[18px] w-[18px] ${dark ? 'text-mint-bright' : 'text-mint'}`} strokeWidth={2} />
          {i.text}
        </li>
      ))}
    </ul>
  );
}

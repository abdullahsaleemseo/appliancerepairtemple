import { site } from '@/config/site';
import { Icon } from './Icon';
import { Section, SectionHeading } from './Section';
import { socialBrandColors, socialIconPaths, type SocialKey } from './socialIcons';

/** Homepage strip of the brand's own profiles, shown in brand color. Add a key to `keys` to show another one. */
export function FindUsOnline({ keys }: { keys: SocialKey[] }) {
  const profiles = keys.map((k) => site.social.find((s) => s.key === k)).filter((s) => s !== undefined);
  if (!profiles.length) return null;
  return (
    <Section labelledBy="find-us-heading">
      <SectionHeading
        id="find-us-heading"
        eyebrow="Find us online"
        title={site.brandName}
        accent="around the web."
        intro={`Follow ${site.brandName} on the platforms below.`}
        center
      />
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {profiles.map((p) => (
          <li key={p.key}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener"
              aria-label={`${site.brandName} on ${p.name}`}
              className="group flex h-full flex-col items-center rounded-card border border-sand bg-white px-4 py-7 text-center transition hover:-translate-y-1 hover:border-ink/20 hover:shadow-lift"
            >
              <svg viewBox="0 0 24 24" className="h-11 w-11" fill={socialBrandColors[p.key]} aria-hidden="true">
                <path d={socialIconPaths[p.key]} />
              </svg>
              <span className="mt-4 font-display text-lg font-bold tracking-[-0.02em] text-ink">{p.name}</span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-body transition group-hover:text-flame">
                Visit <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.4} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

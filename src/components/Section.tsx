type SectionProps = {
  id?: string;
  tone?: 'white' | 'surface' | 'navy';
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
};

const tones = {
  white: 'bg-white',
  surface: 'bg-surface',
  navy: 'bg-navy text-white',
};

export function Section({ id, tone = 'white', className = '', children, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} reveal py-14 md:py-20 ${className}`}>
      <div className="mx-auto max-w-site px-4 lg:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  center = false,
  dark = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <p className={`mb-2 text-sm font-bold uppercase tracking-[0.12em] ${dark ? 'text-brand' : 'text-brand-dark'}`}>{eyebrow}</p>
      ) : null}
      <h2 id={id} className={`font-heading text-3xl font-extrabold tracking-tight md:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-4 text-lg ${dark ? 'text-white/80' : 'text-ink-body'}`}>{intro}</p> : null}
    </div>
  );
}

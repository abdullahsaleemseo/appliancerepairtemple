type SectionProps = {
  id?: string;
  tone?: 'canvas' | 'white' | 'ink';
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
};

const tones = {
  canvas: 'bg-canvas',
  white: 'bg-white',
  ink: 'grain bg-ink text-white/75',
};

export function Section({ id, tone = 'canvas', className = '', children, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} relative overflow-hidden py-20 md:py-28 ${className}`}>
      <div className="reveal relative mx-auto max-w-site px-4 lg:px-6">{children}</div>
    </section>
  );
}

/** Section heading with an optional italic serif accent. Pass `accent` to set one word in serif italics. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  accent,
  intro,
  center = false,
  dark = false,
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  accent?: string;
  intro?: React.ReactNode;
  center?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-12 max-w-2xl md:mb-14 ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow ? (
        <p className={`eyebrow mb-4 ${dark ? 'text-flame-glow' : 'text-flame'}`}>
          <span className={`h-px w-6 ${dark ? 'bg-flame-glow' : 'bg-flame'}`} aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className={`h-section ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
        {accent ? (
          <>
            {' '}
            <span className={`accent ${dark ? 'text-flame-glow' : 'text-flame'}`}>{accent}</span>
          </>
        ) : null}
      </h2>
      {intro ? <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/65' : 'text-ink-body'}`}>{intro}</p> : null}
    </div>
  );
}

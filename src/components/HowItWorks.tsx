const defaultSteps = [
  {
    title: 'Tell us what’s wrong',
    text: 'Call, or send the request form. Give us the appliance, the brand and what it is doing. It takes about a minute.',
  },
  {
    title: 'We confirm a time',
    text: 'We call you back, check the schedule and confirm a visit window that works for you.',
  },
  {
    title: 'Diagnosis before repair',
    text: 'The technician finds the problem and explains what the repair involves. Work starts only after you say yes.',
  },
];

export function HowItWorks({
  steps = defaultSteps,
  dark = false,
}: {
  steps?: { title: string; text: string }[];
  compact?: boolean;
  dark?: boolean;
}) {
  return (
    <ol className={`grid gap-4 ${steps.length === 4 ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-3'}`}>
      {steps.map((s, i) => (
        <li
          key={s.title}
          className={`group relative overflow-hidden rounded-card p-7 ${dark ? 'card-dark' : 'card'}`}
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute -right-3 -top-8 font-serif text-[150px] italic leading-none transition duration-500 group-hover:-translate-y-1 ${
              dark ? 'text-white/[0.06]' : 'text-ink/[0.05]'
            }`}
          >
            {i + 1}
          </span>
          <span className={`relative inline-flex h-9 items-center rounded-full px-3.5 text-[13px] font-semibold ${dark ? 'bg-flame text-white' : 'bg-ink text-white'}`}>
            Step {i + 1}
          </span>
          <h3 className={`relative mt-6 font-display text-[22px] font-bold tracking-[-0.025em] ${dark ? 'text-white' : 'text-ink'}`}>{s.title}</h3>
          <p className={`relative mt-2 ${dark ? 'text-white/65' : 'text-ink-body'}`}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

const defaultSteps = [
  {
    title: 'Call the number on this site',
    text: 'Describe the appliance, the brand and what it is doing. The call is free.',
  },
  {
    title: 'Get connected with a local pro',
    text: 'Your call is connected with an independent appliance repair provider serving your area. Ask about availability, pricing and licensing.',
  },
  {
    title: 'Diagnosis before repair',
    text: 'A good technician finds the problem and explains what the repair involves before any work starts.',
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

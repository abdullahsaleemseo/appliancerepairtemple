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
    title: 'Diagnosis and a price first',
    text: 'The technician finds the problem and tells you the repair price. Work starts only after you say yes.',
  },
];

export function HowItWorks({ steps = defaultSteps, compact = false }: { steps?: { title: string; text: string }[]; compact?: boolean }) {
  return (
    <ol className={`relative grid gap-6 ${steps.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
      <span
        aria-hidden="true"
        className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-navy/20 md:block"
      />
      {steps.map((s, i) => (
        <li key={s.title} className={`relative ${compact ? '' : 'text-center'}`}>
          <span
            className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy font-heading text-xl font-extrabold text-white ring-8 ring-white ${
              compact ? '' : 'mx-auto'
            }`}
          >
            {i + 1}
          </span>
          <h3 className="mt-4 font-heading text-lg font-extrabold text-navy">{s.title}</h3>
          <p className="mt-2 text-ink-body">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

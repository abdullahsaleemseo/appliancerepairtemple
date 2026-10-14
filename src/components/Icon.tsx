import type { IconName } from '@/content/types';

const paths: Record<IconName, React.ReactNode> = {
  refrigerator: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2" />
      <path d="M6 9.5h12M9 5.5v2M9 12v3" />
    </>
  ),
  freezer: (
    <>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M3 11.5h18M10 14h4M12 2.5v4M10.3 3.5l3.4 2M13.7 3.5l-3.4 2" />
    </>
  ),
  washer: (
    <>
      <rect x="4" y="2.5" width="16" height="19" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M4 6.5h16M7 4.5h.01M9.5 4.5h.01M9.5 14.5c1.2-1.2 3.8-.4 5-1.6" />
    </>
  ),
  dryer: (
    <>
      <rect x="4" y="2.5" width="16" height="19" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M4 6.5h16M16 4.5h.01M10.5 11c.8.8.8 1.6 0 2.4M13 11c.8.8.8 1.6 0 2.4" />
    </>
  ),
  dishwasher: (
    <>
      <rect x="4" y="2.5" width="16" height="19" rx="2" />
      <path d="M4 7h16M7 4.75h3M9 11.5v6M12 11.5v6M15 11.5v6M7.5 17.5h9" />
    </>
  ),
  oven: (
    <>
      <rect x="3.5" y="2.5" width="17" height="19" rx="2" />
      <path d="M3.5 7.5h17M7 5h.01M10 5h.01M14 5h3" />
      <rect x="6.5" y="10.5" width="11" height="8" rx="1" />
    </>
  ),
  microwave: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <rect x="5" y="7.5" width="10" height="9" rx="1" />
      <path d="M18 8.5h.01M18 11h.01M18 13.5h.01" />
    </>
  ),
  phone: (
    <path d="M5 3.5h3.2l1.6 4-2.1 1.3a11 11 0 0 0 5.5 5.5l1.3-2.1 4 1.6V17a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3 5.5a2 2 0 0 1 2-2Z" />
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0 5 5L21 12.6l-1.3 1.3a5 5 0 0 1-6.4.6L6 21.8a2 2 0 0 1-2.8-2.8l7.3-7.3a5 5 0 0 1 .6-6.4L12.4 4l1.3 1.3a4 4 0 0 0 1 1Z" />
  ),
  tool: (
    <>
      <path d="M3 21l7.5-7.5M14 4l6 6-3 3-6-6 3-3Z" />
      <path d="m11 7-3 3 6 6 3-3" />
    </>
  ),
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  shield: (
    <>
      <path d="M12 2.8 4.5 5.6v5.8c0 4.8 3.2 8.4 7.5 9.8 4.3-1.4 7.5-5 7.5-9.8V5.6L12 2.8Z" />
      <path d="m8.8 12 2.2 2.2 4.3-4.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.3 2" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12.2V4a1 1 0 0 1 1-1h8.2a1 1 0 0 1 .7.3l8 8a1 1 0 0 1 0 1.4l-8.2 8.2a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1-.3-.7Z" />
      <circle cx="8" cy="8" r="1.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  star: (
    <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6-4.5-4.2 6.1-.8L12 3Z" />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  chat: <path d="M4 5.5h16v10H9.5L5 19.5v-4H4z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

type Props = { name: IconName; className?: string; strokeWidth?: number; title?: string };

export function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.75, title }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

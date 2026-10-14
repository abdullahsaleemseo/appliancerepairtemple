import { canShow, isProduction, type Verifiable } from '@/config/site';

/** Visible marker for unverified content in draft builds. Renders nothing in production. */
export function VerifyTag({ label = 'VERIFY BEFORE PUBLISHING' }: { label?: string }) {
  if (isProduction) return null;
  return (
    <span className="ml-1.5 inline-block rounded bg-yellow-200 px-1.5 py-0.5 align-middle font-sans text-[11px] font-bold uppercase tracking-wide text-yellow-900">
      [{label}]
    </span>
  );
}

/** Renders children only when the claim may be shown, and tags it while unverified. */
export function Claim({
  item,
  children,
  tag = true,
}: {
  item: Verifiable<unknown>;
  children: React.ReactNode;
  tag?: boolean;
}) {
  if (!canShow(item)) return null;
  return (
    <>
      {children}
      {!item.verified && tag ? <VerifyTag /> : null}
    </>
  );
}

/** Wraps a whole block that must not ship until verified. */
export function DraftBlock({
  show,
  children,
  label = 'REPLACE BEFORE LAUNCH',
}: {
  show: boolean;
  children: React.ReactNode;
  label?: string;
}) {
  if (show) return <>{children}</>;
  if (isProduction) return null;
  return (
    <div className="relative rounded-card outline-dashed outline-2 outline-offset-4 outline-yellow-400">
      <span className="absolute -top-3 left-3 z-10 rounded bg-yellow-200 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-yellow-900">
        [{label}]
      </span>
      {children}
    </div>
  );
}

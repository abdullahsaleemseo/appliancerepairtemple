import { Breadcrumbs, type Crumb } from './Breadcrumbs';

/** Dark hero band used by every inner page, so the whole site shares one look. */
export function PageHero({
  crumbs,
  title,
  accent,
  icon,
  children,
  aside,
}: {
  crumbs: Crumb[];
  title: string;
  accent?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink text-white/75">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-flame/25 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-10 h-[380px] w-[380px] rounded-full bg-frost/10 blur-[120px]" />
      <div className={`relative mx-auto max-w-site px-4 pb-16 pt-8 lg:px-6 lg:pb-20 ${aside ? 'grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]' : ''}`}>
        <div>
          <Breadcrumbs items={crumbs} dark />
          <div className="mt-8 flex items-start gap-5">
            {icon ? (
              <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-flame-glow sm:flex">
                {icon}
              </span>
            ) : null}
            <h1 className="h-display max-w-4xl text-[2.6rem] text-white sm:text-6xl lg:text-[4.2rem]">
              {title}
              {accent ? (
                <>
                  {' '}
                  <span className="accent text-flame-glow">{accent}</span>
                </>
              ) : null}
            </h1>
          </div>
          {children ? <div className="mt-7 max-w-3xl">{children}</div> : null}
        </div>
        {aside}
      </div>
    </section>
  );
}

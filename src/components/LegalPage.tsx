import { site } from '@/config/site';
import { Breadcrumbs } from './Breadcrumbs';
import { VerifyTag } from './Verify';

export function LegalPage({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6">
      <Breadcrumbs items={[{ name: title, path }]} />
      <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy">{title}</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Last updated {updated}. Applies to {site.domain}.
        <VerifyTag label="OWNER AND LEGAL REVIEW REQUIRED" />
      </p>
      <div className="prose-copy mt-8 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-navy">
        {children}
      </div>
    </div>
  );
}

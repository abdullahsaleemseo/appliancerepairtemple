import { site } from '@/config/site';
import { PageHero } from './PageHero';
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
    <>
      <PageHero crumbs={[{ name: title, path }]} title={title}>
        <p className="text-white/60">
          Last updated {updated}. Applies to {site.domain}.
          <VerifyTag label="OWNER AND LEGAL REVIEW REQUIRED" />
        </p>
      </PageHero>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="prose-copy [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink">
          {children}
        </div>
      </div>
    </>
  );
}

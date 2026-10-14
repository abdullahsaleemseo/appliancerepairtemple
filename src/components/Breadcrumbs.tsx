import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from './JsonLd';

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const all = [{ name: 'Home', path: '/' }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-[13px] ${dark ? 'text-white/50' : 'text-ink-muted'}`}>
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-2">
              {i > 0 ? <span aria-hidden="true" className="opacity-50">/</span> : null}
              {i === all.length - 1 ? (
                <span aria-current="page" className={dark ? 'text-white/85' : 'text-ink'}>
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className={dark ? 'hover:text-white' : 'hover:text-ink'}>
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}

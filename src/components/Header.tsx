'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { phoneDisplay, routes, site, tel } from '@/config/site';
import { serviceHref, services } from '@/content/services';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { mainNav } from './nav';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open && !menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setMenu(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, menu]);

  const linkCls =
    'whitespace-nowrap rounded-full px-3.5 py-2 text-[14.5px] font-medium text-white/75 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white aria-[current=page]:text-white';

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? 'border-white/[0.08] bg-ink/90 backdrop-blur-xl' : 'border-transparent bg-ink'
      }`}
    >
      <div className={`mx-auto flex max-w-site items-center justify-between gap-4 px-4 transition-[padding] lg:px-6 ${scrolled ? 'py-2.5' : 'py-4'}`}>
        <Link href="/" className="shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-white" aria-label={`${site.brandName} home`}>
          <Logo className="h-11 sm:h-[52px]" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.label} className="relative" onMouseLeave={() => setMenu(false)}>
                  <button
                    type="button"
                    className={`${linkCls} inline-flex items-center gap-1`}
                    aria-expanded={menu}
                    aria-controls="services-menu"
                    onClick={() => setMenu((v) => !v)}
                    onMouseEnter={() => setMenu(true)}
                  >
                    {item.label}
                    <Icon name="chevron" className={`h-4 w-4 transition ${menu ? 'rotate-180' : ''}`} />
                  </button>
                  <div id="services-menu" className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 ${menu ? 'block' : 'hidden'}`}>
                    <ul className="grid grid-cols-2 gap-1 rounded-[22px] border border-sand bg-white p-2 shadow-lift">
                      {services.map((s) => (
                        <li key={s.key}>
                          <Link
                            href={serviceHref(s.key)}
                            className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-canvas focus-visible:bg-canvas focus-visible:outline-none"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-canvas text-ink transition group-hover:bg-flame group-hover:text-white">
                              <Icon name={s.icon} className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block text-[15px] font-semibold text-ink">{s.navLabel}</span>
                              <span className="block text-[13px] leading-snug text-ink-muted">{s.card}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href={routes.cityPage} className="flex h-full items-center justify-between rounded-2xl bg-ink p-4 text-[15px] font-semibold text-white">
                          All repairs in {site.city}
                          <Icon name="arrow" className="h-4 w-4" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} aria-current={pathname === item.href ? 'page' : undefined} className={linkCls}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={tel}
            data-call-location="header"
            aria-label={`Call ${phoneDisplay}`}
            className="inline-flex min-h-[46px] items-center gap-2 whitespace-nowrap rounded-full bg-flame px-4 text-[15px] font-semibold text-white shadow-cta transition hover:-translate-y-0.5 hover:bg-flame-hover focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-flame-bright sm:px-5"
          >
            <Icon name="phone" className="h-[18px] w-[18px]" strokeWidth={2.2} />
            <span className="hidden sm:inline">{phoneDisplay}</span>
          </a>
          <button
            type="button"
            className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`absolute inset-x-0 top-full h-[calc(100dvh-64px)] overflow-y-auto border-t border-white/[0.08] bg-ink px-4 pb-32 pt-2 lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <p className="px-1 pb-3 pt-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/40">Repairs</p>
        <ul className="grid grid-cols-2 gap-2">
          {services.map((s) => (
            <li key={s.key}>
              <Link href={serviceHref(s.key)} className="flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-3 py-3 text-[15px] font-medium text-white">
                <Icon name={s.icon} className="h-5 w-5 shrink-0 text-flame-glow" />
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-6 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {mainNav
            .filter((i) => !i.children)
            .map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex items-center justify-between px-1 py-4 font-display text-xl font-semibold text-white">
                  {item.label}
                  <Icon name="arrow" className="h-5 w-5 text-white/40" />
                </Link>
              </li>
            ))}
        </ul>
        <a
          href={tel}
          className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-flame font-semibold text-white shadow-cta"
          data-call-location="mobile_menu"
        >
          <Icon name="phone" className="h-5 w-5" strokeWidth={2} />
          Call Now {phoneDisplay}
        </a>
      </nav>
    </header>
  );
}

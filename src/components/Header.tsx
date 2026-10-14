'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { phoneDisplay, routes, site, tel } from '@/config/site';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { mainNav } from './nav';
import { btn } from './Buttons';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open && !servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, servicesOpen]);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div
        className={`mx-auto flex max-w-site items-center justify-between gap-4 px-4 transition-[padding] lg:px-6 ${
          scrolled ? 'py-2' : 'py-3 md:py-4'
        }`}
      >
        <Link href="/" className="shrink-0 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy" aria-label={`${site.brandName} home`}>
          <Logo compact={scrolled} />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.label} className="relative" onMouseLeave={() => setServicesOpen(false)}>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[15px] font-semibold text-ink hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((v) => !v)}
                    onMouseEnter={() => setServicesOpen(true)}
                  >
                    {item.label}
                    <Icon name="chevron" className={`h-4 w-4 transition ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <ul
                    id="services-menu"
                    className={`absolute left-0 top-full w-64 rounded-card bg-white p-2 shadow-lift ring-1 ring-slate-100 ${
                      servicesOpen ? 'block' : 'hidden'
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-[15px] text-ink hover:bg-surface focus-visible:bg-surface focus-visible:outline-none"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className="whitespace-nowrap rounded-md px-2.5 py-2 text-[15px] font-semibold text-ink hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy aria-[current=page]:text-brand-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href={routes.request} data-cta="header" className={`${btn.secondary} hidden !min-h-[44px] whitespace-nowrap !px-4 2xl:inline-flex`}>
            Request Service
          </Link>
          <a href={tel} data-call-location="header" className={`${btn.primary} !min-h-[44px] whitespace-nowrap !px-3 text-[15px] sm:!px-4`} aria-label={`Call ${phoneDisplay}`}>
            <Icon name="phone" className="h-5 w-5" strokeWidth={2} />
            <span className="hidden sm:inline">Call {phoneDisplay}</span>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy lg:hidden"
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
        className={`max-h-[calc(100vh-64px)] overflow-y-auto border-t border-slate-100 bg-white px-4 pb-6 lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="divide-y divide-slate-100">
          {mainNav.map((item) =>
            item.children ? (
              <li key={item.label} className="py-2">
                <p className="px-2 py-2 text-sm font-bold uppercase tracking-wide text-ink-muted">{item.label}</p>
                <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="block rounded-md px-2 py-2.5 text-base text-ink hover:bg-surface">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href} className="block px-2 py-3 text-base font-semibold text-ink hover:text-brand-dark">
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <Link href={routes.request} className={`${btn.navy} mt-4 w-full`} data-cta="mobile_menu">
          Request Service
        </Link>
      </nav>
    </header>
  );
}

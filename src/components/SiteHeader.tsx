"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { Icon } from "./Icon";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open) closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className="site-header" data-scrolled={scrolled}>
        <div className="container site-header__inner">
          <Wordmark />
          <nav className="main-nav" aria-label="Fő navigáció">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <a className="btn btn--ghost btn--sm" href={site.hellaUrl} target="_blank" rel="noopener">
              Pályafoglalás
              <Icon name="arrowUpRight" size={15} />
            </a>
            <Link className="btn btn--sm" href="/jelentkezes">
              Jelentkezés
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" size={24} />
              <span className="visually-hidden">Menü megnyitása</span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className="mobile-menu on-dark"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
        inert={!open}
      >
        <div className="mobile-menu__top">
          <Wordmark light />
          <button
            ref={closeRef}
            type="button"
            className="menu-toggle"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
          >
            <Icon name="close" size={24} />
            <span className="visually-hidden">Menü bezárása</span>
          </button>
        </div>
        <nav aria-label="Mobil navigáció">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
            Kezdőlap
          </Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <Link className="btn btn--block" href="/jelentkezes">
            Jelentkezés edzésre
          </Link>
          <a className="btn btn--ghost-dark btn--block" href={site.hellaUrl} target="_blank" rel="noopener">
            Pályafoglalás a Hellán
            <Icon name="arrowUpRight" size={15} />
          </a>
        </div>
        <div className="mobile-menu__contact">
          <a href={site.phone.href}>{site.phone.display}</a>
          <span>{site.address.line}</span>
        </div>
      </div>
    </>
  );
}

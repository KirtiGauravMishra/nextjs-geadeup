"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-extrabold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/institutes" className="btn btn-primary hidden md:inline-flex">
          Partner with us
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M1 4H17M1 9H17M1 14H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface-alt hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/institutes"
              className="btn btn-primary mt-2 justify-center"
              onClick={() => setOpen(false)}
            >
              Partner with us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

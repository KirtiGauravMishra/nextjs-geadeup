import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-alt">
      <div className="gradient-line" aria-hidden="true" />

      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <span className="font-display text-lg font-extrabold tracking-tight text-ink">
              {siteConfig.name}
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{siteConfig.tagline}</p>
          <Link href="/institutes" className="nav-link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink">
            Partner your institute
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6h7M6 2.5 9.5 6 6 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Product</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>
              <Link href="/#courses" className="nav-link">
                Courses, Classes 9–12
              </Link>
            </li>
            <li>
              <Link href="/#lessons" className="nav-link">
                Sample lessons
              </Link>
            </li>
            <li>
              <Link href="/#platform" className="nav-link">
                Live quizzes &amp; mock tests
              </Link>
            </li>
            <li>
              <Link href="/#platform" className="nav-link">
                Study material
              </Link>
            </li>
            <li>
              <Link href="/#platform" className="nav-link">
                Test series &amp; AI analysis
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>
              <Link href="/institutes" className="nav-link">
                For schools &amp; colleges
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>
              <Link href="/legal/terms" className="nav-link">
                Terms of service
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="nav-link">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/legal/refunds" className="nav-link">
                Refund policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.legalName}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <p>Made for students in Classes 9–12.</p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            aria-label={`Email ${siteConfig.contactEmail}`}
            title={siteConfig.contactEmail}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink-soft hover:text-ink"
          >
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M2.5 5 9 10 15.5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

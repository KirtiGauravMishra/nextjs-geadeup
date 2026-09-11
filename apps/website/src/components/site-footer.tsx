import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-alt">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-lg font-extrabold text-ink">
            {siteConfig.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Product</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>
              <Link href="/#courses" className="hover:text-ink">
                Courses, Classes 9–12
              </Link>
            </li>
            <li>
              <Link href="/#lessons" className="hover:text-ink">
                Sample lessons
              </Link>
            </li>
            <li>
              <Link href="/#platform" className="hover:text-ink">
                Live quizzes &amp; mock tests
              </Link>
            </li>
            <li>
              <Link href="/#platform" className="hover:text-ink">
                Study material
              </Link>
            </li>
            <li>
              <Link href="/#platform" className="hover:text-ink">
                Test series &amp; AI analysis
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>
              <Link href="/institutes" className="hover:text-ink">
                For schools &amp; colleges
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>
              <Link href="/legal/terms" className="hover:text-ink">
                Terms of service
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="hover:text-ink">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/legal/refunds" className="hover:text-ink">
                Refund policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.legalName}. All rights reserved.
        </p>
        <p>Made for students in Classes 9–12.</p>
      </div>
    </footer>
  );
}

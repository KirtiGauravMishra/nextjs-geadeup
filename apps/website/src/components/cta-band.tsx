import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="bg-paper py-20">
      <div className="container-page">
        <Reveal className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-line bg-surface-alt px-8 py-14 text-center shadow-[var(--shadow-soft)]">
          <div aria-hidden="true" className="bg-dot-grid pointer-events-none absolute inset-0" />
          <h2 className="font-display relative max-w-lg text-3xl font-extrabold tracking-tight text-ink">
            Ready to bring {siteConfig.name} to your students?
          </h2>
          <p className="relative max-w-md text-sm leading-6 text-muted">
            Tell us about your institute and we&rsquo;ll get a commission agreement drafted within a few
            days.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            <Link href="/institutes" className="btn btn-primary">
              Partner your institute
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Talk to us first
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="bg-paper py-20">
      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl border border-line bg-surface-alt px-8 py-14 text-center">
          <h2 className="font-display max-w-lg text-3xl font-extrabold tracking-tight text-ink">
            Ready to bring {siteConfig.name} to your students?
          </h2>
          <p className="max-w-md text-sm leading-6 text-muted">
            Tell us about your institute and we&rsquo;ll get a commission agreement drafted within a few
            days.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
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

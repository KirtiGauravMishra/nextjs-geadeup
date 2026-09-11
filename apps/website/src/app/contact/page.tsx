import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${siteConfig.name} team.`,
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div aria-hidden="true" className="bg-dot-grid absolute inset-x-0 top-0 h-full" />
      <div className="container-page relative grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h1 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-ink">
            Questions before you commit to anything?
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-ink-soft">
            Whether you&rsquo;re a school evaluating the partnership, a student wanting a preview, or a
            teacher wanting to join us — write in and we&rsquo;ll route it to the right person.
          </p>
          <p className="mt-6 text-sm text-muted">
            Prefer email? Write to{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-medium text-accent-ink underline underline-offset-2"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-line bg-surface-alt p-7 shadow-[var(--shadow-soft)]">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

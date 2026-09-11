import type { Metadata } from "next";
import { InstituteLeadForm } from "@/components/institute-lead-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "For institutes",
  description: "Partner your school or college on a commission agreement.",
};

const terms = [
  {
    term: "Commission model",
    detail: "Percentage of student fees, or a fixed amount per student — set in the agreement.",
    icon: IconPercent,
  },
  {
    term: "Minimum commitment",
    detail: "A minimum number of students over the agreement period, agreed upfront.",
    icon: IconTarget,
  },
  {
    term: "Settlement",
    detail: "Paid out automatically as students pay, on the cycle your agreement sets.",
    icon: IconWallet,
  },
  {
    term: "Your dashboard",
    detail: "Enrolments against commitment, commission earned and pending, student performance.",
    icon: IconChart,
  },
];

export default function InstitutesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-surface-alt py-16 sm:py-20">
        <div aria-hidden="true" className="bg-dot-grid absolute inset-x-0 top-0 h-full" />
        <Reveal className="container-page relative">
          <p className="eyebrow">Partnership program</p>
          <h1 className="font-display mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-ink">
            A revenue-share partnership, not another vendor contract.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-soft">
            You bring the students already in your classrooms. We bring the teaching, the test series and
            the technology. Everything runs on a written commission agreement, so both sides know exactly
            what they&rsquo;re signing up for.
          </p>
        </Reveal>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink">How the agreement works</h2>
            </Reveal>
            <div className="mt-6 space-y-4">
              {terms.map(({ term, detail, icon: Icon }, i) => (
                <Reveal key={term} delay={i * 80}>
                  <div className="flex items-start gap-4 rounded-xl border border-line bg-paper p-4 shadow-[var(--shadow-soft)]">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                      <Icon />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-ink">{term}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">{detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div id="enquire" className="rounded-2xl border border-line bg-surface-alt p-7 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-xl font-bold text-ink">Tell us about your institute</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                We&rsquo;ll come back with a draft commission agreement, usually within a few working days.
              </p>
              <InstituteLeadForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function IconPercent() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="5.5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12.5" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13.5 4.5 4.5 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="9" r="0.9" fill="currentColor" />
    </svg>
  );
}

function IconWallet() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4.5" width="14" height="9.5" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 7.5h14" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12.5" cy="10.7" r="1" fill="currentColor" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 15V7M8 15V3M13 15v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

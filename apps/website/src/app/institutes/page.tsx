import type { Metadata } from "next";
import { InstituteLeadForm } from "@/components/institute-lead-form";

export const metadata: Metadata = {
  title: "For institutes",
  description: "Partner your school or college on a commission agreement.",
};

const terms = [
  {
    term: "Commission model",
    detail: "Percentage of student fees, or a fixed amount per student — set in the agreement.",
  },
  {
    term: "Minimum commitment",
    detail: "A minimum number of students over the agreement period, agreed upfront.",
  },
  {
    term: "Settlement",
    detail: "Paid out automatically as students pay, on the cycle your agreement sets.",
  },
  {
    term: "Your dashboard",
    detail: "Enrolments against commitment, commission earned and pending, student performance.",
  },
];

export default function InstitutesPage() {
  return (
    <>
      <section className="border-b border-line bg-surface-alt py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">Partnership program</p>
          <h1 className="font-display mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-ink">
            A revenue-share partnership, not another vendor contract.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-soft">
            You bring the students already in your classrooms. We bring the teaching, the test series and
            the technology. Everything runs on a written commission agreement, so both sides know exactly
            what they&rsquo;re signing up for.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">How the agreement works</h2>
            <dl className="mt-6 space-y-6">
              {terms.map((item) => (
                <div key={item.term} className="border-t border-line pt-4">
                  <dt className="font-display text-sm font-bold text-ink">{item.term}</dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="enquire" className="rounded-2xl border border-line bg-surface-alt p-7">
            <h2 className="font-display text-xl font-bold text-ink">Tell us about your institute</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              We&rsquo;ll come back with a draft commission agreement, usually within a few working days.
            </p>
            <InstituteLeadForm />
          </div>
        </div>
      </section>
    </>
  );
}

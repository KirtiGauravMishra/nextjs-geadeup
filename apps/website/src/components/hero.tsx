import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";

const facts = [
  { title: "Classes 9–12", detail: "Boards-aligned, subject by subject", icon: IconCap },
  { title: "One login, not three", detail: "Video lessons, notes and tests, together", icon: IconLayers },
  { title: "AI-analysed results", detail: "Every test shows exactly what to revise next", icon: IconSparkle },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div aria-hidden="true" className="bg-dot-grid absolute inset-x-0 top-0 h-full" />
      <div
        aria-hidden="true"
        className="blob absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent-soft opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="blob blob-delay absolute -right-20 top-32 h-80 w-80 rounded-full bg-teal-soft opacity-60 blur-3xl"
      />
      <div className="container-page relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">For schools, colleges &amp; their students</p>
          <h1 className="font-display mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Lessons, live quizzes and tests that show a student exactly where they stand.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-ink-soft">
            {siteConfig.name} gives Class 9–12 students structured video lessons, live quizzes, proctored
            test series and AI-analysed results — delivered through your school or college, on a
            revenue-share you agree to upfront.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/institutes" className="btn btn-primary">
              Partner your institute
            </Link>
            <Link href="#lessons" className="btn btn-ghost">
              Watch a sample lesson
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-5 sm:divide-x sm:divide-line sm:border-t-0 sm:pt-0">
            {facts.map(({ title, detail, icon: Icon }, i) => (
              <div key={title} className={`flex items-start gap-3 ${i > 0 ? "sm:pl-5" : ""}`}>
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                  <Icon />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-ink">{title}</p>
                  <p className="mt-0.5 text-xs leading-5 text-muted">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-[var(--shadow-lifted)]">
            <p className="eyebrow">Sample test result</p>
            <p className="font-display mt-2 text-2xl font-extrabold text-ink">
              Physics · Ch. 4 — Laws of Motion
            </p>
            <div className="mt-5 space-y-3">
              <ResultBar label="Newton's laws" pct={88} tone="teal" />
              <ResultBar label="Free-body diagrams" pct={54} tone="accent" />
              <ResultBar label="Friction" pct={71} tone="teal" />
            </div>
            <p className="mt-5 rounded-lg bg-accent-soft px-3 py-2.5 text-xs font-medium text-accent-ink">
              Weakest topic: Free-body diagrams — 4 linked lessons queued for revision.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ResultBar({
  label,
  pct,
  tone,
}: {
  label: string;
  pct: number;
  tone: "teal" | "accent";
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-medium text-ink-soft">
        <span>{label}</span>
        <span className="tabular-nums">{pct}%</span>
      </div>
      <div className="mt-1.5 h-2 rounded-full bg-line">
        <div
          className={`bar-grow h-full rounded-full ${tone === "teal" ? "bg-teal" : "bg-accent"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function IconCap() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 3 1.5 6.5 9 10l7.5-3.5L9 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4.5 8.2v3.3c0 1 2 2 4.5 2s4.5-1 4.5-2V8.2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M16 6.5v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2.5 2 6l7 3.5L16 6 9 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M2 9.5 9 13l7-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M2 12.5 9 16l7-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 2.5c.4 2.3 1 3.8 2 4.8s2.5 1.6 4.8 2c-2.3.4-3.8 1-4.8 2s-1.6 2.5-2 4.8c-.4-2.3-1-3.8-2-4.8s-2.5-1.6-4.8-2c2.3-.4 3.8-1 4.8-2s1.6-2.5 2-4.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

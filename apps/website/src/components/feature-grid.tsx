import { Reveal } from "@/components/reveal";

const features = [
  {
    title: "Video lessons",
    body: "Every chapter of every subject, Classes 9–12, taught by our own teaching team — not the school's staff.",
    icon: IconPlay,
  },
  {
    title: "Structured notes",
    body: "Downloadable PDF notes mapped to the same chapters as the videos and the tests.",
    icon: IconDoc,
  },
  {
    title: "AI-analysed tests",
    body: "Topic-wise, chapter-wise and full mock tests. Every result points to exactly what to revise next.",
    icon: IconChart,
  },
  {
    title: "Proctored exams",
    body: "Subjective tests run under proctoring, so the results an institute reports actually mean something.",
    icon: IconShield,
  },
];

export function FeatureGrid() {
  return (
    <section id="courses" className="border-b border-line bg-paper py-20">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">What every student gets</p>
          <h2 className="font-display mt-3 max-w-lg text-3xl font-extrabold tracking-tight text-ink">
            Everything for Classes 9–12, in one login.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, body, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="rounded-2xl border border-line bg-paper p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lifted)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                  <Icon />
                </div>
                <h3 className="font-display mt-4 text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconPlay() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M5 3.5v11l9-5.5-9-5.5Z" fill="currentColor" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4.5 2h6l3 3v10.5a.5.5 0 0 1-.5.5h-8.5a.5.5 0 0 1-.5-.5V2.5A.5.5 0 0 1 4.5 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M6.5 9.5h5M6.5 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
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

function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 2 3.5 4v4.5C3.5 12 6 14.5 9 16c3-1.5 5.5-4 5.5-7.5V4L9 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 9 8.5 10.75 11.5 7.25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import { Reveal } from "@/components/reveal";

const items = [
  {
    title: "Live quizzes",
    body: "Short quizzes after every topic, graded instantly with a live leaderboard to keep the class competitive.",
    icon: IconBolt,
  },
  {
    title: "AI report & topic analysis",
    body: "Every quiz and test ends with a full breakdown — strong topics, weak topics, time spent — and exactly what to revise next.",
    icon: IconChart,
  },
  {
    title: "Subjective tests, proctored",
    body: "Long-answer tests run under proctoring with session recording, so the marks an institute reports actually mean something.",
    icon: IconShield,
  },
  {
    title: "Live classes",
    body: "Real-time doubt-clearing sessions with teachers, streamed straight into the same player as the recorded lessons.",
    icon: IconVideo,
    soon: true,
  },
  {
    title: "Study material",
    body: "Chapter-wise notes and downloadable PDFs mapped to the same syllabus as the videos and the tests.",
    icon: IconDoc,
  },
  {
    title: "Mock tests",
    body: "Full-length, board-pattern mock exams with real exam timing, so test day is never the first time it counts.",
    icon: IconClipboard,
  },
  {
    title: "Awards & recognition",
    body: "Top performers each month get certificates and get featured — a reason to keep climbing, not just pass.",
    icon: IconAward,
  },
];

export function PlatformFeatures() {
  return (
    <section id="platform" className="border-b border-line bg-paper py-20">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">The full platform</p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-ink">
            Everything a class actually needs, not just video.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
            Quizzes, proctored tests and AI-analysed reports run alongside the lessons — every result feeds
            straight back into what a student should study next.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, body, icon: Icon, soon }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                <div className="flex items-start justify-between gap-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent-ink transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  {soon && <span className="badge-soon">Coming soon</span>}
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

function IconBolt() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M10 2 4 10.5h4L8 16l6-8.5h-4L10 2Z" fill="currentColor" />
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

function IconVideo() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4.5" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12.5 7.5 16 5.5v7l-3.5-2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
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

function IconClipboard() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="10" height="12.5" rx="1.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 2.5h5v2h-5v-2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M6.5 8.5h5M6.5 11.5h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconAward() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="6.5" r="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 9.8 5.5 15.5 9 13.5l3.5 2-1-5.7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

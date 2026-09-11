import Link from "next/link";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    n: "1",
    title: "Sign a commission agreement",
    body: "A simple written contract: a minimum number of students, and either a percentage or a fixed commission per student.",
  },
  {
    n: "2",
    title: "Enrol your students",
    body: "Bulk-upload your student list once — everyone gets a login and access mapped to their class.",
  },
  {
    n: "3",
    title: "Track everything",
    body: "Your own dashboard shows enrolments against your commitment, and commission as it's earned.",
  },
];

export function PartnerStrip() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="eyebrow text-accent">Running a school or college?</p>
          <h2 className="font-display mt-3 max-w-md text-3xl font-extrabold tracking-tight">
            Bring your students. We handle the teaching, testing and technology.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            You commit a number of students; we pay you a commission on every one who enrols — for as long
            as the agreement runs.
          </p>
          <Link href="/institutes" className="btn btn-primary mt-7 inline-flex">
            See the partnership terms
          </Link>
        </Reveal>

        <ol className="grid gap-5 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} as="li" delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-accent/40">
                <span className="font-display text-2xl font-extrabold text-accent">{step.n}</span>
                <p className="font-display mt-3 text-sm font-bold">{step.title}</p>
                <p className="mt-2 text-xs leading-5 text-white/65">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

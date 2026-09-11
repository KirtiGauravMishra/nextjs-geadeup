import { notFound } from "next/navigation";
import type { Metadata } from "next";

const DOCS: Record<string, { title: string; note: string }> = {
  terms: {
    title: "Terms of Service",
    note: "the terms students, parents and institutes agree to when using the platform",
  },
  privacy: {
    title: "Privacy Policy",
    note: "how student and institute data is collected, used and protected",
  },
  refunds: {
    title: "Refund & Cancellation Policy",
    note: "how refunds and cancellations are handled for paid plans",
  },
};

export function generateStaticParams() {
  return Object.keys(DOCS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: DOCS[slug]?.title ?? "Legal" };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = DOCS[slug];
  if (!doc) notFound();

  return (
    <section className="py-20">
      <div className="container-page max-w-2xl">
        <p className="eyebrow">Legal</p>
        <h1 className="font-display mt-3 text-3xl font-extrabold text-ink">{doc.title}</h1>
        <p className="mt-5 rounded-lg border border-line bg-surface-alt px-4 py-3 text-sm leading-6 text-ink-soft">
          This page is a placeholder. The final {doc.title.toLowerCase()} — covering {doc.note} — will be
          published here before the platform goes live.
        </p>
      </div>
    </section>
  );
}

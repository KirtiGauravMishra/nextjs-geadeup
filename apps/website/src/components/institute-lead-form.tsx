"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

export function InstituteLeadForm() {
  // Only ever embed a Google Forms URL here — this iframe's src is config,
  // not user input, but pinning the host means a wrong paste can't turn into
  // an arbitrary third-party embed on the page.
  if (siteConfig.partnerFormUrl && /^https:\/\/docs\.google\.com\/forms\//.test(siteConfig.partnerFormUrl)) {
    return <EmbeddedForm src={siteConfig.partnerFormUrl} />;
  }
  return <BuiltInForm />;
}

// Google Form embed — swapped in automatically once `siteConfig.partnerFormUrl`
// is set. Google's own domain, standard `embedded=true` iframe pattern; no
// script or credentials of ours cross into it.
function EmbeddedForm({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mt-6 overflow-hidden rounded-xl border border-line bg-paper">
      {!loaded && (
        <div className="flex h-[600px] items-center justify-center text-sm text-muted">
          Loading form…
        </div>
      )}
      <iframe
        src={src}
        title="Partner your institute"
        className={loaded ? "block h-[900px] w-full" : "hidden"}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      >
        Loading…
      </iframe>
    </div>
  );
}

function BuiltInForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: POST to the leads endpoint once the CRM API is live (see FR-CRM-06
    // in the requirements doc — a website enquiry should create a Lead).
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="mt-6 flex items-center gap-2 rounded-lg bg-teal-soft px-4 py-3 text-sm font-medium text-ink">
        <CheckIcon />
        Thanks — that&rsquo;s with our partnerships team. We&rsquo;ll email you shortly.
      </p>
    );
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <Field label="Institute name" name="institute" required />
      <Field label="Your name" name="name" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <Field label="Roughly how many students?" name="students" type="number" />
      <button type="submit" className="btn btn-primary w-full">
        Request a partnership call
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="field-label">{label}</span>
      <input name={name} type={type} required={required} className="field-input" />
    </label>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 9.2 7.8 11.5 12.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

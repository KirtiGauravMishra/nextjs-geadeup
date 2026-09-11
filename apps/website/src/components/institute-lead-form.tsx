"use client";

import { useState, type FormEvent } from "react";

export function InstituteLeadForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: POST to the leads endpoint once the CRM API is live (see FR-CRM-06
    // in the requirements doc — a website enquiry should create a Lead).
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="mt-6 rounded-lg bg-teal-soft px-4 py-3 text-sm font-medium text-ink">
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
      <span className="font-medium text-ink-soft">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-accent"
      />
    </label>
  );
}

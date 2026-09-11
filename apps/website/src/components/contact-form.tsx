"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: wire to a /api/contact route (or straight to Brevo) once the backend exists.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="flex items-center gap-2 rounded-lg bg-teal-soft px-4 py-3 text-sm font-medium text-ink">
        <CheckIcon />
        Message sent. We usually reply within a day.
      </p>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <label className="block text-sm">
        <span className="field-label">Name</span>
        <input name="name" required className="field-input" />
      </label>
      <label className="block text-sm">
        <span className="field-label">Email</span>
        <input name="email" type="email" required className="field-input" />
      </label>
      <label className="block text-sm">
        <span className="field-label">I am a...</span>
        <select name="role" className="field-input">
          <option>Institute / school representative</option>
          <option>Student</option>
          <option>Parent</option>
          <option>Teacher</option>
          <option>Other</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="field-label">Message</span>
        <textarea name="message" rows={4} required className="field-input" />
      </label>
      <button type="submit" className="btn btn-primary w-full">
        Send message
      </button>
    </form>
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

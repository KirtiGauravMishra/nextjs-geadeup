"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: wire to a /api/contact route (or straight to Brevo) once the backend exists.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="rounded-lg bg-teal-soft px-4 py-3 text-sm font-medium text-ink">
        Message sent. We usually reply within a day.
      </p>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <label className="block text-sm">
        <span className="font-medium text-ink-soft">Name</span>
        <input name="name" required className={inputClass} />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-ink-soft">Email</span>
        <input name="email" type="email" required className={inputClass} />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-ink-soft">I am a...</span>
        <select name="role" className={inputClass}>
          <option>Institute / school representative</option>
          <option>Student</option>
          <option>Parent</option>
          <option>Teacher</option>
          <option>Other</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="font-medium text-ink-soft">Message</span>
        <textarea name="message" rows={4} required className={inputClass} />
      </label>
      <button type="submit" className="btn btn-primary w-full">
        Send message
      </button>
    </form>
  );
}

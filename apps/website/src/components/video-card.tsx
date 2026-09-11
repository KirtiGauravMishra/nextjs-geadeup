"use client";

import { useState } from "react";
import type { SampleVideo } from "@/lib/videos";

const TINTS: Record<string, string> = {
  Mathematics: "linear-gradient(135deg,rgba(39,75,138,.55),rgba(107,143,214,.15))",
  Physics: "linear-gradient(135deg,rgba(15,122,104,.55),rgba(87,194,171,.15))",
  Chemistry: "linear-gradient(135deg,rgba(138,74,30,.55),rgba(226,163,95,.15))",
  Biology: "linear-gradient(135deg,rgba(63,107,31,.55),rgba(143,191,90,.15))",
  English: "linear-gradient(135deg,rgba(106,47,102,.55),rgba(180,107,176,.15))",
  "Computer Science": "linear-gradient(135deg,rgba(30,92,106,.55),rgba(79,176,194,.15))",
};

export function VideoCard({ video }: { video: SampleVideo }) {
  const [playing, setPlaying] = useState(false);
  const tint = TINTS[video.subject] ?? "linear-gradient(135deg,rgba(39,75,138,.55),rgba(107,143,214,.15))";

  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lifted)]">
      <div className="relative aspect-video bg-black">
        {/* A real decoded frame from the clip itself, used as the thumbnail —
            `#t=` seeks the frame before any bytes beyond metadata load, so this
            costs no more than a poster image would. No playback controls; the
            overlay button below is what starts real playback. */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={`${video.src}#t=0.5`}
          preload="metadata"
          muted
          playsInline
          aria-hidden="true"
          tabIndex={-1}
        />
        {playing ? (
          <video className="absolute inset-0 h-full w-full" src={video.src} controls autoPlay preload="none" />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center text-white"
            style={{ backgroundImage: tint }}
            aria-label={`Play ${video.title}`}
          >
            <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur-sm">
              {video.grade}
            </span>
            <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2 py-1 text-[11px] font-semibold tabular-nums backdrop-blur-sm">
              {video.duration}
            </span>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur transition group-hover:scale-105 group-hover:bg-white/30">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M5 3.5v11l9-5.5-9-5.5Z" fill="white" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-ink">{video.subject}</p>
        <p className="font-display mt-1 text-base font-bold text-ink">{video.title}</p>
        <p className="mt-1.5 text-sm leading-6 text-muted">{video.description}</p>
      </figcaption>
    </figure>
  );
}

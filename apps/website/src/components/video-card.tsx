"use client";

import { useState } from "react";
import type { SampleVideo } from "@/lib/videos";

const GRADIENTS: Record<string, string> = {
  Mathematics: "linear-gradient(135deg,#274b8a,#6b8fd6)",
  Physics: "linear-gradient(135deg,#0f7a68,#57c2ab)",
  Chemistry: "linear-gradient(135deg,#8a4a1e,#e2a35f)",
  Biology: "linear-gradient(135deg,#3f6b1f,#8fbf5a)",
  English: "linear-gradient(135deg,#6a2f66,#b46bb0)",
  "Computer Science": "linear-gradient(135deg,#1e5c6a,#4fb0c2)",
};

export function VideoCard({ video }: { video: SampleVideo }) {
  const [playing, setPlaying] = useState(false);
  const gradient = GRADIENTS[video.subject] ?? "linear-gradient(135deg,#274b8a,#6b8fd6)";

  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-paper transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <video className="h-full w-full" src={video.src} controls autoPlay preload="none" />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center text-white"
            style={{ backgroundImage: gradient }}
            aria-label={`Play ${video.title}`}
          >
            <span className="absolute left-3 top-3 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
              {video.grade}
            </span>
            <span className="absolute right-3 top-3 rounded-full bg-black/35 px-2 py-1 text-[11px] font-semibold tabular-nums">
              {video.duration}
            </span>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur transition group-hover:scale-105 group-hover:bg-white/25">
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

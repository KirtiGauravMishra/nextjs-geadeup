import { sampleVideos } from "@/lib/videos";
import { VideoCard } from "@/components/video-card";
import { Reveal } from "@/components/reveal";

export function VideoShowcase() {
  return (
    <section id="lessons" className="border-b border-line bg-surface-alt py-20">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Preview clips</p>
            <h2 className="font-display mt-3 max-w-lg text-3xl font-extrabold tracking-tight text-ink">
              Sample lessons from the library
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            One fixed clip per subject while the full catalogue is being recorded — the same player will
            stream the finished lessons from our video host at launch.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleVideos.map((video, i) => (
            <Reveal key={video.id} delay={i * 80}>
              <VideoCard video={video} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

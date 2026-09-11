import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlatformFeatures } from "@/components/platform-features";
import { VideoShowcase } from "@/components/video-showcase";
import { PartnerStrip } from "@/components/partner-strip";
import { CtaBand } from "@/components/cta-band";

// Rendered on every request rather than prerendered once at build time — see
// README.md ("Rendering") for why this marketing site is deployed as an SSR
// Node server rather than a static export.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <PlatformFeatures />
      <VideoShowcase />
      <PartnerStrip />
      <CtaBand />
    </>
  );
}

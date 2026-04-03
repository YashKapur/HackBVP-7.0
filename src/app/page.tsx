"use client";

import { Hero } from "../components/Hero";
import { Hackathon } from "../components/Hackathon";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { MouseGlow } from "../components/ui/MouseGlow";
import { WhyParticipate } from "../components/WhyParticipate";
import { JudgeModeOverlay } from "../components/JudgeModeOverlay";

export default function Home() {
  return (
    <div className="relative z-10 w-full overflow-hidden">
      <MouseGlow />
      <div className="flex flex-col relative z-20">

        {/* Hero — full screen landing section */}
        <Hero />

        {/* New: Why Participate Section */}
        <WhyParticipate />

        {/* Tracks — hackathon highlights / feature cards */}
        <section id="tracks" className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-6xl mt-12 mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter" style={{ color: "var(--foreground)"}}>
              Hackathon <span style={{ color: "var(--primary)"}}>Tracks</span>
            </h2>
          </div>
          <div className="w-full max-w-6xl">
            <Hackathon />
          </div>
        </section>

      </div>
      
      {/* Global Modals/Overlays */}
      <JudgeModeOverlay />
    </div>
  );
}

"use client";

import { Hero } from "../components/Hero";
import { Hackathon } from "../components/Hackathon";
import { AnimatedBackground } from "../components/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative">

      <div className="flex flex-col">

        {/* Hero — full screen landing section */}
        <Hero />

        {/* Tracks — hackathon highlights / feature cards */}
        <section id="tracks" className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <Hackathon />
          </div>
        </section>

      </div>
    </div>
  );
}

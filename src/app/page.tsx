"use client";

import { Hero }              from "@/components/Hero";
import { Hackathon }         from "@/components/Hackathon";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import Timeline              from "@/components/Timeline";

export default function Home() {
  return (
    <div className="relative">
      <AnimatedBackground />

      <div className="flex flex-col">

        {/* Hero — full screen landing section */}
        <Hero />

        {/* Hackathon highlights / feature cards */}
        <section className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <Hackathon />
          </div>
        </section>

        {/* Timeline — replaces EventDetails */}
        <section className="flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <Timeline />
          </div>
        </section>

      </div>
    </div>
  );
}

"use client";

import { HackathonLanding } from "../../components/hackathon/HackathonLanding";
import { HackathonAbout } from "../../components/hackathon/HackathonAbout";
import ProblemStatements from "../../components/ProblemStatements";
import { AnimatedBackground } from "../../components/AnimatedBackground";
import { MouseGlow } from "../../components/ui/MouseGlow";

export default function HackathonPage() {
  return (
    <div className="relative w-full">
      <AnimatedBackground />
      <MouseGlow />

      <div className="flex flex-col w-full z-10 relative">

        <section className="min-h-screen flex items-center justify-center pt-24 pb-10 sm:pb-14">
          <div className="w-full max-w-6xl">
            <HackathonLanding />
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <HackathonAbout />
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <ProblemStatements />
          </div>
        </section>

      </div>
    </div>
  );
}
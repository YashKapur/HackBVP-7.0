"use client";

import Timeline from "../../components/Timeline";
import { AnimatedBackground } from "../../components/AnimatedBackground";

export default function EventsPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="w-full max-w-6xl mx-auto px-4 pt-20">
        <Timeline />
      </div>
    </div>
  );
}

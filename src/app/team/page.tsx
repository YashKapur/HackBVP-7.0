"use client";
import { TeamCardGrid } from "../../components/TeamCard";
import { AnimatedBackground } from "../../components/AnimatedBackground";

export default function TeamPage() {
  return (
    <div className="relative min-h-screen pt-16">
      <AnimatedBackground />
      <TeamCardGrid />
    </div>
  );
}

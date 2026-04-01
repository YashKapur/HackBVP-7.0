"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PromptingIsAllYouNeed } from "../components/ui/animated-hero-section";

// Typewriter cycles through an array of words
function TypewriterWords({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 1800);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed === current) { setPaused(true); return; }
    if (deleting && displayed === "") { setDeleting(false); setIndex(i => i + 1); return; }
    const t = setTimeout(() => {
      setDisplayed(deleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
    }, deleting ? 45 : 120);
    return () => clearTimeout(t);
  }, [displayed, deleting, paused, index, words]);

  return (
    <span style={{ color: "var(--primary)" }}>
      {displayed}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="inline-block w-0.5 h-[0.9em] align-middle ml-1"
        style={{ background: "var(--primary)" }}
      />
    </span>
  );
}

export function Hero() {
  const typewriterWords = ["Innovate.", "Build.", "Compete.", "Win."];

  return (
    <section className="relative">
      {/* Viewport 1: fullscreen pong effect + floating CTAs (HTML is above canvas; not part of ball/pixel physics) */}
      <div className="relative h-[100dvh] w-full overflow-hidden bg-black">
        <PromptingIsAllYouNeed className="absolute inset-0 w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="rounded-2xl border px-4 py-4 sm:px-6 sm:py-5 shadow-[0_12px_48px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            style={{
              borderColor: "rgba(255,255,255,0.18)",
              background:
                "linear-gradient(165deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 45%, rgba(10,12,30,0.65) 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.06) inset, 0 12px 48px rgba(0,0,0,0.45), 0 -1px 24px rgba(207,42,68,0.12)",
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <div
                className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <span>📅 09 APRIL / 15 APRIL, 2026</span>
                <span className="hidden sm:inline" style={{ color: "var(--border)" }}>
                  |
                </span>
                <span>📍 BVCOE / Online</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                <Link
                  href="/hackathon"
                  className="w-full sm:w-auto text-center px-7 py-3 rounded-full font-bold text-white text-sm sm:text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] shadow-lg"
                  style={{ background: "var(--primary)", boxShadow: "0 0 24px rgba(207,42,68,0.45)" }}
                >
                  Tracks
                </Link>
                <Link
                  href="/events"
                  className="w-full sm:w-auto text-center px-7 py-3 rounded-full font-semibold text-sm sm:text-base border transition-all duration-200 hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--foreground)" }}
                >
                  Timeline
                </Link>
              </div>
            </div>
          </motion.div>
        </PromptingIsAllYouNeed>
        {/* Slight vignette to boost contrast/readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Viewport 2: existing hero content (only visible after scrolling) */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16">

        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10 animate-float pointer-events-none" style={{ background: "var(--primary)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 animate-float pointer-events-none" style={{ background: "var(--secondary)", animationDelay: "4s" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          {/* Eyebrow badge */}
         <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="inline-flex items-center gap-3 px-6 py-2 rounded-full border text-base font-medium mb-11"
  style={{ borderColor: "var(--border)", color: "var(--accent)", background: "var(--card-bg)" }}
>
  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--primary)" }} />
  Hack@BVP 7.0
</motion.div>

{/* Typewriter line */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-11 min-h-20 flex items-center justify-center"
>
  <div className="flex items-center justify-center gap-5">
    <div className="relative h-16 w-16 sm:h-20 sm:w-20">
      <Image src="/logo.png" alt="HackBVP logo" fill className="object-contain" priority />
    </div>
    <TypewriterWords words={typewriterWords} />
  </div>
</motion.div>

{/* Subtext */}
<motion.p
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="text-2xl md:text-3xl max-w-3xl mx-auto mb-14 leading-relaxed"
  style={{ color: "rgba(232,232,240,0.6)" }}
>
  Build Beyond Boundaries.
</motion.p>
        </div>
      </div>
    </section>
  );
}

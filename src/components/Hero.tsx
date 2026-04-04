"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { PromptingIsAllYouNeed } from "@/components/ui/animated-hero-section";

// ─── MONO FONT LOADER (Share Tech Mono via Google Fonts) ─────────────────────
function MonoFontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

// ─── COUNTDOWN LOGIC ─────────────────────────────────────────────────────────
const TARGET = new Date("2026-04-09T08:00:00+05:30").getTime();
const START = new Date("2026-04-01T00:00:00+05:30").getTime();

function useCountdown() {
  const [t, setT] = useState({ d: "00", h: "00", m: "00", s: "00", pct: 0, expired: false });
  useEffect(() => {
    const pad = (n: number) => String(Math.max(0, n)).padStart(2, "0");
    const tick = () => {
      const now = Date.now();
      const diff = TARGET - now;
      if (diff <= 0) { setT({ d: "00", h: "00", m: "00", s: "00", pct: 100, expired: true }); return; }
      const total = TARGET - START;
      const elapsed = now - START;
      setT({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
        pct: Math.min(100, Math.max(0, (elapsed / total) * 100)),
        expired: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

// ─── DIGIT UNIT ──────────────────────────────────────────────────────────────
function DigitUnit({ value, label, accent }: { value: string; label: string; accent: "red" | "teal" }) {
  const prevRef = useRef(value);
  const [flipping, setFlipping] = useState(false);
  const [glowing, setGlowing] = useState(false);

  useEffect(() => {
    if (value !== prevRef.current) {
      prevRef.current = value;
      setFlipping(true);
      setGlowing(true);
      setTimeout(() => setFlipping(false), 220);
      setTimeout(() => setGlowing(false), 350);
    }
  }, [value]);

  const redGlow = "radial-gradient(ellipse at 50% 50%, rgba(207,42,68,0.30) 0%, transparent 70%)";
  const tealGlow = "radial-gradient(ellipse at 50% 50%, rgba(30,140,122,0.28) 0%, transparent 70%)";
  const redBorder = "rgba(207,42,68,0.55)";
  const tealBorder = "rgba(30,140,122,0.50)";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div
        style={{
          position: "relative",
          width: 88,
          height: 104,
        }}
      >
        {/* Card bg */}
        <div
          style={{
            position: "absolute", inset: 0,
            borderRadius: 14,
            background: "#161B24",
            border: `1px solid ${glowing ? (accent === "red" ? redBorder : tealBorder) : "rgba(218,217,213,0.07)"}`,
            transition: "border-color 0.25s",
          }}
        />
        {/* Glow overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            borderRadius: 14,
            background: accent === "red" ? redGlow : tealGlow,
            opacity: glowing ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
        {/* Pulse ring on glow */}
        {glowing && (
          <div
            style={{
              position: "absolute", inset: -4,
              borderRadius: 18,
              border: `1px solid ${accent === "red" ? "#CF2A44" : "#1E8C7A"}`,
              animation: "cdRing 0.5s ease-out forwards",
              pointerEvents: "none",
            }}
          />
        )}
        {/* Mid-line */}
        <div
          style={{
            position: "absolute", left: 8, right: 8, top: "50%",
            height: 1, background: "rgba(218,217,213,0.05)", zIndex: 3,
          }}
        />
        {/* Value */}
        <div
          style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 50,
            fontWeight: 400,
            color: "#ffffff",
            letterSpacing: "-2px",
            zIndex: 2,
            animation: flipping ? "cdFlip 0.2s cubic-bezier(0.22,1,0.36,1) both" : "none",
          }}
        >
          {value}
        </div>
      </div>
      <span
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.18em",
          color: "#5A6070",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── FULL COUNTDOWN COMPONENT ────────────────────────────────────────────────
function CoolCountdown() {
  const t = useCountdown();

  if (t.expired) {
    return (
      <div
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "10px 20px", borderRadius: 99,
          background: "rgba(30,140,122,0.15)",
          border: "1px solid rgba(30,140,122,0.35)",
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 13, color: "#1E8C7A", letterSpacing: "0.1em",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1E8C7A", display: "inline-block", animation: "cdPulse 1.5s ease-in-out infinite" }} />
        Hackathon is live!
      </div>
    );
  }

  const sep = (
    <span
      style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 40, color: "#CF2A44", opacity: 0.7,
        lineHeight: "104px", userSelect: "none",
      }}
    >
      :
    </span>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      {/* Label */}
      <span
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 10, letterSpacing: "0.25em",
          color: "#5A6070", textTransform: "uppercase",
        }}
      >
        Round 1 begins in
      </span>

      {/* Digit row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
        <DigitUnit value={t.d} label="days" accent="red" />
        {sep}
        <DigitUnit value={t.h} label="hours" accent="red" />
        {sep}
        <DigitUnit value={t.m} label="mins" accent="teal" />
        {sep}
        <DigitUnit value={t.s} label="secs" accent="teal" />
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "100%", maxWidth: 380, height: 3,
          borderRadius: 2, background: "rgba(218,217,213,0.07)", overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%", borderRadius: 2,
            background: "linear-gradient(to right, #CF2A44, #1E8C7A)",
            width: `${t.pct}%`,
            transition: "width 1s linear",
          }}
        />
      </div>

      {/* Event info */}
      <span
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 11, letterSpacing: "0.1em",
          color: "rgba(218,217,213,0.3)",
        }}
      >
        HackBVP 7.0 &nbsp;·&nbsp; 09 Apr 2026 &nbsp;·&nbsp; 8:00 AM IST
      </span>
    </div>
  );
}

// ─── KEYFRAMES (injected once) ────────────────────────────────────────────────
function CountdownStyles() {
  return (
    <style>{`
      @keyframes cdFlip {
        from { transform: translateY(-10px); opacity: 0; }
        to   { transform: translateY(0);     opacity: 1; }
      }
      @keyframes cdRing {
        from { opacity: 0.7; transform: scale(1); }
        to   { opacity: 0;   transform: scale(1.07); }
      }
      @keyframes cdPulse {
        0%,100% { opacity: 1; }
        50%      { opacity: 0.4; }
      }
    `}</style>
  );
}

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
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
      setDisplayed(deleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1));
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
        style={{ background: "var(--primary)" , textShadow: "0 0 6px var(--primary)" }}
      />
    </span>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const typewriterWords = ["Innovate.", "Build.", "Compete.", "Win."];

  return (
    <section className="relative">
      <MonoFontLoader />
      <CountdownStyles />

      {/* Viewport 1 — fullscreen particle canvas + floating card */}
      <div className="relative h-[100dvh] w-full overflow-hidden bg-black">
        <PromptingIsAllYouNeed className="absolute inset-0 w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="rounded-2xl border px-6 py-7 shadow-[0_12px_48px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            style={{
              borderColor: "rgba(255,255,255,0.14)",
              background:
                "linear-gradient(165deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 45%, rgba(10,12,30,0.70) 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05) inset, 0 12px 48px rgba(0,0,0,0.5), 0 -1px 24px rgba(207,42,68,0.10)",
            }}
          >
            <div className="flex flex-col items-center gap-6">
              {/* Cool countdown */}
              <CoolCountdown />

              {/* Date + location pill */}
              <div
                className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border"
                style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "rgba(255,255,255,0.05)" }}
              >
                <span>📅 09 APRIL – 15 APRIL, 2026</span>
                <span className="hidden sm:inline" style={{ color: "var(--border)" }}>|</span>
                <span>📍 Online + BVCOE, New Delhi</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                <Link
                  href="/hackathon"
                  className="w-full sm:w-auto text-center px-7 py-3 rounded-full font-bold text-white text-sm sm:text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: "var(--primary)", boxShadow: "0 0 24px rgba(207,42,68,0.45)" }}
                >
                  View Tracks
                </Link>
                <Link
                  href="/events"
                  className="w-full sm:w-auto text-center px-7 py-3 rounded-full font-semibold text-sm sm:text-base border transition-all duration-200 hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--foreground)" }}
                >
                  Full Timeline
                </Link>
              </div>
            </div>
          </motion.div>
        </PromptingIsAllYouNeed>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Viewport 2 — below-fold hero content */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-16">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10 animate-float pointer-events-none" style={{ background: "var(--primary)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 animate-float pointer-events-none" style={{ background: "var(--secondary)", animationDelay: "4s" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8"
            style={{ borderColor: "var(--border)", color: "var(--accent)", background: "var(--card-bg)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--primary)" }} />
            CSE Department, BVCOE — Flagship Hackathon
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 min-h-14 flex items-center justify-center"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                <Image src="/logo.png" alt="HackBVP logo" fill className="object-contain" priority />
              </div>
              <TypewriterWords words={typewriterWords} />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(218,217,213,0.6)" }}
          >
            Build Beyond Boundaries. HackBVP 7.0 is an intensive two-phase hackathon — online qualifier on April 9,
            followed by an offline finale at BVCOE on April 15. ₹21,00,000 in prizes await.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { label: "Prize Pool", value: "₹21,00,000" },
              { label: "Hacking", value: "24 Hours" },
              { label: "Participants", value: "1000+" },
              { label: "Tracks", value: "6" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center px-5 py-3 rounded-xl border"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
              >
                <span className="text-xl font-extrabold text-white">{value}</span>
                <span className="text-xs mt-0.5" style={{ color: "rgba(218,217,213,0.45)" }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

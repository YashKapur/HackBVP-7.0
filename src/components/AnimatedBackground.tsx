"use client";
import { motion } from "framer-motion";

/*
  AnimatedBackground — slow-moving radial gradient blobs.
  Colors are derived from the CSS variables in globals.css.
  TODO: Once you finalize your brand colors, update --primary and
  --secondary in globals.css — this background will update automatically.
*/
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Slow animated gradient layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(108,127,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(167,139,250,0.07) 0%, transparent 60%), #0a0a0f",
            "radial-gradient(ellipse 70% 90% at 30% 70%, rgba(167,139,250,0.08) 0%, transparent 60%), radial-gradient(ellipse 90% 60% at 70% 20%, rgba(108,127,255,0.07) 0%, transparent 60%), #0a0a0f",
            "radial-gradient(ellipse 90% 70% at 10% 50%, rgba(108,127,255,0.07) 0%, transparent 60%), radial-gradient(ellipse 70% 100% at 90% 60%, rgba(167,139,250,0.08) 0%, transparent 60%), #0a0a0f",
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(108,127,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(167,139,250,0.07) 0%, transparent 60%), #0a0a0f",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Static floating blobs for depth */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-5 animate-float pointer-events-none"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-5 animate-float pointer-events-none"
        style={{ background: "var(--secondary)", animationDelay: "6s" }}
      />
    </div>
  );
}

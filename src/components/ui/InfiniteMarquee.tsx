"use client";

import { motion } from "framer-motion";

export function InfiniteMarquee() {
  const items = [
    "HACKBVP 7.0",
    "INNOVATE",
    "BUILD",
    "COMPETE",
    "DISRUPT",
    "HACKBVP 7.0",
    "INNOVATE",
    "BUILD",
    "COMPETE",
    "DISRUPT",
  ];

  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-center transform -skew-y-3 sm:-skew-y-6 bg-transparent py-4 sm:py-10 z-0">
      
      {/* Marquee Row 1 */}
      <div className="flex w-[200%] sm:w-[150%]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap"
        >
          {items.map((item, i) => (
            <span
              key={i}
              className="mx-4 text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.07)",
              }}
            >
              {item}
            </span>
          ))}
          {/* Duplicate to create seamless loop */}
          {items.map((item, i) => (
            <span
              key={`dup1-${i}`}
              className="mx-4 text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.07)",
              }}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Reverse direction, different opacity/stroke) */}
      <div className="flex w-[200%] sm:w-[150%] mt-2 sm:mt-6 mix-blend-overlay">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="flex whitespace-nowrap"
        >
          {items.map((item, i) => (
            <span
              key={i}
              className="mx-4 text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(207,42,68,0.1)", // Reddish tint to match HackBVP primary color
              }}
            >
              {item}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, i) => (
            <span
              key={`dup2-${i}`}
              className="mx-4 text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(207,42,68,0.1)",
              }}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
      
    </div>
  );
}

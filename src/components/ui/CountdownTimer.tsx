"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-12 mb-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-20 h-24 sm:w-28 sm:h-32 flex items-center justify-center shadow-[0_0_40px_rgba(207,42,68,0.15)] group transition-all duration-300 hover:shadow-[0_0_60px_rgba(30,140,122,0.3)] hover:border-white/30">
            {/* Glossy top highlight */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-20 pointer-events-none rounded-t-2xl" />
            
            {/* Animated Number flip effect proxy */}
            <AnimatePresence mode="popLayout">
              <motion.span
                key={value}
                initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 inline-block font-mono"
              >
                {value.toString().padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            
            {/* Middle line for classic split-flap look */}
            <div className="absolute inset-x-0 top-1/2 h-px bg-black/40 z-10" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10 transform translate-y-px z-10" />
          </div>
          <span className="mt-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/50">{unit}</span>
        </div>
      ))}
    </div>
  );
}

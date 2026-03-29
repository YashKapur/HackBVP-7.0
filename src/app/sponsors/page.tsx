"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { Sponsors } from "@/components/Sponsors";

export default function SponsorsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="w-full max-w-6xl px-4">
        <Sponsors />
      </div>
    </div>
  );
}

"use client";

import { Sponsors } from "@/components/Sponsors";
import { motion } from "framer-motion";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-[#0F1217] text-[#DAD9D5]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A] bg-clip-text text-transparent">
            Sponsors & Partners
          </h1>

          <p className="text-[#5A6070] mt-4 max-w-2xl mx-auto">
            HackBVP is supported by amazing companies and communities that help
            us build a platform for innovation and learning.
          </p>
        </motion.div>

        <Sponsors />

        {/* CTA */}
        <div className="text-center mt-24">
          <a
            href="https://unstop.com/"
            target="_blank"
            className="px-10 py-4 rounded-xl bg-[#CF2A44] hover:bg-[#AF263C] transition text-white font-semibold shadow-[0_0_25px_rgba(207,42,68,0.35)]"
          >
            Register on Unstop
          </a>
        </div>
      </div>
    </div>
  );
}

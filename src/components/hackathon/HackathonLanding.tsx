"use client";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { FaUsers } from "../../components/ui/Icons";
import { CountdownTimer } from "../../components/ui/CountdownTimer";
import { InfiniteMarquee } from "../../components/ui/InfiniteMarquee";

const spaceGrotesk = Space_Grotesk({ weight: ["400", "600"], subsets: ["latin"] });

export function HackathonLanding() {
  return (
    <section className="relative overflow-hidden py-12 md:py-32 px-4 sm:px-6 lg:px-8 text-white min-h-screen flex items-center">
      {/* Moving bold background text for that hype/crazy feel */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70 pointer-events-none overflow-hidden mix-blend-screen">
        <InfiniteMarquee />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16 md:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`inline-block px-4 py-2 mb-2 rounded-full backdrop-blur-sm border text-sm font-medium ${spaceGrotesk.className}`}
          >
            CSE Department Presents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, filter: "hue-rotate(60deg) drop-shadow(0 0 20px rgba(255,255,255,0.4))", x: [0, -5, 5, -5, 5, 0] }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#CF2A44] via-[#ffffff] to-[#1E8C7A] leading-tight cursor-default tracking-tighter drop-shadow-2xl ${spaceGrotesk.className}`}
          >
            HackBVP 7.0
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl lg:text-3xl font-medium max-w-3xl mx-auto mb-4 sm:mb-6 tracking-wide drop-shadow-md ${spaceGrotesk.className}`}
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Build Beyond Boundaries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CountdownTimer targetDate="2026-04-09T00:00:00" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <a
              href="https://unstop.com/o/KH6O231?lb=nxBNmQKY&utm_medium=Share&utm_source=hackbvpe37162&utm_campaign=Online_coding_challenge" target="_blank" rel="noopener noreferrer"
              className="group relative overflow-hidden px-8 py-4 sm:px-10 sm:py-5 font-bold rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg hover:scale-105"
              style={{ background: "var(--primary)" }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="absolute inset-x-0 w-1/4 h-full bg-white opacity-40 skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10 text-white">Register Now</span> 
              <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300 text-white" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 sm:px-10 sm:py-5 font-bold rounded-full backdrop-blur-md transition-all duration-300 text-base sm:text-lg border hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Stats — TODO: Update all values to match your event */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-5xl mx-auto"
        >
          <StatCard icon={<FaTrophy className="w-6 h-6" />} value="₹21,00,000" label="In Prizes" color="from-[#CF2A44] to-[#AF263C]" />
          <StatCard icon={<FaCalendarAlt className="w-6 h-6" />} value="24 Hours" label="Of Hacking" color="from-[#1E8C7A] to-[#166B5F]" />
          <StatCard icon={<FaUsers className="w-6 h-6" />} value="1000+" label="Participants" color="from-[#CF2A44] to-[#AF263C]" />
          <StatCard icon={<FaMapMarkerAlt className="w-6 h-6" />} value="Hybrid" label="Live & In-Action" color="from-[#1E8C7A] to-[#166B5F]" />
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <motion.div
      className="p-2 sm:p-4 md:p-6 rounded-xl h-full flex flex-col items-center text-center w-full"
      style={{ background: "rgba(218,217,213,0.04)"}}
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <div className={`w-8 h-8 sm:w-16 sm:h-16 mb-1 sm:mb-3 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${color}`}>
        {icon}
      </div>
      <h3 className="text-sm sm:text-2xl font-bold mb-0.5 sm:mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A]">
        {value}
      </h3>
      <p className="text-[10px] sm:text-sm leading-tight font-medium" style={{ color: "rgba(218,217,213,0.6)" }}>
        {label}
      </p>
    </motion.div>
  );
}

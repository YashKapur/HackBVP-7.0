"use client";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { FaUsers } from "../../components/ui/Icons";

const spaceGrotesk = Space_Grotesk({ weight: ["400", "600"], subsets: ["latin"] });

export function HackathonLanding() {
  return (
    <section className="relative overflow-hidden py-12 md:py-32 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">

          {/* TODO: Replace with your org/event presenter line */}
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
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-4xl sm:text-6xl md:text-7xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#CF2A44] via-[#AF263C] to-[#1E8C7A] leading-tight ${spaceGrotesk.className}`}
          >
            HackBVP 7.0
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-base md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 ${spaceGrotesk.className}`}
            style={{ color: "rgba(218,217,213,0.7)" }}
          >
            Build Beyond Boundaries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            {/* TODO: Update href to your registration link */}
            <a
              href="#register"
              className="px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base hover:opacity-90"
              style={{ background: "var(--primary)", boxShadow: "0 0 24px rgba(207,42,68,0.35)" }}
            >
              Register Now <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
            <a
              href="#about"
              className="px-6 sm:px-8 py-3 sm:py-4 font-medium rounded-full backdrop-blur-sm transition-all duration-300 text-sm sm:text-base border hover:bg-white/5"
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

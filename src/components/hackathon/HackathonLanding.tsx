"use client";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { FaUsers } from "@/components/ui/Icons";

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
            className={`inline-block px-4 py-2 mb-2 rounded-full backdrop-blur-sm bg-black/20 border border-white/10 text-blue-300 text-2xl font-medium ${spaceGrotesk.className}`}
          >
            YOUR ORG Presents
          </motion.div>

          {/* TODO: Replace with your hackathon/event name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-4xl sm:text-6xl md:text-7xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 leading-tight ${spaceGrotesk.className}`}
          >
            YOUR HACKATHON NAME
          </motion.h1>

          {/* TODO: Replace with your hackathon tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-base md:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 ${spaceGrotesk.className}`}
          >
            Your hackathon tagline goes here
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
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Register Now <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
            <a
              href="#about"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
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
          <StatCard icon={<FaTrophy className="w-6 h-6" />}    value="₹X,XX,XXX"  label="In Prizes"      color="from-yellow-400 to-yellow-600" />
          <StatCard icon={<FaCalendarAlt className="w-6 h-6" />} value="XX Hours"  label="Of Hacking"    color="from-blue-400 to-blue-600" />
          <StatCard icon={<FaUsers className="w-6 h-6" />}      value="XXX+"       label="Participants"  color="from-green-400 to-green-600" />
          <StatCard icon={<FaMapMarkerAlt className="w-6 h-6" />} value="Offline"  label="Live & In-Action" color="from-purple-400 to-purple-600" />
        </motion.div>
      </div>

      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-green-500/10 rounded-full filter blur-3xl animate-float animation-delay-2000" />
    </section>
  );
}

function StatCard({ icon, value, label, color }: { icon: React.ReactNode; value: string; label: string; color: string }) {
  return (
    <motion.div
      className="p-2 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all h-full flex flex-col items-center text-center w-full group"
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <div className={`w-8 h-8 sm:w-16 sm:h-16 mb-1 sm:mb-3 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${color}`}>
        {icon}
      </div>
      <h3 className="text-sm sm:text-2xl font-bold mb-0.5 sm:mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">{value}</h3>
      <p className="text-[10px] sm:text-sm text-white/80 leading-tight font-medium">{label}</p>
    </motion.div>
  );
}

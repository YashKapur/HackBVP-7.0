"use client";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";

const spaceGrotesk = Space_Grotesk({ weight: ["400", "600"], subsets: ["latin"] });

export function HackathonAbout() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* TODO: Replace with your hackathon/event name */}
          <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6 ${spaceGrotesk.className}`}>
            About YOUR HACKATHON
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            <div className="text-center">
              {/* TODO: Replace with your about section headline */}
              <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                Your About Section Headline
              </h3>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              {/* TODO: Replace with your hackathon/event description paragraph */}
              <p className="text-slate-300 text-sm sm:text-lg leading-relaxed mb-8">
                Write a 3–5 sentence description of your hackathon or event here.
                Explain what it is, who it&apos;s for, what participants will do, and
                why it matters. This is your pitch — make it compelling.
              </p>

              {/* TODO: Update all stat numbers to reflect your event */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <StatCard number="XX"   label="Hours" />
                <StatCard number="XXX+" label="Registrations" />
                <StatCard number="XX+"  label="Problems" />
                <StatCard number="X"    label="Tracks" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
      <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{number}</div>
      <div className="text-slate-300 text-xs sm:text-sm font-medium mt-1 sm:mt-2">{label}</div>
    </div>
  );
}

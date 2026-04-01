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
          <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A] mb-6 ${spaceGrotesk.className}`}>
            About HackBVP 7.0
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A] mx-auto mb-6" />
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
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                Flagship Event of BVCOE CSE Department
              </h3>
            </div>

            <div className="backdrop-blur-sm p-8 rounded-2xl border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                <p className="text-sm sm:text-lg leading-relaxed mb-8" style={{ color: "rgba(218,217,213,0.7)" }}>
                HackBVP@7.0 is an intensive two-phase innovation hackathon that brings together bright student minds to ideate, prototype, and build impactful tech solutions in a high-energy, mentor-driven environment. Whether you are passionate about AI, full-stack development, cybersecurity, or have a bold idea, this is your stage.
              </p>
              <p className="text-sm sm:text-lg leading-relaxed mb-8" style={{ color: "rgba(218,217,213,0.7)" }}>
                it begins with an online qualifier where teams showcase creativity and problem-solving skills, followed by an offline finale at Bharati Vidyapeeth College of Engineering, where finalists build and pitch their solutions to industry experts. With multiple tracks, mentorship, and exciting rewards, HackBVP@7.0 is a launchpad for future innovators.
                </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <StatCard number="24" label="Hours" />
                <StatCard number="XXX+" label="Registrations" />
                <StatCard number="20+" label="Problems" />
                <StatCard number="6" label="Tracks" />
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
    <div
      className="backdrop-blur-sm p-6 rounded-xl border text-center transition-all duration-300 hover:shadow-lg"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--border)",
        boxShadow: undefined,
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(207,42,68,0.12)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "")}
    >
      <div className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A]">
        {number}
      </div>
      <div className="text-xs sm:text-sm font-medium mt-1 sm:mt-2" style={{ color: "rgba(218,217,213,0.6)" }}>
        {label}
      </div>
    </div>
  );
}

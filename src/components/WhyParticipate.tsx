"use client";
import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaUsers, FaMedal } from "react-icons/fa";

const benefits = [
  {
    title: "Real-world Problem Solving",
    description: "Tackle unique industry problems, pushing the boundaries of green energy and AI tech.",
    icon: <FaCode className="w-6 h-6" />,
  },
  {
    title: "Prizes & Recognition",
    description: "Compete for a prize pool of ₹21,00,000, along with internships and elite mentorships.",
    icon: <FaTrophy className="w-6 h-6" />,
  },
  {
    title: "Elite Networking",
    description: "Connect with industry leaders, top engineers, and potential co-founders directly.",
    icon: <FaUsers className="w-6 h-6" />,
  },
  {
    title: "Career Growth",
    description: "Showcase your technical prowess in front of our incredible sponsor lineup and recruiters.",
    icon: <FaMedal className="w-6 h-6" />,
  },
];

export function WhyParticipate() {
  return (
    <section className="py-24 relative overflow-hidden z-10" style={{ background: "var(--background)" }}>
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, var(--primary), transparent 70%)" }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter shadow-sm" style={{ color: "var(--foreground)" }}>
            Why <span style={{ color: "var(--primary)" }}>Participate?</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "rgba(200,200,210,0.7)" }}>
            Discover why HackBVP 7.0 is the definitive hackathon experience of the year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-2xl border transition-all duration-300 relative group overflow-hidden"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg" style={{ background: "var(--primary)", color: "white" }}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{item.title}</h3>
              <p className="leading-relaxed" style={{ color: "rgba(200,200,210,0.7)" }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

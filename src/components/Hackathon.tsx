"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaLaptopCode, FaLeaf, FaRobot } from "react-icons/fa";

export function Hackathon() {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "FinTech & Web3",
      description: "Revolutionize finance using decentralized tech and cutting-edge financial algorithms.",
      icon: <FaLaptopCode className="w-8 h-8" />,
      detailedInfo: {
        problem: "Design trustless escrow services and high-frequency trading bots.",
        examples: ["DeFi micro-lending platform", "Blockchain credential verification", "AI Stock predictor"]
      }
    },
    {
      id: 2,
      title: "Sustainability",
      description: "Tackle real-world problems in environmental technology, sustainable development, and green energy.",
      icon: <FaLeaf className="w-8 h-8" />,
      detailedInfo: {
        problem: "Create scalable platforms to measure and mitigate carbon footprints for individual households.",
        examples: ["Carbon offset marketplace", "IoT smart waste management", "Solar output optimizer"]
      }
    },
    {
      id: 3,
      title: "AI & Neural Networks",
      description: "Leverage machine learning to build intelligent systems that disrupt traditional workflows.",
      icon: <FaRobot className="w-8 h-8" />,
      detailedInfo: {
        problem: "Build accessible AI agents that can assist with daily complex computing tasks.",
        examples: ["Diagnostic medical AI", "Automated code reviewers", "Generative music producer"]
      }
    },
  ];

  return (
    <div className="relative py-12 overflow-hidden z-10 w-full">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-20">
        
        {/* Feature cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="p-8 rounded-2xl border cursor-pointer relative group overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedTrack(feature.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div
                className="w-16 h-16 mb-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                style={{ background: "var(--primary)", color: "white" }}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{feature.title}</h3>
              <p className="leading-relaxed" style={{ color: "rgba(232,232,240,0.6)" }}>{feature.description}</p>
              
              <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300" style={{ color: "var(--primary)" }}>
                Explore Track <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedTrack && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm pointer-events-auto"
              onClick={() => setSelectedTrack(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-2xl rounded-3xl p-8 shadow-2xl relative border"
                style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedTrack(null)}
                  className="absolute top-6 right-6 text-2xl text-white/50 hover:text-white leading-none"
                >
                  &times;
                </button>

                {features.filter(f => f.id === selectedTrack).map(track => (
                  <div key={track.id}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: "var(--primary)" }}>
                        {track.icon}
                      </div>
                      <h2 className="text-3xl font-black" style={{ color: "var(--foreground)" }}>{track.title}</h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-bold mb-2" style={{ color: "var(--primary)" }}>Problem Statement</h4>
                        <p className="text-lg leading-relaxed" style={{ color: "rgba(232,232,240,0.8)" }}>{track.detailedInfo.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-bold mb-3" style={{ color: "var(--secondary)" }}>Example Ideas</h4>
                        <ul className="space-y-2">
                          {track.detailedInfo.examples.map((ex, i) => (
                            <li key={i} className="flex items-center gap-3 text-base" style={{ color: "rgba(232,232,240,0.7)" }}>
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--secondary)" }} />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA buttons */}
        <div className="mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://unstop.com/o/KH6O231?lb=nxBNmQKY&utm_medium=Share&utm_source=hackbvpe37162&utm_campaign=Online_coding_challenge" target="_blank" rel="noopener noreferrer"
            className="px-10 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 shadow-xl"
            style={{ background: "var(--primary)", boxShadow: "0 0 24px rgba(207,42,68,0.4)" }}
          >
            Register Now
          </Link>
          <Link
            href="/hackathon"
            className="px-10 py-4 rounded-full font-bold border transition-all duration-300 hover:bg-white/5"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
          >
            View All Rules
          </Link>
        </div>

      </div>
    </div>
  );
}

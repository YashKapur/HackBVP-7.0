"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "EcoTrack",
    description: "An AI-powered carbon footprint tracker parsing satellite data to measure local commercial emissions in real-time.",
    tags: ["AI", "Green Energy", "Next.js"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "NeuroLink VR",
    description: "Immersive educational system utilizing WebXR to help medical students visualize and interact with complex organs.",
    tags: ["WebXR", "Three.js", "HealthTech"],
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "DeFi Trust",
    description: "A decentralized escrow service eliminating intermediary fees with verifiable multi-sig smart contracts on Ethereum.",
    tags: ["Blockchain", "Solidity", "FinTech"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4e2088?auto=format&fit=crop&q=80&w=800",
  }
];

export function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-24 relative z-10" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter" style={{ color: "var(--foreground)" }}>
            Project <span style={{ color: "var(--secondary)" }}>Showcase</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(200,200,210,0.7)" }}>
            Explore past innovations and sample ideas from our world-class participants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl border"
              style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
            >
              {/* Project Image */}
              <div className="w-full h-48 relative overflow-hidden">
                <motion.div
                  animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>{project.title}</h3>
                <p className="text-sm mb-4 line-clamp-3" style={{ color: "rgba(200,200,210,0.7)" }}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "rgba(30,140,122,0.15)", color: "var(--secondary)", border: "1px solid rgba(30,140,122,0.3)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none ring-2 ring-inset"
                    style={{ borderColor: "var(--secondary)" }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

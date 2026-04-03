"use client";
import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--background)" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter" style={{ color: "var(--foreground)" }}>
            What is <span style={{ color: "var(--primary)" }}>HackBVP?</span>
          </h2>
          <p className="text-lg mx-auto" style={{ color: "rgba(200,200,210,0.7)" }}>
            A glimpse into our previous groundbreaking hackathons.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full overflow-hidden rounded-3xl shadow-2xl border"
          style={{ paddingBottom: "56.25%", borderColor: "var(--border)", background: "var(--card-bg)" }}
        >
          {/* Replace this YouTube embed with your actual hackathon video URL */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
            title="HackBVP Promo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ weight: ["400", "600"], subsets: ["latin"] });

export function Hackathon() {
  const features = [
    {
      // TODO: Replace title and description with your own hackathon highlight
      title: "Challenges",
      description: "Describe the kind of problems participants will tackle. What domains, what difficulty level, what real-world impact?",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />,
    },
    {
      // TODO: Replace title and description
      title: "Duration",
      description: "How long is the hackathon? What does the schedule look like? Mention mentorship, workshops, or any other support available.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      // TODO: Replace title and description
      title: "Prizes",
      description: "What do winners get? Cash prizes, mentorship, internship opportunities, certificates? Make it compelling.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
  ];

  return (
    <section id="hackathon" className="relative py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative p-8 lg:p-12">

          {/* Banner image — TODO: Add your own banner to /public/ and update src */}
          <motion.div
            className="w-full max-w-3xl mx-auto mb-12 rounded-3xl overflow-hidden flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxHeight: '40vh' }}
          >
            {/*
              TODO: Replace /your-banner.png with your actual hackathon banner.
              Recommended size: 1200x400px, PNG or JPG.
              Drop the file into /public/ first.
            */}
            <div
              className="w-full h-48 rounded-3xl flex items-center justify-center border"
              style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
            >
              <p className="text-sm" style={{ color: "rgba(232,232,240,0.3)" }}>
                TODO: Replace with your hackathon banner image
              </p>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div
                  className="w-12 h-12 mb-4 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(108,127,255,0.1)" }}
                >
                  <svg className="w-6 h-6" style={{ color: "var(--primary)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p style={{ color: "rgba(232,232,240,0.6)" }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
            {/* TODO: Update href to your registration link */}
            <button
              className="px-8 py-3.5 rounded-full font-bold text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--primary)" }}
            >
              Register Now
            </button>
            {/* TODO: Update href to your hackathon detail page */}
            <Link
              href="/hackathon"
              className="px-8 py-3.5 rounded-full font-bold border transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

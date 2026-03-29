"use client";
import { motion } from "framer-motion";
import { FaUsers, FaHandshake, FaLightbulb, FaTrophy } from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ weight: ["400", "600"], subsets: ["latin"] });

type FeatureCardProps = { icon: React.ReactNode; title: string; description: string; delay: number };

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full flex flex-col"
  >
    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">{title}</h3>
    <p className="text-slate-300/90 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export function EventDetails() {
  const features = [
    // TODO: Replace all four feature cards with your own event highlights
    {
      icon: <FaUsers />,
      title: "Feature / Highlight 1",
      description: "Describe the first key feature or selling point of your event. What makes it unique or valuable for participants?",
    },
    {
      icon: <FaHandshake />,
      title: "Feature / Highlight 2",
      description: "Describe the second key feature. Think about networking, industry connections, or collaborative opportunities.",
    },
    {
      icon: <FaLightbulb />,
      title: "Feature / Highlight 3",
      description: "Describe the third key feature. What will participants learn or gain? What skills will they use or develop?",
    },
    {
      icon: <FaTrophy />,
      title: "Feature / Highlight 4",
      description: "Describe the fourth key feature. Prizes, recognition, or career benefits are great things to highlight here.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        {/* TODO: Replace with your event section headline */}
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 mb-6 leading-tight ${spaceGrotesk.className}`}>
          Your Section Headline Here
        </h2>
        {/* TODO: Replace with your section subtext */}
        <p className="text-slate-300 max-w-3xl mx-auto text-lg">
          A short supporting line that gives context to the section above.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} delay={index} />
        ))}
      </div>
    </section>
  );
}

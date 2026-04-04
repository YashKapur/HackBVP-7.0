"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProblemStatementCardProps {
  title: string;
  description: string;
  theme: string;
  index: number;
  icon: string;
}

const ProblemStatementCard: React.FC<ProblemStatementCardProps> = ({ title, description, theme, index, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className={`${theme} rounded-2xl p-0.5 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
        <div className="h-full bg-[#161B24]/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col relative overflow-hidden">
          <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>
          <p className="text-[#DAD9D5] flex-grow mb-3 leading-relaxed text-sm">{description}</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-auto w-full py-2 px-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20 text-sm"
          >
            Download Problem Statement
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ProblemStatements: React.FC = () => {
  const problemStatements = [
 
    {
      title: "AI & Machine Learning",
      description: "Build intelligent systems that learn, predict, or automate. Think smart tools, recommendation engines, NLP applications, or computer vision solutions.",
      theme: "bg-gradient-to-br from-[#CF2A44] to-[#AF263C]",
      icon: "🤖",
      downloadLink: "/problem-statement.pdf",
    },
    {
      title: "Fintech & Web3",
      description: "Reimagine finance, payments, or decentralized systems. From digital banking tools to blockchain-based applications and smart contracts.",
      theme: "bg-gradient-to-br from-[#1E8C7A] to-[#166B5F]",
      icon: "💸",
      downloadLink: "/problem-statement-sustainability.pdf",
    },
    {
      title: "Health & Well-being",
      description: "Technology that improves physical or mental health outcomes. Telemedicine, fitness tracking, mental health support, or healthcare accessibility tools.",
      theme: "bg-gradient-to-br from-[#CF2A44] to-[#AF263C]",
      icon: "🔬",
      downloadLink: "/problem-statement-sustainability.pdf",
    },
    {
      title: "Sustainability & Smart Cities",
      description: "Solutions tackling climate, energy, waste, or urban infrastructure. Build for a greener, more connected world.",
      theme: "bg-gradient-to-br from-[#1E8C7A] to-[#166B5F]",
      icon: "🌱",
      downloadLink: "/problem-statement-sustainability.pdf",
    },
    {
      title: "Cybersecurity & Privacy",
      description: "Protect systems, data, and people in an increasingly connected world. Think threat detection, secure communication, or privacy-first applications.",
      theme: "bg-gradient-to-br from-[#CF2A44] to-[#AF263C]",
      icon: "🔐",
      downloadLink: "/problem-statement-sustainability.pdf",
    },
    {
      title: "EdTech & Social Impact",
      description: "Use technology to democratize education or drive meaningful social change. Accessibility tools, learning platforms, or community-driven applications.",
      theme: "bg-gradient-to-br from-[#1E8C7A] to-[#166B5F]",
      icon: "🎓",
      downloadLink: "/problem-statement-sustainability.pdf",
    }
    ,
  ];

  return (
    <section className="py-8 px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-96 h-96 bg-[#CF2A44] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" />
        <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-[#1E8C7A] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {/* TODO: Replace section heading if needed */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#CF2A44] via-[#AF263C] to-[#1E8C7A] bg-clip-text text-transparent">
            Problem Tracks
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A] mx-auto mb-4 rounded-full" />
          {/* TODO: Replace subtext */}
          <p className="text-lg text-[#DAD9D5] max-w-2xl mx-auto leading-relaxed">
            Choose your challenge and build innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {problemStatements.map((problem, index) => (
            <ProblemStatementCard key={index} {...problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;

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
        <div className="h-full bg-[#111827]/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col relative overflow-hidden">
          <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>
          <p className="text-[#E5E7EB] flex-grow mb-3 leading-relaxed text-sm">{description}</p>
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
    // TODO: Replace all entries with your actual problem tracks
    // Each entry needs: title, description, theme (gradient class), icon (emoji)
    {
      title: "Problem Track 1",
      description: "Describe the first problem track here. What challenge does it address? Who should attempt it? What kinds of solutions are expected?",
      theme: "bg-gradient-to-br from-[#38BDF8] to-[#3B82F6]",
      icon: "🔧",
    },
    {
      title: "Problem Track 2",
      description: "Describe the second problem track here. What challenge does it address? Who should attempt it? What kinds of solutions are expected?",
      theme: "bg-gradient-to-br from-[#36D399] to-[#10B981]",
      icon: "💡",
    },
    {
      title: "Problem Track 3",
      description: "Describe the third problem track here. What challenge does it address? Who should attempt it? What kinds of solutions are expected?",
      theme: "bg-gradient-to-br from-[#0EA5E9] to-[#2563EB]",
      icon: "🚀",
    },
    {
      title: "Problem Track 4",
      description: "Describe the fourth problem track here. What challenge does it address? Who should attempt it? What kinds of solutions are expected?",
      theme: "bg-gradient-to-br from-[#F59E0B] to-[#D97706]",
      icon: "🌱",
    },
    {
      title: "Problem Track 5",
      description: "Describe the fifth problem track here. What challenge does it address? Who should attempt it? What kinds of solutions are expected?",
      theme: "bg-gradient-to-br from-[#A855F7] to-[#9333EA]",
      icon: "🎯",
    },
    {
      title: "Problem Track 6",
      description: "Describe the sixth problem track here. What challenge does it address? Who should attempt it? What kinds of solutions are expected?",
      theme: "bg-gradient-to-br from-[#14B8A6] to-[#06B6D4]",
      icon: "🔬",
    },
    // TODO: Add or remove tracks as needed
  ];

  return (
    <section className="py-8 px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-96 h-96 bg-[#36D399] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" />
        <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000" />
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#36D399] via-[#38BDF8] to-[#2563EB] bg-clip-text text-transparent">
            Problem Tracks
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#36D399] to-[#38BDF8] mx-auto mb-4 rounded-full" />
          {/* TODO: Replace subtext */}
          <p className="text-lg text-[#E5E7EB] max-w-2xl mx-auto leading-relaxed">
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

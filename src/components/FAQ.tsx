"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can participate in HackBVP?",
    answer: "Any undergraduate student can participate.",
  },
  {
    question: "Is there any registration fee?",
    answer: "No, the hackathon is free.",
  },
  {
    question: "Team size?",
    answer: "2 to 4 members per team.",
  },
  {
    question: "Where is the event?",
    answer: "BVCOE New Delhi.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="ml-24 px-6 py-16 min-h-screen bg-[#0f1217] text-white">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-10">FAQs</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-[#1a1f27] transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg">{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

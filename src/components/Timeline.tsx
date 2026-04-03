"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type TimelineEvent = {
  day: string;
  time: string;
  title: string;
  description: string;
  status: "completed" | "live" | "upcoming";
  location?: string;
};

// Simplified sample data
const schedule: { day: string; events: TimelineEvent[] }[] = [
  {
    day: "Day 1 — 09 April 2026",
    events: [
      { day: "Day 1", time: "08:00 AM", title: "Registration Opens", description: "Participants check-in.", status: "completed" },
      { day: "Day 1", time: "11:00 AM", title: "Hack Begins", description: "Ideation phase starts.", status: "live" },
      { day: "Day 1", time: "05:00 PM", title: "Round 1 Judging", description: "Panel evaluation.", status: "upcoming" },
    ],
  },
  {
    day: "Day 2 — 15 April 2026",
    events: [
      { day: "Day 2", time: "09:00 AM", title: "Mentorship Round 2", description: "Code review with mentors.", status: "upcoming" },
      { day: "Day 2", time: "06:00 PM", title: "Final Pitch", description: "Top 10 teams pitch.", status: "upcoming" },
    ],
  }
];

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start 80%", "end 20%"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const bgActive = useTransform(scrollYProgress, [0, 0.5], ["var(--card-bg)", "rgba(207,42,68,0.1)"]);
  const borderActive = useTransform(scrollYProgress, [0, 0.5], ["var(--border)", "var(--primary)"]);

  // For the dot highlight
  const dotScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const dotColor = useTransform(scrollYProgress, [0, 0.5], ["#333", "var(--primary)"]);

  return (
    <div ref={cardRef} className="relative flex gap-6 mb-12 w-full">
      {/* Scroll-Spy Dot */}
      <div className="flex flex-col items-center absolute left-0 sm:left-1/2 sm:-ml-2.5 top-0 h-full z-10 w-5">
        <motion.div
          style={{ scale: dotScale, background: dotColor }}
          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-[#0F1217] shadow-xl mt-4 z-20"
        />
      </div>

      {/* Card Body - Alternating layout for desktop */}
      <motion.div 
        style={{ scale, opacity, borderColor: borderActive, background: bgActive }}
        className={`flex-1 rounded-2xl p-6 md:p-8 border shadow-lg ml-8 sm:ml-0 ${index % 2 === 0 ? "sm:mr-[50%] sm:pr-12 md:pr-16" : "sm:ml-[50%] sm:pl-12 md:pl-16"} transition-shadow duration-300 hover:shadow-2xl`}
      >
        <span className="text-sm font-bold uppercase tracking-widest mb-2 block" style={{ color: "var(--primary)" }}>{event.time}</span>
        <h3 className="text-xl md:text-2xl font-black text-white mb-3">{event.title}</h3>
        <p className="text-base leading-relaxed" style={{ color: "rgba(232,232,240,0.7)" }}>{event.description}</p>
        {event.location && <p className="text-sm mt-4 font-mono font-medium" style={{ color: "var(--secondary)" }}>📍 {event.location}</p>}
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // High-performance scroll tracking for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter" style={{ color: "var(--foreground)"}}>
            Event <span style={{ color: "var(--primary)"}}>Timeline</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(200,200,210,0.7)" }}>
            Our 24-hour journey from ideation to final pitch.
          </p>
        </motion.div>

        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute left-2 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-1 rounded-full" style={{ background: "var(--border)" }} />
          
          {/* Animated Scroll Progress Line */}
          <motion.div 
            className="absolute left-2 sm:left-1/2 transform sm:-translate-x-1/2 top-0 w-1 rounded-full z-0 origin-top"
            style={{ background: "linear-gradient(to bottom, var(--primary), var(--secondary))", height: lineHeight }} 
          />

          {schedule.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10 sm:text-center w-full sm:mx-auto max-w-[200px] z-10 relative bg-[#0F1217] py-2"
              >
                <span className="px-6 py-2 rounded-full font-bold text-sm border uppercase tracking-wider" style={{ background: "var(--card-bg)", borderColor: "var(--border)", color: "var(--foreground)" }}>
                  {group.day}
                </span>
              </motion.div>
              
              {group.events.map((event, eventIdx) => (
                <TimelineCard key={`${groupIdx}-${eventIdx}`} event={event} index={eventIdx + (groupIdx * 3)} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface EventCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  redirectUrl: string;
  collaboratingSocieties?: string[];
}

export function EventCard({ title, description, imageUrl, redirectUrl, collaboratingSocieties = [] }: EventCardProps) {
  const placeholderImage = "https://via.placeholder.com/600x400?text=Event+Image";
  const eventImage = imageUrl || placeholderImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-[#111827] rounded-xl overflow-hidden transition-all duration-300"
      style={{ boxShadow: "inset 0 0 40px rgba(56, 189, 248, 0.2)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#36D399]/10 to-[#38BDF8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <div className="relative h-48 overflow-hidden">
        {/* TODO: Replace placeholder with actual event images */}
        <Image alt={title} src={eventImage} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white drop-shadow-md">{title}</h3>
        </div>
      </div>
      <div className="relative z-20 p-6 pt-4">
        <p className="text-[#D1D5DB] text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>
        {collaboratingSocieties.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-[#9CA3AF] mb-2">Collaborating Societies:</p>
            <div className="flex flex-wrap gap-2">
              {collaboratingSocieties.map((society, index) => (
                <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-[#1F2937] text-[#E5E7EB] border border-[#374151]">
                  {society}
                </span>
              ))}
            </div>
          </div>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { if (redirectUrl && redirectUrl !== "#") window.open(redirectUrl, "_blank"); }}
          className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-[#36D399] to-[#38BDF8] text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#36D399]/30"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>Register Now</span>
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export function EventCardGrid() {
  const events = [
    // TODO: Replace all entries with your actual events
    // Format: { title, description, imageUrl, redirectUrl, collaboratingSocieties }
    // imageUrl: path in /public or a full URL — leave empty for placeholder
    // redirectUrl: link to registration form or event page
    {
      title: "Event Name 1",
      description: "A short description of this event. What is it about, who should attend, and what will they gain from participating?",
      imageUrl: "",
      redirectUrl: "#",
      collaboratingSocieties: ["Society A", "Society B"],
    },
    {
      title: "Event Name 2",
      description: "A short description of this event. What is it about, who should attend, and what will they gain from participating?",
      imageUrl: "",
      redirectUrl: "#",
      collaboratingSocieties: ["Society A"],
    },
    {
      title: "Event Name 3",
      description: "A short description of this event. What is it about, who should attend, and what will they gain from participating?",
      imageUrl: "",
      redirectUrl: "#",
      collaboratingSocieties: ["Society B", "Society C"],
    },
    // TODO: Add more events as needed
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          {/* TODO: Replace heading and subtext */}
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#36D399] to-[#38BDF8] bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-lg text-[#E5E7EB] max-w-2xl mx-auto">
            Discover exciting events and opportunities at YOUR EVENT NAME
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

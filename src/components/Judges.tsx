"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Person = {
  name: string;
  role: string;
  company: string;
  photo: string;
};

const judges: Person[] = Array(6).fill({
  name: "Adhyan Kalra",
  role: "Judge",
  company: "HackBVP",
  photo: "/judges/placeholder.jpg",
});

const mentors: Person[] = Array(6).fill({
  name: "Adhyan Kalra",
  role: "Mentor",
  company: "HackBVP",
  photo: "/judges/placeholder.jpg",
});

function PersonCard({ person }: { person: Person }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#161B24] border border-[#CF2A44]/20 rounded-xl p-6 text-center hover:border-[#CF2A44] hover:shadow-[0_0_20px_rgba(207,42,68,0.25)] transition"
    >
      <div className="relative w-28 h-28 mx-auto mb-4">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          className="object-cover rounded-full"
        />
      </div>

      <h3 className="text-lg font-semibold text-[#DAD9D5]">{person.name}</h3>

      <p className="text-[#1E8C7A] text-sm">{person.role}</p>
      <p className="text-[#5A6070] text-sm">{person.company}</p>
    </motion.div>
  );
}

export default function JudgesSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 space-y-20">
      {/* Judges Section */}
      <section>
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A] bg-clip-text text-transparent">
          Judges
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {judges.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </section>

      {/* Mentors Section */}
      <section>
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A] bg-clip-text text-transparent">
          Mentors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {mentors.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </section>
    </div>
  );
}

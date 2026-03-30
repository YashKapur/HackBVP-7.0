"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Sponsor = {
  name: string;
  logo: string;
};

type SponsorTier = {
  title: string;
  sponsors: Sponsor[];
};

export function Sponsors() {
  const sponsorTiers: SponsorTier[] = [
    {
      title: "Title Sponsor",
      sponsors: [{ name: "Vercel", logo: "/sponsors/vercel.png" }],
    },
    {
      title: "Gold Sponsors",
      sponsors: [
        { name: "Vercel", logo: "/sponsors/vercel.png" },
        { name: "Vercel", logo: "/sponsors/vercel.png" },
      ],
    },
    {
      title: "Community Partners",
      sponsors: [
        { name: "Vercel", logo: "/sponsors/vercel.png" },
        { name: "Vercel", logo: "/sponsors/vercel.png" },
      ],
    },
  ];

  return (
    <section className="space-y-24">
      {sponsorTiers.map((tier, tierIndex) => (
        <motion.div
          key={tierIndex}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A] bg-clip-text text-transparent">
            {tier.title}
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-10">
            {tier.sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#161B24] border border-[#CF2A44]/20 rounded-2xl p-8 flex items-center justify-center hover:border-[#CF2A44] hover:shadow-[0_0_25px_rgba(207,42,68,0.3)] transition"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

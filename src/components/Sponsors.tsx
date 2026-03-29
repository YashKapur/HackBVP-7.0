"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type SponsorTier = {
  title: string;
  sponsors: { name: string; logo: string; width: number; height: number; }[];
};

export function Sponsors() {
  const sponsorTiers: SponsorTier[] = [
    {
      // TODO: Rename tier and add your actual title sponsor
      title: "Title Sponsor",
      sponsors: [
        {
          name: "Title Sponsor Name",        // TODO: Sponsor name
          logo: "/sponsors/sponsor-1.png",   // TODO: Add logo to /public/sponsors/
          width: 300,
          height: 100,
        },
      ],
    },
    {
      // TODO: Rename tier and add your co-sponsors
      title: "Co-Sponsors",
      sponsors: [
        { name: "Co-Sponsor 1", logo: "/sponsors/sponsor-2.png", width: 200, height: 80 },
        { name: "Co-Sponsor 2", logo: "/sponsors/sponsor-3.png", width: 200, height: 80 },
        // TODO: Add more co-sponsors here as needed
      ],
    },
    {
      // TODO: Rename or remove this tier as needed
      title: "Community Partners",
      sponsors: [
        { name: "Partner 1", logo: "/sponsors/partner-1.png", width: 150, height: 70 },
        { name: "Partner 2", logo: "/sponsors/partner-2.png", width: 150, height: 70 },
        // TODO: Add more partners here
      ],
    },
  ];

  return (
    <section id="sponsors" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
          {/* TODO: Replace heading if needed */}
          Our Sponsors & Partners
        </h2>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg">
          {/* TODO: Replace with your own sponsors section subtext */}
          We&apos;re grateful to our sponsors and partners who make this event possible
        </p>
      </motion.div>

      <div className="space-y-20">
        {sponsorTiers.map((tier, tierIndex) => (
          <motion.div
            key={tierIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: tierIndex * 0.1 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-slate-300 mb-8">{tier.title}</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {tier.sponsors.map((sponsor, sponsorIndex) => (
                <div
                  key={sponsorIndex}
                  className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="relative w-40 h-20 md:w-48 md:h-24 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={sponsor.width}
                      height={sponsor.height}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

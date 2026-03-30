import TeamSection from "@/components/TeamCard";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0F1217] text-[#DAD9D5]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A] bg-clip-text text-transparent">
            Our Team
          </h1>

          <p className="text-[#5A6070] mt-4">Meet the team behind HackBVP</p>
        </div>

        <TeamSection />
      </div>
    </div>
  );
}

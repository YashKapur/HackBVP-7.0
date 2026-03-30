"use client";

import Image from "next/image";

type Member = {
  name: string;
  role: string;
  photo: string;
};

type Department = {
  department: string;
  members: Member[];
};

const teamData: Department[] = [
  {
    department: "Technical",
    members: Array(5).fill({
      name: "Adhyan Kalra",
      role: "Technical Team",
      photo: "/team/placeholder.jpg",
    }),
  },
  {
    department: "Decor",
    members: Array(5).fill({
      name: "Adhyan Kalra",
      role: "Decor Team",
      photo: "/team/placeholder.jpg",
    }),
  },
  {
    department: "Event Management",
    members: Array(5).fill({
      name: "Adhyan Kalra",
      role: "Event Management",
      photo: "/team/placeholder.jpg",
    }),
  },
  {
    department: "CND",
    members: Array(5).fill({
      name: "Adhyan Kalra",
      role: "CND Team",
      photo: "/team/placeholder.jpg",
    }),
  },
  {
    department: "Core",
    members: Array(5).fill({
      name: "Adhyan Kalra",
      role: "Core Team",
      photo: "/team/placeholder.jpg",
    }),
  },
  {
    department: "Mentors",
    members: Array(5).fill({
      name: "Adhyan Kalra",
      role: "Mentor",
      photo: "/team/placeholder.jpg",
    }),
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-[#161B24] border border-[#CF2A44]/30 rounded-xl p-4 text-center hover:border-[#CF2A44] transition hover:shadow-[0_0_20px_rgba(207,42,68,0.25)]">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-[#DAD9D5] font-semibold">{member.name}</h3>
      <p className="text-[#1E8C7A] text-sm">{member.role}</p>
    </div>
  );
}

export default function TeamSection() {
  return (
    <div className="space-y-16">
      {teamData.map((dept, index) => (
        <div key={index}>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#CF2A44] to-[#1E8C7A] bg-clip-text text-transparent">
            {dept.department}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {dept.members.map((member, i) => (
              <MemberCard key={i} member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

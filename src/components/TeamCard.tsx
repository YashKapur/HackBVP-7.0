"use client";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";

interface Member {
  name: string;
  role?: string;
  photoUrl?: string;
  linkedinUrl?: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const coreTeam: Member[] = [
  { name: "Anand Misra", role: "EM", photoUrl: "", linkedinUrl: "#" },
  { name: "Anshul", role: "Outreach", photoUrl: "", linkedinUrl: "#" },
  { name: "Ananya Singh", role: "CnD", photoUrl: "/ananya.png", linkedinUrl: "https://www.linkedin.com/in/ananya-singh-378349329/" },
  { name: "Yash Kapur", role: "Tech", photoUrl: "/yash.jpeg", linkedinUrl: "https://www.linkedin.com/in/yashkapur18/" },
  { name: "Shaurya Kohli", role: "Design", photoUrl: "", linkedinUrl: "#" },
  { name: "Muskan Miglani", role: "Publicity", photoUrl: "", linkedinUrl: "#" },
  { name: "Hasdeep Singh", role: "Sponsorship", photoUrl: "", linkedinUrl: "#" },
];

const mentors: Member[] = [
  { name: "Priyanshu Satapathy", photoUrl: "/PriyanshuSatapathy.jpg", linkedinUrl: "https://www.linkedin.com/in/priyanshu-satapathy-02233626b" },
  { name: "Harshita Arora", photoUrl: "", linkedinUrl: "#" },
  { name: "Nishchay Gupta", photoUrl: "/nishchay.jpg", linkedinUrl: "https://www.linkedin.com/in/nishchay-gupta" },
  { name: "Bhavya Singla", photoUrl: "", linkedinUrl: "#" },
  { name: "Dishant Kapoor", photoUrl: "", linkedinUrl: "#" },
];

// ─── CARD ─────────────────────────────────────────────────────────────────────
function MemberCard({
  member,
  index,
  accent,
  size = "normal",
}: {
  member: Member;
  index: number;
  accent: "red" | "teal";
  size?: "normal" | "large";
}) {
  const accentColor = accent === "red" ? "#CF2A44" : "#1E8C7A";
  const accentColor2 = accent === "red" ? "#AF263C" : "#166B5F";
  const glowColor = accent === "red" ? "rgba(207,42,68,0.55)" : "rgba(30,140,122,0.55)";
  const glowColorSoft = accent === "red" ? "rgba(207,42,68,0.12)" : "rgba(30,140,122,0.12)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative"
    >
      {/* Glow ring on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor2})` }}
      />

      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(15,18,23,0.95)",
          border: "1px solid rgba(218,217,213,0.07)",
          boxShadow: size === "large" ? `0 8px 40px ${glowColorSoft}` : "none",
        }}
      >
        {/* Photo */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(160deg, rgba(22,27,36,1) 0%, rgba(15,18,23,1) 60%, ${glowColorSoft} 100%)`,
            }}
          />

          {member.photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={member.photoUrl}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-20">
              <svg viewBox="0 0 80 100" className="w-24 h-24" fill="currentColor" style={{ color: accentColor }}>
                <ellipse cx="40" cy="32" rx="18" ry="20" />
                <path d="M4 100 Q4 65 40 65 Q76 65 76 100Z" />
              </svg>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1217] via-[#0F1217]/40 to-transparent" />

          {/* LinkedIn reveal */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(15,18,23,0.85) 100%)" }}
          >
          {member.linkedinUrl && member.linkedinUrl !== "#" && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-sm transition-transform duration-200 hover:scale-105 active:scale-95"
              style={{ background: accentColor, boxShadow: `0 0 20px ${glowColor}` }}
            >
              <FaLinkedin className="w-4 h-4" />
              Connect
            </a>
          )}
        </div>

        {/* Top shimmer line */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }}
        />
      </div>

      {/* Name + role */}
      <div className={size === "large" ? "px-4 py-4" : "px-3 py-3"}>
        <h3
          className={`font-bold tracking-tight ${size === "large" ? "text-base" : "text-sm"}`}
          style={{ color: "var(--foreground)" }}
        >
          {member.name}
        </h3>
        <p
          className={`mt-0.5 font-medium ${size === "large" ? "text-xs" : "text-[11px]"}`}
          style={{ color: accentColor }}
        >
          {member.role}
        </p>
      </div>
    </div>
    </motion.div >
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
function SectionLabel({
  label,
  accent,
  sub,
}: {
  label: string;
  accent: "red" | "teal";
  sub?: string;
}) {
  const color = accent === "red" ? "#CF2A44" : "#1E8C7A";
  const color2 = accent === "red" ? "#AF263C" : "#166B5F";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-10"
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${color}, ${color2})` }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: "var(--foreground)" }}>
          {label}
        </h3>
        {sub && <p className="text-xs mt-0.5 font-medium" style={{ color: "rgba(218,217,213,0.45)" }}>{sub}</p>}
      </div>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${color}40, transparent)` }} />
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export function TeamCardGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: "#CF2A44" }}>
            The People Behind It
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ color: "var(--foreground)" }}>
            Our Team
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #CF2A44)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#CF2A44" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #1E8C7A)" }} />
          </div>
        </motion.div>

        {/* ── Core Team — primary, larger cards, red accent ── */}
        <div className="mb-24">
          <SectionLabel label="Core Team" accent="red" sub="The organizers driving HackBVP 7.0" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {coreTeam.map((m, i) => (
              <MemberCard key={i} member={m} index={i} accent="red" size="large" />
            ))}
          </div>
        </div>

        {/* ── Mentors — secondary, smaller cards, teal accent ── */}
        <div>
          <SectionLabel label="Mentors" accent="teal" sub="Industry experts guiding our hackers" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mentors.map((m, i) => (
              <MemberCard key={i} member={m} index={i} accent="teal" size="normal" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

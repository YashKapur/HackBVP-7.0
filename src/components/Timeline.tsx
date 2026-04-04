"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type TimelineStatus = "completed" | "live" | "upcoming";

interface TimelineEvent {
  day: string;
  time: string;
  endTime?: string;
  title: string;
  description: string;
  status: TimelineStatus;
  location?: string;
  isoStart?: string;
  isoEnd?: string;
  details?: string[];
}

function computeStatus(isoStart?: string, isoEnd?: string): TimelineStatus | null {
  if (!isoStart) return null;
  const now = Date.now();
  const start = new Date(isoStart).getTime();
  const end = isoEnd ? new Date(isoEnd).getTime() : start + 3600000;
  if (now < start) return "upcoming";
  if (now >= start && now < end) return "live";
  return "completed";
}

function googleCalendarLink(title: string, isoStart?: string, isoEnd?: string, location?: string) {
  if (!isoStart) return null;
  const fmt = (d: string) => new Date(d).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const start = fmt(isoStart);
  const end = isoEnd ? fmt(isoEnd) : fmt(new Date(new Date(isoStart).getTime() + 3600000).toISOString());
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `HackBVP 7.0 – ${title}`,
    dates: `${start}/${end}`,
    details: "HackBVP 7.0 — Build Beyond Boundaries. https://hack-bvp-7-0.vercel.app",
    location: location || "BVCOE, New Delhi / Online",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// ─── EXPANDABLE TIMELINE CARD ────────────────────────────────────────────────
function TimelineCard({
  event,
  index,
  isLast,
  activeFilter,
}: {
  event: TimelineEvent;
  index: number;
  isLast: boolean;
  activeFilter: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const autoStatus = computeStatus(event.isoStart, event.isoEnd);
  const status: TimelineStatus = autoStatus ?? event.status;
  const calLink = googleCalendarLink(event.title, event.isoStart, event.isoEnd, event.location);

  if (activeFilter !== "all" && status !== activeFilter) return null;

  const isLive = status === "live";
  const isDone = status === "completed";

  const dotColor = isLive ? "#4ade80" : isDone ? "#5A6070" : "#CF2A44";
  const dotGlow = isLive ? "0 0 10px rgba(74,222,128,0.7)" : isDone ? "none" : "0 0 10px rgba(207,42,68,0.6)";
  const badgeStyle: React.CSSProperties = isLive
    ? { background: "rgba(74,222,128,0.12)", color: "#4ade80" }
    : isDone
      ? { background: "rgba(90,96,112,0.15)", color: "#5A6070" }
      : { background: "rgba(207,42,68,0.12)", color: "#CF2A44" };
  const badgeLabel = isLive ? "Live" : isDone ? "Done" : "Upcoming";

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="relative flex gap-5"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="relative mt-1.5">
          {isLive && (
            <div
              className="absolute inset-[-4px] rounded-full animate-ping"
              style={{ background: "rgba(74,222,128,0.25)" }}
            />
          )}
          <div
            className="w-3.5 h-3.5 rounded-full border-2 border-[#0F1217] relative z-10"
            style={{ background: dotColor, boxShadow: dotGlow }}
          />
        </div>
        {!isLast && (
          <div
            className="w-px mt-2 flex-1 min-h-[32px]"
            style={{ background: isLive ? "rgba(74,222,128,0.2)" : "var(--border)" }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="mb-6 flex-1 rounded-2xl border overflow-hidden cursor-pointer transition-all duration-200"
        style={{
          background: "var(--card-bg)",
          borderColor: expanded
            ? isLive ? "rgba(74,222,128,0.3)" : "rgba(207,42,68,0.3)"
            : isLive ? "rgba(74,222,128,0.2)" : "var(--border)",
          boxShadow: expanded
            ? isLive
              ? "0 0 0 1px rgba(74,222,128,0.1), 0 8px 32px rgba(0,0,0,0.3)"
              : "0 0 0 1px rgba(207,42,68,0.08), 0 8px 32px rgba(0,0,0,0.3)"
            : "none",
        }}
        onClick={() => setExpanded((e) => !e)}
      >
        {/* Card header — always visible */}
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <span
                className="text-[10px] font-bold uppercase tracking-widest mb-1 block"
                style={{ color: "var(--primary)" }}
              >
                {event.day}
              </span>
              <h3
                className="text-base font-bold text-white leading-tight"
                style={{ color: expanded ? (isLive ? "#4ade80" : "#CF2A44") : "#fff", transition: "color 0.2s" }}
              >
                {event.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
              {/* Time badge */}
              <span
                className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                style={{ borderColor: "var(--border)", color: "rgba(218,217,213,0.5)" }}
              >
                {event.time}{event.endTime ? ` – ${event.endTime}` : ""}
              </span>
              {/* Status badge */}
              <span
                className="text-[11px] px-2.5 py-1 rounded-full font-semibold flex items-center gap-1.5"
                style={badgeStyle}
              >
                {isLive && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                {badgeLabel}
              </span>
              {/* Expand chevron */}
              <div
                className="w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  style={{
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s",
                    stroke: "rgba(218,217,213,0.4)",
                  }}
                >
                  <path d="M2 4l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable body */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <p
                  className="text-sm leading-relaxed mt-4"
                  style={{ color: "rgba(218,217,213,0.6)" }}
                >
                  {event.description}
                </p>

                {event.details && event.details.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {event.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(218,217,213,0.55)" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--primary)" }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center gap-3 mt-4 flex-wrap">
                  {event.location && (
                    <span
                      className="text-[11px] flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
                      style={{ borderColor: "var(--border)", color: "rgba(218,217,213,0.45)" }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                      {event.location}
                    </span>
                  )}
                  {calLink && (
                    <a
                      href={calLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-colors duration-200 font-medium"
                      style={{ borderColor: "rgba(207,42,68,0.3)", color: "var(--primary)", background: "rgba(207,42,68,0.06)" }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                      Add to calendar
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── DAY GROUP ────────────────────────────────────────────────────────────────
function DayGroup({ day, events, activeFilter }: { day: string; events: TimelineEvent[]; activeFilter: string }) {
  const visible = events.filter((e) => {
    if (activeFilter === "all") return true;
    const s = computeStatus(e.isoStart, e.isoEnd) ?? e.status;
    return s === activeFilter;
  });
  if (visible.length === 0) return null;

  return (
    <div className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border text-sm font-bold"
        style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card-bg)" }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
        {day}
      </motion.div>
      <div>
        {events.map((event, i) => (
          <TimelineCard
            key={i}
            event={event}
            index={i}
            isLast={i === events.length - 1}
            activeFilter={activeFilter}
          />
        ))}
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const Timeline = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "live" | "completed">("all");
  const [tick, setTick] = useState(0);
  const [expandAll, setExpandAll] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 30000);
    return () => clearInterval(id);
  }, []);

  const schedule: { day: string; events: TimelineEvent[] }[] = [
    {
      day: "Pre-Event",
      events: [
        {
          day: "Pre-Event",
          time: "11:30 PM",
          title: "Registration Opens",
          description: "Participants can register and form teams on the Unstop portal. Teams of 2–4 members. Early registration is strongly encouraged as slots are limited.",
          details: [
            "Head to Unstop and create or join a team of 2–4",
            "Solo registrations are not accepted",
            "Register early — slots fill up fast",
          ],
          status: "live",
          location: "Unstop Portal",
          isoStart: "2026-04-01T23:30:00+05:30",
          isoEnd: "2026-04-06T23:30:00+05:30",
        },
        {
          day: "Pre-Event",
          time: "11:30 PM",
          title: "Abstract Submission Deadline",
          description: "Teams submit a 1-page abstract on the Unstop portal outlining their problem statement and proposed solution. Shortlisted teams will be notified via email.",
          details: [
            "Max 1 page — problem + proposed solution",
            "Upload as PDF on the Unstop portal",
            "Shortlisted teams notified by email within 48 hours",
          ],
          status: "upcoming",
          location: "Unstop Portal",
          isoStart: "2026-04-06T23:30:00+05:30",
          isoEnd: "2026-04-07T01:00:00+05:30",
        },
      ],
    },
    {
      day: "Day 1 — 09 April 2026 (Online)",
      events: [
        {
          day: "Day 1",
          time: "08:00 AM",
          endTime: "11:00 AM",
          title: "Round 2: Project Development",
          description: "Teams shortlisted from Round 1 abstracts work on building their projects online. Mentors available on Discord channels throughout.",
          details: [
            "Build for your chosen track — AI, FinTech, Health, Sustainability, Cybersecurity, or EdTech",
            "Mentors actively available on Discord",
            "Use any tech stack of your choice",
          ],
          status: "upcoming",
          isoStart: "2026-04-09T08:00:00+05:30",
          isoEnd: "2026-04-09T11:00:00+05:30",
        },
        {
          day: "Day 1",
          time: "11:00 AM",
          endTime: "12:30 PM",
          title: "Mentorship Round 1",
          description: "Industry mentors provide focused guidance and feedback to teams through Discord channels. Use this time to refine your approach.",
          details: [
            "1:1 mentor sessions via Discord voice channels",
            "Get feedback on your solution approach and tech stack",
            "Mentors from industry across all 6 tracks",
          ],
          status: "upcoming",
          location: "Discord Channels",
          isoStart: "2026-04-09T11:00:00+05:30",
          isoEnd: "2026-04-09T12:30:00+05:30",
        },
        {
          day: "Day 1",
          time: "12:30 PM",
          endTime: "01:30 PM",
          title: "Lunch Break",
          description: "Take a well-deserved break. Grab lunch and recharge before the afternoon sessions.",
          status: "upcoming",
          isoStart: "2026-04-09T12:30:00+05:30",
          isoEnd: "2026-04-09T13:30:00+05:30",
        },
        {
          day: "Day 1",
          time: "03:00 PM",
          endTime: "04:00 PM",
          title: "Fun Games & Activities",
          description: "Interactive games and fun activities on the Discord server to refresh participants and build community between teams.",
          status: "upcoming",
          location: "Discord Server",
          isoStart: "2026-04-09T15:00:00+05:30",
          isoEnd: "2026-04-09T16:00:00+05:30",
        },
        {
          day: "Day 1",
          time: "05:00 PM",
          title: "Judging Round (Round 2)",
          description: "Multiple judging panels evaluate teams. Top 40 teams will be selected to advance to the offline finale at BVCOE on April 15.",
          details: [
            "Present your solution to a judging panel",
            "Judged on innovation, feasibility, and technical depth",
            "Top 40 teams qualify for the offline finale",
            "Results announced at 8:00 PM",
          ],
          status: "upcoming",
          location: "Discord Channels",
          isoStart: "2026-04-09T17:00:00+05:30",
          isoEnd: "2026-04-09T19:30:00+05:30",
        },
        {
          day: "Day 1",
          time: "08:00 PM",
          title: "Day 1 Wrap-up & Results",
          description: "Announcement of the Top 40 teams advancing to the offline finale. Selected teams receive venue and check-in instructions via email.",
          status: "upcoming",
          isoStart: "2026-04-09T20:00:00+05:30",
          isoEnd: "2026-04-09T20:30:00+05:30",
        },
      ],
    },
    {
      day: "Day 2 — 15 April 2026 (BVCOE, Offline)",
      events: [
        {
          day: "Day 2",
          time: "08:00 AM",
          title: "Team Arrival",
          description: "Teams arrive at BVCOE campus, set up their workstations, and prepare for the offline finale.",
          details: [
            "Carry your college ID card and Unstop registration confirmation",
            "Venue: BVCOE, Paschim Vihar, New Delhi",
            "Setup time: 30 minutes before check-in",
          ],
          status: "upcoming",
          location: "BVCOE Campus",
          isoStart: "2026-04-15T08:00:00+05:30",
          isoEnd: "2026-04-15T08:30:00+05:30",
        },
        {
          day: "Day 2",
          time: "08:30 AM",
          title: "Reporting & Check-in",
          description: "Official participant verification and check-in. Bring your college ID and Unstop confirmation.",
          status: "upcoming",
          isoStart: "2026-04-15T08:30:00+05:30",
          isoEnd: "2026-04-15T09:00:00+05:30",
        },
        {
          day: "Day 2",
          time: "09:00 AM",
          title: "Inauguration Ceremony",
          description: "Official opening ceremony with welcome address, keynote by faculty and industry guests, and briefing on Round 3 rules.",
          status: "upcoming",
          location: "BVIMR Auditorium",
          isoStart: "2026-04-15T09:00:00+05:30",
          isoEnd: "2026-04-15T10:30:00+05:30",
        },
        {
          day: "Day 2",
          time: "10:30 AM",
          title: "Round 3 Begins",
          description: "Top 40 teams build and refine their solutions in the offline environment with mentors present on-site.",
          details: [
            "Workstations available at Library, F Block",
            "Mentors rotate between teams every 30 minutes",
            "Wi-Fi and power provided",
          ],
          status: "upcoming",
          location: "Library, F Block",
          isoStart: "2026-04-15T10:30:00+05:30",
          isoEnd: "2026-04-15T13:00:00+05:30",
        },
        {
          day: "Day 2",
          time: "01:00 PM",
          endTime: "02:00 PM",
          title: "Mentorship Round 2 + Judging",
          description: "Final mentorship session alongside evaluation by the judging panel for Round 3.",
          status: "upcoming",
          location: "Library, F Block",
          isoStart: "2026-04-15T13:00:00+05:30",
          isoEnd: "2026-04-15T14:00:00+05:30",
        },
        {
          day: "Day 2",
          time: "02:00 PM",
          endTime: "03:00 PM",
          title: "Lunch Break",
          description: "Lunch provided at the venue for all participants. A great time to network with other teams.",
          status: "upcoming",
          isoStart: "2026-04-15T14:00:00+05:30",
          isoEnd: "2026-04-15T15:00:00+05:30",
        },
        {
          day: "Day 2",
          time: "03:00 PM",
          title: "Round 3 Results",
          description: "Top 10 teams announced for the Grand Finale. Shortlisted teams get 30 minutes to prepare their final pitch.",
          status: "upcoming",
          isoStart: "2026-04-15T15:00:00+05:30",
          isoEnd: "2026-04-15T15:30:00+05:30",
        },
        {
          day: "Day 2",
          time: "05:30 PM",
          endTime: "06:00 PM",
          title: "Evening Snacks",
          description: "Refreshments served to all participants before the grand finale presentations.",
          status: "upcoming",
          isoStart: "2026-04-15T17:30:00+05:30",
          isoEnd: "2026-04-15T18:00:00+05:30",
        },
        {
          day: "Day 2",
          time: "06:00 PM",
          title: "Final Judging (Round 4)",
          description: "Top 10 teams present polished solutions to the final jury. Each team gets allocated time to demo and pitch.",
          details: [
            "Each team gets 8 minutes to present + 5 minutes Q&A",
            "Judged on innovation, impact, technical depth, and presentation",
            "Industry jury panel from top companies",
          ],
          status: "upcoming",
          location: "Seminar Hall",
          isoStart: "2026-04-15T18:00:00+05:30",
          isoEnd: "2026-04-15T19:30:00+05:30",
        },
        {
          day: "Day 2",
          time: "07:30 PM",
          title: "Final Results & Closing Ceremony",
          description: "Winners announced, prizes distributed, and closing remarks. Certificates issued to all participants.",
          details: [
            "Winner, 1st Runner-up, and 2nd Runner-up announced",
            "Special track prizes across all 6 domains",
            "Certificates for all participants",
          ],
          status: "upcoming",
          location: "Seminar Hall",
          isoStart: "2026-04-15T19:30:00+05:30",
          isoEnd: "2026-04-15T20:30:00+05:30",
        },
      ],
    },
  ];

  const filters: { key: typeof filter; label: string; icon: string }[] = [
    { key: "all", label: "All Events", icon: "◈" },
    { key: "upcoming", label: "Upcoming", icon: "◉" },
    { key: "live", label: "Live", icon: "●" },
    { key: "completed", label: "Completed", icon: "◎" },
  ];

  const filterColors: Record<string, string> = {
    all: "var(--primary)",
    upcoming: "var(--primary)",
    live: "#4ade80",
    completed: "#5A6070",
  };

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Timeline
          </h2>
          <div className="h-1 w-14 mx-auto rounded-full mb-4" style={{ background: "linear-gradient(to right, var(--primary), var(--secondary))" }} />
          <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(218,217,213,0.45)" }}>
            Full schedule for HackBVP 7.0. All times IST. Click any event to expand details.
          </p>
        </motion.div>

        {/* Filter tabs + expand-all toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {filters.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200"
                  style={{
                    background: active ? filterColors[f.key] : "transparent",
                    borderColor: active ? filterColors[f.key] : "var(--border)",
                    color: active ? "#fff" : "rgba(218,217,213,0.5)",
                    boxShadow: active ? `0 0 16px rgba(207,42,68,0.25)` : "none",
                  }}
                >
                  <span style={{ fontSize: 9 }}>{f.icon}</span>
                  {f.label}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setExpandAll((e) => !e)}
            className="text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "rgba(218,217,213,0.4)" }}
          >
            {expandAll ? "Collapse all" : "Expand all"}
          </button>
        </div>

        {/* Schedule */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + tick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {schedule.map((group) => (
              <DayGroup
                key={group.day}
                day={group.day}
                events={group.events}
                activeFilter={filter}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs mt-4"
          style={{ color: "rgba(218,217,213,0.25)" }}
        >
          Schedule subject to change. Follow our social media for real-time updates.
        </motion.p>
      </div>
    </section>
  );
};

export default Timeline;

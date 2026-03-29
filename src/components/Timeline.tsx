"use client";
import { motion } from "framer-motion";

type TimelineStatus = "completed" | "live" | "upcoming";

interface TimelineEvent {
  day: string;        // e.g. "Day 1" or "October 8"
  time: string;       // e.g. "09:00 AM"
  title: string;
  description: string;
  status: TimelineStatus; // controls the dot color
  location?: string;  // optional venue/room
}

// ─── STATUS CONFIG ────────────────────────────────────────────────────────────
const statusConfig: Record<TimelineStatus, { dot: string; label: string }> = {
  completed: { dot: "bg-gray-500",   label: "Done"     },
  live:      { dot: "bg-green-400 animate-pulse", label: "Live" },
  upcoming:  { dot: "",              label: "Upcoming" }, // uses CSS var
};

// ─── SINGLE EVENT CARD ────────────────────────────────────────────────────────
function TimelineCard({ event, index, isLast }: { event: TimelineEvent; index: number; isLast: boolean }) {
  const cfg = statusConfig[event.status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex gap-6"
    >
      {/* Left: dot + vertical line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 border-2 border-[#0a0a0f] ${
            event.status === "upcoming" ? "" : cfg.dot
          }`}
          style={event.status === "upcoming" ? { background: "var(--primary)", boxShadow: "0 0 8px var(--primary)" } : {}}
        />
        {!isLast && <div className="w-px flex-1 mt-2" style={{ background: "var(--border)" }} />}
      </div>

      {/* Right: card */}
      <div
        className="mb-8 flex-1 rounded-xl p-5 border transition-all duration-200 hover:border-white/15 group"
        style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest mb-1 block" style={{ color: "var(--primary)" }}>
              {event.day}
            </span>
            <h3 className="text-base font-bold text-white group-hover:text-[var(--accent)] transition-colors">
              {event.title}
            </h3>
          </div>
          {/* Time + status badges */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs px-2.5 py-1 rounded-full border font-medium" style={{ borderColor: "var(--border)", color: "rgba(232,232,240,0.5)" }}>
              {event.time}
            </span>
            <span className={`text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1.5 ${
              event.status === "live"      ? "bg-green-500/15 text-green-400"  :
              event.status === "completed" ? "bg-gray-500/15 text-gray-400"   :
                                            "text-white/60"
            }`}
              style={event.status === "upcoming" ? { background: "rgba(108,127,255,0.12)", color: "var(--accent)" } : {}}
            >
              {event.status === "live" && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
              {cfg.label}
            </span>
          </div>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: "rgba(232,232,240,0.55)" }}>
          {event.description}
        </p>

        {event.location && (
          <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "rgba(232,232,240,0.35)" }}>
            📍 {event.location}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ─── DAY GROUP ────────────────────────────────────────────────────────────────
function DayGroup({ day, events }: { day: string; events: TimelineEvent[] }) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border text-sm font-bold"
        style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card-bg)" }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
        {day}
      </motion.div>

      <div>
        {events.map((event, i) => (
          <TimelineCard key={i} event={event} index={i} isLast={i === events.length - 1} />
        ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const Timeline = () => {

  /*
    ============================================================
    TODO: Replace all entries below with your actual schedule.

    Each event has:
      day         → "Day 1", "Day 2", or actual date like "Oct 8"
      time        → "09:00 AM" — 12hr or 24hr, your choice
      title       → name of the session / activity
      description → 1-2 sentence description of what happens
      status      → "completed" | "live" | "upcoming"
                    Set "live" for the current event on the day-of
                    Set "completed" for past events
                    Set "upcoming" for future events
      location    → optional — room name, stage, or "Online"

    Group events by day. Add as many days and events as you need.
    ============================================================
  */

  const schedule: { day: string; events: TimelineEvent[] }[] = [
    {
      day: "Day 1 — DD Month YYYY",   // TODO: Replace with actual date
      events: [
        {
          day: "Day 1",
          time: "09:00 AM",
          title: "Opening Ceremony",
          description: "Describe what happens at the opening — welcome address, keynote, rules briefing, etc.",
          status: "upcoming",
          location: "Main Auditorium",  // TODO: update or remove
        },
        {
          day: "Day 1",
          time: "11:00 AM",
          title: "Hackathon / Event Begins",
          description: "Teams start working on their problem statements. Mentors available from this point.",
          status: "upcoming",
          location: "Lab Block A",
        },
        {
          day: "Day 1",
          time: "01:00 PM",
          title: "Lunch Break",
          description: "Catered lunch for all participants.",
          status: "upcoming",
          location: "Cafeteria",
        },
        {
          day: "Day 1",
          time: "03:00 PM",
          title: "Workshop / Guest Talk",
          description: "A session by an industry expert or a hands-on workshop. Topic TBD.",
          status: "upcoming",
          location: "Seminar Hall",
        },
        {
          day: "Day 1",
          time: "07:00 PM",
          title: "Mid-point Check-in",
          description: "Teams present a quick progress update to the judging panel.",
          status: "upcoming",
        },
      ],
    },
    {
      day: "Day 2 — DD Month YYYY",   // TODO: Replace with actual date
      events: [
        {
          day: "Day 2",
          time: "08:00 AM",
          title: "Morning Check-in",
          description: "Resume work. Breakfast served. Mentors available for final guidance.",
          status: "upcoming",
        },
        {
          day: "Day 2",
          time: "11:00 AM",
          title: "Submission Deadline",
          description: "All projects must be submitted by this time. No late entries accepted.",
          status: "upcoming",
        },
        {
          day: "Day 2",
          time: "12:00 PM",
          title: "Final Presentations",
          description: "Teams present their solutions to the judging panel. Each team gets X minutes.",
          status: "upcoming",
          location: "Main Auditorium",
        },
        {
          day: "Day 2",
          time: "03:00 PM",
          title: "Results & Prize Distribution",
          description: "Winners announced. Prize distribution ceremony and closing remarks.",
          status: "upcoming",
          location: "Main Auditorium",
        },
      ],
    },
    // TODO: Add more days if your event spans 3+ days
  ];

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {/* TODO: Replace heading if needed */}
            Schedule
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(232,232,240,0.5)" }}>
            {/* TODO: Replace subtext */}
            The full schedule for YOUR EVENT NAME. All times are in IST.
          </p>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 text-xs font-medium" style={{ color: "rgba(232,232,240,0.5)" }}>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} /> Upcoming</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-400" /> Live</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gray-500" /> Completed</span>
          </div>
        </motion.div>

        {/* Timeline days */}
        {schedule.map((group) => (
          <DayGroup key={group.day} day={group.day} events={group.events} />
        ))}

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs mt-4"
          style={{ color: "rgba(232,232,240,0.3)" }}
        >
          {/* TODO: Update or remove this note */}
          Schedule subject to change. Follow our social media for real-time updates.
        </motion.p>
      </div>
    </section>
  );
};

export default Timeline;

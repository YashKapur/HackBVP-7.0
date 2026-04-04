"use client";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

const contacts = [
    { name: "Yash Kapur", phone: "+91 99719 22757" },
    { name: "Priyanshu Satapathy", phone: "+91 89209 84213" },
];

const socials = [
    {
        icon: <FaInstagram className="w-[18px] h-[18px]" />,
        href: "https://www.instagram.com/hackbvp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        label: "Instagram",
    },
    {
        icon: <FaLinkedin className="w-[18px] h-[18px]" />,
        href: "https://www.linkedin.com/company/department-of-computer-science-engineering-cse-bvcoe-delhi/",
        label: "LinkedIn",
    },
    {
        icon: <MdEmail className="w-[18px] h-[18px]" />,
        href: "mailto:hackbvp.official@gmail.com",
        label: "Email",
    },
];

// BVCOE coordinates
const BVCOE_LAT = 28.6448;
const BVCOE_LNG = 77.0682;
const MAPS_URL = `https://share.google/VVDRqQuEKUQtgKooD`;

// Static map via OpenStreetMap tile — no API key needed
const STATIC_MAP = `https://staticmap.openstreetmap.de/staticmap.php?center=${BVCOE_LAT},${BVCOE_LNG}&zoom=15&size=800x300&maptype=mapnik&markers=${BVCOE_LAT},${BVCOE_LNG},red`;

export function Footer() {
    return (
        <footer className="relative w-full mt-24">

            {/* Glow line */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
                style={{ background: "linear-gradient(to right, transparent, #CF2A44, transparent)" }}
            />
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(218,217,213,0.05)" }} />

            <div className="max-w-6xl mx-auto px-8 pt-12 pb-10">

                {/* ── MAP SECTION ───────────────────────────────────────── */}
                <div className="mb-10 rounded-2xl overflow-hidden border relative group" style={{ borderColor: "rgba(218,217,213,0.08)" }}>
                    {/* Map iframe — OpenStreetMap, no API key */}
                    <iframe
                        title="BVCOE Location"
                        src={`https://www.openstreetmap.org/export/embed.html?bbox=${BVCOE_LNG - 0.012},${BVCOE_LAT - 0.008},${BVCOE_LNG + 0.012},${BVCOE_LAT + 0.008}&layer=mapnik&marker=${BVCOE_LAT},${BVCOE_LNG}`}
                        width="100%"
                        height="260"
                        style={{
                            border: "none",
                            display: "block",
                            filter: "invert(0.88) hue-rotate(180deg) saturate(0.6) brightness(0.85)",
                        }}
                        loading="lazy"
                        allowFullScreen
                    />

                    {/* Overlay info card */}
                    <div
                        className="absolute bottom-3 left-3 flex items-start gap-3 px-4 py-3 rounded-xl backdrop-blur-md"
                        style={{
                            background: "rgba(15,18,23,0.88)",
                            border: "1px solid rgba(207,42,68,0.25)",
                            maxWidth: 280,
                        }}
                    >
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: "rgba(207,42,68,0.18)" }}
                        >
                            {/* Pin icon */}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CF2A44" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                <circle cx="12" cy="9" r="2.5" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white leading-tight mb-0.5">BVCOE, New Delhi</p>
                            <p className="text-[10px] leading-snug" style={{ color: "rgba(218,217,213,0.45)" }}>
                                Paschim Vihar, New Delhi — 110063
                            </p>
                            <p className="text-[10px] mt-1" style={{ color: "rgba(218,217,213,0.3)" }}>
                                Offline Finale · 15 April 2026
                            </p>
                        </div>
                    </div>

                    {/* "Open in Maps" button */}
                    <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                        style={{
                            background: "#CF2A44",
                            color: "#fff",
                            boxShadow: "0 0 20px rgba(207,42,68,0.35)",
                        }}
                    >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Open in Maps
                    </a>
                </div>

                {/* ── TOP SECTION ────────────────────────────────────────── */}
                <div className="flex flex-col items-center gap-8">

                    {/* Brand */}
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: "var(--foreground)" }}>
                            Hack<span style={{ color: "#CF2A44" }}>BVP</span>{" "}
                            <span style={{ color: "rgba(218,217,213,0.25)" }}>7.0</span>
                        </h2>
                        <p className="text-sm tracking-widest uppercase font-medium" style={{ color: "rgba(218,217,213,0.3)" }}>
                            Build Beyond Boundaries
                        </p>
                    </div>

                    {/* Nav */}
                    <nav className="flex items-center gap-8 flex-wrap justify-center">
                        {["Home", "Tracks", "Timeline", "Team", "Sponsors"].map((item) => (
                            <a
                                key={item}
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="text-sm font-medium transition-colors duration-200 hover:text-white"
                                style={{ color: "rgba(218,217,213,0.4)" }}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Divider */}
                    <div className="flex items-center gap-4 w-full max-w-md">
                        <div className="flex-1 h-px" style={{ background: "rgba(218,217,213,0.07)" }} />
                        <div className="w-1 h-1 rounded-full" style={{ background: "#CF2A44" }} />
                        <div className="flex-1 h-px" style={{ background: "rgba(218,217,213,0.07)" }} />
                    </div>

                    {/* Contacts + Socials */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap">

                        {/* Phone pills */}
                        {contacts.map((c) => (
                            <a
                                key={c.name}
                                href={`tel:${c.phone.replace(/\s/g, "")}`}
                                className="flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                                style={{
                                    background: "rgba(207,42,68,0.06)",
                                    border: "1px solid rgba(207,42,68,0.15)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(207,42,68,0.12)";
                                    e.currentTarget.style.borderColor = "rgba(207,42,68,0.35)";
                                    e.currentTarget.style.boxShadow = "0 0 20px rgba(207,42,68,0.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(207,42,68,0.06)";
                                    e.currentTarget.style.borderColor = "rgba(207,42,68,0.15)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                <div
                                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: "rgba(207,42,68,0.2)" }}
                                >
                                    <MdPhone className="w-4 h-4" style={{ color: "#CF2A44" }} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider leading-none mb-1" style={{ color: "rgba(218,217,213,0.3)" }}>
                                        {c.name}
                                    </p>
                                    <p className="text-sm font-bold leading-none" style={{ color: "rgba(218,217,213,0.8)" }}>
                                        {c.phone}
                                    </p>
                                </div>
                            </a>
                        ))}

                        {/* Separator */}
                        <div className="hidden sm:block w-px h-10" style={{ background: "rgba(218,217,213,0.08)" }} />

                        {/* Social icons */}
                        <div className="flex items-center gap-2">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                                    style={{
                                        background: "rgba(218,217,213,0.05)",
                                        border: "1px solid rgba(218,217,213,0.09)",
                                        color: "rgba(218,217,213,0.4)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "rgba(207,42,68,0.12)";
                                        e.currentTarget.style.borderColor = "rgba(207,42,68,0.35)";
                                        e.currentTarget.style.color = "#CF2A44";
                                        e.currentTarget.style.boxShadow = "0 0 16px rgba(207,42,68,0.2)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "rgba(218,217,213,0.05)";
                                        e.currentTarget.style.borderColor = "rgba(218,217,213,0.09)";
                                        e.currentTarget.style.color = "rgba(218,217,213,0.4)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── COPYRIGHT ──────────────────────────────────────────── */}
                <div
                    className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
                    style={{ borderTop: "1px solid rgba(218,217,213,0.05)" }}
                >
                    <p className="text-xs" style={{ color: "rgba(218,217,213,0.18)" }}>
                        © {new Date().getFullYear()} HackBVP. All rights reserved.
                    </p>
                    <p className="text-xs" style={{ color: "rgba(218,217,213,0.12)" }}>
                        Yours truely HackBVP Team🚀
                    </p>
                </div>

            </div>
        </footer>
    );
}

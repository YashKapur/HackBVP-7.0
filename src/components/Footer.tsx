"use client";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

const contacts = [
    { name: "Yash Kapur", phone: "+91 99719 22757" }, // TODO
    { name: "Priyanshu Satapathy", phone: "+91 89209 84213" }, // TODO
];

const socials = [
    { icon: <FaInstagram className="w-[18px] h-[18px]" />, href: "https://www.instagram.com/hackbvp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" }, // TODO
    { icon: <FaLinkedin className="w-[18px] h-[18px]" />, href: "https://www.linkedin.com/company/department-of-computer-science-engineering-cse-bvcoe-delhi/", label: "LinkedIn" }, // TODO
    { icon: <MdEmail className="w-[18px] h-[18px]" />, href: "mailto:hackbvp.official@gmail.com", label: "Email" }, // TODO
];

export function Footer() {
    return (
        <footer className="relative w-full mt-24">

            {/* Glow line */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
                style={{ background: "linear-gradient(to right, transparent, #CF2A44, transparent)" }}
            />

            {/* Faint top border */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(218,217,213,0.05)" }} />

            <div className="max-w-6xl mx-auto px-8 pt-12 pb-10">

                {/* Top section */}
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
                    <nav className="flex items-center gap-8">
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

                {/* Divider with dot */}
                <div className="flex items-center gap-4 w-full max-w-md">
                    <div className="flex-1 h-px" style={{ background: "rgba(218,217,213,0.07)" }} />
                    <div className="w-1 h-1 rounded-full" style={{ background: "#CF2A44" }} />
                    <div className="flex-1 h-px" style={{ background: "rgba(218,217,213,0.07)" }} />
                </div>

                {/* Contacts + Socials row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

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
        </div >

        {/* Bottom copyright */ }
        < div className = "mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2" style = {{ borderTop: "1px solid rgba(218,217,213,0.05)" }
}>
          <><p className="text-xs" style={{ color: "rgba(218,217,213,0.18)" }}>
        © {new Date().getFullYear()} HackBVP. All rights reserved.
    </p></>
        </div>
      </div >
    </footer >
  );
}
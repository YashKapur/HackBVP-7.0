"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    // TODO: Update names and hrefs to match your actual pages / sections
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Judges", href: "/judges" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* TODO: Replace /logo.png with your own logo file in /public */}
          <div className="w-8 h-8 relative">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
          </div>
          {/* TODO: Replace with your org / event name */}
          <span className="text-white font-bold text-lg tracking-tight group-hover:text-[var(--primary)] transition-colors">
            YOUR EVENT
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/8 transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button — desktop */}
        {/* TODO: Update href and label to your registration link */}
        <Link
          href="#register"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200"
          style={{ background: "var(--primary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {/* TODO: Replace button label */}
          Register Now
        </Link>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/8 transition-all"
            >
              {item.name}
            </Link>
          ))}
          {/* TODO: Update href and label */}
          <Link
            href="#register"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 rounded-full text-sm font-semibold text-white text-center"
            style={{ background: "var(--primary)" }}
          >
            Register Now
          </Link>
        </div>
      )}
    </nav>
  );
}

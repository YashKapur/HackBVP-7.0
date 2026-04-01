"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const glassBar =
  "rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.12] to-white/[0.04] shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl ring-1 ring-white/10";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tracks", href: "/hackathon" },
    { name: "Timeline", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      <div className="flex justify-center px-3 pt-4 sm:px-4 sm:pt-5">
        <nav
          className="pointer-events-auto relative w-full max-w-5xl"
          aria-label="Main navigation"
        >
          <div
            className={`${glassBar} px-3 py-2.5 sm:px-5 sm:py-3 transition-all duration-300 ${
              scrolled ? "border-white/20 from-white/[0.16] shadow-[0_12px_48px_rgba(0,0,0,0.55)]" : ""
            }`}
          >
            {/* Desktop / tablet: logo + centered links + CTA */}
            <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6">
              <Link
                href="/"
                onClick={handleHomeNavigation}
                className="flex items-center gap-2.5 shrink-0 group"
              >
                <div className="relative h-9 w-9 sm:h-10 sm:w-10">
                  <Image
                    src="/logo.png"
                    alt="HackBVP"
                    fill
                    className="object-contain drop-shadow-[0_0_12px_rgba(207,42,68,0.45)]"
                    priority
                  />
                </div>
                <span className="text-white font-bold text-sm sm:text-base tracking-tight group-hover:text-[var(--primary)] transition-colors">
                  HackBVP
                </span>
              </Link>

              <div className="flex items-center justify-center gap-0.5 flex-wrap">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={item.name === "Home" ? handleHomeNavigation : undefined}
                    className="px-2.5 sm:px-3 py-2 rounded-xl text-sm font-medium text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="https://unstop.com/o/KH6O231?lb=nxBNmQKY&utm_medium=Share&utm_source=hackbvpe37162&utm_campaign=Online_coding_challenge" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white whitespace-nowrap transition-all duration-200 hover:opacity-90 shadow-[0_0_20px_rgba(207,42,68,0.30)]"
                style={{ background: "var(--primary)" }}
              >
                Register Now
              </Link>
            </div>

            {/* Mobile: logo | menu */}
            <div className="flex md:hidden items-center justify-between gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 min-w-0"
                onClick={(e) => {
                  handleHomeNavigation(e);
                  setMenuOpen(false);
                }}
              >
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="HackBVP"
                    fill
                    className="object-contain drop-shadow-[0_0_12px_rgba(207,42,68,0.45)]"
                    priority
                  />
                </div>
              </Link>

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-panel"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="transition-transform duration-300"
                  style={{ transform: menuOpen ? "rotate(90deg)" : undefined }}
                >
                  {menuOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <>
                      <line x1="4" y1="8" x2="20" y2="8" />
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <line x1="4" y1="16" x2="20" y2="16" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile dropdown — drops from bar, overlaps content below */}
          <div
            id="mobile-nav-panel"
            className={`md:hidden absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden transition-all duration-300 ease-out ${
              menuOpen ? "max-h-[420px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <div
              className={`rounded-2xl border border-white/15 bg-[#0F1217]/90 backdrop-blur-2xl shadow-[0_24px_64px_rgba(0,0,0,0.65)] ring-1 ring-white/10 p-2 mx-0.5 ${
                menuOpen ? "pointer-events-auto" : ""
              }`}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.name === "Home") handleHomeNavigation(e);
                      setMenuOpen(false);
                    }}
                    className="px-4 py-3.5 rounded-xl text-[15px] font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="https://unstop.com/o/KH6O231?lb=nxBNmQKY&utm_medium=Share&utm_source=hackbvpe37162&utm_campaign=Online_coding_challenge" target="_blank" rel="noopener noreferrer"
                  onClick={() => window.open("https://unstop.com/o/KH6O231?lb=nxBNmQKY&utm_medium=Share&utm_source=hackbvpe37162&utm_campaign=Online_coding_challenge", "_blank")}
                  className="mt-1 mx-1 mb-1 px-4 py-3.5 rounded-full text-center text-[15px] font-semibold text-white"
                  style={{ background: "var(--primary)", boxShadow: "0 0 24px rgba(207,42,68,0.45)" }}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

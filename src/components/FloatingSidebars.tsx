"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaLaptopCode,
  FaCalendarAlt,
  FaUsers,
  FaHandshake,
  FaUserTie,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaUsersViewfinder,
} from "react-icons/fa6";

const navItems = [
  // TODO: Update labels and paths to match your actual pages
  { icon: <FaHome className="w-6 h-6" />, label: "HOME", path: "/" },
  {
    icon: <FaLaptopCode className="w-6 h-6" />,
    label: "HACKATHON",
    path: "/hackathon",
  },
  {
    icon: <FaCalendarAlt className="w-6 h-6" />,
    label: "EVENTS",
    path: "/events",
  },
  {
    icons: <FaUsers className="w-6 h-6" />,
    label: "JUDGES",
    path: "/judges",
  },
  { icon: <FaUsers className="w-6 h-6" />, label: "TEAM", path: "/team" },
  {
    icon: <FaHandshake className="w-6 h-6" />,
    label: "SPONSORS",
    path: "/sponsors",
  },
  {
    icons: <FaUsers className="w-6 h-6" />,
    label: "FAQ",
    path: "/FAQ",
  },
];

const socialItems = [
  // TODO: Replace # with your actual social media URLs
  { icon: <FaXTwitter className="w-5 h-5" />, url: "#" },
  { icon: <FaInstagram className="w-5 h-5" />, url: "#" },
  { icon: <FaLinkedin className="w-5 h-5" />, url: "#" },
  { icon: <FaGithub className="w-5 h-5" />, url: "#" },
  { icon: <FaDiscord className="w-5 h-5" />, url: "#" },
];

export function FloatingSidebars() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <style jsx global>{`
        .backdrop-blur-xl {
          backdrop-filter: saturate(180%) blur(24px);
          -webkit-backdrop-filter: saturate(180%) blur(24px);
        }
      `}</style>

      {/* Left sidebar — desktop */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-3 shadow-2xl border border-white/10">
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`flex flex-col items-center px-4 py-3 rounded-xl transition-colors w-full ${
                  isActive(item.path)
                    ? "bg-gradient-to-b from-blue-500/20 to-blue-600/20 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="mb-1.5">{item.icon}</span>
                <span className="text-xs font-medium text-center">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom navbar — mobile */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-2rem)] max-w-md">
        <div className="bg-black/90 backdrop-blur-2xl rounded-2xl p-1.5 shadow-2xl border border-white/10">
          <nav className="flex justify-around">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`flex flex-col items-center p-2.5 rounded-xl transition-all flex-1 max-w-[20%] group ${
                  isActive(item.path)
                    ? "bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-blue-500/20 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span
                  className={`text-xl transition-transform group-hover:scale-110 ${isActive(item.path) ? "text-indigo-400" : ""}`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-[10px] font-medium mt-1 transition-colors ${isActive(item.path) ? "text-indigo-300" : "text-slate-400 group-hover:text-white"}`}
                >
                  {item.label.split(" ")[0]}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1023px) {
          body {
            padding-bottom: 6rem !important;
          }
          .backdrop-blur-2xl {
            -webkit-backdrop-filter: blur(24px) saturate(1.8);
            backdrop-filter: blur(24px) saturate(1.8);
          }
        }
      `}</style>
    </>
  );
}

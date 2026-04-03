import type { Metadata } from "next";
import { Inter, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import PreloaderWrapper from "../components/PreloaderWrapper";
import { Navbar } from "../components/Navbar";
import { StarryBackground } from "../components/StarryBackground";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", weight: ["400", "500", "600"] });
const poppins = Poppins({ subsets: ["latin"], display: "swap", variable: "--font-poppins", weight: ["600", "700", "800"] });
const raleway = Raleway({ subsets: ["latin"], display: "swap", variable: "--font-raleway", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  // TODO: Replace with your event/org name and tagline
  title: "HackBVP 7.0",
  // TODO: Replace with your event description
  description: "YOUR EVENT DESCRIPTION — dates, location, etc.",
  keywords: [
    // TODO: Add your own SEO keywords
    "Your Keyword 1",
    "Your Keyword 2",
    "Your Keyword 3",
  ],
  icons: {
    // TODO: Drop your logo as logo.png into the /public folder
    icon: "/logo.ico",
    apple: "/logo.ico",
  },
};

import SmoothScroll from "../components/SmoothScroll";
import { Providers } from "../components/Providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} ${raleway.variable}`}>
      <body suppressHydrationWarning className="bg-black text-gray-100 antialiased overflow-x-hidden transition-colors duration-500 light-mode:bg-white light-mode:text-gray-900" style={{ background: "var(--background)", color: "var(--foreground)"}}>
        <Providers>
          <SmoothScroll>
            <PreloaderWrapper>
              <Navbar />
              {children}
            </PreloaderWrapper>
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}



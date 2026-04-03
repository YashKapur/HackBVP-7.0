"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType>({ theme: "dark", toggleTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

type JudgeContextType = {
  judgeMode: boolean;
  toggleJudgeMode: () => void;
};
const JudgeContext = createContext<JudgeContextType>({ judgeMode: false, toggleJudgeMode: () => {} });
export const useJudgeMode = () => useContext(JudgeContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [judgeMode, setJudgeMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("hackbvp-theme") as "dark" | "light";
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") document.documentElement.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("hackbvp-theme", newTheme);
    if (newTheme === "light") {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  };

  const toggleJudgeMode = () => setJudgeMode((prev) => !prev);

  // Prevent hydration mismatch
  if (!mounted) return <>{children}</>;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <JudgeContext.Provider value={{ judgeMode, toggleJudgeMode }}>
        {children}
      </JudgeContext.Provider>
    </ThemeContext.Provider>
  );
}

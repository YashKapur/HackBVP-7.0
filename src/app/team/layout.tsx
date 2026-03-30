import type { ReactNode } from "react";

export default function TeamLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F1217] text-[#DAD9D5]">
      {/* Grid background */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="relative">{children}</div>
    </div>
  );
}

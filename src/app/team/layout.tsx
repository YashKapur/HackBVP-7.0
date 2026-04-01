import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatedBackground />
      <FloatingSidebars />
      {children}
    </>
  );
}

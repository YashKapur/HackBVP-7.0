import { AnimatedBackground } from "../../components/AnimatedBackground";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatedBackground />
      {children}
    </>
  );
}

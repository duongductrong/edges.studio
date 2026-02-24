import { createFileRoute } from "@tanstack/react-router";
import { Navbar, HeroSection, TrustedBy } from "~/features/landing";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TrustedBy />
    </main>
  );
}

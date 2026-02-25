import { createFileRoute } from "@tanstack/react-router";
import { HeroSection, TrustedBy } from "~/features/landing";

export const Route = createFileRoute("/_layout/")({
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
    </>
  );
}

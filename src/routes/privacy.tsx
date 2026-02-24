import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "~/features/landing";
import { PrivacyPolicy } from "~/features/legal";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      ...seo({
        title: "Privacy Policy — edges.studio",
        description:
          "Learn how edges.studio handles your data across our applications and website.",
      }),
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}

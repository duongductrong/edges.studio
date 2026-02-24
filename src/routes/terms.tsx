import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "~/features/landing";
import { TermsOfService } from "~/features/legal";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      ...seo({
        title: "Terms of Service — edges.studio",
        description:
          "Terms of Service governing the use of all products and services developed by edges.studio.",
      }),
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TermsOfService />
      <Footer />
    </main>
  );
}

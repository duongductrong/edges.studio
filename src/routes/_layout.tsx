import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar, Footer } from "~/features/landing";

export const Route = createFileRoute("/_layout")({
  component: CommonLayout,
});

function CommonLayout() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

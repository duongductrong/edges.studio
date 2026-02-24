import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md"
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-1">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8C8 8 12 4 18 4C24 4 28 8 28 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="28" cy="8" r="2" fill="currentColor" />
        </svg>
        <span className="text-xl font-semibold tracking-tight text-gray-900">
          edges.
        </span>
      </a>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <a
          href="mailto:hello@edges.studio"
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-gray-900 hover:bg-gray-50"
        >
          Send a message
        </a>
        <a
          href="#book"
          className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Book a call
        </a>
      </div>
    </motion.nav>
  );
}

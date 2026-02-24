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
      <a href="/" className="flex items-center gap-2.5">
        <svg
          width="34"
          height="34"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Main background gradient */}
            <linearGradient
              id="xcBg"
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#4A95F0" />
              <stop offset="45%" stopColor="#3070E0" />
              <stop offset="100%" stopColor="#1A42C8" />
            </linearGradient>
            {/* Top gloss / shine overlay */}
            <linearGradient
              id="xcShine"
              x1="100"
              y1="0"
              x2="100"
              y2="130"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0.28" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            {/* Border gradient - lighter blue to match the Xcode border glow */}
            <linearGradient
              id="xcBorder"
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#9EC4F5" />
              <stop offset="40%" stopColor="#6FA4E8" />
              <stop offset="100%" stopColor="#3A68D8" />
            </linearGradient>
            {/* Clip grid to squircle */}
            <clipPath id="xcClip">
              <rect x="12" y="12" width="176" height="176" rx="46" />
            </clipPath>
          </defs>

          {/* Outer border/glow ring */}
          <rect
            x="0"
            y="0"
            width="200"
            height="200"
            rx="54"
            fill="url(#xcBorder)"
          />
          {/* Main blue squircle */}
          <rect
            x="12"
            y="12"
            width="176"
            height="176"
            rx="46"
            fill="url(#xcBg)"
          />
          {/* Inner edge line for crisp border separation */}
          <rect
            x="12"
            y="12"
            width="176"
            height="176"
            rx="46"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
          />
          {/* Gloss overlay */}
          <rect
            x="12"
            y="12"
            width="176"
            height="176"
            rx="46"
            fill="url(#xcShine)"
          />

          {/* Apple Icon Grid Template - clipped to squircle */}
          <g
            clipPath="url(#xcClip)"
            stroke="rgba(255,255,255,0.30)"
            strokeWidth="1.5"
            fill="none"
          >
            {/* Outer circle */}
            <circle cx="100" cy="100" r="66" />
            {/* Middle circle */}
            <circle cx="100" cy="100" r="44" />
            {/* Inner circle */}
            <circle cx="100" cy="100" r="22" />

            {/* Horizontal center line */}
            <line x1="16" y1="100" x2="184" y2="100" />
            {/* Vertical center line */}
            <line x1="100" y1="16" x2="100" y2="184" />

            {/* Diagonal: top-left to bottom-right */}
            <line x1="28" y1="28" x2="172" y2="172" />
            {/* Diagonal: top-right to bottom-left */}
            <line x1="172" y1="28" x2="28" y2="172" />

            {/* Horizontal grid line - upper */}
            <line x1="16" y1="56" x2="184" y2="56" />
            {/* Horizontal grid line - lower */}
            <line x1="16" y1="144" x2="184" y2="144" />
            {/* Vertical grid line - left */}
            <line x1="56" y1="16" x2="56" y2="184" />
            {/* Vertical grid line - right */}
            <line x1="144" y1="16" x2="144" y2="184" />

            {/* Inner square outline */}
            <rect x="34" y="34" width="132" height="132" />
          </g>
        </svg>
        <span className="text-xl font-semibold tracking-tight text-gray-900">
          edges.
        </span>
      </a>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <a
          href="mailto:info@edges.studio"
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-gray-900 hover:bg-gray-50"
        >
          Support
        </a>
      </div>
    </motion.nav>
  );
}

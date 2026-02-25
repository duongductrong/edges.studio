import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Apps", href: "#" },
  { label: "Changelog", href: "/changelog" },
  { label: "Blog", href: "/blog" },
];

function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
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
        <clipPath id="xcClip">
          <rect x="12" y="12" width="176" height="176" rx="46" />
        </clipPath>
      </defs>
      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        rx="54"
        fill="url(#xcBorder)"
      />
      <rect x="12" y="12" width="176" height="176" rx="46" fill="url(#xcBg)" />
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
      <rect
        x="12"
        y="12"
        width="176"
        height="176"
        rx="46"
        fill="url(#xcShine)"
      />
      <g
        clipPath="url(#xcClip)"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="1.5"
        fill="none"
      >
        <circle cx="100" cy="100" r="66" />
        <circle cx="100" cy="100" r="44" />
        <circle cx="100" cy="100" r="22" />
        <line x1="16" y1="100" x2="184" y2="100" />
        <line x1="100" y1="16" x2="100" y2="184" />
        <line x1="28" y1="28" x2="172" y2="172" />
        <line x1="172" y1="28" x2="28" y2="172" />
        <line x1="16" y1="56" x2="184" y2="56" />
        <line x1="16" y1="144" x2="184" y2="144" />
        <line x1="56" y1="16" x2="56" y2="184" />
        <line x1="144" y1="16" x2="144" y2="184" />
        <rect x="34" y="34" width="132" height="132" />
      </g>
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Default top bar — visible when NOT scrolled */}
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            key="default-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md"
          >
            <a href="/" className="flex items-center gap-2.5">
              <Logo size={34} />
              <span className="text-xl font-semibold tracking-tight text-gray-900">
                edges.
              </span>
            </a>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@edges.studio"
                className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-gray-900 hover:bg-gray-50"
              >
                Support
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating pill nav — visible when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
              key="floating-nav"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="pointer-events-auto flex items-center gap-1 rounded-full border border-gray-200/60 bg-white px-2 py-1.5 shadow-lg shadow-black/6"
            >
              {/* Logo */}
              <a href="/" className="flex items-center pl-2 pr-1">
                <Logo size={28} />
              </a>

              {/* Divider */}
              <div className="mx-1 h-5 w-px bg-gray-200" />

              {/* Nav links */}
              <div className="flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        className="opacity-50"
                      >
                        <path
                          d="M2.5 3.75L5 6.25L7.5 3.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="mx-1 h-5 w-px bg-gray-200" />

              {/* Auth actions */}
              <div className="flex items-center gap-1 pr-1">
                <a
                  href="#"
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="rounded-full bg-edges-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-edges-600"
                >
                  Sign up
                </a>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

const footerLinks = {
  Product: [
    { label: "Snapzy", href: "/snapzy" },
    { label: "OrbitPods", href: "/orbitpods" },
    { label: "All Products", href: "/products" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Changelog", href: "/changelog" },
    { label: "Blog", href: "/blog" },
  ],
  Security: [
    { label: "Privacy Policy", href: "/privacy", internal: true },
    { label: "Terms of Service", href: "/terms", internal: true },
    { label: "Security", href: "/security" },
  ],
  Contact: [
    { label: "Contact Us", href: "mailto:info@edges.studio", external: true },
    { label: "Twitter (X)", href: "https://x.com/edgesstudio", external: true },
    { label: "GitHub", href: "https://github.com/edgesstudio", external: true },
  ],
};

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white border-t border-t-gray-200 pt-20 pb-10"
    >
      <div className="mx-auto max-w-6xl px-8">
        {/* Top section: Logo + Status */}
        <div className="flex items-center justify-between border-b border-gray-100 py-8">
          <a href="/" className="flex items-center gap-2.5">
            <svg
              width="28"
              height="28"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="ftBg"
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
                  id="ftShine"
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
                  id="ftBorder"
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
                <clipPath id="ftClip">
                  <rect x="12" y="12" width="176" height="176" rx="46" />
                </clipPath>
              </defs>
              <rect
                x="0"
                y="0"
                width="200"
                height="200"
                rx="54"
                fill="url(#ftBorder)"
              />
              <rect
                x="12"
                y="12"
                width="176"
                height="176"
                rx="46"
                fill="url(#ftBg)"
              />
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
                fill="url(#ftShine)"
              />
              <g
                clipPath="url(#ftClip)"
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
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              edges.
            </span>
          </a>

          {/* Status Badge */}
          {/* <a
            href="https://status.edges.studio"
            className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            All systems are operational
          </a> */}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-normal text-gray-400">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"internal" in link && link.internal ? (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-700 transition-colors hover:text-gray-900"
                      >
                        {link.label}
                      </Link>
                    ) : "external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 transition-colors hover:text-gray-900"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-gray-700 transition-colors hover:text-gray-900"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-gray-100 py-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} edges.studio
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg
              width="16"
              height="16"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <rect width="200" height="200" rx="54" fill="#6B7280" />
              <text
                x="100"
                y="130"
                textAnchor="middle"
                fill="white"
                fontSize="120"
                fontWeight="bold"
                fontFamily="system-ui"
              >
                e
              </text>
            </svg>
            crafted by edges.studio
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

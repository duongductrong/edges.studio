import { motion } from "motion/react";
import { Logo } from "~/components/Logo";

/**
 * Product mockup — Illustrates edges.studio's cross-platform delivery:
 * Source app icon → Blueprint build panel → Three platform laptops (macOS, Windows, Linux)
 * connected by animated flow lines. Light theme.
 */

/* ── Tiny reusable atoms ── */

function TrafficLights() {
  return (
    <div className="flex items-center gap-1">
      <span className="w-[6px] h-[6px] rounded-full bg-[#FF5F57]" />
      <span className="w-[6px] h-[6px] rounded-full bg-[#FEBC2E]" />
      <span className="w-[6px] h-[6px] rounded-full bg-[#28C840]" />
    </div>
  );
}

/** Electron/React source icon  */
function SourceIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-200/60 mx-auto"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="5"
          stroke="white"
          strokeWidth="1.2"
          fill="none"
          opacity="0.7"
          transform="rotate(-30 16 16)"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="5"
          stroke="white"
          strokeWidth="1.2"
          fill="none"
          opacity="0.7"
          transform="rotate(30 16 16)"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="5"
          stroke="white"
          strokeWidth="1.2"
          fill="none"
          opacity="0.7"
          transform="rotate(90 16 16)"
        />
        <circle cx="16" cy="16" r="3" fill="white" />
      </svg>
    </motion.div>
  );
}

/** Central blueprint/build panel — professional circuit-board design (light) */
function BlueprintPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-[320px] md:w-[420px] h-[190px] md:h-[240px] rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #E8F0FE 0%, #D4E4FC 30%, #C7DBFA 60%, #DAEAFF 100%)",
        boxShadow:
          "0 0 0 1px rgba(147,197,253,0.5), 0 8px 32px rgba(59,130,246,0.12), 0 2px 8px rgba(59,130,246,0.08)",
      }}
    >
      {/* ── Background circuit-board hexagonal pattern ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 420 240"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Hexagonal grid pattern */}
          <pattern
            id="hexGrid"
            x="0"
            y="0"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z"
              stroke="#93C5FD"
              strokeWidth="0.6"
              fill="none"
              opacity="0.35"
            />
            <path
              d="M60 0 L90 15 L90 37 L60 52 L30 37 L30 15 Z"
              stroke="#93C5FD"
              strokeWidth="0.6"
              fill="none"
              opacity="0.35"
            />
          </pattern>
        </defs>

        {/* Fill entire background with hex grid */}
        <rect width="420" height="240" fill="url(#hexGrid)" />

        {/* ── Circuit trace lines extending to edges ── */}
        {/* Top-right traces */}
        <path
          d="M320 40 L350 40 L370 20"
          stroke="#93C5FD"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M370 20 L390 20"
          stroke="#93C5FD"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M350 40 L350 10"
          stroke="#93C5FD"
          strokeWidth="1.2"
          fill="none"
          opacity="0.4"
        />
        {/* Angle connector top-right */}
        <path
          d="M340 60 L360 60 L380 40"
          stroke="#93C5FD"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />

        {/* Top-left traces */}
        <path
          d="M100 40 L70 40 L50 20"
          stroke="#93C5FD"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M50 20 L30 20"
          stroke="#93C5FD"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M70 40 L70 10"
          stroke="#93C5FD"
          strokeWidth="1.2"
          fill="none"
          opacity="0.4"
        />

        {/* Bottom-left traces */}
        <path
          d="M100 200 L70 200 L50 220"
          stroke="#93C5FD"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M50 220 L30 220"
          stroke="#93C5FD"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />

        {/* Bottom-right traces */}
        <path
          d="M320 200 L350 200 L370 220"
          stroke="#93C5FD"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M370 220 L390 220"
          stroke="#93C5FD"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />

        {/* Mid horizontal traces */}
        <path
          d="M0 120 L40 120"
          stroke="#93C5FD"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M380 120 L420 120"
          stroke="#93C5FD"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
        />

        {/* ── Junction nodes at circuit intersections ── */}
        {/* Small filled dots at trace endpoints */}
        <circle cx="350" cy="40" r="2.5" fill="#7CB8F7" opacity="0.7" />
        <circle cx="70" cy="40" r="2.5" fill="#7CB8F7" opacity="0.7" />
        <circle cx="70" cy="200" r="2.5" fill="#7CB8F7" opacity="0.7" />
        <circle cx="350" cy="200" r="2.5" fill="#7CB8F7" opacity="0.7" />

        {/* ── Large corner node circles with rings ── */}
        {/* Top-left */}
        <circle
          cx="60"
          cy="50"
          r="8"
          stroke="#93C5FD"
          strokeWidth="1.5"
          fill="#E0EDFE"
          opacity="0.7"
        />
        <circle cx="60" cy="50" r="3.5" fill="#7CB8F7" opacity="0.8" />

        {/* Top-right */}
        <circle
          cx="360"
          cy="50"
          r="8"
          stroke="#93C5FD"
          strokeWidth="1.5"
          fill="#E0EDFE"
          opacity="0.7"
        />
        <circle cx="360" cy="50" r="3.5" fill="#7CB8F7" opacity="0.8" />

        {/* Bottom-left */}
        <circle
          cx="60"
          cy="190"
          r="8"
          stroke="#93C5FD"
          strokeWidth="1.5"
          fill="#E0EDFE"
          opacity="0.7"
        />
        <circle cx="60" cy="190" r="3.5" fill="#7CB8F7" opacity="0.8" />

        {/* Bottom-right */}
        <circle
          cx="360"
          cy="190"
          r="8"
          stroke="#93C5FD"
          strokeWidth="1.5"
          fill="#E0EDFE"
          opacity="0.7"
        />
        <circle cx="360" cy="190" r="3.5" fill="#7CB8F7" opacity="0.8" />
      </svg>

      {/* ── Inner frosted panel ── */}
      <div
        className="absolute rounded-xl flex items-center justify-center"
        style={{
          top: "14px",
          left: "14px",
          right: "14px",
          bottom: "14px",
          background:
            "linear-gradient(160deg, rgba(219,234,254,0.65) 0%, rgba(199,219,250,0.45) 50%, rgba(218,234,255,0.55) 100%)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(147,197,253,0.4)",
          boxShadow: "inset 0 1px 2px rgba(255,255,255,0.5)",
        }}
      >
        {/* Center — Logo mark (large) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <Logo size={90} />
        </motion.div>
      </div>

      {/* ── Glowing accent at bottom-right ── */}
      <div
        className="absolute bottom-0 right-0 w-24 h-16 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(96,165,250,0.25) 0%, transparent 70%)",
        }}
      />

      {/* ── Top edge glow line ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 md:w-52 h-[2px] bg-linear-to-r from-transparent via-blue-300/60 to-transparent" />

      {/* ── Bottom edge glow line ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-[1.5px] bg-linear-to-r from-transparent via-blue-300/40 to-transparent" />
    </motion.div>
  );
}

/** Laptop frame with app window inside */
function LaptopMockup({
  label,
  wallpaperClass,
  delay,
}: {
  label: string;
  wallpaperClass: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center min-w-0"
    >
      {/* Screen bezel */}
      <div className="w-[140px] md:w-[180px] rounded-t-lg border border-gray-200 bg-gray-800 p-[3px] shadow-lg shadow-gray-200/40">
        {/* Screen content */}
        <div className={`rounded-[4px] overflow-hidden ${wallpaperClass}`}>
          {/* Mini app window */}
          <div className="m-1.5 md:m-2 rounded-md bg-gray-900/80 backdrop-blur-sm shadow-sm border border-white/10 overflow-hidden">
            {/* Mini title bar */}
            <div className="flex items-center h-4 px-1.5 bg-gray-800/90 border-b border-white/5">
              <TrafficLights />
              <span className="text-[5px] md:text-[6px] text-white/50 ml-auto mr-auto">
                MacOS App
              </span>
            </div>
            {/* Mini content */}
            <div className="p-1.5 space-y-1">
              <div className="h-1 w-3/4 rounded bg-white/10" />
              <div className="h-1 w-1/2 rounded bg-white/10" />
              <div className="flex gap-1 mt-1">
                <div className="h-4 flex-1 rounded bg-white/5" />
              </div>
            </div>
            {/* Bottom bar */}
            <div className="flex items-center justify-between px-1.5 py-1 border-t border-white/5">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-sm bg-white/10" />
                <div className="h-0.5 w-10 md:w-14 rounded bg-white/10" />
              </div>
              <div className="flex gap-0.5">
                <div className="w-2 h-2 rounded-sm bg-white/10" />
                <div className="w-2 h-2 rounded-sm bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop base/hinge */}
      <div className="w-[160px] md:w-[200px] h-[6px] rounded-b-lg bg-linear-to-b from-gray-300 to-gray-200 border-x border-b border-gray-300 shadow-sm" />
      {/* Platform label */}
      <span className="text-[10px] md:text-xs font-medium text-gray-500 mt-0.5">
        {label}
      </span>
    </motion.div>
  );
}

/* ── Main component ───────────────────────────────────── */

export function ProductMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-14 w-full max-w-4xl"
    >
      {/* Decorative background glow */}
      <div className="absolute -inset-8 bg-linear-to-b from-blue-50/50 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* ══ Illustration container ══ */}
      <div className="relative rounded-2xl bg-linear-to-b from-[#F0F4FF] via-white to-[#F8FAFF] border border-gray-200/50 shadow-xl shadow-gray-200/30 overflow-hidden px-6 py-10 md:px-10 md:py-14">
        {/* === Layer 1: Source Icon === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Logo size={56} />
        </motion.div>

        {/* === Connection line: icon → blueprint (electric flow) === */}
        <div className="relative mx-auto w-6 h-8 md:h-10">
          {/* Static track */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-blue-200 origin-top"
          />
          {/* Electric pulse overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="absolute left-1/2 -translate-x-1/2 w-px h-full origin-top overflow-hidden"
          >
            <div
              className="w-full h-[200%] bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_4px,#60A5FA_4px,#60A5FA_8px,transparent_8px,transparent_16px)]"
              style={{
                animation: "electricFlowDown 1s linear infinite",
              }}
            />
          </motion.div>
          {/* Traveling glow dot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_2px_rgba(96,165,250,0.6)]"
            style={{
              animation: "travelDown 1.5s ease-in-out infinite",
            }}
          />
        </div>

        {/* === Layer 2: Blueprint Build Panel === */}
        <BlueprintPanel />

        {/* === Connection lines: blueprint → laptops (electric flow) === */}
        <div className="relative h-12 md:h-16 mx-auto max-w-[500px]">
          {/* Inline keyframes for electric animations */}
          <style>{`
            @keyframes electricFlowDown {
              from { transform: translateY(-50%); }
              to { transform: translateY(0%); }
            }
            @keyframes travelDown {
              0% { top: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
            @keyframes dashFlow {
              to { stroke-dashoffset: -24; }
            }
            @keyframes pulseLeft {
              0% { offset-distance: 0%; opacity: 0; }
              5% { opacity: 1; }
              95% { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
          `}</style>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 500 64"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* ── Static track lines ── */}
            {/* Center */}
            <motion.line
              x1="250"
              y1="0"
              x2="250"
              y2="64"
              stroke="#BFDBFE"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            />
            {/* Left branch */}
            <motion.path
              d="M250 0 L250 24 L80 24 L80 64"
              stroke="#BFDBFE"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            />
            {/* Right branch */}
            <motion.path
              d="M250 0 L250 24 L420 24 L420 64"
              stroke="#BFDBFE"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            />

            {/* ── Electric dash overlays (animated) ── */}
            {/* Center electric */}
            <motion.line
              x1="250"
              y1="0"
              x2="250"
              y2="64"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              style={{ animation: "dashFlow 0.6s linear infinite" }}
            />
            {/* Left branch electric */}
            <motion.path
              d="M250 0 L250 24 L80 24 L80 64"
              stroke="#60A5FA"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              style={{ animation: "dashFlow 0.6s linear infinite" }}
            />
            {/* Right branch electric */}
            <motion.path
              d="M250 0 L250 24 L420 24 L420 64"
              stroke="#60A5FA"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              style={{ animation: "dashFlow 0.6s linear infinite" }}
            />

            {/* ── Traveling glow particles ── */}
            {/* Center particle */}
            <motion.circle
              r="3"
              fill="#3B82F6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              style={{
                offsetPath: "path('M250 0 L250 64')",
                animation: "pulseLeft 1.2s ease-in-out infinite",
                filter: "drop-shadow(0 0 4px rgba(59,130,246,0.7))",
              }}
            />
            {/* Left particle */}
            <motion.circle
              r="3"
              fill="#3B82F6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              style={{
                offsetPath: "path('M250 0 L250 24 L80 24 L80 64')",
                animation: "pulseLeft 1.8s ease-in-out infinite 0.3s",
                filter: "drop-shadow(0 0 4px rgba(59,130,246,0.7))",
              }}
            />
            {/* Right particle */}
            <motion.circle
              r="3"
              fill="#3B82F6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              style={{
                offsetPath: "path('M250 0 L250 24 L420 24 L420 64')",
                animation: "pulseLeft 1.8s ease-in-out infinite 0.6s",
                filter: "drop-shadow(0 0 4px rgba(59,130,246,0.7))",
              }}
            />

            {/* ── Endpoint glow dots ── */}
            <motion.circle
              cx="80"
              cy="60"
              r="3.5"
              fill="#3B82F6"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{ delay: 1.4, duration: 2, repeat: Infinity }}
              style={{ filter: "drop-shadow(0 0 4px rgba(59,130,246,0.5))" }}
            />
            <motion.circle
              cx="250"
              cy="60"
              r="3.5"
              fill="#3B82F6"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
              style={{ filter: "drop-shadow(0 0 4px rgba(59,130,246,0.5))" }}
            />
            <motion.circle
              cx="420"
              cy="60"
              r="3.5"
              fill="#3B82F6"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{ delay: 1.6, duration: 2, repeat: Infinity }}
              style={{ filter: "drop-shadow(0 0 4px rgba(59,130,246,0.5))" }}
            />
          </svg>
        </div>

        {/* === Layer 3: Platform Laptops === */}
        <div className="flex items-end justify-center gap-4 md:gap-8">
          <LaptopMockup
            label="macOS"
            wallpaperClass="bg-linear-to-br from-amber-400 via-orange-400 to-sky-400 h-[80px] md:h-[100px]"
            delay={1.2}
          />
          <LaptopMockup
            label="Windows"
            wallpaperClass="bg-linear-to-br from-sky-900 via-blue-800 to-indigo-900 h-[80px] md:h-[100px]"
            delay={1.35}
          />
          <LaptopMockup
            label="Linux"
            wallpaperClass="bg-linear-to-br from-rose-500 via-red-400 to-orange-400 h-[80px] md:h-[100px]"
            delay={1.5}
          />
        </div>
      </div>
    </motion.div>
  );
}

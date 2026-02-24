import { motion } from "motion/react";

/**
 * Multi-platform product mockup — 3 overlapping device frames showcasing
 * macOS desktop, mobile (iOS/Android), and web browser applications.
 * Matches the hero copy: "Desktop & web applications."
 */
export function ProductMockup() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative mx-auto mt-16 w-full max-w-2xl h-[400px] md:h-[440px]"
    >
      {/* Decorative blurred background glow */}
      <div className="absolute inset-0 -inset-x-8 -top-10 bg-gradient-to-b from-blue-50/60 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* === Left — Mobile App (iPhone frame) === */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-2 md:left-10 top-10 w-[120px] md:w-[140px] h-[220px] md:h-[260px] rounded-[20px] md:rounded-[24px] bg-white shadow-xl shadow-gray-300/40 overflow-hidden border-[2px] border-gray-200 z-[15]"
      >
        {/* Status bar */}
        <div className="h-5 md:h-6 bg-gray-50 flex items-center justify-between px-2.5">
          <div className="text-[5px] md:text-[6px] font-medium text-gray-400">
            9:41
          </div>
          <div className="w-12 md:w-14 h-3 md:h-3.5 rounded-full bg-gray-900 mx-auto" />
          <div className="flex gap-0.5">
            <div className="w-2 h-1.5 rounded-sm bg-gray-300" />
            <div className="w-2 h-1.5 rounded-sm bg-gray-300" />
          </div>
        </div>

        {/* App content — social/productivity app */}
        <div className="p-2 md:p-2.5 space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="text-[7px] md:text-[8px] font-bold text-gray-900">
              Feed
            </div>
            <div className="w-3.5 h-3.5 rounded-full bg-gray-100 border border-gray-200" />
          </div>

          {/* Story-style circles */}
          <div className="flex gap-1.5">
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-[1.5px] border-white shadow-sm" />
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 border-[1.5px] border-white shadow-sm" />
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 border-[1.5px] border-white shadow-sm" />
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-100 border-[1.5px] border-gray-200" />
          </div>

          {/* Card post */}
          <div className="rounded-lg bg-gray-50 border border-gray-100 p-1.5 space-y-1.5">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-300" />
              <div className="h-1 w-8 rounded bg-gray-300" />
            </div>
            <div className="h-10 md:h-12 w-full rounded bg-gradient-to-br from-blue-100 to-blue-50" />
            <div className="h-1 w-full rounded bg-gray-200" />
            <div className="h-1 w-2/3 rounded bg-gray-100" />
          </div>

          {/* Another card */}
          <div className="rounded-lg bg-gray-50 border border-gray-100 p-1.5 space-y-1">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-300" />
              <div className="h-1 w-10 rounded bg-gray-300" />
            </div>
            <div className="h-6 md:h-8 w-full rounded bg-gradient-to-br from-emerald-50 to-emerald-100" />
          </div>
        </div>

        {/* Bottom tab bar */}
        <div className="absolute bottom-0 left-0 right-0 h-6 md:h-7 bg-white/90 backdrop-blur-sm border-t border-gray-100 flex items-center justify-around px-3">
          <div className="w-2.5 h-2.5 rounded bg-gray-900" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
          <div className="w-2.5 h-2.5 rounded bg-gray-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        </div>
      </motion.div>

      {/* === Right — Web Browser App === */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 5 }}
        transition={{ duration: 0.65, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 md:right-4 top-4 w-[240px] md:w-[280px] h-[185px] md:h-[215px] rounded-xl bg-white shadow-xl shadow-gray-200/60 overflow-hidden border border-gray-200/80 z-10"
      >
        {/* Browser chrome */}
        <div className="h-7 bg-gray-100 flex items-center px-2.5 gap-1.5 border-b border-gray-200/60">
          <span className="w-2 h-2 rounded-full bg-red-400/70" />
          <span className="w-2 h-2 rounded-full bg-amber-400/70" />
          <span className="w-2 h-2 rounded-full bg-green-400/70" />
          {/* URL bar */}
          <div className="ml-2 flex-1 h-3.5 rounded-md bg-white border border-gray-200 flex items-center px-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1" />
            <div className="h-1 w-16 rounded bg-gray-200" />
          </div>
        </div>

        {/* Web app content — analytics dashboard */}
        <div className="p-2.5 flex gap-2">
          {/* Sidebar nav */}
          <div className="w-10 space-y-1.5 shrink-0">
            <div className="h-3 w-full rounded bg-blue-500 flex items-center justify-center">
              <span className="text-[4px] font-bold text-white">E</span>
            </div>
            <div className="h-1.5 w-full rounded bg-gray-200" />
            <div className="h-1.5 w-7 rounded bg-gray-100" />
            <div className="h-1.5 w-full rounded bg-blue-100" />
            <div className="h-1.5 w-7 rounded bg-gray-100" />
            <div className="mt-1 h-px w-full bg-gray-100" />
            <div className="h-1.5 w-full rounded bg-gray-100" />
          </div>

          {/* Dashboard content */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-[7px] font-bold text-gray-800">
                Analytics
              </div>
              <div className="flex gap-1">
                <div className="h-3 w-8 rounded-full bg-gray-100 border border-gray-200" />
                <div className="h-3 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-[4px] text-white">Export</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-1">
              <div className="h-8 rounded bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 p-1">
                <div className="h-0.5 w-4 rounded bg-blue-300 mb-0.5" />
                <div className="h-2 w-5 rounded bg-blue-200" />
              </div>
              <div className="h-8 rounded bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-100 p-1">
                <div className="h-0.5 w-4 rounded bg-emerald-300 mb-0.5" />
                <div className="h-2 w-5 rounded bg-emerald-200" />
              </div>
              <div className="h-8 rounded bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-100 p-1">
                <div className="h-0.5 w-4 rounded bg-amber-300 mb-0.5" />
                <div className="h-2 w-5 rounded bg-amber-200" />
              </div>
            </div>

            {/* Chart */}
            <div className="h-14 rounded-lg bg-gray-50 border border-gray-100 flex items-end gap-[3px] px-2 pb-1.5">
              <div className="w-1.5 h-4 rounded-t bg-blue-200" />
              <div className="w-1.5 h-6 rounded-t bg-blue-300" />
              <div className="w-1.5 h-3 rounded-t bg-blue-200" />
              <div className="w-1.5 h-8 rounded-t bg-blue-400" />
              <div className="w-1.5 h-5 rounded-t bg-blue-300" />
              <div className="w-1.5 h-7 rounded-t bg-blue-400" />
              <div className="w-1.5 h-4 rounded-t bg-blue-200" />
              <div className="w-1.5 h-9 rounded-t bg-blue-500" />
              <div className="w-1.5 h-6 rounded-t bg-blue-300" />
              <div className="w-1.5 h-5 rounded-t bg-blue-200" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* === Center — macOS Desktop App (main, highest z) === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 -translate-x-1/2 top-8 w-[300px] md:w-[360px] h-[230px] md:h-[270px] rounded-xl bg-white shadow-2xl shadow-gray-300/50 overflow-hidden border border-gray-200 z-20"
      >
        {/* macOS title bar with traffic lights */}
        <div className="h-7 bg-gray-50 flex items-center px-3 gap-1.5 border-b border-gray-100">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="ml-auto flex-1 text-center">
            <span className="text-[7px] md:text-[8px] font-medium text-gray-400">
              Snapzy
            </span>
          </div>
          {/* Window controls */}
          <div className="flex gap-1">
            <div className="w-3 h-2.5 rounded-sm bg-gray-200" />
            <div className="w-3 h-2.5 rounded-sm bg-gray-200" />
          </div>
        </div>

        {/* Annotation toolbar */}
        <div className="h-6 bg-gray-50/60 border-b border-gray-100 flex items-center px-3 gap-1.5">
          {/* Tool icons — cursor, selection, arrow, rectangle, text, blur */}
          <div className="w-4 h-3.5 rounded bg-blue-500/20 border border-blue-300 flex items-center justify-center">
            <div className="w-1.5 h-1.5 border-l border-t border-blue-500 -rotate-[5deg]" />
          </div>
          <div className="w-4 h-3.5 rounded bg-gray-100 border border-gray-200 flex items-center justify-center">
            <div className="w-2 h-1.5 border border-dashed border-gray-400 rounded-sm" />
          </div>
          <div className="w-4 h-3.5 rounded bg-gray-100 border border-gray-200 flex items-center justify-center">
            <div className="w-2.5 h-0 border-t border-gray-400 rotate-[-30deg]" />
          </div>
          <div className="w-4 h-3.5 rounded bg-gray-100 border border-gray-200 flex items-center justify-center">
            <div className="w-2 h-1.5 border border-gray-400 rounded-sm" />
          </div>
          <div className="w-4 h-3.5 rounded bg-gray-100 border border-gray-200 flex items-center justify-center">
            <span className="text-[5px] font-bold text-gray-400">T</span>
          </div>
          <div className="h-3 w-px bg-gray-200 mx-0.5" />
          {/* Color picker dots */}
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 border border-white shadow-sm" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 border border-white shadow-sm" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white shadow-sm" />
          <div className="ml-auto flex gap-1">
            <div className="h-3.5 px-1.5 rounded bg-gray-100 border border-gray-200 flex items-center">
              <span className="text-[5px] text-gray-400">Copy</span>
            </div>
            <div className="h-3.5 px-1.5 rounded-full bg-blue-500 flex items-center">
              <span className="text-[5px] text-white font-medium">Save</span>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100%-3.25rem)]">
          {/* Captures sidebar — recent screenshots/recordings */}
          <div className="w-14 md:w-16 bg-gray-50/50 border-r border-gray-100 p-1.5 space-y-1.5 overflow-hidden">
            <div className="text-[5px] font-semibold text-gray-400 uppercase tracking-wider px-0.5">
              Recent
            </div>
            {/* Thumbnail previews */}
            <div className="w-full aspect-[4/3] rounded bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-400 shadow-sm" />
            <div className="w-full aspect-[4/3] rounded bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200" />
            <div className="w-full aspect-[4/3] rounded bg-gradient-to-br from-emerald-50 to-emerald-100 border border-gray-200 relative">
              {/* Play icon for recording */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-900/50 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[2.5px] border-l-white border-y-[1.5px] border-y-transparent ml-0.5" />
                </div>
              </div>
            </div>
            <div className="w-full aspect-[4/3] rounded bg-gradient-to-br from-amber-50 to-amber-100 border border-gray-200" />
          </div>

          {/* Main canvas — screenshot with annotations */}
          <div className="flex-1 p-2 md:p-2.5 bg-gray-100/30 flex items-center justify-center">
            <div className="w-full h-full rounded-lg bg-white border border-gray-200 shadow-sm relative overflow-hidden">
              {/* Simulated captured screenshot content */}
              <div className="p-2 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
                  <div className="h-1.5 w-16 rounded bg-gray-100 ml-1" />
                </div>
                <div className="h-1.5 w-3/4 rounded bg-gray-100" />
                <div className="h-1.5 w-1/2 rounded bg-gray-100" />
                <div className="flex gap-1 mt-1">
                  <div className="h-8 flex-1 rounded bg-gray-50" />
                  <div className="h-8 flex-1 rounded bg-gray-50" />
                </div>
                <div className="h-1.5 w-full rounded bg-gray-100" />
                <div className="h-1.5 w-2/3 rounded bg-gray-100" />
              </div>

              {/* Annotation overlays */}
              {/* Red rectangle highlight */}
              <div className="absolute top-6 left-4 w-16 h-6 border-2 border-red-500 rounded" />
              {/* Arrow */}
              <svg
                className="absolute top-[52px] left-[82px]"
                width="30"
                height="16"
                viewBox="0 0 30 16"
                fill="none"
              >
                <path
                  d="M0 12 Q10 0 28 4"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M24 1 L28 4 L23 6"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              {/* Text annotation */}
              <div className="absolute top-[52px] right-3 bg-blue-500 rounded px-1 py-0.5">
                <span className="text-[5px] text-white font-medium">
                  Fix this!
                </span>
              </div>
              {/* Numbered step circle */}
              <div className="absolute bottom-6 left-6 w-3.5 h-3.5 rounded-full bg-red-500 flex items-center justify-center shadow-sm">
                <span className="text-[5px] text-white font-bold">1</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

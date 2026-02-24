import { motion } from "motion/react";

/**
 * Floating product mockup illustration — 3 overlapping browser/app screenshots
 * with scattered alphabet letters, matching the reference image.
 */
export function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] h-[320px]">
      {/* Scattered alphabet letters */}
      <FloatingLetter letter="C" top="8%" left="68%" delay={0.3} />
      <FloatingLetter letter="H" top="40%" left="28%" delay={0.5} />
      <FloatingLetter letter="A" top="52%" left="58%" delay={0.7} />
      <FloatingLetter letter="N" top="30%" left="72%" delay={0.4} />
      <FloatingLetter letter="F" top="22%" left="82%" delay={0.6} />

      {/* Back card — dark theme (tablet/dark mockup) */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: 4 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute right-2 top-4 w-[220px] h-[160px] rounded-xl bg-gray-900 shadow-2xl overflow-hidden border border-gray-700"
      >
        <div className="h-5 bg-gray-800 flex items-center px-2 gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
        </div>
        <div className="p-3 space-y-2">
          <div className="h-2 w-3/4 rounded bg-gray-700" />
          <div className="h-2 w-1/2 rounded bg-gray-700" />
          <div className="flex gap-2 mt-3">
            <div className="h-6 w-12 rounded bg-gray-700" />
            <div className="h-6 w-16 rounded bg-gray-700" />
          </div>
          <div className="h-2 w-full rounded bg-gray-800 mt-2" />
          <div className="h-2 w-2/3 rounded bg-gray-800" />
        </div>
      </motion.div>

      {/* Middle card — blue/gradient theme */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="absolute left-8 top-0 w-[240px] h-[170px] rounded-xl bg-white shadow-2xl overflow-hidden border border-gray-200 z-10"
      >
        <div className="h-5 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center px-2 gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
        <div className="p-3 space-y-2">
          <div className="text-[8px] font-semibold text-gray-800">
            Product Overview
          </div>
          <div className="h-1.5 w-full rounded bg-gray-100" />
          <div className="h-1.5 w-3/4 rounded bg-gray-100" />
          <div className="flex gap-1.5 mt-2">
            <div className="h-8 w-14 rounded bg-gradient-to-br from-green-100 to-green-200 border border-green-200" />
            <div className="h-8 w-14 rounded bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-200" />
            <div className="h-8 w-14 rounded bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-200" />
          </div>
        </div>
      </motion.div>

      {/* Front card — main white mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0 }}
        className="absolute left-1/2 -translate-x-1/2 top-8 w-[260px] h-[180px] rounded-xl bg-white shadow-2xl overflow-hidden border border-gray-200 z-20"
      >
        <div className="h-5 bg-gray-100 flex items-center px-2 gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <div className="ml-auto h-2 w-20 rounded bg-gray-200" />
        </div>
        <div className="p-3 space-y-2">
          <div className="text-[9px] font-bold text-gray-900">
            edges.studio
          </div>
          <div className="text-[7px] text-gray-500">
            Crafting premium digital products
          </div>
          <div className="h-1.5 w-full rounded bg-gray-100" />
          <div className="h-1.5 w-2/3 rounded bg-gray-100" />
          <div className="flex gap-2 mt-2">
            <div className="h-5 w-12 rounded-full bg-gray-900" />
            <div className="h-5 w-16 rounded-full border border-gray-300" />
          </div>
          <div className="grid grid-cols-3 gap-1 mt-2">
            <div className="h-6 rounded bg-gray-50 border border-gray-100" />
            <div className="h-6 rounded bg-gray-50 border border-gray-100" />
            <div className="h-6 rounded bg-gray-50 border border-gray-100" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FloatingLetter({
  letter,
  top,
  left,
  delay = 0,
}: {
  letter: string;
  top: string;
  left: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.18, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="absolute text-2xl font-light text-gray-400 select-none pointer-events-none"
      style={{ top, left }}
    >
      {letter}
    </motion.span>
  );
}

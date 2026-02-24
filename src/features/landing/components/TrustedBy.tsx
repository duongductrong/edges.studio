import { motion } from "motion/react";

const logos = [
  { name: "Tesseract", style: "font-light tracking-widest" },
  { name: "someone2", style: "font-black tracking-tight italic" },
  { name: "PARRY", style: "font-bold tracking-[0.25em] uppercase" },
];

export function TrustedBy() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xs text-gray-400 tracking-widest uppercase mb-8"
        >
          Trusted by
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-12 md:gap-16"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {logo.name === "Tesseract" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="opacity-50"
                >
                  <rect
                    x="2"
                    y="2"
                    width="16"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="2"
                    y1="2"
                    x2="5"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="18"
                    y1="2"
                    x2="15"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="2"
                    y1="18"
                    x2="5"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="18"
                    y1="18"
                    x2="15"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              )}
              {logo.name === "PARRY" && (
                <span className="text-sm opacity-60">⊔⊔</span>
              )}
              <span className={`text-lg md:text-xl ${logo.style}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

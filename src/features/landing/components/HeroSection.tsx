import { motion } from "motion/react";
import { ProductMockup } from "./ProductMockup";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 px-6">
      <div className="mx-auto max-w-3xl text-center">
        {/* Product Mockup Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProductMockup />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-gray-900 mt-8 font-semibold"
        >
          Crafting premium
          <br />
          digital products
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-base md:text-lg text-gray-500 max-w-md mx-auto leading-relaxed"
        >
          Desktop & web applications delivered with meticulous attention to
          detail.
          <br />
          No templates, no back-and-forth.
        </motion.p>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-baseline justify-center gap-3"
        >
          <span className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight">
            $2,500
          </span>
          <span className="text-xl text-gray-400 line-through">$5,000</span>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <span className="text-sm text-gray-400 tracking-wide">
            Limited availability
          </span>

          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-gray-800 hover:shadow-md"
            >
              Book a project
            </a>
            <a
              href="mailto:hello@edges.studio"
              className="inline-flex items-center rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-gray-900 hover:bg-gray-50"
            >
              Send a message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ProductMockup } from "./ProductMockup";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 px-6">
      <div className="mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-gray-900 mt-8 font-semibold"
        >
          Crafting{" "}
          <img
            src="/xcode-app.png"
            alt="xcode-app"
            className="size-20 inline-block"
          />{" "}
          premium
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

        <ProductMockup />
      </div>
    </section>
  );
}

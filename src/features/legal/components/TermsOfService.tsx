import { motion } from "motion/react";

export function TermsOfService() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mx-auto max-w-3xl px-6 pt-32 pb-24"
    >
      <header className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-base text-gray-500">
          Please read these terms carefully before using any edges.studio
          product or service.
        </p>
      </header>

      <div className="space-y-10 text-[15px] leading-relaxed text-gray-700">
        {/* 1 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing the edges.studio website or downloading and using any
            application developed by edges.studio, you agree to be bound by
            these Terms of Service. If you do not agree to these terms, please
            do not use our products or services.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            2. Products &amp; Services
          </h2>
          <p>
            edges.studio develops premium desktop, mobile, and web applications.
            These Terms apply to all products and services developed and
            published by edges.studio, including the{" "}
            <a
              href="https://edges.studio"
              className="text-blue-600 underline decoration-blue-300 underline-offset-2 transition-colors hover:text-blue-800"
            >
              edges.studio website
            </a>
            .
          </p>
          <p className="mt-3">
            We reserve the right to modify, suspend, or discontinue any product
            or feature at any time without prior notice.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            3. Licence &amp; Usage Rights
          </h2>
          <p>
            Subject to your compliance with these Terms, edges.studio grants you
            a limited, non-exclusive, non-transferable, revocable licence to use
            our products for personal or commercial purposes in accordance with
            any applicable product-specific licence agreements or App Store
            terms.
          </p>
          <p className="mt-3">
            You agree <strong>not</strong> to:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-gray-600">
            <li>
              Reverse-engineer, decompile, or disassemble any edges.studio
              product
            </li>
            <li>
              Redistribute, sublicence, or resell any product without written
              permission
            </li>
            <li>
              Use our products in any way that violates applicable laws or
              regulations
            </li>
            <li>
              Remove, alter, or obscure any copyright, trademark, or proprietary
              notices
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            4. Intellectual Property
          </h2>
          <p>
            All content, design, code, trademarks, and intellectual property
            related to edges.studio and its products are the exclusive property
            of edges.studio. Nothing in these Terms grants you any right to use
            our trademarks, logos, or brand assets without prior written
            consent.
          </p>
          <p className="mt-3">
            Content you create using our products (screenshots, recordings,
            annotations) remains <strong>entirely yours</strong>. We claim no
            ownership over user-generated content.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            5. User Responsibilities
          </h2>
          <p>By using our products and services, you agree to:</p>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-gray-600">
            <li>
              Use them only for lawful purposes and in compliance with all
              applicable laws
            </li>
            <li>
              Not use them to capture, store, or distribute content that
              infringes on the rights of others
            </li>
            <li>
              Maintain appropriate security on your own devices and accounts
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            6. Disclaimer of Warranties
          </h2>
          <p>
            Our products and services are provided{" "}
            <strong>"as is" and "as available"</strong> without warranties of
            any kind, whether express or implied, including but not limited to
            implied warranties of merchantability, fitness for a particular
            purpose, and non-infringement.
          </p>
          <p className="mt-3">
            We do not warrant that our products will be uninterrupted,
            error-free, or free of harmful components.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, edges.studio and
            its owners, employees, and contributors shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including loss of data, revenue, or profits, arising out of or
            related to your use of our products or services.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            8. Termination
          </h2>
          <p>
            We may terminate or suspend your access to our services at our sole
            discretion, without notice, for conduct that we believe violates
            these Terms or is harmful to other users or edges.studio.
          </p>
          <p className="mt-3">
            Upon termination, your licence to use our products is revoked. Any
            provisions that by their nature should survive termination (such as
            intellectual property, limitation of liability, and indemnification)
            will remain in effect.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            9. Changes to These Terms
          </h2>
          <p>
            We reserve the right to update or modify these Terms at any time.
            Changes will be posted on this page. Your continued use of our
            products or services after changes are posted constitutes acceptance
            of the revised terms.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            10. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which edges.studio operates, without
            regard to conflict-of-law principles.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            11. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at{" "}
            <a
              href="mailto:info@edges.studio"
              className="text-blue-600 underline decoration-blue-300 underline-offset-2 transition-colors hover:text-blue-800"
            >
              info@edges.studio
            </a>
            .
          </p>
        </section>
      </div>
    </motion.article>
  );
}

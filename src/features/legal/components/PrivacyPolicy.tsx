export function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Your privacy matters to us. This policy explains how edges.studio
          handles information across our products and website.
        </p>
      </header>

      <div className="space-y-10 text-[15px] leading-relaxed text-foreground">
        {/* 1 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            1. Who We Are
          </h2>
          <p>
            edges.studio builds premium desktop and web applications. This
            Privacy Policy applies to the edges.studio website and all products
            and services developed and published by edges.studio.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            2. Information We Collect
          </h2>

          <h3 className="mb-2 mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Desktop & Mobile Applications
          </h3>
          <p>
            Our desktop applications are designed with a{' '}
            <strong>privacy-first</strong> approach. Screenshots, recordings,
            annotations, and any files you create are processed and stored{' '}
            <strong>locally on your device</strong>. We do not upload, transmit,
            or have access to your captured content.
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-muted-foreground">
            <li>No content is sent to our servers</li>
            <li>No personal files or media are collected</li>
            <li>
              Optional crash reports and anonymous usage analytics may be
              collected if you opt in, solely to improve product quality
            </li>
          </ul>

          <h3 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Website (edges.studio)
          </h3>
          <p>
            When you visit our website we may collect standard web analytics
            data, including:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-muted-foreground">
            <li>
              Pages visited, referring URL, browser type, and device information
            </li>
            <li>Anonymised IP address and approximate geographic location</li>
            <li>
              Cookies necessary for site functionality and analytics (see
              Section 5)
            </li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            3. How We Use Information
          </h2>
          <p>Any information we collect is used exclusively to:</p>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-muted-foreground">
            <li>Improve and maintain our products and services</li>
            <li>Understand aggregate usage patterns on our website</li>
            <li>Diagnose and fix technical issues</li>
            <li>Communicate with you if you contact us directly</li>
          </ul>
          <p className="mt-3">
            We <strong>do not sell, rent, or share</strong> your personal
            information with third parties for marketing purposes.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4. Third-Party Services
          </h2>
          <p>
            Our website may use third-party analytics services (such as privacy-
            focused analytics providers) that collect anonymised data. These
            services have their own privacy policies governing the use of
            information they collect.
          </p>
          <p className="mt-3">
            Our desktop applications do not integrate third-party tracking or
            advertising networks.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            5. Cookies
          </h2>
          <p>
            The edges.studio website uses essential cookies required for site
            functionality and may use analytics cookies to understand visitor
            behaviour. You can manage cookie preferences through your browser
            settings at any time.
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            6. Data Retention
          </h2>
          <p>
            Website analytics data is retained in an aggregated, anonymised form
            and does not contain personally identifiable information. If you
            contact us via email, we retain your message only as long as
            necessary to respond and resolve your inquiry.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            7. Your Rights
          </h2>
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, delete, or restrict the processing of any personal data we
            hold about you. To exercise these rights, please contact us at{' '}
            <a
              href="mailto:info@edges.studio"
              className="text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary/80"
            >
              info@edges.studio
            </a>
            .
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            8. Children's Privacy
          </h2>
          <p>
            Our products and services are not directed at children under the age
            of 13. We do not knowingly collect personal information from
            children. If we become aware that we have inadvertently collected
            data from a child, we will delete it promptly.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with a revised date. We encourage you to review
            this page periodically.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            10. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please reach out to us at{' '}
            <a
              href="mailto:info@edges.studio"
              className="text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary/80"
            >
              info@edges.studio
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  )
}

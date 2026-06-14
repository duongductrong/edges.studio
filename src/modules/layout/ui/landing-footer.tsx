import { Link } from '@tanstack/react-router'

import { Container } from '@/shared/ui/container'

import { COMPANY_NAME, CONTACT_EMAIL } from '@/shared/config/site'
import { FOOTER_LINKS } from '../lib/nav-links'

export function LandingFooter() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <Container className="py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="text-sm font-semibold text-foreground">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium desktop apps, crafted with care.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          &copy; {year} {COMPANY_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

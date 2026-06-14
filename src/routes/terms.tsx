import { createFileRoute } from '@tanstack/react-router'

import { TermsPage } from '@/pages/terms'
import { LandingLayout } from '@/modules/layout'
import { seo } from '@/shared/lib/create-meta'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Terms of Service — edges.studio',
        description:
          'Terms of Service governing the use of all products and services developed by edges.studio.',
      }),
    ],
  }),
  component: TermsPage_,
})

function TermsPage_() {
  return (
    <LandingLayout>
      <TermsPage />
    </LandingLayout>
  )
}

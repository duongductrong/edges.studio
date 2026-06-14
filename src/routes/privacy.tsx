import { createFileRoute } from '@tanstack/react-router'

import { PrivacyPage } from '@/pages/privacy'
import { LandingLayout } from '@/modules/layout'
import { seo } from '@/shared/lib/create-meta'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Privacy Policy — edges.studio',
        description:
          'Learn how edges.studio handles your data across our applications and website.',
      }),
    ],
  }),
  component: PrivacyPage_,
})

function PrivacyPage_() {
  return (
    <LandingLayout>
      <PrivacyPage />
    </LandingLayout>
  )
}

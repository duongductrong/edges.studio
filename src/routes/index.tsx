import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '@/pages/home'
import { seo } from '@/shared/lib/create-meta'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      ...seo({
        title: 'edges.studio — Build Once. Ship Beautifully.',
        description:
          'A studio for crafting premium apps, with tools you can shape around your workflow and creativity.',
      }),
    ],
  }),
  component: Home,
})

function Home() {
  return <HomePage />
}

import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '#/modules/landing/pages/home/home-page'
import { seo } from '#/utils/seo'

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

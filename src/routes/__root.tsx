import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'edges.studio — Build Once. Ship Beautifully.' },
      {
        name: 'description',
        content:
          'A studio for crafting premium apps, with tools you can shape around your workflow and creativity.',
      },
      {
        name: 'og:title',
        content: 'edges.studio — Build Once. Ship Beautifully.',
      },
      {
        name: 'og:description',
        content:
          'A studio for crafting premium apps, with tools you can shape around your workflow and creativity.',
      },
      { name: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

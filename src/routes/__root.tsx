import { useEffect } from 'react'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { TooltipProvider } from '@/components/ui/tooltip'
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
  useEffect(() => {
    const handleExternalClicks = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a')
      if (anchor && anchor.href) {
        const href = anchor.getAttribute('href')
        if (href) {
          // Ignore relative links, anchors, mailto, tel, and javascript
          if (
            href.startsWith('/') ||
            href.startsWith('#') ||
            href.startsWith('.') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            href.startsWith('javascript:')
          ) {
            return
          }

          try {
            const url = new URL(href, window.location.origin)
            // Open in a new tab if it's a different origin
            if (url.origin !== window.location.origin) {
              anchor.setAttribute('target', '_blank')
              anchor.setAttribute('rel', 'noopener noreferrer')
            }
          } catch (err) {
            // Ignore URL parsing errors
          }
        }
      }
    }

    document.addEventListener('click', handleExternalClicks, { capture: true })
    return () => {
      document.removeEventListener('click', handleExternalClicks, { capture: true })
    }
  }, [])

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <TooltipProvider>{children}</TooltipProvider>
        <Scripts />
      </body>
    </html>
  )
}

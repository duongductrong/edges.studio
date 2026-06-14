import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { CONTACT_EMAIL } from '@/shared/config/site'
import { parseAsStringLiteral, useQueryState } from 'nuqs'
import { useMemo } from 'react'
import {
  ProductCardLarge,
  ProductCardSmall,
  TrendshiftBadge,
} from './product-cards'

// ─── Platform Icons ───────────────────────────────────────────────────────────

const MacIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn('size-3.5 fill-current', className)}
    aria-hidden="true"
  >
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.185 3.078 3.766 3.02 1.524-.057 2.1-.98 3.94-.98 1.83 0 2.35.98 3.939.95 1.62-.029 2.665-1.478 3.659-2.93 1.161-1.694 1.64-3.33 1.66-3.41-.039-.02-3.18-1.218-3.21-4.825-.03-3.016 2.47-4.463 2.585-4.535-1.424-2.083-3.646-2.322-4.422-2.38-2.02-.164-3.56 1.07-4.113 1.07zm1.87-4.636c.827-1.002 1.39-2.26 1.238-3.51-1.07.043-2.378.711-3.14 1.59-.68.782-1.28 2.05-1.12 3.29 1.19.093 2.42-.58 3.022-1.37z" />
  </svg>
)

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn('size-3.5 fill-current', className)}
    aria-hidden="true"
  >
    <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM10.95 1.95L24 0v11.55H10.95V1.95zM10.95 12.45H24v11.55l-13.05-1.95v-9.6z" />
  </svg>
)

const IOSIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn('size-3.5 fill-current', className)}
    aria-hidden="true"
  >
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.185 3.078 3.766 3.02 1.524-.057 2.1-.98 3.94-.98 1.83 0 2.35.98 3.939.95 1.62-.029 2.665-1.478 3.659-2.93 1.161-1.694 1.64-3.33 1.66-3.41-.039-.02-3.18-1.218-3.21-4.825-.03-3.016 2.47-4.463 2.585-4.535-1.424-2.083-3.646-2.322-4.422-2.38-2.02-.164-3.56 1.07-4.113 1.07zm1.87-4.636c.827-1.002 1.39-2.26 1.238-3.51-1.07.043-2.378.711-3.14 1.59-.68.782-1.28 2.05-1.12 3.29 1.19.093 2.42-.58 3.022-1.37z" />
  </svg>
)

const AndroidIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn('size-3.5 fill-current', className)}
    aria-hidden="true"
  >
    <path d="M17.523 15.3414C17.523 15.8614 17.102 16.2824 16.582 16.2824H7.422C6.902 16.2824 6.481 15.8614 6.481 15.3414V9.8974C6.481 9.3774 6.902 8.9564 7.422 8.9564H16.582C17.102 8.9564 17.523 9.3774 17.523 9.8974V15.3414ZM16.582 7.7474C17.769 7.7474 18.732 8.7114 18.732 9.8974V15.3414C18.732 16.5274 17.769 17.4914 16.582 17.4914H13.208V20.1034C13.208 20.6694 12.749 21.1274 12.183 21.1274C11.617 21.1274 11.159 20.6694 11.159 20.1034V17.4914H7.422C6.235 17.4914 5.271 16.5274 5.271 15.3414V9.8974C5.271 8.7114 6.235 7.7474 7.422 7.7474H16.582ZM11.159 4.3164C11.159 4.2184 11.238 4.1394 11.336 4.1394H12.664C12.762 4.1394 12.841 4.2184 12.841 4.3164V6.5384H11.159V4.3164ZM18.761 4.2584C19.161 4.6584 19.161 5.3084 18.761 5.7084L17.208 7.2614C17.113 7.3564 16.985 7.4094 16.85 7.4094C16.715 7.4094 16.587 7.3564 16.492 7.2614C16.292 7.0614 16.292 6.7364 16.492 6.5364L18.045 4.9834C18.445 4.5834 19.095 4.5834 19.495 4.9834C19.223 4.7114 18.999 4.4964 18.761 4.258ZM5.239 4.258C5.639 4.658 5.639 5.308 5.239 5.708L6.792 7.261C6.887 7.356 7.015 7.409 7.15 7.409C7.285 7.409 7.413 7.356 7.508 7.261C7.708 7.061 7.708 6.736 7.508 6.536L5.955 4.983C5.555 4.583 4.905 4.583 4.505 4.983C4.777 4.711 5.001 4.496 5.239 4.258Z" />
  </svg>
)

// ─── Platform Badges ──────────────────────────────────────────────────────────

type Platform = 'mac' | 'windows' | 'ios' | 'android'

interface PlatformBadgeProps {
  platform: Platform
  className?: string
}

function PlatformBadge({ platform, className }: PlatformBadgeProps) {
  const config = {
    mac: {
      label: 'macOS',
      icon: (
        <MacIcon className="text-muted-foreground group-hover:text-foreground transition-colors" />
      ),
      className:
        'bg-muted/80 hover:bg-muted dark:bg-muted/30 dark:hover:bg-muted/50 text-muted-foreground border-border/40',
    },
    windows: {
      label: 'Windows',
      icon: <WindowsIcon className="text-blue-500 dark:text-blue-400" />,
      className:
        'bg-blue-50/80 hover:bg-blue-100/80 dark:bg-blue-950/20 dark:hover:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200/30 dark:border-blue-800/30',
    },
    ios: {
      label: 'iOS',
      icon: <IOSIcon className="text-muted-foreground" />,
      className:
        'bg-muted/80 hover:bg-muted dark:bg-muted/30 dark:hover:bg-muted/50 text-muted-foreground border-border/40',
    },
    android: {
      label: 'Android',
      icon: <AndroidIcon className="text-emerald-500 dark:text-emerald-400" />,
      className:
        'bg-emerald-50/80 hover:bg-emerald-100/80 dark:bg-emerald-950/20 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200/30 dark:border-emerald-800/30',
    },
  }

  const item = config[platform]
  return (
    <span
      className={cn(
        'group inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10.5px] font-semibold border shadow-xs select-none transition-all duration-200',
        item.className,
        className,
      )}
    >
      {item.icon}
      <span>{item.label}</span>
    </span>
  )
}

function PlatformBadgesList({
  platforms,
  className,
}: {
  platforms: Platform[]
  className?: string
}) {
  return (
    <div className={cn('flex flex-wrap gap-1.5', className)}>
      {platforms.map((platform) => (
        <PlatformBadge key={platform} platform={platform} />
      ))}
    </div>
  )
}

// ─── Product App Icons ─────────────────────────────────────────────────────────

// Snapzy App Icon
const SnapzyIcon = (
  <img
    src="/brand-logo-snapzy.png"
    alt="Snapzy"
    className="size-full object-cover scale-[1.18]"
  />
)

// Aesthetic App Icon
const AestheticIcon = (
  <img
    src="/aesthetic-icon.png"
    alt="Aesthetic"
    className="size-full object-cover scale-[1.18]"
  />
)

// Droplit App Icon
const DroplitIcon = (
  <img
    src="/droplit-icon.png"
    alt="Droplit"
    className="size-full object-cover scale-[1.18]"
  />
)

// Instantly App Icon
const InstantlyIcon = (
  <div className="size-full bg-indigo-600 flex items-center justify-center text-white select-none">
    <span className="text-[20px] font-bold">✦</span>
  </div>
)

// Lumina App Icon
export const LuminaIcon = (
  <div className="size-full bg-linear-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white select-none">
    <span className="text-[20px] font-bold">☼</span>
  </div>
)

// Focusy App Icon
export const FocusyIcon = (
  <div className="size-full bg-rose-600 flex items-center justify-center text-white select-none">
    <span className="text-[20px] font-bold">🍅</span>
  </div>
)

// Instantly Open Source Badge
const InstantlyOpenSourceBadge = (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 select-none w-fit">
    <svg
      viewBox="0 0 24 24"
      className="size-3.5 fill-current"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
    <span>Open Source · Free</span>
  </div>
)

// Droplit Media Mockup Slot

// ─── Products Data Schema ──────────────────────────────────────────────────────

interface BaseProduct {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  category: 'desktop' | 'mobile'
  platforms: Platform[]
  href?: string
  ctaText?: string
  ctaHref?: string
  trendingBadge?: React.ReactNode
}

interface LargeProduct extends BaseProduct {
  size: 'large'
  rightImage?: string
  rightImages?: string[]
  leftBgClass?: string
  dark?: boolean
  githubUrl?: string
  stars?: string | number
  downloads?: string | number
  mediaSlot?: React.ReactNode
}

interface SmallProduct extends BaseProduct {
  size: 'small'
  variant?: 'solid' | 'image' | 'placeholder'
  bgClass?: string
  badges?: { label: string; bgClass?: string; className?: string }[]
}

type Product = LargeProduct | SmallProduct

// ─── Products Database ─────────────────────────────────────────────────────────

const productsDatabase: Product[] = [
  {
    id: 'snapzy',
    size: 'large',
    title: 'Snapzy',
    subtitle: 'Utility',
    description:
      'Capture your screen with a lightweight, native macOS app. Privacy and locally.',
    icon: SnapzyIcon,
    category: 'desktop',
    platforms: ['mac'],
    href: 'https://snapzy.app',
    ctaText: 'Download for macOS',
    ctaHref: 'https://snapzy.app',
    rightImage: '/og-image-snapzy.png',
    leftBgClass: 'bg-[#0057C2]/5',
    githubUrl: 'https://github.com/duongductrong/Snapzy',
    stars: '1k4',
    downloads: '21k',
    trendingBadge: (
      <TrendshiftBadge repositoryId="24550" repoName="duongductrong/Snapzy" />
    ),
  },
  {
    id: 'aesthetic',
    size: 'large',
    title: 'Aesthetic',
    subtitle: 'Design & Photography',
    description: 'A native, non-destructive macOS photo editor and manager.',
    icon: AestheticIcon,
    category: 'desktop',
    platforms: ['mac'],
    ctaText: 'Request Access',
    ctaHref: `mailto:${CONTACT_EMAIL}`,
    leftBgClass: 'bg-zinc-950',
    dark: true,
    rightImages: [
      '/aesthetic-app.png',
      '/aesthetic-app-welcome.png',
      '/aesthetic-app-spotlight.png',
    ],
    trendingBadge: (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 select-none w-fit">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        </span>
        <span>Private Beta</span>
      </div>
    ),
  },
  {
    id: 'instantly',
    size: 'large',
    title: 'Instantly',
    subtitle: 'AI Assistant',
    description:
      'Your always-ready AI assistant for macOS and Windows. Chat with local LLMs privately in a floating panel powered by Ollama.',
    icon: InstantlyIcon,
    category: 'desktop',
    platforms: ['mac'],
    href: 'https://github.com/duongductrong/Instantly',
    ctaText: 'View on GitHub',
    ctaHref: 'https://github.com/duongductrong/Instantly',
    leftBgClass: 'bg-indigo-950',
    dark: true,
    githubUrl: 'https://github.com/duongductrong/Instantly',
    trendingBadge: InstantlyOpenSourceBadge,
    rightImage: '/instantly-app.png',
  },
  {
    id: 'droplit',
    size: 'large',
    title: 'Droplit',
    subtitle: 'Utility',
    description:
      'Native macOS media optimizer — drag, drop, and optimize from anywhere.',
    icon: DroplitIcon,
    category: 'desktop',
    platforms: ['mac'],
    href: 'https://github.com/duongductrong/Droplit',
    ctaText: 'View on GitHub',
    ctaHref: 'https://github.com/duongductrong/Droplit',
    leftBgClass: 'bg-sky-500/5 dark:bg-sky-950/20',
    githubUrl: 'https://github.com/duongductrong/Droplit',
    rightImage: './droplit-app.webp',
  },
]

// ─── ProductsSection ──────────────────────────────────────────────────────────

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useQueryState(
    'category',
    parseAsStringLiteral(['all', 'desktop', 'mobile'] as const).withDefault(
      'all',
    ),
  )

  const filteredLargeProducts = useMemo(() => {
    return productsDatabase.filter(
      (p) =>
        p.size === 'large' &&
        (activeCategory === 'all' || p.category === activeCategory),
    ) as LargeProduct[]
  }, [activeCategory])

  const filteredSmallProducts = useMemo(() => {
    return productsDatabase.filter(
      (p) =>
        p.size === 'small' &&
        (activeCategory === 'all' || p.category === activeCategory),
    ) as SmallProduct[]
  }, [activeCategory])

  return (
    <section id="products" className="py-20 md:py-28">
      <Container className="space-y-14">
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Explore premium apps developed by edges.studio. We craft tools that
            blend seamlessly into your workflow with elegant design and deep
            utility.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-muted border border-border/50 rounded-full shadow-xs">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'ghost'}
              size="sm"
              rounded="full"
              onClick={() => setActiveCategory('all')}
              className="font-medium text-xs px-4"
            >
              All Products
            </Button>
            <Button
              variant={activeCategory === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              rounded="full"
              onClick={() => setActiveCategory('desktop')}
              className="font-medium text-xs px-4 flex items-center gap-1.5"
            >
              <div className="flex items-center gap-0.5 opacity-80">
                <MacIcon />
                <WindowsIcon />
              </div>
              <span>Desktop Apps</span>
            </Button>
            <Button
              variant={activeCategory === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              rounded="full"
              onClick={() => setActiveCategory('mobile')}
              className="font-medium text-xs px-4 flex items-center gap-1.5"
            >
              <div className="flex items-center gap-0.5 opacity-80">
                <IOSIcon />
                <AndroidIcon />
              </div>
              <span>Mobile Apps</span>
            </Button>
          </div>
        </div>

        {/* Products Display Container */}
        <div className="space-y-14">
          {filteredLargeProducts.length === 0 &&
          filteredSmallProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center rounded-[28px] border border-dashed border-border bg-muted/20 dark:bg-muted/5 max-w-md mx-auto">
              <div className="size-12 rounded-2xl bg-muted border border-border/50 flex items-center justify-center text-muted-foreground mb-4 shadow-xs">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v4.5a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                No products found
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-[280px]">
                We are currently crafting new apps for this category. Check back
                soon!
              </p>
              <Button
                variant="outline"
                size="sm"
                rounded="full"
                onClick={() => setActiveCategory('all')}
                className="font-medium text-xs px-4"
              >
                View All Products
              </Button>
            </div>
          ) : (
            <>
              {/* Flagship Large Cards Stack */}
              {filteredLargeProducts.length > 0 && (
                <div className="flex flex-col gap-8">
                  {filteredLargeProducts.map((product) => (
                    <ProductCardLarge
                      key={product.id}
                      title={product.title}
                      subtitle={product.subtitle}
                      description={product.description}
                      icon={product.icon}
                      href={product.href}
                      ctaText={product.ctaText}
                      ctaHref={product.ctaHref}
                      rightImage={product.rightImage}
                      rightImages={product.rightImages}
                      leftBgClass={product.leftBgClass}
                      dark={product.dark}
                      githubUrl={product.githubUrl}
                      stars={product.stars}
                      downloads={product.downloads}
                      trendingBadge={product.trendingBadge}
                      mediaSlot={product.mediaSlot}
                      headerExtra={
                        <PlatformBadgesList
                          platforms={product.platforms}
                          className="mt-2.5"
                        />
                      }
                    />
                  ))}
                </div>
              )}

              {/* Showcase Small Cards Grid */}
              {filteredSmallProducts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSmallProducts.map((product) => (
                    <ProductCardSmall
                      key={product.id}
                      title={product.title}
                      subtitle={product.subtitle}
                      description={product.description}
                      icon={product.icon}
                      href={product.href}
                      variant={product.variant}
                      bgClass={product.bgClass}
                      badges={product.badges}
                      headerExtra={
                        <PlatformBadgesList
                          platforms={product.platforms}
                          className="mt-2.5"
                        />
                      }
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </section>
  )
}

import { cn } from '#/lib/utils.ts'
import { Link } from '@tanstack/react-router'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { ArrowUpRight, Download, Star } from 'lucide-react'
import * as React from 'react'

import { Badge } from '#/components/ui/badge.tsx'
import { Button } from '#/components/ui/button.tsx'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '#/components/ui/card.tsx'

// ─── Branding Config ───────────────────────────────────────────────────────────

export interface BrandingConfig {
  /** Card background override (Tailwind class, e.g. 'bg-sky-50') */
  cardBg?: string
  /** Card foreground/text override (Tailwind class) */
  cardForeground?: string
  /** Accent color class for badges/highlights */
  accent?: string
  /** Accent foreground text color */
  accentForeground?: string
  /** Border color override */
  border?: string
}

// ─── Card Badge ────────────────────────────────────────────────────────────────

export interface CardBadge {
  label: string
  icon?: React.ReactNode
  className?: string
  /** @deprecated Use className instead */
  bgClass?: string
  /** @deprecated Use className instead */
  textClass?: string
}

// ─── External Link Icon ────────────────────────────────────────────────────────

function ExternalLinkButton({
  href,
  label,
  isDark,
  className,
}: {
  href: string
  label: string
  isDark: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center justify-center size-8 rounded-full border transition-all duration-200 hover:scale-105',
        isDark
          ? 'bg-white/95 text-foreground border-transparent hover:bg-white'
          : 'bg-card text-muted-foreground border-border/50 hover:bg-accent',
        className,
      )}
      aria-label={label}
    >
      <ArrowUpRight className="size-3.5 stroke-[1.75]" />
    </a>
  )
}

// ─── App Icon Container ────────────────────────────────────────────────────────

function AppIcon({
  icon,
  alt,
  className,
}: {
  icon: string | React.ReactNode
  alt: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'size-11 rounded-xl bg-card shadow-xs flex items-center justify-center overflow-hidden shrink-0 border border-border/50',
        className,
      )}
    >
      {typeof icon === 'string' ? (
        <img src={icon} alt={alt} className="size-full object-cover" />
      ) : (
        icon
      )}
    </div>
  )
}

// ─── Small Card Variants ───────────────────────────────────────────────────────

const smallCardVariants = cva(
  'flex flex-col gap-0 p-0 h-[380px] w-full rounded-[28px] relative overflow-hidden shadow-xs transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
  {
    variants: {
      variant: {
        solid: '',
        image: '',
        placeholder: 'items-center justify-between bg-card',
      },
    },
    defaultVariants: {
      variant: 'solid',
    },
  },
)

// ─── ProductCardSmall ──────────────────────────────────────────────────────────

export interface ProductCardSmallProps
  extends React.ComponentProps<'div'>, VariantProps<typeof smallCardVariants> {
  title: string
  subtitle?: string
  description?: string
  icon?: string | React.ReactNode
  href?: string
  variant?: 'solid' | 'image' | 'placeholder'
  bgImage?: string
  theme?: 'light' | 'dark'
  branding?: BrandingConfig
  badges?: CardBadge[]
  /** Slot: extra content in header area */
  headerExtra?: React.ReactNode
  /** Slot: extra content in footer area */
  footerExtra?: React.ReactNode

  // Legacy class overrides (still supported for backward compat)
  bgClass?: string
  textColor?: 'light' | 'dark'
  titleClass?: string
  subtitleClass?: string
  descriptionClass?: string
  borderClass?: string
  iconClass?: string
}

export const ProductCardSmall = React.forwardRef<
  HTMLDivElement,
  ProductCardSmallProps
>(
  (
    {
      className,
      title,
      subtitle,
      description,
      icon,
      href,
      variant = 'solid',
      bgClass,
      bgImage,
      textColor,
      theme,
      branding,
      titleClass,
      subtitleClass,
      descriptionClass,
      borderClass,
      iconClass,
      badges = [],
      headerExtra,
      footerExtra,
      ...props
    },
    ref,
  ) => {
    // Theme resolution: explicit theme > explicit textColor > default light
    const isDark = theme === 'dark' || textColor === 'light'

    const resolvedBg =
      branding?.cardBg || bgClass || (isDark ? 'bg-zinc-900' : 'bg-muted/50')
    const resolvedBorder = branding?.border || borderClass || 'border-border/50'
    const textThemeClass =
      branding?.cardForeground ||
      (isDark ? 'text-white' : 'text-card-foreground')
    const subtitleThemeClass = isDark
      ? 'text-white/60'
      : 'text-muted-foreground'
    const descThemeClass = isDark ? 'text-white/90' : 'text-muted-foreground'

    return (
      <Card
        ref={ref}
        className={cn(
          smallCardVariants({ variant }),
          variant === 'solid' ? resolvedBg : '',
          resolvedBorder,
          className,
        )}
        {...props}
      >
        {/* Background Image & Overlay for Image Variant */}
        {variant === 'image' && bgImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
          </>
        )}

        {/* Content (relative for stacking above overlays) */}
        <div className="relative z-10 flex flex-col h-full justify-between p-6">
          {/* Header */}
          <CardHeader className="p-0 gap-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                {icon && (
                  <AppIcon icon={icon} alt={title} className={iconClass} />
                )}
                <div className="flex flex-col gap-0.5">
                  <span
                    className={cn(
                      'text-[16px] font-semibold leading-tight',
                      textThemeClass,
                      titleClass,
                    )}
                  >
                    {title}
                  </span>
                  {subtitle && (
                    <span
                      className={cn(
                        'text-[12.5px] font-medium leading-none',
                        subtitleThemeClass,
                        subtitleClass,
                      )}
                    >
                      {subtitle}
                    </span>
                  )}
                </div>
              </div>

              {href && (
                <ExternalLinkButton
                  href={href}
                  label={`Open ${title}`}
                  isDark={isDark}
                />
              )}
            </div>
            {headerExtra}
          </CardHeader>

          {/* Body Description */}
          {description && (
            <CardContent className="p-0 mt-auto mb-4">
              <p
                className={cn(
                  'text-[14.5px] leading-relaxed font-medium tracking-tight',
                  descThemeClass,
                  descriptionClass,
                )}
              >
                {description}
              </p>
            </CardContent>
          )}

          {/* Footer Badges */}
          <CardFooter className="p-0 flex-col items-start gap-2">
            {badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className={cn(
                      'px-3.5 py-1.5 rounded-full text-[12px] font-semibold gap-1 transition-colors select-none',
                      badge.className ||
                        badge.bgClass ||
                        (isDark
                          ? 'bg-white/10 hover:bg-white/15 text-white border-white/10'
                          : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground border-transparent'),
                      badge.textClass || '',
                    )}
                  >
                    {badge.icon && (
                      <span className="shrink-0">{badge.icon}</span>
                    )}
                    <span>{badge.label}</span>
                  </Badge>
                ))}
              </div>
            )}
            {footerExtra}
          </CardFooter>
        </div>
      </Card>
    )
  },
)
ProductCardSmall.displayName = 'ProductCardSmall'

// ─── Laurel Wreath Badge ───────────────────────────────────────────────────────

export function LaurelWreathBadge({ className }: { className?: string }) {
  return (
    <div className={cn('inline-flex items-center select-none', className)}>
      <svg
        viewBox="0 0 100 60"
        fill="currentColor"
        className="h-9.5 text-amber-500 shrink-0"
        aria-hidden="true"
      >
        {/* Left Laurel Leaves */}
        <path
          d="M 28,45 C 22,42 16,34 14,26 C 18,25 22,27 24,31 C 18,24 16,16 19,9 C 22,12 24,18 24,23 C 21,14 23,6 29,2 C 30,7 29,14 26,20 C 31,13 36,9 41,7 C 40,12 37,17 33,21 M 31,43 C 32,40 33,36 34,32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 22,34 C 18,33 15,28 14,24"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M 20,22 C 18,19 18,14 19,10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M 24,12 C 24,9 25,6 27,3"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* Right Laurel Leaves */}
        <path
          d="M 72,45 C 78,42 84,34 86,26 C 82,25 78,27 76,31 C 82,24 84,16 81,9 C 78,12 76,18 76,23 C 79,14 77,6 71,2 C 70,7 71,14 74,20 C 69,13 64,9 59,7 C 60,12 63,17 67,21 M 69,43 C 68,40 67,36 66,32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 78,34 C 82,33 85,28 86,24"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M 80,22 C 82,19 82,14 81,10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M 76,12 C 76,9 75,6 73,3"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* Stem connection */}
        <path
          d="M 45,52 Q 50,55 55,52"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Central Text "1st" */}
        <text
          x="50"
          y="33"
          textAnchor="middle"
          fontSize="15"
          fontWeight="800"
          fill="currentColor"
          className="font-sans"
        >
          1st
        </text>
        <text
          x="50"
          y="43"
          textAnchor="middle"
          fontSize="7"
          fontWeight="700"
          fill="currentColor"
          className="font-sans uppercase tracking-wider"
        >
          Product of the Day
        </text>
      </svg>
    </div>
  )
}

// ─── Trendshift Badge ──────────────────────────────────────────────────────────

export interface TrendshiftBadgeProps {
  repositoryId: string | number
  repoName: string
  width?: number | string
  height?: number | string
  className?: string
}

export function TrendshiftBadge({
  repositoryId,
  repoName,
  width = 200,
  height = 44,
  className,
}: TrendshiftBadgeProps) {
  return (
    <a
      href={`https://trendshift.io/repositories/${repositoryId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('inline-block select-none', className)}
    >
      <img
        src={`https://trendshift.io/api/badge/repositories/${repositoryId}`}
        alt={`${repoName} | Trendshift`}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
        }}
        width={width}
        height={height}
        className="block object-contain"
      />
    </a>
  )
}

// ─── GitHub Stats ──────────────────────────────────────────────────────────────

export interface ProductCardGithubStatsProps {
  githubUrl?: string
  stars?: string | number
  downloads?: string | number
  className?: string
}

export function ProductCardGithubStats({
  githubUrl,
  stars,
  downloads,
  className,
}: ProductCardGithubStatsProps) {
  if (!githubUrl && !stars && !downloads) return null

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2.5 text-[13px] text-muted-foreground font-medium select-none',
        className,
      )}
    >
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="size-3.5 fill-current"
            aria-hidden="true"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span>GitHub</span>
        </a>
      )}
      {stars !== undefined && (
        <span className="inline-flex items-center gap-1.5">
          <Star className="size-3.5 fill-current" aria-hidden="true" />
          <span>{stars} stars</span>
        </span>
      )}
      {downloads !== undefined && (
        <span className="inline-flex items-center gap-1.5">
          <Download className="size-3.5" aria-hidden="true" />
          <span>{downloads} downloads</span>
        </span>
      )}
    </div>
  )
}

// ─── Large Card Variants ───────────────────────────────────────────────────────

const largeCardVariants = cva(
  'group grid grid-cols-1 md:grid-cols-12 rounded-3xl overflow-hidden w-full p-0 gap-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
  {
    variants: {
      theme: {
        light: 'bg-card shadow-xs',
        dark: 'bg-zinc-950',
      },
    },
    defaultVariants: {
      theme: 'light',
    },
  },
)

// ─── ProductCardLarge ──────────────────────────────────────────────────────────

export interface ProductCardLargeProps extends React.ComponentProps<'div'> {
  title: string
  subtitle: string
  description: string
  icon: string | React.ReactNode
  href?: string
  ctaText?: string
  ctaHref?: string
  rightImage?: string
  githubUrl?: string
  stars?: string | number
  downloads?: string | number
  trendingBadge?: boolean | React.ReactNode
  theme?: 'light' | 'dark'
  branding?: BrandingConfig
  /** Slot: extra content in header area */
  headerExtra?: React.ReactNode
  /** Slot: extra content in footer area */
  footerExtra?: React.ReactNode
  /** Slot: completely replace the media/right column */
  mediaSlot?: React.ReactNode

  // Legacy props (still supported for backward compat)
  /** @deprecated Use branding.cardBg instead */
  leftBgClass?: string
  /** @deprecated Use branding.cardBg instead for the right side too */
  rightBgClass?: string
  /** @deprecated Use theme='dark' instead */
  dark?: boolean
  /** @deprecated Use theme instead */
  textColor?: 'light' | 'dark'
  titleClass?: string
  subtitleClass?: string
  descriptionClass?: string
  borderClass?: string
  iconClass?: string
  ctaClass?: string
}

export const ProductCardLarge = React.forwardRef<
  HTMLDivElement,
  ProductCardLargeProps
>(
  (
    {
      className,
      title,
      subtitle,
      description,
      icon,
      href,
      ctaText = 'Create yours today',
      ctaHref = '#',
      leftBgClass,
      rightImage,
      rightBgClass,
      githubUrl,
      stars,
      downloads,
      trendingBadge,
      dark = false,
      theme: themeProp,
      textColor,
      branding,
      titleClass,
      subtitleClass,
      descriptionClass,
      borderClass,
      iconClass,
      ctaClass,
      headerExtra,
      footerExtra,
      mediaSlot,
      ...props
    },
    ref,
  ) => {
    // Theme resolution: explicit theme > dark prop > textColor > default light
    const resolvedTheme: 'light' | 'dark' =
      themeProp ||
      (dark ? 'dark' : undefined) ||
      (textColor === 'light' ? 'dark' : undefined) ||
      'light'
    const isDark = resolvedTheme === 'dark'

    const textTitleClass = isDark ? 'text-zinc-100' : 'text-card-foreground'
    const textSubtitleClass = isDark ? 'text-zinc-400' : 'text-muted-foreground'
    const textDescClass = isDark ? 'text-zinc-200' : 'text-card-foreground'
    const resolvedBorder =
      branding?.border ||
      borderClass ||
      (isDark ? 'border-zinc-800' : 'border-border/50')

    const defaultLeftBg = isDark ? 'bg-zinc-900' : 'bg-muted/30'
    const currentLeftBg = branding?.cardBg || leftBgClass || defaultLeftBg
    const currentRightBg = rightBgClass || currentLeftBg

    const isExternal =
      ctaHref &&
      (ctaHref.startsWith('http') ||
        ctaHref.startsWith('mailto:') ||
        ctaHref.startsWith('tel:'))

    return (
      <Card
        ref={ref}
        className={cn(
          largeCardVariants({ theme: resolvedTheme }),
          resolvedBorder,
          className,
        )}
        {...props}
      >
        {/* Left Column */}
        <div
          className={cn(
            'md:col-span-4 p-8 md:p-6 flex flex-col justify-between h-[480px] md:h-[580px] border-b md:border-b-0',
            resolvedBorder,
            currentLeftBg,
          )}
        >
          {/* Header & Optional Badge */}
          <CardHeader className="p-0 gap-4.5">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                {icon && (
                  <AppIcon icon={icon} alt={title} className={iconClass} />
                )}
                <div className="flex flex-col gap-0.5">
                  <span
                    className={cn(
                      'text-[17px] font-semibold leading-tight',
                      textTitleClass,
                      titleClass,
                    )}
                  >
                    {title}
                  </span>
                  <span
                    className={cn(
                      'text-[13px] font-medium leading-none',
                      textSubtitleClass,
                      subtitleClass,
                    )}
                  >
                    {subtitle}
                  </span>
                </div>
              </div>

              {href && (
                <ExternalLinkButton
                  href={href}
                  label={`Open ${title}`}
                  isDark={isDark}
                />
              )}
            </div>
            {headerExtra}
          </CardHeader>

          {/* Description & Stats */}
          <CardContent className="mt-auto py-4 px-0 flex flex-col gap-3">
            {trendingBadge &&
              (trendingBadge === true ? <LaurelWreathBadge /> : trendingBadge)}

            <p
              className={cn(
                'text-[17.5px] leading-relaxed font-semibold tracking-tight',
                textDescClass,
                descriptionClass,
              )}
            >
              {description}
            </p>

            <ProductCardGithubStats
              githubUrl={githubUrl}
              stars={stars}
              downloads={downloads}
            />
          </CardContent>

          {/* CTA Button */}
          <CardFooter className="p-0 flex-col items-start gap-2">
            <Button
              asChild
              rounded="full"
              variant="outline"
              className={cn(ctaClass)}
            >
              {isExternal ? (
                <a href={ctaHref}>{ctaText}</a>
              ) : (
                <Link to={ctaHref}>{ctaText}</Link>
              )}
            </Button>
            {footerExtra}
          </CardFooter>
        </div>

        {/* Right Column (media) */}
        {mediaSlot ? (
          <div className="md:col-span-8 overflow-hidden h-[400px] md:h-[580px] relative select-none">
            {mediaSlot}
          </div>
        ) : rightImage ? (
          <div
            className={cn(
              'md:col-span-8 overflow-hidden h-[400px] md:h-[580px] relative select-none pt-8 pl-6 md:pt-10',
              currentRightBg,
            )}
          >
            <img
              src={rightImage}
              alt={`${title} screenshot`}
              className={cn(
                'w-full h-full object-cover object-left-top rounded-tl-xl border-t border-l',
                resolvedBorder,
              )}
              loading="lazy"
            />
          </div>
        ) : null}
      </Card>
    )
  },
)
ProductCardLarge.displayName = 'ProductCardLarge'

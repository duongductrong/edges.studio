import { cn } from '#/lib/utils.ts'
import { Link } from '@tanstack/react-router'
import * as React from 'react'
import { Button } from '#/components/ui/button.tsx'

export interface CardBadge {
  label: string
  icon?: React.ReactNode
  bgClass?: string
  textClass?: string
}

export interface ProductCardSmallProps extends React.ComponentProps<'div'> {
  title: string
  subtitle?: string
  description?: string
  icon?: string | React.ReactNode
  href?: string
  variant?: 'solid' | 'image' | 'placeholder'
  bgClass?: string
  bgImage?: string
  textColor?: 'light' | 'dark'
  theme?: 'light' | 'dark'
  titleClass?: string
  subtitleClass?: string
  descriptionClass?: string
  borderClass?: string
  iconClass?: string
  badges?: CardBadge[]
}

export interface ProductCardLargeProps extends React.ComponentProps<'div'> {
  title: string
  subtitle: string
  description: string
  icon: string | React.ReactNode
  href?: string
  ctaText?: string
  ctaHref?: string
  leftBgClass?: string
  rightImage: string
  rightBgClass?: string
  githubUrl?: string
  stars?: string | number
  downloads?: string | number
  trendingBadge?: boolean | React.ReactNode
  dark?: boolean
  theme?: 'light' | 'dark'
  textColor?: 'light' | 'dark'
  titleClass?: string
  subtitleClass?: string
  descriptionClass?: string
  borderClass?: string
  iconClass?: string
  ctaClass?: string
}

// Small Card Component
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
      bgClass = 'bg-zinc-100',
      bgImage,
      textColor,
      theme,
      titleClass,
      subtitleClass,
      descriptionClass,
      borderClass,
      iconClass,
      badges = [],
      ...props
    },
    ref,
  ) => {
    // Determine text colors based on theme / background variant
    const isDark = theme === 'dark' || textColor === 'light' || (
      !theme && !textColor && (
        variant === 'image' ||
        bgClass.includes('bg-blue') ||
        bgClass.includes('bg-black') ||
        bgClass.includes('bg-zinc-900') ||
        bgClass.includes('bg-indigo')
      )
    )
    const textThemeClass = isDark ? 'text-white' : 'text-zinc-900'
    const subtitleThemeClass = isDark ? 'text-white/60' : 'text-zinc-500'
    const descThemeClass = isDark ? 'text-white/90' : 'text-zinc-600'
    const currentBorderClass = borderClass || 'border-border/50'

    if (variant === 'placeholder') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col justify-between items-center p-6 h-[380px] w-full rounded-[28px] border bg-white shadow-xs select-none',
            currentBorderClass,
            className,
          )}
          {...props}
        >
          <div />
          {/* Centered Dots */}
          <div className="flex gap-2 items-center my-auto">
            <span className="size-2 rounded-full bg-zinc-200/80" />
            <span className="w-5 h-2 rounded-full bg-amber-500" />
            <span className="size-2 rounded-full bg-zinc-200/80" />
          </div>
          {/* Bottom Label */}
          <span className="text-[10px] tracking-[0.25em] font-bold text-zinc-400 text-center uppercase">
            In Production
          </span>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          'group flex flex-col justify-between p-6 h-[380px] w-full rounded-[28px] relative overflow-hidden shadow-xs border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          variant === 'solid' ? bgClass : '',
          currentBorderClass,
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
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              {/* App Icon */}
              {icon && (
                <div className={cn(
                  'size-11 rounded-xl bg-white shadow-xs flex items-center justify-center overflow-hidden shrink-0 border border-border/50',
                  iconClass
                )}>
                  {typeof icon === 'string' ? (
                    <img
                      src={icon}
                      alt={title}
                      className="size-full object-cover"
                    />
                  ) : (
                    icon
                  )}
                </div>
              )}
              {/* App Info */}
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

            {/* Circular Link Button */}
            {href && (
              <a
                href={href}
                className={cn(
                  'flex items-center justify-center size-8 rounded-full shadow-xs border transition-all duration-200',
                  isDark
                    ? 'bg-white/95 text-zinc-900 border-transparent hover:bg-white hover:scale-105'
                    : 'bg-white text-zinc-700 border-border/50 hover:bg-zinc-50 hover:scale-105',
                )}
                aria-label={`Open ${title}`}
              >
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-[1.75]"
                >
                  <path
                    d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Body Description */}
          {description && (
            <p
              className={cn(
                'text-[14.5px] leading-relaxed font-medium mt-auto mb-4 tracking-tight',
                descThemeClass,
                descriptionClass,
              )}
            >
              {description}
            </p>
          )}

          {/* Footer Badges */}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[12px] font-semibold border transition-colors select-none',
                    badge.bgClass ||
                      (isDark
                        ? 'bg-white/10 hover:bg-white/15 text-white border-white/10'
                        : 'bg-zinc-200/60 hover:bg-zinc-200/80 text-zinc-800 border-transparent'),
                    badge.textClass || '',
                  )}
                >
                  {badge.icon && <span className="shrink-0">{badge.icon}</span>}
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)
ProductCardSmall.displayName = 'ProductCardSmall'

// Laurel Wreath Badge Component
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

// Trendshift Badge Component
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

// Product Card Github Stats Component
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
          {/* Solid/Filled GitHub Icon using soft shadcn color */}
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="size-3.5 fill-current text-muted-foreground"
            aria-hidden="true"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span>GitHub</span>
        </a>
      )}
      {stars !== undefined && (
        <span className="inline-flex items-center gap-1.5">
          {/* Solid/Filled Star Icon using soft shadcn color */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-3.5 fill-current text-muted-foreground"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          <span>{stars} stars</span>
        </span>
      )}
      {downloads !== undefined && (
        <span className="inline-flex items-center gap-1.5">
          {/* Solid/Filled Download Icon using soft shadcn color */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-3.5 fill-current text-muted-foreground"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 11H8l4 4 4-4h-3V7h-2v6z" />
          </svg>
          <span>{downloads} downloads</span>
        </span>
      )}
    </div>
  )
}

// Large Card Component
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
      leftBgClass = 'bg-[#f0f9ff]/80',
      rightImage,
      rightBgClass,
      githubUrl,
      stars,
      downloads,
      trendingBadge,
      dark = false,
      theme,
      textColor,
      titleClass,
      subtitleClass,
      descriptionClass,
      borderClass,
      iconClass,
      ctaClass,
      ...props
    },
    ref,
  ) => {
    const isDark = theme === 'dark' || textColor === 'light' || dark
    const textTitleClass = isDark ? 'text-zinc-100' : 'text-zinc-900'
    const textSubtitleClass = isDark ? 'text-zinc-400' : 'text-zinc-500'
    const textDescClass = isDark ? 'text-zinc-200' : 'text-zinc-800'
    const currentBorderClass = borderClass || (isDark ? 'border-zinc-800' : 'border-border/50')

    const defaultLeftBg = isDark ? 'bg-zinc-900' : 'bg-[#f0f9ff]/80'
    const currentLeftBg = leftBgClass === 'bg-[#f0f9ff]/80' ? defaultLeftBg : (leftBgClass || defaultLeftBg)

    const isExternal =
      ctaHref &&
      (ctaHref.startsWith('http') ||
        ctaHref.startsWith('mailto:') ||
        ctaHref.startsWith('tel:'))

    return (
      <div
        ref={ref}
        className={cn(
          'group grid grid-cols-1 md:grid-cols-12 rounded-[32px] border overflow-hidden w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isDark ? 'bg-zinc-950' : 'bg-white shadow-xs',
          currentBorderClass,
          className,
        )}
        {...props}
      >
        {/* Left Column */}
        <div
          className={cn(
            'md:col-span-4 p-8 md:p-6 flex flex-col justify-between h-[480px] md:h-[580px] border-b md:border-b-0',
            currentBorderClass,
            currentLeftBg,
          )}
        >
          {/* Header & Optional Badge */}
          <div className="flex flex-col gap-4.5">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                {/* App Icon */}
                {icon && (
                  <div className={cn(
                    'size-11 rounded-xl bg-white shadow-xs flex items-center justify-center overflow-hidden shrink-0 border border-border/50',
                    iconClass
                  )}>
                    {typeof icon === 'string' ? (
                      <img
                        src={icon}
                        alt={title}
                        className="size-full object-cover"
                      />
                    ) : (
                      icon
                    )}
                  </div>
                )}
                {/* App Info */}
                <div className="flex flex-col gap-0.5">
                  <span className={cn('text-[17px] font-semibold leading-tight', textTitleClass, titleClass)}>
                    {title}
                  </span>
                  <span className={cn('text-[13px] font-medium leading-none', textSubtitleClass, subtitleClass)}>
                    {subtitle}
                  </span>
                </div>
              </div>

              {/* Circular Link Button */}
              {href && (
                <a
                  href={href}
                  className={cn(
                    'flex items-center justify-center size-8 rounded-full bg-white text-zinc-700 border border-border/50 shadow-xs hover:bg-zinc-50 hover:scale-105 transition-all duration-200',
                    isDark && 'bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700'
                  )}
                  aria-label={`Open ${title}`}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-[1.75]"
                  >
                    <path
                      d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Description & Stats */}
          <div className="mt-auto py-4 flex flex-col gap-3">
            {trendingBadge && (
              trendingBadge === true ? <LaurelWreathBadge /> : trendingBadge
            )}

            <p className={cn('text-[17.5px] leading-relaxed font-semibold tracking-tight', textDescClass, descriptionClass)}>
              {description}
            </p>

            <ProductCardGithubStats
              githubUrl={githubUrl}
              stars={stars}
              downloads={downloads}
            />
          </div>

          {/* CTA Button */}
          <Button
            asChild
            variant="outline"
            className={cn(
              'rounded-full bg-white hover:bg-zinc-50 text-zinc-800 border-border/50 shadow-xs px-4.5 py-2.5 text-[13.5px] font-semibold transition-all duration-200 hover:-translate-y-[0.5px] h-auto',
              isDark && 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-zinc-700',
              ctaClass
            )}
          >
            {isExternal ? (
              <a href={ctaHref}>{ctaText}</a>
            ) : (
              <Link to={ctaHref}>{ctaText}</Link>
            )}
          </Button>
        </div>

        {/* Right Column (mockup screenshot) */}
        <div
          className={cn(
            'md:col-span-8 overflow-hidden h-[400px] md:h-[580px] relative select-none pt-8 pl-8 md:pt-14 md:pl-14',
            rightBgClass || currentLeftBg,
          )}
        >
          <img
            src={rightImage}
            alt={`${title} screenshot`}
            className={cn(
              'w-full h-full object-cover object-left-top rounded-tl-xl border-t border-l',
              currentBorderClass,
            )}
            loading="lazy"
          />
        </div>
      </div>
    )
  },
)
ProductCardLarge.displayName = 'ProductCardLarge'

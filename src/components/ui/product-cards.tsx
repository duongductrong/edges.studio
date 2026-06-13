import * as React from 'react'
import { cn } from '#/lib/utils.ts'

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
      badges = [],
      ...props
    },
    ref,
  ) => {
    // Determine text colors based on background variant
    const isDarkBg =
      variant === 'image' ||
      bgClass.includes('bg-blue') ||
      bgClass.includes('bg-black') ||
      bgClass.includes('bg-zinc-900') ||
      textColor === 'light'
    const textThemeClass = isDarkBg ? 'text-white' : 'text-zinc-900'
    const subtitleThemeClass = isDarkBg ? 'text-white/60' : 'text-zinc-500'
    const descThemeClass = isDarkBg ? 'text-white/90' : 'text-zinc-600'

    if (variant === 'placeholder') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col justify-between items-center p-6 h-[380px] w-full rounded-[28px] border border-border/50 bg-white shadow-xs select-none',
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
          'group flex flex-col justify-between p-6 h-[380px] w-full rounded-[28px] relative overflow-hidden shadow-xs border border-border/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          variant === 'solid' ? bgClass : '',
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
                <div className="size-11 rounded-xl bg-white shadow-xs flex items-center justify-center overflow-hidden shrink-0 border border-border/50">
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
                  )}
                >
                  {title}
                </span>
                {subtitle && (
                  <span
                    className={cn(
                      'text-[12.5px] font-medium leading-none',
                      subtitleThemeClass,
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
                  isDarkBg
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
                      (isDarkBg
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
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group grid grid-cols-1 md:grid-cols-12 rounded-[32px] border border-border/50 bg-white shadow-xs overflow-hidden w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          className,
        )}
        {...props}
      >
        {/* Left Column */}
        <div
          className={cn(
            'md:col-span-4 p-8 md:p-6 flex flex-col justify-between h-[480px] md:h-[580px] border-b md:border-b-0 border-border/50',
            leftBgClass,
          )}
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              {/* App Icon */}
              {icon && (
                <div className="size-11 rounded-xl bg-white shadow-xs flex items-center justify-center overflow-hidden shrink-0 border border-border/50">
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
                <span className="text-[17px] font-semibold text-zinc-900 leading-tight">
                  {title}
                </span>
                <span className="text-[13px] font-medium text-zinc-500 leading-none">
                  {subtitle}
                </span>
              </div>
            </div>

            {/* Circular Link Button */}
            {href && (
              <a
                href={href}
                className="flex items-center justify-center size-8 rounded-full bg-white text-zinc-700 border border-border/50 shadow-xs hover:bg-zinc-50 hover:scale-105 transition-all duration-200"
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

          {/* Description */}
          <p className="text-[17.5px] leading-relaxed font-semibold text-zinc-800 tracking-tight my-auto py-4">
            {description}
          </p>

          {/* CTA Button */}
          <div className="mt-auto">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-zinc-50 text-zinc-800 border border-border/50 shadow-xs px-4.5 py-2.5 text-[13.5px] font-semibold transition-all duration-200 hover:-translate-y-[0.5px]"
            >
              <svg
                width="7"
                height="8"
                viewBox="0 0 6 8"
                fill="currentColor"
                className="text-zinc-800 translate-x-[0.5px]"
                aria-hidden="true"
              >
                <path d="M0 0 L6 4 L0 8 Z" />
              </svg>
              {ctaText}
            </a>
          </div>
        </div>

        {/* Right Column (mockup screenshot) */}
        <div
          className={cn(
            'md:col-span-8 overflow-hidden h-[400px] md:h-[580px] relative select-none pt-8 pl-8 md:pt-14 md:pl-14',
            rightBgClass || leftBgClass,
          )}
        >
          <img
            src={rightImage}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover object-left-top rounded-tl-[24px] border-t border-l border-border/50"
            loading="lazy"
          />
        </div>
      </div>
    )
  },
)
ProductCardLarge.displayName = 'ProductCardLarge'

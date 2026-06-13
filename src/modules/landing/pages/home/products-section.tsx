import { Container } from '@/components/ui/container'
import {
  ProductCardLarge,
  ProductCardSmall,
  TrendshiftBadge,
} from '@/components/ui/product-cards'

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

// Instantly Open Source Badge
const InstantlyOpenSourceBadge = (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 select-none w-fit">
    <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
    <span>Open Source · Free</span>
  </div>
)

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28">
      <Container className="space-y-14">
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base">
            Explore premium apps developed by edges.studio. We craft tools that
            blend seamlessly into your workflow with elegant design and deep
            utility.
          </p>
        </div>

        {/* Highlight Flagship Apps: Large Cards */}
        <div className="flex flex-col gap-8">
          <ProductCardLarge
            title="Snapzy"
            subtitle="Utility"
            description="Capture your screen with a lightweight, native macOS app. Privacy and locally."
            icon={SnapzyIcon}
            href="https://snapzy.app"
            ctaText="Download for macOS"
            ctaHref="https://snapzy.app"
            rightImage="/og-image-snapzy.png"
            leftBgClass="bg-[#0057C2]/5"
            githubUrl="https://github.com/duongductrong/Snapzy"
            stars="1k4"
            downloads="21k"
            trendingBadge={
              <TrendshiftBadge
                repositoryId="24550"
                repoName="duongductrong/Snapzy"
              />
            }
          />

          <ProductCardLarge
            title="Aesthetic"
            subtitle="Design & Photography"
            description="A native, non-destructive macOS photo editor and manager."
            icon={AestheticIcon}
            ctaText="Request Access"
            ctaHref="mailto:info@edges.studio"
            leftBgClass="bg-zinc-950"
            dark={true}
            rightImages={[
              '/aesthetic-app.png',
              '/aesthetic-app-welcome.png',
              '/aesthetic-app-spotlight.png',
            ]}
            trendingBadge={
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 select-none w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                <span>Private Beta</span>
              </div>
            }
          />

          <ProductCardLarge
            title="Instantly"
            subtitle="AI Assistant"
            description="Your always-ready AI assistant for macOS. Chat with local LLMs privately in a floating panel powered by Ollama."
            icon={InstantlyIcon}
            href="https://github.com/duongductrong/Instantly"
            ctaText="View on GitHub"
            ctaHref="https://github.com/duongductrong/Instantly"
            leftBgClass="bg-indigo-950"
            dark={true}
            githubUrl="https://github.com/duongductrong/Instantly"
            trendingBadge={InstantlyOpenSourceBadge}
            rightImage='/instantly-app.png'
          />
        </div>

        {/* Showcase Apps Grid: Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Droplit */}
          <ProductCardSmall
            title="Droplit"
            subtitle="Utility"
            description="Native macOS media optimizer — drag, drop, and optimize from anywhere."
            icon={DroplitIcon}
            href="https://github.com/duongductrong/Droplit"
            variant="solid"
            bgClass="bg-sky-50"
            badges={[
              {
                label: 'Drag & Drop',
                bgClass:
                  'bg-sky-100 hover:bg-sky-200/80 text-sky-800 border-transparent',
              },
            ]}
          />


        </div>
      </Container>
    </section>
  )
}

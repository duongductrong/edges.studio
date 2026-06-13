import { Container } from '#/components/ui/container'
import {
  ProductCardLarge,
  ProductCardSmall,
  TrendshiftBadge,
} from '#/components/ui/product-cards'

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

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28">
      <Container className="space-y-14">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="text-zinc-500 max-w-xl text-base">
            Explore premium apps developed by edges.studio. We craft tools that
            blend seamlessly into your workflow with elegant design and deep
            utility.
          </p>
        </div>

        {/* Highlight Flagship App: Large Card */}
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

        {/* Showcase Apps Grid: Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Aesthetic */}
          <ProductCardSmall
            title="Aesthetic"
            subtitle="Design & Photography"
            description="A native, non-destructive macOS photo editor and manager."
            icon={AestheticIcon}
            href="https://github.com/duongductrong/Aesthetic"
            variant="solid"
            bgClass="bg-zinc-900"
            badges={[
              {
                label: 'macOS Native',
                icon: (
                  <span
                    className="text-[11px] leading-none"
                    role="img"
                    aria-label="Laptop"
                  >
                    💻
                  </span>
                ),
                bgClass:
                  'bg-white/12 hover:bg-white/18 text-white border-white/5',
              },
            ]}
          />

          {/* Card 2: Droplit */}
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
                icon: (
                  <span
                    className="text-[11px] leading-none"
                    role="img"
                    aria-label="Droplet"
                  >
                    💧
                  </span>
                ),
                bgClass:
                  'bg-sky-100 hover:bg-sky-200/80 text-sky-800 border-transparent',
              },
            ]}
          />

          {/* Card 3: Instantly */}
          <ProductCardSmall
            title="Instantly"
            subtitle="AI Assistant"
            description="Your always-ready AI assistant for macOS. Chat with local LLMs privately in a floating panel powered by Ollama."
            icon={InstantlyIcon}
            href="https://github.com/duongductrong/Instantly"
            variant="solid"
            bgClass="bg-indigo-950"
            textColor="light"
            badges={[
              {
                label: 'Local AI',
                icon: (
                  <span
                    className="text-[11px] leading-none"
                    role="img"
                    aria-label="Sparkle"
                  >
                    ✦
                  </span>
                ),
                bgClass:
                  'bg-indigo-500/30 hover:bg-indigo-500/40 text-indigo-200 border-indigo-500/20',
              },
            ]}
          />
        </div>
      </Container>
    </section>
  )
}

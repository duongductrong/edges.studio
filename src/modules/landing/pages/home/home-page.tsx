import { LandingLayout } from '@/modules/landing/components/landing-layout'
import { ProductsSection } from '@/modules/landing/components/products-section'

export function HomePage() {
  return (
    <LandingLayout>
      <ProductsSection />
    </LandingLayout>
  )
}

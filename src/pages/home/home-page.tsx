import { LandingLayout } from '@/modules/layout'
import { ProductsSection } from '@/modules/product'

export function HomePage() {
  return (
    <LandingLayout>
      <ProductsSection />
    </LandingLayout>
  )
}

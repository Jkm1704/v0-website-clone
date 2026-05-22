import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { DescriptionSection } from '@/components/description-section'
import { CharactersSection } from '@/components/characters-section'
import { WorldSection } from '@/components/world-section'
import { DemoSection } from '@/components/demo-section'
import { GallerySection } from '@/components/gallery-section'
import { DevelopmentSection } from '@/components/development-section'
import { CreditsSection } from '@/components/credits-section'
import { Footer } from '@/components/footer'

export default function CoinCatcherPage() {
  return (
    <main className="min-h-screen bg-arcade-night">
      <Navbar />
      <HeroSection />
      <section id="descripcion">
        <DescriptionSection />
      </section>
      <section id="personajes">
        <CharactersSection />
      </section>
      <section id="niveles">
        <WorldSection />
      </section>
      <DemoSection />
      <GallerySection />
      <DevelopmentSection />
      <CreditsSection />
      <Footer />
    </main>
  )
}

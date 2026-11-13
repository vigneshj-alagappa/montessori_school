import { AboutSection } from './AboutSection'
import { ClassesSection } from './ClassesSection'
import { CtaSection } from './CtaSection'
import { FacilitiesSection } from './FacilitiesSection'
import { GalleryPreview } from './GalleryPreview'
import { HeroSection } from './HeroSection'
import { QuoteCarousel } from './QuoteCarousel'
import { StatsBand } from './StatsBand'
import { TestimonialsSection } from './TestimonialsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <AboutSection />
      <ClassesSection />
      <FacilitiesSection />
      <section className="shell section gallery-quote">
        <GalleryPreview />
        <QuoteCarousel />
      </section>
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

import type { Metadata } from 'next'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import ServicesPreview from './components/ServicesPreview'
import FeaturedInventory from './components/FeaturedInventory'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'

export const metadata: Metadata = {
  title: 'Crown Auto Trading | Premium Used Cars & Auto Repairs Melbourne',
  description:
    'Melbourne\'s premier used car dealer. Buy, sell, or trade your vehicle at Crown Auto Trading. Professional repairs, competitive prices, and exceptional service in Tarneit, VIC 3029.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <FeaturedInventory />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}

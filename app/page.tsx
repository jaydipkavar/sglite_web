import HeroSlider from "@/components/sections/hero-slider"
import AboutCompany from "@/components/sections/about-company"
import ProductOverview from "@/components/sections/product-overview"
import ApplicationsDetailed from "@/components/sections/applications-detailed"
import TechnicalSpecificationsComplete from "@/components/sections/technical-specifications-complete"
import CallToAction from "@/components/sections/call-to-action"

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <div className="animate-fade-in-up">
        <AboutCompany />
      </div>
      <div className="animate-slide-up">
        <ProductOverview />
      </div>
      <div className="animate-fade-in-up">
        <ApplicationsDetailed />
      </div>
      <div className="animate-slide-up">
        <TechnicalSpecificationsComplete />
      </div>
      <div className="animate-fade-in-up">
        <CallToAction />
      </div>
    </div>
  )
}

import Hero from "@/components/sections/hero";
import AboutCompany from "@/components/sections/about-company";
import ProductsOverview from "@/components/sections/products-overview";
import ApplicationsPreview from "@/components/sections/applications-preview";
import OurProjects from "@/components/sections/our-projects";
import WhyChooseSGLite from "@/components/sections/why-choose-sglite";
import OurCommitment from "@/components/sections/our-commitment";
import CallToAction from "@/components/sections/call-to-action";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutCompany />
      <ProductsOverview />
      <ApplicationsPreview />
      <OurProjects />
      <WhyChooseSGLite />
      <OurCommitment />
      <CallToAction />
    </div>
  );
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative gradient-bg text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium mb-6">
              ISO 9001:2015 Certified
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Premium PC Hollow
              <span className="block text-blue-200">Polycarbonate Sheets</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-2xl">
              Advanced co-extrusion technology delivering superior UV protection, impact resistance, and thermal
              insulation for over 20 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/products/pc-hollow-type-2">Explore Our Sheets</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-lg p-8 glass-effect">
                <Image
                  src="/images/hero-placeholder.png" // Updated src to static image
                  alt="PC Hollow Polycarbonate Sheets"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-500 rounded-lg p-4 glass-effect">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

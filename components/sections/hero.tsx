import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/images/hero-placeholder.png"
        alt="SGLite Polycarbonate Sheets"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-70"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge className="mb-6 bg-white bg-opacity-20 text-white border-white/30 text-lg px-6 py-2">
          ISO 9001:2015 Certified | IEC Registered | BIS Approved
        </Badge>
        <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in-up">
          Innovative Polycarbonate Sheet Solutions for a Sustainable Future
        </h1>
        <p className="text-lg lg:text-xl text-blue-50 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          From weather resistance to design flexibility — we deliver polycarbonate sheets that last.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
            <Link href="/products">Explore Products</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent text-lg px-8 py-4"
          >
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/slider/slide1.jpg"
        alt="SGLite Polycarbonate Sheets"
        fill
        priority
        className="absolute inset-0 z-0 object-cover opacity-70"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <Badge className="mb-4 sm:mb-6 bg-white text-black border-white/30 text-xs sm:text-sm md:text-base px-3 sm:px-5 py-1 sm:py-2">
          ISO 9001:2015 Certified | IEC Registered
        </Badge>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-in-up">
          Innovative Polycarbonate Sheet Solutions for a Sustainable Future
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50 mb-8 sm:mb-12 max-w-3xl md:max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          From weather resistance to design flexibility — we deliver
          polycarbonate sheets that last.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up animation-delay-400">
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            <Link href="/products">Explore Products</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

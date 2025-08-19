"use client"

import { Badge } from "@/components/ui/badge"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/images/hero-slider-placeholder.png",
      alt: "Modern architectural building with polycarbonate roof",
      badge: "ISO 9001:2015 Certified",
      title: "Innovative Polycarbonate Sheet Solutions for a Sustainable Future",
      subtitle: "From weather resistance to design flexibility — we deliver polycarbonate sheets that last.",
      linkText: "Explore Products",
      linkHref: "/products",
      buttonText: "Get Quote",
      buttonHref: "/contact",
    },
    {
      id: 2,
      image: "/images/applications-placeholder.png",
      alt: "Greenhouse with polycarbonate panels",
      badge: "Versatile Applications",
      title: "Transforming Spaces with Light and Strength",
      subtitle: "Discover how SGLite® sheets enhance durability and aesthetics in diverse applications.",
      linkText: "View Applications",
      linkHref: "/applications",
      buttonText: "Learn More",
      buttonHref: "/about",
    },
    {
      id: 3,
      image: "/images/pc-hollow-type-2-placeholder.png",
      alt: "Close-up of multiwall polycarbonate sheet",
      badge: "Advanced Technology",
      title: "Precision Engineered for Superior Performance",
      subtitle: "Our sheets offer unmatched thermal insulation, impact resistance, and UV protection.",
      linkText: "Technical Specs",
      linkHref: "/technical-specs",
      buttonText: "Contact Us",
      buttonHref: "/contact",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [nextSlide])

  const slide = slides[currentSlide]

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src={slide.image || "/placeholder.svg"}
        alt={slide.alt}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-70 transition-opacity duration-1000 ease-in-out"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <Badge className="mb-6 bg-white bg-opacity-20 text-white border-white/30 text-lg px-6 py-2">
            {slide.badge}
          </Badge>
          <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-8">{slide.title}</h1>
          <p className="text-lg lg:text-xl text-blue-50 mb-12 max-w-4xl mx-auto leading-relaxed">{slide.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              <Link href={slide.linkHref}>{slide.linkText}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent text-lg px-8 py-4"
            >
              <Link href={slide.buttonHref}>{slide.buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-white/20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-white/20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400 bg-opacity-70"
            } transition-colors duration-300`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

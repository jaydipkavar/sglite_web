"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Image

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium PC Hollow Polycarbonate Sheets",
      subtitle: "Powered by 20+ Years of Experience in Plastic Extrusion",
      description:
        "SGLite® brings decades of experience in plastic manufacturing based in Ahmedabad, Gujarat. Our 35,000 sq ft facility is equipped with modern co-extrusion lines to produce SGLite® polycarbonate sheets with superior quality and performance.",
      cta: "Explore Products",
      bgGradient: "from-blue-600 to-blue-800",
      image: "/images/hero-slider-placeholder.png", // Updated src to static image
      imageAlt: "PC Hollow Sheets",
    },
    {
      title: "WHO WE ARE - Innovation & Excellence",
      subtitle:
        "Shree Ganesh Polymers - Trusted Manufacturing Partner Since 2013",
      description:
        "Welcome to Shree Ganesh Polymers, a trusted manufacturer of high-quality polycarbonate sheets since 2013. Backed by the legacy of the Shree Ganesh Group (est. 2000), we deliver durable, innovative, and sustainable plastic solutions for industries worldwide.",
      cta: "Learn More",
      bgGradient: "from-green-600 to-blue-600",
      image: "/images/hero-slider-placeholder.png", // Updated src to static image
      imageAlt: "About Us",
    },
    {
      title: "SGLITE® - ENGINEERING LIGHT, DELIVERING STRENGTH",
      subtitle:
        "Sustainable | Growing | Lightweight | Innovative | Tough | Engineering",
      description:
        "At SGLite, we are committed to delivering high-performance polycarbonate sheet solutions that are innovative, sustainable, and reliable. We aim to empower industries around the world with products that combine strength, clarity, and long-term durability.",
      cta: "View Applications",
      bgGradient: "from-purple-600 to-indigo-600",
      image: "/images/hero-slider-placeholder.png", // Updated src to static image
      imageAlt: "SGLite Values",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <div
            className={`relative h-full bg-gradient-to-r ${slide.bgGradient} text-white`}
          >
            {/* Add a background image using next/image */}
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.imageAlt}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute inset-0 z-0 opacity-30"
            />
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center">
                  <div className="animate-slide-in-left max-w-5xl mx-auto">
                    <Badge className="mb-6 bg-black bg-opacity-20 text-white border-white/30 text-lg px-6 py-2">
                      ISO 9001:2015 Certified | IEC Registered | BIS Approved
                    </Badge>
                    <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-8">
                      {slide.title}
                    </h1>
                    <p className="text-2xl lg:text-3xl text-blue-100 mb-8 font-medium">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg lg:text-xl text-blue-50 mb-12 max-w-4xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
                      >
                        <Link href="/products">{slide.cta}</Link>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white text-blue-600 p-3 rounded-full shadow-lg transition-all hover:scale-110"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white text-blue-600 p-3 rounded-full shadow-lg transition-all hover:scale-110"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

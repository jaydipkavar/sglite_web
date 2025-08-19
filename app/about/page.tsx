import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Cog, Globe, Factory, CheckCircle } from "lucide-react";
import AboutSection from "@/components/sections/about-company"; // Renamed from about-section to about-company
import ContactCta from "@/components/sections/contact-cta";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { icon: Factory, label: "Manufacturing Facility", value: "55,000 sq. ft." },
    { icon: Award, label: "ISO Certification", value: "9001:2015" },
    { icon: Users, label: "Years in Business", value: "20+" },
    { icon: Cog, label: "Technology", value: "Co-extrusion" },
  ];

  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description:
        "Certified company with a focus on customer satisfaction. Every sheet meets rigorous quality control for long-lasting performance.",
      image: "/images/iso-placeholder.png",
    },
    {
      icon: Globe,
      title: "IEC Registered",
      description:
        "Authorized for International trade and export operations worldwide.",
      image: "/images/iec-placeholder.png",
    },
    // {
    //   icon: CheckCircle,
    //   title: "BIS Approved",
    //   description:
    //     "Meets Indian quality and performance standards. Certified for structural reliability and long-term use.",
    //   image: "/images/bis-placeholder.png",
    // },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <Badge className="mb-4 bg-white text-black bg-opacity-20">
              About Us
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Shree Ganesh Polymers
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading manufacturer of solid polycarbonate sheets with over two
              decades of excellence in plastic extrusion technology since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are (Company Overview) */}
      <AboutSection />

      {/* Contact Information */}
      <ContactCta />

      {/* Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}

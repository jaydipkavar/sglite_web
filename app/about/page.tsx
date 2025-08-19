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

      {/* Infrastructure Section */}
      <section
        id="infrastructure"
        className="py-16 lg:py-24 bg-gray-100 animate-fade-in-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art manufacturing facility ensures precision,
              quality, and efficiency in every sheet we produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 stagger-animation">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover-lift animate-bounce-in"
              >
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Image
              src="/images/about-placeholder.png"
              alt="Manufacturing Facility"
              width={900}
              height={500}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certification" className="py-16 lg:py-24 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Quality Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is backed by international
              certifications and rigorous testing standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 stagger-animation">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift animate-scale-in"
              >
                <CardContent className="p-0">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-3 text-lg">{cert.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <ContactCta />

      {/* Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}

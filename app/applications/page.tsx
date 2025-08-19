import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Factory,
  Shield,
  Lightbulb,
  Home,
  TreePine,
  Waves,
  Eye,
} from "lucide-react";
import Image from "next/image";
import ApplicationsDetailed from "@/components/sections/applications-detailed";
import ContactCta from "@/components/sections/contact-cta";

export default function ApplicationsPage() {
  const applications = [
    {
      title: "Swimming Pools",
      description:
        "Durable pool covers and enclosures with excellent UV resistance, clarity, and safety features for aquatic facilities.",
      image: "/images/applications-placeholder.png", // Updated src to static image
      icon: Waves,
    },
    {
      title: "Greenhouses",
      description:
        "Optimal light transmission for plant growth with superior thermal insulation. Transparent, UV-protected for plant growth.",
      image: "/images/applications-placeholder.png", // Updated src to static image
      icon: TreePine,
    },
    {
      title: "Windows & Doors",
      description:
        "Energy-efficient glazing solutions for residential and commercial buildings. Safer than glass, with high optical clarity.",
      image: "/images/applications-placeholder.png", // Updated src to static image
      icon: Home,
    },
    {
      title: "Suspended Ceilings",
      description:
        "Lightweight ceiling solutions with excellent light diffusion properties. Shatterproof and heat-resistant covers.",
      image: "/images/applications-placeholder.png", // Updated src to static image
      icon: Eye,
    },
    {
      title: "Industrial Roofing",
      description:
        "Heavy-duty roofing solutions for warehouses and industrial facilities. Long-lasting, lightweight alternative to glass or metal.",
      image: "/images/applications-placeholder.png", // Updated src to static image
      icon: Factory,
    },
    {
      title: "Atrium Features",
      description:
        "Architectural glazing for modern atrium designs and skylights. Transparent, UV-resistant glazing for natural lighting.",
      image: "/images/applications-placeholder.png", // Updated src to static image
      icon: Building,
    },
    {
      title: "Winter Garden Roofs",
      description:
        "Seasonal protection with maximum natural light penetration. Perfect balance of insulation and transparency.",
      image: "/images/applications-placeholder.png", // Updated src to static image
      icon: TreePine,
    },
    {
      title: "Conservatories",
      description:
        "Perfect balance of insulation and transparency for conservatory construction with architectural appeal.",
      image: "/images/applications-placeholder.png", // Updated src to static image
      icon: Home,
    },
    {
      title: "Covered Walkways",
      description:
        "Weather protection for pedestrian areas with architectural appeal. Strong, transparent roofing and side panels.",
      image: "/images/applications-placeholder.png", // Updated src to static image
      icon: Shield,
    },
  ];

  const applicationCategories = [
    {
      title: "Construction & Architecture",
      applications: [
        "Skylights and Roof lights – Transparent, UV-resistant glazing for natural lighting",
        "Canopies & Awnings – Durable weather protection for homes, shops, and buildings",
        "Facades & Cladding Panels – Strong and modern exterior finishes",
      ],
    },
    {
      title: "Industrial & Commercial Use",
      applications: [
        "Machine Guards & Safety Shields – High impact resistance makes it ideal for factory safety",
        "Industrial Roofing & Wall Panels – Long-lasting, lightweight alternative to glass or metal",
        "Warehouse Partitioning – Non-breakable transparent dividers",
      ],
    },
    {
      title: "Glazing and Security",
      applications: [
        "Windows & Doors (Clear or Tinted) – Safer than glass, with high optical clarity",
        "Security Glazing & Riot Shields – Used where break-resistance is essential",
      ],
    },
    {
      title: "Signage and Displays",
      applications: [
        "Backlit Signs & Advertising Panels – Light-diffusing and UV-stable",
        "POP Displays & Kiosks – Stylish, lightweight, and shatterproof",
      ],
    },
    {
      title: "Interiors & Decor",
      applications: [
        "Room Partitions – Frosted or embossed finishes for privacy and design",
        "Furniture Inserts & Cabinet Doors – Durable and elegant design element",
      ],
    },
    {
      title: "Lighting Applications",
      applications: [
        "Light Diffuser Panels – Especially Embossed or Diamond finishes for uniform lighting",
        "Ceiling Light Covers – Shatterproof and heat-resistant",
      ],
    },
    {
      title: "Outdoor Uses",
      applications: [
        "Greenhouses (Compact for End Panels) – Transparent, UV-protected for plant growth",
        "Bus Stops & Waiting Shelters – Strong, transparent roofing and side panels",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white bg-opacity-20">Applications</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Applications of Solid Polycarbonate Sheets
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto animate-slide-up">
            Discover the wide range of applications where SGlite® PC Hollow
            Polycarbonate Sheets deliver exceptional performance, durability,
            and value across multiple industries.
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative">
                  <Image
                    src={application.image || "/placeholder.svg"}
                    alt={application.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                    <application.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {application.title}
                  </h3>
                  <p className="text-gray-600">{application.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Application Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Detailed Application Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive overview of how SGLite® polycarbonate sheets serve
              various industries and applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {applicationCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.applications.map((app, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full inline-block mr-2"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Key Benefits for These Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center animate-bounce-in">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">200x</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Stronger than Glass
              </h3>
              <p className="text-gray-600 text-sm">
                Superior impact resistance
              </p>
            </div>
            <div
              className="text-center animate-bounce-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Lightweight</h3>
              <p className="text-gray-600 text-sm">Easy to install</p>
            </div>
            <div
              className="text-center animate-bounce-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">UV Resistant</h3>
              <p className="text-gray-600 text-sm">Weather resistant</p>
            </div>
            <div
              className="text-center animate-bounce-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Multiple Finishes
              </h3>
              <p className="text-gray-600 text-sm">Colors and textures</p>
            </div>
            <div
              className="text-center animate-bounce-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-red-600">B1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fire Retardant</h3>
              <p className="text-gray-600 text-sm">Safe and compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Detailed Section */}
      <ApplicationsDetailed />

      {/* Contact CTA Section */}
      <ContactCta />

      {/* Scroll To Top Button */}
    </div>
  );
}

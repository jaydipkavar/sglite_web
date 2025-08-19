import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ApplicationsPreview() {
  const applications = [
    {
      icon: "/images/application/skylight.png", // Roofing & Skylights
      title: "Roofing & Skylights",
      description:
        "Durable, UV-protected sheets for residential, commercial, and industrial roofing solutions.",
    },
    {
      icon: "/images/application/greenhouse.png", // Greenhouses
      title: "Greenhouses",
      description:
        "Excellent light transmission and insulation for healthy plant growth.",
    },
    {
      icon: "/images/application/parking.png", // Parking Shades
      title: "Parking Shades & Canopies",
      description:
        "Weather-resistant covers for vehicles, walkways, and outdoor areas.",
    },
    {
      icon: Building2, // Public Infrastructure
      title: "Public Infrastructure",
      description:
        "Strong, low-maintenance roofing for stations, airports, and sports complexes.",
    },
    {
      icon: "/images/application/interior.png", // Interior Glazing
      title: "Interior Glazing",
      description:
        "Clear, impact-resistant panels for partitions, signage, and displays.",
    },
    {
      icon: Shield, // Industrial Cladding
      title: "Industrial Cladding & Safety Barrier",
      description:
        "High-strength panels for factory walls, enclosures, and safety partitions.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Applications
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {applications.map((app, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0 text-center">
                {/* Icon / Image wrapper */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-xl">
                  {typeof app.icon === "string" ? (
                    <Image
                      src={app.icon}
                      alt={app.title}
                      width={40}
                      height={40}
                      className="object-contain bg-transparent"
                      unoptimized
                    />
                  ) : (
                    <app.icon className="w-10 h-10 text-black" />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/applications">Explore All Applications</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

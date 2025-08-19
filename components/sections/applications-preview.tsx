import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Home, Factory, Shield, Building, Eye } from "lucide-react"
import Link from "next/link"

export default function ApplicationsPreview() {
  const applications = [
    {
      icon: Home,
      title: "Roofing & Skylights",
      description: "Durable, UV-protected sheets for residential, commercial, and industrial roofing solutions.",
    },
    {
      icon: Lightbulb,
      title: "Greenhouses",
      description: "Excellent light transmission and insulation for healthy plant growth.",
    },
    {
      icon: Shield,
      title: "Parking Shades & Canopies",
      description: "Weather-resistant covers for vehicles, walkways, and outdoor areas.",
    },
    {
      icon: Building,
      title: "Public Infrastructure",
      description: "Strong, low-maintenance roofing for stations, airports, and sports complexes.",
    },
    {
      icon: Eye,
      title: "Interior Glazing",
      description: "Clear, impact-resistant panels for partitions, signage, and displays.",
    },
    {
      icon: Factory,
      title: "Industrial Cladding & Safety Barrier",
      description: "High-strength panels for factory walls, enclosures, and safety partitions.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Applications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {applications.map((app, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <app.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/applications">Explore All Applications</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

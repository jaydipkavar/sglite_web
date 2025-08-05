import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Factory, Shield, Lightbulb, Home, TreePine } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ApplicationsPreview() {
  const applications = [
    {
      icon: Building,
      title: "Construction & Architecture",
      description: "Skylights, canopies, facades, and cladding panels",
      color: "text-blue-600",
    },
    {
      icon: Factory,
      title: "Industrial & Commercial",
      description: "Machine guards, safety shields, and partitioning",
      color: "text-green-600",
    },
    {
      icon: Shield,
      title: "Glazing & Security",
      description: "Windows, doors, and security glazing applications",
      color: "text-red-600",
    },
    {
      icon: Lightbulb,
      title: "Lighting Applications",
      description: "Light diffusers, ceiling covers, and backlit signs",
      color: "text-yellow-600",
    },
    {
      icon: Home,
      title: "Interiors & Decor",
      description: "Room partitions, furniture inserts, cabinet doors",
      color: "text-purple-600",
    },
    {
      icon: TreePine,
      title: "Outdoor Applications",
      description: "Greenhouses, bus stops, and waiting shelters",
      color: "text-emerald-600",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Versatile Applications</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From construction and architecture to industrial safety and decorative applications, SGLite sheets provide
              unmatched performance across industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <app.icon className={`w-8 h-8 ${app.color} mb-3`} />
                    <h3 className="font-semibold mb-2">{app.title}</h3>
                    <p className="text-gray-600 text-sm">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FZPrety7oxBUc4alFwxllU5meSLmre.png"
                alt="Applications Overview"
                width={600}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/applications">Explore All Applications</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

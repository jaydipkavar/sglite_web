import { Card, CardContent } from "@/components/ui/card"
import { Shield, Sun, Zap, Wrench, Palette, Leaf } from "lucide-react"
import Image from "next/image"

export default function KeyFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Impact Resistance",
      description: "200x stronger than glass with exceptional durability",
    },
    {
      icon: Sun,
      title: "UV Protection",
      description: "Double-sided UV coating for long outdoor life",
    },
    {
      icon: Zap,
      title: "Lightweight",
      description: "Easy to cut, shape, and install with minimal effort",
    },
    {
      icon: Wrench,
      title: "Low Maintenance",
      description: "Weather-resistant with minimal maintenance required",
    },
    {
      icon: Palette,
      title: "Color Options",
      description: "Available in multiple colors and surface finishes",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Made with 100% virgin resin, fully recyclable",
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Key Features & Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <feature.icon className="w-8 h-8 text-blue-600 mb-3" />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q9bfojeCHzB2re2ebDl0jXBu3AYIHn.png"
                alt="Key Features"
                width={600}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

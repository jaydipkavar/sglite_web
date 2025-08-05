import { Card, CardContent } from "@/components/ui/card"
import { Shield, Sun, Thermometer, Flame, Wrench, Palette, Recycle, Zap, Eye } from "lucide-react"

export default function ProductHighlights() {
  const highlights = [
    {
      icon: Shield,
      title: "200x Stronger than Glass",
      description: "Superior impact resistance makes our sheets virtually unbreakable with exceptional durability.",
    },
    {
      icon: Sun,
      title: "UV Protection",
      description: "Double-sided UV protection for long outdoor life with weather-resistant properties.",
    },
    {
      icon: Thermometer,
      title: "Thermal Insulation",
      description: "Excellent thermal properties provide energy-efficient insulation for various applications.",
    },
    {
      icon: Flame,
      title: "Fire Retardancy",
      description: "Self-extinguishing properties meet international fire safety standards (B1 / B-s1, d0).",
    },
    {
      icon: Wrench,
      title: "Easy Installation",
      description: "Lightweight design and flexible properties make installation quick and hassle-free.",
    },
    {
      icon: Palette,
      title: "Color Variety",
      description: "Available in multiple colors and surface finishes to match your design requirements.",
    },
    {
      icon: Eye,
      title: "Natural Light",
      description: "Allows natural light while maintaining strength and durability with up to 89% light transmission.",
    },
    {
      icon: Recycle,
      title: "100% Recyclable",
      description: "Made using 100% virgin SABIC and Covestro resin, fully recyclable for sustainability.",
    },
    {
      icon: Zap,
      title: "Minimal Maintenance",
      description: "Weather-resistant and long-lasting with minimal maintenance required for years of service.",
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose SGlite® PC Hollow Sheets?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            SGLite polycarbonate sheets are manufactured using 100% virgin SABIC and Covestro (Makrolon) resin. Our
            sheets combine advanced technology with superior performance characteristics.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Benefits for All Applications:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span>200x stronger than glass</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span>Lightweight and easy to install</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span>UV and weather resistant</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span>Fire-retardant and safe</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

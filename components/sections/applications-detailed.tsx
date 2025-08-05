import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Factory, Shield, Lightbulb, Home, TreePine, Eye } from "lucide-react"

export default function ApplicationsDetailed() {
  const applicationCategories = [
    {
      title: "1. Construction & Architecture",
      icon: Building,
      color: "text-blue-600",
      applications: [
        "Skylights and Roof lights – Transparent, UV-resistant glazing for natural lighting",
        "Canopies & Awnings – Durable weather protection for homes, shops, and buildings",
        "Facades & Cladding Panels – Strong and modern exterior finishes",
      ],
    },
    {
      title: "2. Industrial & Commercial Use",
      icon: Factory,
      color: "text-green-600",
      applications: [
        "Machine Guards & Safety Shields – High impact resistance makes it ideal for factory safety",
        "Industrial Roofing & Wall Panels – Long-lasting, lightweight alternative to glass or metal",
        "Warehouse Partitioning – Non-breakable transparent dividers",
      ],
    },
    {
      title: "3. Glazing and Security",
      icon: Shield,
      color: "text-red-600",
      applications: [
        "Windows & Doors (Clear or Tinted) – Safer than glass, with high optical clarity",
        "Security Glazing & Riot Shields – Used where break-resistance is essential",
      ],
    },
    {
      title: "4. Signage and Displays",
      icon: Eye,
      color: "text-purple-600",
      applications: [
        "Backlit Signs & Advertising Panels – Light-diffusing and UV-stable",
        "POP Displays & Kiosks – Stylish, lightweight, and shatterproof",
      ],
    },
    {
      title: "5. Interiors & Decor",
      icon: Home,
      color: "text-orange-600",
      applications: [
        "Room Partitions – Frosted or embossed finishes for privacy and design",
        "Furniture Inserts & Cabinet Doors – Durable and elegant design element",
      ],
    },
    {
      title: "6. Lighting Applications",
      icon: Lightbulb,
      color: "text-yellow-600",
      applications: [
        "Light Diffuser Panels – Especially Embossed or Diamond finishes for uniform lighting",
        "Ceiling Light Covers – Shatterproof and heat-resistant",
      ],
    },
    {
      title: "7. Outdoor Uses",
      icon: TreePine,
      color: "text-emerald-600",
      applications: [
        "Greenhouses (Compact for End Panels) – Transparent, UV-protected for plant growth",
        "Bus Stops & Waiting Shelters – Strong, transparent roofing and side panels",
      ],
    },
  ]

  const keyBenefits = [
    "200x stronger than glass",
    "Lightweight and easy to install",
    "UV and weather resistant",
    "Available in multiple colors and finishes (Compact, Embossed, Diamond)",
    "Fire-retardant and safe",
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4">Applications</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            ✅ Applications of Solid Polycarbonate Sheets
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            SGLite polycarbonate sheets serve a wide range of applications across multiple industries, providing
            superior performance and reliability in every use case.
          </p>
        </div>

        {/* Application Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {applicationCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.applications.map((app, idx) => (
                    <li key={idx} className="text-gray-600 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full inline-block mr-3"></span>
                      {app}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Benefits for These Applications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 text-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mb-3"></div>
                  <p className="text-gray-700 text-sm font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ContactCta from "@/components/sections/contact-cta"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function MultiwallPage() {
  const multiwallTypes = [
    {
      thickness: "4mm",
      description: "Lightweight and flexible, ideal for basic roofing and DIY projects.",
      features: ["Excellent light transmission", "Good thermal insulation", "Easy to install and cut", "UV protected"],
      applications: ["Small greenhouses", "Patio covers", "Carports", "Temporary shelters"],
    },
    {
      thickness: "6mm",
      description: "A versatile option offering a balance of strength, insulation, and light transmission.",
      features: [
        "Improved thermal performance",
        "Higher impact resistance",
        "Suitable for various climates",
        "Long-lasting clarity",
      ],
      applications: ["Standard greenhouses", "Canopies", "Walkways", "Vertical glazing"],
    },
    {
      thickness: "8mm",
      description: "Enhanced insulation and rigidity for more demanding applications.",
      features: [
        "Superior thermal efficiency",
        "High structural strength",
        "Reduced condensation",
        "Noise reduction properties",
      ],
      applications: ["Commercial greenhouses", "Industrial roofing", "Skylights", "Large canopies"],
    },
    {
      thickness: "10mm",
      description: "Robust and highly insulating, perfect for energy-efficient structures.",
      features: [
        "Maximum thermal insulation",
        "Exceptional rigidity",
        "Withstands heavy loads",
        "Excellent light diffusion",
      ],
      applications: ["Conservatories", "Atrium roofing", "Sports complexes", "Architectural glazing"],
    },
    {
      thickness: "12mm",
      description: "Our thickest multiwall sheet, providing ultimate strength and thermal performance.",
      features: [
        "Highest insulation value",
        "Extreme impact resistance",
        "Ideal for harsh environments",
        "Long-term durability",
      ],
      applications: [
        "High-performance greenhouses",
        "Industrial buildings",
        "Public transport shelters",
        "Specialized architectural projects",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Badge className="mb-4 bg-white bg-opacity-20">Multiwall Sheets</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Multiwall Polycarbonate Sheets</h1>
            <p className="text-xl md:text-2xl mb-8">
              Lightweight, UV-protected, and energy-efficient solutions for diverse roofing and glazing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Types of Multiwall Polycarbonate Sheets
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SGLite offers multiwall polycarbonate sheets in various thicknesses, each designed to provide optimal
              thermal insulation, light transmission, and structural integrity for specific applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {multiwallTypes.map((type, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600 mb-2">
                    {type.thickness} PC Multiwall Sheet
                  </CardTitle>
                  <p className="text-gray-700">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-gray-800">Key Features:</h3>
                      <ul className="space-y-2">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-gray-800">Ideal Applications:</h3>
                      <ul className="space-y-2">
                        {type.applications.map((app, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Multiwall Sheet Structure</h2>
          <Image
            src="/images/multiwall-sheet-placeholder.png"
            alt="Multiwall Sheet Structure"
            width={800}
            height={450}
            className="mx-auto rounded-lg shadow-lg"
          />
          <p className="text-gray-600 mt-4 text-sm">
            The multi-cell structure provides superior thermal insulation and lightweight properties.
          </p>
        </div>
      </section>

      <ContactCta />
      <ScrollToTop />
    </div>
  )
}

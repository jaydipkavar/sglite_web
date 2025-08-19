import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ContactCta from "@/components/sections/contact-cta"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function PCHollowTypeSPage() {
  const features = [
    "Specialized multi-wall design for enhanced structural integrity",
    "Superior thermal insulation (optimized for specific climates)",
    "Excellent light diffusion and glare reduction",
    "High impact resistance and durability",
    "UV protected for long outdoor life",
    "Lightweight and easy to handle",
    "Available in various thicknesses and colors",
    "Fire retardant (B1 class)",
  ]

  const applications = [
    "Architectural glazing requiring unique aesthetics",
    "High-performance greenhouses and agricultural structures",
    "Industrial buildings and warehouses",
    "Large span roofing and skylights",
    "Sound barriers and privacy screens",
    "Specialized canopies and walkways",
  ]

  const technicalSpecs = [
    { property: "Material", value: "Polycarbonate" },
    { property: "Structure", value: "Specialized Multiwall (e.g., X-structure, Honeycomb)" },
    { property: "Thickness Range", value: "6mm to 16mm" },
    { property: "Light Transmission (Clear)", value: "Up to 75%" },
    { property: "U-Value (16mm)", value: "1.9 W/m²K" },
    { property: "Impact Strength", value: "Very High" },
    { property: "UV Protection", value: "Co-extruded (one or both sides)" },
    { property: "Fire Rating", value: "B1 (Self-extinguishing)" },
    { property: "Service Temperature", value: "-40°C to +120°C" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Badge className="mb-4 bg-white bg-opacity-20">PC Hollow Type S</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">PC Hollow Polycarbonate Sheet - Type S</h1>
            <p className="text-xl md:text-2xl mb-8">
              Specialized multi-wall design for enhanced structural integrity, superior thermal insulation, and unique
              light diffusion.
            </p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/pc-hollow-type-s-placeholder.png"
                alt="PC Hollow Type S Sheet"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600 mb-4">Product Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal Applications */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ideal Applications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SGLite PC Hollow Type S sheets are engineered for high-performance applications where advanced thermal
              efficiency and structural stability are paramount.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <p className="text-gray-700 text-lg font-medium">{app}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed specifications for SGLite PC Hollow Polycarbonate Sheet - Type S.
            </p>
          </div>
          <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-gray-300 p-3 text-left">Property</th>
                      <th className="border border-gray-300 p-3 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalSpecs.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="border border-gray-300 p-3 font-medium">{spec.property}</td>
                        <td className="border border-gray-300 p-3">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactCta />
      <ScrollToTop />
    </div>
  )
}

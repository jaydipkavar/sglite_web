import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Shield, Sun, Thermometer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PCHollowType2Page() {
  const specifications = [
    { thickness: "4mm", weight: "0.9 Kg/m²", lightTransmission: "82%", uValue: "3.9 W/m²K" },
    { thickness: "6mm", weight: "1.2 Kg/m²", lightTransmission: "80%", uValue: "3.5 W/m²K" },
    { thickness: "8mm", weight: "1.4 Kg/m²", lightTransmission: "79%", uValue: "3.2 W/m²K" },
    { thickness: "10mm", weight: "1.7 Kg/m²", lightTransmission: "78%", uValue: "2.8 W/m²K" },
  ]

  const colors = [
    { name: "Clear", description: "Crystal clear transparency" },
    { name: "Opal White", description: "Translucent white finish" },
    { name: "Silver Blue", description: "Elegant blue tint" },
    { name: "Green", description: "Natural green shade" },
    { name: "Bronze", description: "Warm bronze tone" },
  ]

  const features = [
    { icon: Shield, title: "Impact Resistance", description: "250 times stronger than glass" },
    { icon: Sun, title: "UV Protection", description: "Co-extruded UV layer on both sides" },
    { icon: Thermometer, title: "Thermal Insulation", description: "Excellent thermal performance" },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <Badge className="mb-4 bg-white bg-opacity-20">PC Hollow Sheets</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">PC Hollow – Type ||</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Double wall polycarbonate sheets with exceptional thermal insulation and structural strength for demanding
              applications.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Product Structure */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sheet Structure</h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">UV Absorption Layer</div>
                    <div className="text-sm text-gray-600">Co-extruded UV protection on both surfaces</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-4 h-4 bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Polycarbonate Core</div>
                    <div className="text-sm text-gray-600">High-quality polycarbonate with double wall structure</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">UV Absorption Layer</div>
                    <div className="text-sm text-gray-600">Additional UV protection for enhanced durability</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Image
                src="/images/pc-hollow-type-2-structure.png" // Updated src to static image
                alt="PC Hollow Type 2 Structure"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical data for PC Hollow Type || sheets across different thicknesses.
            </p>
          </div>

          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Specification Table</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Thickness</th>
                      <th className="text-left p-4 font-semibold">Weight</th>
                      <th className="text-left p-4 font-semibold">Light Transmission</th>
                      <th className="text-left p-4 font-semibold">U-Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium">{spec.thickness}</td>
                        <td className="p-4">{spec.weight}</td>
                        <td className="p-4">{spec.lightTransmission}</td>
                        <td className="p-4">{spec.uValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Colors */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Available Colors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of colors to match your architectural requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {colors.map((color, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold text-gray-900 mb-2">{color.name}</h3>
                  <p className="text-sm text-gray-600">{color.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us for detailed specifications, pricing, and technical support for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

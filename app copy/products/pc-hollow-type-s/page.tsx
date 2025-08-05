import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Shield, Sun, Zap } from "lucide-react"
import Link from "next/link"

export default function PCHollowTypeSPage() {
  const specifications = [
    { thickness: "4mm", weight: "0.7 Kg/m²", lightTransmission: "85%", uValue: "4.2 W/m²K" },
    { thickness: "6mm", weight: "1.0 Kg/m²", lightTransmission: "83%", uValue: "3.8 W/m²K" },
    { thickness: "8mm", weight: "1.2 Kg/m²", lightTransmission: "82%", uValue: "3.5 W/m²K" },
    { thickness: "10mm", weight: "1.5 Kg/m²", lightTransmission: "81%", uValue: "3.1 W/m²K" },
  ]

  const features = [
    { icon: Shield, title: "Lightweight Design", description: "Easier handling and installation" },
    { icon: Sun, title: "High Light Transmission", description: "Maximum natural light penetration" },
    { icon: Zap, title: "Cost Effective", description: "Economical solution for various applications" },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <Badge className="mb-4 bg-white bg-opacity-20">PC Hollow Sheets</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">PC Hollow – Type S</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Single wall polycarbonate sheets offering excellent light transmission and versatile applications for
              various architectural needs.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
              <p className="text-gray-600 mb-6">
                PC Hollow Type S sheets feature a single wall construction that provides an excellent balance of
                performance and cost-effectiveness. These sheets are ideal for applications requiring high light
                transmission and moderate thermal insulation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Single wall construction for lightweight applications</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Superior light transmission up to 85%</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Cost-effective solution for various projects</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Easy installation and handling</span>
                </li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="/placeholder.svg?height=400&width=500&text=PC+Hollow+Type+S"
                alt="PC Hollow Type S"
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
              Detailed technical specifications for PC Hollow Type S sheets.
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
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Interested in Type S Sheets?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts for detailed information and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button
                asChild
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

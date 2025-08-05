import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EmbossedSheetPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Embossed Surface Sheet</h1>
            <p className="text-xl md:text-2xl mb-8">Textured surface for enhanced privacy and light diffusion</p>
            <Badge className="text-lg px-4 py-2">88% Light Transmission</Badge>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Embossed polycarbonate sheets feature a textured surface that provides enhanced privacy while
                  maintaining excellent light transmission. The embossed pattern creates a sophisticated appearance
                  perfect for both functional and decorative applications.
                </p>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Enhanced privacy with light diffusion",
                    "88% light transmission",
                    "Textured surface finish",
                    "UV protection (customizable)",
                    "Decorative appearance",
                    "Easy to clean and maintain",
                    "Suitable for interior and exterior use",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Light Transmission:</span>
                        <span>88%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Surface Finish:</span>
                        <span>Embossed/Textured</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">UV Protection:</span>
                        <span>One or both sides</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Thickness Range:</span>
                        <span>1mm - 12mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Standard Sizes:</span>
                        <span>1220x2440mm, 2100x3050mm</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Ideal Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Room partitions",
                "Privacy screens",
                "Light diffuser panels",
                "Decorative panels",
                "Bathroom partitions",
                "Office dividers",
                "Ceiling light covers",
                "Interior design elements",
                "Furniture inserts",
              ].map((application, index) => (
                <Card key={index} className="p-4 text-center">
                  <CardContent className="p-0">
                    <p className="font-medium">{application}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
            <p className="text-gray-600 mb-8">
              Contact our experts to discuss your specific requirements and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/technical-specs">Technical Specifications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

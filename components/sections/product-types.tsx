import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductTypes() {
  const productTypes = [
    {
      name: "Compact (Glossy) Sheet",
      transmission: "89%",
      description: "High-gloss finish with excellent optical clarity and maximum light transmission.",
      features: [
        "Highest light transmission (89%)",
        "Double-sided UV protection",
        "Crystal clear visibility",
        "Smooth, glossy surface finish",
      ],
      href: "/products/pc-hollow-type-2",
    },
    {
      name: "Embossed Surface",
      transmission: "88%",
      description: "Textured surface for enhanced privacy and light diffusion with decorative appeal.",
      features: [
        "Enhanced privacy with light diffusion",
        "88% light transmission",
        "Textured surface finish",
        "Decorative appearance",
      ],
      href: "/products/pc-hollow-type-s",
    },
    {
      name: "Diamond (Criss-Cross Textured)",
      transmission: "86%",
      description: "Unique diamond pattern for decorative applications with anti-slip properties.",
      features: [
        "Unique diamond/criss-cross pattern",
        "86% light transmission",
        "Anti-slip surface properties",
        "Decorative aesthetic appeal",
      ],
      href: "/products/pc-hollow-type-2",
    },
  ]

  const colors = [
    { name: "Clear", compact: 89, embossed: 88, diamond: 86 },
    { name: "Opal", compact: 25, embossed: 35, diamond: 40 },
    { name: "Bronze", compact: 26, embossed: 26, diamond: 26 },
    { name: "Blue", compact: 29, embossed: 29, diamond: 29 },
    { name: "Green", compact: 35, embossed: 40, diamond: 40 },
    { name: "Smoke Grey", compact: 35, embossed: 35, diamond: 35 },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Types of Solid Polycarbonate Sheets</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            SGLite offers premium-grade solid polycarbonate sheets in various surface finishes to suit architectural,
            industrial, and commercial needs. Each type offers unique light transmission, durability, and aesthetic
            properties.
          </p>
        </div>

        {/* Product Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {productTypes.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <Badge className="bg-blue-600">{product.transmission}</Badge>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={product.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Light Transmission Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Light Transmission Values (%)</h3>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6 text-center">
                Light transmission refers to the percentage of visible light transmitted through a polycarbonate sheet,
                measured in accordance with ASTM D1003. Values vary based on sheet structure, pigmentation, and
                thickness.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Colors</th>
                      <th className="border border-gray-300 p-3 text-center">Compact</th>
                      <th className="border border-gray-300 p-3 text-center">Embossed</th>
                      <th className="border border-gray-300 p-3 text-center">Diamond</th>
                    </tr>
                  </thead>
                  <tbody>
                    {colors.map((color, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3 font-medium">{color.name}</td>
                        <td className="border border-gray-300 p-3 text-center">{color.compact}%</td>
                        <td className="border border-gray-300 p-3 text-center">{color.embossed}%</td>
                        <td className="border border-gray-300 p-3 text-center">{color.diamond}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Sizes */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Available Sizes</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <h4 className="font-semibold mb-2">Thickness</h4>
                <p className="text-2xl font-bold text-blue-600 mb-2">1mm - 12mm</p>
                <p className="text-gray-600 text-sm">Available in various thicknesses</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <h4 className="font-semibold mb-2">Width</h4>
                <p className="text-2xl font-bold text-blue-600 mb-2">1220mm, 2100mm</p>
                <p className="text-gray-600 text-sm">Standard width options</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <h4 className="font-semibold mb-2">Length</h4>
                <p className="text-2xl font-bold text-blue-600 mb-2">2440mm, 3050mm</p>
                <p className="text-gray-600 text-sm">May be tailored per requirement</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * Sizes may be tailored according to customer requirements for easy handling and transportation
          </p>
        </div>
      </div>
    </section>
  )
}

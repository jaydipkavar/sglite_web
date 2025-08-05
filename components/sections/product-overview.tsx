import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductOverview() {
  const features = [
    "Made using 100% virgin SABIC and Covestro resin",
    "Stronger and safer than traditional materials like glass",
    "Allows natural light while maintaining strength and durability",
    "UV-protected for long outdoor life",
    "Weather-resistant and long-lasting",
    "Lightweight and easy to cut, shape, and install",
    "A variety of colour options and surface features",
    "Suitable for a wide range of indoor and outdoor applications",
    "Minimal maintenance required",
  ]

  const productTypes = [
    {
      name: "1. Compact (Glossy) Sheet",
      description: "High-gloss finish with excellent optical clarity and maximum light transmission.",
      transmission: "89%",
    },
    {
      name: "2. Embossed Surface",
      description: "Textured surface for enhanced privacy and light diffusion with decorative appeal.",
      transmission: "88%",
    },
    {
      name: "3. Diamond (Criss-Cross Textured) Surface",
      description: "Unique diamond pattern for decorative applications with anti-slip properties.",
      transmission: "86%",
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
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Product Overview */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Solid & Textured Polycarbonate Sheets</h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              SGLite polycarbonate sheets are manufactured using 100% virgin SABIC and Covestro (Makrolon) resin in
              clear (natural) color. Our SGLite Solid Compact sheets come with double-sided UV protection, while
              frosted, embossed, and diamond embossed sheets can be customized with either one-side or both-side UV
              coating as per requirement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              SGLite sheets are the ideal choice for projects requiring long service life, high weather resistance, and
              retention of mechanical properties. These advantages are backed by our limited manufacturing warranty,
              ensuring protection against weathering and long-term durability.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Types of Sheets */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Types of Solid Polycarbonate Sheets</h3>
          <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">
            SGLite offers premium-grade solid polycarbonate sheets in various surface finishes to suit architectural,
            industrial, and commercial needs. Each type is designed to offer unique light transmission, durability, and
            aesthetic properties.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {productTypes.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge className="bg-blue-600">{product.transmission}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Color Variants */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Color Variants</h3>
          <p className="text-center text-gray-600 mb-8">Enhance your design with our color selection.</p>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Available Size</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
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
                <p className="text-gray-600 text-sm">Custom lengths available</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-gray-500">
            * May be tailored according to customer requirement for easy handling and transportation
          </p>
        </div>
      </div>
    </section>
  )
}

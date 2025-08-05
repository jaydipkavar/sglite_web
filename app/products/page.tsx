import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsPage() {
  const productTypes = [
    {
      id: "compact",
      name: "1. Compact (Glossy) Sheet",
      transmission: "89%",
      description: "High-gloss finish with excellent optical clarity and maximum light transmission.",
      features: [
        "Highest light transmission (89%)",
        "Double-sided UV protection",
        "Crystal clear visibility",
        "Smooth, glossy surface finish",
        "Superior impact resistance",
        "Weather resistant properties",
      ],
      applications: [
        "Skylights and roof lights",
        "Windows and doors",
        "Security glazing",
        "Greenhouse end panels",
        "Machine guards",
        "Display panels",
      ],
    },
    {
      id: "embossed",
      name: "2. Embossed Surface",
      transmission: "88%",
      description: "Textured surface for enhanced privacy and light diffusion with decorative appeal.",
      features: [
        "Enhanced privacy with light diffusion",
        "88% light transmission",
        "Textured surface finish",
        "Decorative appearance",
        "UV protection (customizable)",
        "Easy to clean and maintain",
      ],
      applications: [
        "Room partitions",
        "Privacy screens",
        "Light diffuser panels",
        "Decorative panels",
        "Bathroom partitions",
        "Office dividers",
      ],
    },
    {
      id: "diamond",
      name: "3. Diamond (Criss-Cross Textured) Surface",
      transmission: "86%",
      description: "Unique diamond pattern for decorative applications with anti-slip properties.",
      features: [
        "Unique diamond/criss-cross pattern",
        "86% light transmission",
        "Anti-slip surface properties",
        "Decorative aesthetic appeal",
        "Enhanced grip and safety",
        "UV protection (customizable)",
      ],
      applications: [
        "Flooring and walkways",
        "Stair treads",
        "Platform surfaces",
        "Decorative panels",
        "Safety flooring",
        "Industrial walkways",
      ],
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Badge className="mb-4 bg-white bg-opacity-20">Our Products</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solid & Textured Polycarbonate Sheets</h1>
            <p className="text-xl md:text-2xl mb-8">
              Premium quality sheets manufactured using 100% virgin SABIC and Covestro (Makrolon) resin
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                SGLite polycarbonate sheets are manufactured using 100% virgin SABIC and Covestro (Makrolon) resin in
                clear (natural) color. Our SGLite Solid Compact sheets come with double-sided UV protection, while
                frosted, embossed, and diamond embossed sheets can be customized with either one-side or both-side UV
                coating as per requirement.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 animate-slide-up">Key Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in-up"
                  >
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
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-16 bg-gray-50 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">Types of Solid Polycarbonate Sheets</h2>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              SGLite offers premium-grade solid polycarbonate sheets in various surface finishes to suit architectural,
              industrial, and commercial needs. Each type is designed to offer unique light transmission, durability,
              and aesthetic properties.
            </p>
          </div>

          <div className="space-y-12">
            {productTypes.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 max-w-6xl mx-auto hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <CardTitle className="text-2xl mb-2 lg:mb-0">{product.name}</CardTitle>
                    <Badge className="bg-blue-600 text-lg px-4 py-2 w-fit animate-bounce-in">
                      Light Transmission: {product.transmission}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-lg">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Features */}
                    <div className="animate-slide-in-left">
                      <h4 className="font-semibold text-lg mb-4 text-blue-600">Key Features:</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="animate-slide-in-right">
                      <h4 className="font-semibold text-lg mb-4 text-green-600">Ideal Applications:</h4>
                      <ul className="space-y-3">
                        {product.applications.map((app, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <Button asChild className="w-full lg:w-auto hover:scale-105 transition-transform duration-300">
                      <Link href={`/products/${product.id}`}>Learn More About {product.name}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">Color Variants</h2>
            <p className="text-center text-gray-600 mb-8">
              Enhance your design with our comprehensive color selection.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="animate-scale-in hover-lift">
              <CardHeader>
                <CardTitle>Light Transmission Values by Color and Finish (%)</CardTitle>
                <p className="text-gray-600">
                  Light transmission refers to the percentage of visible light transmitted through a polycarbonate
                  sheet, measured in accordance with ASTM D1003. Values vary based on sheet structure, pigmentation, and
                  thickness.
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="border border-gray-300 p-4 text-left">Colors</th>
                        <th className="border border-gray-300 p-4 text-center">Compact</th>
                        <th className="border border-gray-300 p-4 text-center">Embossed</th>
                        <th className="border border-gray-300 p-4 text-center">Diamond</th>
                      </tr>
                    </thead>
                    <tbody>
                      {colors.map((color, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                          <td className="border border-gray-300 p-4 font-medium">{color.name}</td>
                          <td className="border border-gray-300 p-4 text-center font-semibold">{color.compact}%</td>
                          <td className="border border-gray-300 p-4 text-center font-semibold">{color.embossed}%</td>
                          <td className="border border-gray-300 p-4 text-center font-semibold">{color.diamond}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Sizes */}
      <section className="py-16 bg-gray-50 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Available Size</h2>
            <div className="grid md:grid-cols-3 gap-8 stagger-animation">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift animate-bounce-in">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-4 text-xl">Thickness</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">1mm - 12mm</p>
                  <p className="text-gray-600">Available in various thicknesses</p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift animate-bounce-in">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-4 text-xl">Width</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">1220mm, 2100mm</p>
                  <p className="text-gray-600">Standard width options</p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift animate-bounce-in">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-4 text-xl">Length</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">2440mm, 3050mm</p>
                  <p className="text-gray-600">Custom lengths available</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8 animate-fade-in">
              <Badge variant="outline" className="text-sm px-4 py-2">
                * May be tailored according to customer requirement for easy handling and transportation
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-16 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 animate-slide-up">Manufacturing Excellence</h2>
            <Card className="p-8 bg-blue-50 border-blue-200 hover-lift animate-scale-in">
              <CardContent className="p-0">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  SGLite sheets are the ideal choice for projects requiring long service life, high weather resistance,
                  and retention of mechanical properties. These advantages are backed by our limited manufacturing
                  warranty, ensuring protection against weathering and long-term durability.
                </p>
                <div className="grid md:grid-cols-3 gap-6 stagger-animation">
                  <div className="text-center animate-bounce-in">
                    <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Virgin SABIC & Covestro Resin</div>
                  </div>
                  <div className="text-center animate-bounce-in">
                    <div className="text-2xl font-bold text-blue-600 mb-2">ISO 9001:2015</div>
                    <div className="text-sm text-gray-600">Quality Certified</div>
                  </div>
                  <div className="text-center animate-bounce-in">
                    <div className="text-2xl font-bold text-blue-600 mb-2">35,000</div>
                    <div className="text-sm text-gray-600">Sq. Ft. Facility</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our experts to discuss your specific requirements and get a custom quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent hover:scale-105 transition-all duration-300"
              >
                <Link href="/technical-specs">Technical Specifications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

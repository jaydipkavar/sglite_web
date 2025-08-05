import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function ProductsOverview() {
  const products = [
    {
      name: "Compact (Glossy) Sheet",
      transmission: "89%",
      description: "High-gloss finish with excellent optical clarity",
      features: ["Double-sided UV protection", "Maximum light transmission", "Crystal clear visibility"],
      href: "/products/compact",
    },
    {
      name: "Embossed Surface",
      transmission: "88%",
      description: "Textured surface for enhanced privacy and light diffusion",
      features: ["Enhanced privacy", "Light diffusion properties", "Decorative finish"],
      href: "/products/embossed",
    },
    {
      name: "Diamond Textured",
      transmission: "86%",
      description: "Unique diamond pattern for decorative applications",
      features: ["Decorative diamond pattern", "Anti-slip properties", "Unique aesthetic appeal"],
      href: "/products/diamond",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              SGLite polycarbonate sheets manufactured using 100% virgin SABIC and Covestro (Makrolon) resin with
              customizable UV protection options.
            </p>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-th0DpuW3R78AmWyGQ9HiRqhB5TXz1v.png"
              alt="Available Colors"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
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

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

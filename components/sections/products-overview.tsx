import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ProductsOverview() {
  const products = [
    {
      name: "Solid Polycarbonate Sheets",
      description:
        "High-strength sheets with exceptional clarity, available in Compact (Glossy), Embossed, and Diamond Textured finishes for architectural, industrial, and decorative applications.",
      image: "/images/sheet/1.jpeg",
      href: "/products",
    },
    {
      name: "Multiwall Polycarbonate Sheets",
      description:
        "Lightweight, UV-protected sheets for roofing, skylights, and greenhouses, available in 4mm, 6mm, 8mm, 10mm, and 12mm thicknesses.",
      image: "/images/sheet/2.jpeg",
      href: "/products/multiwall",
    },
    {
      name: "Polycarbonate Profile Sheets",
      description:
        "Designed for secure overlaps and precise installation, ensuring enhanced structural strength and weather protection for roofing projects.",
      image: "/images/sheet/3.jpeg",
      href: "/products/profile-sheets",
    },
    {
      name: "Polycarbonate Profile Connectors",
      description:
        "Strong, weather-resistant connectors for joining polycarbonate sheets, ideal for large-scale and long-lasting installations.",
      image: "/images/sheet/4.jpeg",
      href: "/products/profile-connectors",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Engineered Polycarbonate Sheet Solutions for Every Application
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="flex flex-col flex-1">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {product.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  {/* Button pinned to bottom */}
                  <div className="mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full bg-transparent"
                    >
                      <Link href={product.href}>View Specs</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

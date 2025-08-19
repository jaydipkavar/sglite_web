import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ContactCta from "@/components/sections/contact-cta";

export default function ProfileConnectorsPage() {
  const connectors = [
    {
      type: "H Profile",
      description:
        "Designed to securely join the edges of two polycarbonate sheets, creating a seamless and watertight connection.",
      usage:
        "Ideal for connecting sheets in large roofing or glazing installations.",
      image: "/images/connector-placeholder.png",
    },
    {
      type: "U Profile",
      description:
        "Used to seal the open edges of polycarbonate sheets, protecting them from dust, moisture, and insects.",
      usage:
        "Essential for finishing the ends of multiwall or solid sheets in various applications.",
      image: "/images/connector-placeholder.png",
    },
    {
      type: "F Profile",
      description:
        "Provides a clean and secure way to join polycarbonate sheets to existing frames or walls.",
      usage:
        "Perfect for wall cladding, partitions, and integrating sheets into structural elements.",
      image: "/images/connector-placeholder.png",
    },
  ];

  const keyBenefits = [
    "Strong and weather-resistant for long-lasting installations",
    "Ensures watertight and dust-proof seals",
    "Facilitates precise and secure sheet alignment",
    "Reduces installation time and effort",
    "Enhances the structural integrity of the entire system",
    "Available in various colors to match polycarbonate sheets",
    "UV stabilized for outdoor durability",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Badge className="mb-4 bg-white bg-opacity-20">
              Profile Connectors
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Polycarbonate Profile Connectors
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Strong, weather-resistant connectors for joining polycarbonate
              sheets, ideal for large-scale and long-lasting installations.
            </p>
          </div>
        </div>
      </section>

      {/* Connector Types Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Types of Polycarbonate Profile Connectors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SGLite offers a range of high-quality polycarbonate profiles
              designed to provide secure, durable, and aesthetically pleasing
              connections for your sheet installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {connectors.map((connector, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={connector.image || "/placeholder.svg"}
                  alt={connector.type}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-600 mb-2">
                    {connector.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">{connector.description}</p>
                  <p className="text-gray-600 text-sm font-medium">
                    Usage: {connector.usage}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Key Benefits of SGLite® Connectors
            </h2>
          </div>
          <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactCta />
    </div>
  );
}

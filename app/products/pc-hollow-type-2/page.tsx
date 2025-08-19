import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ContactCta from "@/components/sections/contact-cta";

export default function PCHollowType2Page() {
  const features = [
    "Superior thermal insulation (U-value 2.9 W/m²K for 10mm)",
    "High impact resistance (200x stronger than glass)",
    "Lightweight and easy to install",
    "Excellent light transmission (up to 82% for clear)",
    "UV protected on one or both sides for long outdoor life",
    "Weather resistant and durable",
    "Wide range of thicknesses and colors available",
    "Fire retardant (B1 class)",
  ];

  const applications = [
    "Greenhouses and conservatories",
    "Skylights and roof lights",
    "Canopies and walkways",
    "Industrial roofing and cladding",
    "Vertical glazing and partitions",
    "Bus shelters and public infrastructure",
  ];

  const technicalSpecs = [
    { property: "Material", value: "Polycarbonate" },
    { property: "Structure", value: "Multiwall (e.g., Twinwall, Triplewall)" },
    { property: "Thickness Range", value: "4mm to 12mm" },
    { property: "Light Transmission (Clear)", value: "Up to 82%" },
    { property: "U-Value (10mm)", value: "2.9 W/m²K" },
    { property: "Impact Strength", value: "200x stronger than glass" },
    { property: "UV Protection", value: "Co-extruded (one or both sides)" },
    { property: "Fire Rating", value: "B1 (Self-extinguishing)" },
    { property: "Service Temperature", value: "-40°C to +120°C" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Badge className="mb-4 bg-white bg-opacity-20">
              PC Hollow Type II
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PC Hollow Polycarbonate Sheet - Type II
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Advanced multiwall structure for superior thermal insulation,
              impact resistance, and light diffusion.
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
                src="/images/pc-hollow-type-2-placeholder.png"
                alt="PC Hollow Type II Sheet"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600 mb-4">
                  Product Highlights
                </CardTitle>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ideal Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SGLite PC Hollow Type II sheets are highly versatile, offering
              excellent performance in a variety of architectural, industrial,
              and agricultural settings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card
                key={index}
                className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed specifications for SGLite PC Hollow Polycarbonate Sheet -
              Type II.
            </p>
          </div>
          <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-gray-300 p-3 text-left">
                        Property
                      </th>
                      <th className="border border-gray-300 p-3 text-left">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalSpecs.map((spec, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="border border-gray-300 p-3 font-medium">
                          {spec.property}
                        </td>
                        <td className="border border-gray-300 p-3">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Structure Image */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Sheet Structure
          </h2>
          <Image
            src="/images/pc-hollow-type-2-structure.png"
            alt="PC Hollow Type II Structure"
            width={800}
            height={450}
            className="mx-auto rounded-lg shadow-lg"
          />
          <p className="text-gray-600 mt-4 text-sm">
            The multi-cell structure provides superior thermal insulation and
            lightweight properties.
          </p>
        </div>
      </section>

      <ContactCta />
    </div>
  );
}

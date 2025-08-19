import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactCta from "@/components/sections/contact-cta"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function TechnicalSpecsPage() {
  const solidSheetSpecs = [
    { property: "Material", value: "100% Virgin Polycarbonate (SABIC/Covestro)" },
    { property: "Light Transmission (Clear Compact)", value: "89%" },
    { property: "Light Transmission (Clear Embossed)", value: "88%" },
    { property: "Light Transmission (Clear Diamond)", value: "86%" },
    { property: "Impact Strength", value: "200x stronger than glass" },
    { property: "UV Protection", value: "Co-extruded (one or both sides customizable)" },
    { property: "Density", value: "1.2 g/cm³" },
    { property: "Service Temperature", value: "-40°C to +120°C" },
    { property: "Fire Rating", value: "B1 (Self-extinguishing)" },
    { property: "Thickness Range", value: "1mm - 12mm" },
    { property: "Standard Widths", value: "1220mm, 2100mm" },
    { property: "Standard Lengths", value: "2440mm, 3050mm (customizable)" },
  ]

  const multiwallSheetSpecs = [
    { property: "Material", value: "100% Virgin Polycarbonate (SABIC/Covestro)" },
    { property: "Structure", value: "Multiwall (Twinwall, Triplewall, etc.)" },
    { property: "Light Transmission (Clear)", value: "Up to 82% (varies by thickness)" },
    { property: "U-Value (4mm)", value: "3.9 W/m²K" },
    { property: "U-Value (6mm)", value: "3.6 W/m²K" },
    { property: "U-Value (8mm)", value: "3.2 W/m²K" },
    { property: "U-Value (10mm)", value: "2.9 W/m²K" },
    { property: "U-Value (12mm)", value: "2.7 W/m²K" },
    { property: "Impact Strength", value: "High" },
    { property: "UV Protection", value: "Co-extruded (one or both sides)" },
    { property: "Fire Rating", value: "B1 (Self-extinguishing)" },
    { property: "Thickness Range", value: "4mm - 12mm" },
    { property: "Standard Widths", value: "2100mm" },
    { property: "Standard Lengths", value: "5800mm, 11800mm (customizable)" },
  ]

  const profileSheetSpecs = [
    { property: "Material", value: "Polycarbonate" },
    { property: "Profiles Available", value: "Corrugated, Greca, etc. (matching roofing designs)" },
    { property: "UV Protection", value: "Co-extruded" },
    { property: "Impact Resistance", value: "High" },
    { property: "Weather Resistance", value: "Excellent" },
    { property: "Thickness Range", value: "0.8mm - 3mm" },
    { property: "Colors", value: "Clear, Opal, Bronze, Blue, Green, Smoke Grey" },
  ]

  const connectorSpecs = [
    { property: "Material", value: "Polycarbonate" },
    { property: "Types", value: "H-Profile, U-Profile, F-Profile" },
    { property: "UV Protection", value: "Yes" },
    { property: "Durability", value: "Strong and weather-resistant" },
    { property: "Compatibility", value: "Designed for SGLite® sheets" },
    { property: "Lengths", value: "Standard lengths (e.g., 5800mm, 11800mm)" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Badge className="mb-4 bg-white bg-opacity-20">Technical Data</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Specifications</h1>
            <p className="text-xl md:text-2xl mb-8">
              Comprehensive technical data and standards for all SGLite® polycarbonate sheet products.
            </p>
          </div>
        </div>
      </section>

      {/* Solid Sheet Specifications */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Solid Polycarbonate Sheets</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed physical properties and performance characteristics for our Compact, Embossed, and Diamond
              textured solid sheets.
            </p>
          </div>
          <Card className="max-w-6xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-gray-300 p-3 text-left">Property</th>
                      <th className="border border-gray-300 p-3 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {solidSheetSpecs.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="border border-gray-300 p-3 font-medium">{spec.property}</td>
                        <td className="border border-gray-300 p-3">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Multiwall Sheet Specifications */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Multiwall Polycarbonate Sheets</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive data on thermal insulation, light transmission, and structural properties for our multiwall
              sheets.
            </p>
          </div>
          <Card className="max-w-6xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-gray-300 p-3 text-left">Property</th>
                      <th className="border border-gray-300 p-3 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {multiwallSheetSpecs.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="border border-gray-300 p-3 font-medium">{spec.property}</td>
                        <td className="border border-gray-300 p-3">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Profile Sheet Specifications */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Polycarbonate Profile Sheets</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technical details for our profile sheets, designed for secure overlaps and enhanced structural strength.
            </p>
          </div>
          <Card className="max-w-6xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-gray-300 p-3 text-left">Property</th>
                      <th className="border border-gray-300 p-3 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profileSheetSpecs.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="border border-gray-300 p-3 font-medium">{spec.property}</td>
                        <td className="border border-gray-300 p-3">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Profile Connector Specifications */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Polycarbonate Profile Connectors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specifications for our strong, weather-resistant connectors, ensuring seamless and durable installations.
            </p>
          </div>
          <Card className="max-w-6xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-gray-300 p-3 text-left">Property</th>
                      <th className="border border-gray-300 p-3 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {connectorSpecs.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="border border-gray-300 p-3 font-medium">{spec.property}</td>
                        <td className="border border-gray-300 p-3">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactCta />
      <ScrollToTop />
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function TechnicalSpecsPage() {
  const technicalData = [
    {
      group: "Physical",
      properties: [
        { property: "Density", condition: "23°C", value: "1.20", unit: "g/cm³", standard: "ISO 1183" },
        {
          property: "Water Absorption (24h)",
          condition: "23°C, 50% RH",
          value: "0.15",
          unit: "%",
          standard: "ASTM D570",
        },
      ],
    },
    {
      group: "Mechanical",
      properties: [
        {
          property: "Tensile Strength",
          condition: "50 mm/min",
          value: "60–70",
          unit: "MPa",
          standard: "ISO 527 / ASTM D638",
        },
        { property: "Elongation at Break", condition: "50 mm/min", value: "> 100", unit: "%", standard: "ISO 527" },
        { property: "Flexural Strength", condition: "-", value: "~100", unit: "MPa", standard: "ISO 178" },
        { property: "Modulus of Elasticity", condition: "-", value: "2300", unit: "MPa", standard: "ISO 527" },
        {
          property: "Izod Impact Strength",
          condition: "Notched, 23°C",
          value: "600–850",
          unit: "J/m",
          standard: "ASTM D256",
        },
        { property: "Rockwell Hardness", condition: "M Scale", value: "M70 / R118", unit: "-", standard: "ASTM D785" },
      ],
    },
    {
      group: "Thermal",
      properties: [
        {
          property: "Heat Deflection Temperature (HDT)",
          condition: "0.45 MPa Load",
          value: "~140",
          unit: "°C",
          standard: "ISO 75",
        },
        { property: "Service Temperature Range", condition: "-", value: "-40 to +120", unit: "°C", standard: "-" },
        {
          property: "Coefficient of Linear Expansion",
          condition: "23–55°C",
          value: "0.065–0.07",
          unit: "mm/m·°C",
          standard: "ASTM D696",
        },
        {
          property: "Thermal Conductivity",
          condition: "23°C",
          value: "0.19–0.22",
          unit: "W/m·K",
          standard: "ASTM C177",
        },
      ],
    },
    {
      group: "Optical",
      properties: [
        {
          property: "Light Transmission (Clear Sheet)",
          condition: "3 mm thickness",
          value: "85–90",
          unit: "%",
          standard: "ASTM D1003",
        },
        { property: "Haze (Clear Sheet)", condition: "3 mm", value: "< 1", unit: "%", standard: "ASTM D1003" },
        { property: "UV Protection", condition: "Single/Double Sided", value: "Yes", unit: "-", standard: "ISO 9050" },
      ],
    },
    {
      group: "Electrical",
      properties: [
        {
          property: "Dielectric Strength",
          condition: "1 mm thickness",
          value: "> 30",
          unit: "kV/mm",
          standard: "ASTM D149",
        },
        {
          property: "Volume Resistivity",
          condition: "23°C, 50% RH",
          value: "10¹⁵",
          unit: "ohm·cm",
          standard: "ASTM D257",
        },
      ],
    },
    {
      group: "Other Properties",
      properties: [
        {
          property: "Flammability",
          condition: "-",
          value: "B1 / B-s1, d0",
          unit: "-",
          standard: "DIN 4102 / EN 13501-1",
        },
        {
          property: "Chemical Resistance",
          condition: "-",
          value: "Good (see compatibility chart)",
          unit: "-",
          standard: "-",
        },
        { property: "Recyclability", condition: "-", value: "Fully Recyclable ♻", unit: "-", standard: "-" },
        { property: "Machinability", condition: "Cutting, Drilling", value: "Easy", unit: "-", standard: "-" },
      ],
    },
  ]

  const lightTransmissionData = [
    { color: "Clear", compact: 89, embossed: 88, diamond: 86 },
    { color: "Opal", compact: 25, embossed: 35, diamond: 40 },
    { color: "Bronze", compact: 26, embossed: 26, diamond: 26 },
    { color: "Blue", compact: 29, embossed: 29, diamond: 29 },
    { color: "Green", compact: 35, embossed: 40, diamond: 40 },
    { color: "Smoke Grey", compact: 35, embossed: 35, diamond: 35 },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Specifications</h1>
            <p className="text-xl md:text-2xl mb-8">Comprehensive technical data for SGLite polycarbonate sheets</p>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Technical Excellence</h2>
                <p className="text-gray-600 text-lg mb-6">
                  Our polycarbonate sheets are engineered to meet the highest technical standards. All specifications
                  are tested according to international standards including ISO, ASTM, and DIN requirements.
                </p>
                <div className="space-y-3">
                  <Badge className="mr-2">ISO 9001:2015 Certified</Badge>
                  <Badge variant="outline" className="mr-2">
                    ASTM Compliant
                  </Badge>
                  <Badge variant="secondary">BIS Approved</Badge>
                </div>
              </div>
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hECThubJmEuKlPd0DXPY1O6TrVmvzu.png"
                  alt="Technical Specifications"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Specification Table for Solid Polycarbonate Sheets
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 p-3 text-left">Property Group</th>
                    <th className="border border-gray-300 p-3 text-left">Property</th>
                    <th className="border border-gray-300 p-3 text-left">Test Condition</th>
                    <th className="border border-gray-300 p-3 text-left">Typical Value</th>
                    <th className="border border-gray-300 p-3 text-left">Unit</th>
                    <th className="border border-gray-300 p-3 text-left">Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalData.map((group, groupIndex) =>
                    group.properties.map((prop, propIndex) => (
                      <tr key={`${groupIndex}-${propIndex}`} className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3 font-medium">{propIndex === 0 ? group.group : ""}</td>
                        <td className="border border-gray-300 p-3">{prop.property}</td>
                        <td className="border border-gray-300 p-3 text-sm">{prop.condition}</td>
                        <td className="border border-gray-300 p-3 font-medium">{prop.value}</td>
                        <td className="border border-gray-300 p-3">{prop.unit}</td>
                        <td className="border border-gray-300 p-3 text-sm">{prop.standard}</td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Light Transmission Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Light Transmission Values</h2>
            <p className="text-gray-600 text-center mb-12">
              Light transmission refers to the percentage of visible light transmitted through a polycarbonate sheet,
              measured in accordance with ASTM D1003. Values vary based on sheet structure, pigmentation, and thickness.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Light Transmission by Color and Finish (%)</CardTitle>
              </CardHeader>
              <CardContent>
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
                      {lightTransmissionData.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">{row.color}</td>
                          <td className="border border-gray-300 p-3 text-center">{row.compact}</td>
                          <td className="border border-gray-300 p-3 text-center">{row.embossed}</td>
                          <td className="border border-gray-300 p-3 text-center">{row.diamond}</td>
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

      {/* Key Performance Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Performance Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">200x</div>
                <h3 className="font-semibold mb-2">Stronger than Glass</h3>
                <p className="text-gray-600 text-sm">Superior impact resistance</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
                <h3 className="font-semibold mb-2">Light Transmission</h3>
                <p className="text-gray-600 text-sm">Maximum clarity (clear sheets)</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-orange-600 mb-2">140°C</div>
                <h3 className="font-semibold mb-2">Heat Deflection</h3>
                <p className="text-gray-600 text-sm">High temperature resistance</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-purple-600 mb-2">850 J/m</div>
                <h3 className="font-semibold mb-2">Impact Strength</h3>
                <p className="text-gray-600 text-sm">Exceptional durability</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

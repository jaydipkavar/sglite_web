import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TechnicalSpecifications() {
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

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Technical Specification Table for Solid Polycarbonate Sheets
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive technical data for Compact, Embossed & Diamond Finish sheets tested according to international
            standards.
          </p>
        </div>

        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle>Complete Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
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
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

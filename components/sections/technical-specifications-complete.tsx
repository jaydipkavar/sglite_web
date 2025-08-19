import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function TechnicalSpecificationsComplete() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12 text-center">
        <Badge className="mb-4 text-lg px-4 py-2" variant="secondary">
          Comprehensive Data
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Complete Technical Specifications for SGLite®
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Access detailed technical data, physical properties, and performance characteristics for all SGLite®
          polycarbonate sheet types, ensuring informed decisions for your projects.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-4">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4">
            <Link href="/products">Explore Products</Link>
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          General Physical Properties
        </h2>
        <Card className="shadow-lg">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Property</TableHead>
                  <TableHead>Test Method</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead className="text-right">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Specific Gravity</TableCell>
                  <TableCell>ASTM D792</TableCell>
                  <TableCell>g/cm³</TableCell>
                  <TableCell className="text-right">1.20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Light Transmission (Compact)</TableCell>
                  <TableCell>ASTM D1003</TableCell>
                  <TableCell>%</TableCell>
                  <TableCell className="text-right">89</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Light Transmission (Embossed)</TableCell>
                  <TableCell>ASTM D1003</TableCell>
                  <TableCell>%</TableCell>
                  <TableCell className="text-right">88</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Light Transmission (Diamond)</TableCell>
                  <TableCell>ASTM D1003</TableCell>
                  <TableCell>%</TableCell>
                  <TableCell className="text-right">86</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Haze</TableCell>
                  <TableCell>ASTM D1003</TableCell>
                  <TableCell>%</TableCell>
                  <TableCell className="text-right">{"<"}1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tensile Strength</TableCell>
                  <TableCell>ASTM D638</TableCell>
                  <TableCell>MPa</TableCell>
                  <TableCell className="text-right">{"<"}60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Flexural Strength</TableCell>
                  <TableCell>ASTM D790</TableCell>
                  <TableCell>MPa</TableCell>
                  <TableCell className="text-right">{"<"}90</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Impact Strength (Notched Izod)</TableCell>
                  <TableCell>ASTM D256</TableCell>
                  <TableCell>J/m</TableCell>
                  <TableCell className="text-right">No Break</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Heat Deflection Temperature</TableCell>
                  <TableCell>ASTM D648</TableCell>
                  <TableCell>°C</TableCell>
                  <TableCell className="text-right">135</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Coefficient of Thermal Expansion</TableCell>
                  <TableCell>ASTM D696</TableCell>
                  <TableCell>mm/m°C</TableCell>
                  <TableCell className="text-right">0.065</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Service Temperature Range</TableCell>
                  <TableCell>Internal</TableCell>
                  <TableCell>°C</TableCell>
                  <TableCell className="text-right">-40 to +120</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fire Rating</TableCell>
                  <TableCell>UL 94</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="text-right">V-2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Thickness and Weight Chart (Compact Sheet)
        </h2>
        <Card className="shadow-lg">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Thickness (mm)</TableHead>
                  <TableHead>Weight (kg/m²)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1.0</TableCell>
                  <TableCell>1.20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1.5</TableCell>
                  <TableCell>1.80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2.0</TableCell>
                  <TableCell>2.40</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3.0</TableCell>
                  <TableCell>3.60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4.0</TableCell>
                  <TableCell>4.80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5.0</TableCell>
                  <TableCell>6.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>6.0</TableCell>
                  <TableCell>7.20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>8.0</TableCell>
                  <TableCell>9.60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10.0</TableCell>
                  <TableCell>12.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12.0</TableCell>
                  <TableCell>14.40</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Thickness and Weight Chart (PC Hollow Sheet Type 2)
        </h2>
        <Card className="shadow-lg">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Thickness (mm)</TableHead>
                  <TableHead>Weight (kg/m²)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>0.80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>6</TableCell>
                  <TableCell>1.20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>8</TableCell>
                  <TableCell>1.50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10</TableCell>
                  <TableCell>1.70</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Thickness and Weight Chart (PC Hollow Sheet Type S)
        </h2>
        <Card className="shadow-lg">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Thickness (mm)</TableHead>
                  <TableHead>Weight (kg/m²)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>6</TableCell>
                  <TableCell>1.30</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>8</TableCell>
                  <TableCell>1.60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10</TableCell>
                  <TableCell>1.90</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section className="text-center py-12 bg-blue-50 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Need More Information?</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Download our complete technical data sheet or contact our experts for detailed inquiries.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-4">
            <Link href="/downloads">Download Data Sheet</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function TechnicalSpecifications() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Technical Specifications</h2>
      <Card className="shadow-lg mb-12">
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
      <div className="text-center">
        <Button size="lg" variant="outline" className="text-lg px-8 py-4">
          <Link href="/technical-specs">
            View All Technical Specs <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

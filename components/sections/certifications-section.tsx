import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Globe, CheckCircle, Shield } from "lucide-react"

export default function CertificationsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Quality Certifications</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our commitment to quality is backed by international certifications and rigorous testing standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">ISO 9001:2015</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Quality management system certification ensuring consistent quality
                </p>
                <Badge className="bg-blue-100 text-blue-800">Certified</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Globe className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">IEC Registered</h3>
                <p className="text-gray-600 text-sm mb-4">International trade authorization for global market reach</p>
                <Badge className="bg-green-100 text-green-800">Export Ready</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <CheckCircle className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">BIS Approved</h3>
                <p className="text-gray-600 text-sm mb-4">Bureau of Indian Standards approval for quality compliance</p>
                <Badge className="bg-orange-100 text-orange-800">Standards Met</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Shield className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
                <p className="text-gray-600 text-sm mb-4">Rigorous quality control for long-lasting performance</p>
                <Badge className="bg-purple-100 text-purple-800">Guaranteed</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Manufacturing Excellence</h3>
              <p className="text-gray-700 mb-6">
                Every sheet meets rigorous quality control standards with limited manufacturing warranty, ensuring
                protection against weathering and long-term durability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  100% Virgin SABIC Resin
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  Covestro (Makrolon) Quality
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  Advanced Manufacturing
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  Customer-First Approach
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

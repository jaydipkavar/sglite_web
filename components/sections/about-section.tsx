import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Globe } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Welcome to Shree Ganesh Polymers, a trusted manufacturer of high-quality polycarbonate sheets since 2013,
              backed by the legacy of the Shree Ganesh Group.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardContent className="p-0">
                  <p className="text-gray-700 leading-relaxed">
                    At SGLite, we are committed to delivering high-performance polycarbonate sheet solutions that are
                    innovative, sustainable, and reliable. We aim to empower industries around the world with products
                    that combine strength, clarity, and long-term durability—engineered with precision, manufactured
                    with care.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-blue-600 mb-2">2013</div>
                  <div className="text-sm text-gray-600">Established</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-green-600 mb-2">2000</div>
                  <div className="text-sm text-gray-600">Group Legacy</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Virgin Resin</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-orange-600 mb-2">Global</div>
                  <div className="text-sm text-gray-600">Market Reach</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">ISO 9001:2015</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Certified company with focus on customer satisfaction and quality control
                </p>
                <Badge>Quality Assured</Badge>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">IEC Registered</h3>
                <p className="text-gray-600 text-sm mb-3">Authorized for international trade and export operations</p>
                <Badge variant="secondary">Export Ready</Badge>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">BIS Approved</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Meets Indian quality and performance standards for structural reliability
                </p>
                <Badge variant="outline">Standards Compliant</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

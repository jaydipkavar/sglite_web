import { Card, CardContent } from "@/components/ui/card"
import { Goal, Globe, Lightbulb } from "lucide-react"

export default function OurCommitment() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Commitment</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <Goal className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Brand, Lasting Impact</h3>
              <p className="text-gray-600 text-sm">
                Build SGLite® as a leader in polycarbonate sheet solutions through innovative, durable, eco-friendly
                products for architecture, agriculture, and industry.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growing with Purpose</h3>
              <ul className="text-gray-600 text-sm text-left space-y-2 list-disc list-inside">
                <li>Innovate for diverse applications</li>
                <li>Expand reliable exports</li>
                <li>Promote sustainable construction</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <Lightbulb className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Core Values</h3>
              <ul className="text-gray-600 text-sm text-left space-y-2 list-disc list-inside">
                <li>Customer First</li>
                <li>Innovation</li>
                <li>Sustainability</li>
                <li>Integrity</li>
                <li>Excellence</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

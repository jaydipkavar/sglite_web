import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function WhyChooseSGLite() {
  const reasons = [
    "ISO 9001:2015 Certified",
    "Made in India – Export Quality",
    "Wide Range of Colors & Sizes",
    "Weather & Impact Resistant",
    "Global Export Capability",
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose SGLite?</h2>
        </div>
        <Card className="p-8 bg-blue-50 border-blue-200 shadow-lg">
          <CardContent className="p-0">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

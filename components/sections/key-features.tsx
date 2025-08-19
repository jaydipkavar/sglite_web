import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Lightbulb, Shield, Sun, Thermometer, Zap } from 'lucide-react'

export default function KeyFeatures() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Key Features of SGLite®</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Shield className="text-blue-600 mb-4" size={48} />
          <CardTitle className="text-xl font-semibold mb-3">Unbreakable Strength</CardTitle>
          <CardContent className="text-gray-600">
            250 times stronger than glass and 30 times stronger than acrylic, offering superior protection against
            impact.
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Sun className="text-yellow-500 mb-4" size={48} />
          <CardTitle className="text-xl font-semibold mb-3">UV Protection</CardTitle>
          <CardContent className="text-gray-600">
            Co-extruded UV layer on both sides prevents yellowing and maintains clarity over time.
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Lightbulb className="text-purple-600 mb-4" size={48} />
          <CardTitle className="text-xl font-semibold mb-3">High Light Transmission</CardTitle>
          <CardContent className="text-gray-600">
            Allows up to 89% of light to pass through, ensuring bright and natural illumination.
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Thermometer className="text-red-600 mb-4" size={48} />
          <CardTitle className="text-xl font-semibold mb-3">Temperature Resistance</CardTitle>
          <CardContent className="text-gray-600">
            Withstands temperatures from -40°C to +120°C, suitable for diverse climates.
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Zap className="text-green-600 mb-4" size={48} />
          <CardTitle className="text-xl font-semibold mb-3">Fire Retardant</CardTitle>
          <CardContent className="text-gray-600">
            Self-extinguishing properties, making it a safer choice for various constructions.
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CheckCircle className="text-orange-500 mb-4" size={48} />
          <CardTitle className="text-xl font-semibold mb-3">Lightweight & Easy to Install</CardTitle>
          <CardContent className="text-gray-600">
            Half the weight of glass, simplifying handling, transportation, and installation.
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

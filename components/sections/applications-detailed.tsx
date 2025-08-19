import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

export default function ApplicationsDetailed() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Applications of SGLite® Polycarbonate Sheets
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          SGLite® polycarbonate sheets are incredibly versatile, offering superior performance across a wide range of
          industries and applications.
        </p>
        <Button size="lg" className="text-lg px-8 py-4">
          <Link href="/contact">Get a Quote</Link>
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/applications-placeholder.png"
            alt="Architectural Glazing"
            width={400}
            height={250}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Architectural Glazing</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            Ideal for skylights, barrel vaults, transparent roofing, and facades due to its clarity, strength, and UV
            protection.
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/applications-placeholder.png"
            alt="Safety Glazing"
            width={400}
            height={250}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Safety Glazing</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            Used in security barriers, machine guards, riot shields, and protective screens where impact resistance is
            critical.
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/applications-placeholder.png"
            alt="Signage & Displays"
            width={400}
            height={250}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Signage & Displays</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            Perfect for illuminated signs, display cases, point-of-sale displays, and exhibition stands due to its
            clarity and ease of fabrication.
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/applications-placeholder.png"
            alt="Greenhouses & Conservatories"
            width={400}
            height={250}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Greenhouses & Conservatories</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            Provides excellent light transmission and thermal insulation, creating an optimal environment for plant
            growth.
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/applications-placeholder.png"
            alt="Sound Barriers"
            width={400}
            height={250}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Sound Barriers</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            Effective in reducing noise pollution along highways, railway lines, and in industrial settings.
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/applications-placeholder.png"
            alt="Industrial Applications"
            width={400}
            height={250}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Industrial Applications</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            Used for machine covers, safety shields, protective enclosures, and vision panels in various industrial
            environments.
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/applications-placeholder.png"
            alt="Interior Design & Partitions"
            width={400}
            height={250}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Interior Design & Partitions</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            Creates modern and durable interior partitions, decorative panels, and furniture elements.
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/applications-placeholder.png"
            alt="Transportation"
            width={400}
            height={250}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Transportation</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            Used in bus shelters, train windows, and vehicle glazing due to its lightweight and impact resistance.
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/applications-placeholder.png"
            alt="Medical & Healthcare"
            width={400}
            height={250}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Medical & Healthcare</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            Suitable for medical device components, cleanroom glazing, and protective barriers.
          </CardContent>
        </Card>
      </section>

      <section className="text-center py-12 bg-blue-50 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Have a Specific Application in Mind?</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Our team can help you find the perfect SGLite® polycarbonate sheet solution for your unique project.
        </p>
        <Button size="lg" className="text-lg px-8 py-4">
          <Link href="/contact">Consult Our Experts</Link>
        </Button>
      </section>
    </div>
  )
}

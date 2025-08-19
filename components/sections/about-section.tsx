import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Factory, Globe, Lightbulb, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">About Shree Ganesh Polymers</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Leading the way in polycarbonate sheet manufacturing with innovation, quality, and sustainability.
        </p>
        <Button size="lg" className="text-lg px-8 py-4">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about-placeholder.png"
            alt="Shree Ganesh Polymers Facility"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Legacy and Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Shree Ganesh Polymers, established in 2013, is a proud extension of the Shree Ganesh Group, which began its
            journey in 2000. With over two decades of experience in the plastic industry, we have grown to become a
            trusted name in manufacturing high-quality polycarbonate sheets under our brand SGLite®.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our vision is to be a global leader in sustainable plastic solutions, continuously innovating to meet the
            evolving needs of various industries while upholding the highest standards of quality and environmental
            responsibility.
          </p>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Why Choose SGLite®?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Factory className="text-blue-600 mb-4" size={48} />
            <CardTitle className="text-xl font-semibold mb-3">State-of-the-Art Manufacturing</CardTitle>
            <CardContent className="text-gray-600">
              Our 35,000 sq ft facility in Ahmedabad, Gujarat, is equipped with modern co-extrusion lines.
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CheckCircle className="text-green-600 mb-4" size={48} />
            <CardTitle className="text-xl font-semibold mb-3">Uncompromising Quality</CardTitle>
            <CardContent className="text-gray-600">
              We use 100% virgin SABIC and Covestro resin, ensuring superior quality and performance in every sheet.
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Lightbulb className="text-purple-600 mb-4" size={48} />
            <CardTitle className="text-xl font-semibold mb-3">Innovation & R&D</CardTitle>
            <CardContent className="text-gray-600">
              Dedicated to continuous research and development to bring cutting-edge solutions to the market.
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Users className="text-orange-500 mb-4" size={48} />
            <CardTitle className="text-xl font-semibold mb-3">Customer-Centric Approach</CardTitle>
            <CardContent className="text-gray-600">
              Committed to understanding and fulfilling our clients' unique requirements with tailored solutions.
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Globe className="text-indigo-600 mb-4" size={48} />
            <CardTitle className="text-xl font-semibold mb-3">Global Reach</CardTitle>
            <CardContent className="text-gray-600">
              Serving industries worldwide with our high-performance polycarbonate sheets.
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CheckCircle className="text-red-600 mb-4" size={48} />
            <CardTitle className="text-xl font-semibold mb-3">Certifications</CardTitle>
            <CardContent className="text-gray-600">
              ISO 9001:2015 certified, IEC registered, and BIS approved, ensuring adherence to international standards.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="text-center py-12 bg-blue-50 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Join Our Journey</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Partner with Shree Ganesh Polymers for durable, innovative, and sustainable plastic solutions.
        </p>
        <Button size="lg" className="text-lg px-8 py-4">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </div>
  )
}

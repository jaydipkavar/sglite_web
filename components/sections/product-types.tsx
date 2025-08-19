import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ProductTypes() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Our Product Types</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/compact-placeholder.png"
            alt="Compact (Glossy) Sheet"
            width={500}
            height={300}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Compact (Glossy) Sheet</CardTitle>
            <CardDescription className="text-gray-600">
              High light transmission with a smooth, glossy finish.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Our Compact sheets offer exceptional clarity and impact resistance, making them ideal for architectural
              glazing, safety barriers, and illuminated signs.
            </p>
            <Button variant="link" asChild className="px-0 text-blue-600 hover:text-blue-800">
              <Link href="/products/compact">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/embossed-placeholder.png"
            alt="Embossed Surface Sheet"
            width={500}
            height={300}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Embossed Surface Sheet</CardTitle>
            <CardDescription className="text-gray-600">
              Textured surface for diffused light and enhanced aesthetics.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              These sheets provide excellent light diffusion, reducing glare while maintaining high light transmission.
              Perfect for roofing, partitions, and decorative applications.
            </p>
            <Button variant="link" asChild className="px-0 text-blue-600 hover:text-blue-800">
              <Link href="/products/embossed">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/diamond-placeholder.png"
            alt="Diamond Textured Sheet"
            width={500}
            height={300}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Diamond Textured Sheet</CardTitle>
            <CardDescription className="text-gray-600">
              Unique diamond pattern for superior light dispersion and privacy.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Featuring a distinctive diamond texture, these sheets offer enhanced aesthetics and privacy, suitable for
              decorative panels, shower enclosures, and skylights.
            </p>
            <Button variant="link" asChild className="px-0 text-blue-600 hover:text-blue-800">
              <Link href="/products/diamond">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/pc-hollow-type-2-placeholder.png"
            alt="PC Hollow Sheet Type 2"
            width={500}
            height={300}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-2xl font-bold">PC Hollow Sheet Type 2</CardTitle>
            <CardDescription className="text-gray-600">
              Multi-wall structure for superior thermal insulation and lightweight design.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Our Type 2 hollow sheets are engineered for excellent thermal efficiency and impact resistance, perfect
              for roofing, canopies, and greenhouses.
            </p>
            <Button variant="link" asChild className="px-0 text-blue-600 hover:text-blue-800">
              <Link href="/products/pc-hollow-type-2">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/pc-hollow-type-s-placeholder.png"
            alt="PC Hollow Sheet Type S"
            width={500}
            height={300}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-2xl font-bold">PC Hollow Sheet Type S</CardTitle>
            <CardDescription className="text-gray-600">
              Specialized multi-wall design for enhanced structural integrity and light diffusion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Type S hollow sheets offer advanced thermal insulation and a unique structure for specific architectural
              and industrial applications.
            </p>
            <Button variant="link" asChild className="px-0 text-blue-600 hover:text-blue-800">
              <Link href="/products/pc-hollow-type-s">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/technical-specs-placeholder.png"
            alt="Technical Specifications"
            width={500}
            height={300}
            className="rounded-t-lg object-cover w-full h-48"
          />
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Technical Specifications</CardTitle>
            <CardDescription className="text-gray-600">
              Comprehensive data for all SGLite® polycarbonate sheets.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Access detailed physical properties, performance characteristics, and certifications to ensure our
              products meet your project needs.
            </p>
            <Button variant="link" asChild className="px-0 text-blue-600 hover:text-blue-800">
              <Link href="/technical-specs">
                View Specs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="text-center">
        <Button size="lg" variant="outline" className="text-lg px-8 py-4">
          <Link href="/products">
            View All Products <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

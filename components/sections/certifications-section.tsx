import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle } from 'lucide-react'
import Image from "next/image"

export default function CertificationsSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Our Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/iso-placeholder.png"
            alt="ISO 9001:2015 Certified"
            width={100}
            height={100}
            className="mb-4"
          />
          <CardTitle className="text-xl font-semibold mb-3">ISO 9001:2015 Certified</CardTitle>
          <CardContent className="text-gray-600">
            Our quality management system adheres to international standards, ensuring consistent product excellence.
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/iec-placeholder.png"
            alt="IEC Registered"
            width={100}
            height={100}
            className="mb-4"
          />
          <CardTitle className="text-xl font-semibold mb-3">IEC Registered</CardTitle>
          <CardContent className="text-gray-600">
            Compliance with International Electrotechnical Commission standards for electrical and electronic
            technologies.
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/bis-placeholder.png"
            alt="BIS Approved"
            width={100}
            height={100}
            className="mb-4"
          />
          <CardTitle className="text-xl font-semibold mb-3">BIS Approved</CardTitle>
          <CardContent className="text-gray-600">
            Our products meet the quality and safety standards set by the Bureau of Indian Standards.
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

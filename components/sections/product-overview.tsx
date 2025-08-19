import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ProductOverview() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        SGLite® Solid Polycarbonate Sheets
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/compact-placeholder.png"
            alt="SGLite Compact Polycarbonate Sheet"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            SGLite® Solid Polycarbonate Sheets are premium-grade sheets known for their exceptional optical clarity and
            high impact resistance. Manufactured from 100% virgin SABIC and Covestro resin, these sheets offer superior
            performance and durability, making them an ideal alternative to glass in various applications.
          </p>
          <ul className="space-y-3 text-gray-700 text-lg mb-8">
            <li className="flex items-center">
              <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={20} />
              High light transmission
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={20} />
              Superior impact strength
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={20} />
              UV protected on both sides
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={20} />
              Lightweight and easy to install
            </li>
          </ul>
          <Button size="lg" className="text-lg px-8 py-4">
            <Link href="/products">Explore All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

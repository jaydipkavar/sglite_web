import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactCta() {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Transform Your Projects with SGLite®?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Contact us today to discuss your requirements, get a personalized quote, or learn more about our premium
          polycarbonate sheets.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent text-lg px-8 py-4"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

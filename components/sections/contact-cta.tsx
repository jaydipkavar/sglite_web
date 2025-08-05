import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our experts to discuss your specific requirements and get a custom quote for your polycarbonate
              sheet needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">+91 90165 43212</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">sgp.ahmedabad@gmail.com</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">Changodar, Ahmedabad</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/technical-specs">Technical Specifications</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

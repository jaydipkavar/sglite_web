import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We'd love to hear from you! Reach out to us for inquiries, quotes, or support.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Whether you have a question about our products, need a custom solution, or want to request a quote, our
            team is here to help. Fill out the form or use the contact details below.
          </p>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg">
                Name
              </Label>
              <Input id="name" type="text" placeholder="Your Name" className="mt-2 p-3 text-lg" />
            </div>
            <div>
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input id="email" type="email" placeholder="Your Email" className="mt-2 p-3 text-lg" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-lg">
                Subject
              </Label>
              <Input id="subject" type="text" placeholder="Subject of your inquiry" className="mt-2 p-3 text-lg" />
            </div>
            <div>
              <Label htmlFor="message" className="text-lg">
                Message
              </Label>
              <Textarea id="message" placeholder="Your Message" rows={5} className="mt-2 p-3 text-lg" />
            </div>
            <Button type="submit" size="lg" className="w-full text-lg px-8 py-4">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Contact Details</h2>
          <Card className="shadow-lg">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <CardTitle className="text-xl font-semibold">Address</CardTitle>
                  <p className="text-gray-700 text-lg">
                    Shree Ganesh Polymers, Survey No. 100, Plot No. 1, Nr. Balaji Weigh Bridge, Opp. Balaji Industrial
                    Park, Changodar, Ahmedabad - 382213, Gujarat, India.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <CardTitle className="text-xl font-semibold">Phone</CardTitle>
                  <p className="text-gray-700 text-lg">
                    <Link href="tel:+919825000000" className="hover:underline">+91 98250 00000</Link>
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <CardTitle className="text-xl font-semibold">Email</CardTitle>
                  <p className="text-gray-700 text-lg">
                    <Link href="mailto:info@sglite.com" className="hover:underline">info@sglite.com</Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Us on Map</h3>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0000000000005!2d72.42000000000001!3d23.020000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2b2b2b2b2b%3A0x123456789abcdef0!2sShree%20Ganesh%20Polymers!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Ganesh Polymers Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

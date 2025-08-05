import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white bg-opacity-20">Contact Us</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Ready to discuss your polycarbonate sheet requirements? Our expert team is here to help you find the perfect
            solution for your project needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your requirements..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Reach out to us through any of the following channels. Our team is ready to assist you with your
                    polycarbonate sheet needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                          <p className="text-gray-600">
                            Shree Ganesh Polymers (SGLite)
                            <br />
                            Plot No - 19, B.G. Chavda Industrial Estate,
                            <br />
                            Tajpur Road, BESIDE CANAL ROAD,
                            <br />
                            Changodar, Ahmedabad – 382213,
                            <br />
                            Gujarat, India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                          <p className="text-gray-600">+91 90165 43212</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-red-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                          <p className="text-gray-600">sgp.ahmedabad@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Globe className="h-6 w-6 text-purple-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Websites</h3>
                          <p className="text-gray-600">
                            https://www.sglite.co.in
                            <br />
                            www.shreeganeshpolymers.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-orange-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                          <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM
                            <br />
                            Saturday: 9:00 AM - 1:00 PM
                            <br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Visit Our Facility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in Changodar, Ahmedabad, Gujarat, our state-of-the-art 35,000 sq ft manufacturing facility is
              equipped with the latest co-extrusion technology.
            </p>
          </div>

          <Card className="animate-slide-up">
            <CardContent className="p-0">
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Interactive Map</p>
                  <p className="text-gray-400">Changodar, Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get expert advice, technical specifications, and competitive pricing for your polycarbonate sheet
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Request Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

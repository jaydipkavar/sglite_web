import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Award, Users, Zap, CheckCircle, Globe, MapPin, Phone, Mail, Globe2 } from "lucide-react"

export default function AboutCompany() {
  const stats = [
    { icon: Factory, label: "Manufacturing Facility", value: "35,000 sq. ft." },
    { icon: Award, label: "ISO Certification", value: "9001:2015" },
    { icon: Users, label: "Years in Business", value: "20+" },
    { icon: Zap, label: "Technology", value: "Co-extrusion" },
  ]

  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description:
        "Certified company with a focus on customer satisfaction. Every sheet meets rigorous quality control for long-lasting performance.",
    },
    {
      icon: Globe,
      title: "IEC Registered",
      description: "Authorized for International trade and export operations worldwide.",
    },
    {
      icon: CheckCircle,
      title: "BIS Approved",
      description:
        "Meets Indian quality and performance standards. Certified for structural reliability and long-term use.",
    },
  ]

  const keyHighlights = [
    "Product Range: Multiwall & solid polycarbonate sheets",
    "Quality Standards: ISO 9001:2015 certified manufacturing",
    "Features: UV resistant, lightweight, energy-efficient",
    "Applications: Industrial, Agricultural, and Architectural projects",
    "Technology: Advanced extrusion for precision and durability",
    "Sustainability: Committed to eco-conscious manufacturing",
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In a world striving for sustainable infrastructure, SGLite® polycarbonate sheets by Shree Ganesh Polymers
              deliver durable, lightweight, and energy-efficient solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We manufacture multiwall and solid polycarbonate sheets in various thicknesses and colors, engineered for
              strength, UV resistance, and design flexibility.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Serving Industrial, Agricultural, and Architectural applications, we invest in innovation to create
              sustainable, high-performance solutions. With a blend of engineering excellence and environmental
              responsibility, every SGLite® sheet is proudly Made in India, Made for the World.
            </p>
          </div>
          <div className="animate-slide-in-right">
            <Card className="p-6 bg-white shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
                <ul className="space-y-4">
                  {keyHighlights.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4">About Shree Ganesh Polymers</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Welcome to Shree Ganesh Polymers, a trusted manufacturer of high-quality polycarbonate sheets since 2013.
              Backed by the legacy of the Shree Ganesh Group (est. 2000), we deliver durable, innovative, and
              sustainable plastic solutions for industries worldwide.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our solid polycarbonate sheets are engineered for strength, clarity, and weather resistance—ideal for
              construction, automotive, and industrial applications. With ISO 9001:2015 certification, advanced
              manufacturing, and a customer-first approach, we ensure consistent quality and performance.
            </p>
          </div>
        </div>

        {/* SGLite Values */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">SGLite - Our Core Values</h3>
            <p className="text-lg text-gray-600">
              Sustainable | Growing | Lightweight | Innovative | Tough | Engineering
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { letter: "S", word: "Sustainable", color: "bg-green-100 text-green-600" },
              { letter: "G", word: "Growing", color: "bg-blue-100 text-blue-600" },
              { letter: "L", word: "Lightweight", color: "bg-purple-100 text-purple-600" },
              { letter: "I", word: "Innovative", color: "bg-orange-100 text-orange-600" },
              { letter: "T", word: "Tough", color: "bg-red-100 text-red-600" },
              { letter: "E", word: "Engineering", color: "bg-indigo-100 text-indigo-600" },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`text-3xl font-bold mb-2 w-12 h-12 rounded-full flex items-center justify-center mx-auto ${value.color}`}
                >
                  {value.letter}
                </div>
                <div className="text-sm font-medium">{value.word}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <Card className="p-6 bg-blue-50 border-blue-200">
              <CardContent className="p-0">
                <p className="text-gray-700 leading-relaxed text-lg">
                  At SGLite, we are committed to delivering high-performance polycarbonate sheet solutions that are
                  innovative, sustainable, and reliable. We aim to empower industries around the world with products
                  that combine strength, clarity, and long-term durability—engineered with precision, manufactured with
                  care.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  State-of-the-art 35,000 sq ft manufacturing facility in Ahmedabad, Gujarat
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">Advanced co-extrusion technology for superior quality</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">100% virgin SABIC and Covestro (Makrolon) resin</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">Rigorous quality control at every stage of production</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <cert.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-3 text-lg">{cert.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Address:</h4>
                      <p className="text-gray-600 text-sm">
                        Shree Ganesh Polymers
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
                </div>
                <div className="text-left">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <div>
                        <h4 className="font-semibold">Phone:</h4>
                        <p className="text-gray-600 text-sm">+91 90165 43212</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-red-600" />
                      <div>
                        <h4 className="font-semibold">Email:</h4>
                        <p className="text-gray-600 text-sm">sgp.ahmedabad@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe2 className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Websites:</h4>
                        <p className="text-gray-600 text-sm">
                          https://www.sglite.co.in
                          <br />
                          www.shreeganeshpolymers.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

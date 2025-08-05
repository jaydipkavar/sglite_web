import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Cog, Globe, Factory, CheckCircle, MapPin, Phone, Mail, Globe2 } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Factory, label: "Manufacturing Facility", value: "35,000 sq. ft." },
    { icon: Award, label: "ISO Certification", value: "9001:2015" },
    { icon: Users, label: "Years in Business", value: "20+" },
    { icon: Cog, label: "Technology", value: "Co-extrusion" },
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

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <Badge className="mb-4 bg-white bg-opacity-20">About Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Shree Ganesh Polymers</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading manufacturer of solid polycarbonate sheets with over two decades of excellence in plastic
              extrusion technology since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Welcome to Shree Ganesh Polymers, a trusted manufacturer of high-quality polycarbonate sheets since
                2013. Backed by the legacy of the Shree Ganesh Group (est. 2000), we deliver durable, innovative, and
                sustainable plastic solutions for industries worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our solid polycarbonate sheets are engineered for strength, clarity, and weather resistance—ideal for
                construction, automotive, and industrial applications. With ISO 9001:2015 certification, advanced
                manufacturing, and a customer-first approach, we ensure consistent quality and performance.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 stagger-animation">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover-lift animate-bounce-in"
              >
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & SGLite Values */}
      <section className="py-16 lg:py-24 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <Card className="p-6 bg-blue-50 border-blue-200 hover-lift">
                <CardContent className="p-0">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At SGLite, we are committed to delivering high-performance polycarbonate sheet solutions that are
                    innovative, sustainable, and reliable. We aim to empower industries around the world with products
                    that combine strength, clarity, and long-term durability—engineered with precision, manufactured
                    with care.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SGLite Values</h3>
              <p className="text-lg text-gray-600 mb-6">
                Sustainable | Growing | Lightweight | Innovative | Tough | Engineering
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-animation">
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
                    className="text-center p-3 bg-white rounded-lg shadow-sm hover-lift animate-scale-in"
                  >
                    <div
                      className={`text-2xl font-bold mb-1 w-10 h-10 rounded-full flex items-center justify-center mx-auto ${value.color}`}
                    >
                      {value.letter}
                    </div>
                    <div className="text-sm font-medium">{value.word}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Quality Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is backed by international certifications and rigorous testing standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 stagger-animation">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift animate-scale-in"
              >
                <CardContent className="p-0">
                  <cert.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-3 text-lg">{cert.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
          </div>

          <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 max-w-4xl mx-auto hover-lift animate-scale-in">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left animate-slide-in-left">
                  <div className="flex items-start space-x-3 mb-6">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Address:</h4>
                      <p className="text-gray-600 text-sm">
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
                </div>
                <div className="text-left animate-slide-in-right">
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
      </section>
    </div>
  )
}

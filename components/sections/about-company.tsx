import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Factory,
  Award,
  Users,
  Zap,
  CheckCircle,
  Globe,
  MapPin,
  Phone,
  Mail,
  Globe2,
} from "lucide-react";

export default function AboutCompany() {
  const stats = [
    { icon: Factory, label: "Manufacturing Facility", value: "55,000 sq. ft." },
    { icon: Award, label: "ISO Certification", value: "9001:2015" },
    { icon: Users, label: "Years in Business", value: "20+" },
    { icon: Zap, label: "Technology", value: "Co-extrusion" },
  ];

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
      description:
        "Authorized for International trade and export operations worldwide.",
    },
    // {
    //   icon: CheckCircle,
    //   title: "BIS Approved",
    //   description:
    //     "Meets Indian quality and performance standards. Certified for structural reliability and long-term use.",
    // },
  ];

  const keyHighlights = [
    "Product Range: Multiwall & solid polycarbonate sheets",
    "Quality Standards: ISO 9001:2015 certified manufacturing",
    "Features: UV resistant, lightweight, energy-efficient",
    "Applications: Industrial, Agricultural, and Architectural projects",
    "Technology: Advanced extrusion for precision and durability",
    "Sustainability: Committed to eco-conscious manufacturing",
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In a world striving for sustainable infrastructure,SGLite®
              polycarbonate sheets deliver durable, lightweight, and
              UV-resistant solutions for roofing, cladding, and glazing. With a
              wide range of multiwall and solid sheets, we serve industrial,
              agricultural, and architectural needs worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2013, Shree Ganesh Polymers is an ISO 9001:2015
              certified manufacturer, backed by the Shree Ganesh Group (est.
              2000). We combine advanced technology and strict quality control
              to deliver reliable, high-performance products globally. Proudly
              Made in India – Made for the World.
            </p>
          </div>
          <div className="animate-slide-in-right">
            <Card className="p-6 bg-white shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Highlights
                </h3>
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
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

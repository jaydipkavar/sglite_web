import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, List, Settings, CheckCircle, Globe } from "lucide-react";
import ContactCta from "@/components/sections/contact-cta";

export default function InfrastructurePage() {
  const sections = [
    {
      icon: Factory,
      title: "Infrastructure",
      points: [
        "55,000 sq. ft. facility in Changodar, Ahmedabad",
        "Advanced extrusion lines",
        "Skilled workforce delivering world-class polycarbonate sheets",
      ],
    },
    {
      icon: List,
      title: "Production Excellence",
      points: [
        "150 MT/month – Multiwall Sheets",
        "300 MT/month – Solid Sheets",
        "Fully automated extrusion lines",
        "Precision cutting & finishing tools",
      ],
    },
    {
      icon: Settings,
      title: "Advanced Technology",
      points: [
        "Co-extrusion for UV protection & durability",
        "100% virgin resin from SABIC & Covestro",
      ],
    },
    {
      icon: CheckCircle,
      title: "Uncompromised Quality",
      points: [
        "ISO 9001:2015 Certified",
        "Multi-stage inspection system",
        "Compliance with global standards (UV, fire-retardant, impact-resistant)",
      ],
    },
    {
      icon: Globe,
      title: "Global Reach",
      points: [
        "Strategic location near Mundra Port",
        "Export-ready packaging with protective film & edge guards",
        "Dedicated export team for smooth shipments",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-500 text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-4 bg-white text-black bg-opacity-20 animate-pulse">
            Infrastructure
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            SGLite® Manufacturing Excellence
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto animate-fade-in">
            State-of-the-art facility and advanced technology powering
            world-class polycarbonate sheet production.
          </p>
        </div>
      </section>

      {/* Infrastructure Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((sec, idx) => (
            <Card
              key={idx}
              className="p-6 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 animate-fade-in"
            >
              <div className="flex items-center mb-4">
                <sec.icon className="text-green-500 mr-3" size={28} />
                <h3 className="text-xl font-bold">{sec.title}</h3>
              </div>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                {sec.points.map((point, i) => (
                  <li key={i} className="text-left ml-0">
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactCta />

      {/* Scroll To Top */}
    </div>
  );
}

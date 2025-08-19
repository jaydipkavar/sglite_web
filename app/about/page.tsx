import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Cog,
  Globe,
  Factory,
  CheckCircle,
  Eye,
  Target,
} from "lucide-react";
import ContactCta from "@/components/sections/contact-cta";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function AboutPage() {
  const stats = [
    { icon: Factory, label: "Manufacturing Facility", value: "55,000 sq. ft." },
    { icon: Award, label: "ISO Certification", value: "9001:2015" },
    { icon: Users, label: "Years in Business", value: "20+" },
    { icon: Cog, label: "Technology", value: "Co-extrusion" },
  ];

  const valuesLeft = [
    {
      emoji: "🟢",
      title: "S – Sustainable",
      description:
        "Energy-efficient polycarbonate sheets that support eco-friendly construction and reduce long-term energy use.",
    },
    {
      emoji: "⚪",
      title: "L – Lightweight",
      description:
        "High strength at low weight for faster, safer, and more cost-effective installation.",
    },
    {
      emoji: "🟠",
      title: "T – Tough",
      description:
        "Built to withstand extreme weather, UV, and impact for long-lasting performance.",
    },
  ];

  const valuesRight = [
    {
      emoji: "🔵",
      title: "G – Growing",
      description:
        "Expanding global footprint with reliable service — from Mundra Port to the world.",
    },
    {
      emoji: "🔷",
      title: "I – Innovative",
      description:
        "Advanced co-extrusion technology and 100% virgin SABIC & Covestro resin for clarity, durability, and UV protection.",
    },
    {
      emoji: "🟣",
      title: "E – Engineered",
      description:
        "ISO 9001:2015 certified manufacturing ensures precision and compliance with international quality standards.",
    },
  ];

  const whyChoose = [
    "ISO 9001:2015 Certified Manufacturer",
    "20+ Years of Extrusion Expertise",
    "Wide Range: Multiwall, Solid and Profile Sheets, Colors & Thicknesses",
    "Reliable FOB exports via Mundra Port",
    "Trusted by government, commercial & private projects",
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-500 text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-4 bg-white text-black bg-opacity-20 animate-pulse">
            About Us
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            SGLite® by Shree Ganesh Polymers
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Leading manufacturer of solid polycarbonate sheets with over two
            decades of excellence in plastic extrusion technology since 2013.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-slide-up">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
            Founded in 2013, Shree Ganesh Polymers has grown into a trusted name
            in the polycarbonate industry. As part of the Shree Ganesh Group
            (est. 2000), we bring over two decades of experience in plastic
            extrusion and materials engineering. With a 55,000 sq. ft
            state-of-the-art facility and ISO 9001:2015 certification, we ensure
            that every sheet meets international quality standards.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-slide-up">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
            Under the brand name SGLite®, we manufacture and export multiwall,
            solid, and Profile polycarbonate sheets that combine durability,
            lightweight performance, and UV resistance. Our products are
            engineered to serve a wide range of applications — from
            architectural skylights to industrial roofing, greenhouses, and
            commercial cladding.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 animate-fade-in"
            >
              <stat.icon className="mx-auto mb-4 text-blue-500" size={32} />
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Vision & Mission + SGLite Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold mt-4 flex items-center gap-2">
                <Eye /> Vision
              </h3>
              <p className="text-gray-700">
                To become a globally recognized leader in polycarbonate sheet
                solutions, empowering sustainable infrastructure and innovation
                across industries.
              </p>
              <h3 className="text-2xl font-semibold mt-4 flex items-center gap-2">
                <Target /> Mission
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Deliver high-performance, value-driven products to customers
                  worldwide.
                </li>
                <li>
                  Ensure strict quality control and continuous improvement in
                  manufacturing.
                </li>
                <li>
                  Promote sustainability and energy efficiency through
                  innovative material solutions.
                </li>
                <li>
                  Build long-term global partnerships with trust and
                  transparency.
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valuesLeft.map((val, idx) => (
                <Card
                  key={idx}
                  className="p-4 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 animate-slide-up"
                >
                  <h4 className="font-bold text-lg">
                    {val.emoji} {val.title}
                  </h4>
                  <p className="text-gray-700 mt-2">{val.description}</p>
                </Card>
              ))}
              {valuesRight.map((val, idx) => (
                <Card
                  key={idx}
                  className="p-4 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 animate-slide-up delay-150"
                >
                  <h4 className="font-bold text-lg">
                    {val.emoji} {val.title}
                  </h4>
                  <p className="text-gray-700 mt-2">{val.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SGLite */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">
            Why Choose SGLite®
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="space-y-4 animate-fade-in">
              {whyChoose.map((item, idx) => (
                <li
                  key={idx}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Global Presence 🌍
                </h3>
                <p className="text-gray-700">
                  From our facility in Ahmedabad, Gujarat, we serve both
                  domestic and international markets. With FOB shipments from
                  Mundra Port, India, SGLite® ensures a seamless export process,
                  delivering on time and in full compliance with global trade
                  standards.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Sustainability at Heart
                </h3>
                <p className="text-gray-700">
                  SGLite® products are designed with the future in mind. From
                  energy-saving thermal insulation to recyclable materials, we
                  ensure every solution contributes to a greener, smarter, and
                  more sustainable tomorrow.
                </p>
              </div>
              <div className="mt-8 text-left">
                <h3 className="text-2xl font-bold">
                  Made in India – Made for the World 🌍
                </h3>
                <p className="text-gray-700 mt-2">
                  Partner with SGLite® — your trusted manufacturer for
                  innovative, durable, and globally compliant polycarbonate
                  sheet solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactCta />

      {/* Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}

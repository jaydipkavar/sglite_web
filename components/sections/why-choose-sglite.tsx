import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Shield, Globe, Palette, Ship, Cog } from "lucide-react";

export default function WhyChooseSGLite() {
  const reasons = [
    {
      title: "ISO 9001:2015 Certified",
      desc: "Internationally recognized quality standards",
      icon: ShieldCheck,
    },
    {
      title: "Weather & Impact Resistant",
      desc: "Built to withstand tough climates & conditions",
      icon: Shield,
    },
    {
      title: "Made in India, Trusted Globally",
      desc: "Export-quality manufacturing",
      icon: Globe,
    },
    {
      title: "Wide Range of Colors & Sizes",
      desc: "Custom options for every application",
      icon: Palette,
    },
    {
      title: "Global Export Capability",
      desc: "Hassle-free international shipping",
      icon: Ship,
    },
    {
      title: "20+ Years of Extrusion Expertise",
      desc: "Proven reliability & innovation",
      icon: Cog,
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SGLite?
          </h2>
          <p className="text-lg text-gray-600 italic">
            Delivering Quality Polycarbonate Solutions for Every Market
          </p>
        </div>

        {/* Card container */}
        <Card className="p-8 bg-blue-50 border border-blue-200 shadow-md rounded-xl">
          <CardContent className="p-0">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <reason.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {reason.title}
                    </p>
                    <p className="text-gray-600 mt-1">{reason.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

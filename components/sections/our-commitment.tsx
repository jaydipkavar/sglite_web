import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Rocket,
  Lightbulb,
  Handshake,
  Leaf,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function OurCommitment() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Commitment
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Card - Blue */}
          <Card className="p-8 bg-blue-50 border-none shadow-sm">
            <CardContent className="p-0 text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Global Brand, Lasting Impact
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm text-left">
                Position SGLite as a global leader in polycarbonate sheet
                solutions by delivering innovative, durable, and eco-friendly
                products designed for:
              </p>
              <ul className="text-gray-700 text-sm mt-4 space-y-1 text-left list-disc list-inside">
                <li>Architecture</li>
                <li>Agriculture</li>
                <li>Industrial applications</li>
              </ul>
            </CardContent>
          </Card>

          {/* Middle Card - Green */}
          <Card className="p-8 bg-green-50 border-none shadow-sm">
            <CardContent className="p-0 text-center">
              <Rocket className="w-12 h-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Growing with Purpose
              </h3>
              <ul className="text-gray-700 text-sm space-y-2 text-left">
                <li>Innovate for diverse applications</li>
                <li>Expand reliable exports</li>
                <li>Promote sustainable construction</li>
              </ul>
            </CardContent>
          </Card>

          {/* Right Card - Yellow */}
          <Card className="p-8 bg-yellow-50 border-none shadow-sm">
            <CardContent className="p-0 text-center">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h3>
              <ul className="text-gray-700 text-sm space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-yellow-600" /> Customer
                  First
                </li>
                <li className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-600" /> Innovation
                </li>
                <li className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-600" /> Sustainability
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-600" /> Integrity
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-600" /> Excellence
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

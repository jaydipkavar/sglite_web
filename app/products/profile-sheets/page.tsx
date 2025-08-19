import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ContactCta from "@/components/sections/contact-cta";

export default function ProfileSheetsPage() {
  const profileSheetFeatures = [
    "Designed for secure overlaps and precise installation",
    "Enhanced structural strength for roofing projects",
    "Superior weather protection against rain, wind, and UV",
    "Lightweight and easy to handle during installation",
    "Available in various profiles to match different roofing designs",
    "Excellent light transmission for natural illumination",
    "UV protected for long-term outdoor durability",
    "Impact resistant, providing safety and longevity",
    "Cost-effective and low maintenance solution",
  ];

  const profileSheetApplications = [
    "Industrial roofing and cladding",
    "Commercial building canopies and awnings",
    "Agricultural structures like barns and sheds",
    "Residential patio covers and carports",
    "Skylights and roof lights requiring specific profiles",
    "Architectural designs needing structured glazing",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Badge className="mb-4 bg-white bg-opacity-20">
              Profile Sheets
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Polycarbonate Profile Sheets
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Engineered for secure overlaps, precise installation, and enhanced
              structural strength in roofing projects.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Durable and Versatile Profile Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SGLite Polycarbonate Profile Sheets are designed to integrate
              seamlessly with various roofing structures, offering superior
              weather protection and aesthetic appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/profile-sheet-placeholder.png"
                alt="Polycarbonate Profile Sheet"
                width={600}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600 mb-2">
                  Key Features & Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {profileSheetFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ideal Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {profileSheetApplications.map((app, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <p className="text-gray-700 text-lg font-medium">{app}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function TopHeader() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" },
  ];

  return (
    <div className="bg-gray-900 text-white py-2 text-sm animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Left Side - Contact Info & Social Media */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span className="text-xs">+91 90165 43212</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span className="text-xs">sgp.ahmedabad@gmail.com</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <span className="text-xs text-gray-400 hidden sm:block">
                Follow us:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200 hover:scale-110 transform`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Certifications, Email Button & Google Translate */}
          <div className="flex items-center space-x-4">
            {/* Certifications */}
            <div className="hidden lg:flex items-center space-x-2">
              <Badge
                variant="outline"
                className="text-xs px-2 py-1 border-gray-600 text-gray-300"
              >
                ISO 9001:2015
              </Badge>
              <Badge
                variant="outline"
                className="text-xs px-2 py-1 border-gray-600 text-gray-300"
              >
                IEC Registered
              </Badge>
              <Badge
                variant="outline"
                className="text-xs px-2 py-1 border-gray-600 text-gray-300"
              >
                BIS Approved
              </Badge>
            </div>

            {/* Email Button */}
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 h-7 hover:scale-105 transition-all duration-200"
              onClick={() =>
                window.open("mailto:sgp.ahmedabad@gmail.com", "_blank")
              }
            >
              <Mail className="h-3 w-3 mr-1" />
              Email Us
            </Button>

            {/* Google Translate Widget Placeholder */}
            <div
              id="google_translate_element"
              className="google-translate-widget"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

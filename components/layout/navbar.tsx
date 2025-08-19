"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "#");

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20sglite.jpg-FzvR9U3PVtnW9qDfw8aKUeX9uLboVn.jpeg"
                alt="SGLite Logo"
                className="h-10 w-auto hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 hover:scale-105 transform ${
                isActive("/")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`font-medium ${
                      isActive("/about")
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about"
                          className={`block rounded-md p-3 transition-colors duration-200 ${
                            isActive("/about")
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100 focus:text-blue-600"
                          }`}
                        >
                          <div className="text-sm font-medium">
                            Company Overview
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/infrastructure"
                          className={`block rounded-md p-3 transition-colors duration-200 ${
                            pathname.includes("/infrastructure")
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100 focus:text-blue-600"
                          }`}
                        >
                          <div className="text-sm font-medium">
                            Infrastructure
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about#certification"
                          className={`block rounded-md p-3 transition-colors duration-200 ${
                            pathname.includes("#certification")
                              ? "bg-blue-100 text-blue-700"
                              : "hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100 focus:text-blue-600"
                          }`}
                        >
                          <div className="text-sm font-medium">
                            Certification
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {[
              "/products",
              "/applications",
              "/projects",
              "/catalogues",
              "/contact",
            ].map((link) => (
              <Link
                key={link}
                href={link}
                className={`font-medium transition-colors duration-200 hover:scale-105 transform ${
                  isActive(link)
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.replace("/", "").charAt(0).toUpperCase() + link.slice(2)}
              </Link>
            ))}

            {/* Google Translate */}
            <div id="google_translate_element" className="ml-4"></div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none hover:scale-110 transition-transform duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20sglite.jpg-FzvR9U3PVtnW9qDfw8aKUeX9uLboVn.jpeg"
                  alt="SGLite Logo"
                  className="h-10 w-auto"
                />
              </div>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "Company Overview" },
                { href: "/infrastructure", label: "Infrastructure" },
                { href: "/about#certification", label: "Certification" },
                { href: "/products", label: "Products" },
                { href: "/applications", label: "Applications" },
                { href: "/projects", label: "Projects" },
                { href: "/catalogues", label: "Catalogues" },
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive(href)
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}

              {/* Google Translate */}
              <div id="google_translate_element" className="px-3 py-2"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

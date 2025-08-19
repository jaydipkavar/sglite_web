"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
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
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105 transform duration-200"
                        >
                          <div className="text-sm font-medium leading-none">Company Overview</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about#infrastructure"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105 transform duration-200"
                        >
                          <div className="text-sm font-medium leading-none">Infrastructure</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about#certification"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105 transform duration-200"
                        >
                          <div className="text-sm font-medium leading-none">Certification</div>
                        </Link>
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Products
            </Link>
            <Link
              href="/applications"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Applications
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Projects
            </Link>
            <Link
              href="/catalogues"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Catalogues
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Contact Us
            </Link>
            {/* Google Translate Element for Desktop */}
            <div id="google_translate_element" className="ml-4"></div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none hover:scale-110 transition-transform duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">About Us</div>
                <Link
                  href="/about"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Company Overview
                </Link>
                <Link
                  href="/about#infrastructure"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Infrastructure
                </Link>
                <Link
                  href="/about#certification"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Certification
                </Link>
              </div>
              <Link
                href="/products"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/applications"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Applications
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/catalogues"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Catalogues
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              {/* Google Translate Element for Mobile */}
              <div id="google_translate_element" className="px-3 py-2"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

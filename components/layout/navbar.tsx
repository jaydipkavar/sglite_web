"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
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
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              About Us
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-4">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/products"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105 transform duration-200"
                        >
                          <div className="text-sm font-medium leading-none">All Products</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Complete range of solid polycarbonate sheets
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/products/compact"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105 transform duration-200"
                        >
                          <div className="text-sm font-medium leading-none">Compact (Glossy) Sheet</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            89% light transmission with high-gloss finish
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/products/embossed"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105 transform duration-200"
                        >
                          <div className="text-sm font-medium leading-none">Embossed Surface</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            88% light transmission with textured surface
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/products/diamond"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105 transform duration-200"
                        >
                          <div className="text-sm font-medium leading-none">Diamond Textured</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            86% light transmission with diamond pattern
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/technical-specs"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105 transform duration-200"
                        >
                          <div className="text-sm font-medium leading-none">Technical Specifications</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Complete technical data and standards
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/applications"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Applications
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Contact
            </Link>
            <Button asChild className="hover:scale-105 transition-transform duration-200">
              <Link href="/contact">Get Quote</Link>
            </Button>
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
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Products</div>
                <Link
                  href="/products"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  All Products
                </Link>
                <Link
                  href="/products/compact"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Compact (Glossy) Sheet
                </Link>
                <Link
                  href="/products/embossed"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Embossed Surface
                </Link>
                <Link
                  href="/products/diamond"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Diamond Textured
                </Link>
                <Link
                  href="/technical-specs"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Technical Specifications
                </Link>
              </div>
              <Link
                href="/applications"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Applications
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

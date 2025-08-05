import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logo-sglite.jpeg"
              alt="SGLite Logo"
              width={120} // Approximate width based on h-12
              height={48} // Approximate height based on h-12 and aspect ratio
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              ISO 9001:2015 certified manufacturer of PC Hollow Polycarbonate Sheets with 20+ years of experience in
              plastic extrusion technology.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Shree Ganesh Polymers</span>
              <span>•</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products/pc-hollow-type-2" className="text-gray-300 hover:text-white transition-colors">
                  PC Hollow Type ||
                </Link>
              </li>
              <li>
                <Link href="/products/pc-hollow-type-s" className="text-gray-300 hover:text-white transition-colors">
                  PC Hollow Type S
                </Link>
              </li>
              <li>
                <Link href="/applications" className="text-gray-300 hover:text-white transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">Subscribe to get latest updates on our products</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 Shree Ganesh Polymers. All rights reserved.</div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@sglite.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

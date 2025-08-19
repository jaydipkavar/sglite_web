import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OurProjects() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Explore Our Projects</h2>
        <p className="text-xl text-blue-100 mb-8">
          See how SGLite® polycarbonate sheets have been used in various successful projects worldwide.
        </p>
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
          <Link href="/projects">View Projects</Link>
        </Button>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { useScrollToTop } from "@/hooks/use-scroll-to-top"
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const { showScrollToTop, scrollToTop } = useScrollToTop()

  if (!showScrollToTop) {
    return null
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  )
}

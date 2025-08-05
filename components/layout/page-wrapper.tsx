"use client"

import type React from "react"

import { useScrollToTop } from "@/hooks/use-scroll-to-top"
import ScrollToTop from "@/components/ui/scroll-to-top"

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  useScrollToTop()

  return (
    <div className="animate-fade-in">
      {children}
      <ScrollToTop />
    </div>
  )
}

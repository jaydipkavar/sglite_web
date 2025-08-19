import React from "react"

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return <div className="flex flex-col min-h-screen">{children}</div>
}

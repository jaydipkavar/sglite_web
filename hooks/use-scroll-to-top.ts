import { useState, useEffect, useCallback } from "react"

export function useScrollToTop(threshold = 200) {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY > threshold) {
      setShowScrollToTop(true)
    } else {
      setShowScrollToTop(false)
    }
  }, [threshold])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return { showScrollToTop, scrollToTop }
}

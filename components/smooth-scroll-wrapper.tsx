"use client"

import type React from "react"
import { useEffect, useRef } from "react"

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<number>(0)
  const targetScrollRef = useRef<number>(0)
  const rafRef = useRef<number>()
  const isScrollingRef = useRef<boolean>(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      targetScrollRef.current += e.deltaY * 0.55

      // Clamp to valid scroll range
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      targetScrollRef.current = Math.max(0, Math.min(targetScrollRef.current, maxScroll))

      if (!isScrollingRef.current) {
        isScrollingRef.current = true
        smoothScroll()
      }
    }

    const smoothScroll = () => {
      const current = scrollRef.current
      const target = targetScrollRef.current
      const diff = target - current

      if (Math.abs(diff) > 0.1) {
        scrollRef.current += diff * 0.2
        window.scrollTo(0, scrollRef.current)
        rafRef.current = requestAnimationFrame(smoothScroll)
      } else {
        scrollRef.current = target
        window.scrollTo(0, scrollRef.current)
        isScrollingRef.current = false
      }
    }

    const handleExternalScroll = () => {
      const currentScrollY = window.scrollY
      // Only sync if the difference is significant (more than 50px), indicating external scroll
      if (Math.abs(currentScrollY - scrollRef.current) > 50) {
        scrollRef.current = currentScrollY
        targetScrollRef.current = currentScrollY
        isScrollingRef.current = false
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current)
        }
      }
    }

    // Initialize scroll position
    scrollRef.current = window.scrollY
    targetScrollRef.current = window.scrollY

    // Add wheel event listener
    window.addEventListener("wheel", handleWheel, { passive: false })

    window.addEventListener("scroll", handleExternalScroll, { passive: true })

    // Handle touch scrolling for mobile
    let touchStartY = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY
      const deltaY = (touchStartY - touchY) * 2
      touchStartY = touchY

      targetScrollRef.current += deltaY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      targetScrollRef.current = Math.max(0, Math.min(targetScrollRef.current, maxScroll))

      if (!isScrollingRef.current) {
        isScrollingRef.current = true
        smoothScroll()
      }
    }

    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("scroll", handleExternalScroll)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return <>{children}</>
}

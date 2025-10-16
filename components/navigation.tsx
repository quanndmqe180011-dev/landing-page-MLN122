"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const navItems = [
  { id: "hero", label: "Trang chủ" },
  { id: "chapter2", label: "Chương 2" },
  { id: "actors", label: "Chủ thể kinh tế" },
  { id: "conclusion", label: "Kết luận" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e8dcc8]/95 backdrop-blur-sm border-b border-[#c9b896]">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex gap-8 justify-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative font-mono text-sm transition-colors ${
                  activeSection === item.id ? "text-[#2c4a7c] font-bold" : "text-gray-600 hover:text-[#c9a961]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2c4a7c]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const sections = ["hero", "timeline", "chapter2", "actors", "conclusion"]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sectionLabels = ["Giới thiệu", "Hành trình", "Chương 2", "Chủ thể", "Kết luận"]

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-8 z-50 flex flex-col items-end gap-4">
      <div className="relative h-64 w-1">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00FFFF] to-[#FFC000] origin-top rounded-full"
          style={{ scaleY }}
        />

        {/* Section dots */}
        <div className="absolute inset-0 flex flex-col justify-between py-2">
          {sectionLabels.map((label, i) => (
            <div key={i} className="relative flex items-center justify-end gap-3">
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={currentSection === i ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-mono whitespace-nowrap px-2 py-1 rounded"
                style={{
                  backgroundColor: currentSection === i ? "#00FFFF20" : "transparent",
                  color: currentSection === i ? "#00FFFF" : "#666",
                  border: currentSection === i ? "1px solid #00FFFF" : "none",
                }}
              >
                {label}
              </motion.span>
              <motion.div
                animate={{
                  scale: currentSection === i ? 1.5 : 1,
                  backgroundColor: currentSection === i ? "#00FFFF" : "#666",
                }}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

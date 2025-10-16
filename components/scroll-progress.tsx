"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 right-8 w-1 h-full bg-gradient-to-b from-[#00FFFF] to-[#FFC000] origin-top z-50"
      style={{ scaleY }}
    />
  )
}

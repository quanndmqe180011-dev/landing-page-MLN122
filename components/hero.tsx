"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const title = "KINH TẾ CHÍNH TRỊ MÁC - LÊNIN: HÀNH TRÌNH KHÁM PHÁ CÁC QUY LUẬT CỦA THỊ TRƯỜNG"
  const words = title.split(" ")

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c9a961_1px,transparent_1px),linear-gradient(to_bottom,#c9a961_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(1000px)_rotateX(60deg)] [transform-origin:center_top]" />
      </motion.div>

      <motion.div className="relative z-10 max-w-6xl mx-auto px-4 text-center" style={{ opacity }}>
        <motion.h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="inline-block mr-3 md:mr-4"
              style={{
                color: word.includes("MÁC") || word.includes("LÊNIN") ? "#2c4a7c" : "#1a1a1a",
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Từ nguyên thủy đến hiện đại: Khám phá các quy luật kinh tế
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12"
        >
          <div className="inline-block px-6 py-3 border-2 border-[#c9a961] rounded-lg text-[#c9a961] font-mono font-semibold animate-pulse">
            Cuộn xuống để khám phá ↓
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function EconomicSystemMotion() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      <motion.div style={{ rotate, scale }} className="absolute inset-0 flex items-center justify-center opacity-20">
        <svg width="600" height="600" viewBox="0 0 600 600">
          <defs>
            <radialGradient id="mandalaGradient">
              <stop offset="0%" stopColor="#c9a961" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c9a961" stopOpacity="0.4" />
            </radialGradient>
          </defs>

          {/* Outer circles */}
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx="300"
              cy="300"
              r={250 - i * 30}
              fill="none"
              stroke="url(#mandalaGradient)"
              strokeWidth="2"
              opacity={0.3 + i * 0.1}
            />
          ))}

          {/* Radial lines */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const x1 = 300 + Math.cos(angle) * 100
            const y1 = 300 + Math.sin(angle) * 100
            const x2 = 300 + Math.cos(angle) * 250
            const y2 = 300 + Math.sin(angle) * 250
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#mandalaGradient)"
                strokeWidth="1"
                opacity="0.4"
              />
            )
          })}

          {/* Center circle */}
          <circle cx="300" cy="300" r="50" fill="url(#mandalaGradient)" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-8 text-[#c9a961]">
            Hệ Thống Kinh Tế Trong Chuyển Động
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6"
          >
            Các chủ thể này tương tác trong một hệ thống phức tạp, được điều chỉnh bởi các quy luật kinh tế và hướng dẫn
            bởi chính sách của nhà nước.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Cùng nhau, họ tạo thành cấu trúc sống động của một nền kinh tế thị trường năng động.
          </motion.p>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? "#c9a961" : "#00FFFF",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ChapterTransition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Fade out Chapter 2 ending (0-0.15)
  const fadeOutOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  // Golden particles animation (0.1-0.3)
  const particlesOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0, 1, 0])

  // Background gradient transition (0.2-0.5)
  const bgGradient = useTransform(scrollYProgress, [0.2, 0.5], ["rgb(26, 26, 26)", "rgb(10, 20, 40)"])

  // Golden lines network (0.3-0.6)
  const linesOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.65], [0, 1, 0])

  // Rotating mandala (0.4-0.7)
  const mandalaRotate = useTransform(scrollYProgress, [0.4, 0.7], [0, 360])
  const mandalaScale = useTransform(scrollYProgress, [0.4, 0.55, 0.7], [0.5, 1.2, 0])
  const mandalaOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.7], [0, 1, 0])

  // Transition text (0.5-0.75)
  const transitionTextOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0])

  // Chapter 3 reveal (0.75-1)
  const chapter3Opacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1])
  const chapter3Scale = useTransform(scrollYProgress, [0.75, 0.9], [0.95, 1])
  const chapter3Y = useTransform(scrollYProgress, [0.75, 0.9], [50, 0])

  return (
    <div ref={containerRef} className="relative h-[200vh] overflow-hidden">
      {/* Chapter 2 Fade Out with Pulsing Glow */}
      <motion.div
        style={{ opacity: fadeOutOpacity }}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <motion.div
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="text-center max-w-3xl px-8"
        >
          <p className="text-2xl md:text-3xl text-[#c9a961] font-serif italic leading-relaxed">
            "Từ giá trị và trao đổi… xuất hiện một lực lượng lớn hơn — chính hệ thống."
          </p>
        </motion.div>
      </motion.div>

      {/* Golden Particles */}
      <motion.div style={{ opacity: particlesOpacity }} className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FFC000] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Background Gradient Transition */}
      <motion.div style={{ backgroundColor: bgGradient }} className="fixed inset-0 -z-10" />

      {/* Golden Network Lines */}
      <motion.div style={{ opacity: linesOpacity }} className="fixed inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFC000" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFC000" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFC000" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Horizontal lines */}
          <motion.line
            x1="0"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />
          <motion.line
            x1="0"
            y1="70%"
            x2="100%"
            y2="70%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
          />
          {/* Vertical lines */}
          <motion.line
            x1="25%"
            y1="0"
            x2="25%"
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
          />
          <motion.line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.line
            x1="75%"
            y1="0"
            x2="75%"
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Rotating Mandala/Dialectical Circle */}
      <motion.div
        style={{
          opacity: mandalaOpacity,
          scale: mandalaScale,
          rotate: mandalaRotate,
        }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#FFC000]"
            style={{
              boxShadow: "0 0 30px rgba(255, 192, 0, 0.5)",
            }}
          />
          {/* Middle ring */}
          <motion.div
            className="absolute inset-8 rounded-full border border-[#00FFFF]"
            style={{
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
            }}
          />
          {/* Inner ring */}
          <motion.div
            className="absolute inset-16 rounded-full border border-[#FFC000]"
            style={{
              boxShadow: "0 0 15px rgba(255, 192, 0, 0.3)",
            }}
          />
          {/* Center glow */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-4 h-4 rounded-full bg-[#FFC000]"
              style={{
                boxShadow: "0 0 40px rgba(255, 192, 0, 0.8)",
              }}
            />
          </motion.div>
          {/* Connecting lines */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div
              key={angle}
              className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-[#FFC000] to-transparent origin-left"
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Transition Text Overlay */}
      <motion.div
        style={{ opacity: transitionTextOpacity }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center max-w-4xl px-8">
          <p className="text-xl md:text-2xl text-[#e8dcc8] font-serif leading-relaxed">
            Khi hàng hóa lưu thông và giá trị tăng trưởng,
            <br />
            một cấu trúc mới xuất hiện — hệ thống chi phối tất cả.
          </p>
        </div>
      </motion.div>

      {/* Chapter 3 Reveal */}
      <motion.div
        style={{
          opacity: chapter3Opacity,
          scale: chapter3Scale,
          y: chapter3Y,
        }}
        className="fixed inset-0 flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1080&width=1920&query=classical+oil+painting+interconnected+factories+farms+cities+golden+dawn+unity+progress)",
            backgroundBlendMode: "soft-light",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-6xl md:text-8xl font-bold mb-8 text-[#00FFFF]"
              style={{
                textShadow: "0 0 40px rgba(0, 255, 255, 0.8), 0 0 80px rgba(0, 255, 255, 0.4)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Chương 3
            </h2>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p
              className="text-3xl md:text-4xl text-[#FFC000] font-serif italic mb-4"
              style={{
                textShadow: "0 2px 20px rgba(255, 192, 0, 0.6)",
                fontFamily: "Georgia, 'Times New Roman', serif",
                letterSpacing: "0.02em",
              }}
            >
              Hệ thống Kinh tế và Phát triển
            </p>
            <p
              className="text-xl md:text-2xl text-[#f5f0e8] mt-6 font-light"
              style={{
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Từ trao đổi cá nhân đến tổ chức sản xuất
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

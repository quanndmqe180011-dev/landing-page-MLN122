// HorizontalScrollContainer.tsx
"use client"

import { useRef, useState, useEffect } from "react" // ĐÃ THÊM useEffect
import { motion, useScroll, useTransform } from "framer-motion"
import MarketLawFrame from "./market-law-frame"

interface Frame {
  id: number
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
}

interface HorizontalScrollContainerProps {
  frames: Frame[]
}

// Định nghĩa kiểu cho vị trí hạt
interface Particle {
    x: number
    y: number
}

export default function HorizontalScrollContainer({ frames }: HorizontalScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // SỬA LỖI: State để lưu trữ các vị trí hạt đã tính toán an toàn
  const [particles, setParticles] = useState<Particle[]>([]) 
  const PARTICLE_COUNT = 20
  
  // SỬA LỖI: Tính toán vị trí hạt trong useEffect (chỉ chạy trên client)
  useEffect(() => {
    if (typeof window !== "undefined") {
        const newParticles: Particle[] = []
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            newParticles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
            })
        }
        setParticles(newParticles)
    }
  }, []) // [] đảm bảo chỉ chạy một lần sau khi mount
    
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Convert vertical scroll to horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -(frames.length - 1) * 100])

  // Progress line animation
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Background gradient animation
  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(80, 0, 0) 50%, rgb(139, 69, 19) 100%)",
      "linear-gradient(135deg, rgb(20, 0, 20) 0%, rgb(100, 20, 0) 50%, rgb(180, 100, 0) 100%)",
      "linear-gradient(135deg, rgb(40, 0, 40) 0%, rgb(120, 40, 0) 50%, rgb(200, 150, 0) 100%)",
    ],
  )

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: `${frames.length * 100}vh` }}>
      {/* Background */}
      <motion.div className="fixed inset-0 -z-10" style={{ backgroundImage: bgGradient }} />

      {/* Particle background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Chỉ render particles khi chúng đã được tính toán an toàn trên client */}
        {particles.map((particle, i) => {
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
              // Sử dụng vị trí đã tính toán từ state
              initial={{ x: particle.x, y: particle.y }} 
              animate={{
                y: [particle.y, particle.y - 1500], // Cho các hạt bay lên
                opacity: [0.3, 0.1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          )
        })}
      </div>

      {/* Horizontal scroll container */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div className="flex h-screen" style={{ x }}>
          {frames.map((frame, index) => (
            <MarketLawFrame
              key={frame.id}
              frame={frame}
              index={index}
              totalFrames={frames.length}
              scrollProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>

      {/* Progress line */}
      <motion.div
        className="fixed bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-600 shadow-lg shadow-yellow-400/50"
        style={{ width: progressWidth }}
      />

      {/* Progress indicator */}
      <div className="fixed bottom-8 right-8 text-white font-cinzel text-sm z-50">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {/* LƯU Ý: scrollProgress * 100 phải được xử lý cẩn thận nếu cần, nhưng thường an toàn */}
          {/* Tôi sẽ giữ nguyên logic này, vì nó không truy cập window */}
          {Math.round((scrollYProgress.get() || 0) * 100)}% 
        </motion.div>
      </div>

      {/* Back button */}
      <motion.a
        href="/"
        className="fixed top-8 left-8 px-6 py-2 border border-yellow-400 text-yellow-400 rounded-lg font-cinzel text-sm hover:bg-yellow-400 hover:text-black transition-colors z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Quay lại
      </motion.a>
    </div>
  )
}
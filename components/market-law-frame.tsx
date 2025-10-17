"use client"

import { motion, useTransform, type MotionValue } from "framer-motion"

interface Frame {
  id: number
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
}

interface MarketLawFrameProps {
  frame: Frame
  index: number
  totalFrames: number
  scrollProgress: MotionValue<number>
}

export default function MarketLawFrame({ frame, index, totalFrames, scrollProgress }: MarketLawFrameProps) {
  // Calculate when this frame should be visible
  const frameStart = index / totalFrames
  const frameEnd = (index + 1) / totalFrames

  // Fade in/out animations for this frame
  const opacity = useTransform(scrollProgress, [frameStart - 0.1, frameStart, frameEnd, frameEnd + 0.1], [0, 1, 1, 0])

  const scale = useTransform(scrollProgress, [frameStart - 0.1, frameStart, frameEnd, frameEnd + 0.1], [0.8, 1, 1, 0.8])

  const y = useTransform(scrollProgress, [frameStart - 0.1, frameStart, frameEnd, frameEnd + 0.1], [50, 0, 0, -50])

  // Icon parallax
  const iconRotate = useTransform(scrollProgress, [frameStart, frameEnd], [0, 360])

  const iconScale = useTransform(
    scrollProgress,
    [frameStart - 0.05, frameStart, frameEnd - 0.05, frameEnd],
    [0.5, 1.2, 1.2, 0.5],
  )

  return (
    <motion.div
      className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-8"
      style={{ opacity, scale, y }}
    >
      <div className="max-w-4xl w-full">
        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.p
                className="text-yellow-400 text-sm font-cinzel tracking-widest mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {frame.subtitle}
              </motion.p>
              <motion.h2
                className="text-5xl md:text-6xl font-cinzel font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {frame.title}
              </motion.h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-red-500" />
            </div>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed font-sans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {frame.description}
            </motion.p>

            {/* Learn more button */}
            <motion.button
              className="mt-8 px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg font-cinzel hover:bg-yellow-400 hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tìm hiểu thêm
            </motion.button>
          </motion.div>

          {/* Right: Icon with 3D effect */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={`relative w-64 h-64 rounded-2xl bg-gradient-to-br ${frame.color} flex items-center justify-center shadow-2xl`}
              style={{
                rotate: iconRotate,
                scale: iconScale,
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-transparent blur-xl" />

              {/* Icon */}
              <motion.div
                className="text-8xl relative z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {frame.icon}
              </motion.div>

              {/* Decorative circles */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-yellow-400/30"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

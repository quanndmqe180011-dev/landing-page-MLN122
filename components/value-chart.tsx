"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ValueChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <div ref={ref} className="p-8 rounded-lg bg-[#1A1A1A] border border-gray-700">
      <h3 className="font-mono text-2xl font-bold text-[#00FFFF] mb-8 text-center">
        Mối quan hệ nghịch đảo: Năng suất ↑ → Giá trị ↓
      </h3>

      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <div className="text-center font-mono text-lg text-[#FFC000] mb-2">Năng suất lao động</div>
          <motion.div
            className="relative h-64 bg-gray-800 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FFC000] to-[#FFC000]/50"
              initial={{ height: "20%" }}
              animate={isInView ? { height: "80%" } : { height: "20%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <div className="absolute inset-0 flex items-end justify-center pb-4">
              <motion.span
                className="font-mono text-3xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 }}
              >
                ↑
              </motion.span>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4">
          <div className="text-center font-mono text-lg text-[#00FFFF] mb-2">Giá trị hàng hóa</div>
          <motion.div
            className="relative h-64 bg-gray-800 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#00FFFF] to-[#00FFFF]/50"
              initial={{ height: "80%" }}
              animate={isInView ? { height: "30%" } : { height: "80%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <div className="absolute inset-0 flex items-end justify-center pb-4">
              <motion.span
                className="font-mono text-3xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 }}
              >
                ↓
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-6 leading-relaxed">
        Khi năng suất tăng, thời gian lao động xã hội cần thiết giảm, dẫn đến giá trị hàng hóa giảm
      </p>
    </div>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function LaborSplit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6 }}
        className="relative p-8 rounded-lg border-2 border-[#00FFFF] bg-[#00FFFF]/5"
      >
        <motion.div
          animate={isInView ? { boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" } : {}}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute inset-0 rounded-lg"
        />
        <h3 className="font-mono text-2xl font-bold text-[#00FFFF] mb-4">Lao động cụ thể</h3>
        <p className="text-gray-300 leading-relaxed">
          Tạo ra giá trị sử dụng cụ thể. Ví dụ: thợ may tạo áo, thợ mộc tạo bàn ghế. Mỗi loại lao động có kỹ năng và
          công cụ riêng.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative p-8 rounded-lg border-2 border-[#FFC000] bg-[#FFC000]/5"
      >
        <motion.div
          animate={isInView ? { boxShadow: "0 0 30px rgba(255, 192, 0, 0.5)" } : {}}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute inset-0 rounded-lg"
        />
        <h3 className="font-mono text-2xl font-bold text-[#FFC000] mb-4">Lao động trừu tượng</h3>
        <p className="text-gray-300 leading-relaxed">
          Tạo ra giá trị trao đổi. Đây là sự tiêu hao năng lượng con người nói chung, không phân biệt hình thức cụ thể.
        </p>
      </motion.div>
    </div>
  )
}

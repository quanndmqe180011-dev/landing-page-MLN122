"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const functions = [
  {
    title: "Thước đo giá trị",
    description: "Tiền tệ là công cụ để đo lường và so sánh giá trị của các hàng hóa khác nhau.",
    icon: "📏",
  },
  {
    title: "Phương tiện lưu thông",
    description: "Tiền làm trung gian trong quá trình trao đổi hàng hóa, thay thế hình thức trao đổi trực tiếp.",
    icon: "🔄",
  },
  {
    title: "Phương tiện tích trữ",
    description: "Tiền có thể được cất giữ để bảo toàn giá trị và sử dụng trong tương lai.",
    icon: "💰",
  },
  {
    title: "Phương tiện thanh toán",
    description: "Tiền được sử dụng để thanh toán nợ, thuế và các nghĩa vụ tài chính khác.",
    icon: "💳",
  },
  {
    title: "Tiền tệ thế giới",
    description: "Tiền hoạt động như phương tiện thanh toán quốc tế trong thương mại toàn cầu.",
    icon: "🌍",
  },
]

export default function MoneyFunctions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <div ref={ref} className="space-y-8">
      <h3 className="font-mono text-3xl font-bold text-[#d4af37] text-center">5 Chức năng của Tiền tệ</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {functions.map((func, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative p-6 rounded-lg border-2 border-[#3d5a80] bg-white/70 hover:bg-[#3d5a80]/10 hover:border-[#d4af37] transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-5xl">{func.icon}</div>
              <h4 className="font-mono text-lg font-bold text-[#3d5a80]">{func.title}</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{func.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

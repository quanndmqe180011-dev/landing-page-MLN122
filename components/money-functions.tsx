"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

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
  const [flipped, setFlipped] = useState<number[]>([])

  const toggleFlip = (index: number) => {
    setFlipped((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div ref={ref} className="space-y-8">
      <h3 className="font-mono text-3xl font-bold text-[#FFC000] text-center">5 Chức năng của Tiền tệ</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {functions.map((func, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative h-64 cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={() => toggleFlip(i)}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ rotateY: flipped.includes(i) ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-lg border-2 border-[#00FFFF] bg-[#00FFFF]/10"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="text-5xl mb-4">{func.icon}</div>
                <h4 className="font-mono text-lg font-bold text-[#00FFFF] text-center">{func.title}</h4>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 flex items-center justify-center p-6 rounded-lg border-2 border-[#FFC000] bg-[#FFC000]/10"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="text-sm text-gray-300 text-center leading-relaxed">{func.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm">Nhấp vào mỗi thẻ để xem chi tiết</p>
    </div>
  )
}

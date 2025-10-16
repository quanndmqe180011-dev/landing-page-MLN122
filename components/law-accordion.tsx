"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import TooltipTerm from "./tooltip-term"

export default function LawAccordion() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const laws = [
    {
      id: "law-of-value",
      title: "Quy luật Giá trị - Quy luật Kinh tế Cơ bản",
      icon: "⚡",
      highlight: true,
      content: (
        <>
          <p className="mb-4">
            Quy luật giá trị là{" "}
            <TooltipTerm
              term="quy luật kinh tế cơ bản"
              definition="Quy luật chi phối toàn bộ quá trình sản xuất, phân phối, trao đổi và tiêu dùng trong nền kinh tế hàng hóa"
              color="#d4af37"
            />{" "}
            của nền sản xuất hàng hóa, theo đó:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Giá trị hàng hóa được xác định bởi{" "}
              <TooltipTerm
                term="lượng lao động xã hội cần thiết"
                definition="Thời gian lao động cần thiết để sản xuất ra một hàng hóa trong điều kiện sản xuất bình thường của xã hội"
                color="#d4af37"
              />
            </li>
            <li>Hàng hóa trao đổi theo nguyên tắc ngang giá</li>
            <li>Giá cả dao động xung quanh giá trị</li>
            <li>Điều tiết sản xuất và phân phối lao động xã hội</li>
          </ul>
        </>
      ),
    },
    {
      id: "supply-demand",
      title: "Quy luật Cung - Cầu",
      icon: "📊",
      highlight: false,
      content: (
        <>
          <p className="mb-4">Quy luật cung cầu mô tả mối quan hệ giữa cung và cầu trong thị trường:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong className="text-[#3d5a80]">Cung &gt; Cầu:</strong> Giá giảm, người bán phải hạ giá để tiêu thụ
            </li>
            <li>
              <strong className="text-[#d4af37]">Cầu &gt; Cung:</strong> Giá tăng, người mua phải trả giá cao hơn
            </li>
            <li>
              <strong className="text-[#2d2d2d]">Cung = Cầu:</strong> Giá ổn định, thị trường cân bằng
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "competition",
      title: "Quy luật Cạnh tranh",
      icon: "⚔️",
      highlight: false,
      content: (
        <>
          <p className="mb-4">Cạnh tranh là động lực thúc đẩy phát triển trong nền kinh tế thị trường:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Thúc đẩy đổi mới công nghệ và nâng cao năng suất</li>
            <li>Loại bỏ các doanh nghiệp kém hiệu quả</li>
            <li>Tạo ra sự phân hóa giàu nghèo trong xã hội</li>
            <li>Dẫn đến tập trung và độc quyền</li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <div ref={ref} className="space-y-8">
      <h3 className="font-mono text-3xl font-bold text-[#d4af37] text-center">Các Quy luật Kinh tế</h3>

      <div className="space-y-6">
        {laws.map((law, index) => (
          <motion.div
            key={law.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative border-2 rounded-lg p-6 ${
              law.highlight ? "border-[#d4af37] bg-[#d4af37]/10" : "border-[#d4c5ad] bg-white/50"
            }`}
          >
            {law.highlight && (
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                    "0 0 40px rgba(212, 175, 55, 0.5)",
                    "0 0 60px rgba(212, 175, 55, 0.7)",
                    "0 0 40px rgba(212, 175, 55, 0.5)",
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute inset-0 rounded-lg pointer-events-none"
              />
            )}

            <div className="relative z-10">
              <h4
                className={`font-mono text-xl font-bold mb-4 flex items-center gap-3 ${
                  law.highlight ? "text-[#d4af37]" : "text-[#3d5a80]"
                }`}
              >
                <span className="text-2xl">{law.icon}</span>
                {law.title}
              </h4>
              <div className="text-gray-700 leading-relaxed">{law.content}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

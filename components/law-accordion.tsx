"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LawAccordion() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <div ref={ref} className="space-y-6">
      <h3 className="font-mono text-3xl font-bold text-[#00FFFF] text-center">Các Quy luật Kinh tế</h3>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="law-of-value" className="border border-[#00FFFF]/30 rounded-lg px-6 bg-[#00FFFF]/5">
          <AccordionTrigger className="font-mono text-lg text-[#00FFFF] hover:no-underline">
            <motion.div
              animate={
                isInView
                  ? {
                      textShadow: [
                        "0 0 10px rgba(0, 255, 255, 0.5)",
                        "0 0 20px rgba(0, 255, 255, 0.8)",
                        "0 0 10px rgba(0, 255, 255, 0.5)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              ⚡ Quy luật Giá trị
            </motion.div>
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 leading-relaxed pt-4">
            <p className="mb-4">Quy luật giá trị là quy luật kinh tế cơ bản của nền sản xuất hàng hóa, theo đó:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Giá trị hàng hóa được xác định bởi lượng lao động xã hội cần thiết</li>
              <li>Hàng hóa trao đổi theo nguyên tắc ngang giá</li>
              <li>Giá cả dao động xung quanh giá trị</li>
              <li>Điều tiết sản xuất và phân phối lao động xã hội</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="supply-demand" className="border border-gray-600 rounded-lg px-6">
          <AccordionTrigger className="font-mono text-lg text-gray-300 hover:no-underline">
            📊 Quy luật Cung - Cầu
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 leading-relaxed pt-4">
            <p className="mb-4">Quy luật cung cầu mô tả mối quan hệ giữa cung và cầu trong thị trường:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-[#00FFFF]">Cung &gt; Cầu:</strong> Giá giảm, người bán phải hạ giá để tiêu thụ
              </li>
              <li>
                <strong className="text-[#FFC000]">Cầu &gt; Cung:</strong> Giá tăng, người mua phải trả giá cao hơn
              </li>
              <li>
                <strong className="text-white">Cung = Cầu:</strong> Giá ổn định, thị trường cân bằng
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="competition" className="border border-gray-600 rounded-lg px-6">
          <AccordionTrigger className="font-mono text-lg text-gray-300 hover:no-underline">
            ⚔️ Quy luật Cạnh tranh
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 leading-relaxed pt-4">
            <p className="mb-4">Cạnh tranh là động lực thúc đẩy phát triển trong nền kinh tế thị trường:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Thúc đẩy đổi mới công nghệ và nâng cao năng suất</li>
              <li>Loại bỏ các doanh nghiệp kém hiệu quả</li>
              <li>Tạo ra sự phân hóa giàu nghèo trong xã hội</li>
              <li>Dẫn đến tập trung và độc quyền</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

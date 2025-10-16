"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const actors = [
  {
    title: "Người sản xuất",
    subtitle: "Producers",
    goal: "Tối đa hóa lợi nhuận",
    description:
      "Sản xuất hàng hóa và dịch vụ để bán trên thị trường. Mục tiêu chính là tăng doanh thu và giảm chi phí.",
    color: "#00FFFF",
  },
  {
    title: "Người tiêu dùng",
    subtitle: "Consumers",
    goal: "Tối đa hóa thỏa mãn",
    description: "Mua sắm hàng hóa và dịch vụ để đáp ứng nhu cầu. Quyết định dựa trên giá cả, chất lượng và thu nhập.",
    color: "#FFC000",
  },
  {
    title: "Nhà nước",
    subtitle: "State",
    goal: "Điều tiết vĩ mô",
    layers: [
      { text: "Quản lý vĩ mô", highlight: false },
      { text: "Điều chỉnh thị trường", highlight: true },
    ],
    description:
      "Đảm bảo ổn định kinh tế, công bằng xã hội và phát triển bền vững thông qua chính sách tài khóa và tiền tệ.",
    color: "#00FFFF",
  },
  {
    title: "Doanh nghiệp",
    subtitle: "Enterprises",
    goal: "Tăng trưởng bền vững",
    description: "Tổ chức sản xuất kinh doanh, tạo việc làm và đóng góp vào GDP. Cạnh tranh để tồn tại và phát triển.",
    color: "#FFC000",
  },
]

export default function EconomicActors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="actors" ref={ref} className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-5xl font-bold text-center mb-16 text-[#00FFFF]"
        >
          CÁC CHỦ THỂ KINH TẾ
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {actors.map((actor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative p-8 rounded-lg border-2 transition-all duration-300"
              style={{
                borderColor: hoveredIndex === i ? actor.color : "#333",
                backgroundColor: hoveredIndex === i ? `${actor.color}10` : "transparent",
              }}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-mono text-3xl font-bold mb-1" style={{ color: actor.color }}>
                    {actor.title}
                  </h3>
                  <p className="text-gray-500 font-mono text-sm">{actor.subtitle}</p>
                </div>

                <motion.div
                  initial={{ scale: 1 }}
                  animate={hoveredIndex === i ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block px-4 py-2 rounded-full font-mono text-sm font-bold"
                  style={{
                    backgroundColor: `${actor.color}20`,
                    color: actor.color,
                    border: `1px solid ${actor.color}`,
                  }}
                >
                  {actor.goal}
                </motion.div>

                {actor.layers && (
                  <div className="space-y-2">
                    {actor.layers.map((layer, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredIndex === i ? { opacity: 1, x: 0 } : { opacity: 0.5, x: 0 }}
                        transition={{ duration: 0.3, delay: j * 0.1 }}
                        className="px-4 py-2 rounded font-mono text-sm"
                        style={{
                          backgroundColor: layer.highlight && hoveredIndex === i ? `${actor.color}20` : "#222",
                          color: layer.highlight && hoveredIndex === i ? actor.color : "#999",
                        }}
                      >
                        {layer.text}
                      </motion.div>
                    ))}
                  </div>
                )}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={hoveredIndex === i ? { opacity: 1 } : { opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-300 leading-relaxed"
                >
                  {actor.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          id="conclusion"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 p-8 rounded-lg border border-[#00FFFF]/30 bg-[#00FFFF]/5 text-center"
        >
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Các chủ thể kinh tế tương tác với nhau trong một hệ thống phức tạp, được điều tiết bởi các quy luật kinh tế
            khách quan và chính sách của Nhà nước.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

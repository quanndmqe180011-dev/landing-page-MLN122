"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import LaborSplit from "./labor-split"
import ValueChart from "./value-chart"
import MoneyFunctions from "./money-functions"
import LawAccordion from "./law-accordion"
import MoneyFormula from "./money-formula"

export default function Chapter2Section() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const subpoints = [
    "Hàng hóa là sản phẩm của lao động",
    "Giá trị sử dụng và giá trị trao đổi",
    "Lao động cụ thể và lao động trừu tượng",
    "Quy luật giá trị chi phối thị trường",
  ]

  return (
    <section id="chapter2" ref={ref} className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Sticky Title */}
          <motion.div
            className="lg:sticky lg:top-32 h-fit"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-mono text-4xl font-bold text-[#FFC000] mb-4">CHƯƠNG 2</h2>
            <p className="text-gray-400">Hàng hóa và Tiền tệ</p>
          </motion.div>

          {/* Content */}
          <div className="space-y-16">
            {/* Subpoints with connector line */}
            <div className="relative">
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00FFFF] to-transparent"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ transformOrigin: "top" }}
              />

              <div className="space-y-6 pl-8">
                {subpoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-[#00FFFF]" />
                    <p className="text-lg text-gray-200">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <LaborSplit />
            <ValueChart />
            <MoneyFunctions />
            <LawAccordion />
            <MoneyFormula />
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Conclusion() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section
      id="conclusion"
      ref={containerRef}
      className="relative min-h-screen py-32 px-4 overflow-hidden bg-black"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <Image
          src="/mural-classical-painting-showing-workers-and-leade.jpg"
          alt="Classical mural of progress"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      </motion.div>

      <div className="relative container mx-auto max-w-5xl z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-5xl md:text-6xl font-bold mb-4 text-[#FFF0B4] drop-shadow-[0_0_20px_rgba(255,240,180,0.8)] animate-pulse">
            Kết Luận
          </h2>
          <p className="text-2xl text-gray-400 italic">
            Từ Hàng Hóa Đến Xã Hội — Biện Chứng Của Kinh Tế
          </p>
        </motion.div>

        {/* Main Text */}
        <div className="space-y-8 mb-20">
          {[
            "Kinh tế chính trị Mác-Lênin không chỉ là lý thuyết — đó là một lăng kính phân tích sắc bén để hiểu sản xuất, phân phối và phát triển.",
            "Từ hàng hóa và giá trị đến tiền tệ và quy luật thị trường, mỗi khái niệm xây dựng một cái nhìn toàn diện về cách nền kinh tế hiện đại phát triển.",
            "Bằng cách nắm vững những nguyên tắc này, chúng ta có thể giải thích tốt hơn các thách thức đương đại và hướng dẫn xã hội của chúng ta hướng tới sự tiến bộ công bằng và bền vững.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.3 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-mono font-bold text-center mb-12 text-[#FFF0B4] drop-shadow-[0_0_15px_rgba(255,240,180,0.8)]">
            Điểm Chính
          </h3>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                icon: "🧠",
                title: "Hiểu Bản Chất",
                desc: "Nắm vững các quy luật khách quan của nền kinh tế.",
                color: "#FFF0B4",
                delay: 1.4,
              },
              {
                icon: "🔬",
                title: "Phân Tích Sâu",
                desc: "Nhận thức vấn đề một cách khoa học và phê phán.",
                color: "#00FFFF",
                delay: 1.6,
              },
              {
                icon: "🌱",
                title: "Định Hướng Phát Triển",
                desc: "Định hình một tương lai bền vững và công bằng.",
                color: "#FFF0B4",
                delay: 1.8,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: item.delay }}
                className="relative group h-full"
              >
                {/* Pulsing glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg blur-xl"
                  style={{ backgroundColor: item.color }}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: item.delay,
                  }}
                />

                {/* Card */}
                <div
                  className="relative bg-gray-900/80 backdrop-blur-sm border-2 rounded-lg p-8 text-center shadow-[0_0_20px_rgba(255,240,180,0.4)] h-full flex flex-col justify-between transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,240,180,0.8)]"
                  style={{ borderColor: item.color }}
                >
                  <div>
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h4
                      className="font-mono text-xl font-bold mb-3 drop-shadow-[0_0_10px_rgba(255,240,180,0.8)]"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="relative mb-20"
        >
          <blockquote className="relative text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 2.2 }}
              className="h-[2px] w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-[#FFF0B4] to-transparent"
            />

            <p className="font-sans text-2xl md:text-3xl text-[#FFF0B4] italic mb-6 leading-relaxed drop-shadow-[0_0_20px_rgba(255,240,180,0.8)]">
              "Các triết gia chỉ giải thích thế giới theo nhiều cách khác nhau; tuy nhiên, vấn đề là phải thay đổi nó."
            </p>

            <footer className="text-[#FFF0B4] font-mono text-xl font-bold drop-shadow-[0_0_10px_rgba(255,240,180,0.8)]">
              — Karl Marx
            </footer>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
              className="h-[1px] w-full max-w-md mx-auto mt-8 bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"
            />
          </blockquote>
        </motion.div>

        {/* Closing Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.8 }}
          className="text-center"
        >
          <p className="text-xl text-gray-400 italic mb-8">
            "Khám phá Kinh tế Chính trị Mác-Lênin không phải là kết thúc — đó là khởi đầu của việc hiểu các lực lượng định hình thế giới của chúng ta."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

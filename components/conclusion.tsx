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
    <section id="conclusion" ref={containerRef} className="relative min-h-screen py-32 px-4 overflow-hidden bg-black">
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
          <h2 className="font-mono text-5xl md:text-6xl font-bold mb-4 text-[#c9a961]">Kết Luận</h2>
          <p className="text-2xl text-gray-400 italic">Từ Hàng Hóa Đến Xã Hội — Biện Chứng Của Kinh Tế</p>
        </motion.div>

        <div className="space-y-8 mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center"
          >
            Kinh tế chính trị Mác-Lênin không chỉ là lý thuyết — đó là một lăng kính phân tích sắc bén để hiểu sản xuất,
            phân phối và phát triển.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center"
          >
            Từ hàng hóa và giá trị đến tiền tệ và quy luật thị trường, mỗi khái niệm xây dựng một cái nhìn toàn diện về
            cách nền kinh tế hiện đại phát triển.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center"
          >
            Bằng cách nắm vững những nguyên tắc này, chúng ta có thể giải thích tốt hơn các thách thức đương đại và
            hướng dẫn xã hội của chúng ta hướng tới sự tiến bộ công bằng và bền vững.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-mono font-bold text-center mb-12 text-[#00FFFF]">Điểm Chính</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "Hiểu Bản Chất",
                desc: "Nắm vững các quy luật khách quan của nền kinh tế.",
                color: "#c9a961",
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
                color: "#c9a961",
                delay: 1.8,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: item.delay }}
                className="relative group"
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

                <div
                  className="relative bg-gray-900/80 backdrop-blur-sm border-2 rounded-lg p-8 text-center"
                  style={{ borderColor: item.color }}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h4 className="font-mono text-xl font-bold mb-3" style={{ color: item.color }}>
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="relative mb-20"
        >
          {/* Particle animation behind quote */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: i % 3 === 0 ? "#c9a961" : i % 3 === 1 ? "#00FFFF" : "#fff",
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 2 + Math.random() * 2,
                }}
              />
            ))}
          </div>

          <blockquote className="relative text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 2.2 }}
              className="h-[2px] w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"
            />

            <p className="font-serif text-2xl md:text-3xl text-gray-200 italic mb-6 leading-relaxed">
              "Các triết gia chỉ giải thích thế giới theo nhiều cách khác nhau; tuy nhiên, vấn đề là phải thay đổi nó."
            </p>

            <footer className="text-[#c9a961] font-mono text-xl font-bold">— Karl Marx</footer>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
              className="h-[1px] w-full max-w-md mx-auto mt-8 bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"
            />
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.8 }}
          className="text-center"
        >
          <p className="text-xl text-gray-400 italic mb-8">
            "Việc khám phá Kinh tế Chính trị Mác-Lênin không phải là kết thúc — đó là khởi đầu của việc hiểu các lực
            lượng định hình thế giới của chúng ta."
          </p>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative px-8 py-4 font-mono font-bold text-lg overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#00FFFF]/80 transition-transform group-hover:scale-110" />
              <span className="relative text-black flex items-center gap-2">↑ Về Đầu Trang</span>
            </motion.button>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 font-mono font-bold text-lg overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#c9a961] to-[#c9a961]/80 transition-transform group-hover:scale-110" />
              <span className="relative text-black flex items-center gap-2">Chương Tiếp Theo →</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

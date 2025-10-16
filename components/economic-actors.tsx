"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const actors = [
  {
    title: "Người sản xuất",
    subtitle: "Producers",
    description:
      "Họ tạo ra hàng hóa và dịch vụ để bán trên thị trường, nỗ lực tối đa hóa lợi nhuận bằng cách giảm chi phí và mở rộng sản xuất.",
    effect: "sparkle",
    color: "#c9a961",
  },
  {
    title: "Người tiêu dùng",
    subtitle: "Consumers",
    description:
      "Họ tìm kiếm sự thỏa mãn — mua sắm sản phẩm và dịch vụ để đáp ứng nhu cầu. Lựa chọn của họ định hình chính sản xuất.",
    effect: "glow",
    color: "#00FFFF",
  },
  {
    title: "Nhà nước",
    subtitle: "The State",
    description:
      "Nó ổn định nền kinh tế, đảm bảo công bằng và hướng dẫn phát triển bền vững thông qua chính sách tài khóa và tiền tệ.",
    effect: "rising",
    color: "#c9a961",
  },
  {
    title: "Doanh nghiệp",
    subtitle: "Enterprises",
    description:
      "Họ tổ chức sản xuất, tạo việc làm và cạnh tranh để phát triển và tồn tại. Thành công của họ thúc đẩy nền kinh tế quốc gia.",
    effect: "parallax",
    color: "#00FFFF",
  },
]

export default function EconomicActors() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section id="actors" ref={containerRef} className="relative min-h-screen py-32 px-4 overflow-hidden bg-black">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-30">
        <Image
          src="/mural-classical-painting-showing-workers-and-leade.jpg"
          alt="Classical marketplace scene"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </motion.div>

      <div className="relative container mx-auto max-w-6xl z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-mono text-5xl md:text-6xl font-bold mb-4 text-[#c9a961]">Các Chủ Thể Kinh Tế</h2>
          <p className="text-xl text-gray-400 italic">
            Mỗi người đóng một vai trò quan trọng trong cơ chế vĩ đại của sản xuất và phân phối.
          </p>
        </motion.div>

        <div className="space-y-24">
          {actors.map((actor, index) => (
            <ActorCard key={index} actor={actor} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 2 }}
          className="mt-32 relative h-64"
        >
          <svg className="w-full h-full" viewBox="0 0 800 300">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c9a961" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c9a961" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Network lines */}
            <motion.path
              d="M 200,50 L 600,50 L 600,250 L 200,250 Z"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2.5 }}
            />
            <motion.path
              d="M 200,50 L 600,250"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2.7 }}
            />
            <motion.path
              d="M 600,50 L 200,250"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2.9 }}
            />

            {/* Glowing nodes */}
            {[
              [200, 50],
              [600, 50],
              [600, 250],
              [200, 250],
            ].map((pos, i) => (
              <motion.circle
                key={i}
                cx={pos[0]}
                cy={pos[1]}
                r="8"
                fill={i % 2 === 0 ? "#c9a961" : "#00FFFF"}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 3 + i * 0.1 }}
              >
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
              </motion.circle>
            ))}
          </svg>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="text-center text-gray-400 mt-8 text-lg"
          >
            Mạng lưới quan hệ kinh tế kết nối tất cả các chủ thể
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function ActorCard({ actor, index }: { actor: (typeof actors)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.3 }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text content */}
        <div className={`flex-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
            className="font-mono text-4xl font-bold mb-2"
            style={{ color: actor.color }}
          >
            {actor.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.3 + 0.4 }}
            className="text-gray-500 text-sm mb-4 font-mono"
          >
            {actor.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.3 + 0.6 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            {actor.description}
          </motion.p>
        </div>

        {/* Effect visualization */}
        <div className={`flex-1 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
          <EffectVisual effect={actor.effect} color={actor.color} isInView={isInView} delay={index * 0.3} />
        </div>
      </div>
    </motion.div>
  )
}

function EffectVisual({
  effect,
  color,
  isInView,
  delay,
}: { effect: string; color: string; isInView: boolean; delay: number }) {
  if (effect === "sparkle") {
    return (
      <div className="relative w-full h-64 flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={
              isInView
                ? {
                    scale: [0, 1, 0],
                    x: Math.cos((i / 12) * Math.PI * 2) * 80,
                    y: Math.sin((i / 12) * Math.PI * 2) * 80,
                  }
                : {}
            }
            transition={{
              duration: 2,
              delay: delay + 0.8 + i * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            }}
          />
        ))}
        <div className="text-6xl">💰</div>
      </div>
    )
  }

  if (effect === "glow") {
    return (
      <div className="relative w-full h-64 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{ backgroundColor: color }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: [0, 0.3, 0], scale: [0.5, 1.5, 0.5] } : {}}
          transition={{ duration: 3, delay: delay + 0.8, repeat: Number.POSITIVE_INFINITY }}
        />
        <div className="text-6xl relative z-10">🛍️</div>
      </div>
    )
  }

  if (effect === "rising") {
    return (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-full h-16 opacity-30"
            style={{
              background: `linear-gradient(to top, ${color}, transparent)`,
            }}
            initial={{ y: 300 }}
            animate={isInView ? { y: -300 } : {}}
            transition={{
              duration: 3,
              delay: delay + 0.8 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            }}
          />
        ))}
        <div className="text-6xl relative z-10">🏛️</div>
      </div>
    )
  }

  if (effect === "parallax") {
    return (
      <div className="relative w-full h-64 flex items-center justify-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 0.3 } : {}}
          transition={{ duration: 2, delay: delay + 0.8 }}
          className="absolute text-8xl"
        >
          🏭
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2, delay: delay + 1 }}
          className="text-6xl relative z-10"
        >
          🏢
        </motion.div>
      </div>
    )
  }

  return null
}

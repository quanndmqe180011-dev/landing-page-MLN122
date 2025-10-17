"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, TrendingUp, Coins, Users, Scale, Factory, Briefcase, Target } from "lucide-react"
import Image from "next/image"

interface TimelineNode {
  year?: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  tags: string[]
  color: string
  imageUrl: string
}

const timelineData: TimelineNode[] = [
  {
    year: "Khái niệm 1",
    title: "Hàng Hóa",
    subtitle: "Nền tảng kinh tế thị trường",
    description:
      "Sản phẩm của lao động được sản xuất ra để trao đổi, mua bán trên thị trường. Hàng hóa có hai thuộc tính cơ bản: giá trị sử dụng (thỏa mãn nhu cầu con người) và giá trị (lao động xã hội kết tinh trong hàng hóa). Đây là nền tảng của nền kinh tế thị trường.",
    icon: <BookOpen className="w-6 h-6" />,
    tags: ["Giá trị", "Trao đổi", "Thị trường"],
    color: "#00FFFF",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-L1Cc3sl8naNLrwr1wYLps1VX9LgioP.jpg",
  },
  {
    year: "Khái niệm 2",
    title: "Lao Động Hai Mặt",
    subtitle: "Nguồn gốc của giá trị",
    description:
      "Lao động trừu tượng là sự chi phí sức lao động của con người nói chung, tạo ra giá trị hàng hóa. Lao động cụ thể là lao động có ích nhất định, tạo ra giá trị sử dụng. Sự thống nhất giữa hai mặt này định hình bản chất của sản xuất hàng hóa trong xã hội.",
    icon: <TrendingUp className="w-6 h-6" />,
    tags: ["Trừu tượng", "Cụ thể", "Giá trị"],
    color: "#FFC000",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-JsQPr0UThVcpsODwuJgWYjbelK9bSN.jpg",
  },
  {
    year: "Khái niệm 3",
    title: "Giá Trị & Năng Suất",
    subtitle: "Quan hệ biện chứng",
    description:
      "Giá trị hàng hóa tỷ lệ nghịch với năng suất lao động xã hội. Khi năng suất tăng, giá trị đơn vị hàng hóa giảm nhưng khối lượng giá trị tăng. Đây là động lực thúc đẩy phát triển lực lượng sản xuất và cải tiến công nghệ trong xã hội.",
    icon: <Scale className="w-6 h-6" />,
    tags: ["Năng suất", "Công nghệ", "Phát triển"],
    color: "#00FFFF",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-lM9LjTpRTb9fKWPAJuqeKI0p1teB69.jpg",
  },
  {
    year: "Khái niệm 4",
    title: "Tiền Tệ",
    subtitle: "Hàng hóa đặc biệt",
    description:
      "Tiền tệ là hàng hóa đặc biệt được tách ra từ thế giới hàng hóa để đóng vai trò làm vật ngang giá chung. Tiền tệ thực hiện năm chức năng: thước đo giá trị, phương tiện lưu thông, phương tiện tích trữ, phương tiện thanh toán và tiền tệ thế giới.",
    icon: <Coins className="w-6 h-6" />,
    tags: ["Lưu thông", "Tích trữ", "Thanh toán"],
    color: "#FFC000",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-0YPcLYrtYGpk0WtX9M9Sc4hYtP8znm.jpg",
  },
  {
    year: "Khái niệm 5",
    title: "Quy Luật Giá Trị",
    subtitle: "Điều tiết thị trường",
    description:
      "Quy luật khách quan chi phối sản xuất và lưu thông hàng hóa. Giá cả dao động xung quanh giá trị theo quan hệ cung cầu. Quy luật này tự động điều tiết phân bổ lao động xã hội, kích thích cải tiến kỹ thuật và phân hóa người sản xuất hàng hóa.",
    icon: <Target className="w-6 h-6" />,
    tags: ["Cung cầu", "Thị trường", "Điều tiết"],
    color: "#00FFFF",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-oOyiwI7yn2bhvlFOSWJNi8ppWTuIuH.jpg",
  },
  {
    year: "Khái niệm 6",
    title: "Các Chủ Thể Kinh Tế",
    subtitle: "Người sản xuất & tiêu dùng",
    description:
      "Nền kinh tế bao gồm nhiều chủ thể: người sản xuất (tạo ra hàng hóa), người tiêu dùng (sử dụng hàng hóa), nhà đầu tư (cung cấp vốn) và nhà nước (điều tiết). Mỗi chủ thể có vai trò riêng nhưng liên kết chặt chẽ trong chu trình kinh tế.",
    icon: <Users className="w-6 h-6" />,
    tags: ["Sản xuất", "Tiêu dùng", "Đầu tư"],
    color: "#FFC000",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-WyEa5ejU2Q0sx2cMf68yW75exLHdlF.jpg",
  },
  {
    year: "Khái niệm 7",
    title: "Chu Trình Kinh Tế",
    subtitle: "Vận động không ngừng",
    description:
      "Tiền tệ → Hàng hóa → Tiền tệ tăng thêm. Đây là chu trình vận động cơ bản của nền kinh tế thị trường. Giá trị được tạo ra trong sản xuất, thực hiện trong lưu thông và tích lũy để tái đầu tư. Chu trình này diễn ra liên tục, thúc đẩy nền kinh tế phát triển.",
    icon: <Factory className="w-6 h-6" />,
    tags: ["Chu trình", "Vận động", "Tích lũy"],
    color: "#00FFFF",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-XmNnm8VZ2FAON1dtrUGNulxpBZpkza.jpg",
  },
  {
    year: "Kết luận",
    title: "Ứng Dụng Thực Tiễn",
    subtitle: "Từ lý thuyết đến hành động",
    description:
      "Kinh tế chính trị Mác-Lênin không chỉ là lý thuyết mà còn là công cụ phân tích thực tiễn. Hiểu rõ các quy luật kinh tế giúp định hướng chính sách, phát triển sản xuất và xây dựng xã hội công bằng, tiến bộ. Đây là nền tảng cho sự phát triển bền vững.",
    icon: <Briefcase className="w-6 h-6" />,
    tags: ["Thực tiễn", "Chính sách", "Phát triển"],
    color: "#FFC000",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-dPHwN98n54Cy3PzmDfBzNlI1ar6WT4.jpg",
  },
]

function TimelineNode({ node, index, isLeft }: { node: TimelineNode; index: number; isLeft: boolean }) {
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, {
    once: false,
    amount: 0.5,
    margin: "-100px 0px -100px 0px",
  })

  return (
    <motion.div
      ref={nodeRef}
      className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col gap-8 mb-20`}
      initial={{ opacity: 0.3, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Text Content Side */}
      <motion.div
        className="w-full md:w-[calc(50%-2rem)] bg-black p-8 rounded-lg transition-all duration-500"
        initial={{
          opacity: 0.4,
          x: isLeft ? -50 : 50,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0.4,
                x: isLeft ? -50 : 50,
              }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          boxShadow: isInView
            ? `0 10px 40px ${node.color === "#00FFFF" ? "rgba(0, 255, 255, 0.15)" : "rgba(255, 192, 0, 0.15)"}`
            : "none",
        }}
      >
        {/* Year Badge */}
        <motion.div
          className="inline-block px-5 py-2 rounded-full text-sm font-mono font-bold mb-6 bg-[#8b2e2e] text-white"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0.5 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {node.year}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="font-mono text-4xl font-bold mb-3"
          style={{
            color: "#FFF0B4",
            textShadow: `0 0 20px rgba(255, 240, 180, 0.3)`,
          }}
          initial={{ opacity: 0.5, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {node.title}
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          className="text-[#FFF0B4] text-base mb-5 font-semibold"
          initial={{ opacity: 0.5 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {node.subtitle}
        </motion.p>

        <motion.p
          className="text-[#FFF0B4] leading-relaxed mb-6 text-balance"
          initial={{ opacity: 0.5 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0.5 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {node.description}
        </motion.p>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0.5 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0.5 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {node.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-[#8b2e2e]/30 border border-[#8b2e2e] text-[#FFF0B4] hover:bg-[#8b2e2e]/50 hover:border-white transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Center Icon */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#f5f0e8] shadow-lg"
        style={{
          backgroundColor: node.color === "#00FFFF" ? "#00FFFF" : "#FFC000",
        }}
        initial={{ opacity: 0.4, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1.1 } : { opacity: 0.4, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.3, rotate: 360 }}
      >
        <motion.div
          className="text-[#2d0f0f]"
          initial={{ opacity: 0.5 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0.5 }}
        >
          {node.icon}
        </motion.div>
      </motion.div>

      {/* Image Side */}
      <motion.div
        className="w-full md:w-[calc(50%-2rem)] relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
        initial={{
          opacity: 0.4,
          x: isLeft ? 50 : -50,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0.4,
                x: isLeft ? 50 : -50,
              }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          boxShadow: isInView
            ? `0 20px 60px ${node.color === "#00FFFF" ? "rgba(0, 255, 255, 0.3)" : "rgba(255, 192, 0, 0.3)"}`
            : "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={isInView ? { scale: 1 } : { scale: 1.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image src={node.imageUrl || "/placeholder.svg"} alt={node.title} fill className="object-cover" />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
          style={{
            opacity: isInView ? 0.3 : 0.6,
            transition: "opacity 0.5s ease",
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function MindMapTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-5xl font-bold text-[#FFF0B4] mb-4">HÀNH TRÌNH KHÁI NIỆM</h2>
          <p className="text-[#FFF0B4] text-lg mb-6">Từ nền tảng đến ứng dụng thực tiễn</p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2c4a7c] via-[#c9a961] to-[#2c4a7c] -translate-x-1/2 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Timeline nodes */}
          {timelineData.map((node, index) => {
            const isLeft = index % 2 === 0
            return <TimelineNode key={index} node={node} index={index} isLeft={isLeft} />
          })}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#2c4a7c]/20 to-[#c9a961]/20 border border-[#2c4a7c]/50">
            <p className="font-mono text-sm text-[#2c4a7c]">
              Hành trình từ khái niệm đến thực tiễn • 8 bước quan trọng
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

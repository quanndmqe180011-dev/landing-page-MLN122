"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowLeft } from "lucide-react"

export default function Chapter2Section() {
  return (
    <section id="chapter2" className="relative bg-[#0a0a0a]">
      {/* Section 1: Introduction */}
      <IntroSection />

      {/* Section 2: Commodity Foundation */}
      <CommoditySection />

      {/* Section 3: Dual Nature of Labor */}
      <LaborSection />

      {/* Section 4: Value & Productivity */}
      <ValueProductivitySection />

      {/* Section 5: Law of Value */}
      <LawOfValueSection />

      {/* Section 6: Economic Actors */}
      <EconomicActorsSection />

      {/* Section 7: Economic Cycle */}
      <EconomicCycleSection />

      {/* Section 8: Practical Application */}
      <PracticalApplicationSection />

      {/* Section 9: Ending */}
      <EndingSection />
    </section>
  )
}

function IntroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src="/classical-still-life-painting-with-gold-coins--tra.jpg"
          alt="Classical trade painting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans text-5xl md:text-7xl font-bold text-[#e8dcc8] mb-6"
        >
          Hàng Hóa và Tiền Tệ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-[#d4af37] max-w-3xl italic"
        >
          Khám phá bản chất của hàng hóa, giá trị lao động và vai trò của tiền tệ trong nền kinh tế thị trường.
        </motion.p>
      </motion.div>
    </div>
  )
}

function CommoditySection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 0.5], [-100, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 1])
  const imageX = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center">
      <motion.div style={{ x: imageX }} className="absolute inset-0">
        <img
          src="/vintage-marketplace--people-exchanging-goods--warm.jpg"
          alt="Marketplace exchange"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </motion.div>

      <motion.div style={{ x, opacity: textOpacity }} className="relative z-10 max-w-3xl px-8 md:px-16">
        <h2 className="font-mono text-4xl md:text-6xl font-bold text-[#d4af37] mb-8">
          Hàng Hóa – Nền Tảng Của Kinh Tế Thị Trường
        </h2>
        <p className="text-xl md:text-2xl text-[#e8dcc8] leading-relaxed">
          Hàng hóa là sản phẩm lao động được sản xuất để trao đổi. Nó có hai thuộc tính:{" "}
          <span className="text-[#d4af37] font-semibold">giá trị sử dụng</span> (tính hữu ích) và{" "}
          <span className="text-[#d4af37] font-semibold">giá trị</span> (lao động kết tinh trong đó).
        </p>
      </motion.div>
    </div>
  )
}

function LaborSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const line1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const line2Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const line3Opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src="/old-workshop-scene--craftsmen-working--fabric-text.jpg"
          alt="Workshop scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center">
        <motion.h2
          style={{ opacity: line1Opacity }}
          className="font-mono text-4xl md:text-6xl font-bold text-[#d4af37] mb-12"
        >
          Lao Động Là Nguồn Gốc Của Giá Trị
        </motion.h2>

        <motion.p
          style={{ opacity: line2Opacity }}
          className="text-2xl md:text-3xl text-[#e8dcc8] mb-6 leading-relaxed"
        >
          <span className="text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">Lao động trừu tượng</span> tạo ra
          giá trị,
        </motion.p>

        <motion.p style={{ opacity: line3Opacity }} className="text-2xl md:text-3xl text-[#e8dcc8] leading-relaxed">
          trong khi <span className="text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">lao động cụ thể</span>{" "}
          tạo ra giá trị sử dụng.
          <br />
          Cùng nhau, chúng định nghĩa bản chất của sản xuất trong xã hội hàng hóa.
        </motion.p>
      </div>
    </div>
  )
}

function ValueProductivitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const progressWidth = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/industrial-revolution-painting--factory-with-worke.jpg"
          alt="Industrial scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
      </div>

      <motion.div style={{ opacity: textOpacity }} className="relative z-10 max-w-4xl mx-auto px-8 md:px-16">
        <h2 className="font-mono text-4xl md:text-6xl font-bold text-[#d4af37] mb-8">
          Giá Trị & Năng Suất – Mối Quan Hệ Biện Chứng
        </h2>
        <p className="text-xl md:text-2xl text-[#e8dcc8] leading-relaxed mb-8">
          Giá trị của hàng hóa tỷ lệ nghịch với năng suất lao động xã hội. Năng suất cao hơn làm giảm giá trị trên mỗi
          đơn vị nhưng tăng tổng giá trị được tạo ra.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-[#d4af37] font-mono text-lg w-32">Năng suất</span>
            <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div style={{ width: progressWidth }} className="h-full bg-[#d4af37]" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#e8dcc8] font-mono text-lg w-32">Giá trị đơn vị</span>
            <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                style={{ width: useTransform(scrollYProgress, [0.3, 0.7], ["100%", "30%"]) }}
                className="h-full bg-[#e8dcc8]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function LawOfValueSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scaleRotate = useTransform(scrollYProgress, [0.2, 0.6], [-15, 0])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/classical-balance-scale-painting--soft-golden-tone.jpg"
          alt="Balance scale"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center">
        <motion.div style={{ rotate: scaleRotate }} className="mb-12">
          <div className="text-8xl">⚖️</div>
        </motion.div>

        <motion.h2
          style={{ opacity: textOpacity }}
          className="font-mono text-4xl md:text-6xl font-bold text-[#d4af37] mb-8"
        >
          Quy Luật Giá Trị – Người Điều Tiết Vô Hình
        </motion.h2>

        <motion.p style={{ opacity: textOpacity }} className="text-xl md:text-2xl text-[#e8dcc8] leading-relaxed">
          Giá cả dao động xung quanh giá trị, điều chỉnh cung và cầu. Cơ chế tự điều tiết này phân bổ lao động và khuyến
          khích đổi mới.
        </motion.p>
      </div>
    </div>
  )
}

function EconomicActorsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const actor1 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1])
  const actor2 = useTransform(scrollYProgress, [0.35, 0.5], [0, 1])
  const actor3 = useTransform(scrollYProgress, [0.5, 0.65], [0, 1])
  const actor4 = useTransform(scrollYProgress, [0.65, 0.8], [0, 1])

  const actors = [
    { name: "Người sản xuất", opacity: actor1, icon: "🏭" },
    { name: "Người tiêu dùng", opacity: actor2, icon: "🛒" },
    { name: "Nhà đầu tư", opacity: actor3, icon: "💼" },
    { name: "Nhà nước", opacity: actor4, icon: "🏛️" },
  ]

  return (
    <div ref={ref} className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/classical-depiction-of-merchants--workers--investo.jpg"
          alt="Economic actors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-16">
        <h2 className="font-mono text-4xl md:text-6xl font-bold text-[#d4af37] mb-12 text-center">
          Các Chủ Thể Kinh Tế
        </h2>
        <p className="text-xl md:text-2xl text-[#e8dcc8] text-center mb-16 leading-relaxed">
          Người sản xuất, người tiêu dùng, nhà đầu tư và nhà nước – mỗi bên đóng vai trò trong sự vận động liên tục của
          nền kinh tế.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {actors.map((actor, i) => (
            <motion.div
              key={i}
              style={{ opacity: actor.opacity }}
              className="text-center p-6 bg-black/40 rounded-lg border border-[#d4af37]/30"
            >
              <div className="text-6xl mb-4">{actor.icon}</div>
              <h3 className="font-mono text-xl text-[#d4af37]">{actor.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EconomicCycleSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 360])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/gold-coins-flowing-in-circular-motion--oil-paintin.jpg"
          alt="Economic cycle"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center">
        <motion.div style={{ rotate }} className="mb-12 inline-block">
          <div className="text-8xl">🔄</div>
        </motion.div>

        <motion.h2
          style={{ opacity: textOpacity }}
          className="font-mono text-4xl md:text-6xl font-bold text-[#d4af37] mb-8"
        >
          Chu Trình Kinh Tế
        </motion.h2>

        <motion.p style={{ opacity: textOpacity }} className="text-xl md:text-2xl text-[#e8dcc8] leading-relaxed">
          Tiền → Hàng hóa → Nhiều tiền hơn (T–H–T'). Chu trình liên tục này thúc đẩy mở rộng kinh tế và tái đầu tư.
        </motion.p>
      </div>
    </div>
  )
}

function PracticalApplicationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/mural-classical-painting-showing-workers-and-leade.jpg"
          alt="Practical application"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </motion.div>

      <motion.div style={{ opacity: textOpacity }} className="relative z-10 max-w-4xl mx-auto px-8 md:px-16">
        <h2 className="font-mono text-4xl md:text-6xl font-bold text-[#d4af37] mb-8">Từ Lý Thuyết Đến Thực Tiễn</h2>
        <p className="text-xl md:text-2xl text-[#e8dcc8] leading-relaxed">
          Kinh tế chính trị Mác không chỉ là lý thuyết – nó định hướng chính sách và phát triển hướng tới một xã hội
          công bằng và bền vững.
        </p>
      </motion.div>
    </div>
  )
}

function EndingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1])
  const vignette = useTransform(scrollYProgress, [0.5, 1], [0, 0.8])

  return (
    <div ref={ref} className="relative py-32 flex items-center justify-center">
      <div className="absolute inset-0 bg-black" />
      <motion.div
        style={{ opacity: vignette }}
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"
      />

      <motion.div style={{ opacity: textOpacity }} className="relative z-10 text-center px-8 max-w-4xl">
        <p className="text-2xl md:text-4xl text-[#e8dcc8] leading-relaxed mb-12 italic">
          "Hiểu được bản chất của giá trị và sản xuất là bước đầu tiên để làm chủ động lực của nền kinh tế hiện đại."
        </p>

        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        </motion.a>
      </motion.div>
    </div>
  )
}

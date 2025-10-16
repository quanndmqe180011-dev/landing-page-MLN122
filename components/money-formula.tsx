"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check, Copy } from "lucide-react"

export default function MoneyFormula() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const [copied, setCopied] = useState(false)

  const formula = "H - T - H' (Hàng hóa → Tiền → Hàng hóa mới)"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formula)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="relative p-8 rounded-lg bg-gradient-to-br from-[#FFC000]/20 to-[#FFC000]/5 border-2 border-[#FFC000]"
    >
      <h3 className="font-mono text-2xl font-bold text-[#FFC000] mb-6 text-center">Công thức Lưu thông Tiền tệ</h3>

      <div className="relative group">
        <div className="font-mono text-2xl md:text-3xl text-center text-white bg-black/50 p-6 rounded-lg border border-[#FFC000]/50">
          {formula}
        </div>

        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#FFC000]/20 hover:bg-[#FFC000]/30 transition-colors border border-[#FFC000]/50"
          aria-label="Copy formula"
        >
          {copied ? <Check className="w-5 h-5 text-[#FFC000]" /> : <Copy className="w-5 h-5 text-[#FFC000]" />}
        </button>

        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-16 right-4 bg-[#FFC000] text-black px-3 py-1 rounded text-sm font-mono"
          >
            Đã sao chép!
          </motion.div>
        )}
      </div>

      <div className="mt-6 space-y-3 text-gray-300">
        <p className="leading-relaxed">
          <strong className="text-[#FFC000]">H:</strong> Hàng hóa ban đầu (người bán đem ra thị trường)
        </p>
        <p className="leading-relaxed">
          <strong className="text-[#FFC000]">T:</strong> Tiền tệ (trung gian trao đổi)
        </p>
        <p className="leading-relaxed">
          <strong className="text-[#FFC000]">H':</strong> Hàng hóa mới (người mua nhận được)
        </p>
      </div>
    </motion.div>
  )
}

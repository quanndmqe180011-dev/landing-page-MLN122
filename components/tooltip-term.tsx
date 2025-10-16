"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface TooltipTermProps {
  term: string
  definition: string
  color?: string
}

export default function TooltipTerm({ term, definition, color = "#00FFFF" }: TooltipTermProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span className="relative inline-block">
      <span
        className="border-b-2 border-dashed cursor-help transition-colors duration-200"
        style={{
          borderColor: isHovered ? color : "#666",
          color: isHovered ? color : "inherit",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {term}
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-4 rounded-lg shadow-2xl"
            style={{
              backgroundColor: "#1A1A1A",
              border: `2px solid ${color}`,
              boxShadow: `0 0 20px ${color}40`,
            }}
          >
            <div className="text-sm text-gray-200 leading-relaxed">{definition}</div>
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 rotate-45"
              style={{
                backgroundColor: "#1A1A1A",
                borderRight: `2px solid ${color}`,
                borderBottom: `2px solid ${color}`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

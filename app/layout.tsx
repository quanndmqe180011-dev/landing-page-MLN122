import type React from "react"
import type { Metadata } from "next"
import { Space_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SmoothScrollWrapper from "@/components/smooth-scroll-wrapper"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Kinh tế Chính trị Mác - Lênin",
  description: "Hành trình khám phá các quy luật của thị trường - Từ nguyên thủy đến hiện đại",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="dark">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        <Analytics />
      </body>
    </html>
  )
}

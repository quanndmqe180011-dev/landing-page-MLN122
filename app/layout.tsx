import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro, Space_Mono, Cinzel } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SmoothScrollWrapper from "@/components/smooth-scroll-wrapper"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-mono",
})

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
})

const cinzel = Cinzel({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
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
      <body className={`${beVietnamPro.variable} ${spaceMono.variable} ${cinzel.variable} font-sans antialiased`}>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        <Analytics />
      </body>
    </html>
  )
}

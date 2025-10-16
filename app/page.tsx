import Hero from "@/components/hero"
import Chapter2Section from "@/components/chapter2-section"
import EconomicActors from "@/components/economic-actors"
import ScrollProgress from "@/components/scroll-progress"
import Navigation from "@/components/navigation"
import BackToTop from "@/components/back-to-top"
import Conclusion from "@/components/conclusion"
import MindMapTimeline from "@/components/mind-map-timeline"
import EconomicSystemMotion from "@/components/economic-system-motion"
import ChapterTransition from "@/components/chapter-transition"

export default function Home() {
  return (
    <main className="relative bg-[#1A1A1A] text-white">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <MindMapTimeline />
      <Chapter2Section />
      <ChapterTransition />
      <EconomicActors />
      <EconomicSystemMotion />
      <Conclusion />
      <BackToTop />
    </main>
  )
}

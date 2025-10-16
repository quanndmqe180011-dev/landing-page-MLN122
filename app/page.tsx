import Hero from "@/components/hero"
import Chapter2Section from "@/components/chapter2-section"
import EconomicActors from "@/components/economic-actors"
import ScrollProgress from "@/components/scroll-progress"
import Navigation from "@/components/navigation"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="relative bg-[#1A1A1A] text-white">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Chapter2Section />
      <EconomicActors />
      <BackToTop />
    </main>
  )
}

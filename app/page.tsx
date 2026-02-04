import FixoreITAssistant from "@/components/fixoreit-assistant"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Clients from "@/components/clients"
import About from "@/components/about"
import OurServices from "@/components/our-services"
import Mission from "@/components/mission"
import Industries from "@/components/industries"
import Stats from "@/components/stats"
import WhatsApp from "@/components/whatsapp"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Clients />
      <About />
      <OurServices />
      <Mission />
      <Industries />
      <Stats />
      <WhatsApp />
      <Footer />
      <FixoreITAssistant />
    </main>
  )
}

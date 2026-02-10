import FixoreITAssistant from "@/components/fixoreit-assistant"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Clients from "@/components/clients"
import About from "@/components/about"
import OurServices from "@/components/our-services"
import Mission from "@/components/mission"
import Industries from "@/components/industries"
import Infrastructure from "@/components/infrastructure"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import ScrollToTop from "@/components/scroll-to-top"
import WhatsApp from "@/components/whatsapp"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Clients />
      <About />
      <OurServices />
      <Mission />
      <Industries />
      <Infrastructure />
      <Stats />
      <Testimonials />
      <FAQ />
      <ScrollToTop />
      <WhatsApp />
      <Footer />
      <FixoreITAssistant />
    </main>
  )
}

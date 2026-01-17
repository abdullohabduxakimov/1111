import Header from "@/components/header"
import CaseStudies from "@/components/case-studies"
import Footer from "@/components/footer"
import Image from "next/image"
import type React from "react"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div
        className="relative w-full h-64 md:h-96 overflow-hidden animate-slide-in-top"
        style={{ "--animation-delay": "0s" } as React.CSSProperties}
      >
        {/* Background Image */}
        <Image
          src="/contact-banner-bg.jpg"
          alt="Portfolio banner background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <h1
            className="text-3xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg animate-slide-in-top"
            style={{ "--animation-delay": "0.2s" } as React.CSSProperties}
          >
            Our Portfolio
          </h1>
        </div>
      </div>
      <CaseStudies />
      <Footer />
    </main>
  )
}

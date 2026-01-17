import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div
        className="relative w-full h-64 md:h-96 overflow-hidden animate-slide-in-top"
        style={{ "--animation-delay": "0s" } as React.CSSProperties}
      >
        {/* Background Image */}
        <Image
          src="/blog-banner-bg.jpg"
          alt="News banner background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">News</h1>
        </div>
      </div>

      <div className="min-h-96 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Coming soon...</p>
      </div>
      <Footer />
    </main>
  )
}

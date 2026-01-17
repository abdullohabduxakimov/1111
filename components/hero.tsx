"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  const handleContactClick = () => {
    router.push("/contact")
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/v0_image-2-fehDSzlpf0q1piapn4OU0PMfWUXUqZ.png"
        alt="IT Professional working on servers"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl space-y-6 bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <div
            className="inline-flex items-center bg-blue-500/20 text-white px-5 py-2 rounded-full w-fit hover:scale-105 transition-transform duration-300 border border-blue-400/50"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span className="text-sm font-semibold">Advanced Infrastructure Solutions ~</span>
          </div>

          <h1
            className="text-[42px] lg:text-[42px] font-bold text-white leading-tight tracking-tight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Enterprise IT Infrastructure for Modern Businesses
          </h1>

          <p
            className="text-lg text-white leading-relaxed max-w-2xl font-light"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Secure, scalable solutions with global expertise. We deliver mission-critical IT infrastructure across APAC,
            EMEA, LATHAM & North America.
          </p>

          <button
            onClick={handleContactClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 w-fit shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl transform active:scale-95"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

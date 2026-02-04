"use client"

import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Hero() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleContactClick = () => {
    router.push("/contact")
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/v0_image-2-fehDSzlpf0q1piapn4OU0PMfWUXUqZ.png"
        alt="IT Professional working on servers"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/40" />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full pt-20">
          {/* Left Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Enterprise IT Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Where deep tech
              <br />
              <span className="text-gradient">meets expertise</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl">
              We deliver mission-critical IT infrastructure across APAC, EMEA, LATAM & North America. 
              Secure, scalable solutions built for modern enterprises.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleContactClick}
                className="group bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play size={16} className="text-white ml-0.5" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400 mb-4">Trusted by industry leaders</p>
              <div className="flex items-center gap-8 opacity-60">
                <span className="text-white font-semibold text-lg">Nike</span>
                <span className="text-white font-semibold text-lg">Adidas</span>
                <span className="text-white font-semibold text-lg">Tesco</span>
                <span className="text-white font-semibold text-lg">Primark</span>
              </div>
            </div>
          </div>

          {/* Right Stats Cards */}
          <div 
            className={`hidden lg:grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { number: "3000+", label: "Engineers Worldwide", delay: "0ms" },
              { number: "20+", label: "Countries Served", delay: "100ms" },
              { number: "99.9%", label: "Uptime Guarantee", delay: "200ms" },
              { number: "4.8/5", label: "Client Rating", delay: "300ms" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 cursor-default"
                style={{ transitionDelay: stat.delay }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-teal-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  )
}

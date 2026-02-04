"use client"

import { useEffect, useRef, useState } from "react"

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, startCounting])

  return count
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: 3000, suffix: "+", label: "Engineers Worldwide" },
    { number: 20, suffix: "+", label: "Countries Served" },
    { number: 99, suffix: ".9%", label: "Uptime Guarantee" },
    { number: 4, suffix: ".8/5", label: "Client Rating" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/office-team.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-400 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal-400 rounded-full" />
            <span className="text-sm font-semibold tracking-wide">Our Impact</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
            Your Trusted IT Partner for
            <span className="text-teal-400"> Global Deployments</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and client satisfaction across the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const count = useCountUp(stat.number, 2000, isVisible)
            return (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500"
                data-aos="zoom-in"
                data-aos-delay={`${i * 100}`}
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-teal-400 transition-colors">
                  {count}
                  <span className="text-teal-400">{stat.suffix}</span>
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

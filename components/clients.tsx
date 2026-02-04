"use client"

import { useEffect, useRef } from "react"

export default function Clients() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const clients = [
    { name: "Primark", src: "/primark-logo.png" },
    { name: "Nike", src: "/nike-logo.png" },
    { name: "Polo Ralph Lauren", src: "/polo-ralph-lauren-logo.png" },
    { name: "Adidas", src: "/adidas-logo.png" },
    { name: "Tesco", src: "/tesco-logo.png" },
  ]

  // Duplicate for seamless infinite scroll
  const allClients = [...clients, ...clients]

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">
            Trusted Partners
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 font-[family-name:var(--font-space-grotesk)]">
            Powering Success for Industry Leaders
          </h2>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          {/* Scrolling container */}
          <div 
            ref={scrollRef}
            className="flex gap-16 items-center animate-[scroll_30s_linear_infinite] hover:pause"
            style={{
              width: "fit-content",
            }}
          >
            {allClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={client.src || "/placeholder.svg"}
                  alt={client.name}
                  className="h-12 lg:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

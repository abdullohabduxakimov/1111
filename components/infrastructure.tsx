"use client"

import Image from "next/image"
import { useState } from "react"

export default function Infrastructure() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const infrastructures = []

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infrastructures.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-96"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="zoom-in"
              data-aos-delay={`${i * 150}`}
            >
              {/* Image Container with Overlay */}
              <div className="relative w-full h-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

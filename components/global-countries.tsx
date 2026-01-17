"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function GlobalCountries() {
  const [visibleCount, setVisibleCount] = useState(24)

  const countries = [
    { name: "United States" },
    { name: "Canada" },
    { name: "United Kingdom" },
    { name: "Germany" },
    { name: "France" },
    { name: "Spain" },
    { name: "Italy" },
    { name: "Netherlands" },
    { name: "Belgium" },
    { name: "Switzerland" },
    { name: "Sweden" },
    { name: "Norway" },
    { name: "Denmark" },
    { name: "Finland" },
    { name: "Poland" },
    { name: "Czech Republic" },
    { name: "Australia" },
    { name: "New Zealand" },
    { name: "Japan" },
    { name: "Singapore" },
    { name: "India" },
    { name: "UAE" },
    { name: "Saudi Arabia" },
    { name: "Mexico" },
    { name: "Brazil" },
    { name: "Argentina" },
    { name: "Chile" },
    { name: "South Africa" },
    { name: "Nigeria" },
    { name: "Kenya" },
    { name: "Pakistan" },
    { name: "Bangladesh" },
    { name: "Malaysia" },
    { name: "Thailand" },
    { name: "Philippines" },
    { name: "Vietnam" },
    { name: "Indonesia" },
    { name: "South Korea" },
    { name: "Hong Kong" },
    { name: "Taiwan" },
    { name: "Russia" },
    { name: "Turkey" },
    { name: "Greece" },
    { name: "Portugal" },
    { name: "Ireland" },
    { name: "Austria" },
    { name: "Romania" },
    { name: "Bulgaria" },
    { name: "Serbia" },
    { name: "Croatia" },
    { name: "Slovenia" },
    { name: "Hungary" },
    { name: "Slovakia" },
    { name: "Lithuania" },
    { name: "Latvia" },
    { name: "Estonia" },
    { name: "Ukraine" },
    { name: "Belarus" },
    { name: "Kazakhstan" },
    { name: "Uzbekistan" },
    { name: "Turkmenistan" },
    { name: "Georgia" },
    { name: "Armenia" },
    { name: "Azerbaijan" },
    { name: "Lebanon" },
    { name: "Jordan" },
    { name: "Egypt" },
    { name: "Morocco" },
    { name: "Tunisia" },
    { name: "Algeria" },
    { name: "Bahrain" },
    { name: "Qatar" },
    { name: "Kuwait" },
    { name: "Oman" },
    { name: "Yemen" },
    { name: "Colombia" },
    { name: "Peru" },
    { name: "Ecuador" },
    { name: "Venezuela" },
    { name: "Costa Rica" },
    { name: "Panama" },
    { name: "Dominican Republic" },
    { name: "Jamaica" },
    { name: "Trinidad and Tobago" },
    { name: "Sri Lanka" },
    { name: "Nepal" },
    { name: "Mauritius" },
    { name: "Zambia" },
    { name: "Zimbabwe" },
    { name: "Angola" },
    { name: "Mozambique" },
    { name: "Tanzania" },
    { name: "Uganda" },
    { name: "Ethiopia" },
    { name: "Ghana" },
    { name: "Senegal" },
  ]

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0">
        <Image src="/images/image.png" alt="World map" fill className="object-cover object-center" priority />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
            Serving <span className="text-blue-300">92+ Countries</span> Worldwide
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Our global presence ensures that wherever your business operates, we're there to support your IT
            infrastructure and drive your success.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {countries.slice(0, visibleCount).map((country, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 hover:bg-white/15 hover:border-white/40 transition-all duration-300 cursor-default"
              data-aos="fade-up"
              data-aos-delay={`${(index % 12) * 50}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">{country.name}</span>
                <ChevronRight size={18} className="text-blue-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < countries.length && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount(visibleCount + 12)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Load More Countries
            </button>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-4xl font-bold text-blue-300">92+</div>
              <p className="text-white/80">Countries Served</p>
            </div>
            <div className="space-y-2" data-aos="zoom-in" data-aos-delay="300">
              <div className="text-4xl font-bold text-blue-300">3000+</div>
              <p className="text-white/80">Engineers Worldwide</p>
            </div>
            <div className="space-y-2" data-aos="zoom-in" data-aos-delay="400">
              <div className="text-4xl font-bold text-blue-300">24/7</div>
              <p className="text-white/80">Global Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

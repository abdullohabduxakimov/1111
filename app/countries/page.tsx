"use client"

import CountriesHero from "@/components/countries-hero"
import CountriesGrid from "@/components/countries-grid"

export default function CountriesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video Container */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_TRkuHELcUKdJqZspjiWfuM4eK0hR/Qi7Kpi4kNYwklZOs6csu_g/public/videos/countries-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <CountriesHero />
        <CountriesGrid />
      </div>
    </main>
  )
}

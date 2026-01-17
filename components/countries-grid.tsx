"use client"

import { useMemo } from "react"
import CountryCard from "./country-card"

const COUNTRIES = [
  { name: "United States", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Norway", flag: "🇳🇴" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Czech Republic", flag: "🇨🇿" },
  { name: "Austria", flag: "🇦🇹" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Greece", flag: "🇬🇷" },
  { name: "Hungary", flag: "🇭🇺" },
  { name: "Romania", flag: "🇷🇴" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Russia", flag: "🇷🇺" },
  { name: "India", flag: "🇮🇳" },
  { name: "China", flag: "🇨🇳" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Argentina", flag: "🇦🇷" },
  { name: "Colombia", flag: "🇨🇴" },
  { name: "Chile", flag: "🇨🇱" },
  { name: "Peru", flag: "🇵🇪" },
  { name: "Ecuador", flag: "🇪🇨" },
  { name: "Venezuela", flag: "🇻🇪" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Israel", flag: "🇮🇱" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "Sri Lanka", flag: "🇱🇰" },
  { name: "Taiwan", flag: "🇹🇼" },
  { name: "Hong Kong", flag: "🇭🇰" },
  { name: "Laos", flag: "🇱🇦" },
  { name: "Myanmar", flag: "🇲🇲" },
  { name: "Iceland", flag: "🇮🇸" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "Luxembourg", flag: "🇱🇺" },
  { name: "Malta", flag: "🇲🇹" },
  { name: "Cyprus", flag: "🇨🇾" },
  { name: "Croatia", flag: "🇭🇷" },
  { name: "Slovenia", flag: "🇸🇮" },
  { name: "Slovakia", flag: "🇸🇰" },
  { name: "Bosnia", flag: "🇧🇦" },
  { name: "Serbia", flag: "🇷🇸" },
  { name: "Montenegro", flag: "🇲🇪" },
  { name: "Albania", flag: "🇦🇱" },
  { name: "North Macedonia", flag: "🇲🇰" },
  { name: "Bulgaria", flag: "🇧🇬" },
  { name: "Georgia", flag: "🇬🇪" },
  { name: "Azerbaijan", flag: "🇦🇿" },
  { name: "Kazakhstan", flag: "🇰🇿" },
  { name: "Uzbekistan", flag: "🇺🇿" },
  { name: "Ukraine", flag: "🇺🇦" },
  { name: "Belarus", flag: "🇧🇾" },
  { name: "Moldova", flag: "🇲🇩" },
]

export default function CountriesGrid() {
  const staggeredCountries = useMemo(
    () =>
      COUNTRIES.map((country, index) => ({
        ...country,
        delay: (index % 12) * 50,
      })),
    [],
  )

  return (
    <section
      className="relative px-4 py-20 pb-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/00/8d/7f/008d7fa038ef2ef428097edea50427db.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center text-white">
          <p className="mb-4 text-sm font-semibold text-blue-400">🌍 Global Presence</p>
          <h2 className="text-4xl md:text-5xl font-bold">Where We Serve</h2>
          <p className="mt-4 text-gray-200">
            Serving over <span className="font-bold text-blue-400">92+ countries</span> worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {staggeredCountries.map((country) => (
            <CountryCard
              key={country.name}
              name={country.name}
              flag={country.flag}
              delay={country.delay}
            />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-300">
          92+ countries served • Expanding globally
        </p>
      </div>
    </section>
  )
}

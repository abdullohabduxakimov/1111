"use client"

import type React from "react"
import { useState } from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Settings, Building2, Headphones, Wrench, Leaf } from "lucide-react"
import { COUNTRY_FLAGS } from "@/data/country-flags"

export default function ServicesPageClient() {
  const services = [
    {
      id: 1,
      slug: "it-management-deployment",
      title: "IT Management & Deployment",
      description:
        "We manage your IT systems from start to finish, including deployment, upgrades, and moving your infrastructure on-site. We keep your business running without interruptions.",
      image: "/services/global-collaboration.png",
      icon: Settings,
      features: ["System Deployment", "Infrastructure Management", "Continuous Monitoring"],
    },
    {
      id: 2,
      slug: "infrastructure-build-configuration",
      title: "Infrastructure Build & Configuration",
      description:
        "FIXORE IT Global designs, builds, and improves IT systems to match your goals, ensuring high performance, easy growth, and full compliance with all standards.",
      image: "/services/construction-planning.png",
      icon: Building2,
      features: ["Network Design", "Performance Optimization", "Scalability"],
    },
    {
      id: 3,
      slug: "end-user-network-support",
      title: "End-User & Network Support",
      description:
        "Multi-level IT support is provided through onsite, remote, and network services, ensuring fast response and reliable operation for every business.",
      image: "/services/customer-support.png",
      icon: Headphones,
      features: ["24/7 Support", "Remote Assistance", "On-site Response"],
    },
    {
      id: 4,
      slug: "maintenance-imac-services",
      title: "Maintenance & IMAC Services",
      description:
        "Break-fix and full IMAC (Install, Move, Add, Change) services that keep daily IT work running smoothly and reduce downtime as much as possible.",
      image: "/services/hardware-repair.png",
      icon: Wrench,
      features: ["Hardware Repair", "System Updates", "Preventive Maintenance"],
    },
    {
      id: 5,
      slug: "asset-lifecycle-recycling",
      title: "Asset Lifecycle & Recycling",
      description:
        "Safe and responsible IT asset management that covers removal, reuse, disposal, and resale — following strict data security and environmental standards.",
      image: "/services/asset-management.png",
      icon: Leaf,
      features: ["Asset Tracking", "Data Security", "Eco-Friendly Disposal"],
    },
  ]

  const [flippedCountries, setFlippedCountries] = useState<{ [key: string]: boolean }>({})

  const toggleFlip = (country: string) => {
    setFlippedCountries((prev) => ({
      ...prev,
      [country]: !prev[country],
    }))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 animate-fade-in">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className="mb-6 inline-block animate-slide-in-top"
              style={{ "--animation-delay": "0.1s" } as React.CSSProperties}
            >
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Our Services</span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance animate-slide-in-top"
              style={{ "--animation-delay": "0.2s" } as React.CSSProperties}
            >
              Comprehensive IT Solutions for Your Business
            </h1>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-in-top"
              style={{ "--animation-delay": "0.3s" } as React.CSSProperties}
            >
              At FIXORE IT Global, we help companies keep their IT running smoothly — anywhere in the world. We manage,
              support, and improve your technology systems so your team can work without stress or delay.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const IconComponent = service.icon
                return (
                  <Link href={`/services/${service.slug}`} key={service.id}>
                    <div
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out h-full min-h-96 cursor-pointer animate-zoom-in"
                      style={{ "--animation-delay": `${idx * 0.1}s` } as React.CSSProperties}
                    >
                      {/* Background Image with Overlay */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url('${service.image}')`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40 opacity-85 group-hover:opacity-95 transition-opacity duration-500"></div>
                      </div>

                      {/* Content Container */}
                      <div className="relative h-full flex flex-col justify-between p-8 text-white">
                        {/* Top Icon Section */}
                        <div>
                          <div className="w-14 h-14 rounded-lg bg-blue-500/25 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/40">
                            <IconComponent className="w-7 h-7 text-blue-300" />
                          </div>
                        </div>

                        {/* Middle & Bottom Content */}
                        <div className="space-y-5">
                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-bold leading-tight">{service.title}</h3>

                          {/* Description - Always visible on larger cards */}
                          <p className="text-base text-gray-100 leading-relaxed">{service.description}</p>

                          {/* Features List */}
                          <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-sm text-gray-200">
                                <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>

                          {/* Learn More Button */}
                          <div className="inline-flex items-center gap-2 font-semibold text-blue-300 group-hover:text-blue-200 transition-colors duration-300 pt-2">
                            Learn More
                            <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>

                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-500 pointer-events-none"></div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-16 md:py-24 px-4 animate-slide-in-bottom relative overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/polluted-earth-concept-with-thick-haze-covering-planet_1279686-7743.jpg?semt=ais_hybrid&w=740&q=80')",
              backgroundAttachment: "fixed",
              filter: "blur(4px)", // added blur filter to make the background less prominent
            }}
          ></div>

          {/* Adjusted overlay for better image visibility */}
          <div className="absolute inset-0 bg-black/35 -z-10"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-4 animate-slide-in-top"
                style={{ "--animation-delay": "0.1s" } as React.CSSProperties}
              >
                Serving <span className="text-blue-300">92+ Countries</span> Worldwide
              </h2>
              <p
                className="text-lg text-gray-100 max-w-3xl mx-auto animate-slide-in-top"
                style={{ "--animation-delay": "0.2s" } as React.CSSProperties}
              >
                Our global presence ensures that wherever your business operates, we're there to support your IT
                infrastructure and drive your success.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "United States",
                "Canada",
                "United Kingdom",
                "Germany",
                "France",
                "Spain",
                "Italy",
                "Netherlands",
                "Belgium",
                "Switzerland",
                "Sweden",
                "Norway",
                "Denmark",
                "Finland",
                "Poland",
                "Czech Republic",
                "Australia",
                "New Zealand",
                "Japan",
                "Singapore",
                "India",
                "UAE",
                "Saudi Arabia",
                "Mexico",
                "Brazil",
                "Argentina",
                "Chile",
                "South Africa",
                "Nigeria",
                "Kenya",
                "Pakistan",
                "Bangladesh",
                "Malaysia",
                "Thailand",
                "Philippines",
                "Vietnam",
                "Indonesia",
                "South Korea",
                "Hong Kong",
                "Taiwan",
                "Russia",
                "Turkey",
                "Greece",
                "Portugal",
                "Ireland",
                "Austria",
                "Romania",
                "Bulgaria",
                "Serbia",
                "Croatia",
                "Slovenia",
                "Hungary",
                "Slovakia",
                "Lithuania",
                "Latvia",
                "Estonia",
                "Ukraine",
                "Belarus",
                "Kazakhstan",
                "Uzbekistan",
                "Turkmenistan",
                "Georgia",
                "Armenia",
                "Azerbaijan",
                "Lebanon",
                "Jordan",
                "Egypt",
                "Morocco",
                "Tunisia",
                "Algeria",
                "Bahrain",
                "Qatar",
                "Kuwait",
                "Oman",
                "Yemen",
                "Colombia",
                "Peru",
                "Ecuador",
                "Venezuela",
                "Costa Rica",
                "Panama",
                "Dominican Republic",
                "Jamaica",
                "Trinidad and Tobago",
                "Sri Lanka",
                "Nepal",
                "Mauritius",
                "Zambia",
                "Zimbabwe",
                "Angola",
                "Mozambique",
                "Tanzania",
                "Uganda",
                "Ethiopia",
                "Ghana",
                "Senegal",
              ].map((country, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setFlippedCountries((prev) => ({ ...prev, [country]: true }))}
                  onMouseLeave={() => setFlippedCountries((prev) => ({ ...prev, [country]: false }))}
                  className="h-24 cursor-pointer"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-500"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedCountries[country] ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* Front - Country Name with Glass Morphism */}
                    <div
                      className="absolute w-full h-full p-4 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-center hover:border-blue-300 hover:shadow-lg hover:bg-white/30 transition-all duration-300 group flex items-center justify-center animate-fade-in"
                      style={
                        {
                          backfaceVisibility: "hidden",
                          "--animation-delay": `${(idx % 12) * 0.05}s`,
                        } as React.CSSProperties
                      }
                    >
                      <p className="text-sm font-medium text-white group-hover:text-blue-100">{country}</p>
                    </div>

                    {/* Back - Flag Image */}
                    <div
                      className="absolute w-full h-full p-4 bg-blue-600/40 backdrop-blur-md rounded-lg border border-blue-300/30 text-center flex items-center justify-center overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <img
                        src={COUNTRY_FLAGS[country] || "/placeholder.svg"}
                        alt={`${country} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 animate-slide-in-bottom">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-slide-in-top"
              style={{ "--animation-delay": "0.1s" } as React.CSSProperties}
            >
              Ready to Transform Your IT?
            </h2>
            <p
              className="text-lg text-gray-600 mb-8 animate-slide-in-top"
              style={{ "--animation-delay": "0.2s" } as React.CSSProperties}
            >
              Let's discuss how our services can support your business goals and drive growth.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-bottom"
              style={{ "--animation-delay": "0.3s" } as React.CSSProperties}
            >
              <Link href="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get a Quote
                </button>
              </Link>
              <a href="tel:+442039845374">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Schedule a Call
                </button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

"use client"

import type React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface CaseStudy {
  id: number
  title: string
  subtitle: string
  location: string
  serviceType: string
  sla: string
  scope: string
  results: string[]
  image: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "JD Sports",
    subtitle: "IT Dispatch & Office Setup",
    location: "Germany",
    serviceType: "On-Site IT Dispatch & Setup",
    sla: "Next Business Day",
    scope:
      "Office setup and desktop deployment across Germany. Troubleshooting hardware, software, and connectivity issues. Installation of user desks and system configurations.",
    results: ["99% system uptime", "Faster response and improved productivity", "Reduced IT operational costs"],
    image: "/modern-office-setup-with-computers-and-desks.jpg",
  },
  {
    id: 2,
    title: "Ralph Lauren",
    subtitle: "Ad-Hoc IT Support & Printer Assessment",
    location: "France",
    serviceType: "Ad-Hoc IT Support & Printer Assessment",
    sla: "Next Business Day",
    scope:
      "Assessment and support of IT facilities. Checks of Wi-Fi, Zoom Rooms, and meeting areas. Retrieval and reimaging of Mac devices for redeployment.",
    results: [
      "Improved uptime of meeting rooms and systems",
      "Faster turnaround of IT assets",
      "Better visibility and control of local IT inventory",
    ],
    image: "/office-printer-assessment.png",
  },
  {
    id: 3,
    title: "Nike",
    subtitle: "Equipment Replacement & Network Setup",
    location: "Poland",
    serviceType: "Equipment Replacement & Network Setup",
    sla: "Same Business Day",
    scope:
      "Onsite installation and configuration of network infrastructure and devices. Validation of system performance, connectivity, and network placement throughout facilities. Return of old components via courier.",
    results: [
      "SLA met with same-day completion",
      "Zero downtime during installation",
      "Fully compliant process with proper network placement and logistics",
    ],
    image: "/nike-equipment-replacement-network-setup.jpg",
  },
]

function CaseStudyCard({
  study,
  expandedId,
  setExpandedId,
  onLearnMore,
}: {
  study: CaseStudy
  expandedId: number | null
  setExpandedId: (id: number | null) => void
  onLearnMore: (study: CaseStudy) => void
}) {
  const isExpanded = expandedId === study.id

  const accentBg = study.id === 1 ? "bg-orange-100" : study.id === 2 ? "bg-purple-100" : "bg-orange-100"
  const checkColor = study.id === 1 ? "text-orange-600" : study.id === 2 ? "text-purple-600" : "text-orange-600"
  const buttonColor =
    study.id === 1
      ? "bg-orange-600 hover:bg-orange-700"
      : study.id === 2
        ? "bg-purple-600 hover:bg-purple-700"
        : "bg-orange-600 hover:bg-orange-700"
  const gradientOverlay =
    study.id === 1
      ? "from-orange-600 to-orange-700"
      : study.id === 2
        ? "from-purple-600 to-purple-700"
        : "from-orange-600 to-orange-700"

  return (
    <div
      className="group h-full animate-zoom-in"
      style={{ "--animation-delay": `${(study.id - 1) * 0.15}s` } as React.CSSProperties}
    >
      <div className="h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
        {/* Image Section */}
        <div className="relative w-full h-64 overflow-hidden bg-gray-200">
          <Image
            src={study.image || "/placeholder.svg"}
            alt={study.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${gradientOverlay} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
          ></div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8 flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                <p className="text-gray-600 font-semibold mt-1">{study.subtitle}</p>
              </div>
              <span
                className={`${accentBg} text-gray-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap`}
              >
                {study.location}
              </span>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-3 mb-6 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold flex-shrink-0 pt-0.5">Service:</span>
              <span className="text-gray-700">{study.serviceType}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold flex-shrink-0 pt-0.5">SLA:</span>
              <span className="text-gray-700">{study.sla}</span>
            </div>
          </div>

          {/* Scope - Expandable */}
          <div className="mb-6">
            <button onClick={() => setExpandedId(isExpanded ? null : study.id)} className="text-left w-full group/btn">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2 group-hover/btn:text-blue-600 transition-colors">
                Scope
                <ArrowRight
                  size={16}
                  className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                />
              </h4>
            </button>
            {isExpanded && (
              <p className="text-gray-600 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                {study.scope}
              </p>
            )}
          </div>

          {/* Key Results */}
          <div className="space-y-3 flex-1">
            <h4 className="font-semibold text-gray-900">Key Results</h4>
            <ul className="space-y-2">
              {study.results.map((result, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 animate-slide-in-left"
                  style={{ "--animation-delay": `${0.3 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <CheckCircle2 size={16} className={`${checkColor} flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-700 text-sm">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onLearnMore(study)}
            className={`mt-8 w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn ${buttonColor} hover:shadow-lg hover:scale-105`}
          >
            Learn More
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)

  return (
    <>
      <section className="w-full py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center justify-center mb-4 animate-slide-in-top"
              style={{ "--animation-delay": "0s" } as React.CSSProperties}
            >
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                ~ Our Success Stories
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance animate-slide-in-top"
              style={{ "--animation-delay": "0.1s" } as React.CSSProperties}
            >
              Proven Results Across <span className="text-blue-600">Global Enterprises</span>
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto animate-slide-in-top"
              style={{ "--animation-delay": "0.2s" } as React.CSSProperties}
            >
              Discover how we've transformed IT operations for leading brands worldwide with rapid response, expert
              solutions, and measurable impact.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                expandedId={expandedId}
                setExpandedId={setExpandedId}
                onLearnMore={setSelectedStudy}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div
            className="mt-20 text-center p-12 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 animate-slide-in-bottom"
            style={{ "--animation-delay": "0.5s" } as React.CSSProperties}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your IT Operations?</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Join hundreds of enterprises leveraging our expertise for reliable, rapid IT solutions across the globe.
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for Learn More */}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 relative max-h-[85vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6">
              <Image
                src={selectedStudy.image || "/placeholder.svg"}
                alt={selectedStudy.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedStudy.title}</h3>
                <p className="text-gray-600 font-semibold mt-1">{selectedStudy.subtitle}</p>
              </div>
              <span className="bg-orange-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                {selectedStudy.location}
              </span>
            </div>

            <div className="h-px bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 mb-6"></div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Service Type</h4>
                <p className="text-gray-600">{selectedStudy.serviceType}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">SLA</h4>
                <p className="text-gray-600">{selectedStudy.sla}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Scope</h4>
                <p className="text-gray-600">{selectedStudy.scope}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
              <ul className="space-y-2">
                {selectedStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedStudy(null)}
              className="w-full mt-4 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

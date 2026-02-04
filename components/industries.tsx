"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ArrowUpRight } from "lucide-react"

const industries = [
  {
    image: "/images/industry-1.jpg",
    alt: "Networking and telecommunications infrastructure",
    title: "Networking & Telecommunications",
    description: "Building robust systems capable of handling massive data volumes with 5G and legacy network integration.",
    details: `We provide comprehensive networking solutions for telecommunications companies, ensuring reliable global connectivity and infrastructure excellence.

Our telecommunications expertise includes:
- Network Infrastructure Design: Building robust systems capable of handling massive data volumes
- 5G & Legacy Network Integration: Supporting both modern and established network technologies
- Carrier-Grade Equipment: Installation and maintenance of professional-grade networking hardware
- Redundancy & Failover: Multiple paths and backup systems to ensure service continuity
- Performance Optimization: Traffic management and optimization for maximum throughput
- Security Implementation: Protecting your network from threats while maintaining performance`,
  },
  {
    image: "/images/industry-2.jpg",
    alt: "Data center and server management",
    title: "Data Centers & Cloud",
    description: "Managing data centers handling petabytes of data with 99.99% uptime guarantees for enterprise clients.",
    details: `Our data center expertise ensures reliable server operations, optimal performance, and continuous availability for your mission-critical systems.

Our data center capabilities include:
- Facility Design & Optimization: Creating energy-efficient, secure data center environments
- Server Deployment: Installing and configuring thousands of servers in coordinated timelines
- Redundancy Systems: Multiple power supplies, cooling systems, and network connections
- Disaster Recovery: Backup facilities and replication for complete business continuity
- Environmental Control: Climate control, humidity management, and power conditioning
- Physical Security: Access control, surveillance, and threat detection systems`,
  },
  {
    image: "/images/industry-3.jpg",
    alt: "Advanced technology and digital infrastructure",
    title: "Digital Transformation",
    description: "Modernizing legacy systems and workflows for digital-first operations with cloud architecture.",
    details: `From cloud solutions to digital transformation initiatives, we help businesses leverage cutting-edge technology to drive innovation and competitive advantage.

Our technology solutions include:
- Cloud Architecture: Designing and implementing hybrid and multi-cloud strategies
- Digital Transformation: Modernizing legacy systems and workflows for digital-first operations
- Infrastructure as Code: Automating infrastructure provisioning for consistency and scalability
- Microservices Architecture: Building scalable, maintainable application platforms
- DevOps Implementation: Streamlining development and operations for faster deployment cycles
- Cybersecurity Architecture: Comprehensive security frameworks protecting your digital assets`,
  },
]

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<(typeof industries)[0] | null>(null)

  return (
    <>
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              <span className="text-sm font-semibold tracking-wide">Industries</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-space-grotesk)]">
              Industries
              <span className="text-gradient"> We Serve</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Delivering infrastructure excellence across telecommunications, data centers, and advanced technology sectors.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedIndustry(industry)}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedIndustry && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIndustry(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-8 relative max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIndustry(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
              <Image
                src={selectedIndustry.image}
                alt={selectedIndustry.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-space-grotesk)]">
              {selectedIndustry.title}
            </h3>
            
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{selectedIndustry.details}</p>

            <button
              onClick={() => setSelectedIndustry(null)}
              className="w-full mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

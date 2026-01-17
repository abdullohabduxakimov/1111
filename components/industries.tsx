"use client"

import Image from "next/image"
import { useState } from "react"
import { Plus, X } from "lucide-react"

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndustry, setSelectedIndustry] = useState<(typeof industries)[0] | null>(null)

  const industries = [
    {
      image: "/images/industry-1.jpg",
      alt: "Networking and telecommunications infrastructure",
      title: "Networking & Telecommunications",
      details: `We provide comprehensive networking solutions for telecommunications companies, ensuring reliable global connectivity and infrastructure excellence.

Our telecommunications expertise includes:
• Network Infrastructure Design: Building robust systems capable of handling massive data volumes
• 5G & Legacy Network Integration: Supporting both modern and established network technologies
• Carrier-Grade Equipment: Installation and maintenance of professional-grade networking hardware
• Redundancy & Failover: Multiple paths and backup systems to ensure service continuity
• Performance Optimization: Traffic management and optimization for maximum throughput
• Security Implementation: Protecting your network from threats while maintaining performance
• Compliance & Standards: Adherence to telecommunications industry regulations worldwide
• Global Support: 24/7 technical support across all time zones for uninterrupted service
• Fiber Optic Networks: Installation and maintenance of high-speed fiber infrastructure
• Monitoring & Analytics: Real-time network performance tracking and capacity planning

We've supported major telecommunications providers with infrastructure upgrades and ongoing management across multiple continents.`,
    },
    {
      image: "/images/industry-2.jpg",
      alt: "Data center and server management",
      title: "Data Centers & Server Management",
      details: `Our data center expertise ensures reliable server operations, optimal performance, and continuous availability for your mission-critical systems.

Our data center capabilities include:
• Facility Design & Optimization: Creating energy-efficient, secure data center environments
• Server Deployment: Installing and configuring thousands of servers in coordinated timelines
• Redundancy Systems: Multiple power supplies, cooling systems, and network connections
• Disaster Recovery: Backup facilities and replication for complete business continuity
• Environmental Control: Climate control, humidity management, and power conditioning
• Physical Security: Access control, surveillance, and threat detection systems
• Capacity Management: Monitoring utilization and planning for growth and scalability
• Performance Optimization: Fine-tuning systems for maximum efficiency and responsiveness
• Regular Maintenance: Preventive maintenance schedules to extend equipment lifespan
• Monitoring & Reporting: 24/7 monitoring with detailed performance reports and analytics

We manage data centers handling petabytes of data with 99.99% uptime guarantees for enterprise clients.`,
    },
    {
      image: "/images/industry-3.jpg",
      alt: "Advanced technology and digital infrastructure",
      title: "Technology & Digital Infrastructure",
      details: `From cloud solutions to digital transformation initiatives, we help businesses leverage cutting-edge technology to drive innovation and competitive advantage.

Our technology solutions include:
• Cloud Architecture: Designing and implementing hybrid and multi-cloud strategies
• Digital Transformation: Modernizing legacy systems and workflows for digital-first operations
• Infrastructure as Code: Automating infrastructure provisioning for consistency and scalability
• Microservices Architecture: Building scalable, maintainable application platforms
• API Development: Creating robust APIs for seamless system integration
• DevOps Implementation: Streamlining development and operations for faster deployment cycles
• Containerization: Docker and Kubernetes implementation for efficient resource utilization
• AI & Machine Learning Infrastructure: Setting up systems to support advanced analytics
• Cybersecurity Architecture: Comprehensive security frameworks protecting your digital assets
• Technology Consulting: Strategic guidance on technology adoption and digital roadmaps

We partner with organizations to build future-proof infrastructure that supports innovation and growth.`,
    },
  ]

  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Industries We Serve</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Delivering infrastructure excellence across telecommunications, data centers, and advanced technology
            sectors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const isHovered = hoveredIndex === index
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  <div className="relative h-64 rounded-lg overflow-hidden bg-gray-200 mb-4">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.alt}
                      fill
                      className="object-cover transition-opacity duration-300"
                      style={{ opacity: isHovered ? 0.7 : 1 }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Plus size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                  <p className="text-gray-600 text-sm">{industry.details.substring(0, 100)}...</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {selectedIndustry && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative max-h-96 overflow-y-auto">
            <button
              onClick={() => setSelectedIndustry(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedIndustry.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-wrap">{selectedIndustry.details}</p>
            <button
              onClick={() => setSelectedIndustry(null)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

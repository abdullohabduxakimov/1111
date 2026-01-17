"use client"

import { useState } from "react"
import { X, Headphones, Network, Truck, Server, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Headphones,
    title: "IT support & Desktop Services",
    subtitle: "24/7 Expert Assistance",
    description:
      "Reliable onsite & remote IT support, covering hardware troubleshooting, system upgrades, and end-user assistance to keep your business running smoothly",
    details: `Our comprehensive IT support and desktop services are designed to keep your organization running at peak efficiency. We offer 24/7 assistance with rapid response times for critical issues, ensuring minimal downtime for your business operations.

Our services include:
• Hardware Diagnostics & Repair: Troubleshooting and fixing desktops, laptops, printers, and peripherals
• Software Management: Installation, updates, patches, and license management
• System Upgrades: RAM expansion, SSD upgrades, and OS updates to extend device lifespan
• End-User Support: Helpdesk assistance, training, and technical guidance for your staff
• Proactive Maintenance: Regular system checks, virus scans, and performance optimization
• Remote & On-Site Support: Flexible support delivery based on your needs

We work with all major operating systems and hardware manufacturers to provide seamless support across your entire IT infrastructure.`,
  },
  {
    id: 2,
    icon: Network,
    title: "Network infrastructure & Security",
    subtitle: "Enterprise-Grade Protection",
    description:
      "End-to-end network design, installation, optimization, and security solutions, ensuring reliable connectivity, performance, and protection for businesses worldwide",
    details: `We design and deploy secure, scalable networks tailored to your business requirements. Our network infrastructure solutions ensure reliable connectivity, optimal performance, and comprehensive security against evolving cyber threats.

Key components include:
• Network Design & Architecture: Custom solutions based on your business size and requirements
• Installation & Configuration: Professional setup of routers, switches, firewalls, and access points
• Advanced Firewall Protection: Multi-layer security to protect against unauthorized access and attacks
• VPN Solutions: Secure remote access for distributed teams with encryption and authentication
• Wireless Networks: Enterprise-grade Wi-Fi with coverage, speed, and security optimization
• Network Monitoring: 24/7 monitoring for performance issues and security threats
• Disaster Recovery: Backup connectivity and failover solutions to prevent service interruptions
• Compliance Support: Ensuring your network meets industry regulations and standards

Our security solutions protect your data while maintaining network performance and user productivity.`,
  },
  {
    id: 3,
    icon: Truck,
    title: "Global IT Rollouts & Deployments",
    subtitle: "Multi-Country Coordination",
    description:
      "Seamless hardware and network deployments across multiple locations, ensuring efficient IT rollouts, office setups, and multi-country support for global businesses.",
    details: `We specialize in managing complex IT deployments across multiple countries and time zones. Whether you're opening new offices or upgrading existing locations, we handle every aspect with precision and minimal business disruption.

Our deployment services cover:
• Planning & Logistics: Coordinating equipment procurement, shipping, and inventory management
• Site Survey & Preparation: Assessing locations and preparing infrastructure requirements
• Hardware Installation: Professional setup of servers, workstations, network equipment, and peripherals
• Network Configuration: Setting up local networks and connecting to corporate systems
• User Setup: Creating accounts, installing software, and configuring workstations for productivity
• Testing & Validation: Comprehensive testing to ensure all systems work correctly before handoff
• Staff Training: Hands-on training for your teams on new equipment and systems
• Documentation: Complete documentation and asset tracking for all deployed equipment

We've successfully deployed IT infrastructure for global enterprises, managing multiple locations simultaneously with coordinated timelines and quality assurance.`,
  },
  {
    id: 4,
    icon: Server,
    title: "Server and Data Centre Support",
    subtitle: "99.9% Uptime Guaranteed",
    description:
      "Comprehensive server installation, maintenance, and troubleshooting services, along with data backup, recovery, ensuring IT infrastructure remains reliable and secure.",
    details: `Our data center and server support services ensure your critical business systems operate reliably 24/7. We provide complete lifecycle management from installation through optimization and troubleshooting.

Our comprehensive services include:
• Server Installation & Configuration: Professional setup and optimization of physical and virtual servers
• Hardware Maintenance: Regular maintenance, component upgrades, and preventive care
• Operating System Management: Patch management, security updates, and OS optimization
• Backup Solutions: Automated backup systems with redundancy and multiple storage locations
• Disaster Recovery: Comprehensive recovery plans and regular testing to ensure business continuity
• Performance Monitoring: Real-time monitoring with alerts for capacity and performance issues
• Troubleshooting & Support: Rapid response to critical issues with experienced engineers
• Capacity Planning: Analyzing growth trends to ensure infrastructure meets future demands
• Data Security: Encryption, access controls, and compliance with data protection regulations
• Load Balancing: Distribution of traffic across multiple servers for improved performance

We maintain uptime targets of 99.9%+ with proactive maintenance and rapid incident response.`,
  },
]

export default function OurServices() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <>
      <section className="w-full py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">~ Our Services</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Enterprise Solutions
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Built to Scale
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Comprehensive IT services designed for global enterprises. From infrastructure to deployment, we deliver
              excellence across all regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isHovered = hoveredId === service.id

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  <div
                    className={`relative h-full rounded-2xl border border-white/10 p-8 transition-all duration-500 cursor-pointer backdrop-blur-xl ${
                      isHovered
                        ? "bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border-cyan-400/40 shadow-2xl shadow-cyan-500/20 transform scale-105"
                        : "bg-gradient-to-br from-white/5 to-white/[0.02] border-white/5 hover:border-white/10 shadow-lg"
                    }`}
                  >
                    <div
                      className={`mb-6 inline-flex p-3 rounded-xl transition-all duration-500 ${
                        isHovered
                          ? "bg-gradient-to-br from-cyan-400 to-blue-400 text-background shadow-lg shadow-cyan-500/50"
                          : "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400"
                      }`}
                    >
                      <IconComponent size={32} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{service.title}</h3>
                    <p className="text-sm text-cyan-400/80 font-medium mb-4">{service.subtitle}</p>

                    <p
                      className={`text-sm leading-relaxed transition-all duration-300 text-gray-600 ${
                        isHovered ? "opacity-0 h-0 mb-0" : "opacity-100 h-auto mb-6"
                      }`}
                    >
                      {service.description}
                    </p>

                    <button
                      onClick={() => setSelectedService(service)}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                        isHovered
                          ? "text-white opacity-100 translate-y-0"
                          : "text-cyan-400 opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card border border-white/10 rounded-3xl max-w-2xl w-full p-8 relative max-h-[85vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-900 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30">
                <selectedService.icon size={40} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-cyan-400 font-semibold uppercase tracking-widest">
                  {selectedService.subtitle}
                </p>
                <h3 className="text-2xl font-bold mt-1 text-foreground">{selectedService.title}</h3>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-blue-500/0 mb-6"></div>

            <div className="prose prose-invert max-w-none text-gray-900/90">
              <p className="text-base leading-relaxed mb-6 whitespace-pre-line text-white">{selectedService.details}</p>
            </div>

            <button
              onClick={() => setSelectedService(null)}
              className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-background font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

"use client"

import { useState } from "react"
import { X, Headphones, Network, Truck, Server, ArrowRight, ArrowUpRight } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Headphones,
    title: "IT Support & Desktop Services",
    subtitle: "24/7 Expert Assistance",
    description:
      "Reliable onsite & remote IT support, covering hardware troubleshooting, system upgrades, and end-user assistance.",
    details: `Our comprehensive IT support and desktop services are designed to keep your organization running at peak efficiency. We offer 24/7 assistance with rapid response times for critical issues, ensuring minimal downtime for your business operations.

Our services include:
- Hardware Diagnostics & Repair: Troubleshooting and fixing desktops, laptops, printers, and peripherals
- Software Management: Installation, updates, patches, and license management
- System Upgrades: RAM expansion, SSD upgrades, and OS updates to extend device lifespan
- End-User Support: Helpdesk assistance, training, and technical guidance for your staff
- Proactive Maintenance: Regular system checks, virus scans, and performance optimization
- Remote & On-Site Support: Flexible support delivery based on your needs`,
  },
  {
    id: 2,
    icon: Network,
    title: "Network Infrastructure & Security",
    subtitle: "Enterprise-Grade Protection",
    description:
      "End-to-end network design, installation, optimization, and security solutions for reliable connectivity.",
    details: `We design and deploy secure, scalable networks tailored to your business requirements. Our network infrastructure solutions ensure reliable connectivity, optimal performance, and comprehensive security against evolving cyber threats.

Key components include:
- Network Design & Architecture: Custom solutions based on your business size and requirements
- Installation & Configuration: Professional setup of routers, switches, firewalls, and access points
- Advanced Firewall Protection: Multi-layer security to protect against unauthorized access and attacks
- VPN Solutions: Secure remote access for distributed teams with encryption and authentication
- Wireless Networks: Enterprise-grade Wi-Fi with coverage, speed, and security optimization
- Network Monitoring: 24/7 monitoring for performance issues and security threats`,
  },
  {
    id: 3,
    icon: Truck,
    title: "Global IT Rollouts & Deployments",
    subtitle: "Multi-Country Coordination",
    description:
      "Seamless hardware and network deployments across multiple locations with efficient multi-country support.",
    details: `We specialize in managing complex IT deployments across multiple countries and time zones. Whether you're opening new offices or upgrading existing locations, we handle every aspect with precision and minimal business disruption.

Our deployment services cover:
- Planning & Logistics: Coordinating equipment procurement, shipping, and inventory management
- Site Survey & Preparation: Assessing locations and preparing infrastructure requirements
- Hardware Installation: Professional setup of servers, workstations, network equipment, and peripherals
- Network Configuration: Setting up local networks and connecting to corporate systems
- User Setup: Creating accounts, installing software, and configuring workstations for productivity
- Testing & Validation: Comprehensive testing to ensure all systems work correctly before handoff`,
  },
  {
    id: 4,
    icon: Server,
    title: "Server & Data Centre Support",
    subtitle: "99.9% Uptime Guaranteed",
    description:
      "Comprehensive server installation, maintenance, troubleshooting, data backup, and recovery services.",
    details: `Our data center and server support services ensure your critical business systems operate reliably 24/7. We provide complete lifecycle management from installation through optimization and troubleshooting.

Our comprehensive services include:
- Server Installation & Configuration: Professional setup and optimization of physical and virtual servers
- Hardware Maintenance: Regular maintenance, component upgrades, and preventive care
- Operating System Management: Patch management, security updates, and OS optimization
- Backup Solutions: Automated backup systems with redundancy and multiple storage locations
- Disaster Recovery: Comprehensive recovery plans and regular testing to ensure business continuity
- Performance Monitoring: Real-time monitoring with alerts for capacity and performance issues`,
  },
]

export default function OurServices() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <>
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              <span className="text-sm font-semibold tracking-wide">Our Services</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-space-grotesk)]">
              Enterprise Solutions
              <span className="text-gradient"> Built to Scale</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Comprehensive IT services designed for global enterprises. From infrastructure to deployment, 
              we deliver excellence across all regions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon

              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  {/* Number */}
                  <div className="absolute top-8 right-8 text-6xl font-bold text-slate-100 group-hover:text-teal-50 transition-colors font-[family-name:var(--font-space-grotesk)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6 inline-flex p-4 rounded-2xl bg-teal-500/10 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <p className="text-sm text-teal-600 font-medium mb-2">{service.subtitle}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors font-[family-name:var(--font-space-grotesk)]">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>

                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-8 relative max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-teal-500/10">
                <selectedService.icon size={32} className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-teal-600 font-semibold">{selectedService.subtitle}</p>
                <h3 className="text-2xl font-bold text-slate-900 font-[family-name:var(--font-space-grotesk)]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="h-px bg-slate-200 mb-6" />

            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{selectedService.details}</p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="/contact"
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 border border-slate-200 text-slate-600 font-semibold rounded-full hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

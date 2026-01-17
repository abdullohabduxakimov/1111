"use client"

import Header from "@/components/header"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useParams } from "next/navigation"

const serviceDetails: Record<string, any> = {
  "it-management-deployment": {
    title: "IT Management & Deployment",
    description:
      "We manage your IT systems from start to finish, including deployment, upgrades, and moving your infrastructure on-site. We keep your business running without interruptions.",
    image: "/services/global-collaboration.png",
    features: ["System Deployment", "Infrastructure Management", "Continuous Monitoring"],
    fullDescription:
      "Our comprehensive IT Management & Deployment service ensures that your technology infrastructure is configured, maintained, and upgraded with minimal business disruption. We handle everything from initial system setup to ongoing optimization, keeping your operations running smoothly 24/7.",
    benefits: [
      "Reduced downtime and business interruptions",
      "Seamless system upgrades and migrations",
      "Continuous infrastructure monitoring",
      "Expert deployment management",
      "Compliance with industry standards",
      "Scalable solutions for growing businesses",
    ],
    process: [
      "Initial assessment of current infrastructure",
      "Deployment strategy planning",
      "Implementation and testing",
      "Training and documentation",
      "Ongoing monitoring and support",
    ],
  },
  "infrastructure-build-configuration": {
    title: "Infrastructure Build & Configuration",
    description:
      "FIXORE IT Global designs, builds, and improves IT systems to match your goals, ensuring high performance, easy growth, and full compliance with all standards.",
    image: "/services/construction-planning.png",
    features: ["Network Design", "Performance Optimization", "Scalability"],
    fullDescription:
      "Building a robust IT infrastructure requires expert planning, design, and execution. We create customized infrastructure solutions that align with your business objectives while ensuring scalability, security, and high performance.",
    benefits: [
      "Custom-designed solutions for your needs",
      "High-performance network architecture",
      "Scalable infrastructure for growth",
      "Enhanced security posture",
      "Cost-effective resource allocation",
      "Future-proof technology stack",
    ],
    process: [
      "Business requirements analysis",
      "Infrastructure design and architecture",
      "Security and compliance planning",
      "Implementation and configuration",
      "Performance testing and optimization",
    ],
  },
  "end-user-network-support": {
    title: "End-User & Network Support",
    description:
      "Multi-level IT support is provided through onsite, remote, and network services, ensuring fast response and reliable operation for every business.",
    image: "/services/customer-support.png",
    features: ["24/7 Support", "Remote Assistance", "On-site Response"],
    fullDescription:
      "Your employees need reliable IT support when issues arise. Our multi-level support approach combines remote assistance, on-site services, and network monitoring to keep your team productive and minimize downtime.",
    benefits: [
      "24/7 support availability",
      "Fast response times",
      "Expert technical assistance",
      "Remote and on-site options",
      "Network monitoring and health checks",
      "User training and documentation",
    ],
    process: [
      "Ticket creation and prioritization",
      "Initial remote diagnostics",
      "Resolution or escalation",
      "On-site visit if needed",
      "Follow-up and verification",
    ],
  },
  "maintenance-imac-services": {
    title: "Maintenance & IMAC Services",
    description:
      "Break-fix and full IMAC (Install, Move, Add, Change) services that keep daily IT work running smoothly and reduce downtime as much as possible.",
    image: "/services/hardware-repair.png",
    features: ["Hardware Repair", "System Updates", "Preventive Maintenance"],
    fullDescription:
      "Keeping your IT infrastructure healthy requires regular maintenance and quick response to issues. Our IMAC services cover all aspects of hardware and software management, from preventive maintenance to emergency repairs.",
    benefits: [
      "Preventive maintenance reduces breakdowns",
      "Quick hardware repair services",
      "System update management",
      "Equipment installation and configuration",
      "Hardware asset tracking",
      "Extended equipment lifespan",
    ],
    process: [
      "Preventive maintenance scheduling",
      "Regular system updates",
      "Hardware diagnostics",
      "Repair or replacement",
      "Documentation and tracking",
    ],
  },
  "asset-lifecycle-recycling": {
    title: "Asset Lifecycle & Recycling",
    description:
      "Safe and responsible IT asset management that covers removal, reuse, disposal, and resale — following strict data security and environmental standards.",
    image: "/services/asset-management.png",
    features: ["Asset Tracking", "Data Security", "Eco-Friendly Disposal"],
    fullDescription:
      "Managing IT assets throughout their lifecycle is essential for cost control, security, and environmental responsibility. We provide comprehensive asset lifecycle management from procurement through secure disposal.",
    benefits: [
      "Secure data destruction",
      "Equipment reuse and resale",
      "Environmental compliance",
      "Cost recovery through asset resale",
      "Complete asset tracking",
      "Compliance with data protection regulations",
    ],
    process: [
      "Asset inventory assessment",
      "Data security certification",
      "Preparation for reuse or recycling",
      "Secure transportation",
      "Documentation and reporting",
    ],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const service = serviceDetails[slug]

  if (!service) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <Link href="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
              Back to Services
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${service.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
          </div>

          <div className="relative h-full flex flex-col justify-between p-6 md:p-12 text-white max-w-7xl mx-auto w-full">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold w-fit"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </Link>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">{service.title}</h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl">{service.description}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{service.fullDescription}</p>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2"></span>
                    <span className="text-gray-800">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step: string, idx: number) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-gray-800 text-lg">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how this service can help your business achieve its goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                    Get a Quote
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300">
                    Schedule a Call
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

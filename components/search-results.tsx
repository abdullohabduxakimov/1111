"use client"

import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const searchableContent = [
    // Services
    {
      id: 1,
      title: "IT support & Desktop Services",
      description:
        "Reliable onsite & remote IT support, covering hardware troubleshooting, system upgrades, and end-user assistance to keep your business running smoothly",
      category: "Service",
      path: "/services",
    },
    {
      id: 2,
      title: "Network infrastructure & Security",
      description:
        "End-to-end network design, installation, optimization, and security solutions, ensuring reliable connectivity, performance, and protection for businesses worldwide",
      category: "Service",
      path: "/services",
    },
    {
      id: 3,
      title: "Global IT Rollouts & Deployments",
      description:
        "Seamless hardware and network deployments across multiple locations, ensuring efficient IT rollouts, office setups, and multi-country support for global businesses.",
      category: "Service",
      path: "/services",
    },
    {
      id: 4,
      title: "Server and Data Centre Support",
      description:
        "Comprehensive server installation, maintenance, and troubleshooting services, along with data backup, recovery, ensuring IT infrastructure remains reliable and secure.",
      category: "Service",
      path: "/services",
    },

    // About page
    {
      id: 5,
      title: "Our Mission",
      description:
        "At Fixore IT, our mission is to consistently meet the IT needs of our clients and become a top performer in the competitive global market.",
      category: "About",
      path: "/about",
    },
    {
      id: 6,
      title: "Our Vision",
      description:
        "We envision a future where technology empowers every business to achieve its full potential. Our vision is to be the most trusted IT solutions partner globally.",
      category: "About",
      path: "/about",
    },
    {
      id: 7,
      title: "Our Values",
      description:
        "We are committed to delivering exceptional value through reliability, expertise, and customer-centric solutions. Our core values include integrity, innovation, teamwork, and continuous improvement.",
      category: "About",
      path: "/about",
    },

    // Features and Benefits
    {
      id: 8,
      title: "Desktop Support",
      description: "24/7 desktop and endpoint support with rapid response times for critical issues",
      category: "Service",
      path: "/services",
    },
    {
      id: 9,
      title: "Cloud Solutions",
      description: "Secure cloud migration and management services for businesses of all sizes",
      category: "Solution",
      path: "/services",
    },
    {
      id: 10,
      title: "Cybersecurity",
      description: "Advanced security and threat protection to safeguard your business from evolving cyber threats",
      category: "Service",
      path: "/services",
    },
    {
      id: 11,
      title: "Data Backup & Recovery",
      description: "Reliable data backup and recovery solutions with multiple redundancy options",
      category: "Solution",
      path: "/services",
    },
    {
      id: 12,
      title: "Network Management",
      description: "Managed network services and 24/7 monitoring for optimal performance",
      category: "Service",
      path: "/services",
    },
    {
      id: 13,
      title: "IT Infrastructure Support",
      description: "Comprehensive IT infrastructure solutions for enterprises and growing businesses",
      category: "Service",
      path: "/services",
    },

    // Company Info
    {
      id: 14,
      title: "Fixore IT Global Services",
      description:
        "Leading IT service provider in Central Europe, offering unparalleled IT, Network, and Desktop support services to clients around the world",
      category: "Company",
      path: "/about",
    },
    {
      id: 15,
      title: "13 Years of Excellence",
      description: "We have over a decade of experience delivering exceptional IT solutions and support services",
      category: "Company",
      path: "/about",
    },
    {
      id: 16,
      title: "Global Team",
      description: "105+ team members dedicated to providing world-class IT services across multiple countries",
      category: "Company",
      path: "/about",
    },
    {
      id: 17,
      title: "Award Winning Company",
      description: "Recognized with 15+ industry awards for our excellence in IT service delivery",
      category: "Company",
      path: "/about",
    },
    {
      id: 18,
      title: "3000+ Engineers Worldwide",
      description: "Our extensive network of skilled engineers supports global IT deployments and infrastructure",
      category: "Company",
      path: "/about",
    },
    {
      id: 19,
      title: "Client Satisfaction",
      description:
        "Trusted by clients across 20+ countries with 4.8/5 engineer rating and thousands of positive reviews",
      category: "Company",
      path: "/about",
    },

    // Additional Services Content
    {
      id: 20,
      title: "Hardware Diagnostics & Repair",
      description: "Professional troubleshooting and repair of desktops, laptops, printers, and peripherals",
      category: "Service",
      path: "/services",
    },
    {
      id: 21,
      title: "Software Management",
      description: "Installation, updates, patches, and license management for business software",
      category: "Service",
      path: "/services",
    },
    {
      id: 22,
      title: "System Upgrades",
      description: "RAM expansion, SSD upgrades, and OS updates to extend device lifespan",
      category: "Service",
      path: "/services",
    },
    {
      id: 23,
      title: "End-User Support & Training",
      description: "Helpdesk assistance, training, and technical guidance for your staff",
      category: "Service",
      path: "/services",
    },
    {
      id: 24,
      title: "Proactive Maintenance",
      description: "Regular system checks, virus scans, and performance optimization",
      category: "Service",
      path: "/services",
    },
    {
      id: 25,
      title: "VPN Solutions",
      description: "Secure remote access for distributed teams with encryption and authentication",
      category: "Service",
      path: "/services",
    },
    {
      id: 26,
      title: "Enterprise Wireless Networks",
      description: "Enterprise-grade Wi-Fi with coverage, speed, and security optimization",
      category: "Service",
      path: "/services",
    },
    {
      id: 27,
      title: "Network Monitoring & Security",
      description: "24/7 monitoring for performance issues and security threats",
      category: "Service",
      path: "/services",
    },
    {
      id: 28,
      title: "Global IT Deployments",
      description: "Managing complex IT deployments across multiple countries and time zones",
      category: "Service",
      path: "/services",
    },
    {
      id: 29,
      title: "Server Installation & Configuration",
      description: "Professional setup and optimization of physical and virtual servers",
      category: "Service",
      path: "/services",
    },
    {
      id: 30,
      title: "Disaster Recovery Planning",
      description: "Comprehensive recovery plans and regular testing to ensure business continuity",
      category: "Service",
      path: "/services",
    },
  ]

  const results = useMemo(() => {
    if (!query.trim()) return []
    const lowerQuery = query.toLowerCase()
    return searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery),
    )
  }, [query])

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Search Results</h1>
        <p className="text-xl text-gray-600">
          {query ? `Results for "${query}"` : "Enter a search term to get started"}
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <a
              key={result.id}
              href={result.path}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-400 transition"
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-3">
                {result.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{result.title}</h3>
              <p className="text-gray-600">{result.description}</p>
            </a>
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-600 mb-4">No results found for "{query}"</p>
          <p className="text-gray-500">Try searching for different keywords or browse our services.</p>
        </div>
      ) : null}
    </div>
  )
}

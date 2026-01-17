"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  ArrowRight,
  Award,
  Users,
  Trophy,
  CheckSquare,
  Headphones,
  Zap,
  BarChart3,
  Code,
  Settings,
  MessageCircle,
} from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission")

  const tabContent = {
    mission: {
      title: "Our Mission",
      description:
        "At Fixore IT, our mission is to consistently meet the IT needs of our clients and become a top performer in the competitive global market. We aim to be the leading IT service provider worldwide, known for our expertise, reliability, and focus on customer satisfaction. By delivering outstanding service and innovative solutions, we strive to build lasting relationships and help our clients succeed in an ever-evolving technological landscape.",
    },
    vision: {
      title: "Our Vision",
      description:
        "We envision a future where technology empowers every business to achieve its full potential. Our vision is to be the most trusted IT solutions partner globally, recognized for delivering cutting-edge services that drive efficiency, innovation, and growth. We strive to create an environment where our clients feel supported at every step of their digital transformation journey.",
    },
    value: {
      title: "Our Value",
      description:
        "We are committed to delivering exceptional value through reliability, expertise, and customer-centric solutions. Our core values include integrity, innovation, teamwork, and continuous improvement. We believe in building long-term partnerships based on trust and mutual success.",
    },
  }

  const stats = [
    { number: "105+", label: "Team members", icon: Users },
    { number: "15+", label: "Winning awards", icon: Trophy },
    { number: "10k+", label: "Completed project", icon: CheckSquare },
    { number: "850+", label: "Client's reviews", icon: MessageCircle },
  ]

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="fixed inset-0 w-full h-screen bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/london-background.png')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="fixed inset-0 w-full h-screen bg-black/30 -z-10" />

      <Header />

      {/* Main About Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-12" data-aos="fade-up" data-aos-delay="100">
            <span className="text-blue-600 font-semibold text-sm">About us</span>
            <ArrowRight size={18} className="text-blue-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div
              className="space-y-8 bg-white/75 backdrop-blur-2xl p-8 rounded-2xl shadow-2xl border border-white/50"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {/* Heading */}
              <h1 className="text-4xl font-bold text-background">
                About <span className="text-blue-600">Company</span>
              </h1>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">
                Fixore IT stands at the forefront of the IT industry in Central Europe, offering unparalleled IT,
                Network, and Desktop support services to clients around the world. Founded with a vision to simplify
                technology for businesses, we have consistently delivered solutions that drive efficiency, innovation.
              </p>

              {/* Tabs */}
              <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
                <div className="flex gap-6 border-b border-gray-200">
                  {Object.entries(tabContent).map(([key, content]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`pb-4 font-semibold transition-colors duration-200 border-b-2 ${
                        activeTab === key
                          ? "text-blue-600 border-b-blue-600"
                          : "text-gray-700 border-b-transparent hover:text-blue-600"
                      }`}
                    >
                      {content.title}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="text-gray-700 leading-relaxed">
                  <p>{tabContent[activeTab as keyof typeof tabContent].description}</p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative flex justify-center items-center" data-aos="fade-left" data-aos-delay="200">
              {/* Blue Curved Shape Background */}
              <div className="absolute inset-0 rounded-full bg-blue-600 opacity-10 scale-125"></div>

              {/* Main Visual Container */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Blue Curve with Border */}
                <div className="absolute inset-0 rounded-full border-8 border-blue-600"></div>

                {/* Company Image */}
                <div className="absolute top-20 left-8 w-48 h-56 rounded-2xl overflow-hidden shadow-xl z-10">
                  <img src="/professional-woman.png" alt="Professional woman" className="w-full h-full object-cover" />
                </div>

                {/* Award Card */}
                <div className="absolute bottom-12 right-8 bg-white/75 backdrop-blur-2xl rounded-2xl shadow-2xl p-5 z-20 max-w-xs border border-white/50">
                  <div className="flex items-start gap-3">
                    <Award size={32} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Best Awarded Company</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        We adapt our delivery to the way your work, whether as an external provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Diagonal Accent Shape */}
        <div
          className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/30 to-transparent"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-8 pt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3"
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 150}`}
                >
                  <IconComponent size={40} className="text-blue-300" />
                  <div className="text-4xl font-bold">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Diagonal Accent Shape Bottom */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 rounded-tl-full opacity-20"></div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="mb-12 space-y-4 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-blue-600 font-semibold text-sm">Global Presence</span>
              <ArrowRight size={18} className="text-blue-600" />
            </div>
            <h2 className="text-5xl font-bold text-background">
              Our Office <span className="text-blue-600">Locations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Serving clients worldwide with offices strategically located across multiple continents
            </p>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                city: "Philippines",
                description: "Asia-Pacific Hub",
              },
              {
                city: "London",
                description: "Europe Headquarters",
              },
              {
                city: "Uzbekistan",
                description: "Central Asia Office",
              },
              {
                city: "Pakistan",
                description: "South Asia Center",
              },
            ].map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={`${index * 150}`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.city}</h3>
                <p className="text-gray-600">{office.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="mb-12 space-y-4 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-blue-600 font-semibold text-sm">Departments</span>
              <ArrowRight size={18} className="text-blue-600" />
            </div>
            <h2 className="text-5xl font-bold text-background">
              Dedicated teams for every <span className="text-blue-600">need</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From support to strategy, finance to technology—every Fixore IT department is focused on seamless IT
              solutions.
            </p>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Support",
                email: "support@fixoreit.com",
                icon: Headphones,
                iconColor: "text-emerald-500",
                bgGradient: "from-emerald-50 to-emerald-100/50",
                borderColor: "border-emerald-200",
                hoverBg: "hover:from-emerald-100 hover:to-emerald-200/50",
                responsibilities: [
                  "Provides 24/7 technical assistance",
                  "Resolves client issues through helpdesk & ticketing system",
                  "Ensures smooth IT operations with remote & on-site support",
                ],
              },
              {
                title: "Operations",
                email: "operations@fixoreit.com",
                icon: Zap,
                iconColor: "text-orange-500",
                bgGradient: "from-orange-50 to-orange-100/50",
                borderColor: "border-orange-200",
                hoverBg: "hover:from-orange-100 hover:to-orange-200/50",
                responsibilities: [
                  "Manages day-to-day service delivery",
                  "Oversees IT systems, tools, and vendor coordination",
                  "Ensures service quality and efficiency",
                ],
              },
              {
                title: "Finance",
                email: "finance@fixoreit.com",
                icon: BarChart3,
                iconColor: "text-cyan-500",
                bgGradient: "from-cyan-50 to-cyan-100/50",
                borderColor: "border-cyan-200",
                hoverBg: "hover:from-cyan-100 hover:to-cyan-200/50",
                responsibilities: [
                  "Handles billing, invoicing, and payments",
                  "Manages company budgets and financial reporting",
                  "Ensures compliance with UK accounting standards",
                ],
              },
              {
                title: "Technical Team",
                email: "technical@fixoreit.com",
                icon: Code,
                iconColor: "text-purple-500",
                bgGradient: "from-purple-50 to-purple-100/50",
                borderColor: "border-purple-200",
                hoverBg: "hover:from-purple-100 hover:to-purple-200/50",
                responsibilities: [
                  "Provides expert consultancy & on-site advice",
                  "Prepares and guides engineers before deployment",
                  "Ensures successful execution of IT projects",
                ],
              },
              {
                title: "Administration",
                email: "admin@fixoreit.com",
                icon: Settings,
                iconColor: "text-rose-500",
                bgGradient: "from-rose-50 to-rose-100/50",
                borderColor: "border-rose-200",
                hoverBg: "hover:from-rose-100 hover:to-rose-200/50",
                responsibilities: [
                  "Oversees HR, contracts, and internal policies",
                  "Coordinates legal and compliance documentation",
                  "Manages company registrations and certifications",
                ],
              },
            ].map((dept, index) => {
              const IconComponent = dept.icon
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${dept.bgGradient} rounded-2xl shadow-md border ${dept.borderColor} p-8 transition-all duration-300 ease-out hover:shadow-xl ${dept.hoverBg} hover:scale-105 hover:-translate-y-1 cursor-default`}
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 100}`}
                >
                  {/* Icon Container with Background Circle */}
                  <div className="relative mb-6 inline-block">
                    <div
                      className={`absolute inset-0 rounded-full blur-xl ${dept.iconColor} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                      style={{ padding: "8px" }}
                    />
                    <div
                      className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center border border-white shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                    >
                      <IconComponent
                        size={32}
                        className={`${dept.iconColor} transition-transform duration-300 group-hover:scale-125`}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {dept.title}
                  </h3>

                  {/* Email Link */}
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-sm text-gray-600 hover:text-blue-600 mb-4 block underline underline-offset-2 transition-colors duration-300 font-medium"
                  >
                    {dept.email}
                  </a>

                  {/* Divider */}
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-4" />

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {dept.responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                      >
                        <span className={`${dept.iconColor} flex-shrink-0 mt-0.5 font-bold`}>✓</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

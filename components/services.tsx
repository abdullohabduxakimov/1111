"use client"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Global IT Field Support",
      icon: "globe",
      image: "/images/international-expansion-support.jpeg",
    },
    {
      id: 2,
      title: "Network Infrastructure Setup",
      icon: "network",
      image: "/images/network-infrastructure-setup.png",
    },
    {
      id: 3,
      title: "IMAC Services",
      icon: "laptop",
      image: "/images/imac-services.png",
    },
    {
      id: 4,
      title: "Server & Data Centre Support",
      icon: "server",
      image: "/images/server-data-centre.png",
    },
    {
      id: 5,
      title: "IT Asset Management",
      icon: "briefcase",
      image: "/images/it-asset-management.png",
    },
    {
      id: 6,
      title: "IT Equipment Repair & Maintenance",
      icon: "wrench",
      image: "/images/it-equipment-repair.png",
    },
    {
      id: 7,
      title: "IT Security & Compliance",
      icon: "lock",
      image: "/images/it-security-compliance.png",
    },
    {
      id: 8,
      title: "Technical Resource Outsourcing & Project Coordination",
      icon: "users",
      image: "/images/technical-resource-outsourcing.png",
    },
  ]

  const countries = [
    "United Kingdom","Latvia","Greece","Nigeria","Germany","Luxembourg","Croatia","Kenya",
    "France","Uzbekistan","Estonia","Morocco","Italy","India","Kazakhstan","Algeria",
    "Spain","Japan","China","Ghana","Netherlands","South Korea","Philippines","Tunisia",
    "Poland","Singapore","Thailand","Cameroon","Sweden","Malaysia","Vietnam","Zambia",
    "Finland","Indonesia","New Zealand","Zimbabwe","Norway","Australia","Canada","Mozambique",
    "Denmark","Bangladesh","Saudi Arabia","Serbia","Ireland","Pakistan","UAE",
    "Bosnia & Herzegovina","Switzerland","Brazil","Qatar","Moldova","Austria","Armenia",
    "Oman","North Macedonia","Belgium","Azerbaijan","Kuwait","Nepal","Czechia","Georgia",
    "Bahrain","Sri Lanka","Hungary","Mexico","Jordan","Brunei","Portugal","United States",
    "South Africa","Maldives","Romania","Egypt","Hong Kong","Slovakia","Laos","Lebanon",
    "Slovenia","Myanmar","Lithuania","Mongolia","Taiwan",
  ]

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "globe":
        return <span className="text-blue-600 font-bold">🌍</span>
      case "network":
        return <span className="text-blue-600 font-bold">🕸️</span>
      case "laptop":
        return <span className="text-blue-600 font-bold">💻</span>
      case "server":
        return <span className="text-blue-600 font-bold">🖥️</span>
      case "briefcase":
        return <span className="text-blue-600 font-bold">💼</span>
      case "wrench":
        return <span className="text-blue-600 font-bold">🔧</span>
      case "lock":
        return <span className="text-blue-600 font-bold">🔒</span>
      case "users":
        return <span className="text-blue-600 font-bold">👥</span>
      default:
        return null
    }
  }

  return (
    <section className="w-full bg-white">

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-lg shadow-md h-64"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  {renderIcon(service.icon)}
                </div>
                <h3 className="text-white font-semibold text-sm">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Where We Serve Section WITH BACKGROUND IMAGE */}
      <div
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/00/8d/7f/008d7fa038ef2ef428097edea50427db.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold mb-4">🌍 Global Presence 🌍</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Where We Serve</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Serving over <span className="font-bold text-blue-400">92+ countries</span> with a global IT network.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-blue-600/90 rounded-lg p-4 text-center text-sm font-semibold hover:scale-105 transition"
              >
                {country}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-gray-200">
            Ready to connect with our global team?{" "}
            <span className="text-blue-400 font-semibold">Get in touch today.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

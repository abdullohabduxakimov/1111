export default function Clients() {
  const clients = [
    { name: "Primark", src: "/primark-logo.png", isBig: true },
    { name: "Nike", src: "/nike-logo.png" },
    { name: "Polo Ralph Lauren", src: "/polo-ralph-lauren-logo.png" },
    { name: "Adidas", src: "/adidas-logo.png" },
    { name: "Tesco", src: "/tesco-logo.png", isBig: true },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Trusted Partners</span>
          <p className="text-gray-900 font-bold text-2xl mt-2">Industry Leaders Choose Us</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 flex items-center justify-center w-full h-24 hover:scale-110 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
            >
              <img
                src={client.src || "/placeholder.svg"}
                alt={client.name}
                className={`w-auto object-contain transition-transform duration-300 ${client.isBig ? "h-24 max-w-48" : "h-20 max-w-32"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

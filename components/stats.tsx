export default function Stats() {
  const stats = [
    { number: "3000+", label: "Of engineers worldwide" },
    { number: "20+", label: "Countries with active client base" },
    { number: "4.8/5", label: "Engineer rating" },
  ]

  return (
    <section
      className="relative py-20 px-8 rounded-3xl mx-8 my-16 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/office-team.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-center text-white text-2xl font-bold mb-16" data-aos="fade-up" data-aos-delay="200">
          Your Trusted IT Partner For Global IT Deployments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center space-y-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default"
              data-aos="zoom-in"
              data-aos-delay={`${i * 150}`}
            >
              <div className="text-5xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-gray-700 text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

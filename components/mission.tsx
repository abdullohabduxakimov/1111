export default function Mission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-balance">Our Mission</h2>
        </div>

        {/* Mission Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center" data-aos="fade-right" data-aos-delay="200">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/two-people-shaking-hands-business-partnership.jpg"
                alt="Two professionals shaking hands"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Touching Lives Through Technology
            </h3>

            <h4 className="text-2xl font-bold text-blue-600">Committed to Your Success</h4>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Fixore IT, our mission is to consistently meet the IT needs of our clients and become a top performer
                in the competitive global market. We aim to be the leading IT service provider worldwide, known for our
                expertise, reliability, and focus on customer satisfaction.
              </p>

              <p>
                By delivering outstanding service and innovative solutions, we strive to build lasting relationships and
                help our clients succeed in an ever-evolving technological landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      position: "IT Director",
      company: "Global Retail Corp",
      rating: 5,
      text: "Fixore IT transformed our infrastructure deployment across 15 countries. Their team handled everything seamlessly, from planning to execution. Outstanding service and expertise.",
    },
    {
      name: "James Chen",
      position: "CTO",
      company: "Tech Innovations Ltd",
      rating: 5,
      text: "The 24/7 support and rapid response times have been game-changing for our operations. Fixore IT's global network ensures we always have expert help when needed.",
    },
    {
      name: "Maria Rodriguez",
      position: "Operations Manager",
      company: "Enterprise Solutions Inc",
      rating: 5,
      text: "Professional, reliable, and cost-effective. Fixore IT has been our trusted IT partner for 3 years. They handle everything from network setup to ongoing maintenance flawlessly.",
    },
    {
      name: "David Thompson",
      position: "VP of Technology",
      company: "Manufacturing Global",
      rating: 5,
      text: "Their expertise in data center management is unmatched. We've seen 99.99% uptime since partnering with Fixore IT. Highly recommended for enterprise-level IT needs.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted by leading enterprises worldwide for reliable IT solutions
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
            <Quote className="absolute top-8 left-8 text-blue-200 opacity-50" size={48} />

            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6 justify-center">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].position}</p>
                  <p className="text-blue-600 text-sm font-semibold">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-900 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-900 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

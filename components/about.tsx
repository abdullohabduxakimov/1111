"use client"

import { ArrowRight, Shield, Headphones, Phone } from "lucide-react"

export default function About() {
  const handleCall = () => {
    window.location.href = "tel:+442039845374"
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center" data-aos="fade-right" data-aos-delay="200">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/confident-20businesswoman-20working-20on-20laptop-20in-20modern-20office.jpg"
                alt="Professional woman working at desk with laptop"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full w-fit">
              <span className="text-sm font-semibold">We're your trusted IT partner ~</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Fixore IT Global–Your Trusted IT Partner
            </h2>

            <div className="bg-white/50 border-l-4 border-blue-600 p-6 rounded-lg space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Fixore IT Global delivers comprehensive IT, Network, and Desktop Support Services (DSS) across the
                globe, with strong coverage in APAC, EMEA, LATAM, and North America. Our skilled professionals provide
                reliable onsite and remote support, handling everything from network deployments to enterprise-level IT
                operations. With offices in UK and Uzbekistan, we offer scalable and cost-efficient IT solutions
                designed to keep businesses productive and running smoothly.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Shield size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Moneyback</p>
                  <p className="text-sm text-gray-600">Guarantee</p>
                </div>
              </div>
              <div className="flex items-start gap-4" data-aos="zoom-in" data-aos-delay="450">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Headphones size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Technical</p>
                  <p className="text-sm text-gray-600">Support</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Contact Us <ArrowRight size={20} />
              </a>
              <button
                onClick={handleCall}
                className="flex items-center gap-3 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300 font-semibold group"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Call for help</p>
                  <p className="font-semibold text-gray-900">+44 20 3984 5374</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

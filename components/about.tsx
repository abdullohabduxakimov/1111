"use client"

import { ArrowRight, Shield, Headphones, Phone, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function About() {
  const handleCall = () => {
    window.location.href = "tel:+442039845374"
  }

  const features = [
    "Global coverage across 20+ countries",
    "24/7 technical support & monitoring",
    "99.9% uptime guarantee",
    "Certified IT professionals",
  ]

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative" data-aos="fade-right" data-aos-delay="200">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
              <Image
                src="/images/confident-20businesswoman-20working-20on-20laptop-20in-20modern-20office.jpg"
                alt="Professional woman working at desk with laptop"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-6 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-teal-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 font-[family-name:var(--font-space-grotesk)]">15+</p>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-teal-500" />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              <span className="text-sm font-semibold tracking-wide">About Fixore IT</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-[family-name:var(--font-space-grotesk)]">
              Your Trusted Partner for
              <span className="text-gradient"> Global IT Excellence</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed">
              Fixore IT Global delivers comprehensive IT, Network, and Desktop Support Services across the globe, 
              with strong coverage in APAC, EMEA, LATAM, and North America. Our skilled professionals provide 
              reliable onsite and remote support, handling everything from network deployments to enterprise-level 
              IT operations.
            </p>

            {/* Feature List */}
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Moneyback</p>
                  <p className="text-sm text-slate-500">Guarantee</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">24/7 Support</p>
                  <p className="text-sm text-slate-500">Always Available</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/contact"
                className="group bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
              >
                Contact Us
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={handleCall}
                className="group flex items-center justify-center gap-3 px-6 py-4 border-2 border-slate-200 text-slate-700 rounded-full hover:border-teal-500 hover:text-teal-600 transition-all duration-300 font-semibold"
              >
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-slate-400">Call for help</p>
                  <p className="font-semibold">+44 20 3984 5374</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

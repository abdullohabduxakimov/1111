"use client"

import Image from "next/image"
import { Target, Lightbulb, Users } from "lucide-react"

export default function Mission() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To consistently meet the IT needs of our clients and become a top performer in the competitive global market.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Delivering outstanding service and innovative solutions to help clients succeed in an evolving technological landscape.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships through expertise, reliability, and an unwavering focus on customer satisfaction.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0d9488 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
            <span className="text-sm font-semibold tracking-wide">Our Purpose</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-[family-name:var(--font-space-grotesk)]">
            Touching Lives Through
            <span className="text-gradient"> Technology</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative" data-aos="fade-right" data-aos-delay="200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
              <Image
                src="/two-people-shaking-hands-business-partnership.jpg"
                alt="Two professionals shaking hands"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-500/10 rounded-3xl -z-10" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-teal-500/20 rounded-full -z-10" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-space-grotesk)]">
                Committed to Your Success
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Fixore IT, our mission is to be the leading IT service provider worldwide, known for our 
                expertise, reliability, and focus on customer satisfaction. We aim to build lasting relationships 
                and help our clients succeed in an ever-evolving technological landscape.
              </p>
            </div>

            {/* Values Cards */}
            <div className="space-y-4">
              {values.map((value, i) => (
                <div 
                  key={i}
                  className="group flex gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <value.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{value.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

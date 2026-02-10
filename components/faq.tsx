"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What geographic regions does Fixore IT serve?",
      answer:
        "We provide comprehensive IT services across 92+ countries globally, with strong presence in APAC, EMEA, LATAM, and North America. Our network of 3000+ engineers ensures local expertise with global standards.",
    },
    {
      question: "What is your typical response time for critical issues?",
      answer:
        "We offer 24/7 support with rapid response times. Critical issues are addressed within 1 hour, with on-site support available within 4-24 hours depending on location. Our SLA guarantees ensure consistent service quality.",
    },
    {
      question: "Do you provide services for small businesses or only enterprises?",
      answer:
        "We serve organizations of all sizes, from startups to global enterprises. Our flexible service packages are tailored to meet specific business needs, whether you need basic IT support or complex infrastructure management.",
    },
    {
      question: "What makes Fixore IT different from other IT service providers?",
      answer:
        "Our global reach combined with local expertise sets us apart. We maintain a network of certified engineers worldwide, ensuring consistent service quality. Our 4.8/5 rating and 99.99% uptime guarantee reflect our commitment to excellence.",
    },
    {
      question: "Can you handle multi-country IT deployments?",
      answer:
        "Absolutely. We specialize in coordinating complex, multi-country IT rollouts. Our experienced project managers handle logistics, customs, local regulations, and synchronized deployments across global locations.",
    },
    {
      question: "What security measures do you implement?",
      answer:
        "Security is our top priority. We implement enterprise-grade security protocols including advanced firewalls, VPN solutions, 24/7 monitoring, regular security audits, and compliance with international standards like ISO 27001, GDPR, and SOC 2.",
    },
    {
      question: "Do you offer flexible pricing models?",
      answer:
        "Yes, we offer various pricing models including fixed monthly rates, pay-per-use, project-based pricing, and customized packages. We work with you to create a solution that fits your budget and requirements.",
    },
    {
      question: "How do you ensure data privacy and compliance?",
      answer:
        "We adhere to strict data protection regulations including GDPR, HIPAA, and local data privacy laws. All our engineers sign NDAs, and we implement role-based access controls, encryption, and regular compliance audits.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Have Questions?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">Everything you need to know about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-left font-semibold text-gray-900 pr-4">{faq.question}</span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? "bg-blue-600 rotate-180" : ""
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={18} className="text-white" />
                  ) : (
                    <Plus size={18} className="text-blue-600" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed bg-gray-50">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our team is ready to help you find the right solution</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  )
}

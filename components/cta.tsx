"use client"

import { useRouter } from "next/navigation"

export default function CTA() {
  const router = useRouter()

  const handleQuoteClick = () => {
    router.push("/contact")
  }

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-pretty">
            Ready to Elevate Your IT Infrastructure?
          </h2>
          <p className="text-xl text-foreground/70 text-pretty">
            Get in touch with our experts today and discover how we can transform your technology landscape.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleQuoteClick}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Get a Quote Now
          </button>
          <button className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold text-lg hover:scale-105 active:scale-95 hover:shadow-md">
            Request Consultation
          </button>
        </div>

        <p className="text-sm text-foreground/50">Response within 24 hours | Free initial consultation</p>
      </div>
    </section>
  )
}

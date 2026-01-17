"use client"

import type React from "react"

import Link from "next/link"
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function News() {
  const [currentImageIndices, setCurrentImageIndices] = useState({
    1: 0,
    2: 0,
  })

  const newsItems = [
    {
      id: 5,
      date: "2025-01-16",
      category: "Technology",
      title: "Understanding Managed Service Providers (MSP)",
      summary:
        "Learn how MSPs help businesses reduce IT costs, improve security, and ensure systems run smoothly 24/7 across startups, SMEs, enterprises, healthcare, finance, and retail sectors.",
      link: "/blog/msp-guide",
      image: "/images/image.png",
      carousel: false,
      carouselId: 1,
    },
    {
      id: 4,
      date: "2025-04-15",
      category: "Opportunity",
      title: "Exciting Opportunity for Fiber Optic Network Specialists – Saudi Arabia 2026 Project",
      summary:
        "We are thrilled to announce a large-scale Fiber Optic project in Saudi Arabia for 2026, seeking skilled Network Engineers and Technicians nationwide to join our team.",
      link: "/blog/fiber-optic-opportunity",
      image: "/blog-4-fiber-optic.jpg",
      carousel: false,
      carouselId: 2,
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const nextImage = (carouselId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndices((prev) => ({
      ...prev,
      [carouselId]:
        (prev[carouselId as keyof typeof prev] + 1) %
        (newsItems.find((item) => item.carouselId === carouselId)?.images?.length || 1),
    }))
  }

  const prevImage = (carouselId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const item = newsItems.find((item) => item.carouselId === carouselId)
    const imagesLength = item?.images?.length || 1
    setCurrentImageIndices((prev) => ({
      ...prev,
      [carouselId]: (prev[carouselId as keyof typeof currentImageIndices] - 1 + imagesLength) % imagesLength,
    }))
  }

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-foreground mb-4">Latest News & Updates</h1>
          <p className="text-lg text-muted-foreground">
            Stay informed with our latest insights, case studies, and company updates.
          </p>
        </div>

        {/* News List */}
        <div className="space-y-12">
          {newsItems.map((item, index) => (
            <div key={item.id}>
              <div
                className="group bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                {/* Image with Carousel */}
                <div
                  className={`relative w-full ${item.carouselId === 2 ? "md:w-96" : "md:w-80"} h-64 md:h-auto overflow-hidden flex-shrink-0 bg-muted`}
                >
                  {item.carousel && item.images && item.images.length > 0 ? (
                    <>
                      <img
                        src={
                          item.images[currentImageIndices[item.carouselId as keyof typeof currentImageIndices] || 0] ||
                          "/placeholder.svg"
                        }
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {item.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => prevImage(item.carouselId, e)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-foreground p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                            aria-label="Previous image"
                            type="button"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={(e) => nextImage(item.carouselId, e)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-foreground p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                            aria-label="Next image"
                            type="button"
                          >
                            <ChevronRight size={20} />
                          </button>
                          {/* Image counter */}
                          <div className="absolute bottom-2 right-2 bg-black/50 text-foreground px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {(currentImageIndices[item.carouselId as keyof typeof currentImageIndices] || 0) + 1} /{" "}
                            {item.images.length}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Content */}
                <Link href={item.link} className="flex-1 flex flex-col">
                  <div className="p-8 flex flex-col justify-between h-full">
                    <div>
                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          {formatDate(item.date)}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-card-foreground leading-tight group-hover:text-primary transition-colors duration-300 mb-4">
                        {item.title}
                      </h2>

                      {/* Summary */}
                      <p className="text-muted-foreground leading-relaxed">{item.summary}</p>
                    </div>

                    {/* CTA */}
                    <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group/btn mt-6">
                      Read Full Article{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground">Check back soon for more news and updates from Fixore IT.</p>
        </div>
      </div>
    </section>
  )
}

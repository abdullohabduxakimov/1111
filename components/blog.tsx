"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Blog() {
  const blogPosts = []

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-16" data-aos="fade-up" data-aos-delay="100">
          Our Latest Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.length > 0 ? (
            blogPosts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`}>
                <div
                  className="group cursor-pointer space-y-4 h-full flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={`${i * 150}`}
                >
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300"></div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition duration-300 mt-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                  </div>
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300 group/btn mt-auto">
                    Read More{" "}
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

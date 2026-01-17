"use client"

import type React from "react"

export default function BlogPosts() {
  const blogPosts = []

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.length > 0 ? (
            blogPosts.map((post, i) => (
              <div
                key={i}
                className="group cursor-pointer animate-zoom-in"
                style={{ "--animation-delay": `${i * 0.15}s` } as React.CSSProperties}
              >
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 mb-4">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div
                  className="space-y-2 animate-slide-in-top"
                  style={{ "--animation-delay": `${0.2 + i * 0.15}s` } as React.CSSProperties}
                >
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <span>📅</span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition duration-300">
                    {post.title}
                  </h3>
                </div>
              </div>
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

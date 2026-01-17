import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const blogPostsData = {
  "msp-guide": {
    title: "Understanding Managed Service Providers (MSP): A Complete Guide",
    category: "Technology",
    readTime: "8 min read",
    author: "Fixore IT Team",
    date: "2025-01-16",
    image: "/images/image.png",
    content: `## What is an MSP?

An MSP (Managed Service Provider) is an external IT partner that handles IT infrastructure and support services for businesses. MSPs take responsibility for managing and supporting IT systems, ensuring they run smoothly 24/7, while your team focuses on core business operations.

## Why MSP Matters

Managed Service Providers have become essential for modern businesses because they:

• Reduce IT costs by eliminating the need for large in-house IT teams
• Improve system reliability and security through proactive monitoring
• Ensure 24/7 support and rapid response to critical issues
• Allow businesses to focus on core operations instead of IT management
• Provide access to enterprise-grade technology without heavy capital investments

## Services Offered by MSPs

MSPs provide a comprehensive range of services to support your business:

• Network monitoring and management to ensure optimal performance
• Cybersecurity services including threat detection and prevention
• Data backup and disaster recovery solutions
• Cloud infrastructure and management
• IT help desk and technical support
• Software licensing and updates
• Security patch management
• Compliance and regulatory support

## How MSPs Work

The typical MSP engagement model works as follows:

Your business signs a service agreement with an MSP, defining the scope of services and service level agreements (SLAs). The MSP then remotely monitors your systems using advanced management tools. When issues are detected, the MSP's team responds proactively to prevent downtime. The MSP handles routine maintenance, updates, and security patches, allowing your team to focus on strategic initiatives. Most MSPs operate 24/7 support centers to ensure assistance is always available.

## Who Uses MSPs

MSPs serve organizations across all sizes and industries:

• Startups use MSPs to access enterprise-grade IT without building internal teams
• Small and Medium Enterprises (SMEs) leverage MSPs to improve security and reduce costs
• Large enterprises partner with MSPs for specific services and expertise
• Healthcare organizations rely on MSPs for HIPAA-compliant IT solutions
• Financial institutions use MSPs for secure, compliant infrastructure
• Retail companies depend on MSPs for system reliability and PCI compliance

## The Future of MSPs

The MSP industry continues to evolve with emerging technologies. Cloud adoption, artificial intelligence, and cybersecurity threats are driving demand for specialized MSP services. Organizations increasingly expect MSPs to provide strategic IT consulting alongside operational support.

## Getting Started with an MSP

If your organization is considering an MSP partnership:

• Assess your current IT infrastructure and identify pain points
• Define your business requirements and service expectations
• Research potential MSPs and compare their service offerings
• Request proposals from multiple providers
• Evaluate their expertise, support quality, and pricing model
• Start with a pilot program before full migration`,
  },
  "fiber-optic-opportunity": {
    title: "Exciting Opportunity for Fiber Optic Network Specialists – Saudi Arabia 2026 Project",
    category: "Opportunity",
    readTime: "5 min read",
    author: "Fixore IT Team",
    date: "2025-04-15",
    image: "/blog-4-fiber-optic.jpg",
    content: `## Project Overview

We are thrilled to announce a large-scale Fiber Optic project in Saudi Arabia for 2026, seeking skilled Network Engineers and Technicians nationwide to join our team. This is an exceptional opportunity to work on a prestigious infrastructure project in one of the Middle East's fastest-growing markets.

## Position: Optical Smart Network (OSN Level)

We are looking for experienced professionals to join our Northern & Southern Saudi Arabia operations.

## Key Requirements

To be considered for this position, you should have:

• Experience with optical fiber handling and installation
• Comfortable working with Ciena equipment or similar
• Ability to follow remote instructions during onsite troubleshooting
• Standard optical toolset (power meter, attenuators, fiber connectors, etc.)
• Strong technical foundation in network infrastructure
• Ability to work on-site in Saudi Arabia
• Flexibility and adaptability in a dynamic project environment

## Position Details

**Location:** Northern & Southern Saudi Arabia

**Project Duration:** 2026 Project Timeline

**Visa Sponsorship:** NO VISA SPONSORSHIP

**Compensation:** Competitive package based on experience

## About the Role

As an Optical Smart Network Specialist, you will:

• Install and maintain fiber optic infrastructure
• Troubleshoot network issues remotely under expert guidance
• Work with state-of-the-art optical equipment
• Ensure quality standards and safety compliance
• Collaborate with a team of experienced network professionals
• Contribute to building critical telecommunications infrastructure

## How to Apply

**Contact Information:**

• WhatsApp: +966 50 789 51 53 or +48 576 281 126
• Email: recruiter@fixoreit.com

**How to Submit:**

Click "SEND YOUR CV NOW" button and submit your CV with the following information:

• Complete CV with work history
• References from previous employers
• Proof of experience with optical fiber systems
• Any relevant certifications

## Why Join Us

Working on this project offers:

• Experience on a large-scale, prestigious infrastructure project
• Opportunity to work with cutting-edge fiber optic technology
• Competitive compensation for skilled professionals
• Career growth in the telecommunications sector
• Work with a professional and experienced team

## Next Steps

Apply now by sending your CV to recruiter@fixoreit.com or reaching out via WhatsApp. We're reviewing applications on a rolling basis and will contact qualified candidates for interviews.

This is a time-sensitive opportunity, so we encourage interested professionals to apply as soon as possible.`,
  },
}

type BlogParams = {
  slug: string
}

export default async function BlogDetailPage(props: { params: Promise<BlogParams> }) {
  const { slug } = await props.params

  console.log("[v0] Blog slug received:", slug)
  const post = blogPostsData[slug as keyof typeof blogPostsData]
  console.log("[v0] Post found:", !!post)

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-20 mt-32">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, the blog post you're looking for doesn't exist. (Slug: {slug})</p>
          <Link href="/news" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
            <ArrowLeft size={20} /> Back to News
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="relative w-full h-96 overflow-hidden mt-24">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-end p-8">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-white/80 text-sm">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>By {post.author}</span>
              <span>•</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none text-gray-700">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("##")) {
              return (
                <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              )
            }
            if (paragraph.startsWith("•")) {
              const items = paragraph.split("\n").filter((item) => item.startsWith("•"))
              return (
                <ul key={idx} className="list-disc list-inside space-y-2 mb-6">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace("• ", "")}</li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={idx} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Call to Action */}
        {post.category === "Opportunity" && (
          <div className="mt-16 p-8 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to work with Fixore IT?</h3>
            <p className="text-gray-700 mb-6">
              Discover how we can help your organization with expert MSP services and support.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-8">
          <Link
            href="/news"
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-all duration-300 hover:gap-3"
          >
            <ArrowLeft size={20} /> Back to News
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  )
}

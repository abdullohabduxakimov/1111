import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Fixore IT Global Services | Enterprise IT Solutions & 24/7 Support",
  description:
    "Leading global IT service provider offering 24/7 support, network infrastructure, and deployment services across 92+ countries. Trusted by Fortune 500 companies worldwide.",
  keywords: ["IT support", "network infrastructure", "global IT services", "managed services", "IT deployment", "data center management", "enterprise IT solutions"],
  authors: [{ name: "Fixore IT Global" }],
  openGraph: {
    title: "Fixore IT Global Services | Enterprise IT Solutions",
    description: "Comprehensive IT support and infrastructure services across 92+ countries",
    type: "website",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

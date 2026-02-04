import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fixore IT Global Services | Enterprise IT Solutions & Infrastructure",
  description:
    "World-class IT infrastructure, network solutions, and enterprise support services. Trusted by global leaders across APAC, EMEA, LATAM & North America.",
  generator: "v0.app",
  keywords: ["IT services", "network infrastructure", "enterprise IT", "global IT support", "data center management"],
}

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

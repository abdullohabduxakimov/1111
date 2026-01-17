"use client"

import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1500, // increased duration from 1000 to 1500ms for slower animations
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <>
      {children}
      <Analytics />
    </>
  )
}

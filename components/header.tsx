"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Search, ArrowRight, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const navLinkClass = (href: string) => {
    const baseClass = "text-sm font-medium relative group transition duration-300"
    const activeClass = isActive(href) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    return `${baseClass} ${activeClass}`
  }

  const underlineClass = (href: string) => {
    const baseClass = "absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300"
    const activeClass = isActive(href) ? "w-full" : "w-0 group-hover:w-full"
    return `${baseClass} ${activeClass}`
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
    }
  }

  const handleQuoteClick = () => {
    router.push("/contact")
  }

  return (
    <header className={`fixed top-7.5 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 mx-6 rounded-3xl ${isScrolled ? "shadow-xl" : "shadow-lg"}`}>
      <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 flex-shrink-0">
          <Link href="/">
            <Image
              src="/new-logo.png"
              alt="Fixore IT Global Services"
              width={200}
              height={60}
              className="w-auto h-16"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/" className={navLinkClass("/")}>
            Home
            <span className={underlineClass("/")}></span>
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About Us
            <span className={underlineClass("/about")}></span>
          </Link>
          <Link href="/services" className={navLinkClass("/services")}>
            Services
            <span className={underlineClass("/services")}></span>
          </Link>
          <Link href="/portfolio" className={navLinkClass("/portfolio")}>
            Portfolio
            <span className={underlineClass("/portfolio")}></span>
          </Link>
          <Link href="/news" className={navLinkClass("/news")}>
            News
            <span className={underlineClass("/news")}></span>
          </Link>
          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
            <span className={underlineClass("/contact")}></span>
          </Link>
        </div>

        {/* Search and CTA */}
        <div className="flex items-center gap-4">
          <form
            onSubmit={handleSearch}
            className="relative hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2.5 w-52 transition-all duration-300 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-white"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-sm text-gray-900 placeholder-gray-500 flex-1 pr-8"
            />
            <button
              type="submit"
              className="absolute right-3 top-3 text-gray-500 hover:text-blue-600 transition-colors duration-300"
            >
              <Search size={18} />
            </button>
          </form>
          <button
            onClick={handleQuoteClick}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95"
          >
            Get a quote now{" "}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <Link
            href="/"
            className={`block transition-all duration-300 ${isActive("/") ? "text-blue-600 font-semibold translate-x-1" : "text-gray-700 hover:text-blue-600 hover:translate-x-1"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block transition-all duration-300 ${isActive("/about") ? "text-blue-600 font-semibold translate-x-1" : "text-gray-700 hover:text-blue-600 hover:translate-x-1"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`block transition-all duration-300 ${isActive("/services") ? "text-blue-600 font-semibold translate-x-1" : "text-gray-700 hover:text-blue-600 hover:translate-x-1"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={`block transition-all duration-300 ${isActive("/portfolio") ? "text-blue-600 font-semibold translate-x-1" : "text-gray-700 hover:text-blue-600 hover:translate-x-1"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/news"
            className={`block transition-all duration-300 ${isActive("/news") ? "text-blue-600 font-semibold translate-x-1" : "text-gray-700 hover:text-blue-600 hover:translate-x-1"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            News
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

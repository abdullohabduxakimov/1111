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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-900/5 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/new-logo.png"
              alt="Fixore IT Global Services"
              width={160}
              height={48}
              className={`w-auto h-12 transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive(link.href)
                    ? scrolled 
                      ? "text-teal-600 bg-teal-50" 
                      : "text-white bg-white/10"
                    : scrolled
                      ? "text-slate-600 hover:text-teal-600 hover:bg-slate-50"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search and CTA */}
          <div className="flex items-center gap-3">
            <form
              onSubmit={handleSearch}
              className={`relative hidden md:flex items-center rounded-full px-4 py-2.5 w-48 transition-all duration-300 ${
                scrolled
                  ? "bg-slate-100 hover:bg-slate-200 focus-within:ring-2 focus-within:ring-teal-500"
                  : "bg-white/10 hover:bg-white/15 focus-within:ring-2 focus-within:ring-white/30"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`bg-transparent outline-none text-sm flex-1 pr-8 placeholder:text-inherit/50 ${
                  scrolled 
                    ? "text-slate-900 placeholder:text-slate-400" 
                    : "text-white placeholder:text-slate-300"
                }`}
              />
              <button
                type="submit"
                className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                  scrolled 
                    ? "text-slate-400 hover:text-teal-600" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Search size={18} />
              </button>
            </form>
            <button
              onClick={handleQuoteClick}
              className="group bg-teal-500 hover:bg-teal-400 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="hidden sm:inline">Get a Quote</span>
              <span className="sm:hidden">Quote</span>
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                scrolled 
                  ? "text-slate-700 hover:bg-slate-100" 
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-xl transition-all duration-300 ${
          mobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive(link.href)
                  ? "text-teal-600 bg-teal-50"
                  : "text-slate-700 hover:text-teal-600 hover:bg-slate-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="pt-4">
            <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400 flex-1"
              />
              <button type="submit" className="text-slate-400 hover:text-teal-600">
                <Search size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}

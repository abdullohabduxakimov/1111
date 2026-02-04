"use client"

import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const services = [
    { label: "IT Support", href: "/services" },
    { label: "Network Security", href: "/services" },
    { label: "Cloud Solutions", href: "/services" },
    { label: "Data Centers", href: "/services" },
  ]

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/new-logo.png"
                alt="Fixore IT Global Services"
                width={160}
                height={48}
                className="w-auto h-10 brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6">
              Global IT solutions and enterprise support services. Powering businesses across 20+ countries with 
              reliable infrastructure.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">Services</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">Company</h4>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:official@fixoreit.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  official@fixoreit.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+442039845374"
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  +44 20 3984 5374
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <span>
                  UK, London, Covent Garden,
                  <br />
                  Shelton Street 71-75
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Fixore IT Global Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/footer-bg.png)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div
            className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="font-bold text-white text-lg">Fixore IT</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Global IT solutions and support services for enterprises worldwide.
            </p>
          </div>

          {/* Services */}
          <div
            className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <a href="/services" className="hover:text-blue-300 transition">
                  IT Support & Desktop Services
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-300 transition">
                  Network Infrastructure
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-300 transition">
                  Global IT Deployments
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-300 transition">
                  Data Center Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div
            className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <a href="/about" className="hover:text-blue-300 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-blue-300 transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-blue-300 transition">
                  News
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div
            className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4 className="font-semibold text-white">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-300 flex-shrink-0" />
                <a href="mailto:official@fixoreit.com" className="hover:text-blue-300 transition">
                  official@fixoreit.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-300 flex-shrink-0" />
                <a href="mailto:support@fixoreit.com" className="hover:text-blue-300 transition">
                  support@fixoreit.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-300 flex-shrink-0" />
                <a href="tel:+442039845374" className="hover:text-blue-300 transition">
                  +44 20 3984 5374
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-300 mt-1 flex-shrink-0" />
                <span>
                  71-75 Shelton Street,
                  <br />
                  Covent Garden, London
                </span>
              </li>
            </ul>

            <div className="pt-4 flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <Twitter size={16} className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <Facebook size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-white/10 backdrop-blur-md py-6 px-6 rounded-lg border border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/90">
            <p>&copy; {currentYear} Fixore IT Global Services. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-300 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

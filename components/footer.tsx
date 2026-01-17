import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/footer-bg.png)" }} />
      <div className="absolute inset-0 bg-black/60" />

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
                <a href="#" className="hover:text-blue-300 transition">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Support
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
                <a href="#" className="hover:text-blue-300 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
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
                <Mail size={16} className="text-blue-300" />
                <a href="mailto:official@fixoreit.com" className="hover:text-blue-300 transition">
                  official@fixoreit.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-300" />
                <a href="mailto:support@fixoreit.com" className="hover:text-blue-300 transition">
                  support@fixoreit.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-300 mt-1" />
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
        <div className="bg-white/10 backdrop-blur-md py-8 px-6 rounded-lg text-center text-sm text-white/90 border border-white/20">
          <p>&copy; 2026 Fixore IT Global Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Mail, ArrowRight, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    setFormErrors({})

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone || "",
        service: formData.service || "",
        message: formData.message,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "",
          service: formData.service || "",
          message: formData.message,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error("[v0] API response error:", errorText)
        throw new Error(`Failed to send message: ${response.status}`)
      }

      setShowSuccessModal(true)

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      })

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      setTimeout(() => setShowSuccessModal(false), 4000)
    } catch (error) {
      console.error("[v0] Error sending message:", error)
      toast({
        title: "Error Sending Message",
        description: error instanceof Error ? error.message : "Failed to send your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    if (formErrors[field]) {
      setFormErrors({ ...formErrors, [field]: "" })
    }
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center lg:text-left" data-aos="fade-up" data-aos-delay="100">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-4 hover:text-cyan-300 transition-colors duration-300"
            >
              Contact us <ArrowRight size={16} />
            </a>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Get in <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Have a question or need assistance? Reach out to us and we'll respond as quickly as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
              <div
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="bg-cyan-400/10 rounded-lg p-3 flex-shrink-0 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <MapPin size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">UK Office</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Covent Garden, Shelton Street 71-75, London</p>
                </div>
              </div>

              <div
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                <div className="bg-cyan-400/10 rounded-lg p-3 flex-shrink-0 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <MapPin size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">Uzbekistan Office</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Obi-Hayot, Namangan, 16001</p>
                </div>
              </div>

              <div
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="bg-cyan-400/10 rounded-lg p-3 flex-shrink-0 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Mail size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">Support Email</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">support@fixoreit.com</p>
                </div>
              </div>

              <div
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group"
                data-aos="zoom-in"
                data-aos-delay="450"
              >
                <div className="bg-cyan-400/10 rounded-lg p-3 flex-shrink-0 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Mail size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">General Inquiries</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">WeCare@fixoreit.com</p>
                </div>
              </div>
            </div>

            <div
              className="bg-card border border-border rounded-xl p-8 relative overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Your full name"
                    className={`bg-secondary border-border text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 ${
                      formErrors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                  {formErrors.name && (
                    <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {formErrors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    className={`bg-secondary border-border text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 ${
                      formErrors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                  {formErrors.email && (
                    <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {formErrors.email}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Phone</label>
                    <Input
                      placeholder="Your phone number"
                      className="bg-secondary border-border text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Service</label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-secondary border-border text-white focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-secondary border-border">
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="support">IT Support</SelectItem>
                        <SelectItem value="migration">Migration Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us more about your project..."
                    className={`bg-secondary border-border text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 min-h-32 resize-none ${
                      formErrors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                  {formErrors.message && (
                    <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {formErrors.message}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-8 py-2.5 rounded-lg w-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-400/30"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="flex justify-center mb-4">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We've received your message and will get back to you as soon as possible.
            </p>
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold w-full"
            >
              Got it
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

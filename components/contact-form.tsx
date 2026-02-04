"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Mail, ArrowRight, AlertCircle, CheckCircle, Phone } from "lucide-react"
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "UK Office",
      description: "Covent Garden, Shelton Street 71-75, London",
    },
    {
      icon: MapPin,
      title: "Uzbekistan Office",
      description: "Obi-Hayot, Namangan, 16001",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "official@fixoreit.com",
      href: "mailto:official@fixoreit.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+44 20 3984 5374",
      href: "tel:+442039845374",
    },
  ]

  return (
    <>
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              <span className="text-sm font-semibold tracking-wide">Contact Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-[family-name:var(--font-space-grotesk)]">
              Get in
              <span className="text-gradient"> Touch</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have a question or need assistance? Reach out to us and we'll respond as quickly as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-slate-600 hover:text-teal-600 transition-colors"
                      >
                        {item.description}
                      </a>
                    ) : (
                      <p className="text-slate-600">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-900/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Your full name"
                    className={`bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl h-12 ${
                      formErrors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                  {formErrors.name && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                      <AlertCircle size={14} />
                      {formErrors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="you@example.com"
                    type="email"
                    className={`bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl h-12 ${
                      formErrors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                  {formErrors.email && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                      <AlertCircle size={14} />
                      {formErrors.email}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <Input
                      placeholder="Your phone number"
                      className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl h-12"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Service</label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-900 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-200 rounded-xl">
                        <SelectItem value="it-support">IT Support</SelectItem>
                        <SelectItem value="network">Network Infrastructure</SelectItem>
                        <SelectItem value="deployment">Global Deployments</SelectItem>
                        <SelectItem value="datacenter">Data Center Support</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your project or requirements..."
                    className={`bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl min-h-32 resize-none ${
                      formErrors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                  {formErrors.message && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                      <AlertCircle size={14} />
                      {formErrors.message}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-6 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 flex items-center justify-center gap-2"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && <ArrowRight size={18} />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center">
                <CheckCircle size={40} className="text-teal-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 font-[family-name:var(--font-space-grotesk)]">
              Message Sent!
            </h3>
            <p className="text-slate-600 mb-6">
              Thank you for contacting us. We've received your message and will get back to you as soon as possible.
            </p>
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold w-full py-3 rounded-full"
            >
              Got it
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

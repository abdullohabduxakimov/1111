"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Message {
  id: string
  name: string
  email: string
  phone: string | null
  service: string | null
  message: string
  submittedAt: string
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/messages")
        const data = await response.json()
        setMessages(data.reverse()) // Show newest first
      } catch (error) {
        console.error("[v0] Error fetching messages:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Contact Form Messages</h1>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No messages yet</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{msg.name}</h3>
                    <p className="text-sm text-gray-500">{formatDate(msg.submittedAt)}</p>
                  </div>
                  {msg.service && (
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                      {msg.service}
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Email:</span> {msg.email}
                  </p>
                  {msg.phone && (
                    <p>
                      <span className="font-medium">Phone:</span> {msg.phone}
                    </p>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500">
                  <p className="text-gray-700 whitespace-pre-wrap">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}

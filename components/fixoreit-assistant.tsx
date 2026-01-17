"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function FixoreITAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all shadow-lg z-40"
        aria-label="Open FixoreIT Assistant"
      >
        {/* AI icon */}
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[700px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1 rounded transition-colors z-10"
        aria-label="Close assistant"
      >
        <X className="w-6 h-6" />
      </button>

      <iframe
        src="https://www.chatbase.co/chatbot-iframe/57Z2aU6nSCu0koGSVE6ip"
        width="100%"
        style={{ height: "100%", minHeight: "700px" }}
        frameBorder="0"
      />
    </div>
  )
}

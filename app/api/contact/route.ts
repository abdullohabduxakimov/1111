import { type NextRequest, NextResponse } from "next/server"

const messagesStore: any[] = []

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const externalPayload = {
      name,
      email,
      phone_number: phone || "",
      service: service || "",
      message,
    }

    // Send to the new external API endpoint
    const externalResponse = await fetch("https://v0-fixoreit-messages-website.vercel.app/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(externalPayload),
    })

    if (!externalResponse.ok) {
      const errorBody = await externalResponse.text()
      console.error("[v0] External API error:", errorBody)
      return NextResponse.json({ error: "Failed to send message to external service" }, { status: 500 })
    }

    const newMessage = {
      id: Date.now().toString(),
      ...externalPayload,
      submittedAt: new Date().toISOString(),
    }

    // Add new message to in-memory store
    messagesStore.push(newMessage)

    console.log("[v0] Message saved:", newMessage)

    return NextResponse.json({ success: true, message: "Message received successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

export { messagesStore }

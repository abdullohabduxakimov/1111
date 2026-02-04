import { type NextRequest, NextResponse } from "next/server"

const messagesStore: any[] = []

async function sendToTelegram(name: string, email: string, phone: string, service: string, message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error("[v0] Telegram credentials not configured")
    return false
  }

  const telegramMessage = `
📬 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone || "Not provided"}
🛠 *Service:* ${service || "Not specified"}

💬 *Message:*
${message}

🕐 *Received:* ${new Date().toLocaleString()}
  `.trim()

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error("[v0] Telegram API error:", errorBody)
      return false
    }

    return true
  } catch (error) {
    console.error("[v0] Error sending to Telegram:", error)
    return false
  }
}

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

    // Send to Telegram bot
    const telegramSent = await sendToTelegram(name, email, phone || "", service || "", message)
    if (!telegramSent) {
      console.error("[v0] Failed to send message to Telegram")
    }

    // Send to the external API endpoint
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
      // Continue even if external API fails, since Telegram might have succeeded
    }

    const newMessage = {
      id: Date.now().toString(),
      ...externalPayload,
      submittedAt: new Date().toISOString(),
    }

    // Add new message to in-memory store
    messagesStore.push(newMessage)

    return NextResponse.json({ success: true, message: "Message received successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

export { messagesStore }

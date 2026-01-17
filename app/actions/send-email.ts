"use server"

export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}) {
  // Contact form now sends directly to external API
  // This function is kept for backwards compatibility but redirects to the external endpoint
  try {
    const response = await fetch("https://v0-fixoreit-messages-website.vercel.app/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        service: formData.service,
        message: formData.message,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send message")
    }

    return { success: true }
  } catch (error) {
    console.error("Send email error:", error)
    throw new Error(error instanceof Error ? error.message : "Failed to send message")
  }
}

import { type NextRequest, NextResponse } from "next/server"
import { messagesStore } from "../contact/route"

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(messagesStore, { status: 200 })
  } catch (error) {
    console.error("[v0] Error reading messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}

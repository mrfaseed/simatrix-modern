import { NextResponse } from "next/server";
import { UPCOMING_WORKSHOPS } from "@/lib/data/workshops";

export async function GET() {
  return NextResponse.json({ workshops: UPCOMING_WORKSHOPS });
}

export async function POST(request) {
  try {
    const data = await request.json();
    return NextResponse.json({
      success: true,
      message: "Registration confirmed",
      ticketId: `SIM-TKT-${Date.now().toString().slice(-6)}`,
      attendee: data,
    });
  } catch {
    return NextResponse.json({ error: "Invalid registration payload" }, { status: 400 });
  }
}

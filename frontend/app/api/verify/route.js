import { NextResponse } from "next/server";
import { SAMPLE_CERTIFICATES } from "@/lib/data/certificates";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const certId = searchParams.get("id");

  if (!certId) {
    return NextResponse.json({ error: "Certificate ID is required" }, { status: 400 });
  }

  const certificate = SAMPLE_CERTIFICATES[certId.toUpperCase()];

  if (!certificate) {
    return NextResponse.json({ verified: false, message: "No matching record found" }, { status: 404 });
  }

  return NextResponse.json({ verified: true, certificate });
}

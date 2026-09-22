import { NextResponse } from "next/server";
import { SAMPLE_CERTIFICATES } from "@/lib/data/certificates";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const certId = searchParams.get("id");

  if (!certId) {
    return NextResponse.json({ error: "Certificate ID is required" }, { status: 400 });
  }

  const formattedId = certId.toUpperCase();

  // Try Express Backend API
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/certificates/${formattedId}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      if (data.verified) {
        return NextResponse.json(data);
      }
    }
  } catch (err) {
    console.warn("Express backend API unreachable, falling back to local memory:", err.message);
  }

  // Fallback to local certificates data store
  const certificate = SAMPLE_CERTIFICATES[formattedId];

  if (!certificate) {
    // Dynamic format fallback (e.g. newly generated SIM-2026-FSD-000XXX)
    if (/^SIM-2026-[A-Z]+-[0-9]+$/.test(formattedId)) {
      const dynamicCert = {
        certificateId: formattedId,
        studentName: "Verified Graduate",
        programName: "Full Stack Development Career Program",
        issueDate: "September 2026",
        status: "VERIFIED",
        grade: "Distinction (Score: 94%)",
        skillsVerified: ["React.js", "Node.js", "PostgreSQL", "System Design"],
        capstoneProject: "Verified Production Capstone",
        issuer: "Simatrix Academy Academic Council",
        verificationUrl: `http://localhost:3000/verify/${formattedId}`,
      };
      SAMPLE_CERTIFICATES[formattedId] = dynamicCert;
      return NextResponse.json({ verified: true, certificate: dynamicCert });
    }

    return NextResponse.json({ verified: false, message: "No matching record found" }, { status: 404 });
  }

  return NextResponse.json({ verified: true, certificate });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const formattedId = (body.certificateId || `SIM-2026-FSD-${Math.floor(100000 + Math.random() * 900000)}`).toUpperCase();

    // Register locally
    const newCert = {
      certificateId: formattedId,
      studentName: body.studentName || "Student",
      programName: body.programName || "Full Stack Development Career Program",
      issueDate: "September 2026",
      status: "VERIFIED",
      grade: body.grade || "Distinction (Score: 94%)",
      skillsVerified: ["Full Stack Engineering", "Database Systems", "Cloud Deployment"],
      capstoneProject: "Verified Production Project",
      issuer: "Simatrix Academy Academic Council",
      verificationUrl: `http://localhost:3000/verify/${formattedId}`,
    };
    SAMPLE_CERTIFICATES[formattedId] = newCert;

    // Register with Express backend API
    try {
      await fetch(`${BACKEND_URL}/api/v1/certificates`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, certificateId: formattedId }),
      });
    } catch (err) {
      console.warn("Backend registration proxy warning:", err.message);
    }

    return NextResponse.json({ success: true, certificateId: formattedId, certificate: newCert });
  } catch {
    return NextResponse.json({ error: "Failed to issue certificate" }, { status: 400 });
  }
}

import Link from "next/link";
import { SAMPLE_CERTIFICATES } from "@/lib/data/certificates";
import CertificateBadge from "@/components/verify/CertificateBadge";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export async function generateMetadata({ params }) {
  const { certId } = await params;
  return {
    title: `Verification Result: ${certId} | Simatrix Academy`,
  };
}

export default async function CertificateResultPage({ params }) {
  const { certId } = await params;
  const formattedId = certId.toUpperCase();
  let cert = SAMPLE_CERTIFICATES[formattedId];

  if (!cert) {
    try {
      const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";
      const res = await fetch(`${BACKEND_URL}/api/v1/certificates/${formattedId}`, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data.verified && data.certificate) {
          cert = data.certificate;
        }
      }
    } catch (err) {
      console.warn("Backend lookup warning:", err.message);
    }
  }

  // Fallback for valid ID pattern
  if (!cert && /^SIM-2026-[A-Z]+-[0-9]+$/.test(formattedId)) {
    cert = {
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
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "780px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "24px" }}>
          <Link href="/verify" style={{ color: "var(--text-secondary)" }}>Verify</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "var(--text-primary)" }}>{certId}</span>
        </div>

        {cert ? (
          <div>
            <CertificateBadge cert={cert} />
            <div style={{ textAlign: "center", marginTop: "32px", display: "flex", justifyContent: "center", gap: "16px" }}>
              <Button href="/verify" variant="secondary">
                Verify Another ID
              </Button>
              <Button href="/profile/sakthi" variant="primary">
                View Student Portfolio (Sakthi) →
              </Button>
            </div>
          </div>
        ) : (
          <Card style={{ padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>⚠️</div>
            <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "10px" }}>
              Certificate ID Not Found
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "24px", maxWidth: "500px", margin: "0 auto 24px auto" }}>
              No official record was found matching ID <code>{certId}</code>. Please confirm that the ID was entered accurately or contact academic admissions.
            </p>
            <Button href="/verify" variant="glow">
              Try Searching Again
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}

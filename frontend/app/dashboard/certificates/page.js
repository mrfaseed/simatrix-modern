import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export const metadata = {
  title: "My Earned Certificates | Student Dashboard",
};

export default function CertificatesPage() {
  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "8px" }}>Earned Certifications</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
        Official cryptographic credentials awarded upon curriculum and capstone completion.
      </p>

      <Card style={{ padding: "28px", maxWidth: "680px" }}>
        <div style={{ fontSize: "0.8rem", color: "var(--accent-emerald)", fontWeight: 700, marginBottom: "6px" }}>
          STATUS: VERIFIED
        </div>
        <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "8px" }}>
          Full Stack Development Career Program
        </h2>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          Credential ID: <code style={{ color: "var(--accent-cyan)" }}>SIM-2026-FSD-000142</code> • Issued September 2026
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <Button href="/verify/SIM-2026-FSD-000142" variant="primary" size="sm">
            View Public Verification Page →
          </Button>
          <Button href="/profile/sakthi" variant="secondary" size="sm">
            Share on LinkedIn
          </Button>
        </div>
      </Card>
    </div>
  );
}

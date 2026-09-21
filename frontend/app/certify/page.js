import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Certifications & Verification Standard | Simatrix Academy",
  description: "Learn about Simatrix tamper-proof digital certificates, cryptographic ID verification, and evaluation benchmarks.",
};

export default function CertifyPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div className="section-header">
          <div className="section-badge" style={{ background: "rgba(16, 185, 129, 0.15)", borderColor: "rgba(16, 185, 129, 0.3)", color: "var(--accent-emerald)" }}>
            Tamper-Proof Credentials
          </div>
          <h1 className="section-title">
            The Simatrix <span style={{ color: "var(--accent-emerald)" }}>Certification Standard</span>
          </h1>
          <p className="section-desc">
            Simatrix certificates are not participation slips. They are verifiable cryptographic credentials awarded only after code submission, automated test validation, and capstone sign-off.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "40px" }}>
          <Card style={{ padding: "28px" }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>🛡️</div>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "8px" }}>Cryptographic Certificate ID</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              Every credential receives a unique traceable ID (e.g. <code>SIM-2026-FSD-000142</code>) permanently queryable by employers.
            </p>
          </Card>

          <Card style={{ padding: "28px" }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>📱</div>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "8px" }}>Instant QR Verification</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              Physical and digital certificates include a scannable QR code linking straight to the tamper-proof online ledger.
            </p>
          </Card>
        </div>

        <div style={{ textAlign: "center" }}>
          <Button href="/verify" variant="glow" size="lg">
            Verify a Certificate Online Now →
          </Button>
        </div>
      </div>
    </div>
  );
}

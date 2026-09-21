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
  const cert = SAMPLE_CERTIFICATES[certId.toUpperCase()];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "780px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "24px" }}>
          <Link href="/verify" style={{ color: "var(--text-secondary)" }}>Verify</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{certId}</span>
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
            <h2 style={{ fontSize: "1.5rem", color: "#fff", marginBottom: "10px" }}>
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

import Link from "next/link";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="section" style={{ minHeight: "70vh", display: "flex", alignItems: "center", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "600px" }}>
        <div style={{ fontSize: "5rem", fontWeight: 900, color: "var(--accent-cyan)", marginBottom: "16px" }}>
          404
        </div>
        <h1 style={{ fontSize: "2rem", color: "#fff", marginBottom: "12px" }}>Page Not Found</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "28px" }}>
          The requested page could not be located on Simatrix Academy. It may have moved or been updated.
        </p>
        <Button href="/" variant="primary" size="lg">
          Return to Homepage →
        </Button>
      </div>
    </div>
  );
}

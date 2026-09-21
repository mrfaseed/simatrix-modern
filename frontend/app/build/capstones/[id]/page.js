import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: `Capstone: ${id.replace(/-/g, " ").toUpperCase()} | Simatrix`,
  };
}

export default async function CapstoneDetailPage({ params }) {
  const { id } = await params;
  const title = id
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "880px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/build" style={{ color: "var(--text-secondary)" }}>Build</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/build/capstones" style={{ color: "var(--text-secondary)" }}>Capstones</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{title}</span>
        </div>

        <Badge variant="primary" style={{ marginBottom: "12px" }}>Capstone Project</Badge>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
          {title}
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "30px", lineHeight: 1.6 }}>
          Comprehensive end-to-end production build required for program graduation. Features system architecture diagrams, database schema designs, authentication, and live cloud deployment.
        </p>

        <Card style={{ padding: "28px", marginBottom: "30px" }}>
          <h3 style={{ fontSize: "1.15rem", color: "#fff", marginBottom: "14px" }}>Evaluation Rubric</h3>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
            <li>Architecture Cleanliness & Code Maintainability (25%)</li>
            <li>Database Schema & Query Optimization (25%)</li>
            <li>Security, Authentication & Edge Case Handling (25%)</li>
            <li>Live Deployment, Documentation & CI/CD (25%)</li>
          </ul>
        </Card>

        <div style={{ display: "flex", gap: "16px" }}>
          <Button href="/build/submit" variant="glow" size="lg">
            Submit Capstone for Review →
          </Button>
          <Button href="/build/capstones" variant="secondary" size="lg">
            Back to All Capstones
          </Button>
        </div>
      </div>
    </div>
  );
}

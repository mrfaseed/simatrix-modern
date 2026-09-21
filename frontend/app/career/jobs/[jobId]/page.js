import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export async function generateMetadata({ params }) {
  const { jobId } = await params;
  return {
    title: `Job: ${jobId.replace(/-/g, " ").toUpperCase()} | Simatrix Careers`,
  };
}

export default async function JobDetailPage({ params }) {
  const { jobId } = await params;
  const title = jobId
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/career" style={{ color: "var(--text-secondary)" }}>Career</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/career/jobs" style={{ color: "var(--text-secondary)" }}>Jobs</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{title}</span>
        </div>

        <Card style={{ padding: "36px" }}>
          <Badge variant="emerald" style={{ marginBottom: "12px" }}>Verified Partner Opening</Badge>
          <h1 style={{ fontSize: "2rem", color: "#fff", marginBottom: "12px" }}>{title}</h1>
          <div style={{ fontSize: "0.95rem", color: "var(--accent-emerald)", fontWeight: 700, marginBottom: "24px" }}>
            CTC: ₹6.0 - 9.0 LPA • Full-Time
          </div>

          <h3 style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "12px" }}>Key Responsibilities</h3>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "24px" }}>
            <li>Build and maintain production user interfaces and microservices.</li>
            <li>Collaborate with cross-functional product teams in 2-week agile sprints.</li>
            <li>Write automated unit tests and participate in active peer code reviews.</li>
          </ul>

          <h3 style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "12px" }}>Required Qualifications</h3>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "32px" }}>
            <li>Completed Simatrix Capstone project or equivalent production repository.</li>
            <li>Working knowledge of JavaScript/TypeScript, React, Node.js, and SQL.</li>
            <li>Strong foundation in Data Structures and algorithmic problem solving.</li>
          </ul>

          <Button href="/login" variant="glow" size="lg" style={{ width: "100%" }}>
            Apply with Simatrix Student Portfolio →
          </Button>
        </Card>
      </div>
    </div>
  );
}

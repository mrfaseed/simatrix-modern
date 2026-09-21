import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Mock Interviews | Simatrix Academy",
  description: "Schedule live simulated technical and behavioral mock interviews with senior industry engineers.",
};

export default function MockInterviewsPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "840px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/career" style={{ color: "var(--text-secondary)" }}>Career</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Mock Interviews</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 30px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>1-on-1 Mentorship</Badge>
          <h1 className="section-title">
            Realistic <span className="gradient-text">Mock Interviews</span>
          </h1>
          <p className="section-desc">
            Overcome interview anxiety. Practice live coding on shared screens and receive written rubric evaluations.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "40px" }}>
          <Card style={{ padding: "28px" }}>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "10px" }}>Technical DSA & Live Coding</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
              45-minute live coding session tackling arrays, trees, dynamic programming, and API implementation.
            </p>
            <Button href="/login" variant="secondary" style={{ width: "100%" }}>Schedule Technical Slot →</Button>
          </Card>

          <Card style={{ padding: "28px" }}>
            <h2 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "10px" }}>System Design & Architecture</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
              45-minute architecture deep-dive on scalability, caching, load balancing, and database schema choice.
            </p>
            <Button href="/login" variant="secondary" style={{ width: "100%" }}>Schedule Design Slot →</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

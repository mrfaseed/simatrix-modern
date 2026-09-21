import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "About Us | Simatrix Academy",
  description: "Learn about the mission, build-first pedagogy, and team behind Simatrix Academy.",
};

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "860px" }}>
        <div className="section-header">
          <Badge variant="primary" style={{ marginBottom: "12px" }}>Our Vision</Badge>
          <h1 className="section-title">
            Rebuilding <span className="gradient-text">Tech Education</span>
          </h1>
          <p className="section-desc">
            We are replacing passive lectures with an active pipeline: Learn. Practice. Build. Prove.
          </p>
        </div>

        <Card style={{ padding: "36px", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "16px" }}>The Simatrix Philosophy</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
            Most educational institutes focus exclusively on watching videos and taking notes. But software engineering is a craft best acquired through daily deliberate practice and shipping real code.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "24px" }}>
            At Simatrix Academy, our students spend 70% of their time writing code in CodeArena, querying live databases in SQLLab, squashing logic traps in DebugZone, and building production repositories on GitHub.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", padding: "18px", borderRadius: "var(--radius-sm)" }}>
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>🎯 Proof Over Paper</div>
              <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>Verifiable GitHub repositories and live deployments replace paper certificates.</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.02)", padding: "18px", borderRadius: "var(--radius-sm)" }}>
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>⚡ Daily Active Coding</div>
              <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>Interactive sandboxes and automated test suites for continuous feedback.</div>
            </div>
          </div>
        </Card>

        <div style={{ textAlign: "center" }}>
          <Button href="/programs" variant="glow" size="lg">
            Explore Career Cohorts →
          </Button>
        </div>
      </div>
    </div>
  );
}

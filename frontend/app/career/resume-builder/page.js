import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

export const metadata = {
  title: "ATS Resume Builder | Simatrix Academy",
  description: "Build ATS-optimized tech resumes tailored for Full Stack, Data Analytics, and Software Engineering roles.",
};

export default function ResumeBuilderPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "840px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/career" style={{ color: "var(--text-secondary)" }}>Career</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Resume Builder</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 30px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>ATS-Optimized</Badge>
          <h1 className="section-title">
            Tech <span className="gradient-text">Resume Builder</span>
          </h1>
          <p className="section-desc">
            Convert your completed Simatrix projects, verified certifications, and CodeArena achievements into high-scoring ATS resumes.
          </p>
        </div>

        <Card style={{ padding: "36px", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "16px" }}>
            Automated Resume Generator Features
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "var(--radius-sm)" }}>
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>🎯 Action Verb Project Bullets</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Pre-formatted quantifiable bullet points for every Simatrix project.</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "var(--radius-sm)" }}>
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>⚡ ATS Keyword Matcher</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Real-time scan against job descriptions to optimize ATS pass rates.</div>
            </div>
          </div>

          <Button href="/login" variant="glow" size="lg">
            Connect Student Account & Generate Resume →
          </Button>
        </Card>
      </div>
    </div>
  );
}

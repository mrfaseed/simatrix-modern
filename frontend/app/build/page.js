import Link from "next/link";
import { PROJECT_CHALLENGES } from "@/lib/data/projects";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Build Hub | Proof of Work Platform | Simatrix Academy",
  description: "Real-world project challenges and capstone specifications to build undeniable proof of your capabilities.",
};

export default function BuildHubPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge" style={{ background: "rgba(16, 185, 129, 0.15)", borderColor: "rgba(16, 185, 129, 0.3)", color: "var(--accent-emerald)" }}>
            Proof of Work Platform
          </div>
          <h1 className="section-title">
            The Simatrix <span style={{ color: "var(--accent-emerald)" }}>Build Platform</span>
          </h1>
          <p className="section-desc">
            Transition from syntax tutorials to shipping real software. Choose a challenge, code on GitHub, submit for mentor verification, and showcase your proof of work.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          marginBottom: "60px",
        }}>
          <Card style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "2rem", marginBottom: "16px" }}>🎯</div>
            <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "10px" }}>Project Challenges</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1 }}>
              Production-scoped briefs (10-30 hours) across Full Stack, Data Analytics, and AI.
            </p>
            <Button href="/build/challenges" variant="secondary">Browse Challenges →</Button>
          </Card>

          <Card style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "2rem", marginBottom: "16px" }}>🏆</div>
            <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "10px" }}>Capstone Cornerstones</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1 }}>
              Comprehensive multi-week architectural capstones designed to anchor your resume.
            </p>
            <Button href="/build/capstones" variant="secondary">Browse Capstones →</Button>
          </Card>

          <Card style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "2rem", marginBottom: "16px" }}>🚀</div>
            <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "10px" }}>Student Showcase</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1 }}>
              Explore what our students have built and deployed live to production.
            </p>
            <Button href="/build/showcase" variant="secondary">Explore Showcase →</Button>
          </Card>
        </div>

        <div style={{ textAlign: "center" }}>
          <Button href="/build/submit" variant="glow" size="lg">
            Submit Your Project for Verification →
          </Button>
        </div>
      </div>
    </div>
  );
}

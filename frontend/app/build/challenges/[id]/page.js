import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECT_CHALLENGES } from "@/lib/data/projects";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const proj = PROJECT_CHALLENGES.find((p) => p.id === id);
  if (!proj) return { title: "Challenge Not Found | Simatrix" };
  return {
    title: `${proj.title} | Build Challenge | Simatrix Academy`,
  };
}

export default async function ChallengeDetailPage({ params }) {
  const { id } = await params;
  const proj = PROJECT_CHALLENGES.find((p) => p.id === id);

  if (!proj) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/build" style={{ color: "var(--text-secondary)" }}>Build</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/build/challenges" style={{ color: "var(--text-secondary)" }}>Challenges</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{proj.title}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
              <Badge variant="emerald">{proj.difficulty}</Badge>
              <Badge variant="primary">{proj.category}</Badge>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{proj.duration}</span>
            </div>

            <h1 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
              {proj.title}
            </h1>

            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "30px", lineHeight: 1.6 }}>
              {proj.brief}
            </p>

            <Card style={{ padding: "24px", marginBottom: "30px" }}>
              <h3 style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "14px" }}>
                Feature Specifications & Requirements
              </h3>
              <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                {proj.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </Card>

            <Card style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "14px" }}>
                Skills Evaluated in Review
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {proj.skills.map((s) => (
                  <span key={s} style={{
                    padding: "4px 12px",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border-subtle)",
                    color: "#fff",
                    fontSize: "0.85rem",
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          <Card style={{ padding: "30px", position: "sticky", top: "100px" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent-emerald)", letterSpacing: "0.08em", marginBottom: "10px" }}>
              START PROJECT CHALLENGE
            </div>
            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
              Ready to code?
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
              Clone the template repo, create a feature branch, and submit your pull request when ready for mentor review.
            </p>

            <Button href={proj.starterRepo} target="_blank" rel="noopener noreferrer" variant="primary" style={{ width: "100%", marginBottom: "12px" }}>
              Clone Starter GitHub Repo ↗
            </Button>
            <Button href="/build/submit" variant="glow" style={{ width: "100%" }}>
              Submit Completed Project →
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

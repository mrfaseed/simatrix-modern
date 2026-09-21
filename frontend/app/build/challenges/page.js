import Link from "next/link";
import { PROJECT_CHALLENGES } from "@/lib/data/projects";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Project Challenges | Build | Simatrix Academy",
  description: "Browse industry-grade project challenges with starter repositories, user stories, and submission checklists.",
};

export default function ChallengesCatalogPage() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/build" style={{ color: "var(--text-secondary)" }}>Build</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Project Challenges</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>Industry Briefs</Badge>
          <h1 className="section-title">
            Real-World <span className="gradient-text">Project Challenges</span>
          </h1>
          <p className="section-desc">
            Build software that recruiters respect. Clone the starter repos, implement the required features, and submit for verification.
          </p>
        </div>

        <div className="grid-2">
          {PROJECT_CHALLENGES.map((proj) => (
            <Card key={proj.id} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <Badge variant={proj.difficulty === "Advanced" ? "amber" : "emerald"}>
                  {proj.difficulty}
                </Badge>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  ⏱️ {proj.duration}
                </span>
              </div>

              <h2 style={{ fontSize: "1.35rem", color: "#fff", marginBottom: "10px" }}>
                {proj.title}
              </h2>

              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "18px", flexGrow: 1, lineHeight: 1.6 }}>
                {proj.brief}
              </p>

              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "8px" }}>
                  Key Deliverables:
                </div>
                <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {proj.features.slice(0, 3).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", gap: "12px", borderTop: "1px solid var(--border-subtle)", paddingTop: "16px", marginTop: "auto" }}>
                <Button href={`/build/challenges/${proj.id}`} variant="primary" style={{ flexGrow: 1 }}>
                  View Full Project Brief →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

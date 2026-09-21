import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Tech Career Roadmaps | Simatrix Academy",
  description: "Step-by-step interactive roadmaps to become a Full Stack Developer, Data Analyst, or AI Engineer in 2026.",
};

const ROADMAPS = [
  { slug: "full-stack-developer", title: "Full Stack Developer Roadmap 2026", steps: 8, time: "6 Months", tag: "Engineering" },
  { slug: "data-analyst", title: "Data Analyst Career Roadmap 2026", steps: 6, time: "4 Months", tag: "Analytics" },
  { slug: "ai-engineer", title: "Data Science & AI Engineer Roadmap", steps: 9, time: "6 Months", tag: "AI/ML" },
];

export default function RoadmapsPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Career Navigation</div>
          <h1 className="section-title">
            Curated <span className="gradient-text">Developer Roadmaps</span>
          </h1>
          <p className="section-desc">
            Stop guessing what to learn next. Clear step-by-step paths designed by senior engineers and hiring managers.
          </p>
        </div>

        <div className="grid-3">
          {ROADMAPS.map((r) => (
            <Card key={r.slug} style={{ display: "flex", flexDirection: "column" }}>
              <Badge variant="primary" style={{ alignSelf: "flex-start", marginBottom: "16px" }}>{r.tag}</Badge>
              <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "12px" }}>
                {r.title}
              </h2>
              <div style={{ display: "flex", gap: "16px", color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "24px" }}>
                <span>📍 {r.steps} Core Milestones</span>
                <span>⏱️ {r.time} Target</span>
              </div>
              <Button href={`/roadmaps/${r.slug}`} variant="secondary" style={{ marginTop: "auto" }}>
                View Interactive Roadmap →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

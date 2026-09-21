import Link from "next/link";
import { FLAGSHIP_PROGRAMS } from "@/lib/data/programs";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Career Programs | Simatrix Academy",
  description: "Explore flagship career-launch programs in Full Stack Development, Data Analytics, and AI.",
};

export default function ProgramsPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Career Programs</div>
          <h1 className="section-title">
            Flagship <span className="gradient-text">Job-Ready Programs</span>
          </h1>
          <p className="section-desc">
            Deep-dive intensive programs with daily live mentorship, hands-on practice, code reviews, and placement preparation.
          </p>
        </div>

        <div className="grid-3">
          {FLAGSHIP_PROGRAMS.map((program) => (
            <Card key={program.id} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <Badge variant={program.badge === "Most Popular" ? "primary" : "emerald"}>
                  {program.badge}
                </Badge>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  {program.duration}
                </span>
              </div>

              <h2 style={{ fontSize: "1.35rem", color: "#fff", marginBottom: "10px" }}>
                {program.title}
              </h2>

              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1 }}>
                {program.tagline}
              </p>

              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "10px" }}>
                  Curriculum Highlights:
                </div>
                <ul style={{ paddingLeft: "18px", fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {program.highlights.slice(0, 3).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              <Button href={`/programs/${program.slug}`} variant="primary" style={{ width: "100%" }}>
                View Full Syllabus & Apply →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

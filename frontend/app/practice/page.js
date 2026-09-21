import Link from "next/link";
import { PRACTICE_MODULES } from "@/lib/data/practice";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Practice Ecosystem | Simatrix Academy",
  description: "Interactive coding practice arenas: CodeArena, WebLab, SQLLab, DebugZone, and QuizZone.",
};

export default function PracticeHubPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge" style={{ background: "rgba(6, 182, 212, 0.15)", borderColor: "rgba(6, 182, 212, 0.3)", color: "var(--accent-cyan)" }}>
            Interactive Practice Arena
          </div>
          <h1 className="section-title">
            The Simatrix <span className="gradient-text-cyan">Practice Hub</span>
          </h1>
          <p className="section-desc">
            Build coding reflexes. Select an interactive lab to start solving challenges, earning XP, and climbing the community leaderboard.
          </p>
        </div>

        <div className="grid-3">
          {PRACTICE_MODULES.map((mod) => (
            <Card key={mod.id} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
                <Badge variant="emerald">{mod.badge}</Badge>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {mod.totalProblems}+ Problems
                </span>
              </div>

              <h2 style={{ fontSize: "1.35rem", color: "#fff", marginBottom: "10px" }}>
                {mod.name}
              </h2>

              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1 }}>
                {mod.description}
              </p>

              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "8px" }}>
                  Languages / Tools:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {mod.languages.map((l) => (
                    <span key={l} style={{
                      fontSize: "0.75rem",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "var(--text-secondary)",
                    }}>
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <Button href={`/practice/${mod.id}`} variant="primary" style={{ width: "100%" }}>
                Enter {mod.name} →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

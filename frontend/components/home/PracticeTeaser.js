import Link from "next/link";
import { PRACTICE_MODULES } from "@/lib/data/practice";

export default function PracticeTeaser() {
  return (
    <section className="section" style={{ background: "#FFFFFF" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge" style={{ background: "var(--vil-gold-bg)", borderColor: "var(--vil-gold-border)", color: "var(--vil-gold-dim)" }}>
            Hands-on Sandbox
          </div>
          <h2 className="section-title">
            The Simatrix <span className="gradient-gold-text">Practice Ecosystem</span>
          </h2>
          <p className="section-desc">
            Watching videos does not make you an engineer. Daily interactive drills do. Practice coding, fix broken codebases, run live SQL queries, and construct web UIs with instant execution feedback.
          </p>
        </div>

        <div className="grid-3" style={{ gap: "28px", marginBottom: "40px" }}>
          {PRACTICE_MODULES.slice(0, 3).map((mod) => (
            <div
              key={mod.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#FAF8F5",
                border: "1px solid var(--border-subtle)",
                borderRadius: "24px",
                padding: "30px 24px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "3px 10px",
                  borderRadius: "999px",
                  background: "var(--vil-gold-bg)",
                  color: "var(--vil-gold-dim)",
                  border: "1px solid var(--vil-gold-border)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}>
                  {mod.badge}
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 700 }}>
                  {mod.totalProblems}+ Challenges
                </span>
              </div>

              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--vil-navy)", marginBottom: "8px" }}>
                {mod.name}
              </h3>

              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1, lineHeight: 1.6 }}>
                {mod.description}
              </p>

              <div style={{
                background: "#FFFFFF",
                borderRadius: "14px",
                padding: "14px",
                border: "1px solid var(--border-subtle)",
                marginBottom: "20px",
              }}>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "4px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Featured Drill:
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--vil-navy)", fontWeight: 700 }}>
                  {mod.sampleProblems[0]?.title}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--accent-emerald)", marginTop: "4px", fontWeight: 700 }}>
                  +{mod.sampleProblems[0]?.xp} XP • {mod.sampleProblems[0]?.difficulty}
                </div>
              </div>

              <Link
                href={`/practice/${mod.id}`}
                className="btn"
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "999px",
                  padding: "11px 16px",
                  fontWeight: 700,
                  fontSize: "0.86rem",
                  background: "#FFFFFF",
                  border: "1.5px solid var(--vil-navy)",
                  color: "var(--vil-navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <span>Launch {mod.name} Lab</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/practice"
            className="btn btn-primary btn-lg"
            style={{
              borderRadius: "999px",
              padding: "14px 32px",
              fontWeight: 800,
              fontSize: "0.96rem",
              background: "var(--vil-navy)",
              color: "#FAF8F5",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>Explore All Practice Arenas (DebugZone & QuizZone)</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

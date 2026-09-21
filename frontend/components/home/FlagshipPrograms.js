import Link from "next/link";
import { FLAGSHIP_PROGRAMS } from "@/lib/data/programs";

export default function FlagshipPrograms() {
  return (
    <section className="section" style={{ background: "#FFFFFF", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge" style={{ background: "var(--vil-gold-bg)", borderColor: "var(--vil-gold-border)", color: "var(--vil-gold-dim)" }}>
            Flagship Pedagogy
          </div>
          <h2 className="section-title">
            Industry-Aligned <span className="gradient-gold-text">Career Programs</span>
          </h2>
          <p className="section-desc">
            Instead of superficial video courses, Simatrix delivers career-launch programs structured around continuous live mentoring, real production capstones, and rigorous placement preparation.
          </p>
        </div>

        <div className="grid-3" style={{ gap: "28px" }}>
          {FLAGSHIP_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                background: "#FAF8F5",
                border: "1px solid var(--border-subtle)",
                borderRadius: "24px",
                padding: "32px 28px",
                boxShadow: "var(--shadow-card)",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                <span style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: program.badge === "Most Popular" ? "var(--vil-navy)" : "var(--vil-gold-dim)",
                  background: program.badge === "Most Popular" ? "var(--vil-gold)" : "rgba(201, 151, 56, 0.15)",
                  border: "1px solid var(--vil-gold-border)",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}>
                  {program.badge}
                </span>
                <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 700 }}>
                  {program.duration}
                </span>
              </div>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--vil-navy)", marginBottom: "12px", lineHeight: 1.25 }}>
                {program.title}
              </h3>

              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "22px", flexGrow: 1, lineHeight: 1.6 }}>
                {program.tagline}
              </p>

              <div style={{ marginBottom: "24px" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--vil-gold-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
                  Core Tech Stack
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {program.skills.slice(0, 5).map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "0.76rem",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        background: "#FFFFFF",
                        color: "var(--vil-navy)",
                        border: "1px solid var(--border-subtle)",
                        fontWeight: 600,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                  {program.skills.length > 5 && (
                    <span style={{ fontSize: "0.76rem", color: "var(--text-muted)", padding: "4px 6px", fontWeight: 600 }}>
                      +{program.skills.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "20px", marginTop: "auto" }}>
                <Link
                  href={`/programs/${program.slug}`}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    borderRadius: "999px",
                    padding: "12px 20px",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    background: "var(--vil-navy)",
                    color: "#FAF8F5",
                  }}
                >
                  <span>Explore Program Curriculum</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

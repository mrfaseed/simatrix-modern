import Link from "next/link";
import { PROJECT_CHALLENGES } from "@/lib/data/projects";

export default function BuildSection() {
  return (
    <section className="section" style={{ background: "var(--vil-ivory)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge" style={{ background: "var(--vil-gold-bg)", borderColor: "var(--vil-gold-border)", color: "var(--vil-gold-dim)" }}>
            Proof of Work Platform
          </div>
          <h2 className="section-title">
            Don&apos;t Just Learn. <span className="gradient-gold-text">Build & Prove It.</span>
          </h2>
          <p className="section-desc">
            Anyone can tick multiple choice answers. Simatrix prepares you through production-grade engineering briefs. Submit clean GitHub repositories, receive code reviews, and compile real proof of work.
          </p>
        </div>

        {/* Viiv-style step workflow pills */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "18px",
          marginBottom: "50px",
        }}>
          {[
            { step: "1", title: "Select Challenge", desc: "Pick an industry project brief with real API specs" },
            { step: "2", title: "Code & Branch", desc: "Push clean Git commits, structure architecture, and add unit tests" },
            { step: "3", title: "Review & PR", desc: "Automated checks & mentor feedback on GitHub" },
            { step: "4", title: "Verified Portfolio", desc: "Showcases directly on your public Simatrix profile URL" },
          ].map((item) => (
            <div key={item.step} style={{
              background: "#FFFFFF",
              border: "1px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "24px 20px",
              boxShadow: "var(--shadow-card)",
            }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "var(--vil-gold-bg)",
                color: "var(--vil-gold-dim)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "0.95rem",
                marginBottom: "14px",
                border: "1px solid var(--vil-gold-border)",
              }}>
                {item.step}
              </div>
              <div style={{ fontWeight: 800, color: "var(--vil-navy)", fontSize: "1.05rem", marginBottom: "6px" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project Challenges */}
        <div className="grid-3" style={{ gap: "28px", marginBottom: "40px" }}>
          {PROJECT_CHALLENGES.slice(0, 3).map((proj) => (
            <div
              key={proj.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#FFFFFF",
                borderRadius: "24px",
                padding: "30px 24px",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "3px 10px",
                  borderRadius: "999px",
                  background: proj.difficulty === "Advanced" ? "var(--vil-gold-bg)" : "#ECFDF5",
                  color: proj.difficulty === "Advanced" ? "var(--vil-gold-dim)" : "#047857",
                  border: `1px solid ${proj.difficulty === "Advanced" ? "var(--vil-gold-border)" : "#A7F3D0"}`,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}>
                  {proj.difficulty}
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  {proj.duration}
                </span>
              </div>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--vil-navy)", marginBottom: "10px" }}>
                {proj.title}
              </h3>

              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "18px", flexGrow: 1, lineHeight: 1.6 }}>
                {proj.brief}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "22px" }}>
                {proj.skills.map((s) => (
                  <span key={s} style={{
                    fontSize: "0.74rem",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "#FAF8F5",
                    color: "var(--vil-navy)",
                    border: "1px solid var(--border-subtle)",
                    fontWeight: 600,
                  }}>
                    {s}
                  </span>
                ))}
              </div>

              <Link
                href={`/build/challenges/${proj.id}`}
                className="btn"
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "999px",
                  padding: "10px 16px",
                  fontWeight: 700,
                  fontSize: "0.86rem",
                  background: "#FAF8F5",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--vil-navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <span>View Project Specs</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}>
          <Link
            href="/build"
            className="btn btn-gold btn-lg"
            style={{
              borderRadius: "999px",
              padding: "13px 30px",
              fontWeight: 800,
              fontSize: "0.94rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>Explore All Project Challenges</span>
            <span>→</span>
          </Link>
          <Link
            href="/profile/sakthi"
            className="btn"
            style={{
              borderRadius: "999px",
              padding: "13px 28px",
              fontWeight: 700,
              fontSize: "0.94rem",
              background: "#FFFFFF",
              border: "1.5px solid var(--vil-navy)",
              color: "var(--vil-navy)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>View Live Student Portfolio (Sakthi)</span>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

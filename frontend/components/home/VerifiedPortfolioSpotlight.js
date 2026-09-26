import Link from "next/link";

export default function VerifiedPortfolioSpotlight() {
  return (
    <section
      className="section"
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "56px",
            alignItems: "center",
          }}
          className="portfolio-grid"
        >
          {/* Left Column: Clean & Direct */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "999px",
                background: "#EFF6FF",
                border: "1px solid #BFDBFE",
                color: "#1D4ED8",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#2563EB",
                }}
              />
              Digital Proof of Work
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#0F172A",
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}
            >
              Every Student Gets a{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Verified Portfolio.
              </span>
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#475569",
                lineHeight: 1.6,
                marginBottom: "28px",
              }}
            >
              Recruiters don&apos;t hire certificates. They hire proof. Every Simatrix student
              graduates with a public portfolio showcasing real code, live projects, and
              verified credentials.
            </p>

            {/* 3 Clean, One-Line Bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {[
                "Production GitHub repos with mentor code reviews",
                "Verified CodeArena score & global ranking",
                "Shareable public link for LinkedIn & recruiters",
              ].map((bullet, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "#DCFCE7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#16A34A",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.95rem", color: "#334155", fontWeight: 600 }}>
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/profile/sakthi"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#0F172A",
                color: "#FFFFFF",
                borderRadius: "10px",
                padding: "12px 24px",
                fontWeight: 600,
                fontSize: "0.92rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <span>View Sample Portfolio (Sakthi)</span>
              <span>→</span>
            </Link>
          </div>

          {/* Right Column: Modern, Clean Profile Card */}
          <div>
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)",
                overflow: "hidden",
              }}
            >
              {/* Card Header Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 20px",
                  background: "#F8FAFC",
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#CBD5E1" }} />
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#CBD5E1" }} />
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#CBD5E1" }} />
                  </div>
                  <span style={{ fontSize: "0.78rem", color: "#64748B", fontWeight: 500, marginLeft: "4px" }}>
                    simatrix.dev/profile/sakthi
                  </span>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    background: "#DCFCE7",
                    color: "#15803D",
                    padding: "2px 8px",
                    borderRadius: "999px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                  }}
                >
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#16A34A" }} />
                  Verified Graduate
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "24px" }}>
                {/* Profile Identity */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      color: "#FFFFFF",
                      flexShrink: 0,
                    }}
                  >
                    SK
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F172A" }}>
                        Sakthi Kumar
                      </span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#64748B", fontWeight: 500 }}>
                      Full Stack Developer • Virudhunagar
                    </div>
                  </div>

                  <a
                    href="https://github.com/sakthikumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      background: "#F1F5F9",
                      border: "1px solid #E2E8F0",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#334155",
                      textDecoration: "none",
                    }}
                  >
                    <span>GitHub</span>
                    <span style={{ color: "#94A3B8" }}>↗</span>
                  </a>
                </div>

                {/* 3 Core Stats */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    padding: "14px 10px",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1D4ED8" }}>2,480</div>
                    <div style={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>Practice XP</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#16A34A" }}>#14</div>
                    <div style={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>Global Rank</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0F172A" }}>4 Shipped</div>
                    <div style={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>Projects</div>
                  </div>
                </div>

                {/* Verified Skills */}
                <div style={{ marginBottom: "18px" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "8px" }}>
                    Verified Skills
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {["Next.js", "TypeScript", "PostgreSQL", "Node.js", "TailwindCSS", "Python"].map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: "0.78rem",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          background: "#FFFFFF",
                          border: "1px solid #E2E8F0",
                          color: "#1E293B",
                          fontWeight: 600,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Featured Project Sneak Peek */}
                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "10px",
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#16A34A", fontWeight: 700, textTransform: "uppercase" }}>
                      Featured Project • Reviewed 96/100
                    </div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A", marginTop: "1px" }}>
                      E-Commerce Analytics Engine
                    </div>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "#2563EB", fontWeight: 600 }}>
                    Live Demo ↗
                  </span>
                </div>
              </div>

              {/* Card Footer: Credential Link */}
              <div
                style={{
                  background: "#F8FAFC",
                  borderTop: "1px solid #E2E8F0",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#334155", fontWeight: 600 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>ID: SIM-2026-FSD-000142</span>
                </div>

                <Link
                  href="/verify/SIM-2026-FSD-000142"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#2563EB",
                    textDecoration: "none",
                  }}
                >
                  Verify Credential ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function MentorsSection() {
  const mentors = [
    {
      name: "Arunachalam S.",
      role: "Principal Architect",
      company: "Ex-Amazon AWS",
      experience: "12+ Yrs",
      specialty: "Distributed Systems, High-Scale Node.js & Cloud Architecture",
      skills: ["AWS", "Microservices", "PostgreSQL", "System Design"],
      badge: "Cloud Mentor",
    },
    {
      name: "Priya Sundaram",
      role: "Senior Staff Frontend Lead",
      company: "Zoho Corporation",
      experience: "9+ Yrs",
      specialty: "Next.js App Router, Enterprise UI Systems & Web Performance",
      skills: ["Next.js", "React 19", "TypeScript", "Performance Tuning"],
      badge: "Full Stack Mentor",
    },
    {
      name: "Karthik Raja",
      role: "Lead Data Scientist",
      company: "Razorpay",
      experience: "8+ Yrs",
      specialty: "Production Machine Learning, LLM Orchestration & Real-Time Analytics",
      skills: ["Python", "PyTorch", "Vector DBs", "RAG Pipelines"],
      badge: "AI & Data Mentor",
    },
    {
      name: "Divya Natarajan",
      role: "DevOps & Infrastructure Lead",
      company: "Freshworks",
      experience: "10+ Yrs",
      specialty: "Kubernetes, Automated CI/CD, Container Security & Observability",
      skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      badge: "DevOps Mentor",
    },
  ];

  return (
    <section className="section" style={{
      background: "var(--vil-ivory)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Practitioner Faculty</div>
          <h2 className="section-title">
            Learn From Engineers Who&apos;ve <span className="gradient-gold-text">Shipped at Scale</span>
          </h2>
          <p className="section-desc">
            No full-time slides-readers. Every Simatrix mentor is an active software engineer or architect who reviews your pull requests and conducts production-level code critiques.
          </p>
        </div>

        <div className="grid-4" style={{ gap: "24px" }}>
          {mentors.map((m) => (
            <div
              key={m.name}
              className="card"
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "26px 22px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-card)",
                transition: "all 0.25s ease",
              }}
            >
              {/* Header: Badge & Experience */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "var(--vil-gold-dim)",
                  background: "var(--vil-gold-bg)",
                  border: "1px solid var(--vil-gold-border)",
                  padding: "3px 10px",
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}>
                  {m.badge}
                </span>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)" }}>
                  {m.experience} Exp
                </span>
              </div>

              {/* Avatar & Name */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "var(--vil-navy)",
                  color: "#FAF8F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  border: "2px solid rgba(201, 151, 56, 0.4)",
                  flexShrink: 0,
                }}>
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--vil-navy)", lineHeight: 1.2 }}>
                    {m.name}
                  </h3>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--vil-gold-dim)", marginTop: "2px" }}>
                    {m.company}
                  </div>
                  <div style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>
                    {m.role}
                  </div>
                </div>
              </div>

              {/* Specialty */}
              <p style={{
                fontSize: "0.84rem",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
                marginBottom: "16px",
                flexGrow: 1,
              }}>
                {m.specialty}
              </p>

              {/* Skills tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                {m.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      background: "#FAF8F5",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--vil-navy)",
                      fontWeight: 600,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom direct mentor callout */}
              <div style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.78rem",
              }}>
                <span style={{ color: "var(--accent-emerald)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-emerald)" }} />
                  Live Code Reviews
                </span>
                <Link
                  href="/contact"
                  style={{
                    color: "var(--vil-navy)",
                    fontWeight: 700,
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Connect →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Faculty Pill CTA */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <Link
            href="/about"
            className="btn btn-secondary"
            style={{
              borderRadius: "999px",
              padding: "12px 28px",
              fontSize: "0.9rem",
              fontWeight: 700,
              background: "#FFFFFF",
              border: "1px solid var(--border-subtle)",
              color: "var(--vil-navy)",
            }}
          >
            <span>Meet Our Complete 50+ Practitioner Faculty & Advisory Board</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

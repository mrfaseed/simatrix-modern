import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ").toUpperCase()} Roadmap | Simatrix Academy`,
  };
}

export default async function RoadmapDetailPage({ params }) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  const steps = [
    { num: "01", title: "Core Programming & Syntax", items: ["Variables, Data Types & Control Flow", "Functions & Scope", "Git & GitHub Basics"] },
    { num: "02", title: "Data Storage & Retrieval", items: ["SQL Queries, Joins & Aggregations", "Relational Database Normalization", "Index Tuning"] },
    { num: "03", title: "Production Application Architecture", items: ["RESTful API Contracts", "Async Execution & Networking", "State Management & UI Components"] },
    { num: "04", title: "Deployment, CI/CD & Cloud", items: ["Containerization with Docker", "Cloud Hosting (Vercel, AWS)", "Monitoring & Logs"] },
    { num: "05", title: "Proof of Work & Placement Prep", items: ["Production Capstone Projects", "ATS Tech Resume", "System Design & DSA Rounds"] },
  ];

  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/roadmaps" style={{ color: "var(--text-secondary)" }}>Roadmaps</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "var(--text-primary)" }}>{title}</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <h1 className="section-title">
            {title} <span className="gradient-text">Milestones</span>
          </h1>
          <p className="section-desc">
            Follow this ordered curriculum sequence to reach industry readiness.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "800px" }}>
          {steps.map((step) => (
            <Card key={step.num} style={{ padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "14px" }}>
                <span style={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  padding: "6px 12px",
                  borderRadius: "8px",
                  background: "var(--vil-gold-bg)",
                  color: "var(--vil-gold-dim)",
                }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)" }}>{step.title}</h3>
              </div>
              <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                {step.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <Button href="/programs" variant="glow" size="lg">
            Enroll in Mentored Program Following This Roadmap →
          </Button>
        </div>
      </div>
    </div>
  );
}

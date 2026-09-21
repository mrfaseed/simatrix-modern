import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Capstone Projects | Build | Simatrix Academy",
  description: "Comprehensive industry-grade capstones required for Simatrix certification.",
};

const CAPSTONES = [
  { id: "multi-tenant-saas", title: "Multi-Tenant Cloud CRM SaaS", duration: "4 Weeks", skills: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Stripe"], badge: "Full Stack Capstone" },
  { id: "fintech-risk-engine", title: "Real-Time FinTech Fraud & Risk Engine", duration: "3 Weeks", skills: ["Python", "Pandas", "Scikit-Learn", "FastAPI", "PostgreSQL"], badge: "AI / ML Capstone" },
  { id: "retail-bi-intelligence", title: "Enterprise Omnichannel Retail BI Suite", duration: "3 Weeks", skills: ["Power BI", "SQL", "Python", "DAX", "Data Modeling"], badge: "Data Analytics Capstone" },
];

export default function CapstonesPage() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/build" style={{ color: "var(--text-secondary)" }}>Build</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Capstones</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>Flagship Capstones</Badge>
          <h1 className="section-title">
            Industry <span className="gradient-text">Capstone Projects</span>
          </h1>
          <p className="section-desc">
            Capstone projects are evaluated by senior engineers. Successful completion is a prerequisite for certificate issuance and hiring referrals.
          </p>
        </div>

        <div className="grid-3">
          {CAPSTONES.map((c) => (
            <Card key={c.id} style={{ display: "flex", flexDirection: "column" }}>
              <Badge variant="primary" style={{ alignSelf: "flex-start", marginBottom: "14px" }}>{c.badge}</Badge>
              <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>
                {c.title}
              </h2>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "18px" }}>
                ⏱️ Target Timeline: {c.duration}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                {c.skills.map((s) => (
                  <span key={s} style={{
                    fontSize: "0.75rem",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "var(--text-secondary)",
                  }}>
                    {s}
                  </span>
                ))}
              </div>
              <Button href={`/build/capstones/${c.id}`} variant="secondary" style={{ marginTop: "auto" }}>
                View Capstone Spec →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

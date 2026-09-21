import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Project Submissions | Student Dashboard",
};

export default function SubmissionsPage() {
  const submissions = [
    { title: "E-Commerce Dashboard", repo: "sakthikumar/ecommerce-dashboard", status: "VERIFIED", date: "Sep 12, 2026", score: "96/100" },
    { title: "Diabetes Prediction ML Web App", repo: "sakthikumar/diabetes-prediction-app", status: "VERIFIED", date: "Aug 28, 2026", score: "92/100" },
    { title: "Multi-Tenant Cloud CRM SaaS", repo: "sakthikumar/cloud-crm-saas", status: "IN REVIEW", date: "Sep 18, 2026", score: "Pending" },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "8px" }}>Project Submissions</h1>
          <p style={{ color: "var(--text-secondary)" }}>Track mentor evaluations, automated linter reports, and proof-of-work status.</p>
        </div>
        <Button href="/build/submit" variant="glow" size="sm">+ Submit New Project</Button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {submissions.map((s) => (
          <Card key={s.title} style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "6px" }}>
                <Badge variant={s.status === "VERIFIED" ? "emerald" : "amber"}>{s.status}</Badge>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Submitted {s.date}</span>
              </div>
              <h3 style={{ fontSize: "1.1rem", color: "#fff" }}>{s.title}</h3>
              <div style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", marginTop: "4px" }}>
                github.com/{s.repo}
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: s.status === "VERIFIED" ? "var(--accent-emerald)" : "var(--accent-amber)" }}>
                {s.score}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

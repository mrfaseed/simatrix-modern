import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Interview Preparation | Question Bank | Simatrix Academy",
  description: "Curated technical interview question banks for React, Node, Python, SQL, and System Design.",
};

const TOPICS = [
  { slug: "react-frontend", title: "React & Modern Frontend", count: 120, badge: "Frontend" },
  { slug: "python-backend", title: "Python & Backend Systems", count: 95, badge: "Backend" },
  { slug: "sql-databases", title: "SQL & Relational Databases", count: 110, badge: "Data" },
  { slug: "data-structures", title: "Data Structures & Algorithms", count: 150, badge: "DSA" },
  { slug: "system-design", title: "System Design & Cloud Architecture", count: 45, badge: "Architecture" },
  { slug: "hr-behavioral", title: "HR & Behavioral Questions", count: 60, badge: "Soft Skills" },
];

export default function InterviewPrepPage() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/career" style={{ color: "var(--text-secondary)" }}>Career</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Interview Prep</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>Interview Drill</Badge>
          <h1 className="section-title">
            Technical & Behavioral <span className="gradient-text">Question Bank</span>
          </h1>
          <p className="section-desc">
            Deep-dive into verified interview questions asked by hiring teams. Complete with full model answers and architectural breakdowns.
          </p>
        </div>

        <div className="grid-3">
          {TOPICS.map((t) => (
            <Card key={t.slug} style={{ display: "flex", flexDirection: "column" }}>
              <Badge variant="primary" style={{ alignSelf: "flex-start", marginBottom: "14px" }}>{t.badge}</Badge>
              <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "10px" }}>{t.title}</h2>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                📚 {t.count} Interview Questions
              </div>
              <Button href={`/career/interview-prep/${t.slug}`} variant="secondary" style={{ marginTop: "auto" }}>
                Start Practice Drill →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Skill Assessments | Simatrix Academy",
  description: "Formal skill benchmark tests for Full Stack, SQL, and Python proficiency.",
};

const ASSESSMENTS = [
  { id: "fsd-benchmark", title: "Full Stack Engineering Assessment", questions: 30, duration: "60 Mins", passingScore: "75%", badge: "Official" },
  { id: "sql-benchmark", title: "Advanced SQL & Database Tuning Exam", questions: 20, duration: "45 Mins", passingScore: "80%", badge: "Official" },
  { id: "python-benchmark", title: "Python Software Development Benchmark", questions: 25, duration: "50 Mins", passingScore: "70%", badge: "Official" },
];

export default function AssessmentsPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Standardized Tests</div>
          <h1 className="section-title">
            Formal Skill <span className="gradient-text">Assessments</span>
          </h1>
          <p className="section-desc">
            Benchmark your proficiency against industry standards. Passing scores unlock verifiable badges on your student profile.
          </p>
        </div>

        <div className="grid-3">
          {ASSESSMENTS.map((a) => (
            <Card key={a.id} style={{ display: "flex", flexDirection: "column" }}>
              <Badge variant="primary" style={{ alignSelf: "flex-start", marginBottom: "14px" }}>{a.badge}</Badge>
              <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>
                {a.title}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
                <span>⏱️ Time Limit: {a.duration}</span>
                <span>📋 Format: {a.questions} Problems & MCQs</span>
                <span>🎯 Passing Benchmark: {a.passingScore}</span>
              </div>
              <Button href={`/practice/assessments/${a.id}`} variant="secondary" style={{ marginTop: "auto" }}>
                Start Benchmark Test →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

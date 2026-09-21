import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export const metadata = {
  title: "My Enrolled Courses | Student Dashboard",
};

export default function MyCoursesPage() {
  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "8px" }}>
        My Enrolled Programs & Courses
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
        Access your active cohorts, live class recordings, and assignment schedules.
      </p>

      <Card style={{ padding: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <div>
            <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: 700 }}>BATCH: 2026-FSD-C1</span>
            <h2 style={{ fontSize: "1.3rem", color: "#fff", marginTop: "4px" }}>Full Stack Development Career Program</h2>
          </div>
          <span style={{ fontSize: "0.9rem", color: "var(--accent-emerald)", fontWeight: 700 }}>68% Completed</span>
        </div>

        <div className="progress-bar-bg" style={{ marginBottom: "20px" }}>
          <div className="progress-bar-fill" style={{ width: "68%" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Next Live Session: Sunday 10:00 AM • Mentor: Karthik V.
          </div>
          <Button href="/programs/full-stack-development" variant="primary" size="sm">
            Launch Course Player →
          </Button>
        </div>
      </Card>
    </div>
  );
}

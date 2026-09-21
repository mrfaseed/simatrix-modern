import Link from "next/link";
import { PRACTICE_MODULES } from "@/lib/data/practice";
import PracticeCard from "@/components/practice/PracticeCard";
import Badge from "@/components/common/Badge";

export const metadata = {
  title: "SQLLab | Database Query Drills | Simatrix Academy",
  description: "Interactive SQL queries, multi-table joins, aggregations, and window functions on populated databases.",
};

export default function SQLLabPage() {
  const labData = PRACTICE_MODULES.find((m) => m.id === "sql-lab");

  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/practice" style={{ color: "var(--text-secondary)" }}>Practice</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>SQLLab</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>SQLLab</Badge>
          <h1 className="section-title">
            Relational SQL <span className="gradient-text">Query Sandboxes</span>
          </h1>
          <p className="section-desc">
            Write real PostgreSQL & MySQL queries against production-like schemas with instant visual table validation.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {labData?.sampleProblems.map((problem) => (
            <PracticeCard
              key={problem.id}
              problem={problem}
              moduleSlug="sql-lab"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

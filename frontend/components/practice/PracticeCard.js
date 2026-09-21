import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";

export default function PracticeCard({ problem, moduleSlug }) {
  const diffBadge = {
    Easy: "emerald",
    Medium: "amber",
    Hard: "primary",
  }[problem.difficulty] || "default";

  return (
    <Card style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
          <Badge variant={diffBadge}>{problem.difficulty}</Badge>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-emerald)", fontWeight: 700 }}>
            +{problem.xp} XP
          </span>
          {problem.solvedCount && (
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              {problem.solvedCount.toLocaleString()} solved
            </span>
          )}
        </div>
        <h4 style={{ fontSize: "1.05rem", color: "#fff" }}>
          {problem.title}
        </h4>
      </div>

      <Link
        href={`/practice/${moduleSlug}/${problem.id}`}
        className="btn btn-secondary btn-sm"
      >
        Solve Challenge →
      </Link>
    </Card>
  );
}

import Link from "next/link";
import { PRACTICE_MODULES } from "@/lib/data/practice";
import PracticeCard from "@/components/practice/PracticeCard";
import Badge from "@/components/common/Badge";

export const metadata = {
  title: "CodeArena | DSA & Algorithmic Practice | Simatrix Academy",
  description: "Solve algorithmic problems in Python, JavaScript, Java, C, and C++ with automated test cases.",
};

export default function CodeArenaPage() {
  const arenaData = PRACTICE_MODULES.find((m) => m.id === "code-arena");

  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/practice" style={{ color: "var(--text-secondary)" }}>Practice</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>CodeArena</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>CodeArena</Badge>
          <h1 className="section-title">
            Algorithmic <span className="gradient-text">Coding Challenges</span>
          </h1>
          <p className="section-desc">
            Strengthen your problem-solving logic. Test against standard and edge cases.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {arenaData?.sampleProblems.map((problem) => (
            <PracticeCard
              key={problem.id}
              problem={problem}
              moduleSlug="code-arena"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

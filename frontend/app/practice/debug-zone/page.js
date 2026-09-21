import Link from "next/link";
import { PRACTICE_MODULES } from "@/lib/data/practice";
import PracticeCard from "@/components/practice/PracticeCard";
import Badge from "@/components/common/Badge";

export const metadata = {
  title: "DebugZone | Fix The Code | Simatrix Academy",
  description: "Debug sneaky logic errors, memory leaks, and broken implementations.",
};

export default function DebugZonePage() {
  const debugData = PRACTICE_MODULES.find((m) => m.id === "debug-zone");

  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/practice" style={{ color: "var(--text-secondary)" }}>Practice</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>DebugZone</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>Fix The Code</Badge>
          <h1 className="section-title">
            DebugZone: <span className="gradient-text">Fix Broken Code</span>
          </h1>
          <p className="section-desc">
            Senior developers spend more time debugging than writing fresh code. Inspect buggy snippets and fix them under test constraints.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {debugData?.sampleProblems.map((problem) => (
            <PracticeCard
              key={problem.id}
              problem={problem}
              moduleSlug="debug-zone"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

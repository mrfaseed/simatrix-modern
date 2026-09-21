import Link from "next/link";
import { PRACTICE_MODULES } from "@/lib/data/practice";
import PracticeCard from "@/components/practice/PracticeCard";
import Badge from "@/components/common/Badge";

export const metadata = {
  title: "WebLab | Frontend UI Sandbox | Simatrix Academy",
  description: "Interactive frontend challenges in HTML, CSS, JavaScript, and React.",
};

export default function WebLabPage() {
  const labData = PRACTICE_MODULES.find((m) => m.id === "web-lab");

  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/practice" style={{ color: "var(--text-secondary)" }}>Practice</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>WebLab</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>WebLab</Badge>
          <h1 className="section-title">
            Frontend & UI <span className="gradient-text">Interactive Drills</span>
          </h1>
          <p className="section-desc">
            Construct accessible, pixel-perfect user interface components with live browser previews.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {labData?.sampleProblems.map((problem) => (
            <PracticeCard
              key={problem.id}
              problem={problem}
              moduleSlug="web-lab"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

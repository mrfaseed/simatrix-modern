import Link from "next/link";
import CodeEditorStub from "@/components/practice/CodeEditorStub";
import Badge from "@/components/common/Badge";

export async function generateMetadata({ params }) {
  const { problemId } = await params;
  return {
    title: `${problemId.replace(/-/g, " ").toUpperCase()} | CodeArena | Simatrix`,
  };
}

export default async function CodeArenaProblemPage({ params }) {
  const { problemId } = await params;
  const title = problemId
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="section" style={{ paddingTop: "40px" }}>
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "18px" }}>
          <Link href="/practice" style={{ color: "var(--text-secondary)" }}>Practice</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/practice/code-arena" style={{ color: "var(--text-secondary)" }}>CodeArena</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{title}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
              <Badge variant="emerald">Easy</Badge>
              <span style={{ fontSize: "0.85rem", color: "var(--accent-emerald)", fontWeight: 700 }}>+50 XP</span>
            </div>
            <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>{title}</h1>
          </div>
        </div>

        {/* Interactive Lab Sandbox */}
        <CodeEditorStub
          language="python"
          problemTitle={title}
          initialCode={`def ${problemId.replace(/-/g, "_")}(nums, target):\n    \"\"\"\n    Given an array of integers nums and an integer target, \n    return indices of the two numbers such that they add up to target.\n    \"\"\"\n    seen = {}\n    for i, n in enumerate(nums):\n        diff = target - n\n        if diff in seen:\n            return [seen[diff], i]\n        seen[n] = i\n    return []\n`}
        />
      </div>
    </div>
  );
}

import Link from "next/link";
import CodeEditorStub from "@/components/practice/CodeEditorStub";
import Badge from "@/components/common/Badge";

export async function generateMetadata({ params }) {
  const { problemId } = await params;
  return {
    title: `Debug: ${problemId.replace(/-/g, " ").toUpperCase()} | Simatrix`,
  };
}

export default async function DebugZoneProblemPage({ params }) {
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
          <Link href="/practice/debug-zone" style={{ color: "var(--text-secondary)" }}>DebugZone</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{title}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
              <Badge variant="amber">Debug Drill</Badge>
              <span style={{ fontSize: "0.85rem", color: "var(--accent-emerald)", fontWeight: 700 }}>+60 XP</span>
            </div>
            <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>{title}</h1>
          </div>
        </div>

        <CodeEditorStub
          language="python"
          problemTitle={title}
          initialCode={`# BUGGY CODE: Identify and correct the logic flaw below\ndef calculate_total(cart_items, tax_rate=0.08):\n    total = 0\n    for item in cart_items:\n        # BUG: Missing quantity multiplier and wrong rounding\n        total += item['price']\n    return round(total * (1 + tax_rate), 2)\n`}
        />
      </div>
    </div>
  );
}

import Link from "next/link";
import CodeEditorStub from "@/components/practice/CodeEditorStub";
import Badge from "@/components/common/Badge";

export async function generateMetadata({ params }) {
  const { problemId } = await params;
  return {
    title: `${problemId.replace(/-/g, " ").toUpperCase()} | SQLLab | Simatrix`,
  };
}

export default async function SQLLabProblemPage({ params }) {
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
          <Link href="/practice/sql-lab" style={{ color: "var(--text-secondary)" }}>SQLLab</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{title}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
              <Badge variant="amber">Medium</Badge>
              <span style={{ fontSize: "0.85rem", color: "var(--accent-emerald)", fontWeight: 700 }}>+70 XP</span>
            </div>
            <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>{title}</h1>
          </div>
        </div>

        <CodeEditorStub
          language="sql"
          problemTitle={title}
          initialCode={`-- Write your PostgreSQL query for: ${title}\nSELECT \n    c.customer_id,\n    c.name,\n    SUM(o.total_amount) AS total_spent\nFROM customers c\nJOIN orders o ON c.customer_id = o.customer_id\nGROUP BY c.customer_id, c.name\nORDER BY total_spent DESC\nLIMIT 5;\n`}
        />
      </div>
    </div>
  );
}

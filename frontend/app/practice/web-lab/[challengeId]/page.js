import Link from "next/link";
import CodeEditorStub from "@/components/practice/CodeEditorStub";
import Badge from "@/components/common/Badge";

export async function generateMetadata({ params }) {
  const { challengeId } = await params;
  return {
    title: `${challengeId.replace(/-/g, " ").toUpperCase()} | WebLab | Simatrix`,
  };
}

export default async function WebLabChallengePage({ params }) {
  const { challengeId } = await params;
  const title = challengeId
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="section" style={{ paddingTop: "40px" }}>
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "18px" }}>
          <Link href="/practice" style={{ color: "var(--text-secondary)" }}>Practice</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/practice/web-lab" style={{ color: "var(--text-secondary)" }}>WebLab</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{title}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
              <Badge variant="emerald">Easy</Badge>
              <span style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontWeight: 700 }}>+50 XP</span>
            </div>
            <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>{title}</h1>
          </div>
        </div>

        <CodeEditorStub
          language="javascript"
          problemTitle={title}
          initialCode={`// WebLab Challenge: ${title}\nfunction createNavbar() {\n  const nav = document.createElement('nav');\n  nav.className = 'navbar';\n  nav.innerHTML = '<div class="logo">Simatrix</div><ul class="nav-links"><li>Home</li><li>Practice</li></ul>';\n  return nav;\n}\n`}
        />
      </div>
    </div>
  );
}

import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Peer Discussions & Q&A | Simatrix Academy",
  description: "Ask technical questions and share insights with the Simatrix developer community.",
};

const DISCUSSIONS = [
  { id: "1", title: "How to handle JWT token expiration gracefully in Next.js 16 Server Actions?", author: "Karthik V.", replies: 14, category: "Next.js", time: "2 hours ago" },
  { id: "2", title: "Optimizing PostgreSQL window query: PARTITION BY vs indexed subquery", author: "Sakthi Kumar", replies: 8, category: "SQL", time: "5 hours ago" },
  { id: "3", title: "My experience interviewing at an early stage FinTech startup (FSD Role)", author: "Priya Raman", replies: 27, category: "Career", time: "1 day ago" },
];

export default function DiscussionsPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "880px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/community" style={{ color: "var(--text-secondary)" }}>Community</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Discussions</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 className="section-title" style={{ marginBottom: "8px" }}>Community Forum</h1>
            <p className="section-desc">Search discussions or ask a technical question.</p>
          </div>
          <Button href="/login" variant="glow">
            + New Discussion Thread
          </Button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {DISCUSSIONS.map((d) => (
            <Card key={d.id} style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "6px" }}>
                  <Badge variant="primary">{d.category}</Badge>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Posted by {d.author} • {d.time}</span>
                </div>
                <h3 style={{ fontSize: "1.05rem", color: "#fff" }}>{d.title}</h3>
              </div>
              <span style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
                💬 {d.replies} replies
              </span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

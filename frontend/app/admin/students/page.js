import Card from "@/components/common/Card";
import Link from "next/link";

export const metadata = {
  title: "Manage Students | Admin | Simatrix",
};

export default function AdminStudentsPage() {
  const students = [
    { name: "Sakthi Kumar", username: "sakthi", program: "Full Stack 2026", status: "Active", xp: 2480 },
    { name: "Priya Raman", username: "priya", program: "Data Analytics 2026", status: "Active", xp: 2100 },
    { name: "Arunachalam M.", username: "arun", program: "Full Stack 2026", status: "Active", xp: 4120 },
  ];

  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "8px" }}>Student Directory</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>View student enrollment, progress, and public portfolio status.</p>

      <Card style={{ padding: "0", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1.5fr 1fr 1fr 1fr", padding: "14px 20px", background: "rgba(255,255,255,0.03)", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)" }}>
          <span>Name</span>
          <span>Program</span>
          <span>XP</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        {students.map((s) => (
          <div key={s.username} style={{ display: "grid", gridTemplateColumns: "1.5fr 1.5fr 1fr 1fr 1fr", padding: "16px 20px", borderBottom: "1px solid var(--border-subtle)", alignItems: "center" }}>
            <span style={{ color: "#fff", fontWeight: 600 }}>{s.name}</span>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>{s.program}</span>
            <span style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>{s.xp}</span>
            <span style={{ color: "var(--accent-emerald)", fontSize: "0.85rem" }}>{s.status}</span>
            <Link href={`/profile/${s.username}`} style={{ fontSize: "0.85rem", color: "var(--primary)" }}>
              View Profile →
            </Link>
          </div>
        ))}
      </Card>
    </div>
  );
}

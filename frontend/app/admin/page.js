import Card from "@/components/common/Card";

export const metadata = {
  title: "Admin Analytics | Simatrix Academy",
};

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "8px" }}>Platform Operations & Analytics</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>Monitor active enrollments, lab submissions, and system health.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px", marginBottom: "36px" }}>
        <Card style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Total Students</div>
          <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginTop: "4px" }}>2,410</div>
          <div style={{ fontSize: "0.78rem", color: "var(--accent-emerald)", marginTop: "4px" }}>+18% this month</div>
        </Card>
        <Card style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Submissions Reviewed</div>
          <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--accent-cyan)", marginTop: "4px" }}>1,842</div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px" }}>12 pending mentor check</div>
        </Card>
        <Card style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Certificates Issued</div>
          <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--accent-emerald)", marginTop: "4px" }}>418</div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px" }}>100% verified online</div>
        </Card>
        <Card style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Sunday Workshop Regs</div>
          <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--accent-amber)", marginTop: "4px" }}>384</div>
          <div style={{ fontSize: "0.78rem", color: "var(--accent-emerald)", marginTop: "4px" }}>Live in 2 days</div>
        </Card>
      </div>
    </div>
  );
}

import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Student Dashboard | Simatrix Academy",
  description: "Manage your enrolled career programs, daily code streaks, and project review status.",
};

export default function DashboardOverviewPage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "6px" }}>
            Welcome back, Sakthi! 👋
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
            You are on a 42-day practice streak. Keep the momentum going!
          </p>
        </div>

        <Button href="/practice/code-arena" variant="glow" size="sm">
          Continue Today&apos;s Practice →
        </Button>
      </div>

      {/* Metrics Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px", marginBottom: "36px" }}>
        <Card style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px" }}>Active Program</div>
          <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>Full Stack 2026</div>
          <div style={{ fontSize: "0.78rem", color: "var(--accent-emerald)", marginTop: "4px" }}>Cohort In Progress (68%)</div>
        </Card>
        <Card style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px" }}>CodeArena XP</div>
          <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--accent-cyan)" }}>2,480 XP</div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px" }}>Rank #14 Global</div>
        </Card>
        <Card style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px" }}>Projects Shipped</div>
          <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>4 Approved</div>
          <div style={{ fontSize: "0.78rem", color: "var(--accent-emerald)", marginTop: "4px" }}>All verified</div>
        </Card>
        <Card style={{ padding: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px" }}>Resume Status</div>
          <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--accent-amber)" }}>92/100 ATS</div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px" }}>Ready for job referrals</div>
        </Card>
      </div>

      {/* Today's Action Plan */}
      <Card style={{ padding: "28px", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "16px" }}>
          Today&apos;s Recommended Milestones
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { title: "Solve daily CodeArena challenge: Reverse Linked List", xp: "+50 XP", link: "/practice/code-arena" },
            { title: "Review Module 4: PostgreSQL Prisma Migrations", xp: "Lesson 18", link: "/dashboard/my-courses" },
            { title: "Submit E-commerce Capstone PR for Mentor Review", xp: "Milestone", link: "/build/submit" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 18px",
                borderRadius: "var(--radius-sm)",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <input type="checkbox" style={{ accentColor: "var(--primary)" }} />
                <span style={{ fontSize: "0.95rem", color: "#fff" }}>{item.title}</span>
              </div>
              <Link href={item.link} style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
                {item.xp} →
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

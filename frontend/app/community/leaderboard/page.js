import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";

export const metadata = {
  title: "Global Practice Leaderboard | Simatrix Academy",
  description: "Track the top coders and project builders across the Simatrix ecosystem.",
};

const LEADERBOARD = [
  { rank: 1, name: "Arunachalam M.", username: "arun", xp: 4120, problems: 310, badge: "Master", streak: 65 },
  { rank: 2, name: "Sneha Reddy", username: "sneha", xp: 3890, problems: 284, badge: "Expert", streak: 54 },
  { rank: 3, name: "Sakthi Kumar", username: "sakthi", xp: 2480, problems: 184, badge: "Advanced", streak: 42 },
  { rank: 4, name: "Rohan Das", username: "rohan", xp: 2310, problems: 165, badge: "Advanced", streak: 31 },
  { rank: 5, name: "Ananya Iyer", username: "ananya", xp: 2150, problems: 140, badge: "Intermediate", streak: 28 },
];

export default function LeaderboardPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "880px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/community" style={{ color: "var(--text-secondary)" }}>Community</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Leaderboard</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 30px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>Competitive Ranking</Badge>
          <h1 className="section-title">
            Global <span className="gradient-text">XP Leaderboard</span>
          </h1>
          <p className="section-desc">
            Earn experience points (XP) daily through CodeArena drills, SQLLab challenges, and approved project submissions.
          </p>
        </div>

        <Card style={{ padding: "0", overflow: "hidden" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "80px 1.8fr 1fr 1fr 1fr",
            padding: "16px 24px",
            background: "rgba(255, 255, 255, 0.04)",
            borderBottom: "1px solid var(--border-subtle)",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}>
            <span>Rank</span>
            <span>Coder</span>
            <span>Total XP</span>
            <span>Problems</span>
            <span>Streak</span>
          </div>

          {LEADERBOARD.map((item) => (
            <div
              key={item.rank}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1.8fr 1fr 1fr 1fr",
                padding: "16px 24px",
                borderBottom: "1px solid var(--border-subtle)",
                alignItems: "center",
                background: item.rank === 3 ? "rgba(99, 102, 241, 0.08)" : "transparent",
              }}
            >
              <span style={{
                fontWeight: 800,
                fontSize: "1.1rem",
                color: item.rank === 1 ? "var(--accent-amber)" : item.rank === 2 ? "#e2e8f0" : item.rank === 3 ? "#cd7f32" : "var(--text-muted)",
              }}>
                #{item.rank}
              </span>

              <div>
                <Link href={`/profile/${item.username}`} style={{ fontWeight: 700, color: "#fff", display: "inline-block" }}>
                  {item.name}
                </Link>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>@{item.username}</div>
              </div>

              <span style={{ fontWeight: 700, color: "var(--accent-cyan)", fontSize: "0.95rem" }}>
                {item.xp.toLocaleString()} XP
              </span>

              <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                {item.problems} solved
              </span>

              <span style={{ color: "var(--accent-emerald)", fontWeight: 600, fontSize: "0.88rem" }}>
                🔥 {item.streak} days
              </span>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

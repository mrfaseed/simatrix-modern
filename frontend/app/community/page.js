import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Community & Peer Learning | Simatrix Academy",
  description: "Connect with fellow learners, collaborate on projects, and compete on the global leaderboard.",
};

export default function CommunityPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Student Community</div>
          <h1 className="section-title">
            Learn Together, <span className="gradient-text">Build Together</span>
          </h1>
          <p className="section-desc">
            Engage with over 5,000+ ambitious developers, participate in weekly hack sprints, and ask technical questions.
          </p>
        </div>

        <div className="grid-2">
          <Card style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>💬</div>
            <h2 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>Discussions & Q&A</h2>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1 }}>
              Get help with stubborn bugs in CodeArena, discuss architectural patterns, and share job interview experiences.
            </p>
            <Button href="/community/discussions" variant="secondary">Join Discussion Board →</Button>
          </Card>

          <Card style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🥇</div>
            <h2 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>XP Leaderboard</h2>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1 }}>
              Compete with your cohort peers. Earn XP daily by solving CodeArena problems and shipping reviewed capstones.
            </p>
            <Button href="/community/leaderboard" variant="secondary">Check Leaderboard →</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

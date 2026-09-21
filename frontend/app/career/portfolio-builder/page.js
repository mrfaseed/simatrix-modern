import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

export const metadata = {
  title: "Portfolio Builder | Simatrix Academy",
  description: "Create an instant public developer portfolio page backed by Simatrix verification.",
};

export default function PortfolioBuilderPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "840px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/career" style={{ color: "var(--text-secondary)" }}>Career</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Portfolio Builder</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 30px 0" }}>
          <Badge variant="emerald" style={{ marginBottom: "12px" }}>Instant Web Profile</Badge>
          <h1 className="section-title">
            Digital <span className="gradient-text">Portfolio Builder</span>
          </h1>
          <p className="section-desc">
            Your personal digital portfolio at <code>simatrixacademy.com/profile/yourname</code> generated automatically as you complete challenges and capstone projects.
          </p>
        </div>

        <Card style={{ padding: "36px" }}>
          <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "16px" }}>
            Included in Your Simatrix Digital Portfolio:
          </h2>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "28px" }}>
            <li>Interactive skills mastery bars calculated from practice exercises</li>
            <li>Direct links to reviewed GitHub repositories & live deployments</li>
            <li>Official Simatrix digital credential with QR verification</li>
            <li>CodeArena rankings, total XP, and streak milestones</li>
          </ul>

          <div style={{ display: "flex", gap: "16px" }}>
            <Button href="/profile/sakthi" variant="primary" size="lg">
              View Live Example: Sakthi Kumar →
            </Button>
            <Button href="/login" variant="secondary" size="lg">
              Claim Your Username
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

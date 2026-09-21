import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Professional Tech Communication | Simatrix Academy",
  description: "Communication training: technical presentation, standup etiquette, and behavioral storytelling.",
};

export default function CommunicationPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "840px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/career" style={{ color: "var(--text-secondary)" }}>Career</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Communication</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 30px 0" }}>
          <Badge variant="emerald" style={{ marginBottom: "12px" }}>Soft Skills & Delivery</Badge>
          <h1 className="section-title">
            Professional <span className="gradient-text">Tech Communication</span>
          </h1>
          <p className="section-desc">
            Technical skills get you the interview; clear communication gets you the job offer. Master articulating complex code simply.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            { title: "The STAR Technique for Behavioral Questions", desc: "Structure your answers with Situation, Task, Action, and Result to convey maximum impact." },
            { title: "Explaining Technical Trade-offs", desc: "Learn how to explain why you chose PostgreSQL over MongoDB or Redux over Context with confidence." },
            { title: "Agile Standup & Code Review Etiquette", desc: "Simulate daily engineering scrums, PR discussions, and constructive code feedback." },
          ].map((item) => (
            <Card key={item.title} style={{ padding: "24px" }}>
              <h2 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "8px" }}>{item.title}</h2>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>{item.desc}</p>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: "36px" }}>
          <Button href="/login" variant="glow" size="lg">
            Join Next Live Communication Workshop →
          </Button>
        </div>
      </div>
    </div>
  );
}

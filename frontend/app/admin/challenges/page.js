import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { PROJECT_CHALLENGES } from "@/lib/data/projects";

export const metadata = {
  title: "Manage Challenges | Admin | Simatrix",
};

export default function AdminChallengesPage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div>
          <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "8px" }}>Project & Practice Challenges</h1>
          <p style={{ color: "var(--text-secondary)" }}>Create and manage real-world project briefs and CodeArena test fixtures.</p>
        </div>
        <Button variant="glow" size="sm">+ New Challenge</Button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {PROJECT_CHALLENGES.map((proj) => (
          <Card key={proj.id} style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", color: "#fff" }}>{proj.title}</h3>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "4px" }}>
                {proj.difficulty} • {proj.duration} • {proj.submissionsCount} submissions
              </div>
            </div>
            <Button href={`/build/challenges/${proj.id}`} variant="secondary" size="sm">
              View Brief →
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

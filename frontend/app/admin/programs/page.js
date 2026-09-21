import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { FLAGSHIP_PROGRAMS } from "@/lib/data/programs";

export const metadata = {
  title: "Manage Programs | Admin | Simatrix",
};

export default function AdminProgramsPage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div>
          <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "8px" }}>Manage Career Programs</h1>
          <p style={{ color: "var(--text-secondary)" }}>Update curriculum modules, cohorts, and learning outcomes.</p>
        </div>
        <Button variant="glow" size="sm">+ Create New Program</Button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {FLAGSHIP_PROGRAMS.map((p) => (
          <Card key={p.id} style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", color: "#fff" }}>{p.title}</h3>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "4px" }}>
                {p.duration} • {p.curriculum.length} Modules • {p.skills.length} Skills
              </div>
            </div>
            <Button href={`/programs/${p.slug}`} variant="secondary" size="sm">
              Preview Page →
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

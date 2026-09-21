import { notFound } from "next/navigation";
import Link from "next/link";
import { FLAGSHIP_PROGRAMS } from "@/lib/data/programs";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = FLAGSHIP_PROGRAMS.find((p) => p.slug === slug);
  if (!program) return { title: "Program Not Found | Simatrix Academy" };
  return {
    title: `${program.title} | Simatrix Academy`,
    description: program.tagline,
  };
}

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const program = FLAGSHIP_PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "var(--text-secondary)" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/programs" style={{ color: "var(--text-secondary)" }}>Programs</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{program.title}</span>
        </div>

        {/* Hero Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "40px",
          alignItems: "start",
          marginBottom: "60px",
        }}>
          <div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
              <Badge variant="primary">{program.badge}</Badge>
              <Badge variant="emerald">{program.mode}</Badge>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{program.duration}</span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "20px" }}>
              {program.title}
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", marginBottom: "30px", lineHeight: 1.6 }}>
              {program.tagline}
            </p>

            <div style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              padding: "24px",
              marginBottom: "30px",
            }}>
              <h3 style={{ fontSize: "1rem", color: "#fff", marginBottom: "14px" }}>What Makes This Program Different:</h3>
              <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                {program.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enrollment Sidebar Card */}
          <Card style={{ position: "sticky", top: "100px", padding: "30px" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent-cyan)", letterSpacing: "0.08em", marginBottom: "8px" }}>
              ADMISSIONS OPEN FOR 2026 BATCH
            </div>
            <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
              Next Cohort Starts Soon
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--text-muted)" }}>Duration:</span>
                <span style={{ color: "#fff", fontWeight: 600 }}>{program.duration}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--text-muted)" }}>Format:</span>
                <span style={{ color: "#fff", fontWeight: 600 }}>{program.mode}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--text-muted)" }}>Prerequisites:</span>
                <span style={{ color: "#fff", fontWeight: 600 }}>{program.level}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <span style={{ color: "var(--text-muted)" }}>Placement:</span>
                <span style={{ color: "var(--accent-emerald)", fontWeight: 700 }}>Career Launchpad Included</span>
              </div>
            </div>

            <Button href="/contact" variant="glow" size="lg" style={{ width: "100%", marginBottom: "12px" }}>
              Apply for Admission →
            </Button>
            <Button href="/free-learning" variant="secondary" style={{ width: "100%" }}>
              Try Free Trial Lessons
            </Button>
          </Card>
        </div>

        {/* Detailed Curriculum Section */}
        <div style={{ maxWidth: "840px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "24px" }}>
            Comprehensive Syllabus & Modules
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {program.curriculum.map((mod, index) => (
              <Card key={mod.module} style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "1.15rem", color: "#fff" }}>
                    {mod.module}
                  </h3>
                  <span style={{ fontSize: "0.78rem", color: "var(--accent-cyan)", fontWeight: 700 }}>
                    Step 0{index + 1}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {mod.topics.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.82rem",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "rgba(255, 255, 255, 0.04)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      • {t}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { SAMPLE_STUDENTS } from "@/lib/data/students";
import SkillBar from "@/components/profile/SkillBar";
import ProjectCard from "@/components/profile/ProjectCard";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export async function generateMetadata({ params }) {
  const { username } = await params;
  const student = SAMPLE_STUDENTS[username.toLowerCase()];
  if (!student) return { title: "Student Profile Not Found | Simatrix" };
  return {
    title: `${student.fullName} (@${student.username}) | Verified Profile | Simatrix Academy`,
    description: student.bio,
  };
}

export default async function StudentProfilePage({ params }) {
  const { username } = await params;
  const student = SAMPLE_STUDENTS[username.toLowerCase()];

  if (!student) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container">
        {/* Profile Header Header Card */}
        <div style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.2), rgba(12, 16, 23, 0.95))",
          border: "1px solid var(--border-glow)",
          borderRadius: "var(--radius-xl)",
          padding: "40px",
          marginBottom: "40px",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "24px",
          }}>
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <div style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "var(--grad-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.4rem",
                fontWeight: 900,
                color: "#fff",
                boxShadow: "0 0 25px var(--primary-glow)",
              }}>
                {student.fullName.split(" ").map(n => n[0]).join("")}
              </div>

              <div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "6px" }}>
                  <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff" }}>
                    {student.fullName}
                  </h1>
                  <Badge variant="emerald">✓ Verified Student</Badge>
                </div>
                <div style={{ fontSize: "1.05rem", color: "var(--accent-cyan)", fontWeight: 600, marginBottom: "8px" }}>
                  {student.title}
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  📍 {student.location} • 💼 {student.careerStatus}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {student.github && (
                <a href={student.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  GitHub ↗
                </a>
              )}
              {student.linkedin && (
                <a href={student.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  LinkedIn ↗
                </a>
              )}
              {student.portfolio && (
                <a href={student.portfolio} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  Portfolio ↗
                </a>
              )}
            </div>
          </div>

          <p style={{ marginTop: "24px", color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "800px", lineHeight: 1.6 }}>
            {student.bio}
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "16px",
          marginBottom: "40px",
        }}>
          {[
            { label: "Practice XP", val: student.stats.practiceScore.toLocaleString(), color: "var(--accent-cyan)" },
            { label: "Global Rank", val: `#${student.stats.globalRank}`, color: "var(--accent-amber)" },
            { label: "Challenges Solved", val: student.stats.challengesSolved, color: "#fff" },
            { label: "Daily Streak", val: `${student.stats.streakDays} Days 🔥`, color: "var(--accent-emerald)" },
            { label: "Verified Projects", val: `${student.stats.projectsShipped} Shipped`, color: "var(--primary)" },
          ].map((s) => (
            <Card key={s.label} style={{ padding: "18px", textAlign: "center" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: s.color, marginBottom: "4px" }}>
                {s.val}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.label}</div>
            </Card>
          ))}
        </div>

        {/* 2-Column Content: Skills + Verified Credentials */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginBottom: "40px" }}>
          {/* Skills Breakdown */}
          <Card style={{ padding: "30px" }}>
            <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "20px" }}>
              Authenticated Skills Breakdown
            </h2>
            {student.skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </Card>

          {/* Official Certificates */}
          <Card style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
            <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "20px" }}>
              Earned Certifications
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", flexGrow: 1 }}>
              {student.certificates.map((cert) => (
                <div
                  key={cert.id}
                  style={{
                    padding: "16px",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--accent-emerald)", fontWeight: 700, marginBottom: "4px" }}>
                    OFFICIAL CREDENTIAL
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
                    {cert.name}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "12px" }}>
                    Issued: {cert.issueDate} • ID: {cert.id}
                  </div>
                  <Link href={cert.verifyUrl} className="btn btn-secondary btn-sm">
                    View Cryptographic Verification →
                  </Link>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Shipped Projects Gallery */}
        <div>
          <div className="section-header" style={{ textAlign: "left", margin: "0 0 24px 0" }}>
            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
              Shipped Projects & <span className="gradient-text">Proof of Work</span>
            </h2>
            <p className="section-desc">
              All applications have passed automated test pipelines and code review by Simatrix mentors.
            </p>
          </div>

          <div className="grid-2">
            {student.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

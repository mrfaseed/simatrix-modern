import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Career Launchpad & Placement Prep | Simatrix Academy",
  description: "Comprehensive placement preparation: ATS resume builder, portfolio generator, mock interviews, and hiring partner job openings.",
};

const CAREER_PILLARS = [
  { href: "/career/resume-builder", title: "ATS Resume Builder", icon: "📄", desc: "Craft tailored, ATS-compliant tech resumes that showcase your verified Simatrix projects and skills." },
  { href: "/career/portfolio-builder", title: "Portfolio Builder", icon: "🌐", desc: "Instantly compile your CodeArena stats, GitHub repositories, and certificates into a sleek public portfolio." },
  { href: "/career/interview-prep", title: "Interview Question Bank", icon: "💡", desc: "1,000+ curated technical and behavioral interview questions with model answers and system design templates." },
  { href: "/career/mock-interviews", title: "1-on-1 Mock Interviews", icon: "🎙️", desc: "Simulate rigorous live technical screens with senior industry engineers and receive granular feedback." },
  { href: "/career/aptitude", title: "Aptitude & Reasoning", icon: "📊", desc: "Practice quantitative, logical, and verbal aptitude tests frequently used in campus and MNC hiring rounds." },
  { href: "/career/communication", title: "Tech Communication", icon: "🗣️", desc: "Master professional English, client presentations, standup etiquette, and behavioral interview storytelling." },
  { href: "/career/jobs", title: "Hiring Partner Job Board", icon: "💼", desc: "Access direct interview referrals and hiring partner openings across India's top tech hubs." },
];

export default function CareerHubPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge" style={{ background: "rgba(245, 158, 11, 0.15)", borderColor: "rgba(245, 158, 11, 0.3)", color: "var(--accent-amber)" }}>
            Career Readiness
          </div>
          <h1 className="section-title">
            The Simatrix <span style={{ color: "var(--accent-amber)" }}>Career Launchpad</span>
          </h1>
          <p className="section-desc">
            We don&apos;t make unverified placement promises. We build undeniable job readiness through structured interview training, real portfolios, and resume engineering.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: "50px" }}>
          {CAREER_PILLARS.map((p) => (
            <Card key={p.title} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{p.icon}</div>
              <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "10px" }}>{p.title}</h2>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1, lineHeight: 1.6 }}>
                {p.desc}
              </p>
              <Button href={p.href} variant="secondary" style={{ marginTop: "auto" }}>
                Access Tool →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

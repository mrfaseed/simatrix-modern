import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Partner Job Openings | Simatrix Academy",
  description: "Curated software engineering and data analytics openings with verified hiring partners.",
};

const JOBS = [
  { id: "fsd-nextech", role: "Junior Full Stack Developer", company: "NexTech Innovations", location: "Chennai / Remote", salary: "₹5.5 - 8.5 LPA", type: "Full-Time", skills: ["React", "Node.js", "PostgreSQL"], badge: "Partner Referral" },
  { id: "da-finpulse", role: "Associate Data Analyst", company: "FinPulse Analytics", location: "Bangalore / Hybrid", salary: "₹6.0 - 9.0 LPA", type: "Full-Time", skills: ["Python", "SQL", "Power BI"], badge: "Urgent Hiring" },
  { id: "frontend-cloudcraft", role: "Frontend Engineer (React)", company: "CloudCraft Labs", location: "Remote", salary: "₹5.0 - 7.5 LPA", type: "Full-Time", skills: ["Next.js", "TypeScript", "TailwindCSS"], badge: "New" },
];

export default function JobsPage() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/career" style={{ color: "var(--text-secondary)" }}>Career</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Jobs</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="emerald" style={{ marginBottom: "12px" }}>Hiring Network</Badge>
          <h1 className="section-title">
            Partner <span className="gradient-text">Job Openings</span>
          </h1>
          <p className="section-desc">
            Direct referral pipeline for Simatrix graduates who have completed capstones and verified student portfolios.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {JOBS.map((job) => (
            <Card key={job.id} style={{ padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                  <Badge variant="primary">{job.badge}</Badge>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{job.company}</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>•</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>📍 {job.location}</span>
                </div>
                <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "8px" }}>{job.role}</h2>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {job.skills.map((s) => (
                    <span key={s} style={{ fontSize: "0.75rem", padding: "2px 8px", background: "rgba(255,255,255,0.05)", borderRadius: "4px", color: "var(--text-secondary)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-emerald)", marginBottom: "8px" }}>
                  {job.salary}
                </div>
                <Button href={`/career/jobs/${job.id}`} variant="secondary" size="sm">
                  View Role & Apply →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

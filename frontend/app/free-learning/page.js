import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Free Tech Learning Hub | Simatrix Academy",
  description: "Start coding for free. Master Python, SQL, HTML/CSS, and JavaScript with free interactive tutorials, roadmaps, and cheat sheets.",
};

const FREE_RESOURCES = [
  { title: "Python Fundamentals for Beginners", type: "Free Course", duration: "4 Hours", tag: "Coding", desc: "Learn variables, loops, functions, and write your first automation script." },
  { title: "SQL Fundamentals & Query Basics", type: "Interactive Lab", duration: "3 Hours", tag: "Database", desc: "Learn SELECT, WHERE, JOIN, and GROUP BY on interactive databases." },
  { title: "HTML5 & Modern CSS Zero to Hero", type: "Tutorial Series", duration: "5 Hours", tag: "Web Dev", desc: "Build modern, responsive landing pages without any prior experience." },
  { title: "JavaScript ES6+ Cheat Sheet & Guide", type: "Cheat Sheet", duration: "30 Min Read", tag: "Guide", desc: "Arrow functions, destructuring, promises, async/await distilled with examples." },
  { title: "Excel for Data Analytics Essentials", type: "Free Course", duration: "3.5 Hours", tag: "Analytics", desc: "Master VLOOKUP, XLOOKUP, Pivot Tables, and business KPI calculations." },
  { title: "Top 100 Tech Interview Questions", type: "Question Bank", duration: "Study Guide", tag: "Career", desc: "Curated technical interview questions covering Python, SQL, React, and System Design." },
];

export default function FreeLearningPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge" style={{ background: "rgba(16, 185, 129, 0.15)", borderColor: "rgba(16, 185, 129, 0.3)", color: "var(--accent-emerald)" }}>
            100% Free Forever
          </div>
          <h1 className="section-title">
            The Simatrix <span className="gradient-text">Free Learning Hub</span>
          </h1>
          <p className="section-desc">
            No credit card required. Master core programming foundations, interactive labs, and download curated roadmaps.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: "50px" }}>
          {FREE_RESOURCES.map((res) => (
            <Card key={res.title} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
                <Badge variant="emerald">{res.type}</Badge>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{res.duration}</span>
              </div>

              <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "10px" }}>
                {res.title}
              </h2>

              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1 }}>
                {res.desc}
              </p>

              <Button href="/practice" variant="secondary" style={{ width: "100%" }}>
                Start Learning Now (Free) →
              </Button>
            </Card>
          ))}
        </div>

        {/* Funnel Callout */}
        <div style={{
          background: "rgba(12, 16, 23, 0.9)",
          border: "1px solid var(--border-glow)",
          borderRadius: "var(--radius-xl)",
          padding: "40px",
          textAlign: "center",
        }}>
          <h3 style={{ fontSize: "1.6rem", color: "#fff", marginBottom: "12px" }}>
            Ready to transition into a full-time tech career?
          </h3>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 24px auto" }}>
            Our intensive career programs include live mentor instruction, real capstone reviews, and dedicated placement support.
          </p>
          <Button href="/programs" variant="glow" size="lg">
            Explore Career Flagship Programs →
          </Button>
        </div>
      </div>
    </div>
  );
}

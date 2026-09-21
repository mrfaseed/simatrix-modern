import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ").toUpperCase()} | Simatrix Academy Course`,
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const courseTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/courses" style={{ color: "var(--text-secondary)" }}>Courses</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{courseTitle}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <Badge variant="primary" style={{ marginBottom: "16px" }}>Self-Paced Course</Badge>
            <h1 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
              {courseTitle}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "30px", lineHeight: 1.6 }}>
              Comprehensive step-by-step masterclass with interactive coding exercises, quizzes, and downloadable source code templates.
            </p>

            <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "16px" }}>Curriculum Outline</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { title: "Chapter 1: Environment Setup & Fundamentals", time: "2.5 Hours", count: "6 Lessons" },
                { title: "Chapter 2: Deep Dive into Syntax & Logic", time: "4.0 Hours", count: "10 Lessons" },
                { title: "Chapter 3: Interactive Lab Exercises", time: "3.5 Hours", count: "8 Lessons" },
                { title: "Chapter 4: Real-World Hands-on Project", time: "5.0 Hours", count: "4 Lessons" },
              ].map((c) => (
                <Card key={c.title} style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.95rem" }}>{c.title}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{c.count}</div>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontWeight: 600 }}>{c.time}</span>
                </Card>
              ))}
            </div>
          </div>

          <Card style={{ padding: "30px", position: "sticky", top: "100px" }}>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
              Enroll in {courseTitle}
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
              Get instant access to all video modules, lab sandboxes, and community support channels.
            </p>
            <Button href="/login" variant="glow" style={{ width: "100%", marginBottom: "12px" }}>
              Start Learning Now
            </Button>
            <Button href="/practice" variant="secondary" style={{ width: "100%" }}>
              Try Practice Sandbox
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

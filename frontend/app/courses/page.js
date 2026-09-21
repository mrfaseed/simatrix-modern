import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Self-Paced Courses | Simatrix Academy",
  description: "Learn modular tech skills in Python, SQL, React, Node.js, and Power BI at your own speed.",
};

const COURSES = [
  { id: "python-mastery", title: "Complete Python Mastery", lessons: 48, duration: "25 Hours", level: "Beginner", rating: "4.9/5", badge: "Bestseller" },
  { id: "sql-analytics", title: "SQL for Modern Data Analytics", lessons: 36, duration: "18 Hours", level: "All Levels", rating: "4.8/5", badge: "Popular" },
  { id: "react-nextjs", title: "Next.js 16 & React 19 Engineering", lessons: 42, duration: "30 Hours", level: "Intermediate", rating: "4.9/5", badge: "Updated" },
  { id: "power-bi-dax", title: "Business Intelligence with Power BI & DAX", lessons: 30, duration: "16 Hours", level: "Beginner", rating: "4.7/5", badge: "Career" },
  { id: "git-github", title: "Git, GitHub & Open Source Collaboration", lessons: 18, duration: "8 Hours", level: "Beginner", rating: "4.9/5", badge: "Essential" },
  { id: "docker-devops", title: "Docker & Cloud Deployment for Developers", lessons: 24, duration: "12 Hours", level: "Intermediate", rating: "4.8/5", badge: "DevOps" },
];

export default function CoursesPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Skill-Specific Courses</div>
          <h1 className="section-title">
            Self-Paced <span className="gradient-text">Video & Lab Courses</span>
          </h1>
          <p className="section-desc">
            Bite-sized, practical courses with lifetime access, interactive coding exercises, and downloadable resources.
          </p>
        </div>

        <div className="grid-3">
          {COURSES.map((course) => (
            <Card key={course.id} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <Badge variant={course.badge === "Bestseller" ? "primary" : "emerald"}>
                  {course.badge}
                </Badge>
                <span style={{ fontSize: "0.8rem", color: "var(--accent-amber)", fontWeight: 700 }}>
                  ★ {course.rating}
                </span>
              </div>

              <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>
                {course.title}
              </h2>

              <div style={{ display: "flex", gap: "16px", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                <span>⏱️ {course.duration}</span>
                <span>📚 {course.lessons} Lessons</span>
                <span>🎯 {course.level}</span>
              </div>

              <div style={{ marginTop: "auto" }}>
                <Button href={`/courses/${course.id}`} variant="secondary" style={{ width: "100%" }}>
                  Explore Course Syllabus →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { SAMPLE_STUDENTS } from "@/lib/data/students";
import ProjectCard from "@/components/profile/ProjectCard";
import Badge from "@/components/common/Badge";

export const metadata = {
  title: "Student Project Showcase | Simatrix Academy",
  description: "Browse verified student-built applications, analytics dashboards, and production systems.",
};

export default function StudentShowcasePage() {
  const sakthiProjects = SAMPLE_STUDENTS.sakthi.projects;

  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/build" style={{ color: "var(--text-secondary)" }}>Build</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Showcase</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="emerald" style={{ marginBottom: "12px" }}>Proof of Work Gallery</Badge>
          <h1 className="section-title">
            Student <span className="gradient-text">Project Showcase</span>
          </h1>
          <p className="section-desc">
            Explore verified applications built and shipped by Simatrix students. Every project is reviewed, tested, and backed by a public GitHub repository.
          </p>
        </div>

        <div className="grid-2">
          {sakthiProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

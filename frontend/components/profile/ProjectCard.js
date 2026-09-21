import Card from "@/components/common/Card";

export default function ProjectCard({ project }) {
  return (
    <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
        <h4 style={{ fontSize: "1.15rem", color: "#fff" }}>
          {project.title}
        </h4>
        {project.verifiedBy && (
          <span style={{
            fontSize: "0.72rem",
            padding: "2px 8px",
            borderRadius: "999px",
            background: "rgba(16, 185, 129, 0.15)",
            color: "var(--accent-emerald)",
            fontWeight: 700,
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}>
            ✓ Verified Build
          </span>
        )}
      </div>

      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "16px", flexGrow: 1 }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: "0.72rem",
              padding: "2px 8px",
              borderRadius: "4px",
              background: "rgba(255, 255, 255, 0.05)",
              color: "var(--text-secondary)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px", marginTop: "auto" }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ flexGrow: 1, textAlign: "center" }}
          >
            GitHub Repo ↗
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ flexGrow: 1, textAlign: "center" }}
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </Card>
  );
}

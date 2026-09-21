export default function SkillBar({ name, level }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "0.88rem" }}>
        <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{name}</span>
        <span style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>{level}%</span>
      </div>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

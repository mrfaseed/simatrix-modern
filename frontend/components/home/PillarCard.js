import Link from "next/link";

export default function PillarCard({ number, title, description, linkText, href, icon, color }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#FFFFFF",
        border: "1px solid var(--border-subtle)",
        borderRadius: "24px",
        padding: "30px 24px",
        boxShadow: "var(--shadow-card)",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}>
        <div style={{
          width: "50px",
          height: "50px",
          borderRadius: "14px",
          background: "var(--vil-ivory)",
          border: "1px solid var(--border-subtle)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          boxShadow: "var(--shadow-sm)",
        }}>
          {icon}
        </div>
        <span style={{
          fontSize: "0.86rem",
          fontWeight: 800,
          color: "var(--vil-gold-dim)",
          background: "var(--vil-gold-bg)",
          border: "1px solid var(--vil-gold-border)",
          padding: "3px 10px",
          borderRadius: "999px",
        }}>
          STEP {number}
        </span>
      </div>

      <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "10px", color: "var(--vil-navy)" }}>
        {title}
      </h3>

      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "22px", flexGrow: 1, lineHeight: 1.6 }}>
        {description}
      </p>

      <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "16px", marginTop: "auto" }}>
        <Link
          href={href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "0.88rem",
            fontWeight: 700,
            color: "var(--vil-navy)",
          }}
        >
          <span>{linkText}</span>
          <span style={{ color: "var(--vil-gold-dim)" }}>→</span>
        </Link>
      </div>
    </div>
  );
}

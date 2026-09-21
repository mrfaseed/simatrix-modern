import Card from "@/components/common/Card";

export default function CertificateBadge({ cert }) {
  return (
    <Card style={{
      border: "2px solid #a7f3d0",
      background: "#ffffff",
      padding: "40px",
      maxWidth: "680px",
      margin: "0 auto",
      boxShadow: "var(--shadow-card)",
      position: "relative",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
        <div>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.1em" }}>
            OFFICIAL SIMATRIX CREDENTIAL
          </div>
          <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)" }}>
            Certificate of Completion
          </div>
        </div>

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "999px",
          background: "#ecfdf5",
          border: "1px solid #a7f3d0",
          color: "#047857",
          fontWeight: 700,
          fontSize: "0.82rem",
        }}>
          <span>✓</span>
          <span>{cert.status || "VERIFIED"}</span>
        </div>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "4px" }}>
          Awarded To:
        </div>
        <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)" }}>
          {cert.studentName}
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        background: "#f8fafc",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        padding: "18px",
        marginBottom: "24px",
      }}>
        <div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Program Completed</div>
          <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>{cert.programName}</div>
        </div>
        <div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Date of Issuance</div>
          <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>{cert.issueDate}</div>
        </div>
        <div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Certificate ID</div>
          <div style={{ fontSize: "0.88rem", fontFamily: "var(--font-mono)", color: "var(--primary)", fontWeight: 700 }}>
            {cert.certificateId}
          </div>
        </div>
        <div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Academic Grade</div>
          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--accent-emerald)" }}>{cert.grade}</div>
        </div>
      </div>

      {cert.skillsVerified && (
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "8px", fontWeight: 600 }}>
            Skills Authenticated:
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {cert.skillsVerified.map((s) => (
              <span key={s} style={{
                fontSize: "0.75rem",
                padding: "3px 10px",
                borderRadius: "999px",
                background: "#f1f5f9",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
                fontWeight: 500,
              }}>
                ✓ {s}
              </span>
            ))}
          </div>
        </div>
      )}

      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
        Authenticated cryptographically by {cert.issuer || "Simatrix Academy Council"}.
      </div>
    </Card>
  );
}

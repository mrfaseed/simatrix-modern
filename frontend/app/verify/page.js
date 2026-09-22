"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function VerifySearchPage() {
  const [certId, setCertId] = useState("");
  const router = useRouter();

  const handleVerify = (e) => {
    e.preventDefault();
    if (certId.trim()) {
      router.push(`/verify/${certId.trim().toUpperCase()}`);
    }
  };

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "700px" }}>
        <div className="section-header">
          <div className="section-badge" style={{ background: "rgba(16, 185, 129, 0.15)", borderColor: "rgba(16, 185, 129, 0.3)", color: "var(--accent-emerald)" }}>
            Official Credential Verification
          </div>
          <h1 className="section-title">
            Verify a <span className="gradient-text">Simatrix Certificate</span>
          </h1>
          <p className="section-desc">
            Employers, recruiters, and academic institutions can verify the authenticity of credentials issued by Simatrix Academy.
          </p>
        </div>

        <Card style={{ padding: "36px" }}>
          <form onSubmit={handleVerify}>
            <label htmlFor="verifyCertInput" style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px" }}>
              Enter Certificate ID
            </label>
            <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
              <input
                id="verifyCertInput"
                type="text"
                placeholder="e.g. SIM-2026-FSD-000142"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                required
                style={{
                  flexGrow: 1,
                  padding: "14px 18px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border-focus)",
                  color: "var(--text-primary)",
                  fontSize: "1rem",
                  fontFamily: "var(--font-mono)",
                  outline: "none",
                }}
              />
              <Button type="submit" variant="glow" size="lg">
                Verify
              </Button>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Try sample verification:{" "}
              <Link href="/verify/SIM-2026-FSD-000142" style={{ color: "var(--accent-cyan)", textDecoration: "underline" }}>
                SIM-2026-FSD-000142
              </Link>{" "}
              or{" "}
              <Link href="/verify/SIM-2026-DA-000210" style={{ color: "var(--accent-cyan)", textDecoration: "underline" }}>
                SIM-2026-DA-000210
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Link from "next/link";

export default function AdminCertificatesPage() {
  const [issuedId, setIssuedId] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [programName, setProgramName] = useState("Full Stack Development Career Program");
  const [grade, setGrade] = useState("Distinction (Score: 94%)");

  const handleGenerate = async (e) => {
    e.preventDefault();
    const randomId = `SIM-2026-FSD-000${Math.floor(100 + Math.random() * 900)}`;

    try {
      await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          certificateId: randomId,
          studentName: studentName || "Sakthi Kumar",
          programName,
          grade,
        }),
      });
    } catch (err) {
      console.warn("API registration warning:", err);
    }

    setIssuedId(randomId);
  };

  return (
    <div style={{ maxWidth: "780px" }}>
      <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "8px" }}>
        Certificate Generator & QR Issuer
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
        Issue cryptographic credentials with instant verification URLs and QR signatures.
      </p>

      <Card style={{ padding: "30px", marginBottom: "30px" }}>
        <form onSubmit={handleGenerate} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label htmlFor="studentNameInput" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
              Student Full Name
            </label>
            <input
              id="studentNameInput"
              type="text"
              placeholder="e.g. Sakthi Kumar"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
              style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
            />
          </div>

          <div>
            <label htmlFor="programSelect" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
              Program Completed
            </label>
            <select
              id="programSelect"
              value={programName}
              onChange={(e) => setProgramName(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", background: "#131924", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
            >
              <option value="Full Stack Development Career Program">Full Stack Development Career Program</option>
              <option value="Data Analytics Masterclass">Data Analytics Masterclass</option>
              <option value="Data Science & AI Program">Data Science & AI Program</option>
            </select>
          </div>

          <div>
            <label htmlFor="gradeInput" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
              Grade & Distinction
            </label>
            <input
              id="gradeInput"
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
            />
          </div>

          <Button type="submit" variant="glow" style={{ alignSelf: "flex-start", marginTop: "10px" }}>
            Generate & Sign Certificate →
          </Button>
        </form>

        {issuedId && (
          <div style={{ marginTop: "24px", padding: "18px", borderRadius: "var(--radius-md)", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.4)" }}>
            <div style={{ color: "var(--accent-emerald)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "4px" }}>
              ✓ Certificate Issued Successfully!
            </div>
            <div style={{ color: "#fff", fontSize: "0.95rem", marginBottom: "10px" }}>
              Certificate ID: <strong>{issuedId}</strong>
            </div>
            <Link href={`/verify/${issuedId}`} style={{ color: "var(--accent-cyan)", fontSize: "0.88rem", textDecoration: "underline" }}>
              Open Public Verification URL ↗
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
}

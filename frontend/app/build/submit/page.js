"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function ProjectSubmissionPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "720px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/build" style={{ color: "var(--text-secondary)" }}>Build</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Submit Project</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 30px 0" }}>
          <h1 className="section-title">
            Submit Project for <span className="gradient-text">Verification</span>
          </h1>
          <p className="section-desc">
            Submit your completed challenge or capstone. Our automated linters and mentor reviewers will evaluate your submission.
          </p>
        </div>

        <Card style={{ padding: "32px" }}>
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                  Project / Challenge Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Executive Sales Analytics Dashboard"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border-subtle)",
                    color: "#fff",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                  GitHub Repository URL (Public)
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/your-username/project-repo"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border-subtle)",
                    color: "#fff",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                  Live Deployed URL (Vercel, Render, AWS, Streamlit)
                </label>
                <input
                  type="url"
                  placeholder="https://your-project.vercel.app"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border-subtle)",
                    color: "#fff",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "28px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                  Brief Notes / Architectural Decisions
                </label>
                <textarea
                  rows={4}
                  placeholder="Explain your database choices, performance benchmarks, or difficulties overcome..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border-subtle)",
                    color: "#fff",
                    outline: "none",
                  }}
                />
              </div>

              <Button type="submit" variant="glow" size="lg" style={{ width: "100%" }}>
                Submit for Code Review →
              </Button>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎉</div>
              <h2 style={{ fontSize: "1.5rem", color: "#fff", marginBottom: "10px" }}>Submission Received!</h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                Your project has been queued for automated CI linting and senior mentor review. Verified builds appear on your profile within 48 hours.
              </p>
              <Button href="/profile/sakthi" variant="primary">
                View Your Student Profile →
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

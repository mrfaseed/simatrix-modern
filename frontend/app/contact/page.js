"use client";

import { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "780px" }}>
        <div className="section-header">
          <Badge variant="primary" style={{ marginBottom: "12px" }}>Admissions & Counseling</Badge>
          <h1 className="section-title">
            Talk with a <span className="gradient-text">Career Advisor</span>
          </h1>
          <p className="section-desc">
            Have questions about curriculum, upcoming batch schedules, or fee structures? Get in touch with our admissions team.
          </p>
        </div>

        <Card style={{ padding: "36px" }}>
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label htmlFor="contactFullName" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Your Full Name
                </label>
                <input
                  id="contactFullName"
                  type="text"
                  required
                  placeholder="e.g. Sakthi Kumar"
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "var(--radius-sm)", background: "var(--bg-main)", border: "1px solid var(--border-subtle)", color: "var(--text-primary)", outline: "none" }}
                />
              </div>

              <div>
                <label htmlFor="contactPhone" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Phone Number
                </label>
                <input
                  id="contactPhone"
                  type="tel"
                  required
                  placeholder="+91 89033 90051"
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "var(--radius-sm)", background: "var(--bg-main)", border: "1px solid var(--border-subtle)", color: "var(--text-primary)", outline: "none" }}
                />
              </div>

              <div>
                <label htmlFor="contactProgram" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Program of Interest
                </label>
                <select id="contactProgram" style={{ width: "100%", padding: "12px 16px", borderRadius: "var(--radius-sm)", background: "var(--bg-main)", border: "1px solid var(--border-subtle)", color: "var(--text-primary)", outline: "none" }}>
                  <option>Full Stack Development Career Program</option>
                  <option>Data Analytics Masterclass</option>
                  <option>Data Science & AI Program</option>
                  <option>General Career Counseling</option>
                </select>
              </div>

              <Button type="submit" variant="glow" size="lg" style={{ marginTop: "10px" }}>
                Request Free Callback →
              </Button>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
              <h2 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "8px" }}>Inquiry Submitted!</h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Our senior academic counselor will reach out to you within 24 hours on your registered phone number.
              </p>
            </div>
          )}
        </Card>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginTop: "40px", fontSize: "0.92rem", color: "var(--text-muted)", textAlign: "center" }}>
          <div>📍 {SITE_CONFIG.address}</div>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            <span>📞 {SITE_CONFIG.phone}</span>
            <span>✉️ {SITE_CONFIG.email}</span>
            <span>🌐 simatrixacademy.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

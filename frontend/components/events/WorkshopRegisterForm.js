"use client";

import { useState } from "react";
import Button from "@/components/common/Button";

export default function WorkshopRegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🎉</div>
        <div style={{ color: "var(--accent-emerald)", fontWeight: 700, fontSize: "1.2rem", marginBottom: "6px" }}>
          Registration Confirmed!
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          We have sent the calendar invite and live session link to your email. See you this Sunday!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <input
        type="text"
        placeholder="Your Full Name"
        required
        style={{ padding: "12px 16px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
      />
      <input
        type="email"
        placeholder="Your Email Address"
        required
        style={{ padding: "12px 16px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
      />
      <Button type="submit" variant="glow" size="lg">
        Confirm Free Registration →
      </Button>
    </form>
  );
}

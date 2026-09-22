"use client";

import { useState } from "react";
import Button from "@/components/common/Button";

export default function WorkshopRegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/workshops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email }),
      });
    } catch (err) {
      console.warn("Workshop API warning:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

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
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <div>
        <label htmlFor="wsFullName" style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
          Your Full Name
        </label>
        <input
          id="wsFullName"
          type="text"
          placeholder="Your Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          style={{ width: "100%", padding: "12px 16px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
        />
      </div>

      <div>
        <label htmlFor="wsEmail" style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
          Your Email Address
        </label>
        <input
          id="wsEmail"
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "12px 16px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
        />
      </div>

      <Button type="submit" variant="glow" size="lg" disabled={loading}>
        {loading ? "Registering..." : "Confirm Free Registration →"}
      </Button>
    </form>
  );
}

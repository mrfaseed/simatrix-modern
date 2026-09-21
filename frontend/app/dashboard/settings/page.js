"use client";

import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function SettingsPage() {
  return (
    <div style={{ maxWidth: "680px" }}>
      <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "8px" }}>Account Settings</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
        Update your personal profile, public links, and career status.
      </p>

      <Card style={{ padding: "30px" }}>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Sakthi Kumar"
              style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
              Public Username (simatrixacademy.com/profile/...)
            </label>
            <input
              type="text"
              defaultValue="sakthi"
              style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
              GitHub URL
            </label>
            <input
              type="url"
              defaultValue="https://github.com/sakthikumar"
              style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
            />
          </div>

          <Button type="submit" variant="glow" style={{ alignSelf: "flex-start", marginTop: "10px" }}>
            Save Profile Changes
          </Button>
        </form>
      </Card>
    </div>
  );
}

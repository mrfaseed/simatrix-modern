"use client";

import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function LoginPage() {
  return (
    <div className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ maxWidth: "460px" }}>
        <Card style={{ padding: "36px" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "6px" }}>Student Login</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Sign in to your Simatrix LMS, practice labs, and portfolio.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
                Email Address
              </label>
              <input
                type="email"
                defaultValue="sakthi@simatrix.app"
                required
                style={{ width: "100%", padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
                Password
              </label>
              <input
                type="password"
                defaultValue="password123"
                required
                style={{ width: "100%", padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
              />
            </div>

            <Button type="submit" variant="glow" style={{ width: "100%", marginTop: "10px" }}>
              Log In to Portal →
            </Button>
          </form>

          <div style={{ textAlign: "center", marginTop: "24px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Don&apos;t have an account yet?{" "}
            <Link href="/register" style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
              Register Here
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

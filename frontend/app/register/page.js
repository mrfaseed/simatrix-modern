"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ maxWidth: "480px" }}>
        <Card style={{ padding: "36px" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "6px" }}>Create Free Account</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Join Simatrix Academy to practice in CodeArena and build proof of work.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label htmlFor="regFullNameInput" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
                Full Name
              </label>
              <input
                id="regFullNameInput"
                type="text"
                placeholder="e.g. Sakthi Kumar"
                required
                style={{ width: "100%", padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
              />
            </div>

            <div>
              <label htmlFor="regEmailInput" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
                Email Address
              </label>
              <input
                id="regEmailInput"
                type="email"
                placeholder="you@example.com"
                required
                style={{ width: "100%", padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
              />
            </div>

            <div>
              <label htmlFor="regPasswordInput" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
                Create Password
              </label>
              <input
                id="regPasswordInput"
                type="password"
                placeholder="At least 8 characters"
                required
                style={{ width: "100%", padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", color: "#fff", outline: "none" }}
              />
            </div>

            <Button type="submit" variant="glow" style={{ width: "100%", marginTop: "10px" }}>
              Get Started Free →
            </Button>
          </form>

          <div style={{ textAlign: "center", marginTop: "24px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
              Sign In
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

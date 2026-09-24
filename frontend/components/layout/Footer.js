import Link from "next/link";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";
import BrandLogo from "@/components/common/BrandLogo";

export default function Footer() {
  return (
    <footer style={{
      background: "#ffffff",
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: "60px",
      paddingBottom: "40px",
      marginTop: "auto",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
          gap: "40px",
          marginBottom: "50px",
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <BrandLogo variant="dark" height={32} />
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px", lineHeight: 1.6 }}>
              {SITE_CONFIG.tagline}
            </p>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span>📍 {SITE_CONFIG.location}</span>
              <span>📞 {SITE_CONFIG.phone}</span>
              <span>✉️ {SITE_CONFIG.email}</span>
              <span>🌐 simatrixacademy.com</span>
            </div>
          </div>

          {/* Column 1: Programs */}
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "18px" }}>
              Career Programs
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              {FOOTER_LINKS.programs.map((item) => (
                <Link key={item.label} href={item.href} style={{ color: "var(--text-secondary)" }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Practice */}
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "18px" }}>
              Interactive Practice
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              {FOOTER_LINKS.practice.map((item) => (
                <Link key={item.label} href={item.href} style={{ color: "var(--text-secondary)" }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Build */}
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "18px" }}>
              Build & Showcase
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              {FOOTER_LINKS.build.map((item) => (
                <Link key={item.label} href={item.href} style={{ color: "var(--text-secondary)" }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Platform */}
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "18px" }}>
              Simatrix Platform
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              {FOOTER_LINKS.platform.map((item) => (
                <Link key={item.label} href={item.href} style={{ color: "var(--text-secondary)" }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
        }}>
          <div>
            © {new Date().getFullYear()} Simatrix Academy. All rights reserved. Built with modern web standards.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/verify" style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
              Verify Certificate
            </Link>
            <Link href="/profile/sakthi" style={{ color: "var(--text-secondary)" }}>
              Sample Student Profile
            </Link>
            <Link href="/dashboard" style={{ color: "var(--text-secondary)" }}>
              Student Portal
            </Link>
            <Link href="/admin" style={{ color: "var(--text-secondary)" }}>
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

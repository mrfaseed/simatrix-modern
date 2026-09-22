"use client";

import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Admissions Announcement"
      style={{
        background: "var(--color-accent-hover)",
        color: "var(--color-accent-contrast)",
        padding: "8px 24px",
        fontSize: "0.82rem",
        fontWeight: 700,
        letterSpacing: "0.015em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        position: "relative",
        zIndex: 110,
        fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
        <span>2026 Admissions Open — Limited Seats at the Virudhunagar Campus | Scholarships Up to 50% Available</span>
      </div>
      <Link
        href="/contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "var(--color-primary)",
          color: "var(--color-primary-contrast)",
          padding: "3px 14px",
          borderRadius: "999px",
          fontSize: "0.74rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          transition: "all 0.15s ease",
          flexShrink: 0,
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.04)";
          e.currentTarget.style.background = "var(--color-primary-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background = "var(--color-primary)";
        }}
      >
        <span>Apply Now</span>
      </Link>
    </aside>
  );
}

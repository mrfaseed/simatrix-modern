"use client";

import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Admissions Announcement"
      style={{
        background: "linear-gradient(90deg, #E5A93C 0%, #F3C668 50%, #E5A93C 100%)",
        color: "#0B1320",
        padding: "8px 24px",
        fontSize: "0.82rem",
        fontWeight: 600,
        letterSpacing: "0.015em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        position: "relative",
        zIndex: 110,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
        <span>2026 Admissions Open — Limited Seats at the Chennai Campus | Scholarships Up to 50% Available</span>
      </div>
      <Link
        href="/contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "#0B1320",
          color: "#FAF8F5",
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
          e.currentTarget.style.background = "#1C283F";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background = "#0B1320";
        }}
      >
        <span>Apply Now</span>
      </Link>
    </aside>
  );
}

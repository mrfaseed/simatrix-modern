"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Admissions Announcement"
      style={{
        background: "#0F172A",
        color: "#F8FAFC",
        padding: "8px 48px 8px 24px",
        fontSize: "0.82rem",
        fontWeight: 600,
        letterSpacing: "0.015em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        position: "relative",
        zIndex: 110,
        fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        transition: "all 0.25s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
        <span
          style={{
            background: "rgba(245, 158, 11, 0.18)",
            color: "#F59E0B",
            fontSize: "0.72rem",
            fontWeight: 800,
            padding: "2px 8px",
            borderRadius: "4px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          2026 Admissions
        </span>
        <span style={{ color: "rgba(255, 255, 255, 0.9)" }}>
          Limited Seats at the Virudhunagar Tech Studio • Merit Scholarships Up to 50% Available
        </span>
      </div>

      <Link
        href="/contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "#0052FF",
          color: "#FFFFFF",
          padding: "4px 14px",
          borderRadius: "999px",
          fontSize: "0.74rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          transition: "all 0.15s ease",
          flexShrink: 0,
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0, 82, 255, 0.35)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.04)";
          e.currentTarget.style.background = "#0045D8";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background = "#0052FF";
        }}
      >
        <span>Apply Now →</span>
      </Link>

      {/* Close / Dismiss Button at Right End */}
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Close Announcement Bar"
        style={{
          position: "absolute",
          right: "14px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          color: "rgba(255, 255, 255, 0.6)",
          padding: "6px",
          cursor: "pointer",
          borderRadius: "6px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "color 0.15s ease, background 0.15s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#FFFFFF";
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
          e.currentTarget.style.background = "transparent";
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </aside>
  );
}


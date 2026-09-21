"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    {
      id: "campus",
      label: "THE CAMPUS & LABS",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
        </svg>
      ),
      badge: "UP TO 50% SCHOLARSHIP FOR ELIGIBLE STUDENTS",
      headlineLead: "Leave with skills",
      headlineAccent: "and a portfolio of proof.",
      subtitle: "Production codebases, multi-tenant MVPs, verified GitHub commits, and senior mentor code reviews — tangible evidence that opens doors to high-paying engineering roles or your own tech venture.",
      bgImage: "/images/campus_hero.jpg",
      primaryText: "See Outcomes",
      primaryHref: "/career",
      secondaryText: "Apply Now",
      secondaryHref: "/contact",
    },
    {
      id: "curriculum",
      label: "THE CURRICULUM",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      badge: "INDUSTRY 2026 PRODUCTION CURRICULUM",
      headlineLead: "Learn modern tech",
      headlineAccent: "and master production architectures.",
      subtitle: "Full-stack engineering, Next.js 15, FastAPI, PostgreSQL, vector embeddings, and cloud microservices — zero outdated slides, 100% real-world engineering.",
      bgImage: "/images/campus_hero.jpg",
      primaryText: "Explore Programs",
      primaryHref: "/programs",
      secondaryText: "Apply Now",
      secondaryHref: "/contact",
    },
    {
      id: "practice",
      label: "CODEARENA LABS",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      badge: "IN-BROWSER LIVE CODE SANDBOX",
      headlineLead: "Practice in-browser",
      headlineAccent: "with instant automated feedback.",
      subtitle: "Over 400 algorithmic drills, interactive SQLLab query consoles, and frontend React sandboxes with instant automated test feedback and daily XP streaks.",
      bgImage: "/images/innovation_lab.jpg",
      primaryText: "Try CodeArena Free",
      primaryHref: "/practice",
      secondaryText: "Apply Now",
      secondaryHref: "/contact",
    },
    {
      id: "outcomes",
      label: "OUTCOMES & PROOF",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      badge: "VERIFIED PROOF-OF-WORK PROFILES",
      headlineLead: "Every graduate gets",
      headlineAccent: "a verified public profile.",
      subtitle: "Recruiters skip generic resumes. Every student showcases tamper-proof verified credentials, GitHub commits, mentor evaluations, and CodeArena rankings.",
      bgImage: "/images/campus_hero.jpg",
      primaryText: "Inspect Student Portfolio",
      primaryHref: "/profile/sakthi",
      secondaryText: "Apply Now",
      secondaryHref: "/contact",
    },
  ];

  const current = tabs[activeTab];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${current.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        color: "#FAF8F5",
        overflow: "hidden",
        transition: "background-image 0.6s ease-in-out",
      }}
    >
      {/* Silky Cinematic Vignette Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(8, 14, 26, 0.96) 0%, rgba(8, 14, 26, 0.86) 38%, rgba(8, 14, 26, 0.32) 70%, rgba(8, 14, 26, 0.08) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Subtle Top Shadow Fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "90px",
          background: "linear-gradient(180deg, rgba(8, 14, 26, 0.85) 0%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Bottom Soft Fade into White Body */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "90px",
          background: "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "60px",
          paddingBottom: "80px",
        }}
      >
        {/* Milestone Navigation Tabs (Exact VIIV Alignment: Clean, spaced, delicate gold arcs) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginBottom: "44px",
            flexWrap: "wrap",
          }}
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  background: "transparent",
                  border: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  color: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "4px 0",
                  transition: "all 0.2s ease",
                }}
              >
                {/* Circular Icon with Glowing Gold Ring on Active */}
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isActive ? "rgba(229, 169, 60, 0.16)" : "rgba(255, 255, 255, 0.06)",
                    border: isActive ? "1.8px solid #E5A93C" : "1px solid rgba(255, 255, 255, 0.18)",
                    color: isActive ? "#E5A93C" : "rgba(255, 255, 255, 0.65)",
                    boxShadow: isActive ? "0 0 14px rgba(229, 169, 60, 0.5)" : "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  {tab.icon}
                </div>

                <span style={{ color: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)" }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Column */}
        <div style={{ maxWidth: "660px" }}>
          
          {/* Gold Scholarship Badge (VIIV Refined Pill) */}
          <div
            style={{
              display: "inline-block",
              background: "#E5A93C",
              color: "#0B1320",
              padding: "6px 14px",
              borderRadius: "4px",
              fontSize: "0.74rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
              boxShadow: "0 4px 14px rgba(229, 169, 60, 0.3)",
            }}
          >
            {current.badge}
          </div>

          {/* Editorial Headline (VIIV Match) */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 4.8vw, 4.1rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              marginBottom: "22px",
              textShadow: "0 2px 18px rgba(0, 0, 0, 0.45)",
            }}
          >
            {current.headlineLead} <br />
            <span style={{ color: "#FAF8F5" }}>{current.headlineAccent}</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
              color: "rgba(255, 255, 255, 0.78)",
              lineHeight: 1.68,
              marginBottom: "38px",
              maxWidth: "580px",
              textShadow: "0 1px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            {current.subtitle}
          </p>

          {/* Dual Pill Action Buttons with Dots (VIIV Exact Match) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {/* Primary Gold Pill */}
            <Link
              href={current.primaryHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#E5A93C",
                color: "#0B1320",
                padding: "13px 28px",
                borderRadius: "999px",
                fontSize: "0.92rem",
                fontWeight: 700,
                letterSpacing: "0.01em",
                textDecoration: "none",
                boxShadow: "0 4px 18px rgba(229, 169, 60, 0.35)",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(229, 169, 60, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(229, 169, 60, 0.35)";
              }}
            >
              <span style={{ fontSize: "0.65rem", color: "#0B1320" }}>●</span>
              <span>{current.primaryText}</span>
            </Link>

            {/* Secondary Translucent Glass Pill */}
            <Link
              href={current.secondaryHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255, 255, 255, 0.08)",
                color: "#FAF8F5",
                padding: "13px 28px",
                borderRadius: "999px",
                fontSize: "0.92rem",
                fontWeight: 600,
                letterSpacing: "0.01em",
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(12px)",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.16)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={{ fontSize: "0.65rem", color: "#E5A93C" }}>●</span>
              <span>{current.secondaryText}</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

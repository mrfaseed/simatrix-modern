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
      id: "degree",
      label: "THE DEGREE",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      badge: "ONLY 30 SEATS LEFT FOR 2026 BATCH",
      headlineLead: "Build Your Career",
      headlineAccent: "While You Earn a Portfolio of Proof",
      subtitle: "Full-stack engineering, production Next.js microservices, generative AI pipelines, and mentor-verified codebases — tangible proof that opens doors to senior roles.",
      bgImage: "/images/campus_hero.jpg",
      primaryText: "See Outcomes",
      primaryHref: "/career",
      secondaryText: "Apply Now",
      secondaryHref: "/contact",
    },
    {
      id: "campus",
      label: "THE CAMPUS",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
        </svg>
      ),
      badge: "UP TO 50% SCHOLARSHIP FOR ELIGIBLE STUDENTS",
      headlineLead: "A Tech Studio Built",
      headlineAccent: "for Builders, Not Classrooms",
      subtitle: "High-tech collaboration studios, 4K multi-monitor workstations, and active engineering mentors conducting real-time architecture critiques and code reviews.",
      bgImage: "/images/campus_hero.jpg",
      primaryText: "Explore Campus",
      primaryHref: "/about",
      secondaryText: "Apply Now",
      secondaryHref: "/contact",
    },
    {
      id: "admissions",
      label: "ADMISSIONS",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      ),
      badge: "NO ENTRANCE EXAM • MERIT EVALUATION",
      headlineLead: "Simplified Cohort Selection",
      headlineAccent: "& 1:1 Career Counseling",
      subtitle: "Evaluate your aptitude through practical problem-solving rather than rote memorization. Rolling admission interviews with senior tech practitioners.",
      bgImage: "/images/campus_hero.jpg",
      primaryText: "Book 1:1 Counseling",
      primaryHref: "/contact",
      secondaryText: "Apply Now",
      secondaryHref: "/contact",
    },
    {
      id: "outcomes",
      label: "OUTCOMES",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      badge: "VERIFIED PUBLIC PROOF-OF-WORK PROFILES",
      headlineLead: "Leave with skills",
      headlineAccent: "and a portfolio of proof.",
      subtitle: "Production codebases, multi-tenant MVPs, verified GitHub commits, and senior mentor code reviews — tangible evidence that opens doors to high-paying engineering roles.",
      bgImage: "/images/innovation_lab.jpg",
      primaryText: "See Outcomes",
      primaryHref: "/career",
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
      {/* Silky Left Vignette Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(8, 14, 26, 0.96) 0%, rgba(8, 14, 26, 0.88) 38%, rgba(8, 14, 26, 0.32) 70%, rgba(8, 14, 26, 0.08) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Top Silky Shadow behind Transparent Header */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "140px",
          background: "linear-gradient(180deg, rgba(8, 14, 26, 0.95) 0%, rgba(8, 14, 26, 0.6) 70px, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Bottom Soft Fade into Page Content */}
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
          paddingTop: "115px", // Generous clearance for the transparent floating navbar
          paddingBottom: "80px",
        }}
      >
        {/* Milestone Navigation Tabs (Clean, spaced, delicate gold arcs) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginBottom: "40px",
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
                  fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
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

        {/* Hero Left Content Column */}
        <div style={{ maxWidth: "660px" }}>
          
          {/* Gold Scholarship Badge (Refined Pill) */}
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
              fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
            }}
          >
            {current.badge}
          </div>

          {/* Bold Editorial Headline (Pure Geometric Sans, No Serif!) */}
          <h1
            style={{
              fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif !important",
              fontSize: "clamp(2.4rem, 4.6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
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
              fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.14rem)",
              color: "rgba(255, 255, 255, 0.78)",
              lineHeight: 1.68,
              marginBottom: "38px",
              maxWidth: "580px",
              textShadow: "0 1px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            {current.subtitle}
          </p>

          {/* Dual Pill Action Buttons with Dots */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {/* Primary Gold Pill Button */}
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
                fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
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

            {/* Secondary Dark Navy/Glass Pill Button */}
            <Link
              href={current.secondaryHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#1C283F",
                color: "#FAF8F5",
                padding: "13px 28px",
                borderRadius: "999px",
                fontSize: "0.92rem",
                fontWeight: 600,
                letterSpacing: "0.01em",
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.16)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1C283F";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
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

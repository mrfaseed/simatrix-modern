"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/common/BrandLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      label: "Programs",
      href: "/programs",
      dropdown: [
        { label: "Full Stack Engineering", href: "/programs/full-stack-engineering", desc: "Next.js, Python, PostgreSQL & Cloud Deployments" },
        { label: "Data Analytics & AI", href: "/programs/data-analytics-ai", desc: "SQL, Power BI, Python & LLM Workflows" },
        { label: "Master Full Stack & AI", href: "/programs/master-fullstack-ai", desc: "Comprehensive 6-month elite developer fellowship" },
        { label: "Explore All Programs", href: "/programs", desc: "Compare curriculum, pricing & outcomes" },
      ],
    },
    {
      label: "Campus & Labs",
      href: "/practice",
      dropdown: [
        { label: "CodeArena IDE", href: "/practice/code-arena", desc: "Multi-language in-browser coding sandbox" },
        { label: "SQLLab", href: "/practice/sql-lab", desc: "Interactive database query environment" },
        { label: "WebLab Sandbox", href: "/practice/web-lab", desc: "Live React and frontend developer drills" },
        { label: "Chennai Tech Studio", href: "/about", desc: "In-person collaborative innovation labs" },
      ],
    },
    {
      label: "Proof of Work",
      href: "/build",
      dropdown: [
        { label: "Project Challenges", href: "/build/challenges", desc: "Production briefs with starter GitHub repos" },
        { label: "Verified Portfolio (Sakthi)", href: "/profile/sakthi", desc: "Inspect live public student proof-of-work" },
        { label: "Capstone Architectures", href: "/build/capstones", desc: "Full-scale multi-tenant system builds" },
        { label: "Credential Verification", href: "/verify", desc: "Cryptographic tamper-proof certificates" },
      ],
    },
    {
      label: "Admissions",
      href: "/career",
      dropdown: [
        { label: "2026 Batch Admissions", href: "/contact", desc: "Rolling cohort interviews & scholarship review" },
        { label: "Placement Outcomes", href: "/career", desc: "150+ hiring partner network & CTC growth" },
        { label: "Interview Preparation", href: "/career/interview-prep", desc: "System design & behavioral mock screens" },
        { label: "Free Sunday Workshops", href: "/events", desc: "Hands-on weekend masterclasses" },
      ],
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(8, 14, 26, 0.75)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Hairline Golden Edge */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(229, 169, 60, 0.4) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "76px",
        }}
      >
        {/* Brand Crest & Monogram */}
        <BrandLogo variant="light" />

        {/* Minimal Desktop Navigation (Spacious & Clean, VIIV Style) */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.93rem",
                  fontWeight: 500,
                  color: activeDropdown === item.label ? "#FFFFFF" : "rgba(255, 255, 255, 0.78)",
                  padding: "6px 0",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  letterSpacing: "0.01em",
                }}
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: "transform 0.2s ease",
                      transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                      opacity: 0.6,
                    }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </Link>

              {/* Mega Dropdown Panel */}
              {item.dropdown && activeDropdown === item.label && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 14px)",
                    left: "-16px",
                    width: "360px",
                    background: "rgba(11, 19, 32, 0.96)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(229, 169, 60, 0.25)",
                    borderRadius: "18px",
                    padding: "16px",
                    boxShadow: "0 24px 64px -12px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    zIndex: 200,
                    animation: "fadeIn 0.2s ease-out",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "#E5A93C",
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      padding: "4px 8px 10px 8px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </div>

                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      style={{
                        padding: "10px 12px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        transition: "all 0.15s ease",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "8px",
                          background: "rgba(229, 169, 60, 0.15)",
                          border: "1px solid rgba(229, 169, 60, 0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.78rem",
                          color: "#E5A93C",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        ✦
                      </div>
                      <div>
                        <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#FFFFFF" }}>
                          {sub.label}
                        </div>
                        <div style={{ fontSize: "0.76rem", color: "rgba(255, 255, 255, 0.6)", marginTop: "2px", lineHeight: 1.4 }}>
                          {sub.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side: Phone & Apply Button (Never Wrap) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            flexShrink: 0,
          }}
        >
          {/* Direct Phone Number on a Single Line */}
          <a
            href="tel:+918925991788"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.88rem",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.8)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#E5A93C" }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 89259 91788</span>
          </a>

          {/* Luxury Translucent Pill Button (VIIV Style) */}
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              color: "#FFFFFF",
              padding: "9px 24px",
              borderRadius: "999px",
              fontSize: "0.88rem",
              fontWeight: 600,
              letterSpacing: "0.01em",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#E5A93C";
              e.currentTarget.style.color = "#0B1320";
              e.currentTarget.style.borderColor = "#E5A93C";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(229, 169, 60, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Apply Now
          </Link>

          {/* Mobile Drawer Trigger (Hidden on Desktop via CSS) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "10px",
              padding: "8px 12px",
              color: "#FFFFFF",
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "rgba(11, 19, 32, 0.98)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "20px 24px 28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  padding: "6px 0",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            </div>
          ))}

          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "16px",
              marginTop: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href="tel:+918925991788"
              style={{
                fontSize: "0.92rem",
                color: "#E5A93C",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              📞 +91 89259 91788
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: "#E5A93C",
                color: "#0B1320",
                padding: "12px",
                borderRadius: "999px",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "0.92rem",
                textDecoration: "none",
              }}
            >
              Apply for 2026 Batch →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

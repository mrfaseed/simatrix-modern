"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BrandLogo from "@/components/common/BrandLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        height: "70px",
        display: "flex",
        alignItems: "center",
        background: scrolled ? "rgba(8, 14, 26, 0.88)" : "rgba(8, 14, 26, 0.28)",
        backdropFilter: scrolled ? "blur(24px)" : "blur(14px)",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0.06)",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)" : "none",
        transition: "background 0.3s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Hairline Gold Micro-Gradient Edge */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(229, 169, 60, 0.45) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Luxury Brand Crest & Wordmark */}
        <BrandLogo variant="light" />

        {/* Minimal Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "34px",
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
                className="nav-link-item"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: activeDropdown === item.label ? "#FFFFFF" : "rgba(255, 255, 255, 0.78)",
                  padding: "8px 0",
                  textDecoration: "none",
                  letterSpacing: "0.015em",
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

              {/* Frosted Floating Mega-Dropdown */}
              {item.dropdown && activeDropdown === item.label && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 12px)",
                    left: "-18px",
                    width: "360px",
                    background: "rgba(10, 16, 30, 0.94)",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "18px",
                    padding: "16px",
                    boxShadow: "0 28px 70px -12px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(229, 169, 60, 0.15)",
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
                      letterSpacing: "0.18em",
                      padding: "4px 8px 10px 8px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
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

        {/* Right Side: Admissions Phone with Pulse Dot & Gold Pill CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexShrink: 0,
          }}
        >
          {/* Live Admissions Hotline */}
          <a
            href="tel:+918925991788"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.86rem",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.85)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)")}
          >
            {/* Live Green Pulsing Indicator Dot */}
            <span style={{ position: "relative", display: "inline-flex", width: "8px", height: "8px" }}>
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "#10B981",
                  opacity: 0.75,
                  animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
              <span
                style={{
                  position: "relative",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10B981",
                }}
              />
            </span>
            <span>+91 89259 91788</span>
          </a>

          {/* Luxury 24k Gold Pill Button with Arrow */}
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              background: "linear-gradient(135deg, #E5A93C 0%, #D49826 100%)",
              color: "#0B1320",
              padding: "9px 22px",
              borderRadius: "999px",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.02em",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 14px rgba(229, 169, 60, 0.35)",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 22px rgba(229, 169, 60, 0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 14px rgba(229, 169, 60, 0.35)";
            }}
          >
            <span>Apply Now</span>
            <span style={{ fontSize: "0.9rem" }}>→</span>
          </Link>

          {/* Mobile Drawer Trigger Button */}
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

      {/* Mobile Modal Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10, 16, 30, 0.98)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "20px 24px 28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
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
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>📞 +91 89259 91788</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: "linear-gradient(135deg, #E5A93C 0%, #D49826 100%)",
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

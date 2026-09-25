"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/common/BrandLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  // Transparent only when on homepage at the top
  const isTransparent = isHome && !scrolled;

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
        { label: "Full Stack Development", href: "/programs/full-stack-development", desc: "Next.js, Python, PostgreSQL & Cloud Deployments" },
        { label: "Data Analytics & BI", href: "/programs/data-analytics", desc: "SQL, Power BI, Python & LLM Workflows" },
        { label: "Data Science & Generative AI", href: "/programs/data-science-ai", desc: "Comprehensive 6-month elite developer fellowship" },
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
        { label: "Virudhunagar Tech Studio", href: "/about", desc: "In-person collaborative innovation labs" },
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
        height: "72px",
        display: "flex",
        alignItems: "center",
        marginBottom: isHome ? "-72px" : "0",
        background: isTransparent ? "transparent" : "rgba(255, 255, 255, 0.95)",
        backdropFilter: isTransparent ? "none" : "blur(20px)",
        WebkitBackdropFilter: isTransparent ? "none" : "blur(20px)",
        borderBottom: isTransparent ? "none" : "1px solid rgba(226, 232, 240, 0.85)",
        boxShadow: isTransparent ? "none" : "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Brand Crest & Wordmark */}
        <BrandLogo variant={isTransparent ? "light" : "dark"} />

        {/* Minimal Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
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
                  gap: "5px",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: isTransparent
                    ? (activeDropdown === item.label ? "#FFFFFF" : "rgba(255, 255, 255, 0.85)")
                    : (activeDropdown === item.label ? "#0052FF" : "#1E293B"),
                  padding: "8px 0",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "color 0.15s ease",
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
                      opacity: isTransparent ? 0.7 : 0.6,
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
                    background: isTransparent ? "rgba(10, 16, 30, 0.96)" : "#FFFFFF",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    border: isTransparent ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #E2E8F0",
                    borderRadius: "18px",
                    padding: "16px",
                    boxShadow: isTransparent
                      ? "0 28px 70px -12px rgba(0, 0, 0, 0.75)"
                      : "0 20px 45px -10px rgba(0, 0, 0, 0.12)",
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
                      color: isTransparent ? "var(--color-accent)" : "#0052FF",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      padding: "4px 8px 10px 8px",
                      borderBottom: isTransparent ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #F1F5F9",
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
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = isTransparent ? "rgba(255, 255, 255, 0.06)" : "#F8FAFC";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "8px",
                          background: isTransparent ? "var(--color-accent-subtle)" : "#EFF6FF",
                          border: isTransparent ? "1px solid var(--color-accent-border)" : "1px solid #DBEAFE",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.78rem",
                          color: "#0052FF",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        ✦
                      </div>
                      <div>
                        <div style={{
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: isTransparent ? "#FFFFFF" : "#0F172A",
                        }}>
                          {sub.label}
                        </div>
                        <div style={{
                          fontSize: "0.76rem",
                          color: isTransparent ? "rgba(255, 255, 255, 0.6)" : "#64748B",
                          marginTop: "2px",
                          lineHeight: 1.4,
                        }}>
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

        {/* Right Side: Phone & Apply Now Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexShrink: 0,
          }}
        >
          {/* Phone Link on Single Line */}
          <a
            href="tel:+918903390051"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.88rem",
              fontWeight: 600,
              color: isTransparent ? "rgba(255, 255, 255, 0.85)" : "#475569",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = isTransparent ? "#FFFFFF" : "#0052FF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = isTransparent ? "rgba(255, 255, 255, 0.85)" : "#475569")}
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
              style={{ color: "#0052FF" }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 89033 90051 | +91 93637 93954</span>
          </a>

          {/* Luxury Action Pill Button */}
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: isTransparent ? "#1C283F" : "#0052FF",
              color: "#FFFFFF",
              padding: "9px 24px",
              borderRadius: "999px",
              fontSize: "0.88rem",
              fontWeight: 700,
              letterSpacing: "0.01em",
              textDecoration: "none",
              whiteSpace: "nowrap",
              border: isTransparent ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid transparent",
              boxShadow: isTransparent ? "none" : "0 4px 14px rgba(0, 82, 255, 0.28)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (isTransparent) {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
              } else {
                e.currentTarget.style.background = "#0045D8";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 82, 255, 0.35)";
              }
            }}
            onMouseLeave={(e) => {
              if (isTransparent) {
                e.currentTarget.style.background = "#1C283F";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              } else {
                e.currentTarget.style.background = "#0052FF";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(0, 82, 255, 0.28)";
              }
            }}
          >
            Apply Now
          </Link>

          {/* Mobile Drawer Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: "transparent",
              border: isTransparent ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid #CBD5E1",
              borderRadius: "10px",
              padding: "8px 12px",
              color: isTransparent ? "#FFFFFF" : "#0F172A",
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
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: isTransparent ? "rgba(10, 16, 30, 0.98)" : "#FFFFFF",
            backdropFilter: "blur(24px)",
            borderBottom: isTransparent ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #E2E8F0",
            padding: "20px 24px 28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: isTransparent ? "0 20px 40px rgba(0, 0, 0, 0.6)" : "0 20px 40px rgba(0, 0, 0, 0.08)",
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
                  color: isTransparent ? "#FFFFFF" : "#0F172A",
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
              borderTop: isTransparent ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #E2E8F0",
              paddingTop: "16px",
              marginTop: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href="tel:+918903390051"
              style={{
                fontSize: "0.92rem",
                color: "#0052FF",
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>📞 +91 89033 90051 | +91 93637 93954</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: "#0052FF",
                color: "#FFFFFF",
                border: "none",
                padding: "12px",
                borderRadius: "999px",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "0.92rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0, 82, 255, 0.28)",
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

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BrandLogo from "@/components/common/BrandLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  const handleDropdownEnter = (name) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220); // 220ms grace period so moving cursor down to the menu never causes it to disappear
  };

  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    };
  }, []);

  const isHome = pathname === "/";
  // Transparent only when on homepage at the top and mobile menu is not covering it
  const isTransparent = isHome && !scrolled && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
  }, [pathname]);

  // Focus search input when modal opens & handle ESC key
  useEffect(() => {
    if (searchModalOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 80);
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setSearchModalOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [searchModalOpen]);

  // Search items catalog
  const searchableItems = [
    { title: "Full Stack Development", cat: "Program", desc: "Next.js, Python, PostgreSQL & Cloud", href: "/programs/full-stack-development" },
    { title: "Data Analytics & BI", cat: "Program", desc: "SQL, Power BI, Python & Modern Dashboards", href: "/programs/data-analytics" },
    { title: "Data Science & Generative AI", cat: "Program", desc: "AI Tools, LLMs, Machine Learning Projects", href: "/programs/data-science-ai" },
    { title: "Cyber Security Fellowship", cat: "Program", desc: "Ethical Hacking, SOC & Network Defense", href: "/programs/cyber-security" },
    { title: "DevOps & Cloud Engineering", cat: "Program", desc: "AWS, Docker, Kubernetes & CI/CD", href: "/programs/cloud-devops" },
    { title: "Mobile App Development", cat: "Program", desc: "Flutter, React Native & Mobile APIs", href: "/programs/mobile-app-development" },
    { title: "CodeArena IDE", cat: "Campus Lab", desc: "Multi-language in-browser coding sandbox", href: "/practice/code-arena" },
    { title: "SQLLab Interactive", cat: "Campus Lab", desc: "Live database querying and schema drills", href: "/practice/sql-lab" },
    { title: "WebLab Sandbox", cat: "Campus Lab", desc: "Live React, CSS & JavaScript practice", href: "/practice/web-lab" },
    { title: "2026 Batch Admissions", cat: "Admissions", desc: "Rolling cohort interviews & merit scholarships", href: "/contact" },
    { title: "Placement Outcomes & Stats", cat: "Careers", desc: "150+ hiring partner network & CTC growth", href: "/career" },
    { title: "Technical Interview Prep", cat: "Careers", desc: "System design & behavioral mock screens", href: "/career/interview-prep" },
    { title: "Virudhunagar Tech Studio", cat: "About", desc: "Physical studio, collaborative coding floors", href: "/about" },
    { title: "Upcoming Masterclasses & Batches", cat: "Events", desc: "Free weekend hands-on workshops", href: "/events" },
    { title: "Engineering Career Roadmaps", cat: "Roadmaps", desc: "Step-by-step guides for 2026 roles", href: "/roadmaps" },
  ];

  const filteredSearch = searchQuery.trim()
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.cat.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchableItems.slice(0, 6);

  // Mega Menu Data for Programs
  const programsMegaMenu = {
    col1: [
      {
        title: "All Programs",
        desc: "Explore all learning paths",
        href: "/programs",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
          </svg>
        ),
      },
      {
        title: "Full Stack Development",
        desc: "Next.js, Python, PostgreSQL",
        href: "/programs/full-stack-development",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
      },
      {
        title: "Data Analytics & BI",
        desc: "SQL, Power BI, Python",
        href: "/programs/data-analytics",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
      {
        title: "Data Science & Generative AI",
        desc: "AI Tools, LLMs, Real Projects",
        href: "/programs/data-science-ai",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
          </svg>
        ),
      },
    ],
    col2: [
      {
        title: "Cyber Security",
        desc: "Ethical Hacking, SOC, Networking",
        href: "/programs/cyber-security",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
      },
      {
        title: "DevOps & Cloud",
        desc: "AWS, Docker, CI/CD",
        href: "/programs/cloud-devops",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        ),
      },
      {
        title: "Networking & Infrastructure",
        desc: "CCNA, Linux, System Admin",
        href: "/programs",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        ),
      },
      {
        title: "App Development",
        desc: "Flutter, Android, iOS",
        href: "/programs/mobile-app-development",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        ),
      },
    ],
    col3: [
      {
        title: "Program Curriculum",
        href: "/programs#curriculum",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
      },
      {
        title: "Fees & Scholarships",
        href: "/contact",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
        ),
      },
      {
        title: "Upcoming Batches",
        href: "/events",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
      },
      {
        title: "Compare Programs",
        href: "/programs",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="3" x2="12" y2="21" />
            <polyline points="4 7 12 5 20 7" />
            <path d="M4 7l3 7a3 3 0 0 1-6 0l3-7z" />
            <path d="M20 7l3 7a3 3 0 0 1-6 0l3-7z" />
          </svg>
        ),
      },
    ],
  };

  // Campus & Labs Dropdown Data
  const campusLabsMenu = {
    col1: [
      {
        title: "CodeArena IDE",
        desc: "Multi-language in-browser coding sandbox",
        href: "/practice/code-arena",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        ),
      },
      {
        title: "SQLLab Interactive",
        desc: "Query databases with real production data",
        href: "/practice/sql-lab",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        ),
      },
      {
        title: "WebLab Sandbox",
        desc: "Live React, UI & frontend drills",
        href: "/practice/web-lab",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
      },
      {
        title: "Virudhunagar Tech Studio",
        desc: "In-person collaborative innovation floors",
        href: "/about",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <path d="M9 8h1" />
            <path d="M9 12h1" />
            <path d="M9 16h1" />
            <path d="M14 8h1" />
            <path d="M14 12h1" />
            <path d="M14 16h1" />
            <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
          </svg>
        ),
      },
    ],
    col2: [
      {
        title: "Explore All Labs",
        href: "/practice",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        ),
      },
      {
        title: "Lab Hardware Specs",
        href: "/about",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
          </svg>
        ),
      },
      {
        title: "Schedule Campus Visit",
        href: "/contact",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
      },
    ],
  };

  // Admissions Dropdown Data
  const admissionsMenu = {
    col1: [
      {
        title: "2026 Batch Admissions",
        desc: "Rolling cohort interviews & merit review",
        href: "/contact",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        ),
      },
      {
        title: "Placement Outcomes",
        desc: "150+ hiring partner network & CTC growth",
        href: "/career",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        ),
      },
      {
        title: "Interview Preparation",
        desc: "System design & mock interview screen drills",
        href: "/career/interview-prep",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <polyline points="17 11 19 13 23 9" />
          </svg>
        ),
      },
      {
        title: "Free Sunday Workshops",
        desc: "Hands-on weekend masterclasses & webinars",
        href: "/events",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ),
      },
    ],
    col2: [
      {
        title: "Scholarship Test",
        href: "/contact",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        ),
      },
      {
        title: "Fee Structure & EMI",
        href: "/contact",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
        ),
      },
      {
        title: "Download 2026 Brochure",
        href: "/programs",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        ),
      },
    ],
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          height: "72px",
          display: "flex",
          alignItems: "center",
          marginBottom: isHome ? "-72px" : "0",
          background: isTransparent ? "transparent" : "rgba(255, 255, 255, 0.96)",
          backdropFilter: isTransparent ? "none" : "blur(24px)",
          WebkitBackdropFilter: isTransparent ? "none" : "blur(24px)",
          borderBottom: isTransparent ? "none" : "1px solid rgba(226, 232, 240, 0.85)",
          boxShadow: isTransparent ? "none" : "0 4px 20px -2px rgba(15, 23, 42, 0.05)",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1536px",
            width: "100%",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Cluster 1: Brand Logo (Left) */}
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <BrandLogo variant={isTransparent ? "light" : "dark"} height={32} />
          </div>

          {/* Cluster 2: Desktop Navigation Links (Middle - Balanced Even Gap) */}
          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
              flexShrink: 0,
            }}
          >
            {/* 1. Programs Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => handleDropdownEnter("Programs")}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href="/programs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: isTransparent
                    ? activeDropdown === "Programs"
                      ? "#FFFFFF"
                      : "#FFFFFF"
                    : activeDropdown === "Programs"
                    ? "#0052FF"
                    : "#1E293B",
                  padding: "8px 2px",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "all 0.15s ease",
                  position: "relative",
                }}
              >
                <span>Programs</span>
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
                    transition: "transform 0.25s ease, opacity 0.2s ease",
                    transform: activeDropdown === "Programs" ? "rotate(180deg)" : "rotate(0deg)",
                    opacity: isTransparent ? (activeDropdown === "Programs" ? 1 : 0.85) : 0.7,
                  }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>

                {/* Active Indicator Tab under 'Programs' matching user's reference */}
                {activeDropdown === "Programs" && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "30px",
                      height: "3px",
                      borderRadius: "999px",
                      background: "#0052FF",
                      boxShadow: "0 2px 8px rgba(0, 82, 255, 0.5)",
                    }}
                  />
                )}
              </Link>

              {/* 3-Column Programs Mega Menu with Continuous Hover Bridge */}
              {activeDropdown === "Programs" && (
                <div
                  onMouseEnter={() => handleDropdownEnter("Programs")}
                  onMouseLeave={handleDropdownLeave}
                  style={{
                    position: "absolute",
                    top: "100%",
                    paddingTop: "12px",
                    left: "-16px",
                    zIndex: 250,
                  }}
                >
                  {/* Invisible Hover Tunnel/Bridge to prevent any gap disconnect */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "14px", background: "transparent" }} />
                  <div
                    style={{
                      width: "880px",
                      background: "rgba(255, 255, 255, 0.98)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(226, 232, 240, 0.9)",
                      borderRadius: "20px",
                      padding: "24px 28px",
                      boxShadow: "0 24px 70px -12px rgba(15, 23, 42, 0.18), 0 0 1px 1px rgba(15, 23, 42, 0.05)",
                      display: "grid",
                      gridTemplateColumns: "1.15fr 1.15fr 0.95fr",
                      gap: "24px",
                      animation: "fadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {/* Column 1: Core Programs */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {programsMegaMenu.col1.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "14px",
                            padding: "10px 12px",
                            borderRadius: "12px",
                            textDecoration: "none",
                            transition: "background 0.15s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFC")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <div
                              style={{
                                fontSize: "0.92rem",
                                fontWeight: 700,
                                color: "#0F172A",
                                letterSpacing: "-0.01em",
                              }}
                            >
                              {item.title}
                            </div>
                            <div
                              style={{
                                fontSize: "0.78rem",
                                color: "#64748B",
                                marginTop: "2px",
                                lineHeight: 1.35,
                              }}
                            >
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Column 2: Specialized Tracks */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {programsMegaMenu.col2.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "14px",
                            padding: "10px 12px",
                            borderRadius: "12px",
                            textDecoration: "none",
                            transition: "background 0.15s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFC")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <div
                              style={{
                                fontSize: "0.92rem",
                                fontWeight: 700,
                                color: "#0F172A",
                                letterSpacing: "-0.01em",
                              }}
                            >
                              {item.title}
                            </div>
                            <div
                              style={{
                                fontSize: "0.78rem",
                                color: "#64748B",
                                marginTop: "2px",
                                lineHeight: 1.35,
                              }}
                            >
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Column 3: Curriculum & Resources */}
                    <div
                      style={{
                        borderLeft: "1px solid #E2E8F0",
                        paddingLeft: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "8px",
                      }}
                    >
                      {programsMegaMenu.col3.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "12px 14px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            transition: "background 0.15s ease, transform 0.15s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#F8FAFC";
                            const arrow = e.currentTarget.querySelector(".menu-arrow");
                            if (arrow) arrow.style.transform = "translateX(3px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            const arrow = e.currentTarget.querySelector(".menu-arrow");
                            if (arrow) arrow.style.transform = "translateX(0)";
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ color: "#64748B", display: "flex", alignItems: "center" }}>{item.icon}</span>
                            <span
                              style={{
                                fontSize: "0.88rem",
                                fontWeight: 600,
                                color: "#1E293B",
                              }}
                            >
                              {item.title}
                            </span>
                          </div>
                          <svg
                            className="menu-arrow"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#64748B"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ transition: "transform 0.15s ease" }}
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Campus & Labs Dropdown with Continuous Hover Bridge */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => handleDropdownEnter("Campus")}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href="/practice"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: isTransparent
                    ? activeDropdown === "Campus"
                      ? "#FFFFFF"
                      : "#FFFFFF"
                    : activeDropdown === "Campus"
                    ? "#0052FF"
                    : "#1E293B",
                  padding: "8px 2px",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "all 0.15s ease",
                  position: "relative",
                }}
              >
                <span>Campus & Labs</span>
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
                    transition: "transform 0.25s ease, opacity 0.2s ease",
                    transform: activeDropdown === "Campus" ? "rotate(180deg)" : "rotate(0deg)",
                    opacity: isTransparent ? (activeDropdown === "Campus" ? 1 : 0.85) : 0.7,
                  }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>

                {activeDropdown === "Campus" && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "30px",
                      height: "3px",
                      borderRadius: "999px",
                      background: "#0052FF",
                      boxShadow: "0 2px 8px rgba(0, 82, 255, 0.5)",
                    }}
                  />
                )}
              </Link>

              {/* Campus & Labs Dropdown Card with Continuous Hover Bridge */}
              {activeDropdown === "Campus" && (
                <div
                  onMouseEnter={() => handleDropdownEnter("Campus")}
                  onMouseLeave={handleDropdownLeave}
                  style={{
                    position: "absolute",
                    top: "100%",
                    paddingTop: "12px",
                    left: "-16px",
                    zIndex: 250,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "14px", background: "transparent" }} />
                  <div
                    style={{
                      width: "600px",
                      background: "rgba(255, 255, 255, 0.98)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(226, 232, 240, 0.9)",
                      borderRadius: "20px",
                      padding: "24px 26px",
                      boxShadow: "0 24px 70px -12px rgba(15, 23, 42, 0.18), 0 0 1px 1px rgba(15, 23, 42, 0.05)",
                      display: "grid",
                      gridTemplateColumns: "1.4fr 1fr",
                      gap: "20px",
                      animation: "fadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {/* Left Column */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {campusLabsMenu.col1.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            padding: "10px 12px",
                            borderRadius: "12px",
                            textDecoration: "none",
                            transition: "background 0.15s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFC")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <div style={{ width: "28px", height: "28px", flexShrink: 0, marginTop: "2px" }}>
                            {item.icon}
                          </div>
                          <div>
                            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0F172A" }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: "0.76rem", color: "#64748B", marginTop: "2px", lineHeight: 1.35 }}>
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Right Column */}
                    <div
                      style={{
                        borderLeft: "1px solid #E2E8F0",
                        paddingLeft: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "8px",
                      }}
                    >
                      {campusLabsMenu.col2.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "12px 14px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            transition: "background 0.15s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#F8FAFC";
                            const arrow = e.currentTarget.querySelector(".menu-arrow");
                            if (arrow) arrow.style.transform = "translateX(3px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            const arrow = e.currentTarget.querySelector(".menu-arrow");
                            if (arrow) arrow.style.transform = "translateX(0)";
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ color: "#64748B", display: "flex" }}>{item.icon}</span>
                            <span style={{ fontSize: "0.86rem", fontWeight: 600, color: "#1E293B" }}>
                              {item.title}
                            </span>
                          </div>
                          <svg
                            className="menu-arrow"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#64748B"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ transition: "transform 0.15s ease" }}
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Admissions Dropdown with Continuous Hover Bridge */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => handleDropdownEnter("Admissions")}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href="/career"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: isTransparent
                    ? activeDropdown === "Admissions"
                      ? "#FFFFFF"
                      : "#FFFFFF"
                    : activeDropdown === "Admissions"
                    ? "#0052FF"
                    : "#1E293B",
                  padding: "8px 2px",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "all 0.15s ease",
                  position: "relative",
                }}
              >
                <span>Admissions</span>
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
                    transition: "transform 0.25s ease, opacity 0.2s ease",
                    transform: activeDropdown === "Admissions" ? "rotate(180deg)" : "rotate(0deg)",
                    opacity: isTransparent ? (activeDropdown === "Admissions" ? 1 : 0.85) : 0.7,
                  }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>

                {activeDropdown === "Admissions" && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "30px",
                      height: "3px",
                      borderRadius: "999px",
                      background: "#0052FF",
                      boxShadow: "0 2px 8px rgba(0, 82, 255, 0.5)",
                    }}
                  />
                )}
              </Link>

              {/* Admissions Dropdown Card with Continuous Hover Bridge */}
              {activeDropdown === "Admissions" && (
                <div
                  onMouseEnter={() => handleDropdownEnter("Admissions")}
                  onMouseLeave={handleDropdownLeave}
                  style={{
                    position: "absolute",
                    top: "100%",
                    paddingTop: "12px",
                    left: "-16px",
                    zIndex: 250,
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "14px", background: "transparent" }} />
                  <div
                    style={{
                      width: "600px",
                      background: "rgba(255, 255, 255, 0.98)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(226, 232, 240, 0.9)",
                      borderRadius: "20px",
                      padding: "24px 26px",
                      boxShadow: "0 24px 70px -12px rgba(15, 23, 42, 0.18), 0 0 1px 1px rgba(15, 23, 42, 0.05)",
                      display: "grid",
                      gridTemplateColumns: "1.4fr 1fr",
                      gap: "20px",
                      animation: "fadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {/* Left Column */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {admissionsMenu.col1.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            padding: "10px 12px",
                            borderRadius: "12px",
                            textDecoration: "none",
                            transition: "background 0.15s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFC")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <div style={{ width: "28px", height: "28px", flexShrink: 0, marginTop: "2px" }}>
                            {item.icon}
                          </div>
                          <div>
                            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0F172A" }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: "0.76rem", color: "#64748B", marginTop: "2px", lineHeight: 1.35 }}>
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Right Column */}
                    <div
                      style={{
                        borderLeft: "1px solid #E2E8F0",
                        paddingLeft: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "8px",
                      }}
                    >
                      {admissionsMenu.col2.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "12px 14px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            transition: "background 0.15s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#F8FAFC";
                            const arrow = e.currentTarget.querySelector(".menu-arrow");
                            if (arrow) arrow.style.transform = "translateX(3px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            const arrow = e.currentTarget.querySelector(".menu-arrow");
                            if (arrow) arrow.style.transform = "translateX(0)";
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ color: "#64748B", display: "flex" }}>{item.icon}</span>
                            <span style={{ fontSize: "0.86rem", fontWeight: 600, color: "#1E293B" }}>
                              {item.title}
                            </span>
                          </div>
                          <svg
                            className="menu-arrow"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#64748B"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ transition: "transform 0.15s ease" }}
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Student Success (Direct Link) */}
            <Link
              href="/career"
              style={{
                fontSize: "0.88rem",
                fontWeight: 600,
                color: isTransparent ? "#FFFFFF" : "#1E293B",
                padding: "8px 2px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                handleDropdownEnter(null);
                e.currentTarget.style.color = isTransparent ? "#FFFFFF" : "#0052FF";
              }}
              onMouseLeave={(e) => (e.currentTarget.style.color = isTransparent ? "#FFFFFF" : "#1E293B")}
            >
              Student Success
            </Link>

            {/* 5. About (Direct Link) */}
            <Link
              href="/about"
              style={{
                fontSize: "0.88rem",
                fontWeight: 600,
                color: isTransparent ? "#FFFFFF" : "#1E293B",
                padding: "8px 2px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                handleDropdownEnter(null);
                e.currentTarget.style.color = isTransparent ? "#FFFFFF" : "#0052FF";
              }}
              onMouseLeave={(e) => (e.currentTarget.style.color = isTransparent ? "#FFFFFF" : "#1E293B")}
            >
              About
            </Link>
          </nav>

          {/* Cluster 3: Search, Divider, Phone Numbers, and Apply Now CTA (Right) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {/* Search Icon Button */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search Programs and Resources"
              style={{
                background: "transparent",
                border: "none",
                padding: "7px",
                marginRight: "16px",
                cursor: "pointer",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: isTransparent ? "#FFFFFF" : "#334155",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isTransparent ? "rgba(255, 255, 255, 0.14)" : "#F1F5F9";
                if (!isTransparent) e.currentTarget.style.color = "#0052FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = isTransparent ? "#FFFFFF" : "#334155";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Vertical Divider Line */}
            <div
              className="desktop-divider"
              style={{
                width: "1px",
                height: "18px",
                marginRight: "16px",
                background: isTransparent ? "rgba(255, 255, 255, 0.28)" : "#E2E8F0",
                flexShrink: 0,
              }}
            />

            {/* Phone Number Link */}
            <a
              href="tel:+918903390051"
              className="desktop-phone"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "0.84rem",
                fontWeight: 500,
                color: isTransparent ? "#FFFFFF" : "#334155",
                textDecoration: "none",
                whiteSpace: "nowrap",
                letterSpacing: "-0.01em",
                marginRight: "22px",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = isTransparent ? "#FFFFFF" : "#0052FF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isTransparent ? "#FFFFFF" : "#334155")}
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
                style={{ color: isTransparent ? "#FFFFFF" : "#0052FF", flexShrink: 0 }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 89033 90051</span>
              <span style={{ opacity: isTransparent ? 0.35 : 0.3, margin: "0 6px" }}>|</span>
              <span>+91 93637 93954</span>
            </a>

            {/* Apply Now Pill CTA Button - Sleek Dark Apple/Stripe Level */}
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: "#0F172A",
                color: "#FFFFFF",
                padding: "8px 20px",
                borderRadius: "9999px",
                fontSize: "0.86rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                textDecoration: "none",
                whiteSpace: "nowrap",
                border: isTransparent ? "1px solid rgba(255, 255, 255, 0.22)" : "1px solid #0F172A",
                boxShadow: isTransparent
                  ? "0 4px 14px rgba(0, 0, 0, 0.25)"
                  : "0 4px 14px rgba(15, 23, 42, 0.15)",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0052FF";
                e.currentTarget.style.borderColor = "#0052FF";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 82, 255, 0.35)";
                const arrow = e.currentTarget.querySelector(".btn-arrow");
                if (arrow) arrow.style.transform = "translateX(3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0F172A";
                e.currentTarget.style.borderColor = isTransparent ? "rgba(255, 255, 255, 0.22)" : "#0F172A";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = isTransparent
                  ? "0 4px 14px rgba(0, 0, 0, 0.25)"
                  : "0 4px 14px rgba(15, 23, 42, 0.15)";
                const arrow = e.currentTarget.querySelector(".btn-arrow");
                if (arrow) arrow.style.transform = "translateX(0)";
              }}
            >
              <span>Apply Now</span>
              <svg
                className="btn-arrow"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "transform 0.15s ease" }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                background: "transparent",
                border: isTransparent ? "1px solid rgba(255, 255, 255, 0.25)" : "1px solid #CBD5E1",
                borderRadius: "10px",
                padding: "8px 12px",
                color: isTransparent ? "#FFFFFF" : "#0F172A",
                cursor: "pointer",
                fontSize: "1.1rem",
                fontWeight: 700,
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              maxHeight: "calc(100vh - 72px)",
              overflowY: "auto",
              background: "#FFFFFF",
              borderBottom: "1px solid #E2E8F0",
              padding: "20px 24px 36px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.12)",
              zIndex: 300,
            }}
          >
            {/* Quick Mobile Search Trigger */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchModalOpen(true);
              }}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#64748B",
                fontSize: "0.9rem",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Search programs, labs, events...</span>
            </button>

            {/* Accordion: Programs */}
            <div>
              <button
                onClick={() =>
                  setMobileExpandedSection(mobileExpandedSection === "Programs" ? null : "Programs")
                }
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  padding: "10px 0",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#0F172A",
                  cursor: "pointer",
                }}
              >
                <span>Programs</span>
                <span>{mobileExpandedSection === "Programs" ? "−" : "+"}</span>
              </button>
              {mobileExpandedSection === "Programs" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "12px", marginTop: "6px" }}>
                  {[...programsMegaMenu.col1, ...programsMegaMenu.col2].map((p) => (
                    <Link
                      key={p.title}
                      href={p.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        padding: "8px 0",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#334155",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ color: "#0052FF" }}>›</span>
                      <span>{p.title}</span>
                    </Link>
                  ))}
                  <Link
                    href="/programs"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      padding: "8px 0",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#0052FF",
                      textDecoration: "none",
                    }}
                  >
                    View All Programs & Curriculum →
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion: Campus & Labs */}
            <div>
              <button
                onClick={() =>
                  setMobileExpandedSection(mobileExpandedSection === "Campus" ? null : "Campus")
                }
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  padding: "10px 0",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#0F172A",
                  cursor: "pointer",
                }}
              >
                <span>Campus & Labs</span>
                <span>{mobileExpandedSection === "Campus" ? "−" : "+"}</span>
              </button>
              {mobileExpandedSection === "Campus" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "12px", marginTop: "6px" }}>
                  {campusLabsMenu.col1.map((p) => (
                    <Link
                      key={p.title}
                      href={p.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        padding: "8px 0",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#334155",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ color: "#0052FF" }}>›</span>
                      <span>{p.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion: Admissions */}
            <div>
              <button
                onClick={() =>
                  setMobileExpandedSection(mobileExpandedSection === "Admissions" ? null : "Admissions")
                }
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  padding: "10px 0",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#0F172A",
                  cursor: "pointer",
                }}
              >
                <span>Admissions</span>
                <span>{mobileExpandedSection === "Admissions" ? "−" : "+"}</span>
              </button>
              {mobileExpandedSection === "Admissions" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "12px", marginTop: "6px" }}>
                  {admissionsMenu.col1.map((p) => (
                    <Link
                      key={p.title}
                      href={p.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        padding: "8px 0",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#334155",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ color: "#0052FF" }}>›</span>
                      <span>{p.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/career"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#0F172A",
                padding: "8px 0",
                textDecoration: "none",
              }}
            >
              Student Success
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#0F172A",
                padding: "8px 0",
                textDecoration: "none",
              }}
            >
              About
            </Link>

            {/* Mobile Footer Contact & CTA */}
            <div
              style={{
                borderTop: "1px solid #E2E8F0",
                paddingTop: "16px",
                marginTop: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <a
                href="tel:+918903390051"
                style={{
                  fontSize: "0.9rem",
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
                  background: "#0F172A",
                  color: "#FFFFFF",
                  padding: "13px",
                  borderRadius: "9999px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(15, 23, 42, 0.2)",
                }}
              >
                Apply for 2026 Batch →
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spotlight Search Modal (Apple/Stripe Inspired) */}
      {searchModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSearchModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "12vh",
            paddingLeft: "20px",
            paddingRight: "20px",
            animation: "fadeIn 0.15s ease-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "640px",
              background: "#FFFFFF",
              borderRadius: "20px",
              boxShadow: "0 30px 90px -15px rgba(0, 0, 0, 0.35), 0 0 1px 1px rgba(0, 0, 0, 0.08)",
              overflow: "hidden",
              border: "1px solid #E2E8F0",
            }}
          >
            {/* Search Input Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "18px 24px",
                borderBottom: "1px solid #F1F5F9",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs, labs, admissions, curriculum..."
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "1.05rem",
                  color: "#0F172A",
                  background: "transparent",
                  fontWeight: 500,
                }}
              />
              <span
                style={{
                  background: "#F1F5F9",
                  color: "#64748B",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  padding: "4px 8px",
                  borderRadius: "6px",
                  border: "1px solid #E2E8F0",
                  letterSpacing: "0.05em",
                }}
              >
                ESC
              </span>
            </div>

            {/* Quick Filter Badges */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                padding: "12px 24px",
                background: "#F8FAFC",
                borderBottom: "1px solid #F1F5F9",
                flexWrap: "wrap",
              }}
            >
              {["Full Stack", "Data Analytics", "Generative AI", "CodeArena", "Admissions", "Workshops"].map(
                (tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    style={{
                      background: searchQuery === tag ? "#0052FF" : "#FFFFFF",
                      color: searchQuery === tag ? "#FFFFFF" : "#475569",
                      border: "1px solid #E2E8F0",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      fontSize: "0.76rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {tag}
                  </button>
                )
              )}
            </div>

            {/* Search Results List */}
            <div
              style={{
                maxHeight: "360px",
                overflowY: "auto",
                padding: "12px 14px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {filteredSearch.length === 0 ? (
                <div style={{ padding: "32px 20px", textAlign: "center", color: "#64748B" }}>
                  <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "#0F172A" }}>No matching results</p>
                  <p style={{ fontSize: "0.82rem", marginTop: "4px" }}>
                    Try searching for "Full Stack", "Data Analytics", "CodeArena", or "Admissions".
                  </p>
                </div>
              ) : (
                filteredSearch.map((res) => (
                  <div
                    key={res.title}
                    onClick={() => {
                      setSearchModalOpen(false);
                      router.push(res.href);
                    }}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F5F9")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#0F172A" }}>
                          {res.title}
                        </span>
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            padding: "2px 7px",
                            borderRadius: "4px",
                            background: "#EFF6FF",
                            color: "#0052FF",
                            textTransform: "uppercase",
                          }}
                        >
                          {res.cat}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "#64748B", marginTop: "2px" }}>
                        {res.desc}
                      </div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}


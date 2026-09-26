"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FLAGSHIP_PROGRAMS } from "@/lib/data/programs";

const PROGRAM_THEMES = {
  "full-stack-development": {
    accent: "#0052FF",
    gradient: "linear-gradient(90deg, #0052FF, #3B82F6)",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    metricLabel: "Capstones",
    metricVal: "12+ Real Projects",
  },
  "data-analytics": {
    accent: "#7C3AED",
    gradient: "linear-gradient(90deg, #7C3AED, #A855F7)",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    metricLabel: "Datasets",
    metricVal: "8+ Business Cases",
  },
  "data-science-ai": {
    accent: "#0284C7",
    gradient: "linear-gradient(90deg, #0284C7, #06B6D4)",
    bg: "#F0F9FF",
    border: "#BAE6FD",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    metricLabel: "AI Models",
    metricVal: "Production Deployments",
  },
  "cloud-devops": {
    accent: "#D97706",
    gradient: "linear-gradient(90deg, #D97706, #F59E0B)",
    bg: "#FEF3C7",
    border: "#FDE68A",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    metricLabel: "Cloud Specs",
    metricVal: "10+ Enterprise Specs",
  },
  "cyber-security": {
    accent: "#059669",
    gradient: "linear-gradient(90deg, #059669, #10B981)",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    metricLabel: "Cyber Labs",
    metricVal: "Live Attack & Defense",
  },
  "mobile-app-development": {
    accent: "#6366F1",
    gradient: "linear-gradient(90deg, #6366F1, #8B5CF6)",
    bg: "#EEF2FF",
    border: "#C7D2FE",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    metricLabel: "App Capstones",
    metricVal: "8+ Published Apps",
  },
  "ui-ux-design": {
    accent: "#EA580C",
    gradient: "linear-gradient(90deg, #EA580C, #F97316)",
    bg: "#FFF7ED",
    border: "#FED7AA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    metricLabel: "Case Studies",
    metricVal: "6+ Product Specs",
  },
};

const TOTAL_DOTS = 5;

export default function FlagshipPrograms() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);

  const checkScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    if (maxScroll > 0) {
      const fraction = scrollLeft / maxScroll;
      const dotIndex = Math.min(
        TOTAL_DOTS - 1,
        Math.max(0, Math.round(fraction * (TOTAL_DOTS - 1)))
      );
      setActiveDot(dotIndex);
    }
  };

  useEffect(() => {
    checkScrollState();
    const current = sliderRef.current;
    if (current) {
      current.addEventListener("scroll", checkScrollState, { passive: true });
      window.addEventListener("resize", checkScrollState);
    }
    return () => {
      if (current) current.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, []);

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 360;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToDot = (dotIndex) => {
    if (!sliderRef.current) return;
    const { scrollWidth, clientWidth } = sliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const targetScroll = (dotIndex / (TOTAL_DOTS - 1)) * maxScroll;
    sliderRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="programs-section" id="career-programs" aria-labelledby="programs-heading">
      <div className="container">
        {/* Section Header: Matching Simatrix Standard Design */}
        <div className="programs-header">
          <div className="programs-badge">
            <span className="badge-pulse" aria-hidden="true" />
            CAREER-LAUNCH PATHWAYS
          </div>
          <h2 id="programs-heading" className="programs-title">
            Industry-Aligned <span className="title-gradient">Career Programs</span>
          </h2>
          <p className="programs-desc">
            Instead of superficial video courses, Simatrix delivers career-launch programs structured around continuous live mentoring, real production capstones, and rigorous placement preparation.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="carousel-wrapper">
          <div className="programs-slider" ref={sliderRef}>
            {FLAGSHIP_PROGRAMS.map((prog) => {
              const theme = PROGRAM_THEMES[prog.slug] || {
                accent: "#0052FF",
                gradient: "linear-gradient(90deg, #0052FF, #3B82F6)",
                bg: "#EFF6FF",
                border: "#BFDBFE",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                ),
                metricLabel: "Projects",
                metricVal: "Real Production Specs",
              };

              return (
                <div key={prog.id} className="program-card">
                  {/* Top Accent Gradient Bar */}
                  <div className="card-accent-bar" style={{ background: theme.gradient }} aria-hidden="true" />

                  {/* Card Top: Squircle Icon + Badge */}
                  <div className="card-top">
                    <div
                      className="card-icon"
                      style={{
                        color: theme.accent,
                        background: `${theme.accent}12`,
                        borderColor: `${theme.accent}25`,
                      }}
                    >
                      {theme.icon}
                    </div>

                    <span
                      className="pill-badge"
                      style={{
                        color: theme.accent,
                        background: theme.bg,
                        borderColor: theme.border,
                      }}
                    >
                      {prog.badge}
                    </span>
                  </div>

                  {/* Title & 1-line Tagline */}
                  <h3 className="card-title">
                    <Link href={`/programs/${prog.slug}`} className="title-link">
                      {prog.title.replace(" Career Program", "").replace(" Masterclass", "").replace(" Career Track", "").replace(" Mastery", "")}
                    </Link>
                  </h3>
                  <p className="card-tagline">{prog.tagline}</p>

                  {/* Scannable 3-Metric Chips */}
                  <div className="metrics-row">
                    <div className="metric-chip">
                      <span className="metric-label">Duration</span>
                      <span className="metric-val">{prog.duration.split(" ")[0]} {prog.duration.split(" ")[1] || "Months"}</span>
                    </div>
                    <div className="metric-chip">
                      <span className="metric-label">{theme.metricLabel}</span>
                      <span className="metric-val">{theme.metricVal}</span>
                    </div>
                    <div className="metric-chip">
                      <span className="metric-label">Format</span>
                      <span className="metric-val">{prog.mode.includes("Hybrid") ? "Live + Hybrid" : "Live Cohort"}</span>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="skills-wrap">
                    <span className="skills-label">TECH STACK</span>
                    <div className="skills-pills">
                      {prog.skills.slice(0, 5).map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="card-footer">
                    <Link
                      href={`/programs/${prog.slug}`}
                      className="btn-action"
                      style={{
                        background: prog.badge === "Most Popular" ? "#0052FF" : "#0F172A",
                        borderColor: prog.badge === "Most Popular" ? "#0052FF" : "#0F172A",
                      }}
                      aria-label={`Explore ${prog.title}`}
                    >
                      <span>Explore Program</span>
                      <span className="btn-arrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Special Finale Card: "Explore All Programs" */}
            <div className="program-card see-all-card">
              <div className="see-all-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>

              <span className="pill-badge pill-see-all">COMPLETE CATALOG</span>

              <h3 className="card-title" style={{ marginTop: "12px" }}>
                Explore All Programs
              </h3>
              <p className="card-tagline" style={{ minHeight: "auto", marginBottom: "24px" }}>
                Browse our complete directory of specialized electives, weekend masterclasses, and enterprise tracks.
              </p>

              <div className="see-all-stats-row">
                <div className="see-all-stat">
                  <strong>7+</strong>
                  <span>Programs</span>
                </div>
                <div className="see-all-divider" />
                <div className="see-all-stat">
                  <strong>500+</strong>
                  <span>Challenges</span>
                </div>
                <div className="see-all-divider" />
                <div className="see-all-stat">
                  <strong>100%</strong>
                  <span>Job Ready</span>
                </div>
              </div>

              <div className="card-footer" style={{ marginTop: "auto" }}>
                <Link href="/programs" className="btn-action btn-see-all">
                  <span>Explore All Programs</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Simatrix Career Programs Navigation Controller & Action Center */}
        <div className="programs-nav-footer">
          <div className="simatrix-nav-dock">
            {/* Previous Button */}
            <button
              onClick={() => handleScroll("left")}
              className={`simatrix-dock-btn dock-btn-prev ${!canScrollLeft ? "dock-btn-disabled" : ""}`}
              disabled={!canScrollLeft}
              aria-label="Previous programs"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            {/* High-Tech Segmented Capsule Progress Tracker */}
            <div className="simatrix-capsule-tracker" role="tablist" aria-label="Program cohort views">
              <span className="tracker-counter">
                0{activeDot + 1} <span className="tracker-total">/ 0{TOTAL_DOTS}</span>
              </span>

              <div className="tracker-segments">
                {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToDot(i)}
                    className={`segment-bar ${activeDot === i ? "segment-active" : ""}`}
                    aria-label={`Go to slide ${i + 1}`}
                    role="tab"
                    aria-selected={activeDot === i}
                  />
                ))}
              </div>

              <span className="tracker-badge">7 TRACKS</span>
            </div>

            {/* Next Button */}
            <button
              onClick={() => handleScroll("right")}
              className={`simatrix-dock-btn dock-btn-next ${!canScrollRight ? "dock-btn-disabled" : ""}`}
              disabled={!canScrollRight}
              aria-label="Next programs"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Action Center: Explore Full Catalog Button */}
          <div className="catalog-cta-wrap">
            <Link href="/programs" className="simatrix-catalog-btn">
              <span className="catalog-btn-dot" aria-hidden="true" />
              <span>Explore All 7+ Career Programs</span>
              <span className="catalog-btn-arrow" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
            <p className="catalog-cta-sub">
              Full 6-module curriculum, real capstone specs, and dedicated placement support across all tracks
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .programs-section {
          background: #FFFFFF;
          padding: 60px 0 70px 0;
          border-top: 1px solid #EEF2F6;
          border-bottom: 1px solid #EEF2F6;
          overflow: hidden;
        }

        /* Section Header: Centered & Aligned with Other Sections */
        .programs-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 44px auto;
        }

        .programs-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: 9999px;
          background: #EEF4FF;
          border: 1px solid #BFDBFE;
          color: #1D4ED8;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .badge-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0052FF;
          box-shadow: 0 0 8px rgba(0, 82, 255, 0.8);
        }

        .programs-title {
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #0F172A;
          margin-bottom: 14px;
        }

        .title-gradient {
          background: linear-gradient(135deg, #0052FF 0%, #2563EB 55%, #4F46E5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .programs-desc {
          font-size: 1.125rem;
          color: #475569;
          font-weight: 500;
          line-height: 1.65;
          max-width: 760px;
          margin: 0 auto;
        }

        /* Carousel Slider Container */
        .carousel-wrapper {
          position: relative;
          width: 100%;
        }

        .programs-slider {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 8px 4px 18px 4px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .programs-slider::-webkit-scrollbar {
          display: none;
        }

        /* Program Card */
        .program-card {
          flex: 0 0 340px;
          max-width: 340px;
          scroll-snap-align: start;
          position: relative;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 24px 22px 20px 22px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.22s ease,
                      box-shadow 0.22s ease;
          overflow: hidden;
        }

        .program-card:hover {
          transform: translateY(-4px);
          border-color: #CBD5E1;
          box-shadow: 0 16px 32px -8px rgba(15, 23, 42, 0.08);
        }

        .card-accent-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .card-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pill-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 4px 10px;
          border-radius: 9999px;
          border: 1px solid;
          text-transform: uppercase;
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
          line-height: 1.25;
        }

        .title-link {
          color: #0F172A;
          transition: color 0.15s ease;
        }

        .title-link:hover {
          color: #0052FF;
        }

        .card-tagline {
          font-size: 0.86rem;
          color: #64748B;
          line-height: 1.5;
          margin-bottom: 16px;
          min-height: 40px;
        }

        /* Metrics Row */
        .metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 9px 6px;
          margin-bottom: 16px;
        }

        .metric-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2px;
        }

        .metric-label {
          font-size: 0.64rem;
          font-weight: 700;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .metric-val {
          font-size: 0.76rem;
          font-weight: 800;
          color: #0F172A;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        /* Tech Stack */
        .skills-wrap {
          margin-bottom: 18px;
          margin-top: auto;
        }

        .skills-label {
          font-size: 0.65rem;
          font-weight: 800;
          color: #94A3B8;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 6px;
        }

        .skills-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .skill-tag {
          font-size: 0.72rem;
          font-weight: 600;
          color: #334155;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 3px 8px;
          border-radius: 6px;
        }

        /* Footer Button */
        .card-footer {
          margin-top: auto;
        }

        .btn-action {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 0.86rem;
          font-weight: 700;
          color: #FFFFFF;
          border: 1px solid transparent;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-action:hover {
          opacity: 0.92;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.15);
        }

        .btn-arrow {
          transition: transform 0.2s ease;
        }

        .btn-action:hover .btn-arrow {
          transform: translateX(3px);
        }

        /* See All Finale Card */
        .see-all-card {
          background: #FAF8F5;
          border: 2px dashed #CBD5E1;
          align-items: center;
          text-align: center;
          justify-content: flex-start;
          padding-top: 36px;
        }

        .see-all-card:hover {
          border-color: #0052FF;
          background: #F8FAFC;
        }

        .see-all-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .pill-see-all {
          background: #EFF6FF;
          color: #0052FF;
          border: 1px solid #BFDBFE;
        }

        .see-all-stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 24px;
          width: 100%;
          padding: 12px 8px;
          background: #FFFFFF;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
        }

        .see-all-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.25;
        }

        .see-all-stat strong {
          font-size: 0.95rem;
          color: #0F172A;
          font-weight: 800;
        }

        .see-all-stat span {
          font-size: 0.68rem;
          color: #64748B;
          font-weight: 600;
        }

        .see-all-divider {
          width: 1px;
          height: 24px;
          background: #E2E8F0;
        }

        .btn-see-all {
          background: #0052FF !important;
          border-color: #0052FF !important;
          box-shadow: 0 4px 14px rgba(0, 82, 255, 0.25);
        }

        .btn-see-all:hover {
          background: #0045D8 !important;
        }

        /* Simatrix Custom Navigation Controller & Action Center */
        .programs-nav-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 36px;
          gap: 22px;
          width: 100%;
        }

        .simatrix-nav-dock {
          display: inline-flex;
          align-items: center;
          gap: 14px;
        }

        /* Modern Squircle Dock Arrow Buttons */
        .simatrix-dock-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          color: #0F172A;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
          padding: 0;
        }

        .simatrix-dock-btn:hover:not(:disabled) {
          background: #0052FF;
          border-color: #0052FF;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -4px rgba(0, 82, 255, 0.38);
        }

        .simatrix-dock-btn:active:not(:disabled) {
          transform: translateY(0) scale(0.96);
          box-shadow: 0 2px 6px rgba(0, 82, 255, 0.2);
        }

        .simatrix-dock-btn.dock-btn-disabled,
        .simatrix-dock-btn:disabled {
          border-color: #E2E8F0;
          color: #CBD5E1;
          cursor: not-allowed;
          background: #F8FAFC;
          transform: none;
          box-shadow: none;
        }

        /* High-Tech Segmented Capsule Tracker */
        .simatrix-capsule-tracker {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 7px 18px;
          border-radius: 9999px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          box-shadow: inset 0 1px 2px rgba(15, 23, 42, 0.03);
        }

        .tracker-counter {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0F172A;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.01em;
        }

        .tracker-total {
          color: #94A3B8;
          font-weight: 500;
        }

        .tracker-segments {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .segment-bar {
          height: 6px;
          width: 10px;
          border-radius: 9999px;
          background: #CBD5E1;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .segment-bar:hover:not(.segment-active) {
          background: #93C5FD;
          width: 16px;
        }

        .segment-bar.segment-active {
          width: 34px;
          background: linear-gradient(90deg, #0052FF 0%, #3B82F6 100%);
          box-shadow: 0 0 10px rgba(0, 82, 255, 0.35);
        }

        .tracker-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0052FF;
          background: #EFF6FF;
          border: 1px solid #DBEAFE;
          padding: 3px 8px;
          border-radius: 9999px;
        }

        /* Action Center: Explore Full Catalog Button */
        .catalog-cta-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
        }

        .simatrix-catalog-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          border-radius: 12px;
          background: #0F172A;
          border: 1px solid #1E293B;
          color: #FFFFFF;
          font-size: 0.94rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.12);
          position: relative;
        }

        .catalog-btn-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #0052FF;
          box-shadow: 0 0 8px #0052FF;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
        }

        .catalog-btn-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .simatrix-catalog-btn:hover {
          background: #0052FF;
          border-color: #0052FF;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 10px 26px -4px rgba(0, 82, 255, 0.42);
        }

        .simatrix-catalog-btn:hover .catalog-btn-dot {
          background: #FFFFFF;
          box-shadow: 0 0 8px #FFFFFF;
        }

        .simatrix-catalog-btn:hover .catalog-btn-arrow {
          transform: translateX(4px);
        }

        .simatrix-catalog-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .catalog-cta-sub {
          font-size: 0.82rem;
          color: #64748B;
          font-weight: 500;
          margin: 0;
          max-width: 520px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .programs-header {
            margin-bottom: 32px;
          }

          .program-card {
            flex: 0 0 300px;
            max-width: 300px;
            padding: 20px 18px;
          }
        }
      ` }} />
    </section>
  );
}

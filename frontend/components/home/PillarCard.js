import Link from "next/link";

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "LEARN",
    pill: "STEP 01",
    theme: {
      primary: "#0052FF",
      accentBg: "#EFF6FF",
      accentBorder: "#DBEAFE",
      nodeGrad: "linear-gradient(135deg, #0052FF 0%, #2563EB 100%)",
      iconGrad: "linear-gradient(135deg, #06B6D4 0%, #0284C7 50%, #2563EB 100%)",
      iconShadow: "0 8px 18px -4px rgba(2, 132, 199, 0.38)",
      hoverBorder: "rgba(0, 82, 255, 0.35)",
      hoverShadow: "0 18px 36px -8px rgba(0, 82, 255, 0.12)",
    },
    description:
      "Master modern full stack engineering, data analytics, and generative AI with comprehensive live sessions and self-paced deep dives.",
    stats: [
      {
        value: "12+",
        label: "Technologies",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
          </svg>
        ),
      },
      {
        value: "Live +",
        label: "Self-paced",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
    ],
    cta: "Explore Programs →",
    href: "/programs",
    mainIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      </svg>
    ),
    watermark: (
      <svg width="150" height="120" viewBox="0 0 150 120" fill="none" aria-hidden="true" className="card-watermark">
        <rect x="8" y="10" width="134" height="96" rx="14" stroke="#0284C7" strokeWidth="1.8" fill="#F0F9FF" fillOpacity="0.5" />
        <circle cx="75" cy="58" r="20" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.6" />
        <polygon points="70,49 86,58 70,67" fill="#0284C7" />
        <line x1="22" y1="24" x2="48" y2="24" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="22" y1="92" x2="128" y2="92" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "PRACTICE",
    pill: "STEP 02",
    theme: {
      primary: "#7C3AED",
      accentBg: "#F5F3FF",
      accentBorder: "#DDD6FE",
      nodeGrad: "linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)",
      iconGrad: "linear-gradient(135deg, #A855F7 0%, #7C3AED 50%, #6366F1 100%)",
      iconShadow: "0 8px 18px -4px rgba(124, 58, 237, 0.38)",
      hoverBorder: "rgba(124, 58, 237, 0.35)",
      hoverShadow: "0 18px 36px -8px rgba(124, 58, 237, 0.12)",
    },
    description:
      "Daily hands-on drills in CodeArena, WebLab, and SQLLab with automated test assertions and instant execution feedback.",
    stats: [
      {
        value: "500+",
        label: "Challenges",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 20V10" />
            <path d="M18 20V4" />
            <path d="M6 20v-4" />
          </svg>
        ),
      },
      {
        value: "Instant",
        label: "Feedback",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        ),
      },
    ],
    cta: "Enter CodeArena →",
    href: "/practice",
    mainIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    watermark: (
      <svg width="150" height="120" viewBox="0 0 150 120" fill="none" aria-hidden="true" className="card-watermark">
        <rect x="8" y="10" width="134" height="96" rx="14" stroke="#7C3AED" strokeWidth="1.8" fill="#FAF5FF" fillOpacity="0.5" />
        <circle cx="22" cy="22" r="3" fill="#7C3AED" />
        <circle cx="32" cy="22" r="3" fill="#7C3AED" />
        <circle cx="42" cy="22" r="3" fill="#7C3AED" />
        <line x1="8" y1="34" x2="142" y2="34" stroke="#7C3AED" strokeWidth="1.4" />
        <path d="M50 56 L42 64 L50 72" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M68 56 L76 64 L68 72" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="62" y1="54" x2="56" y2="74" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        <line x1="90" y1="60" x2="124" y2="60" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        <line x1="90" y1="70" x2="116" y2="70" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "BUILD",
    pill: "STEP 03",
    theme: {
      primary: "#0284C7",
      accentBg: "#F0F9FF",
      accentBorder: "#BAE6FD",
      nodeGrad: "linear-gradient(135deg, #0284C7 0%, #2563EB 100%)",
      iconGrad: "linear-gradient(135deg, #38BDF8 0%, #0284C7 50%, #1D4ED8 100%)",
      iconShadow: "0 8px 18px -4px rgba(2, 132, 199, 0.38)",
      hoverBorder: "rgba(2, 132, 199, 0.35)",
      hoverShadow: "0 18px 36px -8px rgba(2, 132, 199, 0.12)",
    },
    description:
      "Build real production specs. Commit clean git branches, receive practitioner code reviews, and compile real proof of work.",
    stats: [
      {
        value: "Real",
        label: "Projects",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
        ),
      },
      {
        value: "GitHub",
        label: "Workflow",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        ),
      },
    ],
    cta: "View Project Specs →",
    href: "/build",
    mainIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m21 16-9 5-9-5" />
        <path d="m21 12-9 5-9-5" />
        <path d="m3 7 9 5 9-5-9-5-9 5Z" />
        <path d="M12 22V12" />
      </svg>
    ),
    watermark: (
      <svg width="150" height="120" viewBox="0 0 150 120" fill="none" aria-hidden="true" className="card-watermark">
        <rect x="28" y="10" width="112" height="70" rx="10" stroke="#0284C7" strokeWidth="1.4" fill="#F0F9FF" fillOpacity="0.4" />
        <rect x="14" y="24" width="112" height="70" rx="10" stroke="#0284C7" strokeWidth="1.4" fill="#E0F2FE" fillOpacity="0.6" />
        <rect x="4" y="38" width="112" height="70" rx="10" stroke="#0284C7" strokeWidth="1.8" fill="#F0F9FF" fillOpacity="0.5" />
        <line x1="16" y1="52" x2="48" y2="52" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="16" y1="64" x2="84" y2="64" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="16" y1="74" x2="64" y2="74" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="90" cy="86" r="5" stroke="#0284C7" strokeWidth="1.4" />
        <path d="M90 81 V70" stroke="#0284C7" strokeWidth="1.4" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "CAREER",
    pill: "STEP 04",
    theme: {
      primary: "#C026D3",
      accentBg: "#FDF2F8",
      accentBorder: "#F5D0FE",
      nodeGrad: "linear-gradient(135deg, #A855F7 0%, #C026D3 100%)",
      iconGrad: "linear-gradient(135deg, #F43F5E 0%, #EC4899 40%, #A855F7 100%)",
      iconShadow: "0 8px 18px -4px rgba(236, 72, 153, 0.38)",
      hoverBorder: "rgba(192, 38, 211, 0.35)",
      hoverShadow: "0 18px 36px -8px rgba(192, 38, 211, 0.12)",
    },
    description:
      "Transform projects into recruiter-grade portfolios, prepare for technical interviews, and unlock career opportunities.",
    stats: [
      {
        value: "Portfolio",
        label: "Ready",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C026D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="m9 15 2 2 4-4" />
          </svg>
        ),
      },
      {
        value: "Interview",
        label: "Preparation",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C026D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
    ],
    cta: "Career Launchpad →",
    href: "/career",
    mainIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    watermark: (
      <svg width="150" height="120" viewBox="0 0 150 120" fill="none" aria-hidden="true" className="card-watermark">
        <rect x="30" y="74" width="16" height="34" rx="3" fill="#F5D0FE" fillOpacity="0.7" />
        <rect x="54" y="56" width="16" height="52" rx="3" fill="#E879F9" fillOpacity="0.7" />
        <rect x="78" y="38" width="16" height="70" rx="3" fill="#D946EF" fillOpacity="0.7" />
        <rect x="102" y="18" width="16" height="90" rx="3" fill="#C026D3" fillOpacity="0.8" />
        <path d="M26 68 Q 62 44, 114 12" stroke="#C026D3" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <polyline points="104 12 116 11 115 23" stroke="#C026D3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

export default function CareerPipeline() {
  return (
    <section className="pipeline-section" aria-labelledby="pipeline-heading">
      {/* Ambient background glows */}
      <div className="pipeline-ambient-glow pipeline-ambient-left" aria-hidden="true" />
      <div className="pipeline-ambient-glow pipeline-ambient-right" aria-hidden="true" />

      {/* Subtle sparkle accents */}
      <div className="pipeline-sparkle sparkle-top-left" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#93C5FD">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      </div>
      <div className="pipeline-sparkle sparkle-top-right" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#C084FC">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      </div>
      <div className="pipeline-sparkle sparkle-mid-right" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#A5B4FC">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="pipeline-header">
          <div className="pipeline-badge">THE SIMATRIX STANDARD</div>
          <h2 id="pipeline-heading" className="pipeline-title">
            The Simatrix <span className="pipeline-title-gradient">Career Pipeline</span>
          </h2>
          <p className="pipeline-subheading">
            Learn skills. Build proof. Become career ready.
          </p>
        </div>

        {/* Desktop Connected Progress Pipeline */}
        <div className="pipeline-connector-track" aria-hidden="true">
          <div className="pipeline-connector-inner">
            {/* Continuous gradient connector line */}
            <div className="pipeline-base-line" />

            {/* Subtle animated travelling dot */}
            <div className="pipeline-travel-dot" />

            {/* Segment Chevrons */}
            <div className="pipeline-chevron-segment chevron-seg-1">
              <span className="chevron-icon">›››</span>
            </div>
            <div className="pipeline-chevron-segment chevron-seg-2">
              <span className="chevron-icon">›››</span>
            </div>
            <div className="pipeline-chevron-segment chevron-seg-3">
              <span className="chevron-icon">›››</span>
            </div>

            {/* Numbered Nodes */}
            {PIPELINE_STEPS.map((item, index) => (
              <div
                key={item.step}
                className={`pipeline-node pipeline-node-${index + 1}`}
                style={{
                  background: item.theme.nodeGrad,
                }}
              >
                <span>{item.step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Cards Grid */}
        <div className="pipeline-cards-grid">
          {PIPELINE_STEPS.map((item, index) => (
            <div key={item.step} className="pipeline-card-column">
              {/* Mobile Node & Vertical Connector Indicator */}
              <div className="pipeline-mobile-node-bar" aria-hidden="true">
                <div
                  className="pipeline-mobile-node"
                  style={{ background: item.theme.nodeGrad }}
                >
                  {item.step}
                </div>
                <div className="pipeline-mobile-node-title">
                  {item.title}
                </div>
              </div>

              {/* The Card */}
              <div
                className="pipeline-card"
                style={{
                  "--card-hover-border": item.theme.hoverBorder,
                  "--card-hover-shadow": item.theme.hoverShadow,
                }}
              >
                {/* Background Watermark Illustration */}
                {item.watermark}

                {/* Card Top Row: Gradient Squircle Icon + Step Pill */}
                <div className="pipeline-card-top">
                  <div
                    className="pipeline-icon-squircle"
                    style={{
                      background: item.theme.iconGrad,
                      boxShadow: item.theme.iconShadow,
                    }}
                  >
                    {item.mainIcon}
                  </div>

                  <span
                    className="pipeline-step-pill"
                    style={{
                      color: item.theme.primary,
                      background: item.theme.accentBg,
                      borderColor: item.theme.accentBorder,
                    }}
                  >
                    {item.pill}
                  </span>
                </div>

                {/* Card Title */}
                <h3
                  className="pipeline-card-title"
                  style={{ color: item.theme.primary }}
                >
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="pipeline-card-desc">
                  {item.description}
                </p>

                {/* Proof / Stat Row */}
                <div className="pipeline-stats-row">
                  {item.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="pipeline-stat-box">
                      <div className="pipeline-stat-icon-wrap">
                        {stat.icon}
                      </div>
                      <div className="pipeline-stat-text-wrap">
                        <span className="pipeline-stat-value">{stat.value}</span>
                        <span className="pipeline-stat-label">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="pipeline-cta-wrap">
                  <Link
                    href={item.href}
                    className="pipeline-cta-link"
                    style={{ color: item.theme.primary }}
                    aria-label={`${item.title}: ${item.cta}`}
                  >
                    <span>{item.cta}</span>
                  </Link>
                </div>
              </div>

              {/* Mobile Vertical Down Connector to next step */}
              {index < PIPELINE_STEPS.length - 1 && (
                <div className="pipeline-mobile-down-arrow" aria-hidden="true">
                  <div className="pipeline-mobile-down-line" />
                  <span className="pipeline-mobile-chevron">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Progress Indicator */}
        <div className="pipeline-progress-footer">
          <div className="pipeline-progress-bar-wrap" aria-hidden="true">
            <div className="pipeline-endpoint-dot endpoint-start" />
            <div className="pipeline-progress-line" />
            <div className="pipeline-endpoint-dot endpoint-end" />
          </div>
          <div className="pipeline-progress-label">
            YOUR PROGRESS → CAREER
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ==========================================================================
           SIMATRIX CAREER PIPELINE SECTION STYLES
           ========================================================================== */
        .pipeline-section {
          position: relative;
          background: #FFFFFF;
          padding: 70px 0 80px 0;
          overflow: hidden;
        }

        /* Ambient Glows */
        .pipeline-ambient-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(55px);
          z-index: 0;
        }

        .pipeline-ambient-left {
          top: -20px;
          left: 5%;
          width: 580px;
          height: 380px;
          background: radial-gradient(
            ellipse,
            rgba(59, 130, 246, 0.09) 0%,
            rgba(99, 102, 241, 0.04) 50%,
            transparent 75%
          );
        }

        .pipeline-ambient-right {
          top: 10px;
          right: 5%;
          width: 580px;
          height: 380px;
          background: radial-gradient(
            ellipse,
            rgba(168, 85, 247, 0.09) 0%,
            rgba(236, 72, 153, 0.04) 50%,
            transparent 75%
          );
        }

        /* Ambient Sparkles */
        .pipeline-sparkle {
          position: absolute;
          pointer-events: none;
          z-index: 0;
          opacity: 0.85;
          animation: sparklePulse 4s ease-in-out infinite alternate;
        }

        .sparkle-top-left {
          top: 70px;
          left: 12%;
        }

        .sparkle-top-right {
          top: 60px;
          right: 14%;
          animation-delay: 1.2s;
        }

        .sparkle-mid-right {
          top: 160px;
          right: 6%;
          animation-delay: 2.4s;
        }

        @keyframes sparklePulse {
          0% {
            transform: scale(0.85) rotate(0deg);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.15) rotate(15deg);
            opacity: 0.95;
          }
        }

        /* Section Header */
        .pipeline-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 38px auto;
        }

        .pipeline-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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

        .pipeline-title {
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #0F172A;
          margin-bottom: 12px;
        }

        .pipeline-title-gradient {
          background: linear-gradient(135deg, #0052FF 0%, #2563EB 55%, #4F46E5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .pipeline-subheading {
          font-size: 1.125rem;
          color: #475569;
          font-weight: 500;
          line-height: 1.6;
        }

        /* Desktop Connected Pipeline Connector */
        .pipeline-connector-track {
          display: block;
          position: relative;
          width: 100%;
          margin: 0 0 28px 0;
        }

        .pipeline-connector-inner {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          /* Each node sits at center of its corresponding card */
          padding: 0 calc((100% - 3 * 24px) / 8);
          height: 48px;
        }

        /* Continuous Base Line across all 4 nodes */
        .pipeline-base-line {
          position: absolute;
          left: calc((100% - 3 * 24px) / 8);
          right: calc((100% - 3 * 24px) / 8);
          top: 50%;
          height: 2px;
          transform: translateY(-50%);
          background: linear-gradient(
            90deg,
            #0052FF 0%,
            #7C3AED 33%,
            #0284C7 66%,
            #C026D3 100%
          );
          z-index: 1;
        }

        /* Animated Travelling Dot */
        .pipeline-travel-dot {
          position: absolute;
          top: 50%;
          left: calc((100% - 3 * 24px) / 8);
          width: 32px;
          height: 6px;
          margin-top: -3px;
          border-radius: 9999px;
          background: linear-gradient(90deg, transparent, #FFFFFF 50%, #60A5FA 100%);
          box-shadow: 0 0 10px #3B82F6, 0 0 18px rgba(96, 165, 250, 0.9);
          z-index: 3;
          pointer-events: none;
          animation: pipelineTravelDot 4.8s linear infinite;
        }

        @keyframes pipelineTravelDot {
          0% {
            left: calc((100% - 3 * 24px) / 8);
            opacity: 0;
          }
          4% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            left: calc(100% - ((100% - 3 * 24px) / 8) - 32px);
            opacity: 0;
          }
        }

        /* Segment Chevrons */
        .pipeline-chevron-segment {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          background: #FFFFFF;
          padding: 0 6px;
          border-radius: 4px;
        }

        .chevron-seg-1 {
          left: 33.3%;
          transform: translate(-50%, -50%);
          color: #60A5FA;
        }

        .chevron-seg-2 {
          left: 50%;
          transform: translate(-50%, -50%);
          color: #818CF8;
        }

        .chevron-seg-3 {
          left: 66.6%;
          transform: translate(-50%, -50%);
          color: #38BDF8;
        }

        .chevron-icon {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          display: inline-block;
          opacity: 0.9;
        }

        /* Circular Numbered Nodes */
        .pipeline-node {
          position: relative;
          z-index: 4;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 0.84rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.18), 0 0 0 4px #FFFFFF;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .pipeline-node-1 {
          box-shadow: 0 4px 14px rgba(0, 82, 255, 0.4), 0 0 0 4px #FFFFFF;
        }

        .pipeline-node-2 {
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4), 0 0 0 4px #FFFFFF;
        }

        .pipeline-node-3 {
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.4), 0 0 0 4px #FFFFFF;
        }

        .pipeline-node-4 {
          box-shadow: 0 4px 14px rgba(192, 38, 211, 0.4), 0 0 0 4px #FFFFFF;
        }

        /* Cards Grid */
        .pipeline-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .pipeline-card-column {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .pipeline-mobile-node-bar {
          display: none;
        }

        .pipeline-mobile-down-arrow {
          display: none;
        }

        /* Card Container */
        .pipeline-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 22px;
          padding: 28px 22px 24px 22px;
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03);
          overflow: hidden;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .pipeline-card:hover {
          transform: translateY(-5px);
          border-color: var(--card-hover-border, #CBD5E1);
          box-shadow: var(--card-hover-shadow, 0 16px 36px -6px rgba(15, 23, 42, 0.08));
        }

        /* Card Background Watermark */
        :global(.card-watermark) {
          position: absolute;
          top: 10px;
          right: 10px;
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .pipeline-card:hover :global(.card-watermark) {
          opacity: 0.18;
          transform: scale(1.02);
        }

        /* Card Top: Squircle Icon + Step Pill */
        .pipeline-card-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .pipeline-icon-squircle {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .pipeline-card:hover .pipeline-icon-squircle {
          transform: scale(1.06);
        }

        .pipeline-step-pill {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 11px;
          border-radius: 9999px;
          border: 1px solid transparent;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* Card Title */
        .pipeline-card-title {
          position: relative;
          z-index: 1;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-bottom: 10px;
        }

        /* Card Description */
        .pipeline-card-desc {
          position: relative;
          z-index: 1;
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.62;
          margin-bottom: 22px;
          flex-grow: 1;
        }

        /* Proof / Stat Row */
        .pipeline-stats-row {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 20px;
        }

        .pipeline-stat-box {
          display: flex;
          align-items: center;
          gap: 9px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 8px 10px;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .pipeline-card:hover .pipeline-stat-box {
          background: #FFFFFF;
          border-color: #CBD5E1;
        }

        .pipeline-stat-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pipeline-stat-text-wrap {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
          min-width: 0;
        }

        .pipeline-stat-value {
          font-size: 0.82rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pipeline-stat-label {
          font-size: 0.7rem;
          font-weight: 500;
          color: #64748B;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* CTA Link */
        .pipeline-cta-wrap {
          position: relative;
          z-index: 1;
          padding-top: 14px;
          border-top: 1px solid #F1F5F9;
          margin-top: auto;
        }

        .pipeline-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 700;
          transition: gap 0.2s ease;
        }

        .pipeline-card:hover .pipeline-cta-link {
          gap: 9px;
        }

        /* Bottom Progress Indicator */
        .pipeline-progress-footer {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .pipeline-progress-bar-wrap {
          position: relative;
          width: clamp(280px, 36%, 380px);
          height: 4px;
          display: flex;
          align-items: center;
        }

        .pipeline-progress-line {
          width: 100%;
          height: 3px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #0052FF 0%, #7C3AED 50%, #C026D3 100%);
        }

        .pipeline-endpoint-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
        }

        .endpoint-start {
          left: -4px;
          background: #0052FF;
          box-shadow: 0 0 10px rgba(0, 82, 255, 0.6);
        }

        .endpoint-end {
          right: -4px;
          background: #C026D3;
          box-shadow: 0 0 10px rgba(192, 38, 211, 0.6);
        }

        .pipeline-progress-label {
          font-size: 0.74rem;
          font-weight: 800;
          color: #64748B;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-top: 14px;
          text-align: center;
        }

        /* ==========================================================================
           RESPONSIVE BREAKPOINTS
           ========================================================================== */
        /* Tablet adjustments: preserve 4-column layout where space allows */
        @media (min-width: 768px) and (max-width: 1023px) {
          .pipeline-cards-grid {
            gap: 14px;
          }

          .pipeline-connector-inner {
            padding: 0 calc((100% - 3 * 14px) / 8);
          }

          .pipeline-base-line {
            left: calc((100% - 3 * 14px) / 8);
            right: calc((100% - 3 * 14px) / 8);
          }

          @keyframes pipelineTravelDot {
            0% {
              left: calc((100% - 3 * 14px) / 8);
              opacity: 0;
            }
            4% {
              opacity: 1;
            }
            95% {
              opacity: 1;
            }
            100% {
              left: calc(100% - ((100% - 3 * 14px) / 8) - 32px);
              opacity: 0;
            }
          }

          .pipeline-card {
            padding: 22px 14px 18px 14px;
            border-radius: 18px;
          }

          .pipeline-card-desc {
            font-size: 0.82rem;
          }

          .pipeline-stat-box {
            padding: 6px 8px;
            gap: 6px;
          }

          .pipeline-stat-value {
            font-size: 0.76rem;
          }

          .pipeline-stat-label {
            font-size: 0.66rem;
          }
        }

        /* Mobile adjustments: convert to vertical sequence */
        @media (max-width: 767px) {
          .pipeline-section {
            padding: 50px 0 60px 0;
          }

          /* Hide horizontal connector */
          .pipeline-connector-track {
            display: none;
          }

          /* 1-column layout */
          .pipeline-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 480px;
            margin: 0 auto;
          }

          .pipeline-mobile-node-bar {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;
          }

          .pipeline-mobile-node {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            font-size: 0.82rem;
            font-weight: 800;
            box-shadow: 0 2px 8px rgba(15, 23, 42, 0.15);
          }

          .pipeline-mobile-node-title {
            font-size: 0.85rem;
            font-weight: 800;
            letter-spacing: 0.08em;
            color: #0F172A;
            text-transform: uppercase;
          }

          .pipeline-mobile-down-arrow {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 12px 0;
            color: #94A3B8;
            font-size: 1.2rem;
            font-weight: 700;
          }

          .pipeline-mobile-down-line {
            width: 2px;
            height: 24px;
            background: linear-gradient(180deg, #CBD5E1, #94A3B8);
            margin-bottom: 2px;
          }

          .pipeline-card {
            padding: 24px 20px;
          }
        }

        /* Accessibility: Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .pipeline-travel-dot {
            display: none;
          }
          .pipeline-sparkle {
            animation: none;
          }
          .pipeline-card {
            transition: none;
          }
          .pipeline-icon-squircle {
            transition: none;
          }
        }
      ` }} />
    </section>
  );
}

export { CareerPipeline, CareerPipeline as PillarCard };

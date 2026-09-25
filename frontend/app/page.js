import Link from "next/link";
import Hero from "@/components/home/Hero";
import PartnersBar from "@/components/home/PartnersBar";
import PillarCard from "@/components/home/PillarCard";
import FlagshipPrograms from "@/components/home/FlagshipPrograms";
import PracticeTeaser from "@/components/home/PracticeTeaser";
import BuildSection from "@/components/home/BuildSection";
import MentorsSection from "@/components/home/MentorsSection";
import WorkshopBanner from "@/components/home/WorkshopBanner";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <div>
      {/* 1. Luxury Hero Section */}
      <Hero />

      {/* 2. Leading Companies / Partners Bar */}
      <PartnersBar />

      {/* 3. Flagship Career Programs Section */}
      <FlagshipPrograms />

      {/* 4. Four Pillars Ecosystem Section (The Simatrix Model) */}
      <section className="section" style={{ paddingTop: "40px", background: "var(--vil-ivory)" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">The Simatrix Standard</div>
            <h2 className="section-title">
              A 4-Step Ecosystem to <span className="gradient-gold-text">Launch Your Career</span>
            </h2>
            <p className="section-desc">
              We replaced passive video lectures with an active pipeline designed for tangible competency, verified code, and recruiter confidence.
            </p>
          </div>

          <div className="grid-4">
            <PillarCard
              number="01"
              title="LEARN"
              icon="📚"
              color="11, 19, 32"
              description="Master modern full stack engineering, data analytics, and generative AI with comprehensive live sessions and self-paced deep dives."
              linkText="Explore Programs"
              href="/programs"
            />
            <PillarCard
              number="02"
              title="PRACTICE"
              icon="⚡"
              color="201, 151, 56"
              description="Daily hands-on drills in CodeArena, WebLab, and SQLLab with automated test assertions and instant execution feedback."
              linkText="Enter CodeArena"
              href="/practice"
            />
            <PillarCard
              number="03"
              title="BUILD"
              icon="🛠️"
              color="5, 150, 105"
              description="Build real production specs. Commit clean git branches, receive practitioner code reviews, and compile real proof of work."
              linkText="View Project Specs"
              href="/build"
            />
            <PillarCard
              number="04"
              title="CAREER"
              icon="🎯"
              color="11, 19, 32"
              description="Transform projects into recruiter-grade portfolios, pass mock technical screens, and unlock 150+ direct hiring referrals."
              linkText="Career Launchpad"
              href="/career"
            />
          </div>
        </div>
      </section>

      {/* 5. Interactive Practice Sandbox (CodeArena Preview) */}
      <PracticeTeaser />

      {/* 6. Build & Proof of Work Section */}
      <BuildSection />

      {/* 7. Practitioner Faculty & Mentors Section */}
      <MentorsSection />

      {/* 8. Free Sunday Workshops Section */}
      <WorkshopBanner />

      {/* 9. Student Outcome & Public Profile Spotlight (Sakthi Kumar) */}
      <section className="section" style={{ background: "#ffffff", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "50px",
            alignItems: "center",
          }}>
            <div>
              <div className="section-badge" style={{ background: "var(--vil-gold-bg)", borderColor: "var(--vil-gold-border)", color: "var(--vil-gold-dim)" }}>
                Digital Proof of Work
              </div>
              <h2 className="section-title">
                Every Student Gets a <span className="gradient-gold-text">Verified Portfolio.</span>
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: "24px", lineHeight: 1.65 }}>
                Top tech recruiters don&apos;t hire generic certificates. They evaluate proof of engineering ability. Every Simatrix student graduates with a public portfolio showcasing verified GitHub repositories, CodeArena rankings, and tamper-proof cryptographic credentials.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--vil-navy)", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--vil-gold)", fontWeight: 800 }}>✓</span> Live skills radar & practice XP metrics
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--vil-navy)", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--vil-gold)", fontWeight: 800 }}>✓</span> Mentor-reviewed production projects with live demos & GitHub branches
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--vil-navy)", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--vil-gold)", fontWeight: 800 }}>✓</span> One-click shareable public link for LinkedIn profiles & recruiters
                </div>
              </div>

              <Link
                href="/profile/sakthi"
                className="btn btn-primary"
                style={{
                  background: "var(--vil-navy)",
                  color: "#FAF8F5",
                  borderRadius: "999px",
                  padding: "13px 28px",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Inspect Sample Student Profile (Sakthi)</span>
                <span>→</span>
              </Link>
            </div>

            {/* Profile Teaser Card */}
            <div style={{
              background: "#FAF8F5",
              border: "1px solid var(--border-subtle)",
              borderRadius: "24px",
              padding: "36px",
              boxShadow: "var(--shadow-card)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "var(--vil-navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "1.4rem",
                  color: "#FAF8F5",
                  border: "2px solid rgba(201, 151, 56, 0.5)",
                }}>
                  SK
                </div>
                <div>
                  <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--vil-navy)" }}>Sakthi Kumar</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--vil-gold-dim)", fontWeight: 700 }}>Full Stack Developer • Virudhunagar</div>
                </div>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                background: "#FFFFFF",
                padding: "16px",
                borderRadius: "14px",
                border: "1px solid var(--border-subtle)",
                marginBottom: "20px",
                textAlign: "center",
              }}>
                <div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--vil-navy)" }}>2,480</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Practice XP</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--accent-emerald)" }}>#14</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Rank</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--vil-navy)" }}>4 Shipped</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Verified Projects</div>
                </div>
              </div>

              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "10px" }}>
                Verified Skills
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {["Next.js", "TypeScript", "PostgreSQL", "Node.js", "TailwindCSS", "REST APIs"].map((s) => (
                  <span key={s} style={{
                    fontSize: "0.78rem",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "#FFFFFF",
                    color: "var(--vil-navy)",
                    border: "1px solid var(--border-subtle)",
                    fontWeight: 600,
                  }}>
                    {s}
                  </span>
                ))}
              </div>

              <Link
                href="/verify/SIM-2026-FSD-000142"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  background: "#FFFFFF",
                  border: "1px solid var(--vil-gold-border)",
                  color: "var(--vil-navy)",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "var(--accent-emerald)" }}>✓</span> Verified Credential: SIM-2026-FSD-000142
                </span>
                <span style={{ color: "var(--vil-gold-dim)" }}>Verify ↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Executive Call to Action */}
      <section className="section" style={{ background: "#FFFFFF", padding: "40px 0 80px 0" }}>
        <div className="container">
          <div style={{
            position: "relative",
            background: "#FFFFFF",
            border: "1px solid #DCE6F5",
            borderRadius: "32px",
            padding: "74px 32px 64px 32px",
            textAlign: "center",
            maxWidth: "1060px",
            margin: "0 auto",
            boxShadow: "0 12px 40px -10px rgba(0, 82, 255, 0.08), 0 2px 12px rgba(0, 0, 0, 0.02)",
            overflow: "hidden",
          }}>
            {/* Soft Ambient Corner Glows */}
            <div style={{
              position: "absolute",
              bottom: "-15%",
              left: "-8%",
              width: "520px",
              height: "440px",
              background: "radial-gradient(circle at 20% 80%, rgba(147, 197, 253, 0.55) 0%, rgba(191, 219, 254, 0.3) 45%, transparent 75%)",
              filter: "blur(28px)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute",
              top: "-15%",
              right: "-8%",
              width: "520px",
              height: "440px",
              background: "radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.55) 0%, rgba(191, 219, 254, 0.3) 45%, transparent 75%)",
              filter: "blur(28px)",
              pointerEvents: "none",
            }} />

            {/* Left Organic Fluid Waves */}
            <svg
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "52%",
                maxWidth: "540px",
                height: "100%",
                pointerEvents: "none",
              }}
              viewBox="0 0 540 400"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="waveL1" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#93C5FD" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="waveL2" x1="0%" y1="100%" x2="80%" y2="20%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.32" />
                  <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="waveL3" x1="0%" y1="90%" x2="90%" y2="10%">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.4" />
                  <stop offset="70%" stopColor="#DBEAFE" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M-40 420 C60 380 180 340 160 200 C140 70 40 10 -40 -20 Z"
                fill="url(#waveL3)"
              />
              <path
                d="M-40 420 C100 400 240 320 220 160 C200 40 100 -10 -40 -30 Z"
                fill="url(#waveL2)"
              />
              <path
                d="M-40 420 C140 430 320 360 280 220 C240 90 120 10 -40 -10 Z"
                fill="url(#waveL1)"
              />
            </svg>

            {/* Right Organic Fluid Waves */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "52%",
                maxWidth: "540px",
                height: "100%",
                pointerEvents: "none",
              }}
              viewBox="0 0 540 400"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="waveR1" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#93C5FD" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="waveR2" x1="100%" y1="0%" x2="20%" y2="80%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.32" />
                  <stop offset="60%" stopColor="#BAE6FD" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M580 -20 C440 10 320 80 340 220 C360 330 440 380 580 420 Z"
                fill="url(#waveR2)"
              />
              <path
                d="M580 -20 C380 30 260 120 280 260 C300 370 400 410 580 430 Z"
                fill="url(#waveR1)"
              />
            </svg>

            {/* Card Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Bold Two-Line Headline */}
              <h2 style={{
                fontSize: "clamp(2.3rem, 4.6vw, 3.3rem)",
                fontWeight: 900,
                color: "#0F172A",
                marginBottom: "20px",
                lineHeight: 1.18,
                letterSpacing: "-0.03em",
              }}>
                Ready to Build Skills
                <br />
                <span style={{ color: "#0052FF" }}>
                  That Actually Matter?
                </span>
              </h2>

              {/* Subtitle */}
              <p style={{
                fontSize: "1.08rem",
                color: "#475569",
                maxWidth: "760px",
                margin: "0 auto 38px auto",
                lineHeight: 1.62,
                fontWeight: 400,
              }}>
                Join upcoming batches for Full Stack Development, Data Analytics, or AI Engineering.
                <br />
                Practice daily, work on real projects, and graduate with undeniable proof of work.
              </p>

              {/* Dual Action Buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                <Link
                  href="/programs"
                  className="cta-btn-primary-blue"
                >
                  <span>Explore All Programs</span>
                  <span style={{ fontSize: "1.1rem" }}>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="cta-btn-outline-blue"
                >
                  <span>Request Free Career Counseling</span>
                  <span style={{ fontSize: "1.1rem" }}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

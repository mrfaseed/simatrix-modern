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
      <section className="section" style={{ background: "var(--vil-ivory)" }}>
        <div className="container">
          <div style={{
            background: "var(--vil-navy)",
            border: "1px solid rgba(201, 151, 56, 0.4)",
            borderRadius: "28px",
            padding: "64px 36px",
            textAlign: "center",
            maxWidth: "1020px",
            margin: "0 auto",
            boxShadow: "var(--shadow-lg)",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Background Glow */}
            <div style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "400px",
              background: "radial-gradient(circle, rgba(201, 151, 56, 0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <span style={{
              background: "rgba(201, 151, 56, 0.2)",
              border: "1px solid var(--vil-gold)",
              color: "var(--vil-gold-light)",
              fontSize: "0.75rem",
              fontWeight: 800,
              padding: "4px 14px",
              borderRadius: "999px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              display: "inline-block",
              marginBottom: "20px",
            }}>
              2026 Cohorts Filling Fast
            </span>

            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#FAF8F5", marginBottom: "16px", lineHeight: 1.2 }}>
              Ready to Build Skills That <span style={{ color: "var(--vil-gold-light)" }}>Actually Matter?</span>
            </h2>

            <p style={{ fontSize: "1.08rem", color: "rgba(250, 248, 245, 0.8)", maxWidth: "680px", margin: "0 auto 36px auto", lineHeight: 1.6 }}>
              Join upcoming batches for Full Stack Development, Data Analytics, or AI Engineering. Practice daily, ship real production code, and graduate with undeniable proof of work.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/programs"
                className="btn btn-gold btn-lg"
                style={{
                  borderRadius: "999px",
                  padding: "14px 34px",
                  fontWeight: 800,
                  fontSize: "0.96rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 16px rgba(201, 151, 56, 0.4)",
                }}
              >
                <span>Explore All Programs</span>
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="btn"
                style={{
                  borderRadius: "999px",
                  padding: "14px 30px",
                  fontWeight: 700,
                  fontSize: "0.96rem",
                  background: "transparent",
                  color: "#FAF8F5",
                  border: "1.5px solid rgba(250, 248, 245, 0.3)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Request Free Career Counseling</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

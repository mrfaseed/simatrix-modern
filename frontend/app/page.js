import Link from "next/link";
import Hero from "@/components/home/Hero";
import PartnersBar from "@/components/home/PartnersBar";
import PillarCard from "@/components/home/PillarCard";
import FlagshipPrograms from "@/components/home/FlagshipPrograms";
import BuildSection from "@/components/home/BuildSection";
import MentorsSection from "@/components/home/MentorsSection";
import WorkshopBanner from "@/components/home/WorkshopBanner";
import VerifiedPortfolioSpotlight from "@/components/home/VerifiedPortfolioSpotlight";
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

      {/* 4. Simatrix Career Pipeline Section */}
      <PillarCard />

      {/* 5. Build & Proof of Work Section */}
      <BuildSection />

      {/* 7. Practitioner Faculty & Mentors Section */}
      <MentorsSection />

      {/* 8. Free Sunday Workshops Section */}
      <WorkshopBanner />

      {/* 9. Student Outcome & Public Profile Spotlight (Sakthi Kumar) */}
      <VerifiedPortfolioSpotlight />

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

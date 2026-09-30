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
            background: "linear-gradient(135deg, #0A1128 0%, #0F172A 60%, #131F37 100%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "32px",
            padding: "74px 32px 64px 32px",
            textAlign: "center",
            maxWidth: "1060px",
            margin: "0 auto",
            boxShadow: "0 24px 60px -15px rgba(10, 17, 40, 0.35)",
            overflow: "hidden",
          }}>
            {/* Ambient Dual-Corner Glows: Sapphire + Warm Gold */}
            <div style={{
              position: "absolute",
              bottom: "-20%",
              left: "-10%",
              width: "480px",
              height: "400px",
              background: "radial-gradient(circle, rgba(0, 82, 255, 0.35) 0%, rgba(0, 82, 255, 0.08) 50%, transparent 75%)",
              filter: "blur(32px)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "480px",
              height: "400px",
              background: "radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.06) 50%, transparent 75%)",
              filter: "blur(32px)",
              pointerEvents: "none",
            }} />

            {/* Subtle Tech Grid Lines */}
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              pointerEvents: "none",
              opacity: 0.7,
            }} />

            {/* Card Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Bold Two-Line Headline */}
              <h2 style={{
                fontSize: "clamp(2.3rem, 4.6vw, 3.4rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                marginBottom: "20px",
                lineHeight: 1.18,
                letterSpacing: "-0.03em",
              }}>
                Ready to Build Skills
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #A78BFA 45%, #F59E0B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  That Actually Matter?
                </span>
              </h2>

              {/* Subtitle */}
              <p style={{
                fontSize: "1.08rem",
                color: "#94A3B8",
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
                  className="cta-exec-primary"
                >
                  <span>Explore All Programs</span>
                  <span style={{ fontSize: "1.1rem" }}>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="cta-exec-glass"
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

import Link from "next/link";
import { UPCOMING_WORKSHOPS } from "@/lib/data/workshops";

export default function WorkshopBanner() {
  const nextWorkshop = UPCOMING_WORKSHOPS[0];

  return (
    <section className="section" style={{ background: "#FFFFFF" }}>
      <div className="container">
        <div style={{
          background: "#FAF8F5",
          border: "1px solid var(--border-subtle)",
          borderRadius: "28px",
          padding: "54px 44px",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "44px",
          alignItems: "center",
          boxShadow: "var(--shadow-card)",
        }}>
          <div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
              <span style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                color: "var(--vil-gold-dim)",
                background: "var(--vil-gold-bg)",
                border: "1px solid var(--vil-gold-border)",
                padding: "4px 12px",
                borderRadius: "999px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}>
                Sunday Free Masterclass
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--vil-gold-dim)", fontWeight: 700 }}>
                ⏰ {nextWorkshop?.date}
              </span>
            </div>

            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--vil-navy)", marginBottom: "16px", lineHeight: 1.25 }}>
              {nextWorkshop?.title}
            </h2>

            <p style={{ fontSize: "1.02rem", color: "var(--text-secondary)", marginBottom: "24px", lineHeight: 1.65 }}>
              {nextWorkshop?.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
              {nextWorkshop?.topics.map((t) => (
                <span key={t} style={{
                  fontSize: "0.8rem",
                  padding: "5px 14px",
                  borderRadius: "999px",
                  background: "#FFFFFF",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--vil-navy)",
                  fontWeight: 600,
                  boxShadow: "var(--shadow-sm)",
                }}>
                  ✓ {t}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href={`/events/${nextWorkshop?.slug}`}
                className="btn btn-gold btn-lg"
                style={{
                  borderRadius: "999px",
                  padding: "13px 30px",
                  fontWeight: 800,
                  fontSize: "0.94rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Reserve Free Seat Now</span>
                <span>→</span>
              </Link>
              <Link
                href="/events"
                className="btn"
                style={{
                  borderRadius: "999px",
                  padding: "13px 26px",
                  fontWeight: 700,
                  fontSize: "0.94rem",
                  background: "#FFFFFF",
                  border: "1.5px solid var(--vil-navy)",
                  color: "var(--vil-navy)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>View All Masterclasses ({UPCOMING_WORKSHOPS.length})</span>
                <span>↗</span>
              </Link>
            </div>
          </div>

          {/* Quick Schedule Preview Card */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid var(--border-subtle)",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "var(--shadow-md)",
          }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--vil-gold-dim)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "18px" }}>
              Upcoming Community Calendar
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {UPCOMING_WORKSHOPS.map((w) => (
                <Link
                  key={w.id}
                  href={`/events/${w.slug}`}
                  className="workshop-card"
                  style={{
                    display: "block",
                    padding: "14px 16px",
                    borderRadius: "14px",
                    border: "1px solid var(--border-subtle)",
                    background: "#FAF8F5",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.76rem", color: "var(--vil-gold-dim)", marginBottom: "4px", fontWeight: 700 }}>
                    <span>{w.date}</span>
                    <span style={{ color: "var(--accent-emerald)", fontWeight: 800 }}>{w.price}</span>
                  </div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--vil-navy)" }}>
                    {w.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

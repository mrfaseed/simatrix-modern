import Link from "next/link";

export default function PartnersBar() {
  const companies = [
    { name: "Microsoft", role: "Cloud & Dev", symbol: "⊞" },
    { name: "Amazon AWS", role: "Distributed Systems", symbol: "☁" },
    { name: "Google", role: "Full Stack & AI", symbol: "G" },
    { name: "Razorpay", role: "Fintech Platforms", symbol: "⚡" },
    { name: "Zoho", role: "SaaS Architecture", symbol: "Z" },
    { name: "Flipkart", role: "High-Scale Ecom", symbol: "🛍" },
    { name: "Swiggy", role: "Microservices", symbol: "🛵" },
    { name: "Freshworks", role: "Enterprise CRM", symbol: "✦" },
    { name: "TCS", role: "Enterprise Tech", symbol: "⚙" },
  ];

  return (
    <section style={{
      background: "#FFFFFF",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      padding: "36px 0",
      position: "relative",
    }}>
      <div className="container">
        <div style={{
          textAlign: "center",
          marginBottom: "20px",
        }}>
          <span style={{
            fontSize: "0.74rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--vil-gold-dim)",
          }}>
            Mentors, Alumni & Hiring Partners From Leading Tech Teams
          </span>
        </div>

        {/* Company Logo Badges */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "18px",
          flexWrap: "wrap",
        }}>
          {companies.map((comp) => (
            <div
              key={comp.name}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 18px",
                borderRadius: "999px",
                background: "#FAF8F5",
                border: "1px solid var(--border-subtle)",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "var(--vil-navy)",
                color: "#FAF8F5",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.72rem",
                fontWeight: 900,
              }}>
                {comp.symbol}
              </span>
              <div>
                <span style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--vil-navy)" }}>
                  {comp.name}
                </span>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginLeft: "6px" }}>
                  • {comp.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

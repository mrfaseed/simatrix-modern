import Link from "next/link";
import { UPCOMING_WORKSHOPS } from "@/lib/data/workshops";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Free Workshops & Tech Events | Simatrix Academy",
  description: "Join free Sunday workshops, live coding bootcamps, and career masterclasses.",
};

export default function EventsPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge" style={{ background: "rgba(99, 102, 241, 0.15)", borderColor: "rgba(99, 102, 241, 0.3)", color: "#a5b4fc" }}>
            Community Workshops
          </div>
          <h1 className="section-title">
            Upcoming <span className="gradient-text">Workshops & Events</span>
          </h1>
          <p className="section-desc">
            Free weekend live sessions. Build real mini-apps, automate tasks, and get real-time answers from practicing engineers.
          </p>
        </div>

        <div className="grid-3">
          {UPCOMING_WORKSHOPS.map((w) => (
            <Card key={w.id} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
                <Badge variant="emerald">{w.price}</Badge>
                <span style={{ fontSize: "0.82rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
                  {w.date}
                </span>
              </div>

              <h2 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "10px" }}>
                {w.title}
              </h2>

              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "18px", flexGrow: 1 }}>
                {w.description}
              </p>

              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                👨‍🏫 Speaker: {w.speaker}
              </div>

              <Button href={`/events/${w.slug}`} variant="primary" style={{ width: "100%" }}>
                Register Free Seat →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

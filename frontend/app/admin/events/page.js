import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { UPCOMING_WORKSHOPS } from "@/lib/data/workshops";

export const metadata = {
  title: "Manage Events | Admin | Simatrix",
};

export default function AdminEventsPage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div>
          <h1 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "8px" }}>Sunday Workshops & Webinars</h1>
          <p style={{ color: "var(--text-secondary)" }}>Manage registration caps, speakers, and live stream links.</p>
        </div>
        <Button variant="glow" size="sm">+ Schedule New Workshop</Button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {UPCOMING_WORKSHOPS.map((w) => (
          <Card key={w.id} style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", color: "#fff" }}>{w.title}</h3>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "4px" }}>
                {w.date} • {w.registeredCount} Registered Attendees • Speaker: {w.speaker}
              </div>
            </div>
            <Button href={`/events/${w.slug}`} variant="secondary" size="sm">
              Public Page →
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

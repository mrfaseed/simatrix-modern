import Link from "next/link";
import { notFound } from "next/navigation";
import { UPCOMING_WORKSHOPS } from "@/lib/data/workshops";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import WorkshopRegisterForm from "@/components/events/WorkshopRegisterForm";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const workshop = UPCOMING_WORKSHOPS.find((w) => w.slug === slug);
  if (!workshop) return { title: "Workshop Not Found | Simatrix" };
  return {
    title: `${workshop.title} | Free Workshop | Simatrix Academy`,
  };
}

export default async function WorkshopDetailPage({ params }) {
  const { slug } = await params;
  const workshop = UPCOMING_WORKSHOPS.find((w) => w.slug === slug);

  if (!workshop) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/events" style={{ color: "var(--text-secondary)" }}>Events</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{workshop.title}</span>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
          <Badge variant="emerald">{workshop.price}</Badge>
          <Badge variant="primary">{workshop.badge}</Badge>
          <span style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontWeight: 600 }}>⏰ {workshop.date}</span>
        </div>

        <h1 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
          {workshop.title}
        </h1>

        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "30px", lineHeight: 1.6 }}>
          {workshop.description}
        </p>

        <Card style={{ padding: "28px", marginBottom: "30px" }}>
          <h3 style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "14px" }}>What You Will Learn Hands-On:</h3>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
            {workshop.topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Card>

        <Card style={{ padding: "30px", background: "rgba(99, 102, 241, 0.08)", borderColor: "var(--border-focus)" }}>
          <h2 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "8px" }}>Reserve Your Free Spot</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
            Seats are capped to ensure mentor Q&A availability. Instant Zoom/Google Meet link sent via email.
          </p>

          <WorkshopRegisterForm />
        </Card>
      </div>
    </div>
  );
}

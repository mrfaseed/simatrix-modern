import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export async function generateMetadata({ params }) {
  const { topic } = await params;
  return {
    title: `${topic.replace(/-/g, " ").toUpperCase()} Questions | Simatrix Academy`,
  };
}

export default async function InterviewTopicPage({ params }) {
  const { topic } = await params;
  const title = topic
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const sampleQAs = [
    {
      q: "Explain how React batching works in React 18 & 19 and why automatic batching matters.",
      a: "React batches multiple state updates into a single re-render for performance. Before React 18, batching only occurred within React event handlers. In modern versions, automatic batching applies everywhere: inside promises, setTimeout, native event handlers, and fetch callbacks.",
    },
    {
      q: "What is the difference between useEffect and useLayoutEffect?",
      a: "useEffect runs asynchronously after the DOM mutations have been painted onto the screen, avoiding blocking visual rendering. useLayoutEffect runs synchronously immediately after DOM mutations but before the browser paints, ideal for measuring DOM layout.",
    },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "840px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/career" style={{ color: "var(--text-secondary)" }}>Career</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/career/interview-prep" style={{ color: "var(--text-secondary)" }}>Interview Prep</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{title}</span>
        </div>

        <h1 className="section-title" style={{ marginBottom: "16px" }}>
          {title} <span className="gradient-text">Questions & Answers</span>
        </h1>
        <p className="section-desc" style={{ marginBottom: "36px" }}>
          Study key concepts, typical interviewer follow-up questions, and optimal answering strategies.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {sampleQAs.map((item, idx) => (
            <Card key={item.q} style={{ padding: "28px" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontWeight: 700, marginBottom: "8px" }}>
                QUESTION {idx + 1}
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "16px", lineHeight: 1.4 }}>
                {item.q}
              </h3>
              <div style={{
                background: "rgba(255, 255, 255, 0.03)",
                padding: "18px",
                borderRadius: "var(--radius-sm)",
                borderLeft: "3px solid var(--primary)",
                color: "var(--text-secondary)",
                fontSize: "0.92rem",
                lineHeight: 1.6,
              }}>
                <strong style={{ color: "#fff", display: "block", marginBottom: "6px" }}>Model Answer:</strong>
                {item.a}
              </div>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <Button href="/career/mock-interviews" variant="glow" size="lg">
            Book a Live 1-on-1 Mock Interview with a Mentor →
          </Button>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: `Assessment: ${id.replace(/-/g, " ").toUpperCase()} | Simatrix`,
  };
}

export default async function AssessmentDetailPage({ params }) {
  const { id } = await params;
  const title = id
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="section" style={{ paddingTop: "40px" }}>
      <div className="container" style={{ maxWidth: "780px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "18px" }}>
          <Link href="/practice" style={{ color: "var(--text-secondary)" }}>Practice</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/practice/assessments" style={{ color: "var(--text-secondary)" }}>Assessments</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{title}</span>
        </div>

        <Card style={{ padding: "36px" }}>
          <h1 style={{ fontSize: "2rem", color: "#fff", marginBottom: "16px" }}>
            {title}
          </h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "24px", lineHeight: 1.6 }}>
            This is a timed proctored evaluation. Once initiated, you will have 60 minutes to complete the coding challenges and multiple choice technical questions.
          </p>

          <div style={{
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "var(--radius-md)",
            padding: "20px",
            marginBottom: "30px",
          }}>
            <h3 style={{ fontSize: "1rem", color: "#fff", marginBottom: "12px" }}>Exam Rules & Instructions:</h3>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <li>Ensure stable internet connectivity throughout the duration.</li>
              <li>Plagiarism detection is active on all code submissions.</li>
              <li>Scores above 75% automatically grant a verified digital badge on your Simatrix student profile.</li>
            </ul>
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
            <Button href="/login" variant="glow" size="lg">
              Begin Assessment Now
            </Button>
            <Button href="/practice/assessments" variant="secondary" size="lg">
              Back to Catalog
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

import Link from "next/link";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Aptitude & Reasoning Drills | Simatrix Academy",
  description: "Quantitative, logical, and verbal aptitude preparation modules for company entrance tests.",
};

const MODULES = [
  { title: "Quantitative Aptitude", topics: ["Percentages & Profit/Loss", "Time, Speed & Distance", "Permutation & Combination", "Probability"], tests: 15 },
  { title: "Logical Reasoning", topics: ["Data Interpretation", "Syllogisms & Deductions", "Seating Arrangements", "Pattern Sequencing"], tests: 12 },
  { title: "Verbal Ability", topics: ["Reading Comprehension", "Sentence Correction", "Vocabulary in Context", "Grammar Drills"], tests: 10 },
];

export default function AptitudePage() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/career" style={{ color: "var(--text-secondary)" }}>Career</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>Aptitude & Reasoning</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>Placement Round 1</Badge>
          <h1 className="section-title">
            Aptitude & Logical <span className="gradient-text">Reasoning Drills</span>
          </h1>
          <p className="section-desc">
            Many initial hiring filters test speed and accuracy on quantitative problems. Practice with timed mock assessments.
          </p>
        </div>

        <div className="grid-3">
          {MODULES.map((m) => (
            <Card key={m.title} style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>{m.title}</h2>
              <div style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontWeight: 700, marginBottom: "14px" }}>
                {m.tests} Timed Practice Tests
              </div>
              <ul style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1 }}>
                {m.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <Button href="/login" variant="secondary" style={{ width: "100%" }}>
                Launch Practice Test →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

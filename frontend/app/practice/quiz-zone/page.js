import Link from "next/link";
import { PRACTICE_MODULES } from "@/lib/data/practice";
import PracticeCard from "@/components/practice/PracticeCard";
import Badge from "@/components/common/Badge";

export const metadata = {
  title: "QuizZone | Fast Concept Checks | Simatrix Academy",
  description: "Rapid technical MCQs across React, Python, SQL, and System Design.",
};

export default function QuizZonePage() {
  const quizData = PRACTICE_MODULES.find((m) => m.id === "quiz-zone");

  return (
    <div className="section">
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <Link href="/practice" style={{ color: "var(--text-secondary)" }}>Practice</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>QuizZone</span>
        </div>

        <div className="section-header" style={{ textAlign: "left", margin: "0 0 40px 0" }}>
          <Badge variant="primary" style={{ marginBottom: "12px" }}>QuizZone</Badge>
          <h1 className="section-title">
            Rapid Technical <span className="gradient-text">MCQ Rounds</span>
          </h1>
          <p className="section-desc">
            Test and validate core mental models with timed, interview-grade concept quizzes.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {quizData?.sampleProblems.map((problem) => (
            <PracticeCard
              key={problem.id}
              problem={problem}
              moduleSlug="quiz-zone"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { use, useState } from "react";
import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function QuizQuestionPage({ params }) {
  const unwrappedParams = use(params);
  const { quizId } = unwrappedParams;
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const title = quizId
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const options = [
    "Reconciliation calculates the minimal set of DOM updates needed using a diffing algorithm.",
    "Reconciliation recreates the entire HTML body on every setState call.",
    "Reconciliation connects React directly to the browser SQL database.",
    "Reconciliation compiles JSX into machine code ahead of time.",
  ];
  const correctIdx = 0;

  return (
    <div className="section" style={{ paddingTop: "40px" }}>
      <div className="container" style={{ maxWidth: "720px" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "18px" }}>
          <Link href="/practice" style={{ color: "var(--text-secondary)" }}>Practice</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/practice/quiz-zone" style={{ color: "var(--text-secondary)" }}>QuizZone</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#fff" }}>{title}</span>
        </div>

        <Card style={{ padding: "32px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontWeight: 700, marginBottom: "8px" }}>
            QUESTION 1 OF 5 • TIMED 45s
          </div>
          <h1 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "24px", lineHeight: 1.4 }}>
            In modern React architecture, what precisely is the purpose of the Reconciliation process?
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {options.map((opt, idx) => {
              let bg = "rgba(255, 255, 255, 0.03)";
              let border = "var(--border-subtle)";
              if (selectedOption === idx) {
                border = "var(--border-focus)";
                bg = "rgba(99, 102, 241, 0.15)";
              }
              if (submitted) {
                if (idx === correctIdx) {
                  border = "rgba(16, 185, 129, 0.6)";
                  bg = "rgba(16, 185, 129, 0.15)";
                } else if (selectedOption === idx) {
                  border = "rgba(244, 63, 94, 0.6)";
                  bg = "rgba(244, 63, 94, 0.15)";
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => !submitted && setSelectedOption(idx)}
                  style={{
                    textAlign: "left",
                    padding: "16px 20px",
                    borderRadius: "var(--radius-md)",
                    background: bg,
                    border: `1px solid ${border}`,
                    color: "#fff",
                    fontSize: "0.95rem",
                    cursor: submitted ? "default" : "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--text-muted)", marginRight: "12px" }}>
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {!submitted ? (
            <Button
              onClick={() => selectedOption !== null && setSubmitted(true)}
              variant="glow"
              disabled={selectedOption === null}
              style={{ width: "100%" }}
            >
              Submit Answer
            </Button>
          ) : (
            <div style={{ textAlign: "center" }}>
              <div style={{
                color: selectedOption === correctIdx ? "var(--accent-emerald)" : "var(--accent-rose)",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginBottom: "16px",
              }}>
                {selectedOption === correctIdx ? "🎉 Correct! +40 XP Earned" : "Incorrect. The correct answer is A."}
              </div>
              <Button href="/practice/quiz-zone" variant="primary">
                Continue to Next Question →
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
